# Monthly And Weekly Update System

VibeCode Safety Membership uses two update rhythms:

- Weekly Safety Notes: small, focused updates that take 15–20 minutes to create.
- Monthly Safety Drops: larger themed packs with prompts, checklists, scorecards, guardrails, and implementation notes.

This is a content/update process only. Do not build a dashboard, auth, database, GitHub OAuth, or repo scanning backend for v1.

## Weekly Update Template

Use `digital-product/member-kit/04-Weekly-Safety-Notes/WEEKLY_NOTE_TEMPLATE.md`.

Each weekly note should include:

- one focused risk
- three common misses
- one copy-paste audit prompt
- five quick checks
- PASS / WARNING / BLOCKED scorecard

## 15-20 Minute Weekly Workflow

1. Pick one risk members are likely to hit this week.
2. Write the weekly note from the template.
3. Add a compact audit prompt.
4. Add a five-item checklist.
5. Add PASS / WARNING / BLOCKED scoring.
6. Send the member email manually or through the chosen email provider.
7. Archive the note in `04-Weekly-Safety-Notes/`.

## Monthly Drop Template

Use `digital-product/member-kit/05-Monthly-Safety-Drops/MONTHLY_DROP_TEMPLATE.md`.

Each monthly drop should include:

- README
- AUDIT_PROMPT
- CHECKLIST
- SCORECARD
- WHAT_TO_FIX_FIRST
- IMPLEMENTATION_NOTES

## Monthly Drop Workflow

1. Pick one high-risk theme.
2. Create the drop folder.
3. Write a deeper audit prompt.
4. Add a practical checklist and scorecard.
5. Add implementation notes and fix-first guidance.
6. Package the updated member kit.
7. Send the monthly update email.

## Suggested 6-Month Topic Calendar

| Month | Topic |
|-------|-------|
| June | Stripe Checkout + Billing Safety |
| July | Supabase RLS + Database Rules |
| August | Auth, Sessions + Protected Routes |
| September | Deployment Readiness + Preview Smoke Tests |
| October | Dependency Drift + Supply Chain |
| November | API Validation + Input Safety |

## Guardrails

- Do not promise manual human audits.
- Do not promise guaranteed security.
- Do not imply automated repo scanning exists.
- Keep each update practical and copy-paste friendly.
