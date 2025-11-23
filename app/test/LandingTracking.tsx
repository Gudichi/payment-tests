"use client";

import { useEffect } from "react";
import { trackViewContent, trackCustomEvent } from "@/lib/meta";

export function LandingTracking() {
  useEffect(() => {
    trackViewContent({ route: "/" });
    trackCustomEvent("RS_Landing_Landed", { route: "/" });
  }, []);

  return null;
}

