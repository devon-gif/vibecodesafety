# Dashboard — Later

VibeCode Safety intentionally launches without a member dashboard or SaaS backend.

This file captures what a future dashboard would do, when to build it, and
what to build it with.

---

## Why not now

- $6.99/month does not justify infrastructure cost and maintenance until
  member count validates it.
- Files + Stripe Customer Portal covers the core member needs.
- A dashboard adds auth, database, and support surface that is not needed yet.

---

## What a dashboard would do

| Feature | Notes |
|---------|-------|
| Member kit download | File hosting with authenticated access |
| Subscription status | Show plan, next billing date, payment method |
| Monthly drop archive | List and download all past drops |
| Cancel / manage billing | Stripe Customer Portal or embedded portal |
| Profile | Name, email, preferences |

---

## When to build it

Build a dashboard when:

- MRR is high enough to justify backend infrastructure and maintenance
- File delivery via static page becomes a support problem
- Members ask for features that require persistent state

---

## Suggested stack (when ready)

- **Auth:** Supabase Auth (email/password + magic link)
- **Database:** Supabase (Postgres) — members table, subscription status
- **Billing sync:** Stripe webhooks → Supabase members table
- **File access:** Supabase Storage with authenticated download URLs
- **Frontend:** Existing Next.js app, new `/dashboard` route

---

## Stripe webhook events to handle (for future dashboard)

- `checkout.session.completed` → create member record, grant access
- `customer.subscription.updated` → update plan, status
- `customer.subscription.deleted` → revoke access
- `invoice.payment_failed` → flag delinquent subscription
- `invoice.payment_succeeded` → confirm active subscription

---

## What NOT to build without a clear need

- Full admin panel
- Usage analytics
- Custom email editor
- Team/multi-seat management
- Public API

---

See `docs/SUBSCRIPTION_MEMBERSHIP_PLAN.md` for current product scope.
