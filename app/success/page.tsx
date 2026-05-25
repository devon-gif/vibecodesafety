import Link from "next/link";
import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "@/lib/checkout";

export const metadata: Metadata = {
  title: "Welcome to VibeCode Safety",
};

export default function SuccessPage() {
  const showTestLink = process.env.NODE_ENV === "development";

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
          Welcome to <span className="violet-text">VibeCode Safety.</span>
        </h1>

        <p className="mt-6 text-gray-300">
          Download the current member kit below. Start with the heavy-duty repo
          audit, then add the daily guardrails to your project. Weekly Safety
          Notes and Monthly Safety Drops are there when a topic matters to your
          build.
        </p>

        <div className="glass mx-auto mt-8 rounded-2xl p-5 text-left">
          <div className="text-sm font-semibold uppercase tracking-wider text-violet-300">
            Start here
          </div>
          <ol className="mt-4 space-y-2 text-sm leading-6 text-gray-300">
            <li>1. Run the Heavy-Duty Repo Audit</li>
            <li>2. Add Daily Build Guardrails</li>
            <li>3. Use Weekly Safety Notes when relevant</li>
            <li>4. Use the latest Monthly Safety Drop for deeper checks</li>
          </ol>
        </div>

        <p className="mt-4 text-sm leading-6 text-gray-400">
          If you reached this page directly and need help, email{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-violet-300 hover:text-violet-200"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>

        <div className="mt-10 flex justify-center">
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>

        {showTestLink ? (
          <div className="mt-8">
            <Link
              href="/access/vcs-launch-edition-2026-k9p4"
              className="text-xs text-gray-500 underline decoration-white/20 underline-offset-4 transition hover:text-violet-300"
            >
              Test hidden download page
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
