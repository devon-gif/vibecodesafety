# Stripe Setup - VibeCode Safety Membership

VibeCode Safety Membership uses Stripe subscription Payment Links for the v1
launch. Do not add Stripe SDK code, webhooks, auth, a database, or a custom
dashboard yet.

## Products And Prices

1. Create product: `VibeCode Safety Membership`.
2. Create monthly subscription price: `$6.99/month`.
3. Create yearly subscription price: `$59/year`.
4. Create a monthly Payment Link for the monthly price.
5. Create a yearly Payment Link for the yearly price.
6. Set both success redirects to:
   `https://yourdomain.com/access/vcs-launch-edition-2026-k9p4`

## Environment Variables

Add these locally and in production:

```bash
NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK=
NEXT_PUBLIC_YEARLY_CHECKOUT_LINK=
NEXT_PUBLIC_CHECKOUT_LINK=
NEXT_PUBLIC_STRIPE_PAYMENT_LINK=
NEXT_PUBLIC_PRODUCT_DOWNLOAD_LINK=
```

Use `NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK` for the monthly plan and
`NEXT_PUBLIC_YEARLY_CHECKOUT_LINK` for the yearly plan. Keep
`NEXT_PUBLIC_CHECKOUT_LINK` and `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` as fallback
links only if needed.

## Customer Portal

Configure Stripe Customer Portal later for self-serve cancellation and billing
updates. Until then, cancellation copy should say support can help cancel
manually through Stripe.

## Test Checklist

1. Test monthly checkout.
2. Test yearly checkout.
3. Test success redirect.
4. Test member kit download.
5. Confirm cancellation copy is accurate.
6. Confirm no manual human audit is promised.
7. Confirm no security guarantee is promised.

## What We Are Not Doing Yet

- No Stripe SDK.
- No `app/api/checkout` route.
- No Stripe webhook handler.
- No database.
- No auth.
- No GitHub OAuth.
- No repo scanning backend.
- No full dashboard.
- No custom coupon logic.
