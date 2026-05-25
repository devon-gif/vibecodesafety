# Implementation Notes

- Keep Stripe secret keys and webhook secrets server-side.
- Confirm monthly and yearly prices in Stripe test mode before live launch.
- Test checkout, success redirect, cancellation, and member access in one flow.
- Do not mix test and live keys.
- Re-run the audit after changing pricing, redirects, or access delivery.
