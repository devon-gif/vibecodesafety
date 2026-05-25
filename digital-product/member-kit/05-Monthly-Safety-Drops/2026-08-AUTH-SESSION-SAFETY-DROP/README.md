# August 2026 Safety Drop: Auth Session Safety

## What this covers

This drop focuses on auth and session risks that AI coding tools introduce:
unprotected routes, session handling bugs, open redirects, and admin access
left unguarded. Auth issues are among the most common and highest-severity
problems in AI-built apps.

## Who should run this

Anyone with user authentication in their project. This applies to Supabase
Auth, Clerk, NextAuth, or any other auth provider.

## How long it takes

Approximately 25–35 minutes.

## What you need

- Your middleware or route guard files
- Your API routes and server actions that handle user-specific data
- Your login, sign-up, and sign-out flow files
- Your protected page or dashboard files
