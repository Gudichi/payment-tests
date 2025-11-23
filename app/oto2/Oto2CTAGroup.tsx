"use client";

import { CTAButton } from "@/components/CTAButton";
import { OneClickUpsellButton } from "@/components/one-click-upsell";
import { trackCustomEvent } from "@/lib/meta";

type Oto2CTAGroupProps = {
  paymentIntentId?: string;
  priceId?: string;
};

const PRIMARY_LABEL = "Da, želim njegove emocije zauvijek vezati za mene — kroz riječi koje pamti.";
const DECLINE_LABEL = "Ne, hvala. Radije riskiram da opet sve nestane… i da ne znam zašto.";

export function Oto2CTAGroup({ paymentIntentId, priceId }: Oto2CTAGroupProps) {
  const thankYouUrl = paymentIntentId ? `/hvala?payment_intent=${paymentIntentId}` : "/hvala";
  const declineUrl = paymentIntentId ? `/oto2-no?payment_intent=${paymentIntentId}` : "/oto2-no";

  const handleYesClick = () => {
    trackCustomEvent("RS_OTO2_Yes_Click", {
      route: "/oto2",
      value: 57,
      currency: "EUR",
    });
  };

  const handleNoClick = () => {
    trackCustomEvent("RS_OTO2_No_Click", { route: "/oto2" });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {paymentIntentId ? (
        <OneClickUpsellButton
          paymentIntentId={paymentIntentId}
          priceId={priceId}
          label={PRIMARY_LABEL}
          className="bg-[#1C7C7D] hover:bg-[#165a5c] text-ivory"
          onSuccessHref={thankYouUrl}
          onSuccess={handleYesClick}
        />
      ) : (
        <CTAButton href={thankYouUrl} size="lg" className="bg-[#1C7C7D] text-ivory" onTrackClick={handleYesClick}>
          {PRIMARY_LABEL}
        </CTAButton>
      )}
      <CTAButton
        href={declineUrl}
        size="lg"
        className="border border-[#6A1F29] text-[#6A1F29] bg-transparent hover:bg-[#6A1F29]/5"
        onTrackClick={handleNoClick}
      >
        {DECLINE_LABEL}
      </CTAButton>
    </div>
  );
}

