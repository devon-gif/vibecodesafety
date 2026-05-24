# Stripe Checkout Audit

Paste into your AI tool alongside your Stripe checkout routes, environment
config, and success/cancel page files.

---

```
Review the Stripe checkout and billing implementation in this repo.

Check:

1. Price and product correctness
   - Is the correct Stripe price ID used for each plan (monthly, yearly)?
   - Is the product mode correct — subscription vs one-time payment?
   - Are test-mode price IDs absent from the production env?

2. Checkout session / Payment Link
   - Does the checkout link or session point to the correct Stripe product?
   - Does the success_url redirect to the correct post-payment page?
   - Is cancel_url or the cancel flow sensible and clear to the user?

3. Post-payment access delivery
   - What happens after a successful payment?
   - Is access gated on server-side verification of the payment, or is it
     trusting the success redirect URL alone?
   - The success redirect URL can be visited without a real payment. Do not
     rely on it as proof of purchase.

4. Webhook signature verification
   - If there is a Stripe webhook handler, is the webhook signature verified
     using the webhook signing secret?
   - Unverified webhooks can be spoofed to fake events (fulfilled orders,
     subscription activations).
   - Is the raw request body passed to `stripe.webhooks.constructEvent`?

5. Test vs live mode
   - Is there clear separation between test and live keys in the env config?
   - Are production env vars set to live keys, not test keys?
   - Are test Payment Links not accessible in production?

6. Subscription management
   - Is the Stripe Customer Portal configured?
   - Can users cancel, upgrade, or update their subscription?
   - Does the cancellation path work end to end?

7. Copy and promise accuracy
   - Does any public copy promise a manual audit, guaranteed security, or
     specific support not actually offered at the subscription price?

Return:
- Pricing or product mode issues.
- Access delivery risks.
- Missing webhook verification.
- Test/live key confusion.
- Recommended fixes.
- Verdict: PASS / WARNING / BLOCKED
```
