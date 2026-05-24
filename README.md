# VibeCode Safety Kit - Landing Site

Standalone landing page for the **VibeCode Safety Kit** - a one-time digital product that helps solo founders and AI builders review AI-generated code before they ship.

> **Make AI check the AI before you ship.**

This repo only contains the marketing site. It does **not** depend on any other project (CheckRay, Raycheck, CheckMate, etc.).

---

## What this project is

- A premium dark landing page for selling a one-time $29.99 digital kit (Launch Edition).
- Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS v3.
- No database. No auth. No subscriptions. No cart. No API routes.
- Stripe checkout is **not** wired yet - see `docs/CHECKOUT_TODO.md`.

## Product positioning

- **Name:** VibeCode Safety Kit
- **Positioning:** “Make AI check the AI before you ship.”
- **One-liner:** A practical guardrail system for solo founders and AI builders - prompts, checklists, repo rules, and pre-deploy workflows that help catch broken flows, exposed secrets, schema drift, and risky AI-generated changes before they go live.
- **Price:** $29.99 one-time (Launch Edition). Not a subscription.
- **Primary CTA:** “Get the kit”
- **Secondary CTA:** “See what's inside”

## Pages

| Path             | Purpose                                                |
| ---------------- | ------------------------------------------------------ |
| `/`              | Marketing homepage with all sections                   |
| `/success`       | “Checkout coming soon” / post-purchase placeholder     |
| `/terms`         | Terms of Service                                       |
| `/privacy`       | Privacy Policy                                         |
| `/refund-policy` | Refund Policy                                          |

CTAs currently link to `/success` (no Stripe yet). There are no broken buttons.

## How to run locally

```bash
pnpm install
pnpm run dev
```

Then open http://localhost:3000.

Other useful scripts:

```bash
pnpm run type-check   # tsc --noEmit
pnpm run build        # production build
pnpm run start        # run the production build
```

If you don't have pnpm, npm works too: `npm install`, `npm run dev`, etc.

## Project structure

```
app/
  layout.tsx
  page.tsx               # Homepage (hero, problem, how it works, what's inside, who it's for, pricing, FAQ, final CTA)
  success/page.tsx
  terms/page.tsx
  privacy/page.tsx
  refund-policy/page.tsx
  globals.css
components/
  SiteHeader.tsx
  SiteFooter.tsx
  LegalShell.tsx
docs/
  PRODUCT_PLAN.md
  LAUNCH_CHECKLIST.md
  CHECKOUT_TODO.md
kit-preview/             # Placeholder previews of kit contents (not the real kit)
  AGENTS-template.md
  REVIEWER_PROMPT-template.md
  PRE_DEPLOY_CHECKLIST-template.md
```

## Next steps

1. Wire up Stripe (one-time payment) - see `docs/CHECKOUT_TODO.md`.
2. Build the actual kit ZIP and set up delivery (e.g., signed download link or email).
3. Hook up analytics.
4. Add `og-image.png`, favicon, and a real domain.
5. Launch - see `docs/LAUNCH_CHECKLIST.md`.

## What this project is **not**

- Not a SaaS subscription.
- Not connected to Stripe yet.
- Not deployed to Vercel by this repo (deploy intentionally not configured).
- Not connected to GitHub by this repo.
