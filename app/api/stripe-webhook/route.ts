import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type ProductType = "MAIN_OFFER" | "BUMP_1" | "BUMP_2" | "OTO_1" | "OTO_2";

function isValidEmailBasic(email: string) {
  if (!email || typeof email !== "string") return false;
  return email.includes("@") && email.includes(".");
}

async function sendToKlaviyo(
  email: string,
  productType: ProductType,
  amount: number,
  currency: string,
  firstName?: string
) {
  if (!isValidEmailBasic(email)) {
    console.warn("Skipping Klaviyo event – invalid email:", email);
    return;
  }

  const metricName = `purchased_${productType.toLowerCase()}`;
  const value = amount / 100;
  const profileAttributes: Record<string, any> = { email };
  if (firstName) {
    profileAttributes.first_name = firstName;
  }

  const payload = {
    data: {
      type: "event",
      attributes: {
        time: new Date().toISOString(),
        value,
        value_currency: currency.toUpperCase(),
        metric: {
          data: {
            type: "metric",
            attributes: {
              name: metricName,
            },
          },
        },
        profile: {
          data: {
            type: "profile",
            attributes: profileAttributes,
          },
        },
        properties: {
          product_type: productType,
          amount,
          currency,
        },
      },
    },
  };

  const res = await fetch("https://a.klaviyo.com/api/events/", {
    method: "POST",
    headers: {
      Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      revision: "2024-02-15",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Klaviyo API error", res.status, res.statusText, text);

    if (res.status === 400 && text.includes("Invalid email address")) {
      console.warn("Skipping Klaviyo event - invalid email:", email);
      return;
    }

    throw new Error(`Klaviyo request failed with status ${res.status}`);
  }

  console.log("Sent Klaviyo event", metricName, "for", email, firstName ?? "");
}

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing stripe signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err: any) {
    console.error("Webhook signature verification failed.", err);
    return NextResponse.json({ error: "Webhook Error" }, { status: 400 });
  }

  if (event.type !== "payment_intent.succeeded") {
    return NextResponse.json({ received: true });
  }

  const paymentIntent = event.data.object as Stripe.PaymentIntent;
  const metadata = paymentIntent.metadata || {};
  const email =
    metadata.email ||
    paymentIntent.receipt_email ||
    (paymentIntent.charges?.data?.[0]?.billing_details?.email ?? "");

  if (!email) {
    return NextResponse.json({ received: true });
  }

  const firstNameFromMetadata = (metadata.first_name || metadata.firstName || "") as string;
  const firstNameFromBilling =
    (paymentIntent.charges?.data?.[0]?.billing_details?.name ?? "")
      .toString()
      .split(" ")[0] || "";
  const firstName = firstNameFromMetadata || firstNameFromBilling || "";

  const amount = paymentIntent.amount;
  const currency = paymentIntent.currency;
  console.log("Stripe webhook metadata:", JSON.stringify(metadata));
  console.log("Stripe webhook selected_bumps:", metadata.selected_bumps);
  const selectedBumpsRaw = (metadata.selected_bumps || "").toString().toLowerCase();
  const hasBump1 =
    metadata.bump_1 === "true" ||
    selectedBumpsRaw.includes("bump1") ||
    selectedBumpsRaw.includes("nekabroj");
  const hasBump2 =
    metadata.bump_2 === "true" ||
    selectedBumpsRaw.includes("bump2") ||
    selectedBumpsRaw.includes("lokacijskimagnetizam");

  const tasks: Promise<void>[] = [];

  if (metadata.main_offer === "true") {
    tasks.push(sendToKlaviyo(email, "MAIN_OFFER", amount, currency, firstName));
  }
  if (metadata.bump_1 === "true" || hasBump1) {
    tasks.push(sendToKlaviyo(email, "BUMP_1", amount, currency, firstName));
  }
  if (metadata.bump_2 === "true" || hasBump2) {
    tasks.push(sendToKlaviyo(email, "BUMP_2", amount, currency, firstName));
  }
  if (metadata.oto_1 === "true") {
    tasks.push(sendToKlaviyo(email, "OTO_1", amount, currency, firstName));
  }
  if (metadata.oto_2 === "true") {
    tasks.push(sendToKlaviyo(email, "OTO_2", amount, currency, firstName));
  }

  try {
    if (tasks.length > 0) {
      await Promise.all(tasks);
    }
  } catch (err) {
    console.error("Error sending events to Klaviyo", err);
    return NextResponse.json({ error: "Failed to send events to Klaviyo" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
