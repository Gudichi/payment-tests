"use client";

import { useCallback, useState } from "react";
import { Checkout } from "@/app/checkout";
import { Checkout2 } from "@/app/checkout2";
import PaymentIcons from "@/components/payment-icons";
import { PRICE } from "@/app/checkout";
import { trackCustomEvent, trackInitiateCheckout } from "@/lib/meta";

type InlineCheckoutProps = {
  buttonLabel?: string;
  buttonClassName?: string;
  checkoutVersion?: number;
};

export function InlineCheckout({
  buttonLabel = `Pridruži se programu Signali Strasti — ${PRICE}€`,
  buttonClassName = "w-full rounded-3xl bg-cherry px-8 py-5 text-base font-semibold uppercase tracking-wide text-ivory shadow-card transition hover:bg-cherry/90",
  checkoutVersion = 1,
}: InlineCheckoutProps) {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    if (!open) {
      // Track checkout opening
      trackCustomEvent("RS_Landing_CTA_Click", {
        route: "/",
        source: "cta-open-checkout",
        position: "inline-checkout",
      });
      trackInitiateCheckout({
        route: "/",
        source: "cta-open-checkout",
        position: "inline-checkout",
      });

      setOpen(true);
      setTimeout(() => {
        const target = document.getElementById("checkout-section");
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, [open]);

  return (
    <div className="space-y-6">
      {!open ? (
        <button type="button" onClick={handleClick} className={buttonClassName}>
          {buttonLabel}
        </button>
      ) : null}
      {open ? (
        checkoutVersion === 2 ? (
          <Checkout2 />
        ) : (
          <Checkout />
        )
      ) : null}
      <PaymentIcons />
    </div>
  );
}
