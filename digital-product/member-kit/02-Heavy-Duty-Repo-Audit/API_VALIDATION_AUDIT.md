# API Validation Audit

Paste into your AI tool alongside your API route and server action files.

---

```
Review the API validation and input handling in this repo.

Check:

1. Input validation
   - Does every API route and server action validate the shape, type, and
     length of user-supplied input before using it?
   - Is validation happening server-side, not only in the browser?
   - Tools to look for: Zod, Yup, manual type checks, or missing validation.

2. Authorization checks
   - After validating input, is the caller's identity and permission verified?
   - Can a user modify another user's data by supplying a different user ID?
   - Are admin-only actions restricted server-side?

3. Error responses
   - Do error responses leak stack traces, internal file paths, database
     schema details, or environment variable values?
   - Are errors returned with appropriate status codes (400 for bad input,
     401 for unauthorized, 403 for forbidden, 500 for server error)?

4. Rate limiting and abuse surface
   - Are there actions that could be abused by rapid repeated calls?
     (password reset emails, OTP generation, checkout initiation)
   - Is there any basic rate limiting or CAPTCHA in place for high-risk actions?

5. CORS and request origin
   - Are API routes restricted to expected origins where appropriate?
   - Are credentials not inadvertently exposed via permissive CORS headers?

Return:
- Unvalidated inputs found.
- Authorization gaps.
- Error response leakage.
- Recommended fixes.
- Verdict: PASS / WARNING / BLOCKED
```
