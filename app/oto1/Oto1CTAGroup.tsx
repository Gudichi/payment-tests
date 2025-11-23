"use client";

import { CTAButton } from "@/components/CTAButton";
import { OneClickUpsellButton } from "@/components/one-click-upsell";
import { trackCustomEvent } from "@/lib/meta";

type Oto1CTAGroupProps = {
  paymentIntentId?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  priceId?: string;
};

export function Oto1CTAGroup({
  paymentIntentId,
  primaryLabel,
  secondaryLabel,
  priceId,
}: Oto1CTAGroupProps) {
  const nextOto2 = paymentIntentId ? `/oto2?payment_intent=${paymentIntentId}` : "/oto2";
  const oto1No = paymentIntentId ? `/oto1-no?payment_intent=${paymentIntentId}` : "/oto1-no";

  const handleYesClick = () => {
    trackCustomEvent("RS_OTO1_Yes_Click", {
      route: "/oto1",
      value: 37,
      currency: "EUR",
    });
  };

  const handleNoClick = () => {
    trackCustomEvent("RS_OTO1_No_Click", { route: "/oto1" });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {paymentIntentId ? (
        <OneClickUpsellButton
          paymentIntentId={paymentIntentId}
          priceId={priceId}
          label={primaryLabel}
          className="w-full sm:w-auto rounded-3xl bg-[#1C7C7D] px-8 py-4 text-base font-semibold tracking-wide text-ivory shadow-card transition hover:bg-[#165a5c]"
          onSuccessHref={nextOto2}
          onSuccess={handleYesClick}
        />
      ) : (
        <CTAButton
          href={nextOto2}
          size="lg"
          className="w-full sm:w-auto rounded-3xl bg-[#1C7C7D] px-8 py-4 text-base font-semibold tracking-wide text-ivory shadow-card transition hover:bg-[#165a5c]"
          onTrackClick={handleYesClick}
        >
          {primaryLabel}
        </CTAButton>
      )}
      <CTAButton
        href={oto1No}
        size="lg"
        className="w-full sm:w-auto rounded-3xl border border-[#6A1F29] bg-transparent px-8 py-4 text-base font-semibold tracking-wide text-[#6A1F29] transition hover:bg-[#6A1F29]/5"
        onTrackClick={handleNoClick}
      >
        {secondaryLabel}
      </CTAButton>
    </div>
  );
}

