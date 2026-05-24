# PRE_PUSH_CHECKLIST.md

Run this before `git push` to a shared branch (`main`, `develop`,
deploy branches).

## Build & types
- [ ] `pnpm run type-check` clean.
- [ ] `pnpm run build` clean.
- [ ] No new build warnings on changed pages.

## History
- [ ] Commits have meaningful messages (not "wip" / "fix").
- [ ] No merge commits I didn't intend.
- [ ] No `--force` push planned. (If yes: confirm with collaborators first.)

## Secrets
- [ ] `gitleaks detect --no-banner` returns clean.
  (Setup: `04-Security-Guardrails/` and `05-Automated-Checks/GITLEAKS_SETUP.md`)
- [ ] Confirmed no `.env*` files staged.

## Critical flows
- [ ] Auth still works (sign in, sign out, protected routes).
- [ ] Billing / checkout still works (locally or in staging).
- [ ] Data writes still work (forms, mutations).
- [ ] Anything labeled "critical flow" in `AGENTS.md` still works.

## Schema
- [ ] No breaking schema changes pushed without a migration.
- [ ] Migration file is committed alongside the code that needs it.

If any box is unchecked, fix before push.
