"use client";

import PaymentElements from "@/components/payment-elements";

export const PRICE = 47;

export const Checkout = () => {
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

        {/* Checkout Form */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {/* Payment Box */}
            <div className="border-2 border-gray-200 rounded-lg p-4 sm:p-6 bg-gray-50 shadow-sm">
              <PaymentElements price={PRICE} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
