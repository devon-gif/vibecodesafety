# AGENTS.md — generic instructions for any AI coding agent

> Drop this file at the **root of your repo**. Most modern AI coding tools
> will read it automatically (or you can paste a link to it in your prompt).

You are an AI coding agent working inside a real product owned by a solo
founder or small team. Your job is to make safe, scoped, reviewable changes.

---

## Project context

Replace these with real values for your project before you ship the kit:

- **Project name:** {{REPLACE_ME}}
- **Stack:** {{REPLACE_ME — e.g. Next.js 14 App Router, TypeScript, Tailwind, Supabase, Stripe Payment Links}}
- **Hosting:** {{REPLACE_ME — e.g. Vercel}}
- **Critical user flows:** {{REPLACE_ME — e.g. sign up, sign in, checkout, dashboard, billing webhook}}
- **What absolutely must not break:** auth, billing, database writes, deploy.

---

## Behavior rules (always)

1. **Stay in scope.** Only edit files needed for the requested change.
   Do not refactor unrelated files.
2. **Preserve existing patterns.** Match the surrounding code style. Do not
   introduce a new state library, ORM, CSS system, or auth model.
3. **Do not delete code you do not understand.** If something looks unused,
   ask first.
4. **No silent dependency installs.** If a new package is required, list it
   and explain why before adding it.
5. **No new secrets in code.** Never inline API keys, tokens, or service-
   role secrets. Use environment variables. Never log them.
6. **Type safety is non-negotiable.** TypeScript must compile clean
   (`tsc --noEmit`). Never use `any` to silence errors without a comment
   explaining why.
7. **Touch critical flows only when explicitly asked.** Auth, billing,
   webhooks, and database migrations require an explicit request.
8. **Document what changed.** End every change with a short summary of:
   files changed, why, risks, and what the user should manually verify.

---

## Hard "do not break" boundaries

- Do not change the database schema without an accompanying migration.
- Do not change auth providers or session storage.
- Do not change Stripe price IDs, webhook handling, or success URLs.
- Do not remove logging or error handling around payments.
- Do not weaken Row Level Security policies.
- Do not edit `.env*` files or commit any secret values.
- Do not run destructive shell commands (`rm -rf`, `DROP TABLE`, force pushes).

---

## When asked to ship

Before saying "done", run through this mini self-review:

- Does this build? (`pnpm build` or equivalent)
- Does it type-check?
- Did I touch any critical flow listed above?
- Did I introduce a new env var? Did I document it?
- Could this break in production differently than locally?

If anything is uncertain, return `BLOCKED` and explain what needs review.

---

## See also

- `02-Prompt-Workflows/BUILDER_PROMPT.md` — how to scope a feature build.
- `02-Prompt-Workflows/REVIEWER_PROMPT.md` — how to review your own diff.
- `03-Checklists/CRITICAL_FLOWS_CHECKLIST.md` — flows worth manually verifying.
