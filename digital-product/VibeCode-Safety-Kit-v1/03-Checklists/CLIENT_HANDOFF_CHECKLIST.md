# CLIENT_HANDOFF_CHECKLIST.md

Run this before handing a project to a client (or to your future self
6 months from now).

## Repo health
- [ ] `README.md` explains what the project is and how to run it locally.
- [ ] `pnpm install && pnpm run dev` works on a clean clone.
- [ ] `pnpm run type-check` and `pnpm run build` are clean.
- [ ] `.env.example` lists every env var the project uses.
- [ ] No `.env*` files committed.
- [ ] AI repo instructions (`AGENTS.md` / `CLAUDE.md` / Cursor rules) reflect
      the project's actual stack and critical flows.

## Access
- [ ] Client owns the GitHub repo / has admin access.
- [ ] Client owns the hosting account (Vercel, etc.) or has the project
      transferred.
- [ ] Client owns the Stripe account or has admin access.
- [ ] Client owns the database (Supabase, Postgres) or has admin access.
- [ ] Client owns the domain.
- [ ] You no longer have unnecessary access.

## Secrets
- [ ] All secrets rotated if shared during development.
- [ ] No secrets visible in commit history (`gitleaks detect` clean).
- [ ] Stripe is in **live** mode (or scheduled to be on a known date).
- [ ] Webhook secrets configured in production.

## Data
- [ ] No real customer data in test environments.
- [ ] Backups configured (or at least documented).
- [ ] RLS / auth policies tested with a non-admin user.

## Documentation
- [ ] README has: what it is, how to run, how to deploy, where the env
      vars live, how to roll back.
- [ ] Critical flows are documented (auth, billing, deploy).
- [ ] Known limitations and future work are listed.

## Final review
- [ ] Reviewer Prompt run on the final state.
- [ ] PRE_DEPLOY_CHECKLIST run.
- [ ] Client walked through critical flows on a live demo call.

If any box is unchecked, fix it before sending the handoff email.
