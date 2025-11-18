"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  paymentIntentId?: string;
};

export function EnsurePaymentIntentParam({ paymentIntentId }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (paymentIntentId) {
      localStorage.setItem("last_payment_intent", paymentIntentId);
      return;
    }

    const stored = localStorage.getItem("last_payment_intent");
    if (!stored) return;

    if (searchParams.get("payment_intent")) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("payment_intent", stored);
    router.replace(`${pathname}?${params.toString()}`);
  }, [paymentIntentId, pathname, router, searchParams]);

  return null;
}
