# ENVIRONMENT_VARIABLES_CHECKLIST.md

A 60-second pass to make sure your env vars are sane.

## Inventory
- [ ] Every env var the app reads is listed in `.env.example`.
- [ ] `.env.example` is committed; `.env*` (real values) is **not**.
- [ ] Dev, staging, and prod each have their own values.

## Public vs server
- [ ] Variables prefixed `NEXT_PUBLIC_*` (or your framework's public prefix)
      contain **no** secrets — they are shipped to the browser.
- [ ] Server secrets (Stripe secret key, service-role keys, OAuth secrets)
      have **no** public prefix.
- [ ] Server secrets are read only from server code (route handlers, server
      actions, server components, edge handlers).

## Stripe-specific (if applicable)
- [ ] `STRIPE_SECRET_KEY` is server-only, never `NEXT_PUBLIC_*`.
- [ ] `STRIPE_WEBHOOK_SECRET` is set in every environment that receives
      webhooks.
- [ ] Test keys (`sk_test_…`) are never deployed to production.
- [ ] `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` is allowed to be public; it is just
      a URL.

## Supabase-specific (if applicable)
- [ ] `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are
      public — fine.
- [ ] `SUPABASE_SERVICE_ROLE_KEY` is server-only. Never `NEXT_PUBLIC_*`.
      Never used in client components.

## Hosting
- [ ] All env vars are set in Vercel / your host for **Production**,
      **Preview**, and **Development** environments as needed.
- [ ] After adding a new var, you redeployed.

## Hygiene
- [ ] No env vars logged in build output.
- [ ] No env vars echoed in shell history (`echo $STRIPE_SECRET_KEY` lives
      in your shell history forever — clear it if you slipped).
- [ ] Rotated any secret that was accidentally committed, even if you
      reverted the commit.
