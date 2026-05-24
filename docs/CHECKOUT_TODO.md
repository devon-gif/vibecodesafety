# Checkout TODO

Stripe is intentionally **not** wired in this initial setup.

## Current state
- The “Get the kit” CTA links to `/success`, which renders a clear “Checkout coming soon” page.
- There is no Stripe SDK installed.
- There are no API routes.
- No environment variables are required to run the site.

## When you're ready to wire payments

1. **Pick an integration style**
   - Stripe Payment Link (zero code, fastest)
   - Stripe Checkout Session via a Next.js Route Handler (more control)
   - A 3rd-party reseller (Gumroad, Lemon Squeezy, Polar, etc.)

2. **If using Stripe directly**
   - `pnpm add stripe @stripe/stripe-js`
   - Create env vars:
     - `STRIPE_SECRET_KEY`
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
     - `STRIPE_PRICE_ID` (your $49 one-time price)
   - Add a Route Handler at `app/api/checkout/route.ts` that creates a Checkout Session in `payment` mode (NOT `subscription`).
   - Update CTAs (`Get the kit`) to POST to `/api/checkout` and redirect to the returned `url`.
   - Update `/success` to read `session_id` from the query string and confirm payment via `stripe.checkout.sessions.retrieve`.

3. **Delivery**
   - On successful payment, deliver the kit via:
     - A signed download URL (e.g. S3 / R2 / Supabase Storage), or
     - An email containing the link (Resend / Postmark).

4. **Webhook**
   - If you fulfill via email, add `app/api/stripe/webhook/route.ts` to listen for `checkout.session.completed`.

5. **Confirm one-time, not subscription**
   - In Stripe: price must be **one-time**, not recurring.
   - In Checkout Session: `mode: "payment"`.
   - In all UI copy: keep the “One-time purchase. No subscription required.” line.

## Until then
- Do not show fake checkout buttons.
- Do not collect emails until there's a real fulfillment pipeline.
- The current `/success` page is safe to ship as-is for waitlist-style launches.
