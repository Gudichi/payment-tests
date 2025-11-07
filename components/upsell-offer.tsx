"use client";

import PaymentElements from "@/components/payment-elements";
import { useState } from "react";

const UPSELL_PRICE_EUR = 1;

export function UpsellOffer() {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <section className="bg-[#FFF7F9] border border-[#F4C2D7] rounded-2xl p-6 sm:p-10 shadow-lg">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-[#D03660] font-semibold">
          Posebna Ponuda Nakon Kupnje
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#64113F]">
          Premium Ljubavni Rituali
        </h2>
        <p className="text-base sm:text-lg text-[#5A3147] leading-relaxed">
          Unapravi svoj rezultat uz mini program koji sadrži tri brza rituala
          za svakodnevno dizanje samopouzdanja i romantične energije. Idealno
          ako želiš dodatnu podršku između glavnih lekcija.
        </p>
        <ul className="text-left text-sm sm:text-base text-[#5A3147] space-y-2">
          <li>• 3 audio rituala (jutro, popodne, večer)</li>
          <li>• PDF skripte za brze promjene mindseta</li>
          <li>• Mikro vježbe za aktiviranje ženske magnetičnosti</li>
        </ul>
        <div className="bg-white rounded-xl border border-[#F4C2D7] p-6 space-y-3 shadow-md">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#D03660] uppercase">
              Jednokratno danas
            </p>
            <p className="text-3xl font-bold text-[#64113F]">
              €{UPSELL_PRICE_EUR.toFixed(2)}
            </p>
            <p className="text-xs text-[#A05B73]">
              Ponuda vrijedi samo na ovoj stranici
            </p>
          </div>
          {!showCheckout ? (
            <button
              className="w-full bg-[#EF798A] hover:bg-[#e06b7a] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              onClick={() => setShowCheckout(true)}
            >
              Da, želim rituale za €{UPSELL_PRICE_EUR.toFixed(2)}
            </button>
          ) : (
            <PaymentElements
              price={UPSELL_PRICE_EUR}
              metadata={{
                source: "thank_you_upsell",
                offer_name: "premium_rituali",
              }}
            />
          )}
          <p className="text-xs text-[#5A3147]">
            Ne treba ti dodatno? Tvoj glavni program i podaci za pristup su već
            poslani na email koji si koristila pri plaćanju.
          </p>
        </div>
      </div>
    </section>
  );
}
