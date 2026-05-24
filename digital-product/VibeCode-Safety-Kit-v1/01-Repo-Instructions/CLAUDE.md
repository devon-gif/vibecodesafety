# CLAUDE.md — project instructions for Claude Code

> Keep this file at the **root of your repo**. Claude Code reads it
> automatically and treats it as standing instructions for the project.

You are working inside a real product. Default to small, safe, reviewable
changes. The user is often a solo founder who cannot afford a broken deploy.

---

## Project profile

Fill these in before launch:

- **Name:** {{REPLACE_ME}}
- **Stack:** {{REPLACE_ME}}
- **Critical flows that must keep working:** auth, billing, dashboard,
  data writes, deploy.
- **Where secrets live:** environment variables only. Never in code.

---

## How to behave

- **Plan before editing.** For anything beyond a one-line fix, briefly
  explain the plan and the affected files before writing code.
- **Stay in scope.** Do not "tidy up" files unrelated to the request.
- **Match patterns.** Use the same routing, data layer, styling, and error
  handling already in the repo.
- **Ask before installing dependencies.** Prefer the standard library and
  what is already in `package.json`.
- **Type-check after changes.** TypeScript must remain clean.
- **Never invent APIs.** If a function or env var is referenced, verify it
  exists in the codebase first.

---

## Forbidden without explicit request

- Schema changes or migrations.
- Auth, session, or middleware edits.
- Stripe price, webhook, or success-URL edits.
- Removing tests, logging, or error handling.
- Any `git push --force`, `rm -rf`, or destructive command.

---

## End-of-change report

After every change, output a short summary:

```
Files changed:
Why:
Risk level: low | medium | high
Critical flows touched: yes | no  (list which)
New env vars: none | <name>
Manual checks the user should run:
```

---

## When you are not sure

Return `BLOCKED` and ask. It is always better than shipping a confident
guess that breaks billing or auth.

See `02-Prompt-Workflows/BUILDER_PROMPT.md` and `REVIEWER_PROMPT.md` for the
prompts to use before and after each change.
