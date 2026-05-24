import Link from "next/link";
import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "@/lib/checkout";

export const metadata: Metadata = {
  title: "Start with the 5-minute setup — VibeCode Safety Kit",
};

const steps = [
  "Open QUICKSTART.md",
  "Copy the Beginner Mode files into your repo",
  "Fill out PROJECT_SAFETY_PROFILE.md",
  "Paste the Daily VibeCode Prompt into your AI coding tool",
  "Run the Reviewer Prompt before commit, push, or deploy",
];

export default function SuccessPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="orb left-1/2 top-[-160px] h-[460px] w-[460px] -translate-x-1/2 bg-violet-600/40"
      />
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 12 5 5L20 7" />
          </svg>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Start with the{" "}
          <span className="violet-text">5-minute setup.</span>
        </h1>

        <p className="mt-6 text-gray-300">
          Thanks for purchasing VibeCode Safety Kit. Your download / access
          instructions will be sent to the email used at checkout.
        </p>

        <div className="glass-strong mx-auto mt-10 rounded-2xl p-6 text-left shadow-glow">
          <div className="text-sm font-semibold uppercase tracking-wider text-violet-300">
            Your next 5 minutes
          </div>
          <ol className="mt-5 space-y-3">
            {steps.map((s, i) => (
              <li key={s} className="flex items-start gap-3 text-gray-200">
                <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gradient-to-br from-violetglow-500 to-violetglow-700 text-xs font-semibold text-white shadow-glow">
                  {i + 1}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>

        <p className="mt-8 text-xs text-gray-500">
          If you have trouble accessing the kit, email{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-violet-300 hover:text-violet-200"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
