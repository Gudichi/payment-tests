"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { trackCustomEvent } from "@/lib/meta";
import { phTrackFunnelStep, phTrackPage } from "@/lib/posthog-events";

type PurchaseTrackingProps = {
  paymentIntent: {
    id: string;
    amount: number;
    currency: string;
    metadata?: Record<string, string>;
  } | null;
  redirectTo?: string;
};

export function PurchaseTracking({ paymentIntent, redirectTo }: PurchaseTrackingProps) {
  const hasTrackedRef = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (!paymentIntent || hasTrackedRef.current) return;
    hasTrackedRef.current = true;

    // Only send RS_ThankYou_Landed custom event
    // Purchase events are now sent when payment succeeds (in payment-form or one-click-upsell)
    trackCustomEvent("RS_ThankYou_Landed", {
      route: "/hvala",
      orderId: paymentIntent.id,
    });
    phTrackPage("/hvala", { orderId: paymentIntent.id });
    phTrackFunnelStep("hvala", { route: "/hvala", orderId: paymentIntent.id });

    // Redirect after tracking (if redirect URL provided)
    if (redirectTo) {
      setTimeout(() => {
        router.replace(redirectTo);
      }, 200);
    }
  }, [paymentIntent, redirectTo, router]);

  return null;
}

