# AI Code Review Playbook

> Markdown draft for the AI_CODE_REVIEW_PLAYBOOK PDF.

A short, opinionated playbook for reviewing AI-generated code without
being a senior engineer. The whole point: use a second AI pass to check
the first AI pass.

---

## The core idea

Most AI coding bugs are not in the file you are looking at. They are in
the files connected to it: auth, billing, the database, deployment,
shared types, an env var you forgot to set.

A second AI review pass catches most of these in 30 seconds. You don't
have to spot the bug yourself — you just have to ask the right question.

---

## The two-prompt loop

1. **Builder Prompt** — sent **before** AI builds. Scopes the change so
   AI does not silently rewrite half your app.
2. **Reviewer Prompt** — sent **after** AI builds, **before** you commit.
   Returns a structured verdict: PASS / PASS WITH WARNINGS / BLOCKED.

For Beginner Mode, you can skip the Builder Prompt and just use the
Reviewer Prompt. It still catches the worst stuff.

---

## What the Reviewer Prompt checks

When you paste the Reviewer Prompt + your diff into a fresh AI chat, it
returns a report:

1. **Files changed** — bullet list.
2. **Summary** — what this change does in 2–4 sentences.
3. **Risk level** — low / medium / high.
4. **Broken-flow check** — auth, billing, data writes, schema, public
   pages, build / deploy. Each marked `OK`, `AT RISK`, or `NOT TOUCHED`.
5. **Security review** — secrets exposed, env vars introduced, API
   routes, logging, third-party scripts.
6. **Type / build sanity** — will `tsc --noEmit` pass? `any` casts that
   hide errors?
7. **Things that might silently break** — connected files / flows the AI
   did not see in the diff.
8. **Required fixes** — bullet list of must-do items.
9. **Follow-ups** — track but don't block.
10. **VERDICT** — exactly one of:
    - `PASS`
    - `PASS WITH WARNINGS`
    - `BLOCKED`

If the reviewer cannot return a confident verdict, the answer is
`BLOCKED`.

---

## How to use the verdict

- **PASS** — safe to commit.
- **PASS WITH WARNINGS** — commit, but write the follow-ups in your
  notes / issue tracker before you forget.
- **BLOCKED** — fix the items, then re-paste the new diff into the
  Reviewer Prompt. Repeat until you get PASS or PASS WITH WARNINGS.

Do **not** push or deploy on a `BLOCKED` verdict.

---

## Common AI-coding bugs the Reviewer catches

- A change to one component quietly broke `/dashboard` because it shared
  a type / hook / context.
- A new API route did not check auth — anyone can hit it.
- A new API route reads `userId` from the request body instead of the
  session — User A can read User B's data.
- A migration created a table without RLS — data is public.
- The Stripe webhook handler does not verify the signature.
- The `/success` page is what flips a user to "paid" — anyone visiting
  the URL gets a paid plan.
- A new env var is referenced but never added to the host's env settings
  — works locally, breaks in production.
- A `console.log(session)` slipped in near billing.
- A new dependency was installed but the lockfile was not updated.

You don't have to know which one happened. The Reviewer flags it.

---

## Reviewer hygiene

- Use a **fresh chat** for the Reviewer. Don't re-use the same chat that
  built the change. The same AI is more likely to defend its own code.
- Use a **different AI** if you can (e.g. built with Claude → review
  with GPT, or vice versa). Two different models miss fewer bugs.
- Paste the **diff or the full new file contents**, not "I added X".
  The Reviewer needs to see the actual code.

---

## When to skip the Reviewer

You can skip when **all** of the following are true:

- The change is one obvious line (typo, copy edit).
- The change does not touch `auth/`, `api/`, `middleware`, billing, or
  migrations.
- The change does not add a dependency or env var.
- The change is not going to a deploy branch.

Otherwise: run the Reviewer.

---

## Pair this with PRE_SHIP_SAFETY_CHECKLIST.md

The Reviewer Prompt catches the diff. The Pre-Ship Checklist catches the
**deploy**: env vars, type-check, build, gitleaks, smoke tests, rollback
plan.

The two together are most of the value of this kit.
