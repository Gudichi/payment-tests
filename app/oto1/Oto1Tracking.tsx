"use client";

import { useEffect } from "react";
import { trackCustomEvent } from "@/lib/meta";
import { phTrackFunnelStep, phTrackPage } from "@/lib/posthog-events";

export function Oto1Tracking() {
  useEffect(() => {
    trackCustomEvent("RS_OTO1_Landed", { route: "/oto1", offerPrice: 37 });
    phTrackPage("/oto1");
    phTrackFunnelStep("oto1", { route: "/oto1" });
  }, []);

  return null;
}

