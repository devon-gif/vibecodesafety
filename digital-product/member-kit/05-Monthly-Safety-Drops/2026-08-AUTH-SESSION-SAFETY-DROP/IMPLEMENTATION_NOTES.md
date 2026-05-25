# Implementation Notes

- Keep protected-route checks close to the server boundary.
- Test logged-out, logged-in, wrong-user, and expired-session states.
- Do not rely only on hidden UI for access control.
- Review API routes and server actions separately from pages.
- Re-run the audit after auth helper, middleware, or route changes.
