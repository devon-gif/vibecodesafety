# Launch Checklist

Pre-launch tasks for the VibeCode Safety Kit landing site.

## Content
- [ ] Final pass on hero copy
- [ ] Final pass on FAQ
- [ ] Confirm pricing copy says “one-time”, not “subscription”
- [ ] Add real support email to footer / privacy / refund policy
- [ ] Replace placeholder “Last updated” dates in legal pages

## Visual / brand
- [ ] Add favicon (`app/icon.png` or `app/favicon.ico`)
- [ ] Add OG image (`app/opengraph-image.png`)
- [ ] Confirm dark theme renders correctly on iOS Safari
- [ ] Confirm responsive layout at 375px, 768px, 1280px

## Product / kit
- [ ] Build the actual kit ZIP (replace `kit-preview/` placeholders)
- [ ] Decide on delivery method (signed link, email, Gumroad, Lemon Squeezy, custom)
- [ ] Write the customer “welcome” email

## Payments (do **not** start until product is ready)
- [ ] Create Stripe product + $49 one-time price
- [ ] Decide on Stripe Checkout vs Payment Link vs custom
- [ ] Wire `/success` to confirm a real session_id
- [ ] Add tax / VAT handling if applicable
- [ ] See `CHECKOUT_TODO.md`

## Legal
- [ ] Review Terms / Privacy / Refund policy with the right jurisdiction in mind
- [ ] Add company / sole-trader name + address to legal pages

## Analytics
- [ ] Add lightweight analytics (Plausible / Umami / GA4)
- [ ] Track CTA clicks: “Get the kit”, “See what's inside”

## Tech
- [ ] `pnpm run type-check` clean
- [ ] `pnpm run build` clean
- [ ] Check no console errors on `/`, `/success`, `/terms`, `/privacy`, `/refund-policy`

## Launch day
- [ ] Pick the domain
- [ ] Decide on host (Vercel, Cloudflare Pages, etc.) — **not done by this repo**
- [ ] Soft launch to small list
- [ ] Public launch post
