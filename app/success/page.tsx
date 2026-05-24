import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout coming soon — VibeCode Safety Kit",
};

export default function SuccessPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="orb left-1/2 top-[-160px] h-[460px] w-[460px] -translate-x-1/2 bg-violet-600/40"
      />
      <div className="mx-auto max-w-2xl px-6 py-28 text-center">
        <span className="pill">
          <span className="pill-dot" />
          CHECKOUT COMING SOON
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Thanks for your interest in the{" "}
          <span className="violet-text">VibeCode Safety Kit</span>.
        </h1>
        <p className="mt-6 text-gray-400">
          Payments aren&apos;t live yet. The kit launches as a one-time $29.99
          purchase — no subscription. Once checkout is enabled, this page will
          confirm your order and deliver your download link.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to homepage
          </Link>
          <Link href="/#whats-inside" className="btn-secondary">
            See what&apos;s inside
          </Link>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          One-time purchase. No subscription required.
        </p>
      </div>
    </section>
  );
}
