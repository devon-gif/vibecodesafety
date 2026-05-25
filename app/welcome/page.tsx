import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to VibeCode Safety",
};

const steps = [
  "Download Member Kit",
  "Open QUICKSTART.md",
  "Paste the VibeCode Auditor prompt into your AI tool",
  "Run the Heavy-Duty Repo Audit",
  "Add Daily Guardrails",
  "Check the latest Weekly Safety Note",
  "Use the latest Monthly Safety Drop for deeper checks",
];

export default function WelcomePage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="orb left-1/2 top-[-160px] h-[460px] w-[460px] -translate-x-1/2 bg-violet-600/40"
      />
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <span className="pill">
            <span className="pill-dot" />
            Member onboarding
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Run your first audit{" "}
            <span className="violet-text">before you keep building.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-gray-300">
            Start here. Download the kit, paste the auditor prompt into your AI
            tool, and check your repo for risky AI-generated changes.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400">
            Do not try to use every file today. Run the first audit, then add
            the daily guardrails.
          </p>
        </div>

        <div className="glass-strong mt-10 rounded-2xl p-6 shadow-glow">
          <div className="text-sm font-semibold uppercase tracking-wider text-violet-300">
            Start here
          </div>
          <ol className="mt-5 space-y-3">
            {steps.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-gray-200">
                <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gradient-to-br from-violetglow-500 to-violetglow-700 text-xs font-semibold text-white shadow-glow">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="glass mt-6 rounded-2xl p-6">
          <div className="text-sm font-semibold uppercase tracking-wider text-violet-300">
            How updates work
          </div>
          <p className="mt-3 text-sm leading-7 text-gray-300">
            Each week, members get a small Safety Note. Each month, members get
            a larger Safety Drop focused on a high-risk area like Stripe,
            Supabase, auth, env vars, or deployment readiness.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
