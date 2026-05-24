# PRE_COMMIT_CHECKLIST.md

Run this before every `git commit`. It is short on purpose.

## Diff sanity
- [ ] I read the full diff.
- [ ] No unrelated files changed.
- [ ] No commented-out chunks of code I forgot to clean up.
- [ ] No `console.log`, `print(...)`, or scratch debug output left behind.

## Secrets
- [ ] No API keys, tokens, or service-role strings in the diff.
- [ ] No `.env*` files in the diff.
- [ ] No real user emails / IDs / payloads pasted into code or fixtures.

## Types & build
- [ ] `pnpm run type-check` (or equivalent) is clean.
- [ ] No new `any` casts that hide a real error.

## Reviewer verdict
- [ ] Reviewer Prompt returned `PASS` or `PASS WITH WARNINGS`.
- [ ] If `PASS WITH WARNINGS`, follow-ups are written down.

## Critical flows
- [ ] If I touched auth, billing, or middleware: I clicked through the
      affected flow once locally.

If any box is unchecked, fix it before commit.
