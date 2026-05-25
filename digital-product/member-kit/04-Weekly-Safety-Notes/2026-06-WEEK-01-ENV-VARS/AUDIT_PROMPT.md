# Env Vars Audit Prompt

Review the current diff for environment variable risk. Check whether any secret, token, service role key, webhook secret, database URL, or private API key was exposed to client-side code, logs, docs, tests, or committed files.

Return:
- PASS, WARNING, or BLOCKED
- affected files
- exposed or risky variable names
- what to change before commit, push, or deploy
