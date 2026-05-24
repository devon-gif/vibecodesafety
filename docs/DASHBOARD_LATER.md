# Dashboard Later

Do not build the dashboard before the subscription is validated.

## Why later

- GitHub OAuth adds auth, permissions, token storage, and security risk.
- Repo scanning needs backend jobs, rate limits, queues, and storage.
- A dashboard creates support expectations before the workflow is proven.
- Stripe Customer Portal covers the most important v1 account need: billing management.

## Later dashboard scope

- Member login.
- Subscription status.
- Download latest member kit.
- GitHub repo connection.
- PR reviewer setup.
- Audit history.
- Monthly drop archive.

## Launch rule

V1 can sell the membership with Stripe subscriptions and self-serve files. Do not promise automated repo scanning until the backend exists.
