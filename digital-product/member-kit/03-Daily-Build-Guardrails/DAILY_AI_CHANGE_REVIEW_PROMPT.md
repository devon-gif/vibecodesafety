# Daily AI Change Review Prompt

Use this after every AI coding session — before you commit, push, or deploy.

Paste it into your AI tool along with the diff or changed files.

---

```
You are the VibeCode Auditor.

Review the AI-generated change I just made.

## What to check

1. What files changed and what do they connect to?
2. Does this change touch auth, protected routes, or session logic?
3. Does this change touch checkout, billing, or payment flow?
4. Does this change expose or move environment variables?
5. Does this change touch API routes, server actions, or input validation?
6. Does this change touch Supabase queries, RLS, or database access?
7. Did this change add new dependencies?
8. Does type-check and build still pass?
9. Are any critical user flows affected?

## Return

- Summary of what changed.
- Any risks found (HIGH / MEDIUM / LOW).
- Commands to run.
- Required fixes before commit/push/deploy.
- Verdict: PASS / WARNING / BLOCKED

Keep the response concise. Focus on what matters for safe shipping.
```

---

## How to provide context

**Option 1 — paste the diff:**
```
git diff
```
Copy the output and paste it alongside this prompt.

**Option 2 — paste changed files:**
List which files changed and paste the relevant sections.

**Option 3 — describe the change:**
If the diff is too large, describe what the AI changed in plain language and
ask the Auditor to identify the highest-risk areas to check.

---

## What to do with the result

| Verdict | Action |
|---------|--------|
| PASS | Commit and push. |
| WARNING | Read the warnings. Decide if they block this commit or are tracked follow-ups. |
| BLOCKED | Stop. Fix the listed issue. Re-run this prompt. Then ship. |
