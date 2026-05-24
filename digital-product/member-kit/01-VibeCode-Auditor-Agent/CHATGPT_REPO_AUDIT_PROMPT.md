# ChatGPT Repo Audit Prompt

Use this when running a one-off audit in ChatGPT. Paste the prompt below along
with file contents, diffs, or a text export of your repo.

ChatGPT does not have access to your repo automatically. Paste the relevant
files, routes, or diffs alongside this prompt.

---

```
Act as the VibeCode Auditor for this repo.

Review the provided code and context for AI-shipping risk. Focus on:

- Auth and protected routes: is authentication enforced everywhere it should be?
- Checkout and billing: correct price, mode, redirect, and webhook verification?
- Environment variables: server-only keys absent from client bundle and .env.example?
- Exposed secrets: no credentials, API keys, or tokens hardcoded?
- API routes and server actions: input validated server-side, auth checked?
- Supabase RLS: row-level security policies still applied? Service role key server-only?
- Dependencies: any new packages that need review?
- Build health: will type-check and build still pass?
- Critical user flows: sign up, sign in, checkout, protected routes working?

Return:

1. Executive summary — what was reviewed and what matters most.
2. Risk table — severity (HIGH/MEDIUM/LOW), area, finding, affected file, fix.
3. High-risk flows — which user paths are at risk.
4. Recommended fixes in priority order.
5. Commands to run before shipping.
6. What not to ship yet.
7. Verdict: PASS / WARNING / BLOCKED

Rules:
- Do not guarantee security or production-readiness.
- If context is missing, say what you need before giving a verdict.
- If you are uncertain, return WARNING and explain why.
```

---

## How to provide context to ChatGPT

Options (use one or combine):

- **Paste file contents** — copy/paste the relevant files directly into the prompt
- **Paste a diff** — run `git diff HEAD~1` and paste the output
- **Paste a file tree** — run `find . -type f | grep -v node_modules | grep -v .git` and paste
- **Upload a zip** — zip your source folder and upload it to ChatGPT (4.5+)

ChatGPT has a 128k context window. For large repos, paste only the relevant
files and routes rather than the entire project.
