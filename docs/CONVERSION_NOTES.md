# Conversion Notes — VibeCode Safety Kit

Working notes about what is placeholder / illustrative on the site so we
do not accidentally ship misleading claims.

---

## Testimonials

- The 3 testimonial-style cards on the homepage are **placeholder /
  example reactions**, not verified customer reviews.
- They are labeled in the UI:
  - "Example founder reaction"
  - "Example vibe coder reaction"
  - "Example agency reaction"
- A disclaimer line appears under the cards:
  > Placeholder reactions shown for product positioning. Real buyer
  > testimonials will be added after launch.
- **TODO post-launch:** replace each card with a real buyer quote and
  attribution (with permission). Remove the placeholder disclaimer once
  real quotes are in.
- Do **not** add fake names, fake photos, or "verified buyer" badges.
- Do **not** use star ratings unless they are clearly marked as
  illustrative.

## AI tool compatibility strip

- The horizontal pill strip lists tool names only (Claude, Codex,
  Cursor, Windsurf, GitHub Copilot, Lovable, Bolt, Replit, v0).
- No official logos are used.
- Compatibility is shown for context only — **no endorsement implied**.
- Disclaimer line appears below the strip:
  > Tool names are shown for compatibility context only. VibeCode Safety
  > Kit is independent and is not affiliated with or endorsed by these
  > companies.
- **TODO if adding logos:** only use brand-safe assets that allow this
  type of usage. Keep the disclaimer either way.

## Google sign-in / accounts

- Accounts are **not** required to buy the kit at launch.
- For launch, Stripe checkout email is the delivery identity.
- The `/sign-up` page is a polished placeholder:
  - Title: "Create your VibeCode Safety account"
  - "Continue with Google" button is **visibly disabled** with a
    `Coming soon` badge.
  - Microcopy: "Google sign-in will be added when account-based
    delivery is available."
  - Primary CTA on the page is still **Get the Kit for $29.99**.
  - Secondary CTA is "Back to Home".
- A subtle "Sign In" link in the header (sm+ breakpoints) routes to
  `/sign-up`. It is **not** the primary CTA.
- **TODO when ready for accounts:** plug in real auth via Supabase
  Auth, Clerk, or NextAuth/Auth.js. Replace the disabled button with a
  working OAuth flow. Update the FAQ entry "Can I sign in with Google?"
  once delivered.

## Checkout / delivery

- One-time purchase at **$29.99 (Launch Edition)**. No subscription.
- All purchase CTAs route through `lib/checkout.ts` →
  `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` (or `/checkout-coming-soon`
  fallback).
- Delivery for launch: access instructions sent to the email used at
  Stripe checkout.
- Future delivery via authenticated download is out of scope for v1.

## Language guardrails

Never claim:
- "verified buyer" testimonials
- "official partnership" with any AI / hosting / payment company
- "endorsed by" any third party
- "guaranteed secure" or "bug-free" or "production-ready guarantee"
- that Google sign-in works (until it does)
- that an account is required to buy

Always say:
- "one-time purchase"
- "no subscription"
- "helps reduce risk" (not "guarantees")
- "not a replacement for a senior developer, QA, or a professional
  security audit"

## Cross-references

- `docs/LAUNCH_CHECKLIST.md` — pre-launch sanity list.
- `docs/CHECKOUT_TODO.md` — Stripe Payment Link setup.
- `docs/STRIPE_SETUP.md` — step-by-step setup.
- `app/sign-up/page.tsx` — placeholder sign-up route.
- `components/SiteHeader.tsx` — subtle Sign In link wiring.
