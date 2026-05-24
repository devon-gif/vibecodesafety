# Heavy-Duty Repo Audit Prompt

Paste this prompt into your AI tool with your repo context.

Use it:
- Before a major launch
- After a large batch of AI coding changes
- When something feels off but you cannot pinpoint it
- As a monthly audit before shipping the next big feature

---

```
Act as the VibeCode Auditor.

I am going to share my repo context with you. Review it for AI-shipping risk.

## What to audit

1. Auth and protected routes
   - Are all protected pages and API routes guarded?
   - Can a logged-out user, wrong-role user, or manipulated session reach
     protected content?
   - Are redirects safe (no open redirect)?

2. Environment variables and secrets
   - Are any secrets, API keys, tokens, or credentials hardcoded in source files?
   - Are server-only keys absent from NEXT_PUBLIC_ prefixed variables?
   - Does the .env.example file contain only placeholder values?
   - Do logs or error messages risk printing sensitive values?

3. API routes and server actions
   - Is user input validated (type, shape, length) before reaching the database?
   - Is authorization checked server-side on every route and action?
   - Are error responses safe (not leaking stack traces or internal details)?

4. Checkout and billing
   - Is the Stripe price ID correct for this environment (test vs live)?
   - Is the product mode correct (subscription vs one-time)?
   - Does the success URL redirect to the right page?
   - Is Stripe webhook signature verification present on the webhook handler?
   - Are failed payment and access revocation flows handled?

5. Database and Supabase RLS
   - Is RLS enabled on all user-data tables?
   - Do policies correctly scope reads and writes to the authenticated user?
   - Is the service role key used only in server-side code?
   - Can User A read or write User B's data?
   - Are storage bucket policies correct?

6. Dependencies
   - Did AI add new packages? Are they well-maintained?
   - Are there known-vulnerable versions of major dependencies?
   - Are dev dependencies accidentally shipped to production?

7. Build and type health
   - Does type-check pass cleanly?
   - Does the production build succeed?
   - Are there broken imports or missing modules?

8. Critical user flows
   - Sign up, sign in, sign out — do they work end to end?
   - Checkout — does the happy path work? Does the cancellation path work?
   - Protected dashboard or member content — accessible only when authenticated?
   - Email delivery or webhooks — are they wired and testable?

9. Deploy readiness
   - Are all required env vars documented and set in production?
   - Is the rollback path known?
   - Is there a smoke test for the most critical routes?

## Return

1. Executive summary (2–4 sentences: what was reviewed, what matters most).
2. Risk table:
   | Severity | Area | Finding | Affected file(s) | Recommended fix |
   Include HIGH, MEDIUM, and LOW risks.
3. High-risk flows — which user paths are at risk right now.
4. Recommended fixes in priority order.
5. Commands to run before shipping:
   - type-check
   - build
   - any lint or test commands
6. What not to ship yet (specific blockers).
7. Verdict: PASS / WARNING / BLOCKED

## Rules

- Do not guarantee security or production-readiness.
- If context is missing, list what you need before finalising the verdict.
- If unsure of risk level, return WARNING.
- A passing build does not equal PASS. Check for logic and security risk too.
```
