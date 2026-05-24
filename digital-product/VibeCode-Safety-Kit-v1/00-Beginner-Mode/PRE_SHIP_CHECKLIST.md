# PRE_SHIP_CHECKLIST.md

> Run this **before** going live (push to your deploy branch, or
> clicking "Deploy"). It is short on purpose. If you cannot check a
> box, do not ship yet.

---

## 1. Did the Reviewer pass?

- [ ] I ran `REVIEWER_PROMPT.md` on the change.
- [ ] The verdict was `PASS` or `PASS WITH WARNINGS`.
- [ ] If `PASS WITH WARNINGS`, I wrote down the follow-ups.

If the verdict was `BLOCKED`: do not ship. Fix and re-review.

---

## 2. Does it build?

- [ ] `pnpm run type-check` is clean.
- [ ] `pnpm run build` is clean.
- [ ] No new red errors in the browser console on the changed pages.

(Use `npm` or `yarn` if that's what your project uses.)

---

## 3. Did I leak any secrets?

- [ ] No API keys, tokens, or service-role strings appear in the diff.
- [ ] No `.env*` files are staged for commit.
- [ ] If you have `gitleaks` installed: `gitleaks detect --no-banner`
      is clean.

If you accidentally committed a real key: **rotate it at the source**
(Stripe / Supabase / etc.) right now. Even reverted commits stay in
git history.

---

## 4. Did anything touch auth, billing, or the database?

If **yes**, do a 60-second manual smoke test:

- [ ] Sign in works.
- [ ] Sign out works.
- [ ] A protected page redirects when logged out.
- [ ] Test purchase reaches `/success` (in Stripe test mode).
- [ ] Webhook (if any) updated the user record.
- [ ] Submit one form. The row appears where you expect.

If **no**, you can skip this section.

---

## 5. Are env vars set in production?

- [ ] Every new env var the app reads is set in your hosting provider
      (Vercel, Netlify, etc.) for the **Production** environment.
- [ ] Stripe **test** keys (`sk_test_…`) are not in production.
- [ ] Public env vars (`NEXT_PUBLIC_*`) do not contain secrets.

---

## 6. Schema changes?

- [ ] No breaking schema change is going out without a migration.
- [ ] The migration is applied to production (or scheduled to be).
- [ ] You know how to roll the migration back if it goes wrong.

---

## 7. Rollback plan

- [ ] I know how to roll back this deploy in under 5 minutes.
- [ ] On Vercel: I know how to redeploy the previous commit.
- [ ] If a migration caused the bug: I know how to reverse it.

---

## 8. Final sanity

- [ ] I read the diff one more time.
- [ ] I am not shipping at 11:59pm before a holiday.
- [ ] I have 15 minutes after deploy to watch for errors.

---

## After you ship

- Watch your error logs / monitoring for 15 minutes.
- Click through the changed pages once on production.
- If anything looks wrong, roll back. You can debug after.

---

## Honest reminder

This checklist reduces risk. It does **not** guarantee bug-free or
secure software. Anything storing money, health data, or PII at scale
should also get a real engineering and security review.
