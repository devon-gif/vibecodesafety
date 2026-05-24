# Launch Checklist — VibeCode Safety Kit

Run through this before flipping the site to "live".

## Site

- [ ] Homepage renders without console errors.
- [ ] Hero copy: "Make AI check the AI before you ship."
- [ ] Pricing shows **$29.99 one-time** everywhere.
- [ ] Sticky CTA appears after scroll on desktop and mobile.
- [ ] Chat widget opens; FAQ chips return canned answers; final
      "Get the Kit for $29.99" button works.
- [ ] All "Get the Kit" buttons go to either the Stripe Payment Link
      or `/checkout-coming-soon` (no broken hrefs).

## Pages

- [ ] `/` — homepage.
- [ ] `/checkout-coming-soon` — placeholder when env var unset.
- [ ] `/success` — post-Stripe success page with delivery instructions.
- [ ] `/privacy` — current copy, dated.
- [ ] `/terms` — current copy, dated.
- [ ] `/refund-policy` — current copy, dated.
- [ ] Footer legal links work on desktop and mobile:
      Privacy Policy, Terms & Agreements, Refund Policy, Contact.

## Stripe (see `docs/STRIPE_SETUP.md`)

- [ ] Product created at $29.99 one-time (NOT subscription).
- [ ] Payment Link created with success URL = `/success`.
- [ ] `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` set in production env.
- [ ] Test purchase succeeds end-to-end in test mode.
- [ ] Switched to live mode for production.
- [ ] Refund policy on the site matches Stripe behavior.

## Digital product

- [ ] `digital-product/VibeCode-Safety-Kit-v1/` is reviewed for typos
      and `{{REPLACE_ME}}` placeholders are documented as user fills.
- [ ] A delivery method is decided (zip download, GitHub release link,
      Notion share, or manual email after each sale).
- [ ] `START_HERE.md` clearly explains the 5-minute first-use loop.

## Build / type-check

- [ ] `pnpm run type-check` clean.
- [ ] `pnpm run build` clean.
- [ ] Local dev runs on http://localhost:3001.

## Legal & policy

- [ ] Email used in legal pages: `support@vibecodesafety.com`.
- [ ] No fake testimonials, no fake "5,000 customers" claims.
- [ ] Disclaimer present near pricing: this is not a security audit and
      does not replace a senior developer.

## Email consent (optional)

- [ ] Pricing card includes the **unchecked-by-default** marketing
      consent checkbox.
- [ ] When connecting to a real provider, do not pre-check it.

## After launch

- [ ] Watch the first 5 real purchases. Confirm each buyer received the
      kit.
- [ ] Open one bug ticket per piece of feedback. Don't lose any.
- [ ] Schedule a v1.1 pass: typos, missing examples, new tools to support.
