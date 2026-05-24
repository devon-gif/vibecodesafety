# WHICH FILE DO I USE?

A one-page cheat sheet. Find your situation in the left column &mdash;
open the file in the right column.

---

## I&rsquo;m setting up the kit for the first time

| Situation | Open this |
|---|---|
| Just bought the kit, what now? | `00-START-HERE/READ_THIS_FIRST.md` |
| Five-minute walkthrough | `00-START-HERE/5_MINUTE_SETUP.md` |
| What does each file do? | `00-START-HERE/WHICH_FILE_DO_I_USE.md` (you are here) |
| What mistakes do beginners make? | `00-START-HERE/COMMON_BEGINNER_MISTAKES.md` |

## I&rsquo;m about to ask AI to change code

| Situation | Open this |
|---|---|
| What standing rules should AI follow? | `00-Beginner-Mode/VIBECODE_SAFETY_RULES.md` |
| What context does AI need about my project? | `00-Beginner-Mode/PROJECT_SAFETY_PROFILE.md` |
| What prompt do I paste before AI builds? | `00-Beginner-Mode/DAILY_VIBECODE_PROMPT.md` |

## AI just finished a change

| Situation | Open this |
|---|---|
| Review the diff before I commit | `00-Beginner-Mode/REVIEWER_PROMPT.md` |
| What does PASS / WARNINGS / BLOCKED mean? | `QUICKSTART.md` (verdict section) |
| Quick scorecard for the change | `99-BUYER-BONUS/VIBECODE_REVIEW_SCORECARD.md` |

## I&rsquo;m about to commit, push, or deploy

| Situation | Open this |
|---|---|
| One-page pre-ship checklist | `99-BUYER-BONUS/BEFORE_YOU_DEPLOY_ONE_PAGE_CHECKLIST.md` |
| Beginner pre-ship checklist | `00-Beginner-Mode/PRE_SHIP_CHECKLIST.md` |
| Deeper pre-deploy checklist | `03-Checklists/PRE_DEPLOY_CHECKLIST.md` |
| What usually breaks in production? | `07-Open-Safety-Patterns/PRE_DEPLOY_RISK_MAP.md` |

## I want to go deeper than Beginner Mode

| Situation | Open this |
|---|---|
| Tool-specific repo rules (Claude / Cursor / Windsurf / Codex) | `01-Repo-Instructions/` |
| Full Builder + Reviewer prompts | `02-Prompt-Workflows/` |
| Pre-commit / pre-push / pre-deploy / handoff lists | `03-Checklists/` |
| Security checklists (secrets, env, API, auth, Supabase, Stripe) | `04-Security-Guardrails/` |
| Automated checks (GitHub Actions, gitleaks, k6, Playwright) | `05-Automated-Checks/` |
| Real-world walkthroughs | `06-Examples/` |
| Background patterns explained | `07-Open-Safety-Patterns/` |

## I want extras / shortcuts

| Situation | Open this |
|---|---|
| Copy-paste prompts I can reuse anywhere | `99-BUYER-BONUS/COPY_PASTE_PROMPT_PACK.md` |
| Quick score for a single AI change | `99-BUYER-BONUS/VIBECODE_REVIEW_SCORECARD.md` |
| The one-page deploy checklist | `99-BUYER-BONUS/BEFORE_YOU_DEPLOY_ONE_PAGE_CHECKLIST.md` |

---

## TL;DR

If you only remember three files:

1. **`VIBECODE_SAFETY_RULES.md`** &mdash; the standing rules. Lives in
   your repo root.
2. **`DAILY_VIBECODE_PROMPT.md`** &mdash; paste before AI builds.
3. **`REVIEWER_PROMPT.md`** &mdash; paste before you commit.

The rest of the kit is depth you grow into.
