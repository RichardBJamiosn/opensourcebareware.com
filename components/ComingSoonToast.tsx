"use client";

import { useEffect, useState } from "react";
import { Gear } from "@/components/SteampunkElements";

const STORAGE_KEY = "osb-coming-soon-dismissed";

export default function ComingSoonToast() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) {
      return;
    }
    const timer = setTimeout(() => setVisible(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setDismissed(true);
    setTimeout(() => setVisible(false), 400);
    localStorage.setItem(STORAGE_KEY, "1");
  }

  if (!visible) return null;

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50 w-[320px]
        panel rivets
        transition-all duration-500 ease-out
        ${dismissed ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}
      `}
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 1px rgba(205,127,50,0.3)" }}
    >
      {/* Top copper accent bar */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-copper to-transparent" />

      <div className="px-5 py-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="text-copper opacity-60 shrink-0">
              <Gear size={16} className="gear-spin-slow" />
            </div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-text-light">
              In the Workshop
            </span>
          </div>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="text-text-light hover:text-copper transition-colors mt-[1px] shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Headline */}
        <p className="font-serif italic text-xl text-cream leading-snug mb-2">
          Three weeks out.
        </p>

        {/* Body */}
        <p className="text-sm text-text-muted leading-relaxed">
          The full toolkit is nearly finished — inventory sheets, pour-cost
          calculator, variance tracker, and AI bottle counter. We&rsquo;re in
          final testing. Come back soon.
        </p>

        {/* Bottom rule */}
        <div className="mt-4 h-[1px] bg-gradient-to-r from-copper/20 via-copper/10 to-transparent" />

        <p className="text-[10px] text-text-light mt-3 tracking-wide">
          opensourcebarware.com — Est. 2026
        </p>
      </div>
    </div>
  );
}
