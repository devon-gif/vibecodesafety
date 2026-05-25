# Stripe Checkout Scorecard

## PASS

All critical checkout checks are passing.

- Correct price, product mode, and success redirect.
- No test keys in production.
- Webhook signature verified (or no webhook handler yet, documented as TODO).
- No misleading public copy.

## WARNING

One or more of the following:

- Customer Portal not yet configured (documented TODO is acceptable).
- Webhook handler not yet implemented but is a planned TODO.
- Minor copy inconsistency that does not misrepresent the product.
- Manual verification still needed before a real purchase.

## BLOCKED

One or more of the following:

- Wrong price ID, wrong product mode, or wrong success redirect in production.
- Test-mode keys in production environment.
- Webhook handler exists but does not verify the Stripe-Signature.
- Public copy promises a manual audit or guaranteed security.
- STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET in a NEXT_PUBLIC_ variable.
