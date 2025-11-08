import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const OTO_PRICE_ID = process.env.STRIPE_OTO1_PRICE_ID;

export async function POST(req: NextRequest) {
  if (!OTO_PRICE_ID) {
    return NextResponse.json(
      { error: "Missing STRIPE_OTO1_PRICE_ID env variable." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const { paymentIntentId } = await req.json();

  if (!paymentIntentId) {
    return NextResponse.json(
      { error: "paymentIntentId is required." },
      { status: 400 }
    );
  }

  try {
    const originalIntent = await stripe.paymentIntents.retrieve(
      paymentIntentId,
      {
        expand: ["latest_charge", "payment_method"],
      }
    );

    const paymentMethodId = originalIntent.payment_method;
    if (typeof paymentMethodId !== "string") {
      return NextResponse.json(
        { error: "Could not reuse the original payment method." },
        { status: 400 }
      );
    }

    let customerId: string | null = null;
    if (typeof originalIntent.customer === "string") {
      customerId = originalIntent.customer;
    } else if (originalIntent.customer?.id) {
      customerId = originalIntent.customer.id;
    }

    if (!customerId) {
      const charge = originalIntent.latest_charge as Stripe.Charge | null;
      const email =
        originalIntent.receipt_email ||
        (charge?.billing_details.email ?? undefined) ||
        originalIntent.metadata?.customer_email;
      const name =
        charge?.billing_details.name ?? originalIntent.metadata?.customer_name;

      const customer = await stripe.customers.create({
        email: email || undefined,
        name: name || undefined,
      });
      customerId = customer.id;
      await stripe.paymentMethods.attach(paymentMethodId, {
        customer: customerId,
      });
      await stripe.paymentIntents.update(paymentIntentId, {
        customer: customerId,
      });
    } else {
      const paymentMethod = await stripe.paymentMethods.retrieve(
        paymentMethodId
      );
      if (paymentMethod.customer !== customerId) {
        await stripe.paymentMethods.attach(paymentMethodId, {
          customer: customerId,
        });
      }
    }

    const price = await stripe.prices.retrieve(OTO_PRICE_ID);
    if (!price.unit_amount || !price.currency) {
      return NextResponse.json(
        { error: "OTO price is missing amount or currency." },
        { status: 500 }
      );
    }

    const upsellIntent = await stripe.paymentIntents.create({
      amount: price.unit_amount,
      currency: price.currency,
      customer: customerId!,
      payment_method: paymentMethodId,
      off_session: true,
      confirm: true,
      metadata: {
        source: "oto1_one_click",
        original_payment_intent: paymentIntentId,
        price_id: OTO_PRICE_ID,
      },
      description: price.nickname ?? "OTO 1 Upsell",
    });

    return NextResponse.json(
      {
        paymentIntentId: upsellIntent.id,
        status: upsellIntent.status,
        receiptUrl:
          upsellIntent.charges?.data[0]?.receipt_url ||
          (upsellIntent.latest_charge as Stripe.Charge | undefined)
            ?.receipt_url ||
          null,
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error.code === "authentication_required") {
      return NextResponse.json(
        {
          error:
            "Plaćanje zahtijeva dodatnu autentifikaciju. Molimo prijavite se ponovo u checkout.",
        },
        { status: 409 }
      );
    }

    console.error("One-click upsell failed:", error);
    return NextResponse.json(
      { error: "Nismo mogli dovršiti naplatu upsella." },
      { status: 500 }
    );
  }
}
