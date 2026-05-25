# VibeCode Safety Membership — Start Here

Welcome. This is your member kit.

There are five things to do in order:

---

## Step 1 — Set up the VibeCode Auditor Agent (15 min)

Go to `01-VibeCode-Auditor-Agent/` and open `VIBECODE_AUDITOR_AGENT.md`.

Pick the file for your AI tool:
- Claude → `CLAUDE_PROJECT_INSTRUCTIONS.md`
- Codex / ChatGPT → `CODEX_AGENT_INSTRUCTIONS.md` or `CHATGPT_REPO_AUDIT_PROMPT.md`
- Cursor → `CURSOR_AGENT_RULES.md`
- Windsurf → `WINDSURF_AGENT_RULES.md`

Load the instructions into your tool. Your AI is now acting as the VibeCode Auditor.

---

## Step 2 — Run the Heavy-Duty Repo Audit (30–60 min)

Go to `02-Heavy-Duty-Repo-Audit/` and open `HEAVY_DUTY_REPO_AUDIT_PROMPT.md`.

Paste it into your AI tool with your repo context. Work through each audit area. Fill in `AUDIT_REPORT_TEMPLATE.md` with the findings. Use `PASS_WARNING_BLOCKED_SCORECARD.md` to get a final verdict.

Do this once per major project milestone or whenever the codebase changes significantly.

---

## Step 3 — Add the Daily Guardrails (5 min setup)

Go to `03-Daily-Build-Guardrails/` and open `DAILY_AI_CHANGE_REVIEW_PROMPT.md`.

Paste this into your AI tool after every AI coding change, before you commit, push, or deploy.

Set up pre-commit and pre-deploy habits using the short checklists in the same folder.

---

## Step 4 — Use Weekly Safety Notes

Go to `04-Weekly-Safety-Notes/` when a weekly topic matches your current work.

Each note includes one focused risk, a quick checklist, and a copy-paste audit prompt.

---

## Step 5 — Check Monthly Safety Drops

Go to `05-Monthly-Safety-Drops/` each month for larger audit packs on specific risk areas.

Each drop includes prompts, checklists, scorecards, guardrails, implementation notes, and what to fix first.

---

## Disclaimer

VibeCode Safety helps reduce risk. It does not guarantee secure, bug-free, or production-ready software. It does not replace professional engineering, QA, or a security audit.
