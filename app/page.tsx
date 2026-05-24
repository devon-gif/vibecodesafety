import Link from "next/link";
import { SafetyReport } from "@/components/SafetyReport";
import { BuyLink } from "@/components/BuyLink";
import { EmailConsentCheckbox } from "@/components/EmailConsentCheckbox";
import { ContactForm } from "@/components/ContactForm";

/* ---------- data ---------- */

const trustPills = [
  "Works with Claude, Codex, Cursor, Windsurf, Copilot & more",
  "Beginner-friendly setup — copy 3 files, paste 1 prompt",
  "Designed for solo founders, not enterprise teams",
];

const problems = [
  {
    t: "Working build ≠ safe build",
    b: "Your app can compile while still leaking secrets, skipping validation, exposing protected data, or breaking a critical user flow.",
  },
  {
    t: "AI can lose the system context",
    b: "A coding agent may fix the file in front of it while missing the routes, policies, payments, schemas, and flows connected to that change.",
  },
  {
    t: "One fix can create three regressions",
    b: "Vibe-coded apps often break through auth drift, mixed patterns, bug loops, checkout regressions, and missing tests.",
  },
  {
    t: "The risky parts are easy to miss",
    b: "Environment variables, Supabase RLS, Stripe webhooks, API routes, dependency changes, and preview deploys all need a pre-ship review habit.",
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
    t: "Copy the safety files",
    b: "Copy the beginner files into your project or AI workspace.",
  },
  {
    n: "2",
    t: "Fill out your project profile",
    b: "Tell AI what your app uses, what flows matter, and what should never break.",
  },
  {
    n: "3",
    t: "Build with your AI coding tool",
    b: "Use Claude, Codex, Cursor, Windsurf, Copilot, Lovable, Bolt, Replit, or similar tools.",
  },
  {
    n: "4",
    t: "Run the Daily VibeCode Prompt",
    b: "After AI changes code, make it review the affected files, routes, data, auth, billing, and deploy risks.",
  },
  {
    n: "5",
    t: "Ship only when it passes",
    b: "Use PASS / PASS WITH WARNINGS / BLOCKED to decide whether to commit, push, or deploy.",
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

const kitFiles = [
  { name: "QUICKSTART.md", desc: "The whole kit in one page." },
  {
    name: "00-START-HERE/",
    desc: "Read-first setup guides and beginner mistakes to avoid.",
  },
  {
    name: "00-Beginner-Mode/",
    desc: "The fastest workflow: copy 3 files, paste 1 prompt, review.",
  },
  {
    name: "01-Repo-Instructions/",
    desc: "AGENTS, CLAUDE, Codex, Cursor, and Windsurf instruction templates.",
  },
  {
    name: "02-Prompt-Workflows/",
    desc: "Builder and reviewer prompts for after every AI coding change.",
  },
  {
    name: "03-Checklists/",
    desc: "Pre-commit, pre-push, pre-deploy, client handoff, and critical flows.",
  },
  {
    name: "04-Security-Guardrails/",
    desc: "Auth, API routes, env vars, Supabase, Stripe, and general security.",
  },
  {
    name: "05-Automated-Checks/",
    desc: "Commands, GitHub Actions, Gitleaks, Playwright, and k6 starters.",
  },
  {
    name: "99-BUYER-BONUS/",
    desc: "Prompt pack, scorecard, and one-page deploy checklist.",
  },
];

const fileTreeText = `VibeCode-Safety-Kit-v1/
├── QUICKSTART.md
├── START_HERE.md
├── 00-START-HERE/
│   ├── READ_THIS_FIRST.md
│   ├── 5_MINUTE_SETUP.md
│   ├── WHICH_FILE_DO_I_USE.md
│   └── COMMON_BEGINNER_MISTAKES.md
├── 00-Beginner-Mode/
│   ├── READ_ME_FIRST.md
│   ├── VIBECODE_SAFETY_RULES.md
│   ├── PROJECT_SAFETY_PROFILE.md
│   ├── DAILY_VIBECODE_PROMPT.md
│   ├── REVIEWER_PROMPT.md
│   └── PRE_SHIP_CHECKLIST.md
├── 01-Repo-Instructions/
│   ├── CURSOR_RULES.md
│   ├── WINDSURF_RULES.md
│   ├── CLAUDE.md
│   ├── CODEX_INSTRUCTIONS.md
│   └── AGENTS.md
├── 02-Prompt-Workflows/
│   ├── AFTER_EVERY_AI_CHANGE.md
│   ├── BUILDER_PROMPT.md
│   └── REVIEWER_PROMPT.md
├── 03-Checklists/
│   ├── PRE_COMMIT_CHECKLIST.md
│   ├── PRE_PUSH_CHECKLIST.md
│   ├── PRE_DEPLOY_CHECKLIST.md
│   ├── CLIENT_HANDOFF_CHECKLIST.md
│   └── CRITICAL_FLOWS_CHECKLIST.md
├── 04-Security-Guardrails/
│   ├── AUTH_CHECKLIST.md
│   ├── API_ROUTES_CHECKLIST.md
│   ├── ENVIRONMENT_VARIABLES_CHECKLIST.md
│   ├── SECURITY_GUARDRAILS.md
│   ├── SUPABASE_CHECKLIST.md
│   └── STRIPE_BILLING_CHECKLIST.md
├── 05-Automated-Checks/
│   ├── COMMANDS_TO_RUN.md
│   ├── GITLEAKS_SETUP.md
│   ├── GITHUB_ACTIONS_STARTER.md
│   ├── PLAYWRIGHT_SMOKE_TEST.md
│   └── K6_SMOKE_TEST.md
├── 06-Examples/
│   ├── SIMPLE_LANDING_PAGE_EXAMPLE.md
│   ├── SAAS_DASHBOARD_EXAMPLE.md
│   └── NEXTJS_SUPABASE_EXAMPLE.md
├── 07-Open-Safety-Patterns/
│   ├── AGENTS_MD_PATTERN.md
│   ├── AI_AGENT_RULES_FOR_BEGINNERS.md
│   ├── PRE_DEPLOY_RISK_MAP.md
│   ├── SECRET_SCANNING_WORKFLOW.md
│   └── SECURE_CODING_REVIEW_QUESTIONS.md
└── 99-BUYER-BONUS/
    ├── BEFORE_YOU_DEPLOY_ONE_PAGE_CHECKLIST.md
    ├── COPY_PASTE_PROMPT_PACK.md
    └── VIBECODE_REVIEW_SCORECARD.md`;

const insideCards = [
  {
    t: "Start Here Guides",
    b: "Read-first docs that explain the 5-minute setup and which file to use.",
    list: [
      "QUICKSTART.md",
      "READ_THIS_FIRST.md",
      "5_MINUTE_SETUP.md",
      "WHICH_FILE_DO_I_USE.md",
    ],
  },
  {
    t: "Beginner Mode",
    b: "The fastest path for new AI builders: copy three files, paste one prompt, and review before shipping.",
    list: [
      "VIBECODE_SAFETY_RULES.md",
      "PROJECT_SAFETY_PROFILE.md",
      "DAILY_VIBECODE_PROMPT.md",
      "REVIEWER_PROMPT.md",
      "PRE_SHIP_CHECKLIST.md",
    ],
  },
  {
    t: "Repo Instruction Templates",
    b: "Persistent project rules for AI coding tools so they stop treating every edit like an isolated file.",
    list: [
      "AGENTS.md",
      "CLAUDE.md",
      "CODEX_INSTRUCTIONS.md",
      "CURSOR_RULES.md",
      "WINDSURF_RULES.md",
    ],
  },
  {
    t: "Prompt Workflows",
    b: "Builder and reviewer prompts for checking AI-generated changes before commit, push, or deploy.",
    list: [
      "AFTER_EVERY_AI_CHANGE.md",
      "BUILDER_PROMPT.md",
      "REVIEWER_PROMPT.md",
      "PASS / WARNING / BLOCKED verdicts",
    ],
  },
  {
    t: "Checklists",
    b: "Simple human checklists for the moments before commit, push, deploy, client handoff, or critical flow testing.",
    list: [
      "PRE_COMMIT_CHECKLIST.md",
      "PRE_PUSH_CHECKLIST.md",
      "PRE_DEPLOY_CHECKLIST.md",
      "CLIENT_HANDOFF_CHECKLIST.md",
      "CRITICAL_FLOWS_CHECKLIST.md",
    ],
  },
  {
    t: "Core Guardrails",
    b: "Security, automated checks, examples, and open safety patterns you can add as the project matures.",
    list: [
      "04-Security-Guardrails/",
      "05-Automated-Checks/",
      "06-Examples/",
      "07-Open-Safety-Patterns/",
      "99-BUYER-BONUS/",
    ],
  },
];

const riskZones = [
  {
    t: "Exposed secrets",
    b: "API keys, tokens, webhook secrets, and service keys should never end up in your repo.",
  },
  {
    t: "Public env mistakes",
    b: "Server-only values should not be moved into browser-exposed variables.",
  },
  {
    t: "Broken auth",
    b: "AI can accidentally weaken login, protected routes, sessions, or user access boundaries.",
  },
  {
    t: "Billing regressions",
    b: "Checkout, success pages, webhooks, and test/live keys need extra review.",
  },
  {
    t: "Supabase policy drift",
    b: "Tables, storage, and RLS assumptions need to be checked before shipping.",
  },
  {
    t: "Dependency drift",
    b: "AI may add packages that work locally but create supply-chain or build risks.",
  },
  {
    t: "Preview smoke failures",
    b: "A branch can look fine in code but fail in a real preview flow.",
  },
  {
    t: "Instruction drift",
    b: "Without repo rules, agents repeat the same mistakes across sessions.",
  },
];

const pricingIncludes = [
  "Beginner Mode setup",
  "Daily VibeCode Prompt",
  "Reviewer Prompt",
  "Project Safety Profile",
  "Pre-Ship Checklist",
  "Repo instruction templates",
  "Security guardrail checklists",
  "Gitleaks / GitHub Actions / Playwright / k6 starter docs",
  "Success page and setup guidance",
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
    q: "Why is it only $29.99?",
    a: "This is launch pricing for the beginner-friendly version. The goal is to make the safety workflow easy to buy and easy to try. Future Core or Team versions may include deeper automation or setup support.",
  },
  {
    q: "Is this just a prompt pack?",
    a: "No. It includes prompts, repo rules, checklists, project-profile templates, and starter docs for stronger checks like Gitleaks, GitHub Actions, Playwright, and k6.",
  },
  {
    q: "Does this run the checks for me?",
    a: "No. The first version is a digital kit, not a hosted dashboard. It gives you the files, prompts, and setup guides to add the workflow to your repo.",
  },
  {
    q: "Is this only for Next.js, Supabase, Stripe, GitHub, or Vercel?",
    a: "No. The workflow is tool-agnostic, but many examples are written around common AI-built app stacks like Next.js, Supabase, Stripe, GitHub, and Vercel.",
  },
  {
    q: "What does PASS / PASS WITH WARNINGS / BLOCKED mean?",
    a: "PASS means the change looks safe to commit based on the review. PASS WITH WARNINGS means you can proceed carefully but should track follow-ups. BLOCKED means fix the issue before commit, push, or deploy.",
  },
  {
    q: "Will it guarantee my app is secure?",
    a: "No. No prompt or checklist can guarantee that. The kit helps reduce risk and improve your review workflow, but it is not a replacement for professional engineering, QA, or security review.",
  },
  {
    q: "Does this replace a developer?",
    a: "No. VibeCode Safety Kit does not replace a senior developer, QA process, or security audit. It gives AI-assisted builders a practical guardrail system for reviewing AI-generated changes before commit, push, or deploy.",
  },
  {
    q: "Does it work with Claude, Codex, Cursor, Windsurf, and Copilot?",
    a: "Yes. The kit is tool-agnostic. It is built around prompts, repo instruction files, checklists, and starter docs that work with most AI coding workflows.",
  },
  {
    q: "Is this a subscription?",
    a: "No. This is a one-time digital purchase at $29.99. No subscription. No locked dashboard.",
  },
  {
    q: "Can I use it with an existing app?",
    a: "Yes. The kit is designed to be copied into an existing repo. You add the templates, customize them to your app, and start using the review workflow after each AI coding change.",
  },
  {
    q: "Do I need an account to buy the kit?",
    a: "No. For launch, you can buy through Stripe without creating an account. Access instructions are sent to the email used at checkout.",
  },
  {
    q: "Can I sign in with Google?",
    a: "Google sign-in is planned for account-based access, but the launch version does not require an account. You can purchase the kit through Stripe and receive access instructions by email.",
  },
  {
    q: "Are you affiliated with Claude, Cursor, OpenAI, GitHub, Lovable, Bolt, Replit, or Vercel?",
    a: "No. Tool names are shown only to explain compatibility. VibeCode Safety Kit is independent and is not affiliated with or endorsed by those companies.",
  },
  {
    q: "Are the testimonials real?",
    a: "Not yet. The reactions shown on this page are placeholder/example quotes used for product positioning. They are not verified customer reviews. Real buyer testimonials will be added after launch.",
  },
];

/* ---------- helper components ---------- */

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

/* ---------- page ---------- */

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
              FOR BEGINNER VIBE CODERS AND AI-ASSISTED FOUNDERS
            </span>
            <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Ship faster <span className="violet-text">without shipping blind.</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-gray-300">
              VibeCode Safety Kit gives you a copy-paste safety workflow for
              AI-built apps — repo rules, review prompts, checklists, and
              pre-ship guardrails that help catch risky AI-generated changes
              before you commit, push, or deploy.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Make AI check the AI for broken auth, exposed secrets, env
              mistakes, billing regressions, schema drift, and disconnected
              code changes.
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
              One-time purchase. No subscription. Beginner-friendly setup.
            </p>
            <p className="mt-2 text-xs text-violet-300">
              Copy 3 files. Paste 1 prompt. Don&apos;t ship until it passes.
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

      {/* COMPATIBLE AI TOOLS */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Eyebrow>COMPATIBLE WITH YOUR AI CODING WORKFLOW</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Works with the AI coding tools you already use.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-400">
            Use the kit with repo rules, prompts, and review workflows
            across popular AI-assisted coding tools.
          </p>

          <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-2.5">
            {[
              "Claude",
              "Codex",
              "Cursor",
              "Windsurf",
              "GitHub Copilot",
              "Lovable",
              "Bolt",
              "Replit",
              "v0",
            ].map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-white/[0.03] px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-violet-400/40 hover:bg-violet-500/10"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                {t}
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-gray-500">
            Tool names are shown for compatibility context only. VibeCode
            Safety Kit is independent and is not affiliated with or
            endorsed by these companies.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>THE HIDDEN RISK OF VIBE CODING</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            The problem isn&apos;t writing more code.{" "}
            <span className="gradient-text">
              It&apos;s knowing what AI quietly broke.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-gray-400">
            AI coding tools can build fast, but they can also create
            invisible risk faster than a beginner can spot it. A page may
            load, while auth, billing, environment variables, database
            rules, or checkout flows are already broken underneath.
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
            A copy-paste safety workflow for{" "}
            <span className="violet-text">shipping with AI.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-gray-400">
            VibeCode Safety Kit gives you a simple workflow you can run
            after every AI coding prompt. Instead of trusting the first
            answer, you use a second AI review process, structured repo
            instructions, and pre-deploy checks to catch problems before
            they become production issues.
          </p>
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-violet-400/20 bg-violet-500/[0.05] p-5 text-center text-sm text-violet-200">
            A working page is not the same as a safe release.
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
            The workflow is simple enough to use today.
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

      {/* PREVIEW WHAT'S INSIDE — file tree */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>PREVIEW WHAT&apos;S INSIDE</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Preview what&apos;s inside.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
            Start with Beginner Mode. Add Core Guardrails as your project
            gets more serious.
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
{fileTreeText}
              </pre>
            </div>

            <ul className="grid grid-cols-1 gap-2.5">
              {kitFiles.map((f) => (
                <li key={f.name} className="glass flex items-start gap-3 rounded-xl p-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/30">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
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
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="whats-inside" className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>INCLUDED IN THE KIT</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            A copy-paste safety system for AI-built apps.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-gray-400">
            Designed for beginner vibe coders first, with stronger
            guardrails for Next.js, Supabase, Stripe, GitHub, and
            Vercel-style projects.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insideCards.map((c) => (
              <div key={c.t} className="glass flex flex-col rounded-2xl p-6">
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

          <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-gray-500">
            Built from practical AI coding workflow patterns and common
            secure-coding review principles, simplified for beginner vibe
            coders. Not affiliated with or endorsed by any AI coding tool,
            hosting platform, payment provider, or security organization.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL-STYLE REACTIONS (PLACEHOLDER) */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>BUILT FOR THE WAY AI BUILDERS ACTUALLY SHIP</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Designed for the moment right before you push.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
            VibeCode Safety Kit is built around the real anxiety of
            AI-assisted development:{" "}
            <span className="text-violet-200">
              &ldquo;It works&hellip; but what did it quietly break?&rdquo;
            </span>
          </p>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                label: "Example founder reaction",
                quote:
                  "This is exactly what I needed after using AI to build fast — a simple way to slow down for five minutes before I ship something risky.",
                who: "Solo SaaS founder",
              },
              {
                label: "Example vibe coder reaction",
                quote:
                  "I don't need another complicated dev tool. I need a repeatable prompt and checklist that tells me what to check before I push.",
                who: "AI-assisted builder",
              },
              {
                label: "Example agency reaction",
                quote:
                  "The PASS / WARNING / BLOCKED system makes it easier to review AI-built changes before handing work to a client.",
                who: "Small studio operator",
              },
            ].map((t) => (
              <figure
                key={t.who}
                className="glass-strong relative flex flex-col rounded-2xl p-6 shadow-glow"
              >
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                  {t.label}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="mt-5 h-6 w-6 text-violet-400/60"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-7-2-7-7V7Zm10 0h4v4h-3c0 2 1 3 3 3v3c-4 0-7-2-7-7V7Z" />
                </svg>
                <blockquote className="mt-3 flex-1 text-base leading-relaxed text-gray-100">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm text-gray-400">
                  &mdash; {t.who}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-gray-500">
            Placeholder reactions shown for product positioning. Real buyer
            testimonials will be added after launch.
          </p>
        </div>
      </section>

      {/* HIGH-RISK ZONES */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>HIGH-RISK ZONES</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            The kit focuses on the mistakes that hurt founders most.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {riskZones.map((r) => (
              <div key={r.t} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-400/10 text-rose-300 ring-1 ring-rose-400/30">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2 2 21h20L12 2Z" />
                      <path d="M12 9v5" />
                      <path d="M12 18h.01" />
                    </svg>
                  </span>
                  {r.t}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {r.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEGINNER vs CORE UPGRADE PATH */}
      <section
        id="beginner-mode"
        className="relative border-t border-white/5 bg-gradient-to-b from-transparent via-violet-500/[0.04] to-transparent"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>BEGINNER MODE &amp; CORE GUARDRAILS</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Start simple. <span className="violet-text">Add stronger guardrails when you&apos;re ready.</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="glass-strong relative rounded-2xl p-7 shadow-glow">
              <div className="flex items-center justify-between">
                <span className="pill">
                  <span className="pill-dot" />
                  BEGINNER MODE
                </span>
                <span className="text-xs text-violet-300">Included</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                For builders who want the fastest path.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                Copy the safety rules into your repo, fill out your project
                profile, paste the Daily VibeCode Prompt after AI edits
                code, and don&apos;t ship until the review passes.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "VIBECODE_SAFETY_RULES.md",
                  "PROJECT_SAFETY_PROFILE.md",
                  "DAILY_VIBECODE_PROMPT.md",
                  "REVIEWER_PROMPT.md",
                  "PRE_SHIP_CHECKLIST.md",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm text-gray-200"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-0.5 h-4 w-4 flex-none text-violet-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    <span className="font-mono">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass relative rounded-2xl p-7">
              <div className="flex items-center justify-between">
                <span className="pill">
                  <span className="pill-dot" />
                  CORE GUARDRAILS
                </span>
                <span className="text-xs text-gray-500">
                  Included as starter docs / advanced setup
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                For builders who want a stronger workflow.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                Add repo instruction files, secret scanning, CI checks,
                smoke tests, and release/rollback checklists as your
                project grows.
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  "AGENTS.md and CLAUDE.md",
                  "Cursor / Windsurf / Copilot rules",
                  "Gitleaks setup",
                  "GitHub Actions starter",
                  "Playwright + k6 smoke tests",
                  "Release and rollback checklists",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-xs text-gray-300"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-violet-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[11px] leading-relaxed text-gray-500">
                These are included as templates, prompts, and starter docs.
                The site does not automatically run these tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USE IT IN 5 MINUTES */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>BEGINNER-FRIENDLY SETUP</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Use it in <span className="violet-text">5 minutes.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
            VibeCode Safety Kit is designed so beginner vibe coders can
            start simple. Copy the safety files into your repo, fill out
            your project profile, paste the daily prompt after AI edits
            code, and don&apos;t ship until the review passes.
          </p>

          <ol className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              "Copy the safety rules",
              "Fill out your project profile",
              "Build with your AI coding tool",
              "Paste the daily review prompt",
              "Ship only when it passes",
            ].map((s, i) => (
              <li key={s} className="glass relative rounded-2xl p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violetglow-500 to-violetglow-700 font-semibold text-white shadow-glow">
                  {i + 1}
                </div>
                <div className="mt-4 text-base font-semibold text-white">
                  {s}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex justify-center">
            <BuyLink className="btn-primary">
              <CartIcon />
              Get the Kit for $29.99
            </BuyLink>
          </div>
        </div>
      </section>

      {/* DAILY PROMPT PREVIEW */}
      <section className="relative border-t border-white/5 bg-gradient-to-b from-transparent via-violet-500/[0.04] to-transparent">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Eyebrow>THE ONE PROMPT YOU USE EVERY TIME</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            The Daily VibeCode Prompt.
          </h2>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="glass-strong overflow-hidden rounded-2xl shadow-glow">
              <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-4 py-2.5 text-xs text-gray-400">
                <span className="font-mono">DAILY_VIBECODE_PROMPT.md</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 text-[11px] font-medium text-violet-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                  Included in the kit
                </span>
              </div>
              <div className="px-6 py-6 text-sm leading-relaxed text-gray-200 md:text-base">
                <p>
                  &ldquo;Use the VibeCode Safety workflow. Read the project
                  safety rules first. Make the smallest safe change. Do not
                  break auth, billing, database, environment variables, or
                  critical user flows. After editing, review the full
                  impact of the change and tell me if it is{" "}
                  <span className="text-emerald-300">PASS</span>,{" "}
                  <span className="text-amber-300">PASS WITH WARNINGS</span>,
                  or <span className="text-rose-300">BLOCKED</span> before I
                  commit.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="relative border-t border-white/5">
        <div
          aria-hidden
          className="orb left-1/2 top-10 h-[360px] w-[360px] -translate-x-1/2 bg-violet-700/25"
        />
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Eyebrow>POSITIONING</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Not another <span className="violet-text">dev tool subscription.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-gray-300">
            AI code review platforms are powerful, but many solo founders
            and vibe coders are not ready for a full PR review workflow
            yet.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-400">
            VibeCode Safety Kit is different. It is a one-time safety
            workflow you copy into your repo, use with your AI coding tool,
            and run before every commit, push, or deploy. Use it before you
            need a full engineering team.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-violet-200">
            Most public checklists are written for developers. VibeCode
            Safety Kit turns practical safety patterns into copy/paste
            prompts and simple pre-ship questions for AI-assisted builders.
          </p>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base text-gray-300 md:text-lg">
            Most AI coding tools help you{" "}
            <span className="text-white">generate</span> code.
            <br className="hidden sm:block" /> VibeCode Safety Kit helps you{" "}
            <span className="violet-text">question it</span> before you ship
            it.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative border-t border-white/5">
        <div
          aria-hidden
          className="orb left-1/2 top-10 h-[360px] w-[360px] -translate-x-1/2 bg-violet-600/30"
        />
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>SIMPLE PRICING</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Launch Edition &mdash;{" "}
            <span className="violet-text">$29.99 one-time.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            Start with the beginner-friendly safety workflow and starter
            guardrails for AI-built projects. Built for vibe coders who
            want a simple review habit before commit, push, or deploy.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-violet-200">
            You do not need to be a senior engineer to use it.
          </p>

          <div className="mx-auto mt-14 max-w-2xl">
            <div className="glass-strong relative rounded-3xl p-8 shadow-glow-lg">
              <div className="absolute inset-x-0 -top-px mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
              <div className="flex items-center justify-center">
                <span className="pill">
                  <SettingsIcon />
                  LAUNCH EDITION &mdash; ONE-TIME PURCHASE
                </span>
              </div>

              <div className="mt-6 text-center">
                <div className="text-6xl font-semibold text-white">$29.99</div>
                <div className="mt-1 text-violet-300">One-time purchase</div>
                <div className="mt-1 text-sm text-gray-400">
                  Pay once. Use forever.
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-gray-400">
                Early launch pricing for the beginner-friendly version.
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
                Early launch pricing. One-time purchase. No subscription.
              </p>
              <p className="mt-2 text-center text-[11px] text-gray-500">
                Core and Team versions may come later.
              </p>

              <p className="mt-4 text-center text-xs leading-relaxed text-gray-500">
                This is a digital product. All sales are final.{" "}
                <a href="/refund-policy" className="underline hover:text-gray-400">Refund policy</a>.
              </p>

              <p className="mt-4 text-center text-[11px] leading-relaxed text-gray-500">
                Helps reduce risk. Does not guarantee secure, bug-free, or
                production-ready software. Not a replacement for a senior
                developer, QA, or a professional security audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AFTER PURCHASE */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Eyebrow>AFTER YOU BUY</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            What happens after purchase?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
            After purchase, you&apos;ll receive access to the VibeCode
            Safety Kit files and setup instructions. Start with the
            5-minute setup, copy the beginner safety files into your repo,
            then use the Daily VibeCode Prompt after every AI coding change.
          </p>

          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "No account required for v1",
              "No subscription",
              "No hosted dashboard",
              "Works with your existing AI coding workflow",
              "Use it with new or existing projects",
            ].map((b) => (
              <CheckBullet key={b}>{b}</CheckBullet>
            ))}
          </ul>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-violet-200">
            No account required for launch. Checkout uses Stripe, and
            access instructions are sent to the email used at purchase.
          </p>
        </div>
      </section>

      {/* DIGITAL PRODUCT NOTE */}
      <section className="relative border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="glass-strong rounded-3xl p-8 text-center shadow-glow">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-400/15 text-violet-300 ring-1 ring-violet-400/30">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Plain Markdown. Use it today.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-300">
              Every file is plain Markdown — no app to install, no account to
              create. Open QUICKSTART.md and you&apos;re reviewing AI code in under
              5 minutes.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-xs text-gray-500">
              This is a digital product. All sales are final. The kit helps
              reduce risk but does not guarantee secure or bug-free software.
              See our{" "}
              <a href="/refund-policy" className="underline hover:text-gray-400">refund policy</a>.
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
            A missed environment variable, broken auth flow, exposed
            secret, bad database change, or failed checkout flow can waste
            hours or damage trust. VibeCode Safety Kit gives you a
            repeatable way to slow down for the right five minutes before
            you ship.
          </p>
          <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
            {valueBullets.map((b) => (
              <CheckBullet key={b}>{b}</CheckBullet>
            ))}
          </ul>
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
                  <CheckBullet key={b} tone="rose">{b}</CheckBullet>
                ))}
              </ul>
            </div>
            <div className="glass-strong rounded-2xl p-6 shadow-glow">
              <div className="text-xs font-semibold uppercase tracking-wider text-violet-300">
                With VibeCode Safety Kit
              </div>
              <ul className="mt-5 space-y-3">
                {afterBullets.map((b) => (
                  <CheckBullet key={b} tone="emerald">{b}</CheckBullet>
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
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-gray-500">
            Built from practical AI coding workflow patterns and common
            secure-coding review principles, simplified for beginner vibe
            coders. Not affiliated with or endorsed by any AI coding tool,
            hosting platform, payment provider, or security organization.
          </p>
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

      {/* CONTACT */}
      <section
        id="contact"
        className="relative border-t border-white/5 bg-gradient-to-b from-transparent via-violet-500/[0.04] to-transparent"
      >
        <div
          aria-hidden
          className="orb right-[-180px] top-20 h-[420px] w-[420px] bg-violet-700/25"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div>
            <span className="pill">
              <span className="pill-dot" />
              Questions before you buy?
            </span>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Ask about <span className="violet-text">the kit.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-gray-300">
              Not sure if VibeCode Safety Kit fits your workflow? Send a quick
              message and I&apos;ll help you figure out whether it makes sense
              for your project.
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-5 shadow-glow md:p-7">
            <ContactForm />
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
            Ship faster <span className="violet-text">without shipping blind.</span>
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

/* ---------- icons ---------- */

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
