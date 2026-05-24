# WINDSURF_RULES.md — rules for Windsurf / Cascade

> Save as `.windsurf/rules/safety-kit.md` or paste into the workspace
> rules panel. Cascade will follow these in every conversation.

## Project context (fill in)

- Stack: {{REPLACE_ME}}
- Hosting: {{REPLACE_ME}}
- Critical flows: auth, billing, deploy, data writes.

## Behavior

- Plan first for any change beyond a one-line fix. Briefly list the files
  you will edit and why before editing.
- Stay in scope. Do not "clean up" unrelated files.
- Match existing patterns (routing, data layer, styling, error handling).
- Run `pnpm run type-check` (or the project equivalent) before claiming done.
- Prefer minimal diffs. Don't rewrite a file when 5 lines will do.

## Forbidden without explicit ask

- Auth / middleware / session changes.
- Stripe price, webhook, or success-URL changes.
- Schema changes or migrations.
- New dependencies installed silently.
- Edits to `.env*` files.
- Force pushes, `rm -rf`, or `DROP TABLE`.

## Reporting

End each change with:
```
Files changed:
Why:
Risk: low | medium | high
Critical flows touched:
New env vars:
Manual checks:
```

If anything is uncertain, return `BLOCKED` and ask.
