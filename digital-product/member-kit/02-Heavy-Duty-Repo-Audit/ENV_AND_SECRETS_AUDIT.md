# Env and Secrets Audit

Check:

- No secret keys are committed.
- Server-only keys are not prefixed with `NEXT_PUBLIC_`.
- Client bundles do not expose private values.
- Example env files contain placeholders only.
- Logs do not print secrets.

Verdict: PASS / WARNING / BLOCKED
