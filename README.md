# VibeCode Safety

### Guardrails for AI-assisted software development

VibeCode Safety is a product and workflow system for solo founders and AI-assisted builders who use tools such as Claude, Codex, Cursor, Windsurf and GitHub Copilot to ship software.

The core idea is simple:

> **Make AI check the AI before you ship.**

Instead of treating AI-generated code as automatically trustworthy, the workflow introduces structured review states, repo rules, audit prompts and pre-deploy checks before changes reach production.

**Focus:** AI-assisted development · developer experience · product design · safety workflows · Next.js

[View my portfolio](https://www.archerdesign.shop/devon)

---

## The problem

AI coding tools make software dramatically faster to create—but they can also make it easier to ship mistakes quickly:

- exposed secrets
- weakened authentication
- incorrect environment-variable boundaries
- billing regressions
- database / RLS drift
- unsafe dependency changes
- preview and deployment failures
- repeated mistakes caused by missing repo instructions

VibeCode Safety turns those risks into a repeatable review process.

## The workflow

The current product experience is organized around a simple loop:

1. **Install the safety workflow**
2. **Run a structured repository audit**
3. **Review AI-generated changes**
4. **Classify the result as PASS / WARNING / BLOCKED**
5. **Fix or escalate issues before commit / push / deploy**
6. **Keep the review system current through ongoing safety updates**

The product is intentionally tool-agnostic and can be used with multiple AI coding environments.

## What the member system includes

- Heavy-duty repository audit workflow
- AI auditor-agent instructions
- Daily AI change-review process
- Weekly safety notes
- Monthly deeper safety drops
- Repository instruction templates
- Pre-commit / pre-push / pre-deploy checks
- Rollback and handoff checklists
- Ongoing prompt and guardrail updates

## Design principles

### AI output is not evidence by itself
A generated change still needs validation against the repository, application behavior and deployment environment.

### Safety should be visible
PASS / WARNING / BLOCKED makes the state of a review understandable without requiring a developer to parse a long AI transcript.

### High-risk surfaces deserve stricter rules
Authentication, payments, secrets, database policies and production configuration should receive more scrutiny than low-risk visual changes.

### Repeatable beats heroic
The goal is not a one-time audit. It is a lightweight system people can use every time an AI tool changes their codebase.

## Product stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Subscription / checkout flows
- AI-tool-agnostic review workflows

## Relationship to VibeCode+

VibeCode Safety is the productized safety layer around a broader area I have been exploring: how autonomous and AI-assisted software systems can perform useful work **without hiding state, bypassing guardrails or removing human control**.

A sanitized architecture case study for the more advanced VibeCode+ repair system is available in my public portfolio repository.

## Why this project is in my portfolio

This project represents the intersection I care about most as a Creative Technologist: product UX, emerging AI behavior, technical systems and the design of trust.

The design challenge is not simply making an AI tool look polished. It is deciding **what the system may do, what it must explain, when it should stop and when a human must take over.**

---

**Devon Archer**  
Creative Technologist / Design Engineer  
[Portfolio](https://www.archerdesign.shop/devon) · [GitHub](https://github.com/devon-gif)
