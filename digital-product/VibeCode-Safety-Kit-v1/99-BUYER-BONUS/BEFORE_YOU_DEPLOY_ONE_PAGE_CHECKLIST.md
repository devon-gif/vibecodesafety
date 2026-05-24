# BEFORE YOU DEPLOY &mdash; ONE-PAGE CHECKLIST

Print this. Pin it next to your monitor. Run it before every deploy.

---

## Build & types

- [ ] `pnpm run type-check` clean
- [ ] `pnpm run build` clean
- [ ] No new red errors in DevTools on changed pages

## Reviewer verdict

- [ ] Reviewer Prompt was run on the diff
- [ ] Verdict was PASS or PASS WITH WARNINGS
- [ ] Follow-ups (if any) are written down

## Secrets

- [ ] No API keys, tokens, or service-role strings in the diff
- [ ] No `.env*` files staged
- [ ] `gitleaks detect --no-banner` clean (or: I scanned the diff myself)

## Critical flows touched? Smoke them.

- [ ] Sign in works
- [ ] Sign out works
- [ ] Protected route redirects when logged out
- [ ] Test purchase reaches `/success` (test mode)
- [ ] Webhook (if any) updated the user record
- [ ] One form submit writes the row I expect

## Environment

- [ ] Every new env var is set in production
- [ ] No `localhost` URLs in production code paths
- [ ] Stripe **live** keys for production, test keys for dev / preview
- [ ] Public env vars do not contain secrets

## Schema

- [ ] No breaking schema change without a migration
- [ ] Migration applied to production (or planned + scheduled)
- [ ] I know how to reverse the migration

## Rollback

- [ ] I can roll back this deploy in &lt;5 minutes
- [ ] I have 15 minutes after deploy to watch logs

## Final sanity

- [ ] I read the diff one more time
- [ ] I am not deploying at 11:59pm before a holiday
- [ ] My phone is charged in case I need to roll back from somewhere
      else

---

> If any box is unchecked, do not deploy yet.

---

## After deploy (15 minutes)

- [ ] Click through the changed pages on production
- [ ] Watch the error tracker / logs
- [ ] If anything looks wrong: roll back first, debug second
