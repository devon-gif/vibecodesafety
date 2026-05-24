import type { Metadata } from "next";
import { BuyLink } from "@/components/BuyLink";
import { CopyChecklistButton } from "./CopyChecklistButton";

export const metadata: Metadata = {
  title: "Free Pre-Ship Checklist for AI-Generated Code - VibeCode Safety",
  description:
    "A free 10-point pre-ship checklist for reviewing AI-generated code before you commit, push, or deploy.",
};

const checklist = [
  "Did auth still work?",
  "Did protected routes stay protected?",
  "Did checkout still redirect?",
  "Did AI expose any env vars?",
  "Did it touch Supabase RLS?",
  "Did it change API validation?",
  "Did it add dependencies?",
  "Did the app still build?",
  "Did critical forms still submit?",
  "Did the Reviewer AI return PASS?",
];

const checklistText = `The 10-Point Pre-Ship Checklist for AI-Generated Code

Before you ship AI-generated code:

${checklist.map((item, index) => `${index + 1}. ${item}`).join("\n")}`;

const freeFeatures = [
  "10 questions before shipping",
  "Good for a quick gut check",
  "Easy to share",
  "No setup",
];

const kitFeatures = [
  "Beginner Mode files",
  "Daily VibeCode Prompt",
  "Reviewer AI Prompt",
  "Project Safety Profile",
  "Repo instruction templates",
  "Security guardrails",
  "Pre-ship checklists",
  "Advanced starter docs",
];

const faqs = [
  {
    q: "Is the checklist enough?",
    a: "It is a helpful quick check, but the full kit gives you the prompts and repo files to make the review repeatable.",
  },
  {
    q: "Does this replace a developer?",
    a: "No. It helps reduce risk, but it does not replace a developer, QA process, or security audit.",
  },
  {
    q: "Can I use this with Claude, Cursor, Codex, Windsurf, Lovable, Bolt, or Replit?",
    a: "Yes. The workflow is designed to be tool-agnostic.",
  },
  {
    q: "What does Reviewer AI return PASS mean?",
    a: "It means your review prompt did not find a blocking issue based on the context provided. It is not a guarantee, but it gives you a stronger pre-ship habit.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="flex justify-center">
          <span className="pill">
            <span className="pill-dot" />
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-base leading-8 text-gray-300 md:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 flex-none text-violet-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
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
      aria-hidden="true"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

export default function PreShipChecklistPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative border-b border-white/5">
        <div
          aria-hidden="true"
          className="orb left-[-180px] top-[-120px] h-[430px] w-[430px] bg-violet-700/40"
        />
        <div
          aria-hidden="true"
          className="orb right-[-190px] top-[80px] h-[480px] w-[480px] bg-fuchsia-700/30"
        />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-16 lg:grid-cols-[0.95fr,1.05fr] lg:gap-16 lg:pb-24 lg:pt-24">
          <div className="relative">
            <span className="pill">
              <span className="pill-dot" />
              Free checklist for vibe coders
            </span>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              The 10-Point Pre-Ship Checklist for{" "}
              <span className="violet-text">AI-Generated Code</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-gray-300">
              Before you commit, push, or deploy AI-generated code, run
              these checks so you don&apos;t ship blind.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <BuyLink className="btn-primary">
                <CartIcon />
                Get the Kit for $29.99
              </BuyLink>
              <a href="#checklist" className="btn-secondary">
                Read the Checklist
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              One-time purchase. No subscription. Beginner-friendly setup.
            </p>
          </div>

          <div id="checklist" className="glass-strong relative rounded-2xl p-5 shadow-glow md:p-7">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold tracking-tight text-white">
                Before you ship AI-generated code:
              </h2>
              <CopyChecklistButton text={checklistText} />
            </div>
            <ol className="mt-6 space-y-3">
              {checklist.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-gray-200"
                >
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-violet-500/15 text-sm font-semibold text-violet-200">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-6 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionHeader
            title="Why this matters"
            body="AI coding tools can make a page work while quietly breaking the parts of your app that matter most: auth, billing, environment variables, API validation, database policies, or critical user flows."
          />
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-violet-300/20 bg-violet-500/[0.06] p-5 text-center text-base font-medium text-violet-100">
            A working build is not the same as a safe release.
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-gradient-to-b from-transparent via-violet-500/[0.04] to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="Quick check vs full workflow"
            title="The free checklist is the quick version."
            body="VibeCode Safety Membership gives you the system behind the checklist: repo rules, project safety files, copy-paste reviewer prompts, repo audits, daily guardrails, and monthly safety drops."
          />

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white">
                Free checklist
              </h3>
              <ul className="mt-6 space-y-3">
                {freeFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-strong rounded-2xl p-6 shadow-glow">
              <h3 className="text-xl font-semibold text-white">
                VibeCode Safety Membership
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {kitFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-4xl rounded-2xl border border-violet-300/20 bg-gradient-to-br from-violet-500/15 via-white/[0.04] to-fuchsia-500/10 p-8 text-center shadow-glow md:p-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Want the full safety workflow?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              Copy 3 files into your repo, paste 1 prompt after every AI
              coding change, and don&apos;t ship until the review passes.
            </p>
            <div className="mt-8 flex justify-center">
              <BuyLink className="btn-primary">
                <CartIcon />
                Get the Kit for $29.99
              </BuyLink>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              One-time purchase. No subscription. Beginner-friendly setup.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionHeader title="FAQ" />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Ship faster without shipping blind.
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Make AI check the AI before you ship.
              </p>
            </div>
            <BuyLink className="btn-primary">
              <CartIcon />
              Get the Kit for $29.99
            </BuyLink>
          </div>
        </div>
      </section>
    </div>
  );
}
