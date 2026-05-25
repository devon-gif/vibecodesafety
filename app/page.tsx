import Link from "next/link";
import { BuyLink } from "@/components/BuyLink";
import { EmailConsentCheckbox } from "@/components/EmailConsentCheckbox";
import { ContactForm } from "@/components/ContactForm";
import { LogoTicker } from "@/components/LogoTicker";
import { YEARLY_CHECKOUT_LINK } from "@/lib/checkout";

/* ---------- data ---------- */

const steps = [
  {
    n: "1",
    t: "Audit your current repo",
    b: "Run the heavy-duty repo audit workflow to identify risky areas before you keep building.",
  },
  {
    n: "2",
    t: "Add the safety guardrails",
    b: "Copy the repo rules, project profile, and daily review prompt into your project.",
  },
  {
    n: "3",
    t: "Review every AI change",
    b: "Use PASS / WARNING / BLOCKED before commit, push, or deploy.",
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
    t: "Monthly Safety Drops",
    b: "Get new audit prompts, checklists, scorecards, and guardrails as the product evolves.",
  },
  {
    t: "Repo Rules",
    b: "Drop in Claude, Codex, Cursor, Windsurf, and Copilot instruction templates.",
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
  "VibeCode Auditor Agent",
  "Daily AI change review prompts",
  "Project safety profile",
  "Repo instruction templates",
  "Auth, billing, env var, API, Supabase, and Stripe checklists",
  "Monthly Safety Drops",
  "Ongoing prompt and checklist updates",
];

const faqs = [
  {
    q: "Is this a one-time kit?",
    a: "No. VibeCode Safety is a subscription membership so members can receive ongoing audit workflows, prompt updates, checklists, and monthly safety drops.",
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
    a: "You get the current member kit, heavy-duty repo audit workflow, VibeCode Auditor Agent files, daily AI change review prompts, repo instruction templates, checklists, monthly safety drops, and ongoing updates.",
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
      <section className="relative overflow-hidden">
        {/* TODO: Compress this cinematic background into a smaller hero MP4/WebM before high-traffic launch. */}
        <video
          className="hero-bg-video pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_76%_44%,rgba(72,57,108,0.34),transparent_34%),radial-gradient(circle_at_80%_58%,rgba(56,35,89,0.40),transparent_46%),radial-gradient(circle_at_62%_68%,rgba(42,23,75,0.42),transparent_50%),radial-gradient(circle_at_72%_22%,rgba(37,21,64,0.36),transparent_38%),linear-gradient(135deg,#05030B_0%,#0B0616_28%,#1C0F35_50%,#251540_68%,#382359_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(5,3,11,0.96)_0%,rgba(11,6,22,0.84)_34%,rgba(28,15,53,0.45)_64%,rgba(56,35,89,0.22)_100%),radial-gradient(circle_at_78%_42%,rgba(139,92,246,0.10),transparent_34%),linear-gradient(to_bottom,transparent_66%,#05030B_100%)]"
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
              Repo audit &middot; Daily guardrails &middot; Ongoing updates.
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
              audit workflow, daily AI change reviews, and monthly safety
              drops so you can catch risky code before you ship.
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

            <p className="mt-6 flex items-center gap-3 text-sm text-gray-400">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-violet-300/50 text-violet-300">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </span>
              Works with Claude, Codex, Cursor, Windsurf, Copilot &amp; more.
            </p>
          </div>

          <div className="relative lg:pl-0">
            <div className="hero-product-video-wrap relative mx-auto w-full max-w-[960px] origin-center lg:scale-[1.10] xl:scale-[1.16]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-[-18%] -z-20 rounded-[72px] bg-[radial-gradient(circle_at_58%_52%,rgba(72,57,108,0.50),rgba(56,35,89,0.36)_34%,rgba(42,23,75,0.24)_52%,transparent_76%)] blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-[-28%] -z-30 rounded-[90px] bg-[radial-gradient(circle_at_60%_55%,rgba(28,15,53,0.68),rgba(11,6,22,0.50)_48%,rgba(5,3,11,0.24)_70%,transparent_86%)] blur-2xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-[2%] left-[8%] right-[4%] -z-10 h-[28%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.32),rgba(42,23,75,0.30)_44%,rgba(28,15,53,0.18)_64%,transparent_82%)] blur-3xl"
              />
              <div className="hero-product-video-mask relative aspect-[16/10] w-full overflow-hidden">
                <video
                  className="h-full w-full object-contain opacity-95"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                >
                  <source src="/video/rightblockvideo.mp4" type="video/mp4" />
                </video>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_44%,rgba(28,15,53,0.22)_66%,rgba(11,6,22,0.55)_84%,rgba(5,3,11,0.72)_100%)]"
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
            See the workflow in 35 seconds.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-400 md:text-base">
            A quick overview of how VibeCode Safety helps you audit your repo
            and review AI-generated changes before commit, push, or deploy.
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
            Safety is independent and is not affiliated with or endorsed
            by these companies.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="light-section">
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <h2 className="light-heading mx-auto mt-5 max-w-3xl text-center text-4xl font-semibold tracking-tight md:text-5xl">
            How VibeCode Safety works.
          </h2>

          <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="light-glass relative rounded-2xl p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B5CF6] font-semibold text-white shadow-[0_0_24px_-6px_rgba(139,92,246,0.70)]">
                  {s.n}
                </div>
                <div className="mt-4 font-semibold text-[#2E1065]">{s.t}</div>
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
                <p className="mt-1.5 text-sm text-[#6D5A88]">{s.b}</p>
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
            A safety workflow that grows with your repo.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
            Start with a heavy-duty repo audit, then guard every AI coding
            change as you build.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
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
            One subscription. Repo audit workflow, daily guardrails, and
            ongoing updates.
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
              <p className="mt-3 text-sm text-gray-400">Best for active builders.</p>
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
