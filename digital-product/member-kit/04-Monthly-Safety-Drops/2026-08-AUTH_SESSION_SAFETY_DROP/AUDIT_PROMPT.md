# Auth Session Audit Prompt

Paste this into your AI tool alongside your middleware, route files, auth
helpers, and protected pages.

---

```
Act as the VibeCode Auditor. Audit the authentication and session handling
in this repo.

1. Route protection
   - Which routes require authentication?
   - Is there a middleware or per-page check that enforces auth?
   - What exactly happens if an unauthenticated user visits a protected URL?
     They should be redirected to login — not shown an error, empty page,
     or partial content.
   - Are there any routes that were protected before recent AI changes that
     are no longer protected?

2. Session integrity
   - How is the session stored and validated? (cookie, JWT, server session)
   - Is the session verified server-side on every protected API route and
     server action — not just on page load?
   - Can the session or user role be tampered with by modifying cookies or
     request headers?

3. Role-based access
   - Are there admin-only routes or actions?
   - Is the admin role checked server-side, or only in the UI?
   - Can a regular user access admin functionality by knowing the URL or
     sending a crafted request?

4. Sign out and session invalidation
   - Does sign out actually invalidate the session server-side?
   - After signing out, can the user navigate back to a protected page
     using the browser's back button and still see protected content?

5. Redirects
   - Are there any redirect destinations constructed from user input?
   - If yes, is the destination validated against an allowlist to prevent
     open redirects to external sites?

6. Auth state after AI changes
   - Did any recent AI changes touch middleware, route guards, or auth
     helper functions?
   - If so, trace the change and confirm the protection is still in place
     and working correctly.

Return:
- Unprotected routes.
- Session handling gaps.
- Role-bypass risks.
- Open redirect risks.
- Recommended fixes in priority order.
- Verdict: PASS / WARNING / BLOCKED
```
