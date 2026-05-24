# READ ME FIRST — Beginner Mode

> If you are a vibe coder, designer, indie hacker, or non-technical
> founder using AI to build apps: **start here**. This page is the
> entire kit, simplified.

The whole idea fits in one sentence:

> **Start simple:** copy 3 files into your repo, paste 1 prompt after
> every AI coding change, and don&rsquo;t ship until the review passes.

---

## What you'll do (5 steps, ~10 minutes total)

### 1. Copy the safety files into your project

From this folder, copy these three files into the **root of your repo**
(the same folder as your `package.json` or `index.html`):

- `VIBECODE_SAFETY_RULES.md`
- `DAILY_VIBECODE_PROMPT.md`
- `REVIEWER_PROMPT.md`

You can also copy the rest of this folder if you like — it's small.

### 2. Fill out your project profile

Open `PROJECT_SAFETY_PROFILE.md` in this folder. Fill in 5–10 lines
about your project: what it does, what stack it uses, what must not
break. This is the "memory" you give to your AI tools so they stop
treating every change like a brand new project.

### 3. Build with your AI coding tool like normal

Cursor, Claude Code, Windsurf, Codex, Copilot, Lovable, Bolt, Replit —
whatever you use. Build the feature.

### 4. Paste the Daily VibeCode Prompt every time

Before letting AI run wild, paste `DAILY_VIBECODE_PROMPT.md` into the
chat. It tells AI:

- Stay in scope.
- Do not break critical flows (auth, billing, deploy).
- No new dependencies without saying so.
- Output a short report at the end.

### 5. Run the Reviewer Prompt before you commit, push, or deploy

Open a **fresh AI chat**. Paste `REVIEWER_PROMPT.md`. Paste your diff
(or the changed files). The reviewer returns one of three verdicts:

- **PASS** → safe to commit.
- **PASS WITH WARNINGS** → commit carefully, write down follow-ups.
- **BLOCKED** → fix the listed issues first.

Then run `PRE_SHIP_CHECKLIST.md` before going live.

That's the whole loop.

---

## What "Beginner Mode" gives up

Compared to the full kit, Beginner Mode skips:

- Tool-specific repo rules (`AGENTS.md`, `CLAUDE.md`, Cursor rules,
  Windsurf rules).
- Detailed checklists for Supabase, Stripe, API routes, auth, env vars.
- Automated checks: GitHub Actions, gitleaks, k6, Playwright.
- Deeper examples.

You can graduate to **Advanced Mode** any time. Open the other folders
in this kit when you are ready: `01-Repo-Instructions`, `02-Prompt-
Workflows`, `03-Checklists`, `04-Security-Guardrails`, `05-Automated-
Checks`, `06-Examples`.

---

## What's in this folder

```
00-Beginner-Mode/
├── READ_ME_FIRST.md            ← you are here
├── VIBECODE_SAFETY_RULES.md    ← rules for your AI tools (copy to repo)
├── PROJECT_SAFETY_PROFILE.md   ← fill in your project's "must not break"
├── DAILY_VIBECODE_PROMPT.md    ← paste before AI builds
├── REVIEWER_PROMPT.md          ← paste before commit / push / deploy
└── PRE_SHIP_CHECKLIST.md       ← run before going live
```

---

## Honest reminder

This kit reduces risk. It does **not** guarantee bug-free or secure
software. It is **not** a replacement for a senior developer or a real
security review. If you are storing money, health data, or anything
regulated: also get a professional review.

Use the kit to slow down for the right five minutes before you ship.
