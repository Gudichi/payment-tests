import PaymentElements from "@/components/payment-elements";
import Link from "next/link";
import { Gift, Sparkles, Target, Timer, ShieldCheck } from "lucide-react";

const UPSELL_PRICE = 1;

const BENEFITS = [
  {
    icon: <Sparkles className="w-6 h-6 text-[#EF798A]" />,
    title: "Intenzivni 3-dnevni mini plan",
    description:
      "Svaki dan dobivaš precizne zadatke i kratke video upute za brze rezultate.",
  },
  {
    icon: <Gift className="w-6 h-6 text-[#EF798A]" />,
    title: "20 bonus skripti i poruka",
    description:
      "Dobivaš dodatne primjere koje možeš copy/paste poslati odmah.",
  },
  {
    icon: <Timer className="w-6 h-6 text-[#EF798A]" />,
    title: "Vrijeme trajanja: samo vikend",
    description:
      "Sav sadržaj možeš odraditi u manje od 90 minuta ukupno.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#EF798A]" />,
    title: "Fokus na rezultate",
    description:
      "Pomaže ti pretvoriti teoriju iz glavnog programa u konkretne akcije.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#EF798A]" />,
    title: "Bez rizika",
    description: "Ako ti ne koristi, vraćamo 1 € bez pitanja u roku 30 dana.",
  },
];

export default function UpsellPage() {
  return (
    <div className="min-h-screen bg-rose-50/60 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-100 text-[#64113F] text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Posebna ponuda kao nastavak tvoje kupovine
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-[#64113F]">
            Aktiviraj mini program "Vikend Reset" za samo 1 €
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Ovaj kratki program dizajniran je da ti pomogne implementirati sve što
            si upravo naučila. Dobivaš jasne korake, dodatne primjere poruka i
            podršku kako bi brže vidjela prve rezultate.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-5">
            {BENEFITS.map(({ icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 items-start bg-white/80 border border-rose-100 rounded-2xl p-5"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm">
                  {icon}
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-[#64113F]">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-rose-100 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-3 text-center">
              <p className="text-sm uppercase tracking-wide text-[#64113F] font-semibold">
                Ograničena ponuda - samo 1 €
              </p>
              <p className="text-4xl font-bold text-[#EF798A]">1,00 €</p>
              <p className="text-sm text-gray-500">
                Jednokratna uplata. Cijena vrijedi samo odmah nakon kupovine
                glavnog programa.
              </p>
            </div>

            <div className="mt-6">
              <PaymentElements
                price={UPSELL_PRICE}
                metadata={{
                  offer_type: "post_purchase_upsell",
                  offer_name: "vikend_reset",
                }}
              />
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              Preferiraš nastaviti bez dodatne ponude?{" "}
              <Link href="/prijava" className="underline underline-offset-4">
                Preskoči i uđi u aplikaciju
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
