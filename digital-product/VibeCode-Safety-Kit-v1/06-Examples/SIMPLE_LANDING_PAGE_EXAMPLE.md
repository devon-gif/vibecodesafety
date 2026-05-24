# SIMPLE_LANDING_PAGE_EXAMPLE.md

A concrete walkthrough for a non-technical founder shipping a marketing
site (Next.js or similar) with one Stripe Payment Link.

## The scenario

- You: designer / non-technical founder.
- Stack: Next.js 14 App Router, Tailwind, Stripe Payment Link.
- Request: "Add a pricing section with a Buy button. Add legal pages."

## Step 1 — Repo instructions in place

You copy `01-Repo-Instructions/AGENTS.md` and `CURSOR_RULES.md` into
your repo and fill in:

- Stack: Next.js 14, Tailwind.
- Critical flows: homepage renders, Buy button routes to Stripe, legal
  pages render.
- "Do not break": the Stripe Payment Link URL.

## Step 2 — Builder Prompt

```
WHAT I WANT
Add a #pricing section on the homepage. Single product: $29.99 one-time.
"Buy" button opens NEXT_PUBLIC_STRIPE_PAYMENT_LINK in a new tab. If the
env var is unset, route to /checkout-coming-soon.

ALSO
Add /privacy, /terms, /refund-policy. Link them in the footer.

CONSTRAINTS
- No new dependencies.
- Match Tailwind dark theme already in use.
- TypeScript clean.

PLAN FIRST.
```

## Step 3 — AI builds

It produces:

```
app/page.tsx               (modified — added pricing section)
app/privacy/page.tsx       (new)
app/terms/page.tsx         (new)
app/refund-policy/page.tsx (new)
app/checkout-coming-soon/page.tsx (new)
lib/checkout.ts            (helper)
components/BuyLink.tsx     (Buy button component)
components/SiteFooter.tsx  (modified — legal links)
.env.example               (modified)
```

## Step 4 — Reviewer Prompt

Reviewer comes back:

```
Risk: low
Broken-flow check:
- Auth: NOT TOUCHED
- Billing: AT RISK — Buy button is the only revenue path
- Data writes: NOT TOUCHED
- Public pages: AT RISK — legal pages must be reachable

Required fixes:
- Confirm Buy button works when env var is set AND when unset.
- Confirm /privacy, /terms, /refund-policy return 200.

VERDICT: PASS WITH WARNINGS
```

## Step 5 — Smoke

- `pnpm run dev` → visit `/`, `/privacy`, `/terms`, `/refund-policy`.
- All render. Footer links work.
- Click Buy with `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` unset → lands on
  `/checkout-coming-soon`. ✅
- Set the env var to a real Payment Link, restart, click Buy → opens
  Stripe in a new tab. ✅
- Make a $0.01 test charge in Stripe test mode → lands on `/success`. ✅

## Step 6 — Pre-deploy

Run `03-Checklists/PRE_DEPLOY_CHECKLIST.md`:

- Type-check ✓ Build ✓ Gitleaks ✓
- Stripe is in **live** mode for production.
- `/success` page explains delivery.
- `/refund-policy` matches what you actually do.

Promote to production.

## Step 7 — One week later, you change the price

You bump price from $29.99 to $39. The dangerous part isn't the homepage
— it's the Stripe Payment Link itself. Update both, and re-run the
Reviewer Prompt over the diff to confirm nothing else references the
old number (FAQ, success page, footer).

---

The kit's value here is small but real: legal pages exist, the Buy
button never breaks, and the price is consistent across the site and
Stripe.
