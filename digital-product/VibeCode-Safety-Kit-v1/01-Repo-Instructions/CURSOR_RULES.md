# CURSOR_RULES.md — rules for Cursor

> Save these rules in `.cursor/rules/safety-kit.mdc` (or paste into the
> "Project Rules" panel). They apply to every Cursor chat in this repo.

## Project context (fill in)

- Stack: {{REPLACE_ME}}
- Hosting: {{REPLACE_ME}}
- Critical flows: auth, billing, deploy, data writes.

## Always

- Make small, scoped edits. Do not refactor unrelated files.
- Match the existing code style and folder structure.
- Use TypeScript strictly. No `any` to silence errors.
- Use environment variables for secrets. Never inline a key.
- After every change, list: files changed, risk level, and manual checks.

## Never (without explicit instruction)

- Edit auth, middleware, or session code.
- Edit Stripe price IDs, webhook handlers, or success URLs.
- Change the database schema or run a migration.
- Add a new dependency silently.
- Touch `.env*` files.
- Run destructive shell commands (`rm -rf`, force push, drop table).

## When unsure

Return `BLOCKED: <reason>` rather than guessing. The user prefers a clear
question over a confident bad change.

## End of every change

Output:
```
Files changed:
Why:
Risk level: low | medium | high
Critical flows touched:
New env vars:
Manual checks:
```
