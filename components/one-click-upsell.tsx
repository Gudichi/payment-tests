"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

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

      setStatus("success");
      setMessage("Upsell je uspješno dodan! Račun poslan na email.");
      onSuccess?.();
      const target = onSuccessHref || "/oto2";
      // Go to the next step immediately after successful charge
      window.location.replace(target);
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
