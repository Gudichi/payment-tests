import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type ProductType = "MAIN_OFFER" | "BUMP_1" | "BUMP_2" | "OTO_1" | "OTO_2";

async function sendToKlaviyo(email: string, productType: ProductType, amount: number, currency: string) {
  if (!email) return;
  const payload = {
    data: {
      type: "event",
      attributes: {
        metric: { name: `purchased_${productType.toLowerCase()}` },
        properties: {
          product_type: productType,
          amount,
          currency,
        },
        profile: {
          email,
        },
        time: new Date().toISOString(),
      },
    },
  };

  const res = await fetch("https://a.klaviyo.com/api/events/", {
    method: "POST",
    headers: {
      Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Klaviyo API error", res.status, res.statusText, text);
    throw new Error(`Klaviyo request failed with status ${res.status}`);
  }
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
  const email = metadata.email || paymentIntent.receipt_email || "";

  if (!email) {
    return NextResponse.json({ received: true });
  }

  const amount = paymentIntent.amount;
  const currency = paymentIntent.currency;

  const tasks: Promise<void>[] = [];

  if (metadata.main_offer === "true") {
    tasks.push(sendToKlaviyo(email, "MAIN_OFFER", amount, currency));
  }
  if (metadata.bump_1 === "true") {
    tasks.push(sendToKlaviyo(email, "BUMP_1", amount, currency));
  }
  if (metadata.bump_2 === "true") {
    tasks.push(sendToKlaviyo(email, "BUMP_2", amount, currency));
  }
  if (metadata.oto_1 === "true") {
    tasks.push(sendToKlaviyo(email, "OTO_1", amount, currency));
  }
  if (metadata.oto_2 === "true") {
    tasks.push(sendToKlaviyo(email, "OTO_2", amount, currency));
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
