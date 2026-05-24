# Reviewer Prompt (placeholder)

> Placeholder preview. The full reviewer prompt ships in the purchased kit.

## Goal
Review a diff produced by an AI coding tool against the **whole app**, not
just the one file it touched.

## Inputs
- The full diff
- AGENTS.md / repo rules
- Critical flows checklist
- Security boundaries checklist
- Schema contracts checklist

## Output format
Return one of:

- **PASS** — safe to commit
- **PASS WITH WARNINGS** — review follow-ups (list them)
- **BLOCKED** — fix before push/deploy (list blockers and concrete fixes)

Always include:
1. A summary of what changed.
2. A risk assessment per critical flow.
3. Concrete next actions.

(Full prompt template available in the purchased kit.)
