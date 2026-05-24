# Repo Risk Map

Fill this in during or after your heavy-duty audit. Update it whenever the
architecture changes.

---

## App summary

| Field | Value |
|-------|-------|
| Product name | |
| Stack | e.g. Next.js, TypeScript, Tailwind |
| Hosting | e.g. Vercel, Fly, Railway |
| Database | e.g. Supabase, PlanetScale, none |
| Auth | e.g. Supabase Auth, Clerk, NextAuth, none |
| Billing | e.g. Stripe, Paddle, none |
| Last audit date | |

---

## Critical flows

List the flows that, if broken, would cause immediate user or business harm.

| Flow | Entry point | Notes |
|------|------------|-------|
| Sign up / onboarding | | |
| Sign in / session | | |
| Protected route / member area | | |
| Checkout / payment | | |
| Post-payment access delivery | | |
| Admin actions | | |
| Data writes (user-facing) | | |
| Webhook / event handling | | |

---

## Risk areas

| Area | Key files | Current risk | Status | Reviewed |
|------|-----------|-------------|--------|---------|
| Auth and routes | | | | |
| API validation | | | | |
| Env / secrets | | | | |
| Database / RLS | | | | |
| Checkout / billing | | | | |
| Dependencies | | | | |
| Build health | | | | |
| Deploy readiness | | | | |

Status options: OK / WARNING / BLOCKED / NOT CHECKED

---

## Known open risks

List anything you know is risky but have not fixed yet.

| Risk | Area | Priority | Owner | Planned fix |
|------|------|----------|-------|-------------|
| | | | | |

---

## Last audit verdict

Overall: PASS / WARNING / BLOCKED

Date:
Audited by (AI tool):
Notes:
