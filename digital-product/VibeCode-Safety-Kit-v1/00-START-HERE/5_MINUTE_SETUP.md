# 5 MINUTE SETUP

Five steps. Five minutes. You only do this once per project.

---

## Step 1 &mdash; Open your project

Open the project you want to make safer in your code editor (VS Code,
Cursor, Windsurf, your terminal, etc.). The project should already be a
git repo. If it&rsquo;s not, run `git init`.

---

## Step 2 &mdash; Copy three files into your repo root

From the kit, copy these three files into the **root** of your project
(the folder that has your `package.json` or `index.html`):

1. `00-Beginner-Mode/VIBECODE_SAFETY_RULES.md`
2. `00-Beginner-Mode/PROJECT_SAFETY_PROFILE.md`
3. `00-Beginner-Mode/DAILY_VIBECODE_PROMPT.md`

You can also copy `00-Beginner-Mode/REVIEWER_PROMPT.md` and
`00-Beginner-Mode/PRE_SHIP_CHECKLIST.md` if you want them handy.

> Tip: if your tool reads `AGENTS.md` automatically, you can rename
> `VIBECODE_SAFETY_RULES.md` to `AGENTS.md`. The contents work either
> way.

---

## Step 3 &mdash; Fill out your project profile

Open `PROJECT_SAFETY_PROFILE.md` in the root of your repo.

Fill in 5&ndash;10 short answers:

- What does your product do?
- What stack does it use? (framework, language, database, auth,
  payments, hosting)
- What flows must not break? (auth, billing, dashboard, deploy)
- What env vars exist? (just names, never values)

This is the &ldquo;memory&rdquo; your AI assistant gets. Five minutes
once. Saves you many bad changes later.

---

## Step 4 &mdash; Save the Daily VibeCode Prompt somewhere fast

You will paste this prompt **before** asking AI to change code. Common
places to save it for quick access:

- Cursor: save as a snippet or rule.
- Windsurf: save into `.windsurf/rules/` or a workspace rule.
- Claude / ChatGPT / generic: save as a project / system prompt.
- Anywhere else: keep it in a note app you can paste from in one click.

The prompt lives at `DAILY_VIBECODE_PROMPT.md` in your repo. You can
paste the contents directly into your tool.

---

## Step 5 &mdash; Try it once with a tiny change

To prove the loop works, ask your AI tool to make a small, safe change
(rename a heading, add a comment, change a color).

1. Paste the **Daily VibeCode Prompt** into the chat first.
2. Describe the small change you want.
3. Let AI make the change.
4. Open a **fresh** AI chat. Paste `REVIEWER_PROMPT.md`. Paste the diff.
5. Read the verdict: PASS / PASS WITH WARNINGS / BLOCKED.
6. If PASS: commit.

You just ran the full loop. Future changes are the same loop, every
time.

---

## You&rsquo;re done

Setup is complete. From now on, every AI coding change goes through the
same simple loop:

1. Paste the Daily Prompt before AI builds.
2. AI builds the change.
3. Paste the Reviewer Prompt before you commit.
4. Ship only when the verdict is PASS or PASS WITH WARNINGS.

If anything is unclear, open `WHICH_FILE_DO_I_USE.md` next.
