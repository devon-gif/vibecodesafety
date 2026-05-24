# STRIPE_BILLING_CHECKLIST.md

The Stripe mistakes that cost real money. Run through this after any AI
change to checkout, webhooks, plan state, or success URLs.

## Keys & modes
- [ ] `STRIPE_SECRET_KEY` is server-only. Never `NEXT_PUBLIC_*`.
- [ ] `STRIPE_WEBHOOK_SECRET` is set in every environment that receives
      webhooks.
- [ ] Test keys (`sk_test_…`, `pk_test_…`) are never deployed to
      production.
- [ ] Test webhook secret and live webhook secret are stored separately.

## Payment Links (one-time products)
- [ ] Price is the right one-time amount, not a subscription, unless you
      really want a subscription.
- [ ] Success URL points to your `/success` page.
- [ ] Cancel URL points somewhere reasonable.
- [ ] If you collect customer email, marketing consent is **optional**
      (unchecked by default).

## Checkout (custom integration)
- [ ] You verify the session server-side after redirect — never trust the
      client to mark itself as paid.
- [ ] Plan / entitlement updates happen on **webhook events**, not on the
      success page render.
- [ ] You handle `checkout.session.completed`,
      `customer.subscription.updated`, and
      `customer.subscription.deleted` (if subscriptions).

## Webhooks
- [ ] `stripe.webhooks.constructEvent` is used to verify the signature.
- [ ] You return `200` quickly. Heavy work goes to a queue or an awaited
      DB write only.
- [ ] Idempotency: store `event.id`. If you've seen it, ack and skip.
- [ ] Webhook URL is publicly reachable and returns 2xx in production.
- [ ] Stripe dashboard shows recent events as `Succeeded`.

## Plan / entitlement state
- [ ] Source of truth for "is this user paid?" is your DB, updated by
      webhook.
- [ ] You do **not** rely on the URL or a query param to grant access.
- [ ] On sign-in / page load, you re-check entitlement from the DB.

## Refunds & cancellations
- [ ] Refund flow tested in test mode.
- [ ] Subscription cancel: user retains access until period end (or
      immediately, depending on policy).
- [ ] You log refunds for your records.

## Public messaging
- [ ] Refund / no-refund policy on the site matches what you actually
      do at the Stripe level.
- [ ] Pricing on the site matches the Stripe price.

## Smoke test after any change near billing
- [ ] Test purchase end-to-end in test mode.
- [ ] Confirm webhook fired and user record updated.
- [ ] Confirm `/success` page renders cleanly.
