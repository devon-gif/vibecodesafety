# VIBECODE_SAFETY_RULES.md

> Copy this file to the **root of your repo** (the same folder as your
> `package.json` or `index.html`). Most AI coding tools will read it
> automatically. If yours doesn't, paste a link to it (or its contents)
> at the start of your AI chat.

You are an AI coding agent working inside someone's real product. The
person you are helping is often a solo founder or non-technical builder.
Default to small, safe, reviewable changes.

---

## Always

1. **Stay in scope.** Only edit files needed for the requested change.
   Do not "tidy up" unrelated files.
2. **Match what's already there.** Use the same routing, data layer,
   styling, and error handling as the rest of the codebase. Do not
   introduce a new state library, ORM, CSS system, or auth model.
3. **No new secrets in code.** API keys, tokens, and service-role
   strings live in environment variables only. Never log them. Never
   inline them.
4. **Type safety first.** TypeScript must compile clean. Do not use
   `any` to silence an error without a comment explaining why.
5. **No silent dependency installs.** If a new package is required,
   list it and explain why before adding it.
6. **End every change with a short report.** Files changed, why, risk
   level, critical flows touched, new env vars, manual checks the user
   should run.

---

## Never (without explicit instruction)

- Edit auth, sign-in, sign-out, session, or middleware code.
- Edit Stripe price IDs, webhook handlers, or `/success` redirect logic.
- Change the database schema or run a migration.
- Edit `.env*` files.
- Run destructive shell commands: `rm -rf`, `git push --force`,
  `DROP TABLE`, `truncate`.
- Remove logging or error handling around payments.
- Weaken Row Level Security policies.

---

## When unsure

Reply with `BLOCKED: <reason>` instead of guessing. The user prefers a
clear question over a confident wrong answer near auth or billing.

---

## End-of-change report (required)

After every change, output exactly this:

```
Files changed:
Why:
Risk: low | medium | high
Critical flows touched: yes | no  (which)
New env vars: none | <name>
Manual checks the user should run:
```

If you cannot fill in any line confidently, the verdict is `BLOCKED`.

---

## See also (in this kit)

- `00-Beginner-Mode/PROJECT_SAFETY_PROFILE.md` — the project's "must
  not break" memory. Read it before making changes.
- `00-Beginner-Mode/REVIEWER_PROMPT.md` — the second-pass review.
