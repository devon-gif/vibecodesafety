# Quickstart

Use this when you want the shortest path from "AI changed my repo" to "I know what to review."

## First 20 minutes

1. Open `01-VibeCode-Auditor-Agent/VIBECODE_AUDITOR_AGENT.md`.
2. Copy the instruction block into your AI coding tool.
3. Open `02-Heavy-Duty-Repo-Audit/HEAVY_DUTY_REPO_AUDIT_PROMPT.md`.
4. Paste it into your AI tool with repo context, changed files, and any critical flows.
5. Save the result using `AUDIT_REPORT_TEMPLATE.md`.

## Daily workflow

After every AI coding change:

1. Paste `03-Daily-Build-Guardrails/DAILY_AI_CHANGE_REVIEW_PROMPT.md`.
2. Run the relevant pre-commit, pre-push, or pre-deploy review.
3. Do not ship while the result is BLOCKED.
4. Track warnings and fix anything that affects auth, billing, data access, secrets, or deploys.

## Monthly safety drops

Each month adds a focused prompt, checklist, scorecard, and "fix first" guide. Start with the most relevant drop for your stack.

## Remember

AI review is a guardrail, not a guarantee. You are still responsible for testing, reviewing, and shipping your app.
