// Single source of truth for the buy button destination.
// If NEXT_PUBLIC_STRIPE_PAYMENT_LINK is set, send buyers there.
// Otherwise, send them to a styled "coming soon" page so we never
// have a broken href.

export const STRIPE_PAYMENT_LINK =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ||
  "/checkout-coming-soon";

export const SUPPORT_EMAIL = "support@vibecodesafety.com";

export function isExternalCheckout(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
