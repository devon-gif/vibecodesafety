# What To Fix First — Stripe Checkout

Fix issues in this priority order.

---

## 1. Wrong price ID or product mode (HIGH)

If the wrong price is charged, users pay the wrong amount or get a one-time
charge when they expected a subscription (or vice versa).

Fix: Verify the Stripe price ID in your env against the Stripe Dashboard.
Confirm the mode is `subscription` for recurring billing.

---

## 2. Broken success redirect (HIGH)

If the success URL points to the wrong page, members cannot access what they
paid for. This causes support tickets, chargebacks, and churn.

Fix: Test the full checkout flow end to end in Stripe test mode. Confirm the
success redirect lands on the correct access page.

---

## 3. Missing webhook signature verification (HIGH)

An unverified webhook can be spoofed to fake events (fulfilled subscriptions,
cancelled subscriptions, etc.).

Fix: Add Stripe-Signature verification to your webhook handler using
`stripe.webhooks.constructEvent`. Pass the raw body, not parsed JSON.

---

## 4. Stripe secret key exposed to client (CRITICAL)

If STRIPE_SECRET_KEY is in a NEXT_PUBLIC_ variable, it is in the client
bundle and publicly visible.

Fix: Move it to a non-NEXT_PUBLIC_ env var and use it only in server-side
code.

---

## 5. Test keys in production (HIGH)

Test payments will succeed in Stripe test mode but will not charge real money.
Live payments will fail if live keys are missing.

Fix: Set live Stripe keys in the production hosting environment. Confirm with
a test live purchase before launch.

---

## 6. Misleading public copy (MEDIUM)

Copy that promises a manual audit, guaranteed security, or specific outcomes
not delivered at $6.99/month creates legal and trust risk.

Fix: Audit public-facing pricing copy, FAQ, and microcopy. Remove or correct
any overpromising language.
