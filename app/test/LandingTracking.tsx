"use client";

import { useEffect } from "react";
import { trackViewContent, trackCustomEvent } from "@/lib/meta";
import { phTrackFunnelStep, phTrackPage } from "@/lib/posthog-events";

export function LandingTracking() {
  useEffect(() => {
    trackViewContent({ route: "/" });
    trackCustomEvent("RS_Landing_Landed", { route: "/" });
    phTrackPage("/");
    phTrackFunnelStep("landing", { route: "/" });
  }, []);

  return null;
}

