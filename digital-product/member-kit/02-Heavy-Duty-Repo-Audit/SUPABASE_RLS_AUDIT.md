# Supabase RLS Audit

Paste into your AI tool alongside your Supabase schema, policies, and any
server-side Supabase client usage.

---

```
Review the Supabase configuration and RLS policies in this repo.

Check:

1. RLS enabled
   - Is Row Level Security enabled on every table that stores user data?
   - A table with RLS disabled is publicly readable and writable by anyone
     with the anon key. Flag any user-data table where RLS is off.

2. Policy coverage
   - Does every user-data table have explicit SELECT, INSERT, UPDATE, and
     DELETE policies?
   - Do policies correctly scope each operation to the authenticated user?
   - Example of a gap: a SELECT policy allows reading any row without
     filtering by user ID.

3. Service role key usage
   - Is the service role key (SUPABASE_SERVICE_ROLE_KEY) only used in
     server-side code and never exposed to the client bundle or
     NEXT_PUBLIC_ env vars?
   - The service role key bypasses RLS. If it reaches the client, every
     row in the database is effectively public.

4. Cross-user data access
   - Can User A read, update, or delete User B's data through any query,
     API route, or server action?

5. Storage bucket policies
   - Are storage buckets configured with appropriate access policies?
   - Are private files restricted to the authenticated owner?
   - Are public buckets intentionally public?

6. Client vs server Supabase client
   - Is the anon-key client used for authenticated user sessions?
   - Is the service role client only used for server-side admin operations?

Return:
- Tables with RLS disabled.
- Policy gaps.
- Service role key exposure.
- Cross-user access risks.
- Recommended fixes.
- Verdict: PASS / WARNING / BLOCKED
```
