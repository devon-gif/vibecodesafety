import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription checkout coming soon - VibeCode Safety",
};

export default function CheckoutComingSoonPage() {
  const showTestLink = process.env.NODE_ENV === "development";

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="orb left-1/2 top-[-160px] h-[460px] w-[460px] -translate-x-1/2 bg-violet-600/40"
      />
      <div className="mx-auto max-w-2xl px-6 py-28 text-center">
        <span className="pill">
          <span className="pill-dot" />
          ALMOST READY
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Subscription checkout is{" "}
          <span className="violet-text">almost ready.</span>
        </h1>

        <p className="mt-6 text-gray-300">
          VibeCode Safety will be available for{" "}
          <span className="text-white">$6.99/month</span> or{" "}
          <span className="text-white">$59/year</span>. Members get the repo
          audit workflow, VibeCode Auditor Agent, daily guardrails, Weekly
          Safety Notes, Monthly Safety Drops, and ongoing updates.
        </p>

        <p className="mt-4 text-gray-400">
          Monthly or yearly billing. Cancel anytime.
        </p>

        <div className="mt-10 flex justify-center">
          <Link href="/" className="btn-primary">
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
