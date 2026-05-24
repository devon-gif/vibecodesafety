# Supabase RLS Scorecard

## PASS

- RLS is enabled on all user-data tables.
- Policies correctly scope reads and writes to the authenticated user.
- Service role key is server-only.
- No cross-user data access found.
- Storage buckets are correctly configured.

## WARNING

- RLS is enabled but one or more policies may be overly broad — needs
  manual verification.
- Service role key is server-only but used in more places than expected.
- Storage bucket configuration is unclear — needs manual check in dashboard.

## BLOCKED

- Any user-data table has RLS disabled.
- Any policy uses `USING (true)` on a user-data table.
- Service role key is in a NEXT_PUBLIC_ variable or client-side code.
- User A can demonstrably read or write User B's data.
