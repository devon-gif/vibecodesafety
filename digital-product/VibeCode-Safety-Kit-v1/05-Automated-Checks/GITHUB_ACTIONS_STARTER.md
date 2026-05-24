# GITHUB_ACTIONS_STARTER.md

A minimal CI workflow that catches the kind of mistakes AI introduces.

Save as `.github/workflows/ci.yml` in your repo.

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 9

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - run: pnpm install --frozen-lockfile

      - name: Type-check
        run: pnpm run type-check

      - name: Build
        run: pnpm run build

      - name: Gitleaks
        uses: gitleaks/gitleaks-action@v2
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Why each step

- **`pnpm install --frozen-lockfile`** — fails CI if `pnpm-lock.yaml` is
  out of date with `package.json`. Catches the AI-installed-a-package-but-
  forgot-the-lockfile bug.
- **`type-check`** — catches the AI-broke-a-shared-type-somewhere-else bug.
- **`build`** — catches everything `type-check` misses (route conflicts,
  bad imports, env var typos at build time).
- **`gitleaks`** — catches accidentally committed secrets.

## Optional next steps

- Add `pnpm run lint` if you have ESLint configured.
- Add Playwright smoke tests (see `PLAYWRIGHT_SMOKE_TEST.md`).
- Gate deploys on a `passed` status check on `main`.

## If you don't use pnpm

Replace the pnpm steps with npm or yarn equivalents. The pattern (install
→ type-check → build → secret scan) is what matters.
