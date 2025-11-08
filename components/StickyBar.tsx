"use client";

import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";

type StickyBarProps = {
  targetId: string;
};

export function StickyBar({ targetId }: StickyBarProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setHidden(entry.isIntersecting));
      },
      { threshold: 0.25 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [targetId]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-blush/60 bg-white/95 px-4 py-3 shadow-card backdrop-blur md:hidden ${
        hidden ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } transition duration-200 ease-in-out motion-reduce:transition-none`}
      aria-live="polite"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-espresso">Počni sada — 17€</div>
        <CTAButton href="#cijena" size="md">
          Počni sada
        </CTAButton>
      </div>
    </div>
  );
}
