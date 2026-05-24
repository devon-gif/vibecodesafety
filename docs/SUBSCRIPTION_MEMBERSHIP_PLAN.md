# Subscription Membership Plan

## Product

**VibeCode Safety** — an AI-assisted safety workflow kit for vibe coders.

## Pricing

| Plan | Price | Stripe mode |
|------|-------|-------------|
| Monthly | $6.99/month | subscription |
| Yearly | $59/year | subscription (~30% savings) |

## What members get

- **VibeCode Auditor Agent** — instructions to load into Claude, Cursor,
  Windsurf, or Codex so the AI reviews code like a cautious senior engineer
- **Heavy-Duty Repo Audit** — full AI-assisted audit prompts for all major
  risk areas (auth, secrets, API validation, Supabase RLS, Stripe checkout,
  deploy readiness)
- **Daily Build Guardrails** — short copy-paste prompts for pre-commit,
  pre-push, and pre-deploy reviews
- **Monthly Safety Drops** — focused monthly packs covering one risk area at
  a time (Stripe, Supabase RLS, Auth Sessions, and more)
- **Ongoing updates** — new drops and kit updates as part of the subscription

## What members do NOT get

- Manual repo review by a human
- Guaranteed security or production-readiness
- GitHub repo access or automated scanning
- Custom workflows or debugging help
- Legal or compliance advice

## Delivery

Member kit is delivered as a downloadable ZIP from the access page after
successful Stripe checkout. No SaaS dashboard — just files.

The access page URL is a private slug:
`/access/vcs-launch-edition-2026-k9p4`

This slug is shared in the post-checkout success page.

## Billing management

Subscribers manage their billing through the Stripe Customer Portal.

- Portal URL: set via `NEXT_PUBLIC_CUSTOMER_PORTAL_LINK` env var
- Cancel anytime: cancellation takes effect at end of billing period
- Retention offer: optional coupon ($3.99/month for 3 months) — configure
  in Stripe Customer Portal settings

## Roadmap (no commitment)

- [ ] Stripe Customer Portal live link in site footer/header
- [ ] More monthly drops (CORS, dependency scanning, error handling)
- [ ] Video walkthrough of the audit workflow
- [ ] Possible: member community (Discord or forum)
- [ ] Possible: team/agency pricing tier

## Stripe setup checklist

See `docs/CHECKOUT_TODO.md` and `docs/STRIPE_SETUP.md`.
