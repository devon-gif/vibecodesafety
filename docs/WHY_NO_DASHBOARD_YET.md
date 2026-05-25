# Why No Dashboard Yet

VibeCode Safety v1 intentionally keeps setup simple.

Members use their existing AI coding tools and the downloadable member kit:

- VibeCode Auditor Agent instructions
- Heavy-Duty Repo Audit workflow
- Daily AI Change Reviews
- Weekly Safety Notes
- Monthly Safety Drops
- Repo rules and launch guardrails

## Billing

Stripe Customer Portal handles billing, invoices, and cancellation. The site uses `NEXT_PUBLIC_CUSTOMER_PORTAL_LINK` when available and falls back to `/manage-subscription` support instructions when it is missing.

## Why this is simpler

- No new dashboard to learn.
- No GitHub connection required for v1.
- No account setup required before using the prompts and files.
- Members can start inside the AI coding tool they already use.

## When a dashboard may make sense later

A custom dashboard may be useful later for:

- account access
- saved reports
- GitHub connections
- audit history
- member update archives

Do not build a dashboard until one of those needs is worth the added complexity.
