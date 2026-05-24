# Env and Secrets Audit

Paste into your AI tool alongside your .env.example, environment config, and
any file that imports from process.env.

---

```
Review the environment variable and secrets handling in this repo.

Check:

1. Hardcoded secrets
   - Search all source files for hardcoded API keys, tokens, passwords,
     webhook secrets, database URLs, or service credentials.
   - Any credential that should be in an env var but is in source code is a
     critical finding.

2. NEXT_PUBLIC_ exposure (Next.js)
   - List every NEXT_PUBLIC_ variable.
   - Are any of those values things that should stay server-only?
   - Common mistakes: Stripe secret key, Supabase service role key, database
     password, or any internal service credential prefixed with NEXT_PUBLIC_.

3. .env.example safety
   - Does .env.example contain only placeholder values?
   - Does it list all required variables so a new developer can set up the
     project without guessing?
   - Are any real values accidentally committed to the example file?

4. Log and error output
   - Do any error handlers, console.log calls, or response bodies risk printing
     env var values, database credentials, or user tokens?

5. .gitignore
   - Are .env, .env.local, .env.production, and similar files excluded?

Return:
- Any hardcoded secrets found (redact values in your response).
- Any server-only values exposed to the client.
- Any safety issues in .env.example or .gitignore.
- Recommended fixes.
- Verdict: PASS / WARNING / BLOCKED
```
