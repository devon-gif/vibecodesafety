// Single source of truth for fallback checkout destinations.
export const CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_CHECKOUT_LINK ||
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ||
  "/checkout-coming-soon";

// Monthly subscription checkout link.
// Priority: NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK, NEXT_PUBLIC_CHECKOUT_LINK,
// NEXT_PUBLIC_STRIPE_PAYMENT_LINK, /checkout-coming-soon.
export const MONTHLY_CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK ||
  CHECKOUT_LINK;

// Yearly subscription checkout link.
// Priority: NEXT_PUBLIC_YEARLY_CHECKOUT_LINK, NEXT_PUBLIC_CHECKOUT_LINK,
// NEXT_PUBLIC_STRIPE_PAYMENT_LINK, /checkout-coming-soon.
export const YEARLY_CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_YEARLY_CHECKOUT_LINK ||
  CHECKOUT_LINK;

// General "Start" CTA defaults to monthly checkout.
export const STRIPE_PAYMENT_LINK = MONTHLY_CHECKOUT_LINK;

// Google Drive (or other) link to the product ZIP delivered after purchase.
export const PRODUCT_DOWNLOAD_LINK =
  process.env.NEXT_PUBLIC_PRODUCT_DOWNLOAD_LINK || "";

export const SUPPORT_EMAIL = "vibecodesafety@gmail.com";

export function isExternalCheckout(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
