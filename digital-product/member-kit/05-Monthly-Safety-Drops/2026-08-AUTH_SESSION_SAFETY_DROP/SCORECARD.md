# Auth Session Scorecard

## PASS

- All protected routes redirect unauthenticated users to login.
- Session is verified server-side on API routes and server actions.
- Role-based access is enforced server-side.
- Sign out invalidates the session.
- No open redirect vulnerabilities found.

## WARNING

- Auth is in place but a specific edge case is unclear — needs manual testing.
- A recently AI-modified file touches auth logic — needs re-verification.
- Admin routes are not used in production yet, but their server-side
  protection has not been fully tested.

## BLOCKED

- A protected route can be accessed without authentication.
- An API route or server action trusts user-supplied identity without
  verifying the session.
- Admin functionality is only hidden in the UI, not protected server-side.
- Sign out does not invalidate the session.
- An open redirect vulnerability exists in a login or auth flow.
