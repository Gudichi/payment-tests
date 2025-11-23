"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { trackPurchase } from "@/lib/meta";

type Props = {
  paymentIntentId: string;
  label?: string;
  className?: string;
  priceId?: string;
  onSuccessHref?: string;
  onSuccess?: () => void;
};

export function OneClickUpsellButton({
  paymentIntentId,
  label = "Da, želim i ovu ponudu",
  className,
  priceId,
  onSuccessHref,
  onSuccess,
}: Props) {
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleClick = async () => {
    setStatus("processing");
    setMessage("");

    try {
      const response = await fetch("/api/one-click-upsell", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentIntentId, priceId }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Upsell nije prošao.");
      }

      const data = await response.json();
      const upsellPaymentIntentId = data.paymentIntentId;

      // Fetch payment intent to get amount and determine if OTO1 or OTO2
      if (upsellPaymentIntentId) {
        try {
          const intentResponse = await fetch(`/api/payment-intent-info?payment_intent=${upsellPaymentIntentId}`);
          if (intentResponse.ok) {
            const intentData = await intentResponse.json();
            const paymentIntent = intentData.paymentIntent;
            
            if (paymentIntent) {
              const amount = paymentIntent.amount / 100;
              const metadata = paymentIntent.metadata || {};
              const isOTO1 = metadata.oto_1 === "true" || metadata.source === "oto1_one_click";
              const isOTO2 = metadata.oto_2 === "true" || metadata.source === "oto2_one_click";
              
              // Track purchase
              trackPurchase(amount, {
                currency: "EUR",
                product: isOTO1 ? "oto1-37" : "oto2-57",
                products: [
                  isOTO1
                    ? { id: "oto1-37", price: 37, quantity: 1 }
                    : { id: "oto2-57", price: 57, quantity: 1 },
                ],
                orderId: paymentIntent.id,
              });
            }
          }
        } catch (error) {
          console.error("Failed to fetch payment intent for tracking:", error);
        }
      }

      setStatus("success");
      setMessage("Upsell je uspješno dodan! Račun poslan na email.");
      onSuccess?.();
      const target = onSuccessHref || "/oto2";
      // Go to the next step after tracking (with delay to ensure tracking is sent)
      setTimeout(() => {
        window.location.href = target;
      }, 250);
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Dogodila se greška.");
    }
  };

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={handleClick}
        disabled={status === "processing"}
        className={cn(
          "w-full rounded-2xl bg-[#A81F5F] py-4 text-xl font-semibold text-white shadow-lg transition hover:bg-[#8f1a51] disabled:cursor-not-allowed disabled:opacity-70",
          className
        )}
      >
        {status === "processing" ? "Dodajem..." : label}
      </button>
      {message && (
        <p
          className={`text-sm ${
            status === "success" ? "text-green-700" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
