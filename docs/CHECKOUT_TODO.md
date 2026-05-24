# Checkout Setup TODO

The site uses a primary checkout env var with a Stripe fallback:

1. `NEXT_PUBLIC_CHECKOUT_LINK`
2. `NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
3. `/checkout-coming-soon`

When either checkout env var is **set**, every "Get the Kit" button opens that
checkout link. When both are **blank**, every "Get the Kit" button routes to `/checkout-coming-soon`
(a styled placeholder page) so we never have a broken href.

## Setup

1. Create a Stripe account.
2. Create a product: **VibeCode Safety Kit**.
3. Set price: **$29.99 one-time** (mode = `payment`, not `subscription`).
4. Create a **Stripe Payment Link** for that price.
5. Set the success redirect URL on the Payment Link to:
   `https://yourdomain.com/access/vcs-launch-edition-2026-k9p4`
6. Copy the Payment Link.
7. Add it to your env (locally in `.env.local`, in production via your host's
   env settings):
   ```
   NEXT_PUBLIC_CHECKOUT_LINK=https://buy.stripe.com/xxxxxxxx
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
export const CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_CHECKOUT_LINK ||
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ||
  "/checkout-coming-soon";
```

Buttons render through `<BuyLink>` (`components/BuyLink.tsx`) which:
- opens the checkout URL in a new tab if it's an absolute URL,
- navigates to `/checkout-coming-soon` otherwise.

## What we are intentionally NOT doing yet

- No `stripe` SDK installed.
- No `app/api/checkout` route.
- No Stripe webhook handler.
- No database. No auth. No subscription mode.
- No Vercel deploy from this repo.

## Email Consent TODO

The pricing card includes an optional, **unchecked** consent checkbox:

> Send me product updates, launch notes, and helpful AI coding safety tips by email.

It is currently UI-only (state lives in `components/EmailConsentCheckbox.tsx`)
and does not store anything.

Before launch:

1. Decide where email consent will be collected:
   - Stripe Checkout custom consent if available
   - email marketing provider form
   - post-purchase welcome flow
2. Keep marketing consent optional.
3. Do not pre-check the box.
4. Store consent only if connected to a real email provider or checkout system.
5. Include unsubscribe instructions in future marketing emails.

Do **not** add Mailchimp, ConvertKit, Resend, Supabase, or a database
integration until the launch path is decided.

## Legal Pages TODO

Confirm these pages exist and render with the Back to Home CTA:

- `/privacy`
- `/terms`
- `/refund-policy`

Confirm footer legal links work on desktop and mobile:

- Privacy Policy → `/privacy`
- Terms & Agreements → `/terms`
- Refund Policy → `/refund-policy`
- Contact → `/#contact`
