# API_ROUTES_CHECKLIST.md

For every API route, server action, or route handler you (or AI) just
touched.

## Auth
- [ ] If the route returns user-specific data, it reads the user from the
      **session**, not from a request param.
- [ ] If the route is "admin only", it checks an admin flag on the
      authenticated user — not a query string `?admin=true`.

## Input validation
- [ ] Body / params validated with a schema (zod, valibot, etc.).
- [ ] Reject unexpected fields. Don't blindly spread `req.body` into a DB
      insert.
- [ ] Numeric inputs have sane min/max.
- [ ] String inputs have a max length.

## Ownership
- [ ] "Get item by id" filters by `user_id = currentUser.id` (or RLS
      enforces it).
- [ ] "Update item by id" verifies the row belongs to the current user
      before update.
- [ ] "Delete item by id" same as above.

## Errors
- [ ] Errors return generic messages. No stack traces in responses.
- [ ] Internal errors are logged with enough context to debug.
- [ ] No PII or secrets in error responses or logs.

## Side effects
- [ ] Sending email, calling paid APIs, or charging cards is rate-limited
      per user / IP.
- [ ] Idempotency: the same request twice does not double-charge or
      double-create.

## CORS / methods
- [ ] Method is enforced (`GET`, `POST`, etc.). 405 for the rest.
- [ ] CORS is restricted to your origins (don't open `*` unless you
      really mean it).

## Webhooks (if any)
- [ ] Signature verified.
- [ ] Replay-safe (use the event id).
- [ ] Returns 2xx fast; heavy work is queued.

## Sanity test
- [ ] Hit the endpoint with `curl` while logged out: gets 401 / 403.
- [ ] Hit the endpoint with another user's id: gets 403 / 404, never the
      data.
