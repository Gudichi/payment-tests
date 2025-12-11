"use client";

import posthog from "posthog-js";

function isBrowser() {
  return typeof window !== "undefined";
}

/**
 * PostHog event taxonomy for marketing analytics:
 *
 * - RS_FunnelStep: step ∈ {"adv2","landing","oto1","oto2","hvala"}
 * - RS_Purchase: base revenue event with kind ∈ {"main","oto1","oto2"} and EUR value
 *   - Derived events emitted alongside RS_Purchase for clarity:
 *     - RS_Main_Purchase
 *     - RS_OTO1_Purchase
 *     - RS_OTO2_Purchase
 * - RS_PageView: lightweight helper for page-level diagnostics
 */

export function phTrackFunnelStep(step: string, extra?: Record<string, any>) {
  if (!isBrowser() || !posthog) return;

  posthog.capture("RS_FunnelStep", {
    step,
    ...extra,
  });
}

export function phTrackPurchase(
  kind: "main" | "oto1" | "oto2",
  amount: number,
  extra?: Record<string, any>
) {
  if (!isBrowser() || !posthog) return;

  const baseProps = {
    kind,
    value: amount,
    currency: "EUR",
    ...extra,
  };

  posthog.capture("RS_Purchase", baseProps);

  if (kind === "main") {
    posthog.capture("RS_Main_Purchase", baseProps);
  } else if (kind === "oto1") {
    posthog.capture("RS_OTO1_Purchase", baseProps);
  } else if (kind === "oto2") {
    posthog.capture("RS_OTO2_Purchase", baseProps);
  }
}

export function phTrackPage(route: string, extra?: Record<string, any>) {
  if (!isBrowser() || !posthog) return;

  posthog.capture("RS_PageView", { route, ...extra });
}

