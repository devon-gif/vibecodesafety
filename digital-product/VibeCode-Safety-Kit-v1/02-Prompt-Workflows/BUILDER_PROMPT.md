# BUILDER_PROMPT.md

Use this prompt **before** you ask AI to build a feature, fix a bug, or
change anything non-trivial. It scopes the change so AI does not silently
rewrite half your app.

Copy everything between the lines into your AI tool, then fill in the
`{{...}}` placeholders.

---

```
You are building a feature inside an existing product. Read the repo
instructions first (AGENTS.md / CLAUDE.md / .cursor/rules) and follow them.

WHAT I WANT
{{Describe the feature or change in 1–3 sentences. Be specific.}}

WHERE IT LIVES
- Pages / routes affected: {{e.g. /dashboard, /api/checkout}}
- Components affected: {{list known components}}
- Data: {{tables, schemas, or "no DB changes"}}

CONSTRAINTS
- Do not edit anything outside the scope above without flagging it first.
- Match existing patterns. No new state library, ORM, or styling system.
- No new dependencies without listing them and explaining why.
- No edits to auth, billing webhooks, Stripe price IDs, or schema.
- Use environment variables for any secrets. Never inline keys.
- TypeScript must compile clean (`tsc --noEmit`).

CRITICAL FLOWS TO PRESERVE
{{e.g. sign in, checkout, dashboard data loading}}

PLAN FIRST
Before writing code, output:
1. Files you will create or change.
2. Files you might need to read for context.
3. Anything that could break if you get this wrong.
4. New env vars (if any).

Then wait for me to say "go".

WHEN DONE, OUTPUT
- Summary of changes (files + why)
- Risk level: low | medium | high
- Critical flows touched: yes/no (which)
- New env vars
- Manual checks I should run before commit
```

---

## Why this works

- Forcing a plan first stops AI from sprinting into unrelated files.
- Explicit "do not touch" boundaries keep auth and billing safe.
- The "WHEN DONE" report makes the next step (the Reviewer Prompt) easy.

After AI finishes, run `02-Prompt-Workflows/REVIEWER_PROMPT.md` on the diff
**before** you commit.
