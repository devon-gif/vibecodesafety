# START HERE — VibeCode Safety Kit

Welcome. This is the kit that makes AI check the AI before you ship.

> **Start simple:** copy 3 files into your repo, paste 1 prompt after
> every AI coding change, and don&rsquo;t ship until the review passes.
> The full Beginner Mode walkthrough is in `00-Beginner-Mode/`.

It is a small folder of prompts, checklists, and guardrails. You drop it
into your repo and reuse it after every AI coding change.

This is **not** a course, not a SaaS, and not a security audit. It is a
practical workflow that helps AI-assisted builders catch broken flows,
exposed secrets, schema drift, and risky edits before they go live.

---

## How to use this kit (5 minutes)

1. **Copy the folder into your repo.**
   The simplest path: copy `VibeCode-Safety-Kit-v1/` to the root of your
   project and rename it to `safety-kit/` if you prefer.

2. **Tell your AI tools about your repo.**
   Open `01-Repo-Instructions/` and copy the file that matches your tool
   (`AGENTS.md`, `CLAUDE.md`, `CURSOR_RULES.md`, `WINDSURF_RULES.md`,
   `CODEX_INSTRUCTIONS.md`) to the location your tool reads from.
   - Cursor: drop into `.cursor/rules/`.
   - Claude Code: keep `CLAUDE.md` at the repo root.
   - Codex / generic agents: keep `AGENTS.md` at the repo root.

3. **Use the Builder Prompt** *before* you ask AI to build a feature.
   See `02-Prompt-Workflows/BUILDER_PROMPT.md`.

4. **Use the Reviewer Prompt** *after* the AI is done.
   See `02-Prompt-Workflows/REVIEWER_PROMPT.md`. The reviewer returns a
   verdict: `PASS`, `PASS WITH WARNINGS`, or `BLOCKED`.

5. **Run the checklists before you commit, push, or deploy.**
   `03-Checklists/PRE_COMMIT_CHECKLIST.md` →
   `03-Checklists/PRE_PUSH_CHECKLIST.md` →
   `03-Checklists/PRE_DEPLOY_CHECKLIST.md`.

---

## The verdict system

After every AI change, the Reviewer Prompt should return one of:

- **PASS** — safe to commit.
- **PASS WITH WARNINGS** — commit carefully and track the follow-ups.
- **BLOCKED** — fix the listed issues before push or deploy.

If the AI cannot produce a confident verdict, treat it as **BLOCKED**.

---

## What's in this folder

```
VibeCode-Safety-Kit-v1/
├── START_HERE.md                  ← you are here
├── 01-Repo-Instructions/          ← tell AI how to behave in your repo
├── 02-Prompt-Workflows/           ← Builder + Reviewer prompts
├── 03-Checklists/                 ← pre-commit / push / deploy / handoff
├── 04-Security-Guardrails/        ← secrets, env, API, auth, Supabase, Stripe
├── 05-Automated-Checks/           ← Gitleaks, GitHub Actions, k6, Playwright
└── 06-Examples/                   ← real-world walkthroughs
```

---

## Honest disclaimer

This kit helps reduce risk. It does **not** guarantee bug-free or secure
software. It is **not** a replacement for a senior developer, professional
QA, or a security audit. Important apps should still get professional
engineering and security review before launch.

Use the kit to slow down for the right five minutes before you ship.
