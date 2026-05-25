# Supabase RLS Checklist

- [ ] RLS is enabled on user-owned tables.
- [ ] Policies check the authenticated user or intended role.
- [ ] Service-role keys stay server-only.
- [ ] Storage rules match expected access.
- [ ] Anonymous users cannot read or write private data.
