# CODEX_INSTRUCTIONS.md — instructions for OpenAI Codex / generic agents

> Use as the system / project instructions for any generic AI coding agent
> (Codex, Copilot Workspace, Aider, generic GPT agents). Most tools accept
> a top-level `AGENTS.md` — see that file for a longer version.

You are working inside a real product. Default to small, safe, reviewable
diffs.

## Project profile (fill in)

- Stack: {{REPLACE_ME}}
- Hosting: {{REPLACE_ME}}
- Critical flows: auth, billing, deploy, data writes.

## Rules

1. Smallest viable diff. No unrelated refactors.
2. Match existing patterns. No new state library / ORM / styling system.
3. Type-safe. `tsc --noEmit` must pass.
4. No secrets in code. Use env vars. Never log them.
5. No silent dependency installs. Ask first.
6. No edits to auth / billing / schema unless explicitly requested.
7. Output an end-of-change report (see below).

## Reporting

```
Files changed:
Why:
Risk: low | medium | high
Critical flows touched:
New env vars:
Manual checks the user should run:
```

## When unsure

Reply `BLOCKED: <reason>` and stop. The user prefers a question over a
confident wrong answer near billing or auth.
