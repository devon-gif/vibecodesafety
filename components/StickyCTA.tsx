"use client";

import { useEffect, useState } from "react";
import { CHECKOUT_LINK, isExternalCheckout } from "@/lib/checkout";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after the hero+video (roughly 900px), hide when pricing is in view
    const pricingEl = document.getElementById("pricing");

    function update() {
      const scrollY = window.scrollY;
      const afterHero = scrollY > 900;

      let pricingVisible = false;
      if (pricingEl) {
        const rect = pricingEl.getBoundingClientRect();
        pricingVisible = rect.top < window.innerHeight * 0.75;
      }

      setVisible(afterHero && !pricingVisible);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="glass-strong pointer-events-auto flex w-full max-w-2xl items-center justify-between gap-3 rounded-2xl px-4 py-3 shadow-glow-lg sm:gap-4 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <span className="hidden h-9 w-9 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-violetglow-500 to-violetglow-700 sm:inline-flex">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-white">
              VibeCode Safety
            </div>
            <div className="truncate text-xs text-gray-400">
              <span className="text-violet-300">$6.99/mo</span> or $59/yr &middot; cancel anytime
            </div>
          </div>
        </div>
        <a
          href={CHECKOUT_LINK}
          {...(isExternalCheckout(CHECKOUT_LINK)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="btn-primary flex-none px-4 py-2 text-sm"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
