# PROJECT_SAFETY_PROFILE.md

> Fill this out **once** for your project. Then paste it (or a link to
> it) into the start of any AI coding chat. This is the "memory" your
> AI tools need so they stop treating every change like a brand new
> project.

Replace every `{{ ... }}` with your real values. Delete sections that
don't apply. Five to ten minutes once. Saves you from a lot of broken
changes.

---

## 1. What this product is

- **Project name:** {{ e.g. "Acme — appointment booking for hair salons" }}
- **One-sentence pitch:** {{ what does it do? who is it for? }}
- **Stage:** {{ idea / pre-launch / live with paying customers / live free }}
- **Approximate users / revenue:** {{ keeps the AI honest about risk }}

## 2. Stack

- **Framework:** {{ e.g. Next.js 14 App Router }}
- **Language:** {{ TypeScript / JavaScript / Python / ... }}
- **Styling:** {{ Tailwind / Chakra / shadcn / plain CSS }}
- **Database:** {{ Supabase / Postgres / SQLite / none }}
- **Auth:** {{ Supabase Auth / Clerk / NextAuth / Firebase / none }}
- **Payments:** {{ Stripe Payment Link / Stripe Subscriptions / Lemon Squeezy / none }}
- **Hosting:** {{ Vercel / Netlify / Railway / Render / Cloudflare }}
- **Email:** {{ Resend / Postmark / SendGrid / none }}

## 3. Critical flows that must not break

List every flow that, if broken, costs you customers or money. The AI
will be told to leave these alone unless explicitly asked.

- {{ Sign in / sign up / sign out }}
- {{ Onboarding for a new user }}
- {{ Checkout (the buy button → /success) }}
- {{ Webhook (Stripe / payment events) }}
- {{ Dashboard / main app screen }}
- {{ Any data write that customers depend on }}
- {{ Email delivery for transactional messages }}
- {{ Deploy itself — `pnpm run build` must stay green }}

## 4. Hard "do not break" boundaries

- Do **not** change the database schema without an accompanying migration.
- Do **not** edit `auth/`, `middleware`, or session code.
- Do **not** change Stripe price IDs, webhook handling, or `/success`.
- Do **not** edit `.env*` files.
- Do **not** install new packages without listing them first.
- Do **not** run destructive shell commands.

## 5. Where things live

- **Routes:** {{ e.g. `app/(marketing)/...`, `app/(app)/...` }}
- **API routes / server actions:** {{ where they live }}
- **Database client:** {{ e.g. `lib/supabase/client.ts`, `lib/db.ts` }}
- **Stripe / billing logic:** {{ e.g. `lib/stripe.ts`, `app/api/stripe/...` }}
- **Auth helpers:** {{ where to read the current user from server code }}
- **Shared UI components:** {{ e.g. `components/` }}

## 6. Environment variables

List every env var the project actually reads. Mark which are public.

- `NEXT_PUBLIC_...` — public, OK in browser
- `STRIPE_SECRET_KEY` — server-only, never `NEXT_PUBLIC_*`
- `STRIPE_WEBHOOK_SECRET` — server-only
- `SUPABASE_SERVICE_ROLE_KEY` — server-only, never imported into client code
- {{ add yours }}

## 7. Known landmines

Things you've already broken once and don't want to break again. Honest
notes are gold.

- {{ "Don't refactor the checkout page — last time we shipped a regression that locked out 30 users." }}
- {{ "The webhook is fragile — only edit with the Reviewer Prompt." }}
- {{ "Do not touch the `users.plan` column without checking how it's set." }}

## 8. How I want AI to behave in this repo

- Plan before editing. List the files you'll change before writing code.
- Smallest viable diff. No unrelated refactors.
- Output the end-of-change report (see `VIBECODE_SAFETY_RULES.md`).
- If unsure: reply `BLOCKED` and ask. Never guess near billing or auth.
