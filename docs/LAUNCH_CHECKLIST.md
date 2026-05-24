# Launch Checklist — VibeCode Safety Kit

Run through this before flipping the site to "live".

## Site

- [ ] Homepage renders without console errors.
- [ ] Hero copy: "Make AI check the AI before you ship."
- [ ] Pricing shows **$29.99 one-time** everywhere.
- [ ] Sticky CTA appears after scroll on desktop and mobile.
- [ ] Chat widget opens; FAQ chips return canned answers; final
      "Get the Kit for $29.99" button works.
- [ ] All "Get the Kit" buttons go to either the Stripe Payment Link
      or `/checkout-coming-soon` (no broken hrefs).

## Pages

- [ ] `/` — homepage.
- [ ] `/checkout-coming-soon` — placeholder when env var unset.
- [ ] `/success` — general thank-you page with no download button.
- [ ] `/access/vcs-launch-edition-2026-k9p4` — hidden post-checkout
      download access page.
- [ ] `/privacy` — current copy, dated.
- [ ] `/terms` — current copy, dated.
- [ ] `/refund-policy` — current copy, dated.
- [ ] Footer legal links work on desktop and mobile:
      Privacy Policy, Terms & Agreements, Refund Policy, Contact.

## Stripe (see `docs/STRIPE_SETUP.md`)

- [ ] Product created at $29.99 one-time (NOT subscription).
- [ ] Payment Link created with success URL =
      `/access/vcs-launch-edition-2026-k9p4`.
- [ ] `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` set in production env.
- [ ] Test purchase succeeds end-to-end in test mode.
- [ ] Switched to live mode for production.
- [ ] Refund policy on the site matches Stripe behavior.

## Digital product

- [ ] `digital-product/VibeCode-Safety-Kit-v1/` is reviewed for typos
      and `{{REPLACE_ME}}` placeholders are documented as user fills.
- [ ] Final ZIP opens locally:
      `digital-product/final/VibeCode-Safety-Kit-v1-Launch-Edition.zip`.
- [ ] A delivery method is decided (zip download, GitHub release link,
      Notion share, or manual email after each sale).
- [ ] `START_HERE.md` clearly explains the 5-minute first-use loop.

## Build / type-check

- [ ] `pnpm run type-check` clean.
- [ ] `pnpm run build` clean.
- [ ] Local dev runs on http://localhost:3001.

## Legal & policy

- [ ] Email used in legal pages: `support@vibecodesafety.com`.
- [ ] No fake testimonials, no fake "5,000 customers" claims.
- [ ] Disclaimer present near pricing: this is not a security audit and
      does not replace a senior developer.

## Email consent (optional)

- [ ] Pricing card includes the **unchecked-by-default** marketing
      consent checkbox.
- [ ] When connecting to a real provider, do not pre-check it.

## Buyer experience (NEW)

- [ ] Product ZIP / delivery folder includes `QUICKSTART.md` at the
      root.
- [ ] `digital-product/VibeCode-Safety-Kit-v1/00-START-HERE/` exists
      with `READ_THIS_FIRST.md`, `5_MINUTE_SETUP.md`,
      `WHICH_FILE_DO_I_USE.md`, and `COMMON_BEGINNER_MISTAKES.md`.
- [ ] `digital-product/VibeCode-Safety-Kit-v1/00-Beginner-Mode/`
      Beginner Mode files exist and are referenced from the homepage,
      success page, and QUICKSTART.
- [ ] `digital-product/VibeCode-Safety-Kit-v1/99-BUYER-BONUS/` exists
      with the prompt pack, scorecard, and one-page deploy checklist.
- [ ] A new buyer reading `READ_THIS_FIRST.md` could be set up in 5
      minutes without asking questions.
- [ ] `/success` does not show the download button in production.
- [ ] Hidden access page shows the next 5 minutes (download ZIP, open
      QUICKSTART, open Beginner Mode, copy safety files, paste Daily
      Prompt).
- [ ] Hidden access page shows support email if
      `NEXT_PUBLIC_PRODUCT_DOWNLOAD_LINK` is missing.

## Site sanity

- [ ] All purchase CTAs work (header, hero, beginner-setup section,
      pricing, sticky CTA, chat widget, final CTA).
- [ ] Footer legal links work on desktop AND mobile (Privacy Policy,
      Terms & Agreements, Refund Policy, Contact mailto).
- [ ] Hidden access page is not linked in the public nav, footer, or
      homepage.
- [ ] Site is responsive on a real phone: sticky CTA and chat widget
      do not cover important content; modals can be closed.
- [ ] Local dev runs on `http://localhost:3001` (`pnpm run dev`).

## Testimonials & social proof

- [ ] All 3 testimonial cards are clearly labeled as
      *Example founder / vibe coder / agency reaction*.
- [ ] Disclaimer line ("Placeholder reactions shown for product
      positioning. Real buyer testimonials will be added after launch.")
      is present under the cards.
- [ ] Replace placeholder testimonials with **real** buyer quotes (with
      permission) as they come in. Remove the disclaimer once all three
      cards are real.
- [ ] No fake names, no fake photos, no "verified buyer" badges.

## AI tool compatibility strip

- [ ] Compatibility pill strip uses tool **names only** (no third-party
      logos).
- [ ] Disclaimer line ("Tool names are shown for compatibility context
      only. VibeCode Safety Kit is independent and is not affiliated with
      or endorsed by these companies.") is present.
- [ ] No endorsement, partnership, or certification language anywhere
      on the site.

## Accounts / sign-up

- [ ] `/sign-up` page renders cleanly.
- [ ] Google button is **visibly disabled** with a "Coming soon" badge.
- [ ] Sign-up page does not imply auth is live.
- [ ] Header "Sign In" link is subtle, not the primary CTA.
- [ ] Purchase does **not** require an account.
- [ ] Stripe checkout email is the delivery identity for launch.

## After launch

- [ ] Watch the first 5 real purchases. Confirm each buyer received the
      kit.
- [ ] Open one bug ticket per piece of feedback. Don't lose any.
- [ ] Schedule a v1.1 pass: typos, missing examples, new tools to support.
- [ ] Replace placeholder testimonials with real ones.
- [ ] When real accounts are wired, replace the disabled Google button
      with a working OAuth flow and update the related FAQ entry.

## Free delivery setup (v1)

- [ ] Create dedicated Gmail: vibecodesafety@gmail.com
- [ ] Create Google Drive delivery folder (owned by that Gmail)
- [ ] Test final ZIP opens:
      `digital-product/final/VibeCode-Safety-Kit-v1-Launch-Edition.zip`
- [ ] Upload ZIP as a single Google Drive file, not only as a folder:
      `VibeCode-Safety-Kit-v1-Launch-Edition-FINAL.zip`
- [ ] Set Google Drive sharing to "Anyone with the link — Viewer"
- [ ] Create direct download link:
      `https://drive.google.com/uc?export=download&id=FILE_ID`
- [ ] Add direct download link to `NEXT_PUBLIC_PRODUCT_DOWNLOAD_LINK` in .env.local
- [ ] Create Stripe Payment Link ($29.99 one-time, NOT subscription)
- [ ] Set Stripe success redirect to hidden access page:
      `/access/vcs-launch-edition-2026-k9p4`
- [ ] Add Stripe checkout link to `NEXT_PUBLIC_CHECKOUT_LINK` in .env.local
- [ ] Enable Stripe customer receipts (Settings → Emails)
- [ ] Enable Stripe successful-payment account notifications
- [ ] Create Google Sheet buyer tracker (columns: Purchase Date, Customer Name, Customer Email, Stripe Payment ID, Access Sent?, Opted Into Updates?, Issue?, Notes)
- [ ] Test purchase flow end-to-end in Stripe test mode
- [ ] Confirm `/success` does not show the download in production
- [ ] Confirm hidden access page is not linked in the public nav/footer/homepage
- [ ] Confirm direct download starts or opens Google's download confirmation
- [ ] Confirm support email appears if link is missing
- [ ] Confirm no account is required to purchase or download
- [ ] Confirm no CRM is needed for v1
- [ ] Switch Stripe to live mode before launch
