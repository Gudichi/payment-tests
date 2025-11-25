"use client";

import { useEffect } from "react";
import { trackCustomEvent } from "@/lib/meta";
import { phTrackFunnelStep, phTrackPage } from "@/lib/posthog-events";

export function Oto2Tracking() {
  useEffect(() => {
    trackCustomEvent("RS_OTO2_Landed", { route: "/oto2", offerPrice: 57 });
    phTrackPage("/oto2");
    phTrackFunnelStep("oto2", { route: "/oto2" });
  }, []);

  return null;
}

