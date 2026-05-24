# Pre-Deploy Review

Run this before every production deploy.

This is more thorough than the pre-commit or pre-push review.

---

## Build and type health

```bash
pnpm run type-check
pnpm run build
```

Both must pass cleanly before deploying.

---

## Environment variables

- [ ] All required production env vars are set in the hosting platform.
- [ ] No env var values are still pointing to localhost, test endpoints,
      or placeholder values.
- [ ] Stripe live keys are used in production (not test keys).
- [ ] Supabase service role key is set as a server-only env var (not
      NEXT_PUBLIC_).

---

## Critical flow smoke check

Manually verify or run smoke tests for:

- [ ] Homepage loads without errors.
- [ ] Sign in / sign up works.
- [ ] Protected member area requires authentication.
- [ ] Checkout flow initiates and redirects correctly.
- [ ] Post-payment access page is reachable after payment.
- [ ] Contact form submits (if applicable).

---

## Rollback plan

- [ ] I know which commit or build to roll back to if this deploy breaks.
- [ ] I can execute a rollback in under 5 minutes.

---

## Verdict check

- PASS on the full deployment readiness audit → deploy.
- WARNING → deploy only if the warning is documented and does not affect a
  critical flow.
- BLOCKED → do not deploy. Fix the blocker first.

Use `DEPLOYMENT_READINESS_AUDIT.md` for a full AI-assisted deployment review.
