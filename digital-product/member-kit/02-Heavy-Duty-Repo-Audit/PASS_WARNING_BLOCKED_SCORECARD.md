# PASS / WARNING / BLOCKED Scorecard

## PASS

Use PASS only when no blocking issue is found based on the provided context.

## WARNING

Use WARNING when the change can proceed carefully but follow-up checks are needed.

Examples:

- Missing test coverage for a touched critical flow.
- Minor dependency or config uncertainty.
- Manual verification still needed.

## BLOCKED

Use BLOCKED when a risky issue should be fixed before commit, push, or deploy.

Examples:

- Auth bypass.
- Exposed secret.
- Unvalidated API input.
- Broken checkout redirect.
- RLS change without review.
- Build failure.
