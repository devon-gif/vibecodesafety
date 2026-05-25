# Launch Checklist - VibeCode Safety Membership

Run through this before flipping the subscription site live.

## Public Copy

- [ ] Homepage headline says "Audit your repo. Guard every AI change."
- [ ] Subscription price shows $6.99/month.
- [ ] Yearly price shows $59/year.
- [ ] No stale $29.99 one-time pricing language remains on public pages.
- [ ] "Cancel anytime" copy matches the current Stripe support process.
- [ ] No manual human audit is promised at $6.99/month.
- [ ] No guaranteed security, bug-free, compliant, or production-ready promise exists.
- [ ] Compatibility disclaimer says tool names are for context only and no endorsement is implied.

## Public Pages

- [ ] `/` renders without console errors.
- [ ] `/checkout-coming-soon` uses subscription placeholder copy.
- [ ] `/success` welcomes members without promising account-based access.
- [ ] `/access/vcs-launch-edition-2026-k9p4` shows the member kit download when `NEXT_PUBLIC_PRODUCT_DOWNLOAD_LINK` is set.
- [ ] `/privacy` renders.
- [ ] `/terms` renders.
- [ ] `/refund-policy` uses subscription refund and cancellation language.
- [ ] `/manage-subscription` opens Stripe Customer Portal when `NEXT_PUBLIC_CUSTOMER_PORTAL_LINK` is set.
- [ ] `/manage-subscription` shows support instructions when the portal link is missing.
- [ ] Footer links work: Privacy Policy, Terms & Agreements, Refund / Cancellation Policy, Contact, Manage Subscription.

## Stripe Checkout

- [ ] Create Stripe product: VibeCode Safety Membership.
- [ ] Create monthly Stripe subscription price: $6.99/month.
- [ ] Create yearly Stripe subscription price: $59/year.
- [ ] Create monthly Payment Link.
- [ ] Create yearly Payment Link.
- [ ] Add monthly checkout link to `NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK`.
- [ ] Add yearly checkout link to `NEXT_PUBLIC_YEARLY_CHECKOUT_LINK`.
- [ ] Keep `NEXT_PUBLIC_CHECKOUT_LINK` and `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` as fallbacks only if needed.
- [ ] Set both success redirects to `/access/vcs-launch-edition-2026-k9p4`.
- [ ] Configure Stripe Customer Portal for self-serve cancellation.
- [ ] Enable cancellation in Stripe Customer Portal.
- [ ] Collect cancellation reasons.
- [ ] Optional: add retention coupon, stay for $3.99/month for 3 months.
- [ ] Add portal link to `NEXT_PUBLIC_CUSTOMER_PORTAL_LINK`.
- [ ] Test monthly checkout.
- [ ] Test yearly checkout.
- [ ] Test success redirect.
- [ ] Test member kit download.
- [ ] Test customer portal cancellation.
- [ ] Test cancellation copy is accurate while portal is not fully connected.

## Member Kit Delivery

- [ ] `digital-product/member-kit/` exists.
- [ ] VibeCode Auditor Agent files are present.
- [ ] Heavy-Duty Repo Audit workflow is present.
- [ ] Daily Build Guardrails are present.
- [ ] Monthly Safety Drops are present.
- [ ] Support and cancellation docs are present.
- [ ] Final member kit ZIP opens locally.
- [ ] Upload the member kit ZIP as a single Google Drive file.
- [ ] Create a direct Google Drive download link.
- [ ] Add direct download link to `NEXT_PUBLIC_PRODUCT_DOWNLOAD_LINK`.
- [ ] Test member kit download from the hidden access page.
- [ ] Confirm the support email appears if the download link is missing.

## Site Sanity

- [ ] Header, hero, pricing, sticky CTA, chat widget, and final CTA use monthly checkout by default.
- [ ] Yearly pricing CTA uses yearly checkout.
- [ ] Checkout fallback routes to `/checkout-coming-soon` when env vars are blank.
- [ ] Manage Subscription footer link routes to `/manage-subscription`.
- [ ] Hidden access page is not linked in nav, footer, homepage public links, or sitemap.
- [ ] Video does not autoplay, uses controls, and has sound when visitors press play.
- [ ] Contact form does not expose the private recipient email in client code.
- [ ] Header does not show Sign In.
- [ ] `/sign-up` does not imply auth is live.
- [ ] Mobile layout works on a real phone.

## Build And Type Check

- [ ] `pnpm run type-check` clean.
- [ ] `pnpm run build` clean.
- [ ] Local dev runs on `http://localhost:3001` using `pnpm run dev`.

## After Launch

- [ ] Watch first 5 subscriptions and confirm each member received access.
- [ ] Enable Stripe Customer Portal when ready.
- [ ] Update FAQ cancellation answer once the portal is live.
- [ ] Add real testimonials only after permission is granted.
- [ ] Open one issue per member feedback item.
