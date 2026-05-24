# Checkout Setup TODO — Subscription

VibeCode Safety is now a subscription product: $6.99/month or $59/year.

The site uses checkout env vars with fallback:

1. `NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK` (monthly CTA)
2. `NEXT_PUBLIC_YEARLY_CHECKOUT_LINK` (yearly CTA)
3. `NEXT_PUBLIC_CHECKOUT_LINK` (fallback for both)
4. `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` (legacy fallback)
5. `/checkout-coming-soon` (final fallback)

## Stripe Setup — Subscription

- [ ] Create Stripe account (or use existing).
- [ ] Create product: **VibeCode Safety** (subscription).
- [ ] Create monthly price: **$6.99/month** (mode = `subscription`, interval = `month`).
- [ ] Create yearly price: **$59/year** (mode = `subscription`, interval = `year`).
- [ ] Create **monthly Payment Link** for $6.99/month price.
- [ ] Create **yearly Payment Link** for $59/year price.
- [ ] Set success redirect on both Payment Links to:
  `https://yourdomain.com/access/vcs-launch-edition-2026-k9p4`
- [ ] Add monthly link to env: `NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK`
- [ ] Add yearly link to env: `NEXT_PUBLIC_YEARLY_CHECKOUT_LINK`
- [ ] Test monthly checkout end-to-end in Stripe test mode.
- [ ] Test yearly checkout end-to-end in Stripe test mode.
- [ ] Test cancellation / support flow.
- [ ] Confirm success redirect works after checkout.
- [ ] Confirm access/download page shows download button when env var is set.
- [ ] Confirm CTA buttons route correctly:
  - Header "Get Started"
  - Hero "Start for $6.99/month"
  - Pricing card "Start for $6.99/month"
  - Pricing card "Choose yearly — $59/year"
  - Final CTA "Start for $6.99/month"
  - Sticky CTA "Get Started"
  - Chat widget "Start for $6.99/month"
- [ ] Switch to live mode before launch.

## How CTAs are wired

All purchase buttons use the helpers in `lib/checkout.ts`:

```ts
export const MONTHLY_CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK || CHECKOUT_LINK;

export const YEARLY_CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_YEARLY_CHECKOUT_LINK || CHECKOUT_LINK;
```

Buttons render through `<BuyLink>` or direct `<a>` tags. The yearly CTA in
the pricing card uses `<BuyLink href={YEARLY_CHECKOUT_LINK}>`. All other
CTAs (hero, sticky, chat widget, final CTA) default to the monthly link via
`CHECKOUT_LINK` fallback.

## Cancellation

No Stripe Customer Portal is configured yet. Until it is:
- Cancellations handled by emailing `vibecodesafety@gmail.com`.
- This is documented in the FAQ and refund policy.
- TODO: Enable Stripe Customer Portal for self-serve cancellation.
- TODO: Update FAQ copy once portal is live.

## Email Consent TODO

The pricing card includes an optional, **unchecked** consent checkbox. It is
UI-only and does not store anything. Before launch, connect to a real email
provider. Keep consent optional. Do not pre-check.

## What we are intentionally NOT doing yet

- No `stripe` SDK installed.
- No `app/api/checkout` route.
- No Stripe webhook handler.
- No database. No auth. No automated account management.
- No Stripe Customer Portal (yet).
- No Vercel deploy from this repo.

## Legal Pages TODO

Confirm these pages exist and render with correct subscription copy:

- `/privacy`
- `/terms`
- `/refund-policy` — now titled "Refund & Cancellation Policy"

