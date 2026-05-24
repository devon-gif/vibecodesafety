# VibeCode Safety Kit — Product Plan

## Product
**VibeCode Safety Kit** — a one-time, $49 digital kit for solo founders and AI builders.

## Positioning
> Make AI check the AI before you ship.

A practical guardrail system — prompts, checklists, repo rules, and pre-deploy workflows that help catch broken flows, exposed secrets, schema drift, and risky AI-generated changes before they go live.

## Why now
- AI coding tools (Claude, Codex, Cursor, Windsurf, etc.) make it easy to ship fast.
- The same tools regularly produce changes that work in one file but break the rest of the app: auth boundaries, billing flows, schema, secrets.
- Solo founders and non-technical builders don't have a senior engineer reviewing every diff.
- The kit fills the “review gap” between AI output and production.

## Target audience
- Solo founders building with AI
- Non-technical founders
- Designers building SaaS
- Indie hackers
- Small agencies
- Vibe coders using Claude, Codex, Cursor, Windsurf, or similar

## What it is **not**
- Not a senior developer replacement.
- Not a SaaS subscription.
- Not a code-review service.
- Not a guarantee of security.

## Kit contents (v1)
- AGENTS.md template
- CLAUDE.md / Cursor rules template
- Builder prompt template
- Reviewer prompt template
- Architecture doc template
- Critical flows checklist
- Security boundaries checklist
- Schema contracts checklist
- Pre-deploy checklist
- GitHub Actions starter
- Gitleaks setup guide
- k6 smoke test template
- “How to use it after every AI coding prompt” guide

## Review statuses (used in reviewer prompt)
- **PASS** — safe to commit
- **PASS WITH WARNINGS** — review follow-ups
- **BLOCKED** — fix before push/deploy

## Pricing
- **$49 one-time.**
- No subscription, no seats.
- Lifetime access to the current version of the kit.
- Future major versions may be paid upgrades — TBD.

## Distribution
- Sold via the landing page in this repo.
- Delivered as a ZIP / email link after Stripe checkout (see `CHECKOUT_TODO.md`).

## Roadmap (post-launch)
- v1.1: more example diffs in the reviewer prompt.
- v1.2: language- and framework-specific addendums (Next.js, Supabase, Postgres, etc.).
- v2: optional “automated reviewer” companion (out of scope for the one-time kit).
