# Checkout Setup TODO - Subscription

VibeCode Safety Membership is a subscription product: $6.99/month or $59/year.

The site uses checkout env vars with fallback:

1. `NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK` (monthly CTA)
2. `NEXT_PUBLIC_YEARLY_CHECKOUT_LINK` (yearly CTA)
3. `NEXT_PUBLIC_CHECKOUT_LINK` (fallback for both)
4. `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` (legacy fallback)
5. `/checkout-coming-soon` (final fallback)

Billing management uses `NEXT_PUBLIC_CUSTOMER_PORTAL_LINK` on the
`/manage-subscription` support page.

## Stripe Setup - Subscription

- [ ] Create Stripe account (or use existing).
- [ ] Create product: **VibeCode Safety Membership** (subscription).
- [ ] Create monthly price: **$6.99/month** (mode = `subscription`, interval = `month`).
- [ ] Create yearly price: **$59/year** (mode = `subscription`, interval = `year`).
- [ ] Create **monthly Payment Link** for $6.99/month price.
- [ ] Create **yearly Payment Link** for $59/year price.
- [ ] Configure Stripe Customer Portal for self-serve cancellation and billing updates.
- [ ] Enable cancellation in Stripe Customer Portal.
- [ ] Collect cancellation reasons in Stripe Customer Portal.
- [ ] Optional: add retention coupon, stay for **$3.99/month for 3 months**.
- [ ] Set success redirect on both Payment Links to:
  `https://yourdomain.com/access/vcs-launch-edition-2026-k9p4`
- [ ] Add monthly link to env: `NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK`
- [ ] Add yearly link to env: `NEXT_PUBLIC_YEARLY_CHECKOUT_LINK`
- [ ] Add Stripe Customer Portal link to env: `NEXT_PUBLIC_CUSTOMER_PORTAL_LINK`
- [ ] Keep `NEXT_PUBLIC_CHECKOUT_LINK` as the active fallback checkout link.
- [ ] Test monthly checkout end-to-end in Stripe test mode.
- [ ] Test yearly checkout end-to-end in Stripe test mode.
- [ ] Test cancellation through Stripe Customer Portal.
- [ ] Confirm success redirect works after checkout.
- [ ] Test member kit download from the hidden access page.
- [ ] Confirm access/download page shows download button when env var is set.
- [ ] Confirm cancellation copy is accurate while the portal is not fully connected.
- [ ] Confirm no public copy promises manual human audits, GitHub repo scanning, guaranteed security, or a SaaS dashboard.
- [ ] Confirm no public copy guarantees secure, bug-free, compliant, or production-ready software.
- [ ] Confirm CTA buttons route correctly:
  - Header "Get Started"
  - Hero "Start for $6.99/month"
  - Pricing card "Start monthly"
  - Pricing card "Start yearly"
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
`MONTHLY_CHECKOUT_LINK`.

## Cancellation

Use Stripe Customer Portal for v1 subscription billing management.

- Members should cancel through Manage Subscription when the portal is live.
- If the portal is not live yet, support can help cancel manually through Stripe.
- See `docs/STRIPE_CUSTOMER_PORTAL.md` for setup and test steps.
- Do not build a custom billing dashboard until auth and account management exist.

## Email Consent TODO

The pricing card includes an optional, **unchecked** consent checkbox. It is
UI-only and does not store anything. Before launch, connect to a real email
provider. Keep consent optional. Do not pre-check.

## What we are intentionally NOT doing yet

- No `stripe` SDK installed.
- No `app/api/checkout` route.
- No Stripe webhook handler.
- No database. No auth. No automated account management.
- No custom billing dashboard yet. Use Stripe Customer Portal.
- No GitHub OAuth or repo scanning backend.
- No manual audit promise.
- No Vercel deploy from this repo.

## Legal Pages TODO

Confirm these pages exist and render with correct subscription copy:

- `/privacy`
- `/terms`
- `/refund-policy` - now titled "Refund & Cancellation Policy"
