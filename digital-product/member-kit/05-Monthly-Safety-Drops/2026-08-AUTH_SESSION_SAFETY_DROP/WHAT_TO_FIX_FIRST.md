# What To Fix First — Auth Session Safety

Fix issues in this priority order.

---

## 1. Unprotected route (CRITICAL)

If a protected page loads for unauthenticated users, any member-only content
is publicly accessible.

Fix: Add a session check at the top of the page or in middleware. Redirect
to login if the session is missing or invalid.

---

## 2. API route trusting user-supplied identity (HIGH)

If an API route accepts a user ID in the request body and does not verify the
session, any caller can impersonate any user by changing the ID.

Fix: Read the user ID from the verified session, not from the request body.
Reject requests without a valid session.

---

## 3. Admin route protected only in the UI (HIGH)

If admin routes are hidden from the UI but not protected server-side, any
user who knows the URL can access them.

Fix: Add a server-side role check at the top of the admin route or in
middleware. Return 403 Forbidden for non-admin sessions.

---

## 4. Sign out not invalidating the session (MEDIUM)

If the session cookie persists after sign out, users can navigate back to
protected content using the browser's back button.

Fix: Clear the session server-side on sign out. With Supabase Auth, call
`supabase.auth.signOut()`. Confirm the session cookie is cleared in DevTools.

---

## 5. Open redirect in login flow (MEDIUM)

If the post-login redirect URL is taken from a query parameter without
validation, an attacker can craft a link that sends the user to a phishing
site after login.

Fix: Validate the `redirectTo` parameter against an allowlist of internal
paths. Reject or ignore any URL pointing to an external domain.
