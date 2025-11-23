"use client";

import { useEffect } from "react";
import { trackCustomEvent } from "@/lib/meta";

export function Adv2Tracking() {
  useEffect(() => {
    trackCustomEvent("RS_Adv2_Landed", { route: "/adv2" });
  }, []);

  return null;
}

