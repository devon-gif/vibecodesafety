// Single source of truth for the buy button destination.
// Priority: NEXT_PUBLIC_CHECKOUT_LINK → NEXT_PUBLIC_STRIPE_PAYMENT_LINK → /checkout-coming-soon
export const CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_CHECKOUT_LINK ||
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ||
  "/checkout-coming-soon";

// Monthly subscription checkout link.
// Falls back to CHECKOUT_LINK if not set.
export const MONTHLY_CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK ||
  CHECKOUT_LINK;

// Yearly subscription checkout link.
// Falls back to CHECKOUT_LINK if not set.
export const YEARLY_CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_YEARLY_CHECKOUT_LINK ||
  CHECKOUT_LINK;

// Backwards-compatible alias
export const STRIPE_PAYMENT_LINK = CHECKOUT_LINK;

// Google Drive (or other) link to the product ZIP delivered after purchase.
export const PRODUCT_DOWNLOAD_LINK =
  process.env.NEXT_PUBLIC_PRODUCT_DOWNLOAD_LINK || "";

export const SUPPORT_EMAIL = "vibecodesafety@gmail.com";

export function isExternalCheckout(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
