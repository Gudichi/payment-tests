import { ClientEvent } from "@/components/client-event";
import { PostHogThankYouTracker } from "@/components/posthog-thank-you-tracker";
import { clerkClient } from "@clerk/nextjs/server";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import Stripe from "stripe";

export type SearchParams = {
  payment_intent: string;
  payment_intent_client_secret: string;
  redirect_status: string;
};

const createUserOnClerk = async (email: string) => {
  const userList = await clerkClient.users.getUserList({ emailAddress: [email] });
  if (userList.totalCount > 0) {
    console.log("Korisnik već postoji:", email);
    return;
  }
  const user = await clerkClient.users.createUser({
    emailAddress: [email],
  });
  return user;
};

const processPaymentIntent = async (paymentIntentId: string) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
    expand: ["latest_charge"],
  });

  if (paymentIntent?.status !== "succeeded") {
    return null;
  }

  console.log("Plaćanje uspješno");
  const charge = paymentIntent.latest_charge as Stripe.Charge;
  if (!charge) {
    return null;
  }
  if (!charge.billing_details?.email) {
    return null;
  }

  try {
    await createUserOnClerk(charge.billing_details.email);
  } catch (error) {
    console.error("Greška kod kreiranja korisnika:", error);
  }

  return paymentIntent;
};

export default async function CompletionPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { payment_intent, redirect_status } = searchParams;
  let successful = false;
  let paymentIntent = null;

  if (redirect_status === "succeeded") {
    try {
      paymentIntent = await processPaymentIntent(payment_intent);
      successful = true;
      if (paymentIntent?.id) {
        redirect(`/oto1?payment_intent=${paymentIntent.id}`);
      }
    } catch (error) {
      console.error("Greška kod obrade plaćanja:", error);
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-serif text-[#64113F] mb-4">
            Čestitamo! Plaćanje je uspješno!
          </h1>

          <p className="text-lg text-[#64113F] opacity-80">
            Vaša kupovina programa "Rečenice Strasti" je uspješno završena!
          </p>

          <p className="text-base text-[#5A3147] mt-4 leading-relaxed">
            U sljedećih nekoliko minuta primit ćete email s pristupnim
            podacima i detaljima za korištenje glavnog programa. Provjerite i
            spam/promotions mapu ako poruka ne stigne odmah.
          </p>

          {paymentIntent && (
            <div className="p-4 rounded-md">
              <p className="text-sm text-gray-600">
                ID transakcije:{" "}
                <span className="font-mono text-xs">{paymentIntent.id}</span>
              </p>
            </div>
          )}

          <div className="mt-10 mb-12 space-y-6">
            <div>
              <Link
                href="/portal"
                className="inline-flex items-center justify-center rounded-lg bg-[#EF798A] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#e06b7a]"
              >
                Idi u svoj program
              </Link>
              <p className="mt-3 text-sm text-[#5A3147]">
                Klikni kako bi završila registraciju i ulogirala se u aplikaciju.
              </p>
            </div>

            {paymentIntent?.id && (
              <div className="rounded-2xl border border-[#F4C2D7] bg-[#FFF7F9] p-6 text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-[#D03660] font-semibold">
                  Još jedna prilika
                </p>
                <h2 className="text-2xl font-serif text-[#64113F] mt-2 mb-3">
                  Premium Ljubavni Ritual
                </h2>
                <p className="text-sm text-[#5A3147] mb-4">
                  Dodaj brzi ritual jednim klikom. Plaćanje ide preko iste kartice,
                  bez dodatnog formulara.
                </p>
                <Link
                  href={`/oto?payment_intent=${paymentIntent.id}`}
                  className="inline-flex items-center justify-center rounded-lg bg-[#A81F5F] px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-[#901a51]"
                >
                  Pogledaj ponudu
                </Link>
              </div>
            )}
          </div>

          <p className="text-sm text-gray-500">
            Imate pitanja? Kontaktirajte nas na recenicestrasti@gmail.com
          </p>
        </div>
      </div>
      {successful && paymentIntent && (
        <ClientEvent
          eventCode="Purchase"
          options={{ value: paymentIntent.amount / 100, currency: "EUR" }}
        />
      )}
      <PostHogThankYouTracker
        amount={paymentIntent?.amount ? paymentIntent.amount / 100 : 47}
        currency={(paymentIntent?.currency || "eur").toUpperCase()}
      />
    </div>
  );
}
