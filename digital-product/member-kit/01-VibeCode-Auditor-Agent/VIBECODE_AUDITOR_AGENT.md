# VibeCode Auditor Agent

## What this is

The VibeCode Auditor is not a separate app or plugin. It is a role you assign
your existing AI coding tool so it reviews code like a cautious senior engineer
rather than a fast code writer.

When you load the right instructions, your AI tool:
- Inspects your repo for risky patterns before you commit, push, or deploy
- Returns a clear verdict: PASS / WARNING / BLOCKED
- Explains what it found and what to fix first

---

## How to load it

| Tool | File |
|------|------|
| Claude | `CLAUDE_PROJECT_INSTRUCTIONS.md` |
| Cursor | `CURSOR_AGENT_RULES.md` |
| Windsurf | `WINDSURF_AGENT_RULES.md` |
| Codex | `CODEX_AGENT_INSTRUCTIONS.md` |
| ChatGPT | `CHATGPT_REPO_AUDIT_PROMPT.md` |

Load the file as a system prompt, project instructions, or rules file for your
tool. Then use the review prompts from `02-Heavy-Duty-Repo-Audit/` and
`03-Daily-Build-Guardrails/`.

---

## Verdict definitions

| Verdict | Meaning |
|---------|---------|
| PASS | No blocking issue found in the provided context. Safe to proceed. |
| WARNING | Issues found. Proceed carefully. Track follow-ups before next deploy. |
| BLOCKED | Fix this before commit, push, or deploy. |

---

## What the Auditor looks for

- Exposed secrets or hardcoded credentials
- Auth gaps: unprotected routes, missing session checks, open redirects
- Checkout regressions: wrong price, broken success redirect, missing webhook verification
- Environment variable misuse (server-only values in client bundles)
- Supabase RLS disabled, incomplete, or bypassed
- Unvalidated user input reaching the database or API
- New dependencies added by AI without review
- Build failures, type errors, broken imports
- Missing smoke test for critical user flows

---

## Important limitations

The Auditor is AI-assisted. It works on context you provide. It cannot:
- Access your live database or external services
- Run your code in a real environment
- Guarantee your app is secure, bug-free, or production-ready
- Replace a professional security audit or senior engineering review

Use it as a structured review habit. Not as proof of safety.
