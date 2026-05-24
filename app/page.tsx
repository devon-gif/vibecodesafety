import Link from "next/link";
import { SafetyReport } from "@/components/SafetyReport";
import { BuyLink } from "@/components/BuyLink";
import { EmailConsentCheckbox } from "@/components/EmailConsentCheckbox";

const kitFiles = [
  { name: "START_HERE.md", desc: "Read this first. The 5-minute orientation." },
  { name: "AI_REVIEWER_PROMPT.md", desc: "Second-pass prompt that reviews every AI change." },
  { name: "BUILDER_PROMPT.md", desc: "Structured prompt for safer AI feature builds." },
  { name: "PRE_DEPLOY_CHECKLIST.md", desc: "Run before every push or deploy." },
  { name: "SECURITY_GUARDRAILS.md", desc: "Practical checks for secrets, env, API, logging." },
  { name: "SUPABASE_CHECKLIST.md", desc: "RLS, policies, schema drift, and auth." },
  { name: "STRIPE_BILLING_CHECKLIST.md", desc: "Webhooks, plan state, and checkout safety." },
  { name: "GITLEAKS_SETUP.md", desc: "Catch exposed secrets before they ship." },
  { name: "GITHUB_ACTIONS_STARTER.md", desc: "Type-check, build, and scan on every push." },
  { name: "CRITICAL_FLOWS_CHECKLIST.md", desc: "Auth, onboarding, forms, dashboards, billing." },
];

const useCases = [
  "You built your SaaS with Cursor.",
  "Claude fixed one bug but changed five files.",
  "You are about to push to Vercel.",
  "You added Stripe and are scared something broke.",
  "You use Supabase and want to avoid RLS mistakes.",
  "You are handing a client project off.",
];

const trustPills = [
  "Works with Claude, Codex, Cursor, Windsurf, Copilot & more",
  "Includes prompts, checklists, and repo rules",
  "Designed for solo builders, not enterprise teams",
];

const problems = [
  {
    t: "It works in one file, but breaks the app",
    b: "AI can fix a local issue while accidentally breaking auth, onboarding, billing, forms, dashboards, or saved data somewhere else.",
  },
  {
    t: "Your AI doesn't always remember the whole product",
    b: "Most coding sessions focus on the current task, not your full architecture, critical flows, security boundaries, or database contracts.",
  },
  {
    t: "The risky stuff hides in the final 20%",
    b: "Secrets, environment variables, edge cases, schema changes, permissions, deploy settings, and broken user flows are easy to miss when you're moving fast.",
  },
  {
    t: "Vibe code gets disconnected fast",
    b: "Without a repeatable review system, AI-generated features can pile up into a product that looks finished but becomes fragile underneath.",
  },
];

const solutionBullets = [
  "Make AI review the full impact of AI-generated changes",
  "Check critical flows before you commit",
  "Catch exposed secrets and risky environment variable mistakes",
  "Keep your AI coding tool aligned with your app architecture",
  "Review auth, billing, database, API, and deploy risks",
  "Use PASS / WARNING / BLOCKED decisions before pushing code",
];

const steps = [
  {
    n: "1",
    t: "Build the change",
    b: "Use your favorite AI coding tool to create the feature, fix the bug, or update the page.",
  },
  {
    n: "2",
    t: "Review the diff",
    b: "Use the Reviewer AI prompt to inspect what changed, what might break, and what needs to be checked.",
  },
  {
    n: "3",
    t: "Check critical flows",
    b: "Run through the included flow checklists for auth, onboarding, forms, dashboards, billing, database changes, and protected routes.",
  },
  {
    n: "4",
    t: "Run automated checks",
    b: "Use the included starter checks for type-checking, builds, secret scanning, smoke tests, and deploy readiness.",
  },
  {
    n: "5",
    t: "Commit only when it passes",
    b: "Use the PASS / PASS WITH WARNINGS / BLOCKED rubric to decide whether the change is ready, needs follow-up, or should be fixed first.",
  },
];

const statuses = [
  { l: "PASS", b: "Safe to commit.", tone: "emerald" as const },
  {
    l: "PASS WITH WARNINGS",
    b: "Commit carefully and track follow-ups.",
    tone: "amber" as const,
  },
  { l: "BLOCKED", b: "Fix before push or deploy.", tone: "rose" as const },
];

const toneClass: Record<"emerald" | "amber" | "rose", string> = {
  emerald:
    "border-emerald-400/40 bg-gradient-to-b from-emerald-400/10 to-emerald-500/0 text-emerald-300",
  amber:
    "border-amber-400/40 bg-gradient-to-b from-amber-400/10 to-amber-500/0 text-amber-300",
  rose: "border-rose-400/40 bg-gradient-to-b from-rose-400/10 to-rose-500/0 text-rose-300",
};
const toneDot: Record<"emerald" | "amber" | "rose", string> = {
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  rose: "bg-rose-400",
};

const insideCards = [
  {
    t: "AI Repo Instructions",
    b: "AGENTS.md, CLAUDE.md, Cursor rules, and coding-agent instruction templates that tell AI how to work inside your project safely.",
    list: [
      "Project rules",
      "Architecture awareness",
      "“Do not break” boundaries",
      "Safer coding behavior",
    ],
  },
  {
    t: "Builder Prompt Workflow",
    b: "A structured prompt for asking AI to build features without ignoring your existing app, routes, data, and user flows.",
    list: [
      "Scope the change",
      "Respect existing patterns",
      "Avoid unnecessary rewrites",
      "Document what changed",
    ],
  },
  {
    t: "Reviewer AI Prompt",
    b: "A second-pass review prompt that makes AI inspect the change before you commit, push, or deploy.",
    list: [
      "Files changed",
      "Risk level",
      "Broken flow checks",
      "Security review",
      "PASS / WARNING / BLOCKED verdict",
    ],
  },
  {
    t: "Critical Flow Checklists",
    b: "Simple checklists for the parts of your app that matter most.",
    list: [
      "Auth",
      "Onboarding",
      "Billing",
      "Forms",
      "Dashboards",
      "Protected routes",
    ],
  },
  {
    t: "Security Guardrails",
    b: "Practical safety checks for common AI coding mistakes.",
    list: [
      "Exposed secrets",
      "Environment variables",
      "API route validation",
      "Supabase RLS",
      "Stripe webhook basics",
      "Unsafe logging",
    ],
  },
  {
    t: "Pre-Deploy Checklist",
    b: "A clear review list to run before pushing live.",
    list: [
      "Type-check",
      "Build",
      "Secret scan",
      "Smoke test",
      "Rollback plan",
      "Final review",
    ],
  },
  {
    t: "Automation Starters",
    b: "Starter docs for adding lightweight automated checks to your project.",
    list: [
      "GitHub Actions",
      "Gitleaks",
      "k6 smoke tests",
      "Playwright smoke tests",
      "Dependency checks",
    ],
  },
  {
    t: "Launch Confidence System",
    b: "A simple scoring system that helps you decide whether a change is ready to ship or needs another pass.",
    list: [
      "PASS",
      "PASS WITH WARNINGS",
      "BLOCKED",
      "Required fixes",
      "Follow-up notes",
    ],
  },
];

const audience = [
  {
    t: "Solo founders",
    b: "You're building fast with AI, but you need a simple system to avoid breaking your own product.",
  },
  {
    t: "Designers building SaaS",
    b: "You can create beautiful products with AI tools, but you want guardrails around the code underneath.",
  },
  {
    t: "Indie hackers",
    b: "You need a repeatable review workflow before pushing new features, experiments, or monetization flows.",
  },
  {
    t: "Small agencies",
    b: "You're using AI to build client projects faster and need a safer handoff process before delivery.",
  },
  {
    t: "Non-technical founders",
    b: "You don't need to become a senior engineer, but you do need better questions, checks, and review prompts.",
  },
  {
    t: "Vibe coders",
    b: "You're moving fast with Claude, Codex, Cursor, Windsurf, Lovable, Bolt, or similar tools — and want to ship with more confidence.",
  },
];

const pricingIncludes = [
  "AI repo instruction templates",
  "Builder prompt workflow",
  "Reviewer AI prompt",
  "Pre-commit checklist",
  "Pre-push checklist",
  "Pre-deploy checklist",
  "Critical flow checklist",
  "Security guardrails",
  "Schema and database checklist",
  "Environment variable checklist",
  "GitHub Actions starter",
  "Gitleaks setup guide",
  "k6 smoke test starter",
  "Playwright smoke test starter",
  "Usage guide for every AI coding change",
];

const valueBullets = [
  "Avoid obvious mistakes before they go live",
  "Give AI better project instructions",
  "Review risky changes with a second AI pass",
  "Create a safer pre-deploy habit",
  "Make your repo easier for AI tools to understand",
  "Build more confidence before pushing code",
];

const beforeBullets = [
  "AI changes files without checking the full app",
  "You are not sure what broke",
  "Critical flows get tested randomly",
  "Secrets and env vars are easy to miss",
  "Deploys feel like a guess",
  "Every project has different rules",
];

const afterBullets = [
  "AI gets clear repo instructions",
  "Every change gets reviewed",
  "Critical flows have checklists",
  "Security risks are easier to spot",
  "Deploys follow a repeatable process",
  "You have a reusable system for every project",
];

const faqs = [
  {
    q: "Does this replace a developer?",
    a: "No. VibeCode Safety Kit does not replace a senior developer, QA process, or security audit. It gives solo founders and AI-assisted builders a practical guardrail system for reviewing AI-generated changes before commit, push, or deploy.",
  },
  {
    q: "Does it work with Claude, Codex, Cursor, Windsurf, and Copilot?",
    a: "Yes. The kit is tool-agnostic. It is built around prompts, repo instruction files, checklists, and automated checks that can work with most AI coding workflows.",
  },
  {
    q: "Is this a SaaS subscription?",
    a: "No. The first version is a one-time digital product. You pay once and use the kit inside your own projects.",
  },
  {
    q: "Who is this best for?",
    a: "It is best for solo founders, designers, indie hackers, small agencies, non-technical founders, and vibe coders who are using AI to build apps or websites and want a safer review workflow.",
  },
  {
    q: "What problem does it solve?",
    a: "It helps you catch AI-generated changes that may break architecture, auth, billing, database schemas, API routes, critical user flows, environment variables, or deployment readiness.",
  },
  {
    q: "Can I use it with an existing app?",
    a: "Yes. The kit is designed to be copied into an existing repo. You can add the templates, customize them to your app, and start using the review workflow after each AI coding change.",
  },
  {
    q: "Will this guarantee my app is secure?",
    a: "No. No checklist or prompt can guarantee security. The kit helps reduce risk and create better review habits, but important apps should still get professional engineering and security review.",
  },
  {
    q: "Is this beginner-friendly?",
    a: "Yes. The kit is written for people who may not be senior engineers. It gives you better prompts, better questions, and a simple process to follow before shipping.",
  },
  {
    q: "Why only $29.99?",
    a: "The goal is to make this an easy purchase for builders who are moving fast with AI. It is priced low enough to be accessible, but useful enough to become part of your daily shipping workflow.",
  },
  {
    q: "Do I need to install anything?",
    a: "You can start with the prompts and checklists immediately. Some optional automated checks, like Gitleaks, k6, Playwright, or GitHub Actions, may require setup if you want to use the stronger workflow.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <span className="pill">
        <span className="pill-dot" />
        {children}
      </span>
    </div>
  );
}

function CheckBullet({
  children,
  tone = "violet",
}: {
  children: React.ReactNode;
  tone?: "violet" | "emerald" | "rose";
}) {
  const cls =
    tone === "violet"
      ? "text-violet-300"
      : tone === "emerald"
        ? "text-emerald-400"
        : "text-rose-400";
  return (
    <li className="flex items-start gap-3 text-sm text-gray-300">
      <svg
        viewBox="0 0 24 24"
        className={`mt-0.5 h-4 w-4 flex-none ${cls}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {tone === "rose" ? (
          <path d="m6 6 12 12M18 6 6 18" />
        ) : (
          <path d="m5 12 5 5L20 7" />
        )}
      </svg>
      <span>{children}</span>
    </li>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div
          aria-hidden
          className="orb left-[-160px] top-[-120px] h-[420px] w-[420px] bg-violet-700/40"
        />
        <div
          aria-hidden
          className="orb right-[-160px] top-[60px] h-[460px] w-[460px] bg-fuchsia-700/30"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:gap-16 lg:pt-24">
          <div className="relative">
            <span className="pill">
              <span className="pill-dot" />
              FOR VIBE CODERS, SOLO FOUNDERS, AND AI-ASSISTED BUILDERS
            </span>
            <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Make AI <span className="violet-text">check the AI</span> before
              you ship.
            </h1>
            <p className="mt-6 text-pretty text-lg text-gray-300">
              VibeCode Safety Kit gives you the prompts, checklists, repo
              rules, and pre-deploy workflow to review AI-generated code
              before you commit, push, or deploy.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Catch broken flows, exposed secrets, schema drift, risky edits,
              and disconnected AI changes before they go live.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <BuyLink className="btn-primary">
                <CartIcon />
                Get the Kit for $29.99
              </BuyLink>
              <Link href="#whats-inside" className="btn-secondary">
                See What&apos;s Inside
              </Link>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              One-time purchase. No subscription. Built to drop into your
              existing repo.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2 text-xs text-gray-300">
              {trustPills.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <SafetyReport />
            <p className="mt-6 text-center text-xs text-gray-500">
              A simple repeatable review system for every AI coding change.
            </p>
          </div>
        </div>
      </section>

      {/* PREVIEW WHAT'S INSIDE */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>PREVIEW WHAT&apos;S INSIDE</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Preview what&apos;s inside.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
            A practical folder of prompts, checklists, and guardrails you can
            copy into your repo and reuse after every AI coding change.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[1fr,1.1fr]">
            <div className="glass-strong overflow-hidden rounded-2xl shadow-glow">
              <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-4 py-2.5 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="font-mono">your-repo / VibeCode-Safety-Kit</span>
                <span className="font-mono text-violet-300">main</span>
              </div>
              <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed text-gray-300">
{`VibeCode Safety Kit/
├── START_HERE.md
├── AI_REVIEWER_PROMPT.md
├── BUILDER_PROMPT.md
├── PRE_DEPLOY_CHECKLIST.md
├── SECURITY_GUARDRAILS.md
├── SUPABASE_CHECKLIST.md
├── STRIPE_BILLING_CHECKLIST.md
├── GITLEAKS_SETUP.md
├── GITHUB_ACTIONS_STARTER.md
└── CRITICAL_FLOWS_CHECKLIST.md`}
              </pre>
            </div>

            <ul className="grid grid-cols-1 gap-2.5">
              {kitFiles.map((f) => (
                <li
                  key={f.name}
                  className="glass flex items-start gap-3 rounded-xl p-4"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/30">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <path d="M14 3v6h6" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-mono text-sm text-white">
                      {f.name}
                    </div>
                    <div className="text-xs text-gray-400">{f.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Preview excerpt cards */}
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                t: "Reviewer AI Prompt",
                excerpt:
                  "You are a senior reviewer for a small product. Your only job is to inspect the change below and return a confident, structured verdict. Return: files changed, risk level, broken-flow check (auth, billing, data writes, schema), security review, type/build sanity, things that might silently break, required fixes, follow-ups, and finally a single VERDICT line: PASS / PASS WITH WARNINGS / BLOCKED.",
              },
              {
                t: "Pre-Deploy Checklist",
                excerpt:
                  "[ ] type-check clean  [ ] build clean  [ ] env vars set in production  [ ] gitleaks clean  [ ] sign in / sign up / sign out work  [ ] test purchase reaches /success  [ ] webhook receives the test event  [ ] no breaking schema changes without a migration  [ ] rollback plan documented  [ ] reviewer prompt returned PASS or PASS WITH WARNINGS.",
              },
              {
                t: "Security Guardrails",
                excerpt:
                  "Secrets live only in environment variables. Never log them. Never paste them into AI chats. API routes validate input, enforce auth from the session (not request body), and check ownership. RLS is enabled on every public table. Stripe webhooks verify the signature; plan state is updated only on webhook events, never from a /success URL.",
              },
            ].map((p) => (
              <div
                key={p.t}
                className="glass relative flex flex-col rounded-2xl p-6"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/30">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <path d="M14 3v6h6" />
                    </svg>
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {p.t}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-300">
                  &ldquo;{p.excerpt}&rdquo;
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 self-start rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 text-[11px] font-medium text-violet-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                  Included in the kit
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>THE VIBE CODING PROBLEM</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            AI can write code fast.{" "}
            <span className="gradient-text">
              That doesn&apos;t mean it&apos;s ready to ship.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
            AI coding tools are powerful, but they can also make confident
            changes that quietly break other parts of your app. The problem
            usually isn&apos;t the one file you&apos;re looking at — it&apos;s
            everything connected to it.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
            {problems.map((p) => (
              <div key={p.t} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {p.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="relative border-t border-white/5 bg-gradient-to-b from-transparent via-violet-500/[0.04] to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>THE SAFETY LAYER FOR AI CODING</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            A practical guardrail system for{" "}
            <span className="violet-text">shipping with AI.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-gray-400">
            VibeCode Safety Kit gives you a simple workflow you can run after
            every AI coding prompt. Instead of trusting the first answer, you
            use a second AI review process, structured repo instructions, and
            pre-deploy checks to catch problems before they become production
            issues.
          </p>
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-violet-400/20 bg-violet-500/[0.05] p-5 text-center text-sm text-violet-200">
            The goal is not to slow you down. The goal is to keep you from
            shipping blind.
          </div>
          <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {solutionBullets.map((b) => (
              <CheckBullet key={b}>{b}</CheckBullet>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>SIMPLE WORKFLOW</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Run this after every AI coding change.
          </h2>

          <ol className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n} className="glass relative rounded-2xl p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violetglow-500 to-violetglow-700 font-semibold text-white shadow-glow">
                  {s.n}
                </div>
                <div className="mt-4 font-semibold text-white">{s.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {s.b}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {statuses.map((s) => (
              <div
                key={s.l}
                className={`rounded-xl border p-5 ${toneClass[s.tone]}`}
              >
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider">
                  <span className={`h-2 w-2 rounded-full ${toneDot[s.tone]}`} />
                  {s.l}
                </div>
                <p className="mt-2 text-sm text-gray-300">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="whats-inside" className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>INCLUDED IN THE KIT</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Everything you need to add a safety workflow to your repo.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
            The kit is designed to be copied into your project and reused
            every time you ask AI to change your app.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {insideCards.map((c) => (
              <div
                key={c.t}
                className="glass flex flex-col rounded-2xl p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/30">
                  <SparkIcon />
                </div>
                <h3 className="text-base font-semibold text-white">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {c.b}
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-gray-300">
                  {c.list.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES — "this is for you if" */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>THIS IS FOR YOU IF…</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            You&apos;ve been in <span className="violet-text">one of these moments.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <div
                key={u}
                className="glass flex items-start gap-3 rounded-2xl p-6"
              >
                <span className="mt-1 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/30">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8v5" />
                    <path d="M12 17h.01" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </span>
                <p className="text-base text-gray-200">{u}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-gray-500">
            If any of these felt familiar, the kit is built for that exact
            five minutes before you ship.
          </p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section id="who-its-for" className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>BUILT FOR AI-ASSISTED BUILDERS</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            For people shipping faster than their review process can keep up.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((a) => (
              <div key={a.t} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white">{a.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {a.b}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center text-sm text-gray-400">
            This does not replace a senior developer, professional QA, or a
            security audit. It gives AI-assisted builders a practical review
            system so they stop shipping disconnected vibe code.
          </p>
        </div>
      </section>

      {/* WHY ONE-TIME */}
      <section className="relative border-t border-white/5 bg-gradient-to-b from-transparent via-violet-500/[0.04] to-transparent">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Eyebrow>NO SUBSCRIPTION</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Just the system. <span className="violet-text">Use it again and again.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
            VibeCode Safety Kit is a one-time digital product you can drop
            into your repo and reuse every time you work with AI. No monthly
            fee, no locked platform, no complicated dashboard.
          </p>

          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Pay once",
              "Copy it into your repo",
              "Use it with most AI coding tools",
              "Run it after every AI change",
              "Keep improving your workflow over time",
            ].map((b) => (
              <CheckBullet key={b}>{b}</CheckBullet>
            ))}
          </ul>

          <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-violet-400/20 bg-violet-500/[0.05] p-5 text-center text-sm text-violet-200">
            You do not need another subscription just to stop shipping blind.
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="relative border-t border-white/5"
      >
        <div
          aria-hidden
          className="orb left-1/2 top-10 h-[360px] w-[360px] -translate-x-1/2 bg-violet-600/30"
        />
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>SIMPLE PRICING</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Get the VibeCode Safety Kit for{" "}
            <span className="violet-text">$29.99.</span>
          </h2>

          <div className="mx-auto mt-14 max-w-2xl">
            <div className="glass-strong relative rounded-3xl p-8 shadow-glow-lg">
              <div className="absolute inset-x-0 -top-px mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
              <div className="flex items-center justify-center">
                <span className="pill">
                  <SettingsIcon />
                  ONE-TIME PURCHASE
                </span>
              </div>

              <div className="mt-6 text-center">
                <div className="text-6xl font-semibold text-white">
                  $29.99
                </div>
                <div className="mt-1 text-violet-300">One-time purchase</div>
                <div className="mt-1 text-sm text-gray-400">
                  Pay once. Use forever.
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-gray-400">
                A practical safety workflow for solo founders and vibe coders
                using AI to build apps, SaaS products, landing pages, tools,
                and client projects.
              </p>

              <div className="my-6 divider-line" />

              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {pricingIncludes.map((b) => (
                  <CheckBullet key={b}>{b}</CheckBullet>
                ))}
              </ul>

              <EmailConsentCheckbox />

              <BuyLink className="btn-primary mt-5 w-full text-base">
                <CartIcon />
                Get the Kit for $29.99
              </BuyLink>
              <p className="mt-3 text-center text-xs text-gray-500">
                Early version pricing. One-time purchase. No subscription
                required.
              </p>

              {/* Mini guarantee */}
              <div className="mt-6 rounded-xl border border-emerald-400/25 bg-emerald-400/5 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  7-day simple refund policy
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  If you open the kit and feel like it does not help you
                  review AI-generated code more clearly, email us within 7
                  days for a full refund.
                </p>
              </div>

              {/* Honest disclaimer */}
              <p className="mt-4 text-center text-[11px] leading-relaxed text-gray-500">
                This is not a security audit or a replacement for a senior
                developer. It is a practical guardrail system that helps
                AI-assisted builders catch more issues before they ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="glass-strong rounded-3xl p-8 text-center shadow-glow">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Try the workflow risk-free.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-300">
              If you open the kit and feel like it does not help you review
              AI-generated code more clearly, email us within 7 days.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-xs text-gray-500">
              The kit helps reduce risk, but it does not guarantee bug-free or
              secure software.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE STACK */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Eyebrow>WHY IT&apos;S WORTH IT</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            One broken deploy can cost more than the kit.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-gray-400">
            A missed environment variable, broken auth flow, exposed secret,
            bad database change, or failed checkout flow can waste hours or
            damage trust. VibeCode Safety Kit gives you a repeatable way to
            slow down for the right five minutes before you ship.
          </p>
          <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {valueBullets.map((b) => (
              <CheckBullet key={b}>{b}</CheckBullet>
            ))}
          </ul>
          <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-violet-400/20 bg-violet-500/[0.05] p-5 text-center text-sm text-violet-200">
            $29.99 is not for more information. It is for a reusable safety
            habit you can apply to every AI-built project.
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>BEFORE VS AFTER</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Stop shipping from <span className="violet-text">vibes alone.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-300">
                Without the kit
              </div>
              <ul className="mt-5 space-y-3">
                {beforeBullets.map((b) => (
                  <CheckBullet key={b} tone="rose">
                    {b}
                  </CheckBullet>
                ))}
              </ul>
            </div>
            <div className="glass-strong rounded-2xl p-6 shadow-glow">
              <div className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                With VibeCode Safety Kit
              </div>
              <ul className="mt-5 space-y-3">
                {afterBullets.map((b) => (
                  <CheckBullet key={b} tone="emerald">
                    {b}
                  </CheckBullet>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Questions vibe coders usually ask.
          </h2>
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="glass group rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-white">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-violet-300 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative border-t border-white/5">
        <div
          aria-hidden
          className="orb left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 bg-violet-600/30"
        />
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <div className="flex justify-center">
            <span className="pill">
              <span className="pill-dot" />
              BEFORE YOUR NEXT COMMIT, PUSH, OR DEPLOY
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Before you commit, push, or deploy —{" "}
            <span className="violet-text">run the review.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Give your AI-built project a safety layer. Add the prompts,
            checklists, repo rules, and pre-deploy guardrails that help you
            ship with more confidence.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BuyLink className="btn-primary">
              <CartIcon />
              Get the Kit for $29.99
            </BuyLink>
            <Link href="#whats-inside" className="btn-secondary">
              See What&apos;s Inside
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Make AI check the AI. No subscription required.
          </p>
        </div>
      </section>
    </div>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M3 4h2l2.5 12h12l2-8H6" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1A2 2 0 1 1 4.4 17l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1A2 2 0 1 1 7 4.4l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1A2 2 0 1 1 19.6 7l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </svg>
  );
}
