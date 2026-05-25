import Link from "next/link";
import { BuyLink } from "@/components/BuyLink";
import { EmailConsentCheckbox } from "@/components/EmailConsentCheckbox";
import { ContactForm } from "@/components/ContactForm";
import { LogoTicker } from "@/components/LogoTicker";
import { ReviewWorkflowCards } from "@/components/ReviewWorkflowCards";
import { YEARLY_CHECKOUT_LINK } from "@/lib/checkout";

/* ---------- data ---------- */

const steps = [
  {
    n: "1",
    t: "Audit your repo",
    b: "Find risky auth, checkout, env var, API, database, and deploy issues before you keep building.",
  },
  {
    n: "2",
    t: "Add guardrails",
    b: "Drop the project profile, repo rules, and daily review prompt into your workflow.",
  },
  {
    n: "3",
    t: "Review every AI change",
    b: "Use PASS / WARNING / BLOCKED before commit, push, or deploy.",
  },
];

const statuses = [
  { l: "PASS", b: "No blocking issue found.", dot: "bg-emerald-400" },
  { l: "WARNING", b: "Review before shipping.", dot: "bg-[#F59E0B]" },
  { l: "BLOCKED", b: "Fix before deploy.", dot: "bg-rose-400" },
];

const setupSteps = [
  {
    n: "1",
    t: "Download after purchase",
    b: "Get the current VibeCode Safety Member Kit instantly after checkout.",
  },
  {
    n: "2",
    t: "Add it to your AI tool",
    b: "Use the included instructions for Claude, Codex, Cursor, Windsurf, ChatGPT, or similar tools.",
  },
  {
    n: "3",
    t: "Run your first repo audit",
    b: "Check auth, env vars, checkout, APIs, database rules, dependencies, and deploy readiness.",
  },
  {
    n: "4",
    t: "Review every AI change",
    b: "Use PASS / WARNING / BLOCKED before commit, push, or deploy.",
  },
  {
    n: "5",
    t: "Get weekly and monthly updates",
    b: "Members receive quick Weekly Safety Notes and larger Monthly Safety Drops with new prompts, checklists, and guardrails.",
  },
];

const insideCards = [
  {
    t: "Heavy-Duty Repo Audit",
    b: "Run a structured AI-assisted audit on your current repo to spot auth gaps, checkout risks, exposed config, API issues, and deployment problems.",
  },
  {
    t: "VibeCode Auditor Agent",
    b: "Prompt and instruction files that help Claude, Codex, Cursor, Windsurf, or ChatGPT act as your repo safety reviewer.",
  },
  {
    t: "Daily AI Change Reviews",
    b: "Use short prompts after AI edits code so risky changes get checked before commit, push, or deploy.",
  },
  {
    t: "Weekly Safety Notes",
    b: "Get quick weekly prompts and checklists for the mistakes AI-assisted builders commonly miss.",
  },
  {
    t: "Monthly Safety Drops",
    b: "Get one larger monthly audit pack with themed prompts, scorecards, checklists, and guardrails.",
  },
  {
    t: "Launch Guardrails",
    b: "Use pre-commit, pre-push, pre-deploy, rollback, and handoff checklists.",
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
  "Heavy-duty repo audit workflow",
  "VibeCode Auditor Agent files",
  "Daily AI Change Reviews",
  "Weekly Safety Notes",
  "Monthly Safety Drops",
  "Repo instruction templates",
  "Launch guardrails and checklists",
  "Ongoing prompt and checklist updates",
];

const faqs = [
  {
    q: "Is this a one-time kit?",
    a: "No. VibeCode Safety is a subscription membership so members can receive ongoing audit workflows, weekly notes, monthly drops, prompt updates, and checklists.",
  },
  {
    q: "Is there a free trial?",
    a: "Not right now. VibeCode Safety includes downloadable prompts, templates, and member files, so access starts with a paid membership. You can preview the free checklist before joining and cancel anytime.",
  },
  {
    q: "Do you personally audit my repo?",
    a: "Not on the $6.99/month plan. The membership gives you a heavy-duty AI-assisted repo audit workflow you can run with your coding tools. Manual audits may become a separate paid service later.",
  },
  {
    q: "Can I pay yearly?",
    a: "Yes. Monthly is $6.99/month, and yearly billing is $59/year.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Billing is handled through Stripe. Until the automated customer portal is fully connected, cancellation can be handled through support.",
  },
  {
    q: "Does this guarantee my app is secure?",
    a: "No. It helps reduce risk and improve review habits, but it does not replace professional engineering, QA, or a security audit.",
  },
  {
    q: "What do I get as a member?",
    a: "You get the current member kit, heavy-duty repo audit workflow, VibeCode Auditor Agent files, daily AI change review prompts, Weekly Safety Notes, Monthly Safety Drops, repo instruction templates, checklists, and ongoing updates.",
  },
  {
    q: "What are Weekly Safety Notes?",
    a: "Short weekly updates with one focused risk, a quick checklist, and a copy-paste prompt you can use in your AI coding workflow.",
  },
  {
    q: "What are Monthly Safety Drops?",
    a: "Larger themed audit packs released monthly. Each drop includes prompts, checklists, scorecards, and guardrails for a specific risk area like Stripe, Supabase, auth, env vars, or deployment readiness.",
  },
  {
    q: "Do I need to use every update?",
    a: "No. Start with the heavy-duty repo audit and daily guardrails. Weekly notes and monthly drops are there when that topic matters to your project.",
  },
  {
    q: "Does it work with Cursor, Claude, Codex, and Windsurf?",
    a: "Yes. The kit is tool-agnostic. It includes specific instruction templates for Claude, Codex, Cursor, Windsurf, and GitHub Copilot, and works with any AI coding tool.",
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
        aria-hidden
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
      <section className="hero-section relative overflow-hidden">
        {/* TODO: Compress this cinematic background into a smaller hero MP4/WebM before high-traffic launch. */}
        <video
          className="hero-bg-video pointer-events-none absolute inset-0 h-full w-full object-cover opacity-75"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source
            src="/video/Seedance%202_0%20-%20Animate%20this%20abstract%20black-and-purple%20GrowthDrop%20website%20background%20into%20an%20ultra-sl.mp4"
            type="video/mp4"
          />
        </video>
        <div
          aria-hidden
          className="hero-video-color-match pointer-events-none absolute inset-0"
        />
        <div
          aria-hidden
          className="hero-left-readability pointer-events-none absolute inset-0"
        />
        {/* Animated swirl orbs */}
        <div aria-hidden className="hero-swirl hero-swirl-1 -left-24 top-0" />
        <div aria-hidden className="hero-swirl hero-swirl-2 right-0 top-20" />
        <div aria-hidden className="hero-swirl hero-swirl-warm right-8 bottom-12" />
        <div aria-hidden className="hero-swirl hero-swirl-ambient left-1/4 bottom-0" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-12 lg:grid-cols-[0.88fr,1.12fr] lg:gap-16 lg:pb-28 lg:pt-16">
          <div>
            <span className="pill mb-6 inline-flex">
              <span className="pill-dot" />
              Repo audit &middot; Weekly notes &middot; Monthly drops.
            </span>
            <h1 className="text-balance text-6xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              Audit your repo.
              <br />
              <span className="violet-text">
                Guard every
                <br />
                AI change.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-gray-300 md:text-xl md:leading-9">
              VibeCode Safety gives AI-assisted builders a heavy-duty repo
              audit workflow, daily AI change reviews, Weekly Safety Notes,
              and Monthly Safety Drops so you can catch risky code before
              you ship.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <BuyLink className="btn-primary px-7 py-4 text-base">
                Start for $6.99/month
              </BuyLink>
              <a href="#how-it-works" className="btn-secondary px-7 py-4 text-base">
                See how it works
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Monthly or yearly billing. Cancel anytime.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Free checklist available before joining.{" "}
              <Link
                href="/pre-ship-checklist"
                className="font-medium text-violet-300 underline decoration-violet-300/40 underline-offset-4 transition hover:text-violet-200"
              >
                Get the free checklist
              </Link>
              .
            </p>

            <p className="mt-6 flex items-center gap-3 text-sm text-gray-400">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-violet-300/50 text-violet-300">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </span>
              Works with Claude, Codex, Cursor, Windsurf, Copilot &amp; more.
            </p>
          </div>

          <div className="relative lg:-ml-10 lg:-translate-y-2 lg:pl-0 xl:-ml-16">
            <div className="hero-product-visual relative mx-auto w-full max-w-[900px] origin-center lg:scale-[1.06] xl:scale-[1.09]">
              <div
                aria-hidden
                className="hero-product-glow-pulse pointer-events-none absolute inset-[-16%] -z-20 rounded-[80px] bg-[radial-gradient(circle_at_58%_52%,rgba(139,92,246,0.32),rgba(72,57,108,0.34)_34%,rgba(42,23,75,0.22)_56%,transparent_78%)] blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-[-26%] -z-30 rounded-[100px] bg-[radial-gradient(circle_at_60%_55%,rgba(28,15,53,0.58),rgba(11,6,22,0.42)_48%,rgba(5,3,11,0.22)_72%,transparent_88%)] blur-2xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-[6%] left-[10%] right-[8%] -z-10 h-[24%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.24),rgba(42,23,75,0.22)_44%,transparent_76%)] blur-3xl"
              />
              <div className="hero-product-image-wrap relative w-full">
                <img
                  src="/images/vibey.png"
                  alt="VibeCode Safety report preview"
                  className="hero-product-image relative z-10 w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoTicker />

      {/* PRODUCT VIDEO */}
      <section id="video" className="relative border-t border-white/5 bg-gradient-to-b from-violet-500/[0.06] via-transparent to-transparent">
        <div
          aria-hidden
          className="orb left-1/2 top-10 h-[360px] w-[360px] -translate-x-1/2 bg-violet-700/25"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Eyebrow>SEE THE WORKFLOW</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-3xl font-semibold tracking-tight text-white md:text-5xl">
            See the workflow.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-400 md:text-base">
            A quick overview of how VibeCode Safety helps you audit your repo
            and review AI-generated changes before commit, push, or deploy.
          </p>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="relative rounded-3xl border border-violet-300/20 bg-white/[0.04] p-2 shadow-[0_0_80px_rgba(139,92,246,0.18)] backdrop-blur-xl sm:p-3">
              <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
                <video
                  src="/video/video-final.mp4"
                  controls
                  preload="metadata"
                  playsInline
                  className="h-full w-full bg-black"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-gray-500">
              Press play to hear the overview.
            </p>
          </div>
        </div>
      </section>

      {/* COMPATIBLE AI TOOLS */}
      <section className="light-section">
        <div className="relative mx-auto max-w-7xl px-6 py-12">
          <h2 className="light-heading mx-auto max-w-3xl text-center text-xl font-semibold tracking-tight md:text-2xl">
            Works with the AI coding tools you already use.
          </h2>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-2">
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
                className="light-tool-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                {t}
              </li>
            ))}
          </ul>
          <p className="light-muted mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed">
            Tool names are shown for compatibility context only. VibeCode
            Safety is independent and is not affiliated with or endorsed
            by these companies.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="workflow-section light-section">
        <div
          aria-hidden
          className="absolute left-1/2 top-28 h-[360px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.20),rgba(196,181,253,0.14)_42%,transparent_72%)] blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <h2 className="light-heading mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight md:text-5xl">
            How VibeCode Safety works.
          </h2>
          <p className="light-copy mx-auto mt-4 max-w-2xl text-center text-base leading-7 md:text-lg">
            Run a repo audit first, then use the daily review workflow every
            time AI changes your code.
          </p>

          <div className="relative mt-12">
            <div
              aria-hidden
              className="workflow-connector absolute left-[16%] right-[16%] top-[4.75rem] hidden h-px md:block"
            />
            <ol className="relative grid grid-cols-1 gap-5 md:grid-cols-3">
              {steps.map((s, index) => (
                <li key={s.n} className="workflow-card relative rounded-3xl p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] text-lg font-semibold text-white shadow-[0_0_32px_-8px_rgba(139,92,246,0.95)] ring-1 ring-white/50">
                      {s.n}
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C4B5FD]/45 bg-white/70 text-[#8B5CF6] shadow-[0_14px_34px_-24px_rgba(46,16,101,0.55)]">
                      <WorkflowIcon index={index} />
                    </div>
                  </div>
                  <div className="mt-6 text-lg font-semibold text-[#2E1065]">
                    {s.t}
                  </div>
                  <p className="light-copy mt-3 text-sm leading-7">{s.b}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm font-semibold text-[#2E1065]">
              Every review ends with a clear verdict.
            </p>
            <div className="verdict-strip mx-auto mt-4 grid max-w-4xl grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-3">
              {statuses.map((s, index) => (
                <div
                  key={s.l}
                  className={`px-5 py-4 text-left ${
                    index === 0
                      ? ""
                      : "border-t border-[#C4B5FD]/30 md:border-l md:border-t-0"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#2E1065]">
                    <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
                    {s.l}
                  </div>
                  <p className="mt-1.5 text-sm text-[#6D5A88]">{s.b}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <span className="text-sm font-medium text-[#6D5A88]">
              Ready to run your first repo audit?
            </span>
            <BuyLink className="btn-primary px-5 py-3 text-sm">
              Start for $6.99/month
            </BuyLink>
            <Link
              href="#whats-inside"
              className="text-sm font-medium text-[#6D28D9] underline decoration-[#8B5CF6]/35 underline-offset-4 transition hover:text-[#4C1D95]"
            >
              See what&apos;s inside
            </Link>
          </div>
        </div>
      </section>

      {/* SIMPLE SETUP */}
      <section className="relative border-t border-white/5 bg-gradient-to-b from-violet-500/[0.05] via-transparent to-transparent">
        <div
          aria-hidden
          className="orb right-[-180px] top-20 h-[420px] w-[420px] bg-violet-700/20"
        />
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Eyebrow>SIMPLE SETUP</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Start in <span className="violet-text">5 minutes.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-gray-300 md:text-lg">
            Download the member kit, drop the agent files into your AI coding
            workflow, and run your first repo audit before you keep building.
          </p>

          <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-5">
            {setupSteps.map((step) => (
              <li key={step.n} className="glass relative rounded-2xl p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-sm font-semibold text-violet-200 ring-1 ring-violet-300/30">
                  {step.n}
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {step.t}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {step.b}
                </p>
              </li>
            ))}
          </ol>

          <div className="glass-strong mx-auto mt-8 max-w-3xl rounded-2xl p-5 text-center shadow-glow">
            <p className="text-base font-semibold text-white">
              No new dashboard to learn.
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Start with the AI coding tool you already use. No GitHub
              connection required for v1.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="whats-inside" className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>WHAT YOU GET</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            A safety workflow that grows with your repo.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            Start with a heavy-duty repo audit, then guard every AI coding
            change as you build. Members get short weekly safety notes and one
            larger monthly Safety Drop with new audit prompts, checklists, and
            guardrails.
          </p>

          <ReviewWorkflowCards cards={insideCards} />

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-gray-500">
            Built from practical AI coding workflow patterns and common
            secure-coding review principles. Not affiliated with or endorsed by
            any AI coding tool, hosting platform, payment provider, or security
            organization.
          </p>
        </div>
      </section>

      {/* HIGH-RISK ZONES */}
      <section className="light-section">
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <Eyebrow>HIGH-RISK ZONES</Eyebrow>
          <h2 className="light-heading mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight md:text-5xl">
            The kit focuses on the mistakes that hurt founders most.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {riskZones.map((r) => (
              <div key={r.t} className="light-glass rounded-2xl p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#2E1065]">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#F59E0B]/10 text-[#F59E0B] ring-1 ring-[#F59E0B]/25">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2 2 21h20L12 2Z" />
                      <path d="M12 9v5" />
                      <path d="M12 18h.01" />
                    </svg>
                  </span>
                  {r.t}
                </div>
                <p className="light-copy mt-2 text-xs leading-relaxed">{r.b}</p>
              </div>
            ))}
          </div>
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
            Simple pricing for{" "}
            <span className="violet-text">AI-assisted builders.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            One subscription. Repo audit workflow, daily guardrails, Weekly
            Safety Notes + Monthly Safety Drops.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="glass-strong relative rounded-3xl p-8 shadow-glow-lg">
              <div className="absolute inset-x-0 -top-px mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
              <span className="pill">
                <SettingsIcon />
                MONTHLY
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                VibeCode Safety Monthly
              </h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-semibold text-white">$6.99</span>
                <span className="pb-2 text-sm text-violet-300">/month</span>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                Best for active builders. Cancel anytime.
              </p>
              <EmailConsentCheckbox />
              <BuyLink className="btn-primary mt-5 w-full text-base">
                <CartIcon />
                Start monthly
              </BuyLink>
            </div>

            <div className="glass-strong relative rounded-3xl p-8 shadow-glow-lg">
              <div className="absolute inset-x-0 -top-px mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
              <span className="pill">
                <SettingsIcon />
                BEST VALUE
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                VibeCode Safety Yearly
              </h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-semibold text-white">$59</span>
                <span className="pb-2 text-sm text-violet-300">/year</span>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                Best value. Save compared to monthly billing.
              </p>
              <EmailConsentCheckbox />
              <BuyLink href={YEARLY_CHECKOUT_LINK} className="btn-primary mt-5 w-full text-base">
                <CartIcon />
                Start yearly
              </BuyLink>
            </div>
          </div>

          <div className="glass mx-auto mt-6 max-w-5xl rounded-2xl p-6">
            <p className="text-sm font-semibold text-white">Both plans include:</p>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {pricingIncludes.map((b) => (
                <CheckBullet key={b}>{b}</CheckBullet>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-gray-500">
              Helps reduce risk, but does not guarantee secure, bug-free, or
              production-ready software.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-gray-500">
              Have an invite code? Enter it at checkout.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-gray-500">
              Want a preview first?{" "}
              <Link href="/pre-ship-checklist" className="underline hover:text-gray-400">
                Get the free checklist
              </Link>
              .
            </p>
            <p className="mt-3 text-xs leading-relaxed text-gray-500">
              <a href="/refund-policy" className="underline hover:text-gray-400">
                Refund &amp; cancellation policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="light-section">
        <div className="relative mx-auto max-w-3xl px-6 py-24">
          <h2 className="light-heading text-center text-4xl font-semibold tracking-tight md:text-5xl">
            Questions vibe coders usually ask.
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="light-glass group rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-[#2E1065]">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-violet-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="light-copy mt-3 text-sm leading-relaxed">{f.a}</p>
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
              Questions about the subscription?
            </span>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Ask about <span className="violet-text">VibeCode Safety.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-gray-300">
              Not sure if VibeCode Safety fits your workflow? Send a quick
              message and I&apos;ll help you figure out whether the subscription
              makes sense for your project.
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
            Audit your repo.{" "}
            <span className="violet-text">Guard every AI change.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Start with the heavy-duty repo audit. Add the daily guardrails.
            Ship with fewer surprises.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BuyLink className="btn-primary">
              <CartIcon />
              Start for $6.99/month
            </BuyLink>
            <Link href="#whats-inside" className="btn-secondary">
              See What&apos;s Inside
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Monthly or yearly billing. Cancel anytime.
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

function WorkflowIcon({ index }: { index: number }) {
  const paths = [
    <>
      <path key="shield" d="M12 3 5 6v5c0 4.2 2.8 7.4 7 9 4.2-1.6 7-4.8 7-9V6l-7-3Z" />
      <path key="check" d="m9 12 2 2 4-5" />
    </>,
    <>
      <path key="rules-1" d="M6 7h12" />
      <path key="rules-2" d="M6 12h12" />
      <path key="rules-3" d="M6 17h7" />
    </>,
    <>
      <path key="loop-1" d="M7 7h10v10H7z" />
      <path key="loop-2" d="m9 12 2 2 4-5" />
    </>,
  ];

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[index] ?? paths[0]}
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
