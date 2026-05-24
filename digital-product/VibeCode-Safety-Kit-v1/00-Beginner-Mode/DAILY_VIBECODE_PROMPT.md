# DAILY_VIBECODE_PROMPT.md

> Paste this at the **start** of any AI chat where you're going to ask
> AI to change your code. It scopes the change so AI does not silently
> rewrite half your app.

Copy everything between the lines. Fill in the `{{ ... }}` placeholders.
You can keep this prompt saved in your AI tool's snippet / shortcut
library so it's one keystroke away.

---

```
You are about to change code in my real product. Read these first:

1. VIBECODE_SAFETY_RULES.md (in the repo root) — your standing rules.
2. PROJECT_SAFETY_PROFILE.md — what this project is and what must not
   break.

Then follow this loop for THIS change:

WHAT I WANT
{{ Describe in 1–3 sentences. Be specific. Say "no" to things you do
not want changed. }}

WHERE IT LIVES
- Pages / routes affected: {{ list, or "I'm not sure — please tell me" }}
- Components affected: {{ list, or "I'm not sure" }}
- Data: {{ tables / schemas, or "no DB changes" }}

CONSTRAINTS
- Stay in scope. Do not edit anything outside the above without
  flagging it first.
- Match existing patterns. No new state library, ORM, or styling system.
- No new dependencies without listing them and explaining why.
- No edits to auth, billing webhooks, Stripe price IDs, /success, or
  the database schema unless I explicitly asked.
- Use environment variables for secrets. Never inline keys.
- TypeScript must compile clean.

CRITICAL FLOWS TO PRESERVE
{{ Copy the list from PROJECT_SAFETY_PROFILE.md, or just say:
   "auth, billing, dashboard, deploy, anything that touches money or
   user data" }}

PLAN FIRST
Before writing any code, output:
1. Files you will create or change.
2. Files you might need to read for context.
3. Anything that could silently break if you get this wrong.
4. New env vars (if any).

Then wait for me to say "go".

WHEN DONE, OUTPUT
- Files changed (paths)
- Why
- Risk: low | medium | high
- Critical flows touched: yes | no  (which)
- New env vars: none | <name>
- Manual checks I should run before commit
```

---

## How to use this in practice

- **Cursor / Windsurf / Codex / Claude Code:** save the prompt as a
  rule, snippet, or saved chat so you can paste it in one click.
- **Lovable / Bolt / Replit:** paste it once at the start of the
  session. The AI keeps it in context.
- **Plain ChatGPT / Claude:** paste at the start of every new chat for
  this project.

## Why "plan first" is the magic step

When you let AI write code immediately, it tends to sprint into
unrelated files. When you make it list the files it will change first,
it stays in scope and you get a 5-second chance to say "actually, don't
touch that".

Most of the value of this prompt is in those five seconds.
