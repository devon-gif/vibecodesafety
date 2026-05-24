# QUICKSTART

The whole kit in one page. If you read nothing else, read this.

---

## The promise

> Make AI check the AI before you ship.

You build with your AI coding tool like normal. You add a small safety
loop around it. Bad changes get caught before they hit production.

---

## The 5-minute setup

1. **Open your project** in your editor. Make sure it&rsquo;s a git repo.

2. **Copy these files into your repo root** (the folder with
   `package.json` or `index.html`):
   - `00-Beginner-Mode/VIBECODE_SAFETY_RULES.md`
   - `00-Beginner-Mode/PROJECT_SAFETY_PROFILE.md`
   - `00-Beginner-Mode/DAILY_VIBECODE_PROMPT.md`

3. **Fill out `PROJECT_SAFETY_PROFILE.md`** &mdash; 5 to 10 short
   answers about your stack and what must not break.

4. **Save the Daily VibeCode Prompt** somewhere you can paste from in
   one click (snippet manager, notes app, your AI tool&rsquo;s rules).

5. **Try it on a tiny change** to prove the loop works (see step
   &ldquo;The loop&rdquo; below).

That&rsquo;s it. You only do this once per project.

---

## The one prompt to use every time

Paste this at the start of any AI chat where you&rsquo;re about to
change code. You can keep it as `DAILY_VIBECODE_PROMPT.md` in your repo
and just paste the contents.

```
Use the VibeCode Safety workflow. Read VIBECODE_SAFETY_RULES.md and
PROJECT_SAFETY_PROFILE.md first.

Make the smallest safe change. Do not break auth, billing, database,
environment variables, or critical user flows.

After editing, review the full impact of the change and report:
- Files changed
- Why
- Risk: low | medium | high
- Critical flows touched: yes | no (which)
- New env vars: none | <name>
- Manual checks I should run before commit
- Verdict on its own line: PASS | PASS WITH WARNINGS | BLOCKED

If you cannot return a confident verdict, the verdict is BLOCKED.
```

---

## The loop (every AI coding change)

1. Paste the **Daily Prompt** before AI builds.
2. Describe the change. Let AI build.
3. Open a **fresh AI chat**. Paste **REVIEWER_PROMPT.md**. Paste the
   diff or the full new contents of changed files.
4. Read the verdict.
5. Run the **no-ship checklist** below.
6. Ship only on PASS or PASS WITH WARNINGS.

---

## The no-ship checklist

Before you commit / push / deploy:

- [ ] `pnpm run type-check` clean
- [ ] `pnpm run build` clean
- [ ] No secrets in the diff
- [ ] No `.env*` files staged
- [ ] If you touched auth / billing / DB: a 60-second manual smoke
      passed
- [ ] New env vars are set in production
- [ ] Reviewer verdict is PASS or PASS WITH WARNINGS

If any box is unchecked, do not ship yet.

The longer version is `99-BUYER-BONUS/BEFORE_YOU_DEPLOY_ONE_PAGE_CHECKLIST.md`.

---

## PASS / PASS WITH WARNINGS / BLOCKED

Every Reviewer report ends with one of these three lines. Treat them
like traffic lights.

- **PASS** &mdash; green light. Safe to commit and run the no-ship
  checklist.
- **PASS WITH WARNINGS** &mdash; yellow light. Safe to commit, but
  **write down the follow-ups** in your issue tracker or notes before
  you forget.
- **BLOCKED** &mdash; red light. Do not commit yet. Fix the listed
  items, then re-run the Reviewer on the new diff.

If the Reviewer cannot return a confident verdict, the verdict is
**BLOCKED**.

---

## What to do if BLOCKED

1. Read the &ldquo;Required fixes&rdquo; section of the report.
2. Ask AI to make those fixes (or make them yourself).
3. Open a **fresh AI chat** again.
4. Paste the Reviewer Prompt with the new diff.
5. Re-read the verdict.

If it&rsquo;s still BLOCKED, repeat. If it&rsquo;s BLOCKED for the same
reason twice, that&rsquo;s the signal to slow down and either ask a
human or break the change into smaller pieces.

You do not ship until you reach PASS or PASS WITH WARNINGS. That&rsquo;s
the whole rule.

---

## What to manually test before deploy

Sixty seconds of clicking. Pick the rows that apply.

- **Auth:** sign in, sign out, refresh, visit a protected route logged
  out.
- **Billing:** test purchase reaches `/success`. Webhook (if any)
  updates the user record.
- **Data writes:** submit one form. Confirm the row exists.
- **Public pages:** marketing pages still render. Footer legal links
  work.
- **Mobile:** open the changed pages on your phone. Sticky CTAs do
  not cover submit buttons.

For deeper smoke ideas, see
`03-Checklists/CRITICAL_FLOWS_CHECKLIST.md`.

---

## Cheat sheet

| Moment | File to use |
|---|---|
| First time setup | `00-START-HERE/5_MINUTE_SETUP.md` |
| Before AI builds | `00-Beginner-Mode/DAILY_VIBECODE_PROMPT.md` |
| After AI builds (in fresh chat) | `00-Beginner-Mode/REVIEWER_PROMPT.md` |
| Before commit / push / deploy | `99-BUYER-BONUS/BEFORE_YOU_DEPLOY_ONE_PAGE_CHECKLIST.md` |
| Quick score for a single change | `99-BUYER-BONUS/VIBECODE_REVIEW_SCORECARD.md` |
| Ready for more depth | `01-Repo-Instructions/`, `04-Security-Guardrails/`, `05-Automated-Checks/` |

---

## One last reminder

This kit reduces risk. It does **not** guarantee bug-free or secure
software. It is **not** a replacement for a senior engineer, QA, or a
real security audit.

Use it to slow down for the right five minutes before you ship.
