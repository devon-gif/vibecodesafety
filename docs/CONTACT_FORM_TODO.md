# Contact Form Setup TODO

The homepage contact form posts to `/api/contact`.

Private recipient email:
`CONTACT_TO_EMAIL`

For launch, connect one email provider:
- Resend
- SendGrid
- Gmail SMTP
- Formspree-style endpoint
- another transactional email provider

Before launch:
1. Add `CONTACT_TO_EMAIL` to production environment variables.
2. Add `CONTACT_FROM_EMAIL` if required by provider.
3. Add provider API key as a server-only env variable.
4. Send a test message from localhost.
5. Send a test message from deployed site.
6. Confirm recipient email is not visible in page source.
7. Confirm spam honeypot exists.
8. Confirm form success and error states work.
