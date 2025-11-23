import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const paymentIntentId = searchParams.get("payment_intent");

  if (!paymentIntentId) {
    return NextResponse.json({ error: "payment_intent is required" }, { status: 400 });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return NextResponse.json({ paymentIntent }, { status: 200 });
  } catch (error: any) {
    console.error("Failed to retrieve payment intent:", error);
    return NextResponse.json({ error: "Failed to retrieve payment intent" }, { status: 500 });
  }
}

