# SAAS_DASHBOARD_EXAMPLE.md

A concrete walkthrough for an indie hacker adding a Stripe subscription
to an existing SaaS dashboard. This is the highest-risk type of AI change.

## The scenario

- Stack: Next.js + Supabase + Stripe Subscriptions.
- Request: "Add a Pro plan ($19/mo). Lock /reports behind it."

## Step 1 — Repo instructions in place

Your `AGENTS.md` already lists:

- Critical flows: auth, billing webhook, dashboard data, deploy.
- Do not touch Stripe price IDs or webhook handlers without explicit ask.

## Step 2 — Builder Prompt

```
WHAT I WANT
Add a Pro plan at $19/mo. Locked routes: /reports.

WHERE IT LIVES
- New Stripe price (created manually in dashboard — I'll paste the ID).
- app/(marketing)/pricing/page.tsx — add Pro card + "Upgrade" button.
- app/api/stripe/webhook/route.ts — handle
  customer.subscription.created/updated/deleted to set users.plan.
- middleware.ts or layout — gate /reports behind plan === 'pro'.

CONSTRAINTS
- Source of truth for plan = users.plan column, updated by webhook only.
- Do not grant access on the success redirect URL.
- Idempotent webhook (use event.id).
- TypeScript clean.

CRITICAL FLOWS TO PRESERVE
- Auth, /dashboard, existing free-plan flows.

PLAN FIRST. Then wait for "go".
```

## Step 3 — AI builds

It outputs a plan touching 6 files including `webhook/route.ts`. Risk:
**high**. You read the plan carefully before saying "go".

After it builds:

```
Files changed: 6
Risk: high
Critical flows touched: BILLING (intentional), AUTH (read-only)
New env vars: STRIPE_PRICE_PRO (server-only)
Manual checks:
- Test purchase in test mode reaches /success
- users.plan flips to 'pro' on webhook
- /reports denies access for free users, allows for pro
- Cancel subscription -> users.plan flips back to 'free'
```

## Step 4 — Reviewer Prompt

Reviewer comes back:

```
Risk: high
Required fixes:
1. Webhook handler does not verify the Stripe signature. Use
   stripe.webhooks.constructEvent.
2. Plan update happens in app/success/page.tsx (in addition to webhook).
   Remove from /success — only the webhook should update plan state.
3. /reports gating is implemented in a client component. Move the check
   server-side (middleware or layout).
4. No event.id deduplication. Add a `stripe_events` table or in-memory
   guard.

VERDICT: BLOCKED
```

## Step 5 — Fix and re-review

You ask AI to address each fix. Re-run Reviewer.

```
Risk: medium
VERDICT: PASS WITH WARNINGS
Follow-ups:
- Add a smoke test that exercises the webhook signature path.
- Document the manual rollback if a webhook deploy goes bad.
```

## Step 6 — Run checklists

- `04-Security-Guardrails/STRIPE_BILLING_CHECKLIST.md` — full pass.
- `04-Security-Guardrails/AUTH_CHECKLIST.md` — gating section.
- `03-Checklists/PRE_PUSH_CHECKLIST.md` ✓
- `03-Checklists/PRE_DEPLOY_CHECKLIST.md` ✓

## Step 7 — Manual smoke

In Stripe **test mode**:

- Subscribe with `4242…4242`. Webhook fires. `users.plan` = 'pro'.
- `/reports` accessible. ✅
- Cancel in Stripe dashboard. `customer.subscription.deleted` fires.
  `users.plan` = 'free'. `/reports` denied. ✅

Switch keys to live. Repeat with a $19 real charge on your own account.
Refund yourself afterwards.

## Step 8 — Deploy

Promote. Watch logs for the first real customer's webhook event. Have
your rollback plan ready (previous deploy + a quick `users.plan = 'free'`
SQL if needed).

---

The point of the loop here isn't paperwork. It's that the Reviewer
Prompt caught:

- Missing webhook signature verification.
- Granting access on `/success` (the most common AI-generated billing
  bug — the URL is not auth).
- Client-side gating where it should be server-side.

Any one of those would have been a real incident.
