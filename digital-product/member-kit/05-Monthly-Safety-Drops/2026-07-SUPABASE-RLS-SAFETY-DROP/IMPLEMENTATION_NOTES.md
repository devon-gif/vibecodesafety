# Implementation Notes

- Keep service-role keys server-side only.
- Enable RLS on tables that contain user-owned or private data.
- Test policies with at least two users.
- Check storage bucket policies separately from table policies.
- Re-run the audit after schema, migration, or client changes.
