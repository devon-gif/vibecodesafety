# Supabase RLS Audit Prompt

Review the current diff for Supabase RLS and data-access risk. Check policies, table access, storage buckets, service-role usage, client/server boundaries, and whether users can read or modify data they do not own.

Return PASS, WARNING, or BLOCKED with affected tables, policies, files, and fixes.
