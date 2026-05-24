# GITLEAKS_SETUP.md

Gitleaks scans your repo for accidentally committed secrets. AI-coding
tools sometimes paste keys into code while debugging. This catches it.

## Install (macOS / Linux)

```bash
brew install gitleaks
# or
curl -sSfL https://raw.githubusercontent.com/gitleaks/gitleaks/master/install.sh | sh -s -- -b /usr/local/bin
```

## One-time scan of the whole repo

```bash
gitleaks detect --source . --no-banner --redact
```

Add `--verbose` if you want to see every file checked.

## Scan only what's currently staged (pre-commit)

```bash
gitleaks protect --staged --no-banner --redact
```

## Pre-commit hook

Save as `.git/hooks/pre-commit` and `chmod +x` it:

```bash
#!/usr/bin/env bash
set -euo pipefail

if ! gitleaks protect --staged --no-banner --redact; then
  echo ""
  echo "❌ gitleaks found a possible secret in staged files."
  echo "   Remove it before committing. If it's a false positive,"
  echo "   add an entry to .gitleaks.toml."
  exit 1
fi
```

If you use `lefthook` or `husky`, register the same command there instead.

## Custom rules / allowlist

Create `.gitleaks.toml` at the repo root for project-specific rules.
Minimal example:

```toml
title = "VibeCode Safety Kit gitleaks config"

[allowlist]
description = "Allow obvious test fixtures"
paths = [
  '''(.*?)\.test\.(ts|tsx|js)''',
  '''fixtures/.*''',
]
```

## In CI

See `GITHUB_ACTIONS_STARTER.md` for the GitHub Actions step.

## What to do if gitleaks finds a real secret

1. **Rotate the secret immediately** at the source (Stripe dashboard,
   Supabase, etc.). Even if you "deleted" it from code, GitHub keeps it
   in commit history.
2. Remove it from the working copy.
3. Consider rewriting history (`git filter-repo`) if the secret was
   pushed to a public repo.
4. Add a check so it doesn't happen again.
