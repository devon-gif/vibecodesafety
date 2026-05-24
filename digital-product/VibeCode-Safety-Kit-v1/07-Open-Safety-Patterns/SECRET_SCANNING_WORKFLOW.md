# SECRET_SCANNING_WORKFLOW.md

A plain-English guide to keeping secrets out of your repo. Written for
beginner vibe coders, not security engineers.

This is a workflow explainer. It mentions `gitleaks` because it is a
widely-used open-source secret-scanning tool, but it is not an
endorsement and the same workflow applies to any equivalent tool.

---

## What is a secret?

A "secret" is any string that, if seen by a stranger, would let them
do something harmful or expensive on your behalf.

Examples:

- **API keys** — Stripe, OpenAI, Anthropic, Mailgun, Resend, Twilio.
- **Database passwords / connection strings.**
- **Service-role / admin keys** for hosted databases (e.g. Supabase
  service role).
- **OAuth client secrets.**
- **Webhook signing secrets.**
- **JWT signing keys.**
- **Cloud provider access keys** (AWS, GCP, DigitalOcean).
- **SSH private keys.**

Rule of thumb: if it grants access or costs money to use, it's a secret.

---

## Why AI may accidentally expose secrets

AI coding tools want to be helpful. When debugging, they sometimes:

- Paste a literal value into the code "just to test it".
- Add `console.log(process.env)` to debug an env issue.
- Create a `.env.local` with a real key while explaining setup.
- Suggest a code snippet pulled from training data that hardcodes a
  sample key shape.
- Move a server-only key behind a public env prefix because "it wasn't
  loading".

You will not always notice. Secret scanning catches it before commit.

---

## What to check before every commit

A 30-second pass:

1. **Glance at the diff.** Any line that looks like
   `sk_…`, `pk_…`, `xoxb-…`, `AKIA…`, `ghp_…`, `glpat-…`, or a long
   random base64-ish string? Stop.
2. **`.env*` files staged?** They should not be. Add them to `.gitignore`.
3. **`process.env` printed anywhere?** `console.log(process.env)` is a
   landmine.
4. **Public prefix on a server-only key?** `NEXT_PUBLIC_STRIPE_SECRET_KEY`
   should not exist.
5. **Run the scanner** (next section).

---

## Basic gitleaks commands

`gitleaks` is a popular open-source secret scanner. Install with your
package manager (e.g. `brew install gitleaks` on macOS).

**Scan the whole repo (one-time audit):**

```bash
gitleaks detect --no-banner --redact
```

`--redact` hides the actual value in output so it doesn't end up in your
terminal history.

**Scan only staged changes (use this before every commit):**

```bash
gitleaks protect --staged --no-banner --redact
```

**Add a pre-commit hook (recommended):**

Save as `.git/hooks/pre-commit` and `chmod +x` it:

```bash
#!/usr/bin/env bash
set -euo pipefail
gitleaks protect --staged --no-banner --redact
```

Now every commit runs the scanner first. If a secret is found, the
commit is blocked.

**Use a custom config (optional):**

Create `.gitleaks.toml` at the repo root if you have known false
positives (test fixtures, mocked tokens). Keep the allow-list small.

---

## What to do if a secret is found

Treat it like a fire alarm, not a chore.

1. **Rotate the key at the source — right now.**
   - Stripe → Developers → API keys → roll the key.
   - Supabase → Settings → API → regenerate the key.
   - OpenAI / Anthropic → API keys → revoke and create a new one.
   - Etc.
2. **Update the key in every place it lives.** Local `.env.local`,
   your hosting provider's env settings, any CI secret stores.
3. **Remove the secret from your working copy.** Replace with a
   placeholder.
4. **If you already pushed it:** assume it's leaked. The key is in git
   history. Even reverting the commit does not remove it. The rotation
   in step 1 is what actually protects you.
5. **Optional: rewrite git history** with a tool like
   `git filter-repo` if the repo is public. This is messy. Better to
   rotate keys and move on unless you have a strong reason.
6. **Add a check so it doesn't happen again.** Pre-commit hook, CI
   step, both ideally.

The critical action is **always step 1**. Everything else is cleanup.

---

## Rotate keys — when in doubt, rotate

- If a key was pasted into an AI chat: rotate.
- If a key was committed even briefly: rotate.
- If a contractor or freelancer who had access leaves: rotate.
- If a key was screenshotted into a Slack / Discord / Notion: rotate.
- If you're not sure whether a key was exposed: rotate.

Rotating a key takes ~60 seconds. Cleaning up after a leak takes weeks.

---

## Do not commit `.env` files

Add to `.gitignore`:

```
# env files
.env
.env.local
.env.*.local
.env.development
.env.production

# OS / editor noise
.DS_Store
.idea/
.vscode/
```

What you SHOULD commit:

```
.env.example      # variable names only, no real values
```

`.env.example` is a contract. It tells anyone cloning your repo which
env vars are needed, without leaking any actual values.

---

## A safe workflow at a glance

1. Add a pre-commit hook that runs `gitleaks protect --staged`.
2. Add a CI step that runs `gitleaks detect` on every push.
3. Never paste a real key into an AI chat. If you must paste one to
   debug, rotate it the same day.
4. Keep `.env.example` updated with variable **names** only.
5. If a leak ever happens: rotate first, debug second.

Most accidental leaks happen because there is no scanner in the loop.
Add the scanner once. Forget about it.
