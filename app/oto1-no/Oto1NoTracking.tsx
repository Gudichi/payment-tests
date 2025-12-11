"use client";

import { useEffect } from "react";
import { trackCustomEvent } from "@/lib/meta";

export function Oto1NoTracking() {
  useEffect(() => {
    trackCustomEvent("RS_OTO1No_Landed", { route: "/oto1-no" });
  }, []);

  return null;
}

