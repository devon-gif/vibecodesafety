# PRE_DEPLOY_RISK_MAP.md

A simple map of things that commonly break **between "works on my
machine" and "live in production"**.

For each item: what it looks like, why AI sometimes causes it, the
five-second check, and the fix.

Use this as a pre-deploy mental scan. You will not run all 13 checks
every time — pick the ones touched by the current change.

---

## 1. Build errors

**Symptom:** `pnpm run build` fails with a TypeScript or bundler error.

**Why AI causes it:** stale import paths, type changes that don't match
all call sites, accidental `import` from a server module into a client
file.

**Check:** `pnpm run type-check && pnpm run build` locally before push.

**Fix:** read the first error in the output. Fix only the first one,
then re-run — later errors are often consequences of the first.

---

## 2. Missing env vars in production

**Symptom:** page renders 500, or a feature silently no-ops. Logs show
`undefined` where a key should be.

**Why AI causes it:** introduces `process.env.NEW_VAR` in code, adds it
to `.env.local`, but the production environment never received it.

**Check:** every new env var in the diff exists in your hosting
provider's Production env settings. Redeploy after adding.

**Fix:** add the var. Redeploy. Smoke test the affected page.

---

## 3. Broken login

**Symptom:** sign in form spins forever, throws, or appears to succeed
but the user is immediately logged out on refresh.

**Why AI causes it:** edited middleware, removed a session cookie
config, changed where the auth helper is imported from.

**Check:** in production, sign in with a real test account. Refresh.
Still logged in?

**Fix:** revert the auth-related changes. Re-do them with the Reviewer
Prompt and explicit "do not touch sessions" instructions.

---

## 4. Broken protected routes

**Symptom:** logged-out users see authenticated pages briefly, OR
logged-in users get redirected to sign-in repeatedly.

**Why AI causes it:** moved an auth check from the server to the client,
or changed middleware matchers.

**Check:** sign out. Visit a protected route. You should land on sign
in. Sign back in. The page should load.

**Fix:** server-side auth check, on every protected route, every time.
Client-only "if (user)" guards are decoration.

---

## 5. Broken checkout

**Symptom:** the Buy button does nothing, opens the wrong product, or
leads to a 404 / `/success` without a charge.

**Why AI causes it:** swapped a Payment Link URL, changed the env var
name, or "refactored" the Buy button.

**Check:** click the Buy button in production. Confirm:
- It opens the right Stripe URL (test mode if pre-launch, live for
  launch).
- A real $0.01 / $29.99 test purchase reaches `/success`.

**Fix:** restore the env var. Re-verify the price in Stripe matches the
price on the site.

---

## 6. Broken success page

**Symptom:** `/success` 404s, throws, or fails to acknowledge the
purchase.

**Why AI causes it:** moved the route, deleted the page, or made
`/success` depend on a query string that Stripe doesn't send.

**Check:** click Buy → complete a test purchase → land on `/success`.
The page should render without errors and explain what happens next.

**Fix:** keep `/success` simple. It should NOT be where you grant
access. That happens on the webhook (or in your delivery flow), not on
a URL anyone can visit.

---

## 7. Database schema mismatch

**Symptom:** production page throws `column "x" does not exist` or a
query times out.

**Why AI causes it:** code references a new column / table that exists
locally but the production migration was never applied.

**Check:** is there a migration file in the commit? Has it been applied
to production? Check your DB admin (Supabase Studio, etc.).

**Fix:** apply the migration in production **before** promoting the
code that uses it. For a hot fix: roll the code back, fix the migration
order, redeploy.

---

## 8. RLS / permission mistakes

**Symptom:** users can see each other's data, OR users see "no rows"
when they should see their own data.

**Why AI causes it:** created a new table without RLS, or wrote a
policy that's too strict (denies the owner) or too loose (allows all).

**Check:** sign in as User A, create an item. Sign in as User B, try to
read User A's item. Should fail. Sign back in as User A. Their item
should still be visible.

**Fix:** enable RLS on every public table. Write `select`, `insert`,
`update`, `delete` policies scoped by `auth.uid()`. Test with a
non-admin user.

---

## 9. Exposed secrets

**Symptom:** a key shows up in the browser, in logs, or in commit
history.

**Why AI causes it:** added `NEXT_PUBLIC_*` prefix to a server-only
key, or logged a session object, or pasted a real key into a config
file.

**Check:** `gitleaks detect --no-banner` clean. Search the production
JS bundle for the first 8 characters of any server-only key — should be
zero matches.

**Fix:** **rotate the key immediately** at the provider. Then fix the
code. See `SECRET_SCANNING_WORKFLOW.md`.

---

## 10. Bad redirects

**Symptom:** OAuth callback says "redirect URI mismatch", or after sign
in the user lands on a `localhost` URL in production.

**Why AI causes it:** hardcoded `http://localhost:3000` somewhere, or
forgot to add the production URL to the OAuth provider's allowed
callbacks.

**Check:** search the diff for `localhost`. There should be zero hits
in production code paths.

**Fix:** use an env var like `NEXT_PUBLIC_SITE_URL` for absolute URLs.
Add the production URL to every OAuth provider's allow-list.

---

## 11. Failed forms

**Symptom:** form submits silently, throws a 500, or "succeeds" but the
row never appears.

**Why AI causes it:** schema mismatch (column name typo), missing
default value, validation only on the client, error swallowed in a
`try/catch`.

**Check:** submit the form with valid data. Submit again with invalid
data. See readable errors, not stack traces. Verify the row exists in
the DB.

**Fix:** validate on the server too. Surface errors to the user.
Confirm column names match between code and schema.

---

## 12. Broken mobile layout

**Symptom:** the page looks fine on a laptop, terrible on a phone.
Sticky CTAs cover the submit button. Modals can't be closed.

**Why AI causes it:** added a fixed-position element, or used
`min-h-screen` plus a large header without accounting for mobile
viewport quirks.

**Check:** open production on your phone. Or use DevTools' device mode
at 375px width. Click every CTA. Open every modal.

**Fix:** test mobile **before** deploy, not after. It's the cheapest
QA you'll ever do.

---

## 13. Missing rollback plan

**Symptom:** something is broken in production and you do not know how
to revert.

**Why AI causes it:** the change includes a schema migration, a webhook
config update, and an env var change. There is no "one button" to undo.

**Check:** before deploy, ask yourself: "If this breaks in 5 minutes,
exactly which steps do I run to roll back?"

**Fix:** write the rollback steps down before deploy. Common pieces:

- Redeploy the previous commit on your hosting provider.
- Reverse the migration (or apply a compensating one).
- Revert the env var change.
- If a key was rotated as part of this deploy, you may need to keep
  both old and new versions briefly.

If you don't have a rollback plan, you are not ready to deploy.

---

## How to use this map

- Read the row that matches the kind of change you just made.
- Do the 5-second check in that row.
- If the check fails, do not deploy until the fix is in.

You can also use the headings as a checklist after a Reviewer Prompt
returns `PASS WITH WARNINGS` — each warning often maps to one of these
rows.
