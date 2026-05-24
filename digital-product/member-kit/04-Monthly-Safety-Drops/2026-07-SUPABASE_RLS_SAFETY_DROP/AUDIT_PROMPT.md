# Supabase RLS Audit Prompt

Paste this into your AI tool alongside your schema, RLS policies, and
Supabase client usage files.

---

```
Act as the VibeCode Auditor. Audit this Supabase RLS configuration.

1. RLS enabled
   - List every table in the schema.
   - Is RLS enabled on every table that stores user-specific data?
   - Flag any table where RLS is disabled — that table is world-readable
     by anyone with the anon key.

2. Policy coverage
   - For each table with RLS enabled, list the policies (SELECT, INSERT,
     UPDATE, DELETE).
   - Are all four operations covered by explicit policies?
   - Do SELECT policies filter by the authenticated user's ID?
   - Do INSERT/UPDATE policies prevent a user from writing to rows they
     do not own?
   - Is there any policy that unintentionally allows access to all rows?

3. Service role key
   - Where is the service role key used in server-side code?
   - Is it referenced anywhere in client-side code or NEXT_PUBLIC_ variables?
   - The service role key bypasses RLS entirely. If it reaches the client,
     every row in every table is effectively public.

4. Cross-user data access
   - Can User A query User B's data through any client-side route or API
     endpoint? Trace the query path.
   - Are there any admin-style queries using the service role client that
     could be invoked by a regular user?

5. Storage bucket policies
   - List storage buckets and their access settings.
   - Are private buckets restricted to authenticated owners?
   - Are public buckets intentionally public and only storing public assets?

6. Client vs server client
   - Is the anon key client (public) used for user-session queries?
   - Is the service role client used only in server-side code for admin
     operations?
   - Are there any places where the service role client is used to serve
     regular user requests (bypassing RLS)?

Return:
- Tables with RLS disabled.
- Policies with gaps or overly broad access.
- Service role key exposure.
- Cross-user access risks.
- Storage bucket risks.
- Recommended fixes in priority order.
- Verdict: PASS / WARNING / BLOCKED
```
