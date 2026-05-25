# Monthly Safety Drop Template

Use this template when creating a new monthly drop folder.

Copy this into: `05-Monthly-Safety-Drops/YYYY-MM-TOPIC-SAFETY-DROP/`

---

## Files to create in each drop folder

- `README.md` — what this drop covers and why it matters
- `AUDIT_PROMPT.md` — the copy-paste AI audit prompt
- `CHECKLIST.md` — manual checklist to work through
- `SCORECARD.md` — how to score PASS / WARNING / BLOCKED
- `WHAT_TO_FIX_FIRST.md` — priority order for common issues found
- `IMPLEMENTATION_NOTES.md` — practical guardrails and setup notes

---

## README.md template

```markdown
# [Month Year] Safety Drop: [Topic]

## What this covers

[One paragraph: what risk area this drop focuses on and why it matters for
AI-assisted builders.]

## Who should run this

[Who benefits most from this drop. e.g. "Anyone using Stripe subscriptions"
or "Any project with a database and user accounts".]

## How long it takes

Approximately [X] minutes.

## What you need

[What files or context to have ready before running the audit prompt.]
```

---

## AUDIT_PROMPT.md template

```markdown
# [Topic] Audit Prompt

Paste this into your AI tool with your relevant files.

---

\`\`\`
Act as the VibeCode Auditor.

[Specific focused audit instructions for this topic.]

Return:
1. Summary.
2. Issues found (HIGH / MEDIUM / LOW).
3. Affected files.
4. Recommended fixes.
5. Verdict: PASS / WARNING / BLOCKED
\`\`\`
```

---

## CHECKLIST.md template

```markdown
# [Topic] Checklist

- [ ] [Check 1]
- [ ] [Check 2]
- [ ] [Check 3]
...

Score: [X] / [Total] checks passing.
```

---

## SCORECARD.md template

```markdown
# [Topic] Scorecard

PASS: all critical checks passing, no HIGH risks.
WARNING: one or more MEDIUM risks, or a HIGH risk with a clear mitigation plan.
BLOCKED: one or more HIGH risks found with no fix in place.
```

---

## WHAT_TO_FIX_FIRST.md template

```markdown
# What To Fix First

1. [Most critical issue]
2. [Second most critical]
3. [Third]

These are the issues that most commonly cause real harm in production.
Fix them in order.
```

---

## IMPLEMENTATION_NOTES.md template

```markdown
# Implementation Notes

- Keep secrets server-side.
- Test the real user flow in a preview environment.
- Do not ship while the verdict is BLOCKED.
- Track WARNING items before deploy.
- Re-run the audit after fixes.
```
