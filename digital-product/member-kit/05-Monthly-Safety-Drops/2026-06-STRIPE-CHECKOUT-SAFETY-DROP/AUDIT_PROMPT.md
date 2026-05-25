# Stripe Checkout Audit Prompt

Paste this into your AI tool alongside your checkout files, env config,
success/cancel pages, and webhook handler.

---

```
Act as the VibeCode Auditor. Audit this Stripe checkout implementation.

1. Price and product accuracy
   - Is the correct Stripe price ID used for each plan?
   - Is the product mode correct — subscription vs one-time payment?
   - Is there any confusion between test-mode and live-mode price IDs?

2. Success and cancel URL
   - Does the success_url point to the correct post-payment page?
   - Is the cancel_url or cancel flow sensible and visible to the user?
   - Can a user visit the success URL without completing a real payment?
     If yes, is access truly gated server-side or is it trusting the URL?

3. Webhook signature verification
   - Is there a Stripe webhook handler?
   - Does it verify the Stripe-Signature header using the webhook signing secret?
   - Is the raw request body (not parsed JSON) used in constructEvent?
   - What events does it handle? Are fulfillment events handled correctly?

4. Environment variable safety
   - Is the Stripe secret key server-only (not NEXT_PUBLIC_)?
   - Is the Stripe publishable key the only public Stripe value?
   - Is the webhook signing secret server-only?

5. Subscription management
   - Is the Stripe Customer Portal configured?
   - Can users cancel their subscription?
   - Is the portal URL or session endpoint available to authenticated users?

6. Public copy accuracy
   - Does any public-facing copy promise a manual audit, guaranteed security,
     or specific support beyond what is actually offered?
   - Is pricing copy accurate and consistent (monthly vs yearly)?

Return:
- Issues found (HIGH / MEDIUM / LOW) with affected files.
- Recommended fixes.
- Verdict: PASS / WARNING / BLOCKED
```
