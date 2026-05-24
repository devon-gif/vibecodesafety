# Supabase RLS Checklist

## RLS enabled

- [ ] RLS is enabled on every user-data table.
- [ ] No user-data table has RLS disabled without a documented reason.
- [ ] Public/reference tables (e.g. plans, countries) that do not store
      user-specific data are reviewed and intentionally public or protected.

## Policy coverage

- [ ] Every user-data table has a SELECT policy scoped to the authenticated user.
- [ ] Every user-data table has INSERT and UPDATE policies that prevent
      writing to rows owned by other users.
- [ ] No policy uses `USING (true)` on a user-data table (this allows all rows).

## Service role key

- [ ] SUPABASE_SERVICE_ROLE_KEY is not in any NEXT_PUBLIC_ variable.
- [ ] The service role key is not referenced in any client-side component or
      page.
- [ ] The service role client is used only in server-side API routes or
      server actions.

## Cross-user data

- [ ] User A cannot read User B's data through any client query.
- [ ] User A cannot update or delete User B's rows.
- [ ] API routes that fetch user-specific data verify the session before
      querying.

## Storage buckets

- [ ] Private buckets require authentication to read.
- [ ] Public buckets store only intentionally public assets.
- [ ] No user-uploaded private files are in a public bucket.

Score: _____ / 15 checks passing.
