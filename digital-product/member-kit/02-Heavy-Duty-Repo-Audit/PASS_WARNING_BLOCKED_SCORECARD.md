# PASS / WARNING / BLOCKED Scorecard

Use this to interpret the Auditor's verdict and decide next steps.

---

## PASS

All reviewed areas have no blocking issues in the provided context.

Safe to commit, push, or deploy — but:
- PASS applies to what was reviewed. It does not mean the app is fully secure.
- If context was missing, the verdict may be based on incomplete information.
- Keep running the daily review prompt on future AI changes.

**Next step:** Ship. Track any LOW risks as follow-ups.

---

## WARNING

Issues found. Proceeding requires a decision.

A WARNING means:
- There is a real risk, but it is not immediately blocking.
- Or there is missing context that makes it hard to rule out a blocking issue.
- Or a follow-up verification is needed before the next deploy.

**Common WARNING scenarios:**
- Missing test coverage for a touched critical flow
- Dependency added by AI that has not been reviewed
- Minor config uncertainty (e.g. is this env var actually set in production?)
- AI changed a connected file that was not the focus of this diff
- A code pattern that could cause issues if certain edge cases occur

**Next step:**
1. Read the WARNING details.
2. Decide if you can track it as a follow-up or if it blocks the next deploy.
3. Record it in your REPO_RISK_MAP_TEMPLATE.md.
4. Resolve before the next production deploy.

---

## BLOCKED

A specific issue must be fixed before committing, pushing, or deploying.

**Common BLOCKED scenarios:**
- Auth bypass or unprotected route
- Exposed secret or credential hardcoded in source
- Unvalidated API input reaching the database
- Broken checkout redirect or wrong price
- Stripe webhook missing signature verification
- Supabase RLS disabled or bypassed
- Service role key in a NEXT_PUBLIC_ variable
- Build failure or type errors
- Critical user flow broken (sign in, checkout, member access)

**Next step:**
1. Stop. Do not commit, push, or deploy.
2. Copy the blocker list to your task tracker.
3. Fix the highest-severity issue first.
4. Re-run the same audit prompt on the updated code.
5. Ship only after the blocker is cleared and the prompt returns PASS or WARNING.

---

## When to escalate beyond the Auditor

The VibeCode Auditor is an AI-assisted review workflow. For serious production
issues, escalate to:

- A professional security audit if you suspect real vulnerabilities
- A senior developer if architecture decisions affect safety
- Your hosting provider's support if infrastructure is involved
- Stripe support for billing disputes or webhook issues
