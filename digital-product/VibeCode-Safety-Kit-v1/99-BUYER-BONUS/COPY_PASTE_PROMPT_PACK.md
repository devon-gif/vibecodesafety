# COPY-PASTE PROMPT PACK

A small collection of ready-to-paste prompts for common situations. Each
one is self-contained &mdash; just copy between the lines, fill in the
`{{ ... }}` slots, and paste into your AI tool.

---

## 1. Daily VibeCode Prompt (the one to use every time)

```
Use the VibeCode Safety workflow. Read the project safety rules first
(VIBECODE_SAFETY_RULES.md and PROJECT_SAFETY_PROFILE.md if present).

Make the smallest safe change. Do not break auth, billing, database,
environment variables, or critical user flows.

After editing, review the full impact of the change and tell me, in
this order:
- Files changed
- Why
- Risk: low | medium | high
- Critical flows touched: yes | no (which)
- New env vars: none | <name>
- Manual checks I should run before commit
- Verdict on its own line: PASS | PASS WITH WARNINGS | BLOCKED

If you cannot return a confident verdict, the verdict is BLOCKED.
```

---

## 2. Plan-first prompt (for any non-trivial change)

```
Before you write any code:

1. List the files you intend to create or change.
2. List the files you might need to read for context.
3. List anything that could silently break if you get this wrong.
4. List any new dependencies or env vars.

Then wait for me to say "go".
```

---

## 3. Reviewer prompt (paste in a FRESH chat with the diff)

```
You are a senior reviewer for a real product. Inspect the change below
and return a structured verdict.

Read these first: VIBECODE_SAFETY_RULES.md and PROJECT_SAFETY_PROFILE.md.

THE CHANGE:
{{ paste the diff, or the full new contents of every changed file }}

Return:
1. Files changed
2. Summary (2-4 sentences)
3. Risk level (low | medium | high) with reason
4. Broken-flow check (auth, billing, data writes, schema, public pages,
   build/deploy) marked OK / AT RISK / NOT TOUCHED
5. Security review (secrets, env vars, API routes, logging, third-party)
6. Type / build sanity
7. Things that might silently break (connected files / flows)
8. Required fixes (must do before commit)
9. Follow-ups (track but don't block)
10. Verdict on its own line: PASS | PASS WITH WARNINGS | BLOCKED

If you cannot return a confident verdict, choose BLOCKED.
```

---

## 4. Schema / migration safety prompt

```
This change involves a database schema or migration. Be extra careful.

Confirm in your reply:

- The migration file is included in this change.
- The migration is reversible OR I have documented the rollback steps.
- Existing rows are not dropped or corrupted.
- All new tables have Row Level Security (or equivalent access control)
  enabled with policies.
- Any data type change is backward compatible with existing code paths.

If any of the above is false, return BLOCKED with the exact fix needed.
```

---

## 5. Stripe / billing safety prompt

```
This change touches checkout, webhooks, plan state, or the success
flow. Be extra careful.

Confirm:

- Plan / entitlement state is set ONLY by webhook events, not by the
  /success page render or a URL.
- Webhook signatures are verified before processing the event.
- Same event.id is not processed twice.
- Test mode keys are not used in production code paths.
- The success URL does not grant access to anyone who visits it.

If any of the above is false, return BLOCKED with the exact fix.
```

---

## 6. &ldquo;Don&rsquo;t touch this&rdquo; prompt

Use when you only want a small surgical edit.

```
Only edit the following file(s):
{{ list paths }}

You may READ other files for context but must not WRITE to them.

If your change requires editing other files, stop and explain why
before doing it.
```

---

## 7. Pre-deploy prompt

```
I am about to deploy the changes since {{ commit / date }}.

Without running anything destructive, give me a pre-deploy report:

- Any new env vars that need to be set in production?
- Any schema changes that need a migration applied to production?
- Any third-party config (Stripe URLs, OAuth callbacks) that needs
  updating?
- Any change that might 500 only in production (e.g. localhost
  references, test-mode keys)?

Conclude with a single verdict line: SHIP | SHIP WITH WARNINGS | HOLD.
```

---

## 8. Incident prompt (something is wrong in production)

```
Something is wrong in production. Help me triage without making it
worse.

Symptoms:
{{ describe what you are seeing }}

First, do not propose code changes. First:

1. List the most likely causes ranked by likelihood.
2. For each cause, list a single read-only check I can run to confirm
   or rule it out.
3. List the rollback steps if my last deploy is the cause.

Only after I confirm a root cause, propose a fix.
```

---

## How to use this pack

- Save the file somewhere fast to copy from (Obsidian, Notion, a
  snippet manager).
- Most prompts work in any AI tool that accepts text.
- Fill in `{{ ... }}` slots before sending.
- For the Reviewer Prompt, use a **fresh chat** (and ideally a
  different model).
