# COMMON BEGINNER MISTAKES

The mistakes vibe coders make most often when they first start using
the kit (and how to avoid each one). Five minutes of reading. Worth it.

---

## 1. Skipping the project profile

**Mistake:** copying the files into your repo but never filling out
`PROJECT_SAFETY_PROFILE.md`.

**Why it hurts:** the rules file refers back to &ldquo;critical
flows&rdquo; and &ldquo;the stack&rdquo;. If you never wrote those
down, AI guesses. Sometimes wrong.

**Fix:** spend 5 minutes filling out the profile. Real answers, not
placeholders.

---

## 2. Using the same chat for build and review

**Mistake:** asking AI to build a feature, then asking the same chat to
review its own work.

**Why it hurts:** the same model in the same conversation tends to
defend its earlier output. You get a much less honest review.

**Fix:** open a **fresh chat** for the Reviewer Prompt. Paste the
prompt + the diff. If possible, use a **different model** (built with
Claude &rarr; review with GPT, or vice versa).

---

## 3. Ignoring &ldquo;BLOCKED&rdquo; and shipping anyway

**Mistake:** Reviewer says BLOCKED. You decide it &ldquo;looks fine&rdquo;
and ship.

**Why it hurts:** BLOCKED is the entire point of the kit. Ignoring it
turns the whole workflow into theater.

**Fix:** if BLOCKED &mdash; fix what it flagged, then re-run the
Reviewer. Repeat until PASS or PASS WITH WARNINGS.

---

## 4. Pasting real secrets into AI chats

**Mistake:** debugging an env issue by pasting a real key into the chat
&ldquo;just to test it&rdquo;.

**Why it hurts:** AI tools log conversations. That key is now in
multiple places. Even &ldquo;deleted&rdquo; chats may be retained.

**Fix:** never paste real secrets into AI chats. If you accidentally
did &mdash; **rotate that key immediately** at the provider.

---

## 5. Trusting `/success` to grant access

**Mistake:** asking AI to mark a user as &ldquo;paid&rdquo; on the
`/success` page render.

**Why it hurts:** anyone can visit `/success` for free. Your paid plan
just became free.

**Fix:** plan / entitlement state must come from a webhook event, not
from a URL. Until you have webhooks, the kit&rsquo;s manual delivery
flow is fine.

---

## 6. Skipping `type-check` and `build` before push

**Mistake:** committing and pushing without running
`pnpm run type-check && pnpm run build` locally.

**Why it hurts:** TypeScript catches a huge percentage of AI mistakes.
A 30-second local check saves a broken deploy.

**Fix:** add it to your pre-push habit. The `PRE_SHIP_CHECKLIST.md` has
it as item 2.

---

## 7. Letting AI install dependencies silently

**Mistake:** AI adds a package &ldquo;to help&rdquo;, you accept, never
look at what was added.

**Why it hurts:** small packages with weird licenses, malicious
maintainers, or 5MB of dependencies sneak into your bundle.

**Fix:** require AI to list new dependencies and explain why before
running install. If a package has &lt;1k weekly downloads, ask twice.

---

## 8. Adding a new env var locally but not in production

**Mistake:** AI introduces `NEW_API_KEY`. Works locally. Production
crashes silently on the page that uses it.

**Why it hurts:** the &ldquo;works on my machine&rdquo; classic.

**Fix:** add every new env var to your hosting provider&rsquo;s
Production settings. Redeploy. Then smoke test.

---

## 9. Editing auth or billing without explicit ask

**Mistake:** a routine UI change accidentally edits middleware,
sessions, or a Stripe handler.

**Why it hurts:** the bugs you cannot afford.

**Fix:** the standing rules in `VIBECODE_SAFETY_RULES.md` forbid this
by default. Keep it. When you really do need to change auth or billing,
make it an explicit ask in a fresh chat.

---

## 10. Putting the rules file at the wrong level

**Mistake:** putting `VIBECODE_SAFETY_RULES.md` (or `AGENTS.md`) inside
a subfolder, or only in your `safety-kit/` folder.

**Why it hurts:** most AI tools only read instruction files at the
**repo root**. From inside `safety-kit/`, AI never sees the rules.

**Fix:** the rules file lives at the repo root. Period.

---

## 11. Forgetting to update the profile when the stack changes

**Mistake:** you add Supabase six weeks after first setup. You never
update `PROJECT_SAFETY_PROFILE.md`.

**Why it hurts:** AI still thinks you&rsquo;re on the old stack. It
suggests patterns that don&rsquo;t fit.

**Fix:** whenever you add or remove a major piece (database, auth,
payments, hosting), update the profile in the same commit.

---

## 12. Running the loop only sometimes

**Mistake:** running the Reviewer for &ldquo;big changes&rdquo; but
skipping it for &ldquo;small ones&rdquo;.

**Why it hurts:** small changes are where the silent breakages hide.

**Fix:** run the loop on every change that touches auth, billing, API
routes, env, middleware, or schema. Otherwise &mdash; only skip if the
change is one obvious line and clearly cosmetic.

---

## The good news

You will make some of these mistakes anyway. The kit is forgiving
&mdash; each mistake usually gets caught by the **next** Reviewer pass.
The habit matters more than perfection.
