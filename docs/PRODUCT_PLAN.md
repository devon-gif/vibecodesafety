# VibeCode Safety Kit - Product Plan

## Product
**VibeCode Safety Kit - Launch Edition** - a one-time, $29.99 digital kit for beginner vibe coders and AI-assisted founders.

## Positioning
> Ship faster without shipping blind.
>
> Make AI check the AI before you ship.

**Core promise:** copy 3 files, paste 1 prompt, don't ship until the review passes.

A practical guardrail system - prompts, checklists, repo rules, and pre-deploy workflows that help catch broken flows, exposed secrets, schema drift, and risky AI-generated changes before they go live.

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

## Kit contents (Launch Edition)

**Beginner Mode (included)**
- VIBECODE_SAFETY_RULES.md
- PROJECT_SAFETY_PROFILE.md
- DAILY_VIBECODE_PROMPT.md
- REVIEWER_PROMPT.md
- PRE_SHIP_CHECKLIST.md
- QUICKSTART.md

**Core Guardrails (included as templates / starter docs)**
- Repo instruction templates (AGENTS.md, CLAUDE.md, Cursor / Windsurf / Copilot rules)
- Security guardrail checklists (secrets, NEXT_PUBLIC env mistakes, API routes, Supabase RLS, Stripe webhooks)
- Pre-commit / pre-deploy / release / rollback checklists
- Gitleaks setup
- GitHub Actions starter
- Playwright smoke test starter
- k6 smoke test starter
- “How to use it after every AI coding prompt” guide

All Core Guardrails are included as templates and starter docs. The site does not run these tools automatically.

## Review statuses (used in reviewer prompt)
- **PASS** - safe to commit
- **PASS WITH WARNINGS** - review follow-ups
- **BLOCKED** - fix before push/deploy

## Pricing
- **Launch Edition: $29.99 one-time.**
- No subscription, no seats, no hosted dashboard.
- Lifetime access to the current version of the kit.
- **Future tiers (may come later, not promised today):**
  - Lite/Minimal: $29–$49 (current Launch Edition lives here)
  - Core/Balanced: $79–$149 (deeper automation, more examples)
  - Premium/Team: $249–$499+ (team workflows, setup support)
- We are **not** promoting $79–$149 today. The page only sells the Launch Edition.

## Distribution
- Sold via the landing page in this repo.
- Delivered as a ZIP / email link after Stripe checkout (see `CHECKOUT_TODO.md`).

## Roadmap (post-launch)
- v1.1: more example diffs in the reviewer prompt; tighten Beginner Mode.
- v1.2: framework-specific addendums for Next.js / Supabase / Stripe / GitHub / Vercel.
- v1.3: Core tier with deeper automation guides and more worked examples.
- v2: optional Team tier with setup support and review templates for small agencies.

## What it is **not**
- Not a hosted dashboard.
- Not a subscription.
- Not a senior developer replacement.
- Not a security audit or compliance certification.
- Not a guarantee of secure, bug-free, or production-ready software.
