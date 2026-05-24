# Auth Session Checklist

## Route protection

- [ ] All protected pages redirect unauthenticated users to the login page.
- [ ] Middleware or per-page auth checks are applied to every protected route.
- [ ] Visiting a protected URL while signed out does not show any protected
      content — even briefly before a redirect.
- [ ] Recent AI changes did not weaken or remove any auth checks.

## API routes and server actions

- [ ] Every API route that returns user-specific data verifies the session
      server-side.
- [ ] Every server action that writes user data verifies the session
      server-side.
- [ ] Authorization is not determined only by a user ID in the request body
      (the session must be verified independently).

## Role-based access

- [ ] Admin routes and actions are restricted server-side, not only hidden
      in the UI.
- [ ] A regular user cannot access admin functionality by navigating directly
      to the URL.
- [ ] Role is read from the verified session or database, not from a
      user-supplied request value.

## Sign out

- [ ] Sign out invalidates the session server-side.
- [ ] After sign out, protected pages are not accessible via browser back
      button or direct navigation.

## Redirects

- [ ] No redirect URL is constructed directly from user input without
      validation.
- [ ] If a `redirectTo` parameter exists, it is validated against an allowlist
      of safe destinations.

Score: _____ / 16 checks passing.
