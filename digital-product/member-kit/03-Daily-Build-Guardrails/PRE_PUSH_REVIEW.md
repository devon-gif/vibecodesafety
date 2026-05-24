# Pre-Push Review

Run this before every `git push`.

---

## Quick check (1 minute)

- [ ] What commits am I about to push?
- [ ] Have I reviewed the full branch diff, not just the last commit?
- [ ] Does the daily review prompt show PASS or an accepted WARNING for this
      batch of changes?
- [ ] Do type-check and build still pass?

## Commands to run

```bash
pnpm run type-check
pnpm run build
git log origin/main..HEAD --oneline
git diff origin/main..HEAD
```

Review the full diff since the last push. Look for anything that looks different
than you intended.

## Things to catch before pushing

- Accidentally committed `.env.local` or real secrets
- Debug code or `console.log` statements with sensitive data
- A half-finished auth check that compiles but does not work
- A new dependency you added but did not review
- Type errors suppressed with `as any` or `// @ts-ignore` without explanation

## Verdict check

- PASS → push.
- WARNING → push if the warning is tracked and does not affect auth, checkout,
  or data security.
- BLOCKED → do not push. Fix the blocker. Re-run the daily review prompt.
  Push only after clearing the blocker.
