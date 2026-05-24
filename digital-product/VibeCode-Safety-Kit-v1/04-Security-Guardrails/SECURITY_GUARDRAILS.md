# SECURITY_GUARDRAILS.md

Practical safety checks for common AI-coding mistakes. Not a security
audit. Use this as a baseline you walk through after any AI change that
touches auth, API routes, env, or third-party integrations.

---

## 1. Secrets

**Rules**

- Secrets live only in environment variables and your hosting provider's
  secret manager.
- Never commit `.env*` files. Add them to `.gitignore`.
- Never log secrets. Strip them from error messages and analytics.
- Never paste secrets into AI chats. AI tools may persist them.

**Quick checks**

- [ ] `gitleaks detect` returns clean.
- [ ] No `process.env.STRIPE_SECRET_KEY` (or similar) appears in client
      bundle. Use `NEXT_PUBLIC_*` only for non-secret values.
- [ ] No `console.log(req.body)` or `console.log(session)` near auth
      / billing.

---

## 2. Environment variables

- [ ] `.env.example` lists every variable.
- [ ] `NEXT_PUBLIC_*` values are safe to expose to the browser.
- [ ] Server-only secrets are read only inside server code (route handlers,
      server actions, server components).

See `ENVIRONMENT_VARIABLES_CHECKLIST.md`.

---

## 3. API routes / server actions

- [ ] Validate input. Use a schema (zod, valibot, etc.) — do not trust
      `req.body` shape.
- [ ] Enforce auth. If the route returns user data, it must read the
      authenticated user from the session, not from the request body.
- [ ] Enforce ownership. "Get item by id" must check that the item
      belongs to the current user.
- [ ] Rate-limit anything that sends email, calls a paid API, or hits a
      third party.
- [ ] Return generic errors to clients. Never return a stack trace.

See `API_ROUTES_CHECKLIST.md`.

---

## 4. Auth

- [ ] Session checks happen on the server (middleware or page-level), not
      only in client components.
- [ ] Sign-out clears all auth cookies and any cached client state.
- [ ] Password reset / magic link tokens expire and are single-use.

See `AUTH_CHECKLIST.md`.

---

## 5. Database (RLS / queries)

- [ ] Row Level Security is **enabled** on every public table.
- [ ] Policies are tested with a non-admin user.
- [ ] Service-role keys are never used in client code.
- [ ] No `select *` straight to the client when the table holds private
      columns (passwords, tokens, internal flags).

See `SUPABASE_CHECKLIST.md`.

---

## 6. Stripe / billing

- [ ] Webhook signatures are verified.
- [ ] Plan / entitlement state is updated only on webhook events, not on
      client redirects to `/success`.
- [ ] Test mode and live mode keys are clearly separated.
- [ ] Refund / cancellation flows are tested.

See `STRIPE_BILLING_CHECKLIST.md`.

---

## 7. Logging

- [ ] No tokens, passwords, full session objects, or full request bodies
      logged in production.
- [ ] Errors include enough context to debug, no more.
- [ ] PII (names, emails, addresses) only logged where compliance allows.

---

## 8. Third-party scripts / dependencies

- [ ] Every `<script src="…">` tag is either yours or a known vendor.
- [ ] New npm dependencies are reviewed (publisher, weekly downloads,
      maintenance).
- [ ] Lockfile is committed.

---

This is a baseline. Real security is layered. If you're storing money,
health data, or anything regulated, get a real security review.
