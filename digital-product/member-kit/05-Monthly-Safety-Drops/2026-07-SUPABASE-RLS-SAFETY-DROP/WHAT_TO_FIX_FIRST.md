# What To Fix First — Supabase RLS

Fix issues in this priority order.

---

## 1. Service role key in a NEXT_PUBLIC_ variable (CRITICAL)

The service role key bypasses all RLS. If it is in a NEXT_PUBLIC_ variable,
it is in the browser bundle and visible to anyone who opens DevTools.

Fix: Rename the env var, remove the NEXT_PUBLIC_ prefix, and move all usage
of this key to server-side code only.

---

## 2. RLS disabled on a user-data table (HIGH)

A table with RLS disabled is readable and writable by anyone with the anon key.

Fix: Enable RLS in the Supabase dashboard. Add appropriate SELECT, INSERT,
UPDATE, and DELETE policies before re-enabling. Test with a second test user.

---

## 3. Policy using `USING (true)` on user data (HIGH)

A policy like `USING (true)` allows any authenticated user to read every row
in the table.

Fix: Change the policy to `USING (auth.uid() = user_id)` or the appropriate
column that links the row to its owner.

---

## 4. Missing INSERT or UPDATE policy (MEDIUM)

Without an explicit INSERT or UPDATE policy, the operation may be blocked
(if RLS is restrictive by default) or open to all authenticated users.

Fix: Add explicit policies for each operation. Test by attempting the
operation as a test user who does not own the row.

---

## 5. Service role client used in user-facing routes (MEDIUM)

If a server-side API route uses the service role client to respond to regular
user requests, RLS is being bypassed even if it is configured correctly.

Fix: Use the anon key client for user-session operations. Reserve the service
role client for admin-only background operations.
