# Auth Routes Checklist

- [ ] Protected pages still require authentication.
- [ ] API routes check the current user or role.
- [ ] Redirects do not leak private URLs or data.
- [ ] Session checks happen server-side where needed.
- [ ] Admin or owner-only actions cannot be called by normal users.
