# Stripe Checkout Checklist

Work through each item. Check it off when confirmed safe.

## Price and product

- [ ] Monthly price ID is correct and points to the $6.99/month subscription.
- [ ] Yearly price ID is correct and points to the $59/year subscription.
- [ ] Product mode is subscription (not one-time payment).
- [ ] Test-mode price IDs are not present in production env vars.

## Checkout flow

- [ ] The success redirect URL points to the correct post-payment page.
- [ ] The cancel URL or back path is sensible.
- [ ] The checkout button opens the correct link (monthly vs yearly based on
      which button the user clicked).

## Post-payment access

- [ ] The access page is not trusting only the success URL redirect as proof
      of payment.
- [ ] If access requires server-side verification, it is implemented.

## Webhook

- [ ] If a webhook handler exists, it verifies Stripe-Signature.
- [ ] The raw request body is passed to constructEvent, not parsed JSON.
- [ ] The webhook signing secret is a server-only env var.

## Environment variables

- [ ] STRIPE_SECRET_KEY is not prefixed with NEXT_PUBLIC_.
- [ ] STRIPE_WEBHOOK_SECRET is not prefixed with NEXT_PUBLIC_.
- [ ] No Stripe keys are hardcoded in source files.

## Customer Portal

- [ ] Stripe Customer Portal is configured (or is a documented TODO).
- [ ] The portal URL is accessible to subscribers.
- [ ] Cancellation through the portal has been tested (or is a TODO).

## Public copy

- [ ] No manual audit is promised at $6.99/month.
- [ ] No guaranteed security is promised.
- [ ] Pricing copy is accurate and consistent.
- [ ] Cancel anytime language is accurate.

Score: _____ / 20 checks passing.
