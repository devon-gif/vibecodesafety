# CRITICAL_FLOWS_CHECKLIST.md

The flows worth hand-testing for 60 seconds each, especially after AI
touches anything connected to them. Pick the ones that apply to your app.

## Auth
- [ ] Sign up with a new email succeeds.
- [ ] Confirmation / verification email arrives (if applicable).
- [ ] Sign in with an existing account succeeds.
- [ ] Sign out clears the session (refresh, you should be logged out).
- [ ] Visiting a protected route while logged out redirects to sign in.
- [ ] Visiting a protected route while logged in renders the page.

## Onboarding
- [ ] First-run state for a brand new user is sane (no empty crashes).
- [ ] Required onboarding steps cannot be skipped via direct URL.

## Billing / Stripe
- [ ] Checkout opens for the right price.
- [ ] Successful test purchase redirects to `/success`.
- [ ] Webhook (if any) receives `checkout.session.completed` and updates
      plan / entitlement.
- [ ] Cancel/back from Stripe Checkout returns the user to the right page.
- [ ] User cannot access paid features while on the free plan.

## Forms / data writes
- [ ] Required fields are validated client-side AND server-side.
- [ ] Submitting writes the row you expect.
- [ ] Validation errors render readable messages, not stack traces.

## Dashboard / authenticated pages
- [ ] First load doesn't flash incorrect content (e.g. "Sign in" while
      already logged in).
- [ ] Loading and empty states render.
- [ ] One user cannot see another user's data (RLS / auth check).

## Public pages
- [ ] Marketing pages still render without auth.
- [ ] Footer legal links work (`/privacy`, `/terms`, `/refund-policy`).
- [ ] No hydration mismatch warnings in the console.

## Email (if applicable)
- [ ] Transactional emails send from the right address.
- [ ] No real customer data in test emails.

## Mobile
- [ ] Sticky CTAs / chat widgets do not cover form submit buttons.
- [ ] Tap targets are reachable. Modals can be closed.
