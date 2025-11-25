"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { trackPurchase, trackCustomEvent } from "@/lib/meta";
import { phTrackPurchase } from "@/lib/posthog-events";

export function MainPurchaseTracking() {
  const hasTrackedRef = useRef(false);
  const searchParams = useSearchParams();
  const redirectStatus = searchParams.get("redirect_status");
  const paymentIntentId = searchParams.get("payment_intent");

  useEffect(() => {
    if (redirectStatus !== "succeeded" || !paymentIntentId || hasTrackedRef.current) return;
    
    // Fetch payment intent to get amount and metadata
    fetch(`/api/payment-intent-info?payment_intent=${paymentIntentId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.paymentIntent && !hasTrackedRef.current) {
          hasTrackedRef.current = true;
          
          const paymentIntent = data.paymentIntent;
          const amount = paymentIntent.amount / 100;
          const metadata = paymentIntent.metadata || {};
          
          // Determine which bumps were selected
          const selectedBumps = (metadata.selected_bumps || "").toString().toLowerCase();
          const bump9Selected = 
            metadata.bump_1 === "true" || 
            selectedBumps.includes("nekabroj") || 
            selectedBumps.includes("signal8") ||
            selectedBumps.includes("bump1");
          const bump13Selected = 
            metadata.bump_2 === "true" || 
            selectedBumps.includes("lokacijskimagnetizam") || 
            selectedBumps.includes("textmagic") ||
            selectedBumps.includes("bump2");
          
          // Build products array
          const products = [
            { id: "main-17", type: "core", price: 17, quantity: 1 },
            ...(bump9Selected ? [{ id: "bump-9", type: "bump", price: 9, quantity: 1 }] : []),
            ...(bump13Selected ? [{ id: "bump-13", type: "bump", price: 13, quantity: 1 }] : []),
          ];
          
          // Track purchase
          trackPurchase(amount, {
            currency: "EUR",
            product: "main-17",
            bump_9: bump9Selected,
            bump_13: bump13Selected,
            products,
            orderId: paymentIntent.id,
          });

          // Track custom event for main purchase
          trackCustomEvent("RS_Main_Purchase", {
            value: amount,
            currency: "EUR",
            product: "main-17",
            bump_9: bump9Selected,
            bump_13: bump13Selected,
            route: "/checkout-main",
            orderId: paymentIntent.id,
          });

          phTrackPurchase("main", amount, {
            route: "/oto1",
            products,
            bump_9: bump9Selected,
            bump_13: bump13Selected,
            payment_intent_id: paymentIntent.id,
          });
        }
      })
      .catch((error) => {
        console.error("Failed to fetch payment intent for tracking:", error);
      });
  }, [redirectStatus, paymentIntentId]);

  return null;
}

