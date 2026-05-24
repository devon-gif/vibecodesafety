# Auth and Routes Audit

Paste into your AI tool alongside your route and middleware files.

---

```
Review the auth and route protection in this repo.

Check the following:

1. Protected pages
   - Which pages require authentication?
   - Is there a middleware or per-page check that enforces authentication?
   - What happens if a user visits a protected URL without being signed in?
     They should be redirected to login, not shown an error or blank page.

2. API routes and server actions
   - Does every API route and server action verify the session server-side?
   - Are there any routes that fetch or write user data without checking who
     the request is from?
   - Are admin-only actions restricted to admin roles server-side (not just
     hidden in the UI)?

3. Session integrity
   - How is the session stored? (cookie, JWT, server-side)
   - Can a user tamper with their session or role?
   - Are sessions invalidated on sign out?

4. Redirects
   - Are any redirects constructed from user-supplied input?
     If so, is the destination validated to prevent open redirects?

5. Auth state after AI changes
   - Did recent AI changes touch middleware, route guards, or auth helpers?
   - If so, re-verify that those checks are still in place and correct.

Return:
- What is protected and how.
- Any gaps or weakened checks.
- Recommended fixes.
- Verdict: PASS / WARNING / BLOCKED
```
