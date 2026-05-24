# Stripe Setup - VibeCode Safety Kit

This site sells a **single one-time digital product** at **$29.99**. The
simplest path is a Stripe Payment Link. We do **not** install the Stripe
SDK, write API routes, or handle webhooks for v1.

## Step 1 - Create the product in Stripe

1. Sign in to https://dashboard.stripe.com/.
2. **Products → Add product.**
3. Name: `VibeCode Safety Kit`.
4. Description: `A practical safety workflow for AI-assisted builders. Prompts, checklists, repo rules, and pre-deploy guardrails. One-time purchase.`
5. Pricing model: **One time**. Price: **29.99 USD**.
6. Save.

## Step 2 - Create a Payment Link

1. **Payment links → New.**
2. Select the price you just created.
3. After payment behavior: **Redirect to your website**.
4. Success URL: `https://yourdomain.com/access/vcs-launch-edition-2026-k9p4`.
5. (Optional) Collect billing address only if you need it for taxes.
6. (Optional) Custom field: a single optional checkbox labeled
   *"Send me product updates and AI coding safety tips by email"*.
   Leave it **unchecked by default**. Mark it **optional**.
7. Save. Copy the resulting URL - it looks like
   `https://buy.stripe.com/test_xxx` (test mode) or
   `https://buy.stripe.com/xxx` (live mode).

## Step 3 - Wire the URL into the site

Add to `.env.local` for local dev:

```
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/xxxxx
```

Add the same value in your hosting provider (Vercel → Environment
Variables → Production / Preview / Development).

Restart the dev server (`pnpm run dev`). All "Get the Kit" buttons now
open the Payment Link in a new tab.

If the env var is unset, every Buy button routes to `/checkout-coming-soon`
instead of breaking.

## Step 4 - Test mode end-to-end

1. Use a **test mode** Payment Link (toggle in the Stripe dashboard).
2. On the site, click any Buy button.
3. Pay with Stripe test card `4242 4242 4242 4242`, any future expiry,
   any CVC, any ZIP.
4. Confirm you land on `/access/vcs-launch-edition-2026-k9p4`.
5. Confirm Stripe shows the test payment under **Payments**.

## Step 5 - Switch to live mode

1. Create the product and Payment Link again in **live mode** (Stripe
   keeps test and live separate).
2. Update the env var in production to the **live** Payment Link URL.
3. Redeploy / restart so the new env var takes effect.
4. Make a real $29.99 purchase from your own account. Refund yourself
   after confirming the hidden access page works.

## Step 6 - Download delivery

We do not have webhook-verified delivery in v1. The simplest delivery path:

- Redirect the buyer to `/access/vcs-launch-edition-2026-k9p4`.
- Set `NEXT_PUBLIC_PRODUCT_DOWNLOAD_LINK` to a direct Google Drive file
  download URL.
- When ready, replace this with server-side payment verification or a
  digital delivery platform.

See `docs/CHECKOUT_TODO.md` for the email-consent and webhook upgrade path.

## What we are intentionally NOT doing in v1

- No Stripe SDK.
- No `app/api/checkout` route.
- No Stripe webhook handler.
- No subscriptions.
- No customer portal.
- No coupon / promo codes (Payment Link supports them natively if you
  enable them in the dashboard - no code needed).
