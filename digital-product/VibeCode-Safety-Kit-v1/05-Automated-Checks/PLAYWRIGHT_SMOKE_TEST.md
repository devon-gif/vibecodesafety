# PLAYWRIGHT_SMOKE_TEST.md

A small set of end-to-end tests that click through your most important
flows. Run them locally before push, and in CI before promoting to
production.

## Install

```bash
pnpm add -D @playwright/test
pnpm exec playwright install --with-deps chromium
```

Add to `package.json`:

```json
{
  "scripts": {
    "test:e2e": "playwright test"
  }
}
```

## Minimal config

Save as `playwright.config.ts`:

```ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  retries: 0,
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3001",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
});
```

## Smoke tests

Save as `e2e/smoke.spec.ts`:

```ts
import { test, expect } from "@playwright/test";

test("home page loads with hero copy", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Make AI check the AI/i })
  ).toBeVisible();
});

test("legal pages render", async ({ page }) => {
  for (const path of ["/privacy", "/terms", "/refund-policy"]) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
});

test("checkout button routes somewhere", async ({ page }) => {
  await page.goto("/");
  // Open the pricing CTA. It either opens a Stripe URL (external) or
  // navigates to /checkout-coming-soon. Either is acceptable.
  const buyButtons = page.getByRole("link", { name: /Get the Kit/i });
  await expect(buyButtons.first()).toBeVisible();
  const href = await buyButtons.first().getAttribute("href");
  expect(href).toBeTruthy();
});
```

## Add tests for YOUR critical flows

For a real product, add specs for:

- Sign up → email verification → sign in.
- Sign in → access dashboard → sign out.
- Test purchase → land on `/success`.
- Submit a form → see the row in the dashboard.

Keep each spec under 30 seconds. The point is "smoke", not coverage.

## Run

```bash
# local
pnpm run test:e2e

# against staging
BASE_URL=https://staging.yourdomain.com pnpm run test:e2e
```

## In CI

Add a step in `.github/workflows/ci.yml`:

```yaml
- run: pnpm exec playwright install --with-deps chromium
- run: pnpm run build
- run: pnpm run start &
- run: npx wait-on http://localhost:3000
- run: pnpm run test:e2e
```

(Adjust port if you run dev on 3001.)
