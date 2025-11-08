import { OneClickUpsellButton } from "@/components/one-click-upsell";
import { redirect } from "next/navigation";
import Stripe from "stripe";

const OTO_PRICE_ID = process.env.STRIPE_OTO1_PRICE_ID;

type Props = {
  searchParams: Promise<{
    payment_intent?: string;
  }>;
};

export default async function OtoPage({ searchParams }: Props) {
  if (!OTO_PRICE_ID) {
    throw new Error("STRIPE_OTO1_PRICE_ID nije postavljen.");
  }

  const resolvedSearchParams = await searchParams;
  const paymentIntentId = resolvedSearchParams.payment_intent;

  if (!paymentIntentId) {
    redirect("/portal");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const price = await stripe.prices.retrieve(OTO_PRICE_ID);
  const amount = price.unit_amount ? price.unit_amount / 100 : null;

  return (
    <div className="min-h-screen bg-[#FFF7F8] py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10 text-center border border-[#F8D4E2]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C0275B] font-semibold mb-4">
          Posebna ponuda
        </p>
        <h1 className="text-4xl font-serif text-[#6B0F3B] mb-6">
          Premium Ljubavni Ritual
        </h1>
        <p className="text-lg text-[#4D1F2A] leading-relaxed mb-6">
          Iskoristi ovu jedinstvenu ponudu i dodaj brzi Premium ritual u svoj
          program bez dodatnih formulara. Jedan klik i sadržaj je odmah tvoj.
        </p>
        <div className="bg-[#FFF4F7] border border-[#F1BED1] rounded-2xl p-6 space-y-2 mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[#C0275B]">
            Danas samo
          </p>
          <p className="text-5xl font-black text-[#6B0F3B]">
            {amount ? `€${amount.toFixed(2)}` : "Posebna cijena"}
          </p>
          <p className="text-sm text-[#7A3E55]">
            Ponuda vrijedi dok si na ovoj stranici
          </p>
        </div>

        <ul className="text-left text-[#47222F] space-y-3 mb-10">
          <li>• Audio ritual za trenutnu aktivaciju magnetičnosti</li>
          <li>• Mini skripte za moćne afirmacije i mindset reset</li>
          <li>• Brzi vodič kako iskoristiti ritual u 5 minuta</li>
        </ul>

        <OneClickUpsellButton paymentIntentId={paymentIntentId} />

        <p className="mt-6 text-sm text-[#7A3E55]">
          Odbijanjem se neće dirati postojeći pristup glavnom programu.
        </p>
      </div>
    </div>
  );
}
