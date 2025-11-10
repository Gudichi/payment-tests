"use client";

import { useCallback, useState } from "react";
import { Checkout } from "@/app/checkout";
import { Checkout2 } from "@/app/checkout2";
import PaymentIcons from "@/components/payment-icons";
import { PRICE } from "@/app/checkout";

type InlineCheckoutProps = {
  buttonLabel?: string;
  checkoutVersion?: number;
};

export function InlineCheckout({
  buttonLabel = `Pridruži se programu Signali Strasti — ${PRICE}€`,
  checkoutVersion = 1,
}: InlineCheckoutProps) {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    if (!open) {
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
        <button
          type="button"
          onClick={handleClick}
          className="w-full rounded-3xl bg-[#6A1F29] px-8 py-5 text-base font-semibold uppercase tracking-wide text-[#F8F5F0] shadow-card transition hover:bg-[#52161f]"
        >
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
