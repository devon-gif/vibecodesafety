# Pre-Ship Safety Checklist

> Markdown draft for the PRE_SHIP_SAFETY_CHECKLIST PDF.

Run this before you push to your deploy branch or click "Deploy".

It is short on purpose. If you cannot check a box, do not ship.

---

## 1. Did the Reviewer pass?

- [ ] I ran `REVIEWER_PROMPT.md` on the diff.
- [ ] The verdict was `PASS` or `PASS WITH WARNINGS`.
- [ ] If `PASS WITH WARNINGS`, the follow-ups are written down.

If the verdict was `BLOCKED`: fix and re-run. Do not ship yet.

---

## 2. Does it build?

- [ ] `pnpm run type-check` — clean (no errors).
- [ ] `pnpm run build` — clean (no errors).
- [ ] No new red console errors on the changed pages.

(Use `npm` or `yarn` if that is what your project uses.)

---

## 3. Did I leak any secrets?

- [ ] No API keys, tokens, or service-role strings in the diff.
- [ ] No `.env*` files staged for commit.
- [ ] If `gitleaks` is installed: `gitleaks detect --no-banner` is clean.

If you accidentally committed a real secret: rotate it at the source
(Stripe / Supabase / etc.) **immediately**. Even reverted commits stay
in git history.

---

## 4. Did anything touch auth, billing, or the database?

If **yes**, do a 60-second manual smoke:

- [ ] Sign in works.
- [ ] Sign out works.
- [ ] A protected page redirects when logged out.
- [ ] Test purchase reaches `/success` (in test mode).
- [ ] Webhook (if any) updated the user record.
- [ ] One form submit writes the row you expect.

If **no**, you can skip this section.

---

## 5. Are env vars set in production?

- [ ] Every new env var the app reads is set in your hosting provider
      (Vercel, etc.) for **Production**.
- [ ] Test keys (`sk_test_…`) are not deployed to production.
- [ ] Public env vars (`NEXT_PUBLIC_*`) do not contain secrets.

---

## 6. Schema changes?

- [ ] No breaking schema changes pushed without a migration.
- [ ] Migration is applied to production (or scheduled to be).
- [ ] You know how to roll the migration back if it goes wrong.

---

## 7. Rollback plan

- [ ] I know how to roll back this deploy in under 5 minutes.
- [ ] On Vercel: I know how to redeploy the previous commit.
- [ ] On Supabase / DB: I know how to reverse the last migration if it
      caused the bug.

---

## 8. Final sanity

- [ ] I read the diff one more time.
- [ ] I am not shipping at 11:59pm before a holiday.
- [ ] I have 15 minutes after deploy to watch for errors.

---

## After you ship

- Watch your error tracker / logs for 15 minutes.
- Click through the changed pages once on production.
- If anything looks wrong, roll back. You can re-deploy after debugging.

---

## Honest reminder

This checklist reduces risk. It does **not** guarantee bug-free or
secure software. Important apps (anything storing money, health data,
or PII at scale) should still get professional engineering and security
review.
