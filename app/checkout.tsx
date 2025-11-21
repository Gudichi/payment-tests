"use client";

import PaymentElements from "@/components/payment-elements";
import { useMemo, useState } from "react";

const BASE_PRICE = 17;

const ORDER_BUMPS = [
  {
    id: "nekabroj",
    title: "Neka on pita za tvoj broj",
    price: 9,
    oldPrice: 37,
    image: "/Bonus-3.png",
    description: (
      <>
        I kad mu se sviđaš — mnogi se ne usude pitati. Ovaj mikro-vodič ti
        pokazuje gdje ostaviti prostor u razgovoru da mu daš zeleno svjetlo.{" "}
        <strong>Žene koje ga koriste vide rezultate 3x brže</strong> — jer znaju
        što točno napraviti kada on zastane, ali još nije siguran.
      </>
    ),
  },
  {
    id: "lokacijskimagnetizam",
    title: "Lokacijski Magnetizam",
    price: 13,
    oldPrice: 34,
    image: "/Lokaciskimagentizam-min.png",
    description: (
      <>
        Nije isti signal za kafić i za ured. Ako želiš 2x brže rezultate — koristi
        pravi mikro-pokret na pravom mjestu. Ovaj mini modul ti daje instant
        navigaciju za sve ključne lokacije: kafić, posao, teretana, shopping...
      </>
    ),
  },
];

export const PRICE = BASE_PRICE;

export const Checkout = () => {
  const [selectedBumps, setSelectedBumps] = useState<Record<string, boolean>>(
    {}
  );

  const bumpsTotal = useMemo(
    () =>
      ORDER_BUMPS.reduce(
        (sum, bump) => sum + (selectedBumps[bump.id] ? bump.price : 0),
        0
      ),
    [selectedBumps]
  );

  const total = useMemo(() => BASE_PRICE + bumpsTotal, [bumpsTotal]);

  const selectedBumpIds = useMemo(
    () => ORDER_BUMPS.filter((b) => selectedBumps[b.id]).map((b) => b.id),
    [selectedBumps]
  );

  const handleBumpToggle = (id: string, checked: boolean) => {
    setSelectedBumps((prev) => ({ ...prev, [id]: checked }));
  };

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
                Članak pogledan
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
                <div className="flex flex-wrap gap-2">
                  {selectedBumpIds.length
                    ? selectedBumpIds.map((id) => {
                        const bump = ORDER_BUMPS.find((b) => b.id === id);
                        if (!bump) {
                          return null;
                        }
                        return (
                          <span
                            key={id}
                            className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full"
                          >
                            +{bump.title}
                          </span>
                        );
                      })
                    : null}
                </div>
              </div>
              <PaymentElements
                price={total}
                metadata={{
                  base_price_eur: BASE_PRICE.toString(),
                  selected_bumps: selectedBumpIds.join(",") || "none",
                  bump_total_eur: bumpsTotal.toString(),
                }}
                orderBumps={ORDER_BUMPS}
                selectedBumps={selectedBumps}
                onToggleBump={handleBumpToggle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
