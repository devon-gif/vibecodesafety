# K6_SMOKE_TEST.md

A tiny load / smoke test you run against staging (or production after a
deploy) to confirm the basics still respond.

This is **not** a load test. It's a "did I just break the site?" check.

## Install

```bash
brew install k6
# or see https://k6.io/docs/get-started/installation/
```

## Minimal script

Save as `scripts/smoke.k6.js`:

```js
import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 2,
  duration: "20s",
  thresholds: {
    http_req_failed: ["rate<0.01"], // <1% errors
    http_req_duration: ["p(95)<1500"],
  },
};

const BASE = __ENV.BASE_URL || "http://localhost:3001";

export default function () {
  const home = http.get(`${BASE}/`);
  check(home, {
    "home 200": (r) => r.status === 200,
    "home has hero": (r) => r.body.includes("Make AI check the AI"),
  });

  const pricing = http.get(`${BASE}/#pricing`);
  check(pricing, { "pricing 200": (r) => r.status === 200 });

  const privacy = http.get(`${BASE}/privacy`);
  check(privacy, { "privacy 200": (r) => r.status === 200 });

  sleep(1);
}
```

## Run

```bash
# against local
BASE_URL=http://localhost:3001 k6 run scripts/smoke.k6.js

# against staging
BASE_URL=https://staging.yourdomain.com k6 run scripts/smoke.k6.js
```

## What to check

- All `http_req_failed` thresholds pass.
- p95 latency is in a sane range.
- Body checks confirm the page is the **right** page (not a 200 from a
  catch-all handler).

## What this catches

- A deploy that returns 500 on the homepage.
- A misrouted page that 200s but renders the wrong content.
- A regression that suddenly slows the homepage to 5s.

## What this does NOT catch

- Auth bugs, billing bugs, data bugs. For those, see
  `PLAYWRIGHT_SMOKE_TEST.md`.
