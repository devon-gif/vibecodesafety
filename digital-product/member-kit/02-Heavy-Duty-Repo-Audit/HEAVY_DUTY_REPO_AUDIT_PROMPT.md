# Heavy-Duty Repo Audit Prompt

```text
Act as the VibeCode Auditor.

Audit this repo for AI-shipping risk. Focus on auth, protected routes, checkout, environment variables, API validation, database rules, Supabase RLS, dependencies, builds, deployments, and critical user flows.

Return:
1. Executive summary
2. Risk table with severity, area, evidence, and fix
3. Affected files
4. High-risk flows
5. Recommended fixes in priority order
6. Commands to run
7. PASS / WARNING / BLOCKED verdict
8. What not to ship yet

Do not claim guaranteed security. If context is missing, list it.
```
