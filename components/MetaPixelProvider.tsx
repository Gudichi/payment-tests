"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initMetaPixel, trackPageView } from "@/lib/meta";

export function MetaPixelProvider() {
  const pathname = usePathname();

  useEffect(() => {
    initMetaPixel();
  }, []);

  useEffect(() => {
    if (!pathname) return;
    trackPageView(pathname, { path: pathname });
  }, [pathname]);

  return null;
}

