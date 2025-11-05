import { ClientEvent } from "@/components/client-event";
import { PostHogThankYouTracker } from "@/components/posthog-thank-you-tracker";
import { clerkClient } from "@clerk/nextjs/server";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Gift,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Stripe from "stripe";

export type SearchParams = {
  payment_intent: string;
  payment_intent_client_secret: string;
  redirect_status: string;
};

const createUserOnClerk = async (email: string) => {
  const clerk = await clerkClient();
  const userList = await clerk.users.getUserList({ emailAddress: [email] });
  if (userList.totalCount > 0) {
    console.log("Korisnik već postoji:", email);
    return;
  }
  const user = await clerk.users.createUser({
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
  searchParams: Promise<SearchParams>;
}) {
  const { payment_intent, redirect_status } = await searchParams;
  let successful = false;
  let paymentIntent = null;

  if (redirect_status === "succeeded") {
    try {
      paymentIntent = await processPaymentIntent(payment_intent);
      successful = true;
    } catch (error) {
      console.error("Greška kod obrade plaćanja:", error);
    }
  }

  return (
    <div className="min-h-screen bg-rose-50/40 font-sans">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-emerald-500" />
          </div>

          <h1 className="text-3xl md:text-4xl font-serif text-[#64113F] mb-4">
            Čestitamo! Plaćanje je uspješno!
          </h1>

          <p className="text-lg text-[#64113F] opacity-80">
            Vaša kupovina programa "Rečenice Strasti" je zabilježena. Prije nego
            što krenete dalje, pripremili smo ekskluzivnu ponudu koja je dostupna
            samo sada.
          </p>

          {paymentIntent && (
            <div className="p-4 rounded-md mt-6 bg-white/60 border border-rose-100">
              <p className="text-sm text-gray-600">
                ID transakcije:{" "}
                <span className="font-mono text-xs">{paymentIntent.id}</span>
              </p>
            </div>
          )}
        </div>

        <div className="bg-white border border-rose-100 rounded-3xl shadow-lg p-6 md:p-10 mt-12">
          <div className="text-center mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-100 text-[#64113F] text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Ekskluzivna ponuda samo nakon kupovine
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#64113F]">
              Mini program "Vikend Reset" za samo 1 €
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Brza trodnevna rutinska radionica koja ti pomaže učvrstiti nove
              vještine i dobiti dodatne primjere poruka koje možeš odmah
              koristiti. Dostupno je samo sada kao zahvalnica na tvoju kupovinu.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[ 
              {
                icon: <Gift className="w-6 h-6 text-[#EF798A]" />, 
                title: "Dodatni skripti i predlošci",
                description:
                  "20 svježih poruka i primjera za brzu implementaciju.",
              },
              {
                icon: <Sparkles className="w-6 h-6 text-[#EF798A]" />, 
                title: "3-dnevni plan korak-po-korak",
                description:
                  "Svaki dan dobivaš konkretne zadatke i mini video lekcije.",
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#EF798A]" />, 
                title: "Jamstvo bez rizika",
                description:
                  "Ako ti se ne svidi, javi se i vraćamo 1 € bez pitanja.",
              },
            ].map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-rose-50/60 border border-rose-100 rounded-2xl p-6 text-left flex flex-col gap-3"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm">
                  {icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#64113F]">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm uppercase tracking-wide text-[#64113F] font-semibold">
              Posebna cijena vrijedi dok si na ovoj stranici
            </p>
            <p className="text-4xl font-bold text-[#EF798A] mt-2">
              Samo 1 € (jednokratno)
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Redovna cijena mini programa je 17 €, ali sada ga možeš dobiti kao
              loyalty bonus.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/upsell"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#EF798A] text-white font-semibold text-base shadow-lg shadow-rose-200 hover:bg-[#e06b7a] transition"
              >
                Da, želim mini program za 1 €
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/prijava"
                className="text-sm text-gray-600 underline underline-offset-4"
              >
                Ne hvala, vodi me u aplikaciju
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500">
            Imaš pitanja? Kontaktiraj nas na recenicestrasti@gmail.com
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
