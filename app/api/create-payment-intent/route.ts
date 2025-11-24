import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const { data } = await req.json();
  const {
    amount,
    metadata = {},
    paymentIntentId,
    email,
    firstName,
    name,
  } = data;
  const normalizedEmail = (email || (metadata as any).email || "").trim();

  if (!normalizedEmail) {
    return NextResponse.json(
      { error: "Email is required to create a payment intent" },
      { status: 400 }
    );
  }

  if (amount <= 0) {
    return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
  }

  try {
    const normalizedMetadata = Object.entries(metadata).reduce<
      Record<string, string>
    >((acc, [key, value]) => {
      if (typeof value === "undefined" || value === null) {
        return acc;
      }
      acc[key] = String(value);
      return acc;
    }, {});

    const amountInCents = Math.trunc(Number(amount) * 100);
    const firstNameNormalized =
      (firstName || "").toString().trim() ||
      ((name || (metadata as any).name || "")
        .toString()
        .trim()
        .split(" ")[0] ?? "");
    console.log(
      "create-payment-intent incoming:",
      JSON.stringify({
        amount,
        email: normalizedEmail,
        firstNameNormalized,
        metadata,
      })
    );
    const selectedBumpsRaw =
      (typeof normalizedMetadata.selected_bumps === "string" && normalizedMetadata.selected_bumps) || "";
    const selectedBumps = selectedBumpsRaw
      .split(",")
      .map((b) => b.trim().toLowerCase())
      .filter(Boolean);
    const bump1Selected =
      selectedBumps.includes("signal8") ||
      selectedBumps.includes("bump1") ||
      selectedBumps.includes("bump_1") ||
      selectedBumps.includes("nekabroj");
    const bump2Selected =
      selectedBumps.includes("textmagic") ||
      selectedBumps.includes("bump2") ||
      selectedBumps.includes("bump_2") ||
      selectedBumps.includes("lokacijskimagnetizam");

    const baseMetadata: Record<string, string> = {
      order_total_eur: Number(amount).toFixed(2),
      email: normalizedEmail,
      first_name: firstNameNormalized,
      main_offer: "true",
      bump_1: bump1Selected ? "true" : "false",
      bump_2: bump2Selected ? "true" : "false",
    };

    const { email: _ignoredEmail, first_name: _ignoredFirstName, ...cleanedMetadata } = normalizedMetadata;

    let paymentIntent: Stripe.PaymentIntent;

    if (paymentIntentId) {
      try {
        await stripe.paymentIntents.update(paymentIntentId, {
          amount: amountInCents,
          metadata: { ...cleanedMetadata, ...baseMetadata },
        });
        paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
      } catch (error) {
        console.error("Update payment intent failed, creating new.", error);
        paymentIntent = await stripe.paymentIntents.create({
          amount: amountInCents,
          currency: "eur",
          automatic_payment_methods: { enabled: true },
          setup_future_usage: "off_session",
          metadata: { ...cleanedMetadata, ...baseMetadata },
        });
      }
    } else {
      paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: "eur",
        automatic_payment_methods: { enabled: true },
        setup_future_usage: "off_session",
        metadata: { ...cleanedMetadata, ...baseMetadata },
      });
    }

    return NextResponse.json(
      {
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("payment-intent error", error);
    return NextResponse.json({ error: "Failed to create payment intent" }, { status: 400 });
  }
}
