# Subscription Membership Plan

## Product

**VibeCode Safety Membership** is an AI-assisted safety workflow subscription
for vibe coders.

## Pricing

| Plan | Price | Stripe mode |
|------|-------|-------------|
| Monthly | $6.99/month | subscription |
| Yearly | $59/year | subscription (~30% savings) |

## What members get

- **VibeCode Auditor Agent** - instructions to load into Claude, Cursor,
  Windsurf, or Codex so the AI reviews code like a cautious senior engineer
- **Heavy-Duty Repo Audit** - full AI-assisted audit prompts for all major
  risk areas (auth, secrets, API validation, Supabase RLS, Stripe checkout,
  deploy readiness)
- **Daily Build Guardrails** - short copy-paste prompts for pre-commit,
  pre-push, and pre-deploy reviews
- **Weekly Safety Notes** - short weekly updates with one focused risk, a
  quick checklist, and a copy-paste prompt
- **Monthly Safety Drops** - larger themed monthly packs with prompts,
  checklists, scorecards, guardrails, implementation notes, and fix-first
  guidance
- **Ongoing updates** - new notes, drops, and kit updates as part of the
  subscription

## What members do NOT get

- Manual repo review by a human
- Guaranteed security or production-readiness
- GitHub repo access or automated scanning
- Custom workflows or debugging help
- Legal or compliance advice

## Delivery

Member kit is delivered as a downloadable ZIP from the access page after
successful Stripe checkout. No SaaS dashboard yet, just files.

The access page URL is a private slug:
`/access/vcs-launch-edition-2026-k9p4`

This slug is shared in the post-checkout success page.

## Billing management

Subscribers manage their billing through the Stripe Customer Portal.

- Portal URL: set via `NEXT_PUBLIC_CUSTOMER_PORTAL_LINK` env var
- Cancel anytime: cancellation takes effect at end of billing period
- Cancellation reasons: enable collection inside Stripe Customer Portal
- Retention offer: optional coupon ($3.99/month for 3 months) - configure
  in Stripe Customer Portal settings
- Site route: `/manage-subscription` opens the portal when the env var exists
  and shows support instructions when it is missing

## Roadmap (no commitment)

- [ ] Stripe Customer Portal live link in site footer/header
- [ ] More weekly notes and monthly drops (CORS, dependency scanning, error handling)
- [ ] Member email/update workflow for weekly notes and monthly drops
- [ ] Video walkthrough of the audit workflow
- [ ] Possible: member community (Discord or forum)
- [ ] Possible: team/agency pricing tier

## Stripe setup checklist

See `docs/CHECKOUT_TODO.md` and `docs/STRIPE_SETUP.md`.
See `docs/STRIPE_CUSTOMER_PORTAL.md` for portal setup.

## Launch Validation

- Create monthly Stripe subscription price: $6.99/month.
- Create yearly Stripe subscription price: $59/year.
- Add monthly checkout link to `NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK`.
- Add yearly checkout link to `NEXT_PUBLIC_YEARLY_CHECKOUT_LINK`.
- Configure Stripe Customer Portal.
- Enable cancellation in Stripe Customer Portal.
- Add optional retention coupon.
- Test monthly checkout.
- Test yearly checkout.
- Test success redirect.
- Test member kit download.
- Confirm Weekly Safety Notes are included.
- Confirm Monthly Safety Drops are included.
- Confirm member email/update process is ready.
- Confirm cancellation copy is accurate.
- Confirm no manual audit promise exists.
- Confirm no security guarantee exists.
