# SUPABASE_CHECKLIST.md

The Supabase mistakes that hurt the most, and how to avoid them.

## Keys
- [ ] `NEXT_PUBLIC_SUPABASE_URL` — public, fine.
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` — public, fine.
- [ ] `SUPABASE_SERVICE_ROLE_KEY` — **server only**. Never `NEXT_PUBLIC_*`.
      Never imported into a client component.
- [ ] No service-role key in browser bundle. (Search the built JS for the
      first 8 characters of the key — should be zero matches.)

## Row Level Security (RLS)
- [ ] **RLS is ENABLED on every public-facing table.** A table without RLS
      is readable by anyone with the anon key.
- [ ] Policies exist for `select`, `insert`, `update`, `delete` as needed.
- [ ] Policies use `auth.uid()` to scope to the current user.
- [ ] Tested manually: signed in as a non-admin user, attempt to read
      another user's row — should fail.

## Storage
- [ ] Buckets that hold private files are **not public**.
- [ ] Storage policies (RLS for objects) restrict access by user id or
      role.
- [ ] File uploads validate file type and size on the server side too.

## Schema changes
- [ ] Schema changes go through migrations (`supabase/migrations/`).
- [ ] No "edit in dashboard" changes that aren't reflected in code.
- [ ] After a migration: regenerate types if you use them
      (`supabase gen types typescript --project-id …`).

## Auth
- [ ] Email confirmations enabled in production (don't accept unverified
      emails).
- [ ] Redirect URLs whitelisted.
- [ ] JWT expiry is reasonable (default 1 hour is fine).

## Realtime
- [ ] Realtime channels respect RLS (Supabase Realtime does, but verify).
- [ ] Don't broadcast service-role-level events to clients.

## Backups
- [ ] On a paid project, point-in-time recovery is enabled (or you accept
      the risk).
- [ ] You know how to restore.

## Quick smoke test after any AI change
- [ ] Visit the page that reads from the changed table while signed in
      and confirm rows render.
- [ ] Sign out, hit the same data through a public route — confirm it is
      blocked or scoped correctly.
