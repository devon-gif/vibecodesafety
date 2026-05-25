# July 2026 Safety Drop: Supabase RLS Safety

## What this covers

This drop focuses on Supabase Row Level Security (RLS) risks. RLS is the
primary mechanism that prevents one user from reading or modifying another
user's data. AI coding tools routinely introduce RLS gaps, especially when
adding new tables or restructuring queries.

## Who should run this

Anyone using Supabase as their database.

## How long it takes

Approximately 20–30 minutes.

## What you need

- Your Supabase schema (tables and columns)
- Your RLS policies (can be found in the Supabase Dashboard under
  Authentication > Policies, or in your migration files)
- Your server-side Supabase client usage (where service role key is used)
- Your client-side Supabase queries
