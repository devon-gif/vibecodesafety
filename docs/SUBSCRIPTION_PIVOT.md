# Subscription Pivot — VibeCode Safety

**Updated:** May 24, 2026

---

## What Changed

VibeCode Safety is pivoting from a one-time $29.99 digital kit to an ongoing
subscription for AI-assisted builders.

**Old model:** $29.99 one-time digital purchase.  
**New model:** $6.99/month or $59/year subscription.

---

## New Pricing

| Plan    | Price          |
|---------|----------------|
| Monthly | $6.99/month    |
| Yearly  | $59/year       |

Yearly billing saves ~29% vs monthly.

---

## New Positioning

> An ongoing repo safety workflow for vibe coders and AI-assisted builders.

VibeCode Safety helps users:
1. Run a heavy-duty AI-assisted audit on their current repo.
2. Add daily guardrails for every AI coding change.
3. Receive ongoing updates to prompts, checklists, and workflows.

**Core subscription promise:**  
_Audit your repo. Guard every AI change. Ship with fewer surprises._

---

## What Is and Is NOT Included

### Included at $6.99/month

- Current VibeCode Safety Kit (member download)
- Heavy-duty repo audit workflow
- Daily AI change review prompt
- Project safety profile
- Repo instruction templates (AGENTS.md, CLAUDE.md, Cursor, Windsurf, Copilot)
- Auth, billing, env var, API routes, Supabase, and Stripe checklists
- Pre-commit, pre-push, and pre-deploy reviews
- Ongoing prompt and checklist updates

### NOT Included at $6.99/month

- Manual personal repo audit by Devon
- Guaranteed security, bug-free, or production-ready outcomes
- Any kind of account-based dashboard (not built yet)
- GitHub/PR automated scanning (not built yet)

---

## Important Disclaimers

- This is an AI-assisted workflow, not a manual audit service.
- Devon does not personally audit repos on the $6.99/month plan.
- The subscription helps reduce risk but does not replace professional
  engineering, QA, or a security audit.
- Do not imply guaranteed security or bug-free outcomes anywhere.

---

## Future Upsell Ideas (Not Built Yet)

- **Manual repo audit service** — premium one-time or packaged option where
  Devon or a contractor reviews a specific repo manually.
- **GitHub PR reviewer** — automated safety review on pull requests via
  GitHub Actions or a hosted service.
- **Team tier** — multi-seat subscription for small teams.

---

## Checkout TODOs

See `docs/CHECKOUT_TODO.md` for full details.

- [ ] Create Stripe product: VibeCode Safety (subscription)
- [ ] Create monthly price: $6.99/month (mode = `subscription`)
- [ ] Create yearly price: $59/year (mode = `subscription`)
- [ ] Create monthly Payment Link or Checkout Session link
- [ ] Create yearly Payment Link or Checkout Session link
- [ ] Add `NEXT_PUBLIC_MONTHLY_CHECKOUT_LINK` to env
- [ ] Add `NEXT_PUBLIC_YEARLY_CHECKOUT_LINK` to env
- [ ] Set success redirect to `/access/vcs-launch-edition-2026-k9p4`
- [ ] Test monthly and yearly checkout end-to-end
- [ ] Test cancellation and refund flow

---

## Cancellation TODOs

Currently no Stripe Customer Portal is configured. Until it is:

- Cancellations are handled by emailing vibecodesafety@gmail.com.
- Add this language to refund policy and FAQ (done).
- Future: Enable Stripe Customer Portal for self-serve cancellation.
- Future: Update FAQ and policy copy once portal is live.

---

## Public Copy Status

All public-facing pages have been updated to subscription language:

- [x] Homepage hero, pricing, FAQ, final CTA
- [x] What's Inside → subscription value cards
- [x] How It Works → audit-focused steps
- [x] Checkout coming soon page
- [x] Success page
- [x] Access/download page
- [x] Refund policy → Refund & Cancellation Policy
- [x] StickyCTA
- [x] Chat widget
- [x] SiteHeader CTA
- [x] `.env.example`

---

## Deprecated Language (Do Not Use on Public Pages)

The following terms should not appear on public-facing pages:

- "$29.99 one-time"
- "one-time purchase"
- "no subscription"
- "pay once"
- "use forever"
- "Launch Edition" (as a pricing label)
- "All sales are final" (replaced with subscription cancellation language)

Internal docs may reference old pricing history only if clearly marked as
deprecated.
