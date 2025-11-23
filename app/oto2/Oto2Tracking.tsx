"use client";

import { useEffect } from "react";
import { trackCustomEvent } from "@/lib/meta";

export function Oto2Tracking() {
  useEffect(() => {
    trackCustomEvent("RS_OTO2_Landed", { route: "/oto2", offerPrice: 57 });
  }, []);

  return null;
}

