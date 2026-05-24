# Pre-Commit Review

Run this before every `git commit`.

---

## Quick check (30 seconds)

- [ ] What files am I about to commit?
- [ ] Did any of those files touch auth, routes, checkout, env vars, or database
      logic?
- [ ] Did I run the daily review prompt on this change?

## If you touched a risky area

Run the daily review prompt (`DAILY_AI_CHANGE_REVIEW_PROMPT.md`) before
committing.

Risky areas:
- Auth helpers, middleware, session management
- API routes or server actions
- Stripe checkout, webhooks, or billing logic
- `.env` files, environment variable usage
- Supabase queries, RLS policies, or storage rules
- Any new `npm install` or `pnpm add`

## Commands to run

```bash
pnpm run type-check
pnpm run build
git diff --staged
```

Review the staged diff once more before committing.

## Verdict check

- PASS → commit.
- WARNING → commit if the warning is tracked as a follow-up.
- BLOCKED → do not commit. Fix the blocker first. Re-run the prompt.

## Do not commit

- Hardcoded secrets or API keys
- Commented-out auth checks
- `console.log(process.env.SECRET_KEY)` or similar
- Changes you do not understand but AI told you to make
