# PRE_DEPLOY_CHECKLIST.md

Run this before promoting changes to production.

## Build & types
- [ ] `pnpm run type-check` clean.
- [ ] `pnpm run build` clean.
- [ ] No new console errors on changed pages (open DevTools).

## Environment
- [ ] All new env vars added to your hosting provider (Vercel, etc.).
- [ ] Test mode vs live mode confirmed (Stripe especially).
- [ ] Public env vars (`NEXT_PUBLIC_*`) do not contain secrets.

## Critical flows (manual smoke)
- [ ] Sign in / sign up.
- [ ] Sign out.
- [ ] Protected route redirects when logged out.
- [ ] Checkout: a successful test purchase ends at `/success`.
- [ ] Webhook (if any) receives the test event.
- [ ] Data writes: submit one form. Confirm row in DB.

## Security
- [ ] No secrets in the diff.
- [ ] `gitleaks detect` clean.
- [ ] No public access added to private resources (storage buckets, RLS).
- [ ] No new third-party scripts added without review.

## Schema
- [ ] No breaking schema changes without a migration applied to production.
- [ ] Migration is reversible (or you accept the risk and know the rollback).

## Smoke
- [ ] `k6` smoke test passes against staging (if configured).
- [ ] `playwright` smoke test passes (if configured).

## Rollback plan
- [ ] I know how to roll back this deploy in <5 minutes.
- [ ] Hosting provider redeploy of the previous commit is documented.

## Sign-off
- [ ] Reviewer Prompt returned `PASS` or `PASS WITH WARNINGS`.
- [ ] All `PASS WITH WARNINGS` follow-ups are tracked.

If any box is unchecked, fix before deploy.
