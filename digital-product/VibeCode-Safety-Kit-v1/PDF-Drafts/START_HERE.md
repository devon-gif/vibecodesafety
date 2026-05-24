# VibeCode Safety Kit — Start Here

> Markdown draft for the START_HERE PDF.

Welcome. You bought VibeCode Safety Kit. The whole kit fits on one idea:

> **Make AI check the AI before you ship.**

You do not need to be a senior engineer to use this. If you can copy a
file and paste a prompt, you can use this kit.

---

## Beginner Mode (start here)

You only need three things:

1. **VIBECODE_SAFETY_RULES.md** — copied into your repo root.
2. **DAILY_VIBECODE_PROMPT.md** — pasted every time you ask AI to change code.
3. **REVIEWER_PROMPT.md** — pasted before you commit, push, or deploy.

That's it. Three files. One prompt. One review.

The full Beginner Mode lives in `00-Beginner-Mode/`. Open `READ_ME_FIRST.md`
in that folder.

---

## What this kit is (and is not)

**Is:**
- A small folder of prompts, checklists, and guardrails.
- A repeatable habit you run after every AI coding change.
- A way to stop shipping changes you don't fully understand.

**Is not:**
- A course.
- A SaaS subscription.
- A security audit.
- A replacement for a senior developer or QA process.

---

## The 5-step beginner workflow

1. **Copy the safety files** into your project (one-time setup, ~2 minutes).
2. **Fill out your project profile** so AI knows what must not break.
3. **Build with your AI coding tool** like normal.
4. **Paste the Daily Review Prompt** after every AI change.
5. **Ship only when the review passes.**

The verdict is one of three words:
- `PASS` — safe to commit.
- `PASS WITH WARNINGS` — commit carefully, write down the follow-ups.
- `BLOCKED` — fix the listed issues before push or deploy.

If you ever feel unsure: treat it as `BLOCKED`.

---

## Where to go next

- New to coding? → `00-Beginner-Mode/READ_ME_FIRST.md`.
- Comfortable in a repo? → `02-Prompt-Workflows/REVIEWER_PROMPT.md`.
- Ready for the full system? → `START_HERE.md` (the longer guide at the
  root) and the `01-` to `06-` folders.

---

## Honest disclaimer

This kit helps reduce risk. It does not guarantee bug-free or secure
software. Important apps should still get professional engineering and
security review.

Use the kit to slow down for the right five minutes before you ship.
