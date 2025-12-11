"use client";

import { useEffect } from "react";
import { trackCustomEvent } from "@/lib/meta";

export function Oto2NoTracking() {
  useEffect(() => {
    trackCustomEvent("RS_OTO2No_Landed", { route: "/oto2-no" });
  }, []);

  return null;
}

