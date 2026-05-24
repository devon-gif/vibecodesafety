# Pre-Deploy Checklist (placeholder)

> Placeholder preview. The full checklist ships in the purchased kit.

Run through this before every push or deploy.

## Build & types
- [ ] `pnpm run type-check` clean
- [ ] `pnpm run build` clean
- [ ] No new console errors on the changed pages

## Critical flows
- [ ] Auth still works (sign in, sign out, protected routes)
- [ ] Billing still works (checkout, webhooks, plan state)
- [ ] Data writes still work (forms, mutations)
- [ ] Anything labeled “critical flow” in AGENTS.md still works

## Security
- [ ] No secrets in the diff
- [ ] Gitleaks clean
- [ ] No public access added to private resources
- [ ] No new third-party scripts without review

## Schema
- [ ] No breaking schema changes without a migration
- [ ] Schema contracts file still matches DB

## Smoke
- [ ] k6 smoke test passes against staging

## Sign-off
- [ ] Reviewer prompt returned PASS or PASS WITH WARNINGS

(Full checklist available in the purchased kit.)
