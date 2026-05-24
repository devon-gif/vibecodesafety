import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout coming soon — VibeCode Safety Kit",
};

export default function CheckoutComingSoonPage() {
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
          Checkout is <span className="violet-text">almost ready.</span>
        </h1>

        <p className="mt-6 text-gray-300">
          Checkout and download delivery are almost ready. The launch version
          will use secure checkout and a simple download link after purchase.
        </p>

        <p className="mt-4 text-gray-400">
          VibeCode Safety Kit will be available as a simple one-time purchase
          for <span className="text-white">$29.99</span>. No subscription
          required.
        </p>

        <div className="mt-10 flex justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>

        <div className="mx-auto mt-10 max-w-md rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs text-gray-500">
          Stripe checkout and Google Drive delivery will be connected here before
          launch.
        </div>
      </div>
    </section>
  );
}
