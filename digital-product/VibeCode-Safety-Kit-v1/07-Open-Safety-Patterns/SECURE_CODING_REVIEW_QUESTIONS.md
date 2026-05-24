# SECURE_CODING_REVIEW_QUESTIONS.md

Beginner-friendly review questions, grouped by common secure-coding
categories. Use them as prompts you ask AI **about its own change**, and
as manual smoke tests you can run in a minute.

These questions are inspired by well-known secure-coding categories
(input validation, access control, etc.) reframed for AI-assisted vibe
coders. They are **not** a security audit. They are conversation
starters that catch the most common mistakes.

---

## 1. Input validation

**What can go wrong**
Untrusted data (form fields, query params, JSON bodies, file uploads)
is treated as safe. AI sometimes spreads `req.body` straight into a DB
insert.

**Questions to ask AI**
- "List every place this change accepts user input. Is each one
  validated by a schema (zod, valibot, etc.)?"
- "What happens if a field is missing, the wrong type, or absurdly long?"
- "Is there a max length on every string input? A min/max on every
  number?"

**What to manually test**
- Submit the form with the field empty.
- Submit with a 10,000-character string.
- Submit with a negative number / a zero / a giant number.

**Red flags**
- `JSON.parse(req.body)` with no schema.
- `prisma.x.create({ data: req.body })` or similar spread.
- No length / type checks on strings.

---

## 2. Authentication

**What can go wrong**
AI removes or weakens an auth check. The route returns user data based
on a request body instead of the authenticated session.

**Questions to ask AI**
- "Does this route read the current user from the session, or from a
  parameter / body field?"
- "What happens if I call this endpoint while logged out?"
- "Did you remove or weaken any session, cookie, or auth helper call?"

**What to manually test**
- Sign out. Visit the new page / hit the new endpoint with curl.
  Should be 401 / 403 / redirect.
- Sign in. Confirm it works.
- Sign out again. Confirm the session is actually gone (refresh).

**Red flags**
- Auth checks moved into client-only code.
- Cookies set without `httpOnly` / `secure`.
- "Trust me, the UI hides it" reasoning for skipping a server check.

---

## 3. Access control (authorization)

**What can go wrong**
User A can see / edit User B's data by changing an ID in the URL.

**Questions to ask AI**
- "Where in this change do we check ownership of a resource before
  returning, updating, or deleting it?"
- "If a user changes the `id` in the URL to another user's id, what
  happens?"
- "Are admin-only routes gated on an admin role on the authenticated
  user (not a query string)?"

**What to manually test**
- Sign in as User A. Note an item id.
- Sign out. Sign in as User B. Hit the same URL with User A's id.
  Should be denied.

**Red flags**
- `select * from items where id = $1` with no `user_id` filter.
- `?admin=true` query string used to grant admin access.
- Authorization done only in the React component, not on the server.

---

## 4. Session / user state

**What can go wrong**
Session state lingers after sign-out. The wrong user's data flashes
briefly on page load. Plan / entitlement is trusted from the client.

**Questions to ask AI**
- "Where is the source of truth for the current user? Where is the
  source of truth for their plan or entitlement?"
- "If a paid user becomes free, when and how does the app know?"
- "Does sign-out clear all auth cookies AND any client-cached state?"

**What to manually test**
- Sign in, sign out, refresh. You should not see authenticated content.
- Open the app in two tabs, sign out in one, refresh the other. The
  other should be logged out within a request or two.

**Red flags**
- `localStorage.setItem("plan", "pro")`.
- Entitlement updated on the `/success` page render.
- Hardcoded `userId` constants in the codebase.

---

## 5. Environment variables

**What can go wrong**
A secret is exposed to the browser by accident (e.g. `NEXT_PUBLIC_*`
prefix on a server-only key). A new env var is referenced but never set
in production.

**Questions to ask AI**
- "List every new env var this change introduces. Mark each as PUBLIC
  or SERVER-ONLY."
- "Did you add a server-only key with a public prefix? Did you put a
  service-role key in a client component?"

**What to manually test**
- Search the **built** JS for the first 8 characters of your server
  secrets — should be zero matches.
- Set the new env var in production. Redeploy. Page works.

**Red flags**
- `NEXT_PUBLIC_STRIPE_SECRET_KEY` (or similar).
- Service-role / admin keys imported into a client component.
- `.env*` file staged in the commit.

---

## 6. API routes / server actions

**What can go wrong**
Routes are missing auth checks, accept any HTTP method, or return stack
traces in errors.

**Questions to ask AI**
- "For each new route, what method is allowed and what does it return
  for everything else?"
- "Are error responses generic to the client? Stack traces only in
  server logs?"
- "Is the route rate-limited if it sends email, calls a paid API, or
  charges?"

**What to manually test**
- `curl -X GET` (and `POST`, `PUT`, `DELETE`) the route. Unsupported
  methods should return 405.
- Hit it logged out. Should be 401 / 403.

**Red flags**
- `console.error(err)` followed by `res.send(err)` (leaks internals).
- No method check.
- No rate limit on email / payment routes.

---

## 7. Database / data exposure

**What can go wrong**
A query selects sensitive columns and returns them to the client. A
public table has no Row Level Security.

**Questions to ask AI**
- "List every table this change reads from. For each, is RLS enabled?"
- "Are we returning any private columns (password, token, internal
  flags) to the client?"
- "Did this change touch the schema? If yes, is there a migration?"

**What to manually test**
- Sign in as a non-admin user. Try to fetch another user's row directly.
  Should be denied or empty.
- Look at the JSON the page receives in DevTools. Any column you would
  not want public?

**Red flags**
- A new public table with no RLS policy.
- `select * from users` returned to the client.
- Schema changes "in the dashboard" with no migration file.

---

## 8. Billing / webhooks

**What can go wrong**
A user becomes "paid" by visiting `/success`. The webhook does not
verify signatures. Same webhook event is processed twice.

**Questions to ask AI**
- "Where do we mark a user as paid? Is it on the webhook event, or on
  the `/success` page render?"
- "Is the webhook signature verified? With what library?"
- "Are events deduplicated by `event.id` to avoid double-processing?"
- "Test mode vs live mode keys clearly separated?"

**What to manually test**
- In test mode: complete a purchase. Confirm webhook fires and the user
  flips to paid.
- Visit `/success` directly while logged out / unpaid. Should not grant
  access.

**Red flags**
- `users.plan = 'pro'` written in a page component.
- No signature verification on the webhook.
- Test and live keys reused.

---

## 9. Error handling / logging

**What can go wrong**
Errors are silently swallowed (bug goes unnoticed). Or errors leak
secrets / PII into logs.

**Questions to ask AI**
- "Are errors logged with enough context to debug — and nothing more?"
- "Are any tokens, session objects, or full request bodies being
  logged?"
- "Do errors fail loudly in development and gracefully (no stack trace)
  in production?"

**What to manually test**
- Force an error (bad input). Confirm log has enough info to find it.
- Confirm response to the user does not contain a stack trace.

**Red flags**
- `console.log(session)` near auth.
- `try { ... } catch {}` with no logging.
- Stack traces returned in API responses.

---

## 10. File uploads

**What can go wrong**
Untrusted files are stored. File types are not validated. Files are
served from a publicly accessible bucket.

**Questions to ask AI**
- "What file types are allowed? Where is that enforced — client only,
  or server too?"
- "What is the max file size? Is it enforced server-side?"
- "Where are files stored? Is the bucket public or private? Who can
  read them?"

**What to manually test**
- Upload a 100MB file. Should be rejected.
- Upload a `.exe` or `.html` file. Should be rejected.
- Try to access another user's file by URL. Should be denied.

**Red flags**
- Allowed file types defined only in client code.
- A "public" bucket holding user-private files.

---

## 11. Dependencies

**What can go wrong**
A new dependency is installed silently. The lockfile is out of date.
A package is malicious or unmaintained.

**Questions to ask AI**
- "List every new dependency this change installed. Why each is needed."
- "Could any of these be replaced by the standard library or existing
  packages?"
- "Is the lockfile updated?"

**What to manually test**
- `pnpm install --frozen-lockfile` works.
- The new package has many weekly downloads and recent maintenance.

**Red flags**
- A new dep with <1k weekly downloads.
- A new dep with no commits in 2+ years.
- A new dep used only once for a trivial helper.

---

## 12. Deployment configuration

**What can go wrong**
Build works locally, breaks in production. Wrong env vars. Wrong
redirect URLs. Mixed test / live keys.

**Questions to ask AI**
- "Will this change require any new env vars in production?"
- "Are any redirect URLs hardcoded? Could they break in preview vs
  production?"
- "Are there test-vs-live concerns (Stripe, OAuth callbacks, webhooks)?"

**What to manually test**
- Deploy a preview build. Click through the changed pages.
- Confirm the production env vars match what the build expects.

**Red flags**
- Hardcoded `http://localhost:3000` in production code.
- Test mode keys in production.
- New env var added to local but never to the hosting provider.

---

## How to use these questions

- Pick the 2–4 categories most relevant to your change.
- Paste those questions into a **fresh AI chat** alongside the diff.
- Add the verdict line: "Return PASS / PASS WITH WARNINGS / BLOCKED."

You will not run all 12 categories every time. You will pick the ones
that match what AI just changed.
