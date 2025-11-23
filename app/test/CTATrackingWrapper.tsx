"use client";

import { trackCustomEvent } from "@/lib/meta";
import { CTAButton } from "@/components/CTAButton";
import { type ReactNode } from "react";

type CTATrackingWrapperProps = {
  href: string;
  size?: "md" | "lg";
  className?: string;
  scrollToCheckout?: boolean;
  scrollTargetId?: string;
  section?: string;
  children: ReactNode;
};

export function CTATrackingWrapper({
  href,
  size,
  className,
  scrollToCheckout,
  scrollTargetId,
  section,
  children,
}: CTATrackingWrapperProps) {
  const handleTrackClick = () => {
    if (scrollToCheckout) {
      trackCustomEvent("RS_Landing_SectionCTA_Click", {
        route: "/",
        section: section || scrollTargetId || "unknown",
      });
    }
  };

  return (
    <CTAButton
      href={href}
      size={size}
      className={className}
      scrollToCheckout={scrollToCheckout}
      scrollTargetId={scrollTargetId}
      onTrackClick={handleTrackClick}
    >
      {children}
    </CTAButton>
  );
}

