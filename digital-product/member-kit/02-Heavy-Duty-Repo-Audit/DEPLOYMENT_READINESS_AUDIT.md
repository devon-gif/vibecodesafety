# Deployment Readiness Audit

Paste into your AI tool before a production deploy.

---

```
Review this repo for deployment readiness.

Check:

1. Build and type health
   - Does `pnpm run type-check` (or equivalent) pass with no errors?
   - Does `pnpm run build` (or equivalent) succeed?
   - Are there any warnings in the build output that indicate missing
     modules, deprecated APIs, or unsafe patterns?

2. Environment variables
   - Are all required production env vars documented in .env.example?
   - Are production env vars set in the hosting platform (Vercel, Fly,
     Railway, etc.)?
   - Are there any env vars still pointing to localhost, test endpoints,
     or placeholder values in production?

3. Critical route smoke check
   - Does the homepage load?
   - Does the sign-in / sign-up flow work?
   - Does the checkout flow work end to end?
   - Does the protected member area load for authenticated users and redirect
     for unauthenticated users?

4. Preview deployment
   - If using a preview deployment, do the critical routes load on the
     preview URL?
   - Are preview env vars safe (not pointing to the production database)?

5. Rollback plan
   - What is the rollback plan if this deploy breaks something?
   - Is there a previous stable build or commit to roll back to?
   - Can you roll back in under 5 minutes?

6. Migrations and schema changes
   - Did this deploy include a database schema change or migration?
   - Is the migration backwards-compatible with the previous code version?
   - Has the migration been tested on a non-production database first?

Commands to run before deploying:
- pnpm run type-check
- pnpm run build
- pnpm run lint (if configured)
- pnpm test (if configured)

Return:
- Build and type health status.
- Missing or misconfigured env vars.
- Critical route status.
- Rollback readiness.
- Recommended fixes.
- Verdict: PASS / WARNING / BLOCKED
```
