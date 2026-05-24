# AGENTS_MD_PATTERN.md

A plain-English explainer of the "repo instruction file" pattern, written
for beginner vibe coders.

> This is a pattern explainer, not a rule file. For an actual rules file
> you can paste into your AI tool, see `00-Beginner-Mode/VIBECODE_SAFETY_RULES.md`
> or `AI_AGENT_RULES_FOR_BEGINNERS.md` in this folder.

---

## What is a repo instruction file?

A repo instruction file is a single markdown file living at the **root
of your project** that tells any AI coding assistant how to behave inside
your repo. Most modern AI coding assistants will read it automatically
or accept it as a "project rules" prompt.

It usually has a recognizable filename. Common conventions in the
community include:

- `AGENTS.md` — generic agent instructions (widely supported).
- `CLAUDE.md` — read by some Claude-based coding tools.
- A rules file inside `.cursor/rules/` for Cursor.
- A rules file inside `.windsurf/rules/` for Windsurf.

VibeCode Safety Kit treats these as **one shared idea**: persistent
project context that AI tools can read every time you start a chat.

---

## Why does AI need persistent project context?

AI coding tools are very good at small, local tasks. They are less good at
remembering:

- Which flows in your product must not break.
- Which folders / files contain auth, billing, or sensitive logic.
- Which dependencies you already use.
- Which patterns you have already established.
- Which env vars exist and where they live.

Without persistent context, each new AI chat starts from zero. It guesses
your stack, sometimes wrong. It refactors things it should not touch.
It adds new dependencies you do not want.

A repo instruction file is the "memory" you give your AI. It is short,
boring, and dramatically reduces the chance of a bad change.

---

## What to include

Keep it short and skimmable. A useful instruction file usually has:

- **Project name and one-sentence pitch.**
- **Stack:** framework, language, styling, database, auth, payments,
  hosting, email provider.
- **Critical flows that must not break:** auth, billing, dashboard,
  deploy, any data write customers depend on.
- **Hard "do not touch" boundaries:** auth code, billing webhooks,
  database schema, `.env*` files.
- **House rules:** smallest viable diff, match existing patterns,
  no silent dependency installs, TypeScript clean, no secrets in code.
- **Reporting format:** what the AI should output at the end of every
  change (files changed, risk level, manual checks).
- **When to refuse:** what the AI should do when it is unsure
  (preferred answer: reply `BLOCKED` and ask).

---

## What NOT to include

- **Secrets, API keys, or tokens.** Never. AI tools log conversations.
- **Internal customer data** (real names, emails, payment info).
- **Long history lessons.** Keep the file short. The longer it gets,
  the less an AI is likely to actually follow it.
- **Style debates.** Use a linter / formatter for style. Save this file
  for safety rules.
- **Marketing language.** Be direct.

---

## Beginner example

```md
# Project rules

You are working in a Next.js + Supabase project owned by a solo founder.

Stack:
- Next.js 14 App Router, TypeScript, Tailwind
- Supabase (Postgres + Auth)
- Stripe Payment Link for one-time purchases
- Vercel hosting

Critical flows:
- Sign in / sign out
- /checkout buy button -> /success
- /dashboard data load
- Deploy must stay green (`pnpm run build`)

Always:
- Smallest safe change. No unrelated refactors.
- Match existing patterns. No new state library or CSS system.
- TypeScript must compile clean. No `any` to silence errors.
- Use environment variables for secrets. Never inline keys.

Never (without explicit instruction):
- Edit auth, middleware, or session code.
- Edit Stripe price IDs, webhook handlers, or /success logic.
- Change database schema or run a migration.
- Edit `.env*` files.

End every change with:
- Files changed
- Risk: low | medium | high
- Critical flows touched: yes | no (which)
- New env vars: none | <name>
- Manual checks I should run
- Verdict: PASS | PASS WITH WARNINGS | BLOCKED

When unsure: reply `BLOCKED: <reason>` and ask.
```

---

## Safety-focused example

A stricter version, useful for live products with paying customers:

```md
# Project rules — strict mode

You are working in a live product with paying customers. Default to
small, reviewable changes. When in doubt, do less.

Critical flows that must remain green:
- Auth (sign in / sign out / protected routes)
- Billing webhook handler
- /checkout and /success
- All RLS policies on public tables
- Deploy pipeline

Forbidden without an explicit, in-chat go-ahead:
- Schema migrations
- Auth or middleware edits
- Stripe webhook edits
- New dependencies
- Edits to .env* files
- Anything in `lib/security/` or `lib/billing/`

Required of every change:
- A "plan first" message listing files you intend to change BEFORE you
  edit them.
- An end-of-change report including a risk level and manual checks.
- An explicit verdict line: PASS / PASS WITH WARNINGS / BLOCKED.

If you cannot return a confident verdict, the verdict is BLOCKED.
```

---

## How to use it day to day

1. Create the file at your repo root (e.g. `AGENTS.md`).
2. Fill in your real stack and critical flows.
3. Open any AI coding chat. Most tools will pick it up automatically.
   If yours doesn't, paste a link or the contents at the start of the
   chat.
4. After every AI change, expect the end-of-change report. If the AI
   forgets, ask for it.
5. Update the file whenever you add a new critical flow.

You will edit this file maybe once a month. That is the whole maintenance
cost.
