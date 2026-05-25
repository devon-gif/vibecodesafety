"use client";

import { useId, useState } from "react";

/**
 * Optional email-updates checkbox shown next to the purchase CTA.
 *
 * NOTE: This is a visual / pre-checkout preference only. There is no backend
 * or email provider connected yet, so nothing is stored.
 *
 * This checkbox should be connected to Stripe customer consent, an email
 * marketing provider, or a post-purchase email flow before launch.
 *
 * TODO: Connect this checkbox to the checkout/email provider before launch.
 */
export function EmailConsentCheckbox() {
  const [checked, setChecked] = useState(false);
  const helpId = useId();

  return (
    <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-left transition hover:border-violet-400/30">
      <span className="relative mt-0.5 flex h-5 w-5 flex-none items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="peer sr-only"
          aria-describedby={helpId}
        />
        <span
          aria-hidden
          className="absolute inset-0 rounded-md border border-white/20 bg-white/[0.04] transition peer-checked:border-violet-400 peer-checked:bg-gradient-to-br peer-checked:from-violetglow-500 peer-checked:to-violetglow-700 peer-focus-visible:ring-2 peer-focus-visible:ring-violet-400/60"
        />
        {checked && (
          <svg
            viewBox="0 0 24 24"
            className="relative h-3.5 w-3.5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m5 12 5 5L20 7" />
          </svg>
        )}
      </span>
      <span className="min-w-0">
        <span className="block text-sm text-gray-200">
          Send me product updates, launch notes, and helpful AI coding safety
          tips by email.
        </span>
        <span
          id={helpId}
          className="mt-1 block text-xs text-gray-500"
        >
          Optional. No spam. You can unsubscribe anytime.
        </span>
      </span>
    </label>
  );
}
