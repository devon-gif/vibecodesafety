# VIBECODE REVIEW SCORECARD

A one-page scorecard you can fill in (in your head, in a notes file, or
copy-pasted to your team) for any AI coding change.

Use it alongside the Reviewer Prompt, or on its own for quick changes.

---

## How to score

For each row, give the change a score from **0** to **2**:

- **2** &mdash; clearly OK / not applicable in a good way.
- **1** &mdash; some concern, follow-up noted.
- **0** &mdash; clearly broken or risky.

If any row scores **0**, the verdict is **BLOCKED** &mdash; regardless
of total.

---

## The scorecard

| # | Question | Score (0&ndash;2) | Note |
|---|---|---|---|
| 1 | Diff stays in scope (no unrelated refactors) |  |  |
| 2 | TypeScript / build is clean (`type-check` + `build` pass) |  |  |
| 3 | No secrets in the diff (keys, tokens, env files) |  |  |
| 4 | Auth checks are untouched OR explicitly intended |  |  |
| 5 | Input validation is present on every new endpoint |  |  |
| 6 | Access control / ownership checked on user-scoped data |  |  |
| 7 | New env vars documented (and added to production) |  |  |
| 8 | Schema changes have a migration AND a rollback plan |  |  |
| 9 | RLS / data access policies updated if a new table |  |  |
| 10 | Stripe / billing flows untouched OR explicitly intended |  |  |
| 11 | No sensitive data added to logs |  |  |
| 12 | New dependencies justified and lockfile updated |  |  |
| 13 | Mobile layout still works on small screens |  |  |
| 14 | Reviewer Prompt returned PASS or PASS WITH WARNINGS |  |  |
| 15 | I can describe the rollback in &lt;30 seconds |  |  |

Total: ___ / 30

---

## Verdict mapping

- **30 / 30** &mdash; PASS. Ship with confidence.
- **24&ndash;29** &mdash; PASS WITH WARNINGS. Ship, but write down the
  follow-ups before you forget.
- **&lt;24, or any row = 0** &mdash; BLOCKED. Fix the 0s first, then
  rescore.

---

## Filling it in fast (~60 seconds)

Most rows are obvious. The ones to slow down on:

- **Row 4 (auth)** &mdash; sign in, sign out, refresh. 10 seconds.
- **Row 6 (ownership)** &mdash; if there&rsquo;s a new &ldquo;by id&rdquo;
  query, try another user&rsquo;s id.
- **Row 8 (schema)** &mdash; is the migration in the commit?
- **Row 10 (billing)** &mdash; if you don&rsquo;t know what the
  change touched, score it 0 and ask AI to clarify.

You will get faster the more you use it.

---

## Why a scorecard

The Reviewer Prompt gives a structured report. The scorecard gives you
a way to:

- compare two attempts at the same change,
- track which categories you keep slipping on,
- explain &ldquo;why I&rsquo;m not shipping yet&rdquo; to a collaborator
  without writing a paragraph.

Use it whenever the change feels even slightly risky.
