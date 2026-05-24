# Checkout Setup TODO

The site uses a single env var for checkout: `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`.

When it is **set**, every "Get the Kit" button opens the Stripe Payment Link.
When it is **blank**, every "Get the Kit" button routes to `/checkout-coming-soon`
(a styled placeholder page) so we never have a broken href.

## Setup

1. Create a Stripe account.
2. Create a product: **VibeCode Safety Kit**.
3. Set price: **$29.99 one-time** (mode = `payment`, not `subscription`).
4. Create a **Stripe Payment Link** for that price.
5. Set the success redirect URL on the Payment Link to:
   `https://yourdomain.com/success`
6. Copy the Payment Link.
7. Add it to your env (locally in `.env.local`, in production via your host's
   env settings):
   ```
   NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/xxxxxxxx
   ```
8. Test checkout with Stripe test mode if applicable.
9. Confirm all CTA buttons route correctly:
   - Header "Get the Kit"
   - Hero "Get the Kit for $29.99"
   - Pricing card "Get the Kit for $29.99"
   - Final CTA "Get the Kit for $29.99"
   - Sticky CTA "Get the Kit"
   - Chat widget "Get the Kit for $29.99"
10. Confirm the `/success` page explains delivery clearly.

## How CTAs are wired

All purchase buttons use the helper in `lib/checkout.ts`:

```ts
export const STRIPE_PAYMENT_LINK =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ||
  "/checkout-coming-soon";
```

Buttons render through `<BuyLink>` (`components/BuyLink.tsx`) which:
- opens the Stripe URL in a new tab if it's an absolute URL,
- navigates to `/checkout-coming-soon` otherwise.

## What we are intentionally NOT doing yet

- No `stripe` SDK installed.
- No `app/api/checkout` route.
- No Stripe webhook handler.
- No database. No auth. No subscription mode.
- No Vercel deploy from this repo.
