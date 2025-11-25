"use client";

import { useEffect } from "react";
import { trackCustomEvent } from "@/lib/meta";
import { phTrackFunnelStep, phTrackPage } from "@/lib/posthog-events";

export function Adv2Tracking() {
  useEffect(() => {
    trackCustomEvent("RS_Adv2_Landed", { route: "/adv2" });
    phTrackPage("/adv2");
    phTrackFunnelStep("adv2", { route: "/adv2" });
  }, []);

  return null;
}

