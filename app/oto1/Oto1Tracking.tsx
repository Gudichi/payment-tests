"use client";

import { useEffect } from "react";
import { trackCustomEvent } from "@/lib/meta";

export function Oto1Tracking() {
  useEffect(() => {
    trackCustomEvent("RS_OTO1_Landed", { route: "/oto1", offerPrice: 37 });
  }, []);

  return null;
}

