# NEXTJS_SUPABASE_EXAMPLE.md

A concrete walkthrough: you ask AI to add a "Saved items" feature to a
Next.js + Supabase SaaS. Here's how the safety loop goes.

## The scenario

- Stack: Next.js 14 App Router, Supabase, Tailwind.
- You: solo founder, mostly using Cursor + Claude.
- Request: "Let users save items from `/feed` to a `Saved` page."

## Step 1 — Builder Prompt

You open `02-Prompt-Workflows/BUILDER_PROMPT.md`, copy it into Cursor,
and fill in:

```
WHAT I WANT
Add a "Save" button to each card on /feed. Saved items show on /saved.
Only the current user sees their own saved items.

WHERE IT LIVES
- Pages: /feed, /saved (new)
- Components: FeedCard, SavedList (new)
- Data: new table `saved_items (id, user_id, item_id, created_at)`

CONSTRAINTS
- No edits to auth or middleware.
- No Stripe edits.
- Use existing Supabase client patterns.
- TypeScript clean.

CRITICAL FLOWS TO PRESERVE
- Sign in / sign out, /dashboard, /pricing, checkout webhook.

PLAN FIRST. Then wait for "go".
```

Cursor returns a plan listing 5 files. You skim it, say "go".

## Step 2 — AI builds it

AI creates:

```
app/saved/page.tsx
components/SavedList.tsx
components/FeedCard.tsx           (modified)
lib/supabase/saved.ts             (new query helpers)
supabase/migrations/20260524_saved_items.sql
```

It outputs:

```
Files changed: <as above>
Risk: medium (DB migration; touches an existing component).
Critical flows touched: no.
New env vars: none.
Manual checks: sign in as two users, save items, confirm isolation.
```

## Step 3 — Reviewer Prompt

You open a fresh chat (Claude or another Cursor session) and paste
`02-Prompt-Workflows/REVIEWER_PROMPT.md` plus the diff.

It returns (abbreviated):

```
Risk: medium
Broken-flow check:
- Auth: NOT TOUCHED
- Billing: NOT TOUCHED
- Data writes: AT RISK — new table, no RLS policy in the migration
- Schema: AT RISK — migration creates table but no policies

Required fixes:
- Add RLS policy on saved_items: select/insert/delete only where
  saved_items.user_id = auth.uid().
- Test with a non-admin user.

VERDICT: BLOCKED
```

## Step 4 — Fix and re-review

You ask AI to add the RLS policies. Re-run the Reviewer. It comes back:

```
Risk: low
VERDICT: PASS WITH WARNINGS
Follow-ups:
- Consider an index on (user_id, created_at desc) when this scales.
```

## Step 5 — Run the checklists

You run:

- `03-Checklists/PRE_COMMIT_CHECKLIST.md` ✓
- `04-Security-Guardrails/SUPABASE_CHECKLIST.md` (RLS section especially) ✓
- `pnpm run type-check && pnpm run build` ✓
- `gitleaks detect` ✓

## Step 6 — Manual smoke

- Sign in as User A, save 2 items, view `/saved` — see them.
- Sign out, sign in as User B, view `/saved` — empty (✅ RLS working).
- Try to fetch User A's row by id from User B's session — denied.

## Step 7 — Commit and push

You commit with a real message, push, CI runs (`type-check`, `build`,
`gitleaks`). Green. Promote to production.

---

The whole loop took about 25 minutes. Without the kit, the same change
would have shipped without RLS — the kind of bug you only find when a
customer screenshots someone else's data.
