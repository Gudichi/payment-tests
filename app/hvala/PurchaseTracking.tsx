"use client";

import { useEffect, useRef } from "react";
import { trackPurchase, trackCustomEvent } from "@/lib/meta";

type PurchaseTrackingProps = {
  paymentIntent: {
    id: string;
    amount: number;
    currency: string;
    metadata?: Record<string, string>;
  } | null;
};

export function PurchaseTracking({ paymentIntent }: PurchaseTrackingProps) {
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    if (!paymentIntent || hasTrackedRef.current) return;
    hasTrackedRef.current = true;

    // Extract metadata to determine purchased products
    const metadata = paymentIntent.metadata || {};
    const basePrice = parseInt(metadata.base_price_eur || "17", 10);
    const selectedBumps = (metadata.selected_bumps || "").toString().toLowerCase();
    const bumpTotal = parseInt(metadata.bump_total_eur || "0", 10);
    
    // Check which bumps were selected
    const bump9Selected = selectedBumps.includes("nekabroj") || bumpTotal >= 9;
    const bump13Selected = selectedBumps.includes("lokacijskimagnetizam") || bumpTotal >= 13;
    
    // Check OTO purchases from payment intent amount
    // If amount is > base + bumps, likely OTOs were purchased
    const totalPaid = paymentIntent.amount / 100;
    const basePlusBumps = basePrice + bumpTotal;
    const oto1Accepted = totalPaid >= basePlusBumps + 37;
    const oto2Accepted = totalPaid >= basePlusBumps + 37 + 57;

    // Build products array
    const products = [
      { id: "main-17", type: "core", price: basePrice, quantity: 1 },
      { id: "bump-9", type: "bump", price: 9, quantity: 1, selected: bump9Selected },
      { id: "bump-13", type: "bump", price: 13, quantity: 1, selected: bump13Selected },
      { id: "oto1-37", type: "upsell", price: 37, quantity: 1, accepted: oto1Accepted },
      { id: "oto2-57", type: "upsell", price: 57, quantity: 1, accepted: oto2Accepted },
    ].filter((p) => p.selected !== false && p.accepted !== false);

    // Calculate total value
    const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

    // Track events
    trackPurchase(totalValue, {
      route: "/hvala",
      products,
      orderId: paymentIntent.id,
    });

    trackCustomEvent("RS_ThankYou_Landed", {
      route: "/hvala",
      orderId: paymentIntent.id,
    });
  }, [paymentIntent]);

  return null;
}

