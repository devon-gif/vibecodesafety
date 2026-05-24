# AFTER_EVERY_AI_CHANGE.md

A short, repeatable loop you run **every time** AI changes your code.

It takes about 5 minutes. The point is to slow down for the right five
minutes, not to add a giant process.

---

## The 5-minute loop

1. **Read the diff yourself first.** Even if you don't fully understand the
   code, scan the file list. Anything in `auth/`, `api/`, `lib/db`,
   `middleware`, `stripe/`, or migrations? Slow down.

2. **Run the Reviewer Prompt.**
   Use `02-Prompt-Workflows/REVIEWER_PROMPT.md` in a fresh AI chat.
   Wait for the structured verdict.

3. **Run the right checklist** for what you're about to do:
   - About to commit → `03-Checklists/PRE_COMMIT_CHECKLIST.md`
   - About to push → `03-Checklists/PRE_PUSH_CHECKLIST.md`
   - About to deploy → `03-Checklists/PRE_DEPLOY_CHECKLIST.md`

4. **Run automated checks** (whatever you have wired up):
   - `pnpm run type-check`
   - `pnpm run build`
   - `gitleaks detect` (if installed)
   - smoke test (k6 or Playwright)

5. **Manually verify any critical flow you touched.** Auth, billing,
   onboarding, dashboard. One click each. 60 seconds.

If the Reviewer returned `BLOCKED`, **stop**. Fix and re-run.

---

## When to skip parts of the loop

You can skip parts of the loop only when **none** of the following are true:

- The change touched `auth/`, `api/`, `middleware`, billing, or migrations.
- The change added a new dependency.
- The change added a new env var.
- The change is going to a deploy branch.

Otherwise: do the full loop.
