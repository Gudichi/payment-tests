"use client";

import PaymentElements from "@/components/payment-elements";
import { useMemo, useState } from "react";

const BASE_PRICE = 1;
const ORDER_BUMP_PRICE = 1;

export const PRICE = BASE_PRICE;

export const Checkout = () => {
  const [includeOrderBump, setIncludeOrderBump] = useState(false);
  const total = useMemo(
    () => BASE_PRICE + (includeOrderBump ? ORDER_BUMP_PRICE : 0),
    [includeOrderBump]
  );

  return (
    <div id="checkout-section" className="max-w-7xl mx-auto py-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 py-6 p-4 md:p-8">
        {/* Progress Indicator */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">
                  ✓
                </span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-600 hidden sm:inline">
                Video pogledan
              </span>
            </div>
            <div className="w-4 sm:w-8 h-0.5 bg-green-500"></div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">
                  ✓
                </span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-600 hidden sm:inline">
                Ponuda odabrana
              </span>
            </div>
            <div className="w-4 sm:w-8 h-0.5 bg-[#1C7C7D]"></div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#1C7C7D] rounded-full flex items-center justify-center mr-2 md:mr-0">
                <span className="text-white text-xs sm:text-sm font-bold">
                  →
                </span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#1C7C7D]">
                Završi kupovinu (3/3)
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mb-6 sm:mb-8 space-y-4">
          <h2 className="font-serif italic text-primary text-xl font-medium text-pretty">
            Zadnji Korak Do Novog Ljubavnog Života
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent leading-relaxed mb-4">
            ZADNJI KORAK - ŠTO SE DOGAĐA NAKON PLAĆANJA:
          </h2>
        </div>

        <ul className="list-none list-inside max-w-3xl mx-auto mb-6 space-y-4">
          {[
            [
              "✅",
              "Automatski pristup aplikaciji (10 sekundi) - program + svi bonusi dostupni odmah",
            ],
            [
              "🔒",
              "Stripe sigurnost - Tvoji podaci su 100% sigurni i zaštićeni (ja NE vidim tvoje bankovne podatke)",
            ],
            ["📧", "Welcome email od mene sa pristupnim detaljima"],
            [
              "🔄",
              "60-dana povrat novca - bez pitanja ako program ne ispuni očekivanja",
            ],
          ].map(([icon, point], index) => (
            <li
              key={index}
              className="font-sans text-base md:text-lg text-gray-700 leading-relaxed"
            >
              <div className="flex gap-2">
                <div>{icon}</div>
                <div className="text-left flex-1">{point}</div>
              </div>
            </li>
          ))}
        </ul>

        {/* Order bump */}
        <div className="max-w-6xl mx-auto mb-6">
          <div className="border-2 border-emerald-100 rounded-xl bg-emerald-50/60 shadow-sm overflow-hidden">
            <div className="bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Preporučeno
            </div>
            <label className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 sm:px-6 py-5 cursor-pointer">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 rounded border-2 border-emerald-400 text-emerald-600 focus:ring-2 focus:ring-offset-1 focus:ring-emerald-500"
                  checked={includeOrderBump}
                  onChange={(event) =>
                    setIncludeOrderBump(event.target.checked)
                  }
                />
                <div>
                  <p className="text-base md:text-lg font-semibold text-emerald-900">
                    Doživotni Pristup VIP WhatsApp Grupi{" "}
                    <span className="text-emerald-600">+€{ORDER_BUMP_PRICE}</span>
                  </p>
                  <p className="text-sm md:text-base text-emerald-800 leading-relaxed mt-2">
                    Većina žena koje se priključe VIP WhatsApp grupi{" "}
                    <strong>vide rezultate 3x brže</strong> nego kada pokušavaju
                    same. Dobivaš direktan feedback, analize i točne korake od
                    stručnog tima koji te vodi dok ne postigneš rezultat.
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="border-2 border-gray-200 rounded-lg p-4 sm:p-6 bg-gray-50 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Ukupno za platiti</p>
                  <p className="text-2xl font-bold text-accent">
                    €{total.toFixed(2)}
                  </p>
                </div>
                {includeOrderBump ? (
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                    VIP grupa dodana
                  </span>
                ) : null}
              </div>
              <PaymentElements
                price={total}
                metadata={{
                  base_price_eur: BASE_PRICE.toString(),
                  order_bump_selected: includeOrderBump ? "yes" : "no",
                  order_bump_price_eur: includeOrderBump
                    ? ORDER_BUMP_PRICE.toString()
                    : "0",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
