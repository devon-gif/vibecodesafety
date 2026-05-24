# AUTH_CHECKLIST.md

A practical pass after AI touches anything in `auth/`, `middleware`, or
session handling.

## Session
- [ ] Session is read on the server (middleware, server component, route
      handler), not just on the client.
- [ ] Cookies are `httpOnly`, `secure` in production, and `SameSite=Lax`
      or stricter.
- [ ] Sign-out clears the session cookie AND any client-side cached state.

## Protected routes
- [ ] Visiting `/dashboard` (or any private route) while logged out
      redirects to sign in.
- [ ] After sign in, the user lands back on the page they tried to visit
      (return URL preserved, but validated — do not redirect to arbitrary
      URLs).

## Authorization (not just authentication)
- [ ] User A cannot read User B's data by changing an id in the URL.
- [ ] Admin pages check an admin role on the authenticated user.
- [ ] Server actions / API routes do the auth check themselves — do not
      rely on the UI hiding a button.

## Tokens / magic links
- [ ] Reset / magic-link tokens expire (15–60 minutes is typical).
- [ ] Tokens are single-use.
- [ ] Token validation is constant-time (don't leak which part is wrong).

## OAuth (if applicable)
- [ ] `state` parameter is verified.
- [ ] Callback URL is whitelisted.
- [ ] Tokens stored server-side (httpOnly cookie or DB), never in
      `localStorage`.

## Account safety
- [ ] Email change requires re-auth.
- [ ] Password change invalidates other sessions (if you support multi-
      session).
- [ ] Brute-force protection: rate-limit sign-in attempts.

## After AI changes
- [ ] Manually run: sign up → sign out → sign in → visit protected route →
      sign out → confirm protected route redirects.
