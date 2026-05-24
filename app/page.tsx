import Link from "next/link";
import { SafetyReport } from "@/components/SafetyReport";
import { BuyLink } from "@/components/BuyLink";
import { EmailConsentCheckbox } from "@/components/EmailConsentCheckbox";
import { ContactForm } from "@/components/ContactForm";

/* ---------- data ---------- */

const steps = [
  {
    n: "1",
    t: "Copy the safety files",
    b: "Add the rules and project profile to your repo.",
  },
  {
    n: "2",
    t: "Paste the daily prompt",
    b: "Use it after every AI coding change.",
  },
  {
    n: "3",
    t: "Ship only when it passes",
    b: "Follow PASS / WARNING / BLOCKED before commit, push, or deploy.",
  },
];

const statuses = [
  { l: "PASS", b: "No blocking issue found.", tone: "emerald" as const },
  { l: "WARNING", b: "Proceed carefully.", tone: "amber" as const },
  { l: "BLOCKED", b: "Fix before shipping.", tone: "rose" as const },
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
    t: "Beginner Mode",
    b: "3 files + 1 daily prompt. The fastest path to a safer AI workflow.",
  },
  {
    t: "Reviewer Prompts",
    b: "Structured AI review before commit, push, or deploy.",
  },
  {
    t: "Repo Rules",
    b: "Claude, Codex, Cursor, Windsurf, and Copilot instruction templates.",
  },
  {
    t: "Safety Checklists",
    b: "Auth, billing, env vars, API routes, Supabase, and Stripe.",
  },
  {
    t: "Automation Starters",
    b: "Gitleaks, GitHub Actions, Playwright, and k6 starter docs.",
  },
  {
    t: "Launch Support",
    b: "Pre-deploy, rollback, and client handoff checklists.",
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
  "Gitleaks / GitHub Actions / Playwright / k6 starters",
  "Setup guidance and QUICKSTART",
];

const faqs = [
  {
    q: "Does this replace a developer?",
    a: "No. VibeCode Safety Kit does not replace a senior developer, QA process, or security audit. It gives AI-assisted builders a practical guardrail system for reviewing AI-generated changes before commit, push, or deploy.",
  },
  {
    q: "Is this a subscription?",
    a: "No. This is a one-time digital purchase at $29.99. No subscription, no locked dashboard.",
  },
  {
    q: "What do I actually get?",
    a: "A ZIP of plain Markdown files: repo rules, prompts, checklists, and starter docs. Copy the Beginner Mode files into your repo, fill out your project profile, and start reviewing AI changes in under 5 minutes.",
  },
  {
    q: "Does it work with Cursor, Claude, Codex, and Windsurf?",
    a: "Yes. The kit is tool-agnostic. It includes specific instruction templates for Claude, Codex, Cursor, Windsurf, and GitHub Copilot, and works with any AI coding tool.",
  },
  {
    q: "Will it guarantee my app is secure?",
    a: "No. No prompt or checklist can guarantee that. The kit helps reduce risk and build a review habit, but is not a replacement for professional engineering, QA, or a security audit.",
  },
  {
    q: "I have an invite code. Where do I use it?",
    a: "Enter your invite code at checkout. If you received a special invite link, the code may already be applied.",
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
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_20%,rgba(124,58,237,0.26),transparent_46%),radial-gradient(ellipse_at_50%_110%,rgba(76,29,149,0.2),transparent_48%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,5,16,0)_0%,rgba(7,5,16,0.75)_100%)]"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-20 lg:grid-cols-[0.88fr,1.12fr] lg:gap-16 lg:pb-28 lg:pt-32">
          <div>
            <span className="pill mb-6 inline-flex">
              <span className="pill-dot" />
              Launch Edition — built for early AI-assisted builders.
            </span>
            <h1 className="text-balance text-6xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              Ship faster
              <br />
              <span className="violet-text">
                without
                <br />
                shipping blind.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-gray-300 md:text-xl md:leading-9">
              A beginner-friendly safety workflow for AI-built apps. Copy the
              files into your repo, paste the daily review prompt, and make AI
              check risky changes before you ship.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <BuyLink className="btn-primary px-7 py-4 text-base">
                Get the Kit for $29.99
              </BuyLink>
              <a href="#video" className="btn-secondary px-7 py-4 text-base">
                Watch 35-sec Overview
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              One-time purchase. No subscription.
            </p>

            <p className="mt-6 flex items-center gap-3 text-sm text-gray-400">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-violet-300/50 text-violet-300">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </span>
              Works with Claude, Codex, Cursor, Windsurf, Copilot &amp; more
            </p>
          </div>

          <div className="relative lg:pl-2">
            <SafetyReport />
          </div>
        </div>
      </section>

      {/* PRODUCT VIDEO */}
      <section id="video" className="relative border-t border-white/5 bg-gradient-to-b from-violet-500/[0.06] via-transparent to-transparent">
        <div
          aria-hidden
          className="orb left-1/2 top-10 h-[360px] w-[360px] -translate-x-1/2 bg-violet-700/25"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Eyebrow>SEE THE WORKFLOW</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-3xl font-semibold tracking-tight text-white md:text-5xl">
            See the workflow in 35 seconds.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-400 md:text-base">
            A quick overview of how VibeCode Safety Kit helps you review
            AI-generated changes before commit, push, or deploy.
          </p>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="relative rounded-3xl border border-violet-300/20 bg-white/[0.04] p-2 shadow-[0_0_80px_rgba(139,92,246,0.18)] backdrop-blur-xl sm:p-3">
              <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
                <video
                  src="/video/vibecode-safetyFINAL.mp4"
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
              Press play to hear the 35-second overview.
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
            Safety Kit is independent and is not affiliated with or endorsed
            by these companies.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="light-section">
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <Eyebrow>SIMPLE WORKFLOW</Eyebrow>
          <h2 className="light-heading mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight md:text-5xl">
            The workflow is simple enough to use today.
          </h2>

          <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="light-glass relative rounded-2xl p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violetglow-500 to-violetglow-700 font-semibold text-white shadow-glow">
                  {s.n}
                </div>
                <div className="mt-4 font-semibold text-purple-950">{s.t}</div>
                <p className="light-copy mt-2 text-sm leading-relaxed">{s.b}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
            {statuses.map((s) => (
              <div
                key={s.l}
                className={`light-glass rounded-xl border p-4 ${toneClass[s.tone]}`}
              >
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider">
                  <span className={`h-2 w-2 rounded-full ${toneDot[s.tone]}`} />
                  {s.l}
                </div>
                <p className="mt-1.5 text-sm text-purple-800">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="whats-inside" className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Eyebrow>WHAT YOU GET</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            What you get
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            Designed for beginner vibe coders first, with stronger guardrails
            for Next.js, Supabase, Stripe, GitHub, and Vercel-style projects.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insideCards.map((c) => (
              <div key={c.t} className="glass flex flex-col rounded-2xl p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300 ring-1 ring-violet-400/30">
                  <SparkIcon />
                </div>
                <h3 className="text-base font-semibold text-white">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{c.b}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-gray-500">
            Built from practical AI coding workflow patterns and common
            secure-coding review principles, simplified for beginner vibe
            coders. Not affiliated with or endorsed by any AI coding tool,
            hosting platform, payment provider, or security organization.
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
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-950">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-400/10 text-rose-500 ring-1 ring-rose-400/30">
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
            Launch Edition &mdash;{" "}
            <span className="violet-text">$29.99 one-time.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            A one-time digital kit for vibe coders and AI-assisted founders
            who want a simple review workflow before shipping AI-generated code.
          </p>

          <div className="mx-auto mt-12 max-w-2xl">
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
                <div className="mt-1 text-sm text-gray-400">Pay once. Use forever.</div>
              </div>

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
                One-time purchase. No subscription.
              </p>
              <p className="mt-2 text-center text-xs text-violet-200">
                Have an invite code? Enter it at checkout.
              </p>
              <p className="mt-4 text-center text-xs leading-relaxed text-gray-500">
                This is a digital product. All sales are final.{" "}
                <a href="/refund-policy" className="underline hover:text-gray-400">
                  Refund policy
                </a>
                .
              </p>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-gray-500">
                Helps reduce risk. Does not guarantee secure, bug-free, or
                production-ready software. Not a replacement for a senior
                developer, QA, or a professional security audit.
              </p>
            </div>
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
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-purple-950">
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
            Ship faster{" "}
            <span className="violet-text">without shipping blind.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Copy 3 files. Paste 1 prompt. Don&apos;t ship until the review
            passes.
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
