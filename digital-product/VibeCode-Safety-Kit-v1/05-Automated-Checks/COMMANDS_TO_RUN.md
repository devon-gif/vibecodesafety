# COMMANDS_TO_RUN.md

Cheat sheet of the commands you actually run during the safety loop.
Copy / paste this into your project README or shell history.

## Before commit

```bash
pnpm run type-check
gitleaks protect --staged --no-banner --redact
```

## Before push

```bash
pnpm run type-check
pnpm run build
gitleaks detect --no-banner --redact
```

## Before deploy

```bash
pnpm run type-check
pnpm run build
gitleaks detect --no-banner --redact

# Smoke against staging
BASE_URL=https://staging.yourdomain.com k6 run scripts/smoke.k6.js
BASE_URL=https://staging.yourdomain.com pnpm run test:e2e
```

## Daily local dev

```bash
pnpm install
pnpm run dev   # http://localhost:3001
```

## Quick "did I leak anything?" check

```bash
gitleaks detect --no-banner --redact
```

## Quick "does it still build?" check

```bash
pnpm run type-check && pnpm run build
```

## If you don't use pnpm

Replace `pnpm run` with `npm run` or `yarn`. The command names are the
same.
