"use client";

import { CTAButton } from "@/components/CTAButton";
import { OneClickUpsellButton } from "@/components/one-click-upsell";
import { trackCustomEvent } from "@/lib/meta";

type Oto1NoCTAGroupProps = {
  paymentIntentId?: string;
  priceId?: string;
};

export function Oto1NoCTAGroup({ paymentIntentId, priceId }: Oto1NoCTAGroupProps) {
  const handleYesClick = () => {
    trackCustomEvent("RS_OTO1No_Yes_Click", {
      route: "/oto1-no",
      value: 37,
      currency: "EUR",
    });
  };

  const handleNoClick = () => {
    trackCustomEvent("RS_OTO1No_No_Click", { route: "/oto1-no" });
  };

  return (
    <div className="space-y-4 text-lg text-espresso/85">
      {paymentIntentId ? (
        <OneClickUpsellButton
          paymentIntentId={paymentIntentId}
          priceId={priceId}
          onSuccessHref={paymentIntentId ? `/oto2?payment_intent=${paymentIntentId}` : "/oto2"}
          label="Da, dodaj Kompas Strasti™ za 37 € i vodi me dalje"
          className="w-full sm:w-auto rounded-3xl bg-[#1C7C7D] px-8 py-4 text-base font-semibold tracking-wide text-ivory shadow-card transition hover:bg-[#165a5c]"
          onSuccess={handleYesClick}
        />
      ) : (
        <CTAButton
          href={paymentIntentId ? `/oto1?payment_intent=${paymentIntentId}` : "/oto1"}
          size="lg"
          className="w-full sm:w-auto rounded-3xl bg-[#1C7C7D] px-8 py-4 text-base font-semibold tracking-wide text-ivory shadow-card transition hover:bg-[#165a5c]"
          onTrackClick={handleYesClick}
        >
          Da, želim znati tko je stvarno zreo — prije nego uopće uđe pod moju kožu. Puni pristup Kompasu Strasti™ i
          svim bonusima za 37 € – odmah.
        </CTAButton>
      )}
      <CTAButton
        href={paymentIntentId ? `/oto2?payment_intent=${paymentIntentId}` : "/oto2"}
        size="lg"
        className="w-full sm:w-auto rounded-3xl border border-[#6A1F29] bg-transparent px-8 py-4 text-base font-semibold tracking-wide text-[#6A1F29] transition hover:bg-[#6A1F29]/5"
        onTrackClick={handleNoClick}
      >
        Ne, hvala. Radije riskiram da opet mjesecima nagađam tko je on — i možda ponovno izgubim najvrijednije
        godine na pogrešnog.
      </CTAButton>
    </div>
  );
}

