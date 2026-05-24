# What To Do If BLOCKED

Getting a BLOCKED verdict is not a failure. It means the review caught
something before it reached production.

---

## Step 1 — Stop

Do not commit, push, or deploy while BLOCKED.

If you already committed, do not push.
If you already pushed, do not deploy.
If you already deployed, assess the severity and consider rolling back.

---

## Step 2 — Read the blocker list

The Auditor will list specific issues. Read each one.

Ask yourself:
- Is this a real risk or a false positive?
- How severe is it? (auth bypass > bad copy > missing comment)
- Can I fix it in 15 minutes or does it need more work?

If it looks like a false positive, paste the relevant code back to the Auditor
and ask it to explain the risk in more detail.

---

## Step 3 — Fix the highest-severity issue first

Priority order:
1. Exposed secrets or credentials
2. Auth bypass or unprotected routes
3. Broken checkout or payment flow
4. Unvalidated input reaching the database
5. Stripe webhook missing signature verification
6. Supabase RLS disabled or bypassed
7. Build failure
8. Everything else

Do not fix a LOW issue while a HIGH issue is unresolved.

---

## Step 4 — Re-run the same prompt on the updated code

After fixing, run the daily review prompt or the relevant audit prompt again
on the new diff.

Do not skip this step. A fix can introduce a new issue.

---

## Step 5 — Ship only after PASS or accepted WARNING

Ship when the audit returns PASS or a WARNING that is tracked and
does not block the current deploy.

---

## If the blocker involves payments, auth, or user data

Treat it as the highest priority. Do not ship around it.

If you are not sure how to fix it:
- Describe the blocker to the Auditor and ask for a specific fix.
- Ask a senior developer or search for the relevant security pattern.
- Check the relevant audit file in `02-Heavy-Duty-Repo-Audit/` for guidance.
