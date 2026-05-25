# Stripe Customer Portal

Use Stripe Customer Portal for VibeCode Safety Membership billing and
cancellation instead of building a custom dashboard in v1.

## Why Use Stripe Customer Portal

- Stripe already manages subscription billing, invoices, payment methods, and
  cancellation.
- VibeCode Safety does not have auth, a database, or a member dashboard yet.
- A hosted portal keeps billing management low-friction without adding custom
  Stripe API code.

## Setup

1. Open Stripe Dashboard.
2. Go to Customer Portal settings.
3. Enable subscription cancellation.
4. Collect cancellation reasons.
5. Allow customers to update payment methods.
6. Allow customers to view invoices if needed.
7. Optional retention offer: stay for `$3.99/month` for 3 months.
8. Save and test the portal before launch.

## Site Wiring

Set the hosted portal link in:

```bash
NEXT_PUBLIC_CUSTOMER_PORTAL_LINK=
```

The footer Manage Subscription link points to `/manage-subscription`. That page
opens the Stripe Customer Portal when the env var is available. If the env var
is missing, it shows support instructions.

## Later Option

Later, after auth and account management exist, implement a server-side
portal-session route that creates a Stripe Customer Portal session for the
logged-in customer.

Do not build that route for the v1 launch.

## Test Before Launch

- Test portal opens from `/manage-subscription`.
- Test cancellation flow.
- Test cancellation reasons are collected.
- Test the optional retention coupon if enabled.
- Confirm cancellation copy on the site matches the portal behavior.
- Confirm no custom dashboard is promised.
