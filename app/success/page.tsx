import Link from "next/link";
import type { Metadata } from "next";
import { PRODUCT_DOWNLOAD_LINK, SUPPORT_EMAIL } from "@/lib/checkout";

export const metadata: Metadata = {
  title: "Download VibeCode Safety Kit — You're in",
};

const steps = [
  "Download the ZIP",
  "Open QUICKSTART.md",
  "Start with Beginner Mode",
  "Add Core Guardrails later",
];

export default function SuccessPage() {
  const hasDownload = Boolean(PRODUCT_DOWNLOAD_LINK);

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
          You're in —{" "}
          <span className="violet-text">download the kit.</span>
        </h1>

        <p className="mt-6 text-gray-300">
          Thanks for purchasing VibeCode Safety Kit. Your checkout receipt will
          be sent to the email used at purchase.
        </p>

        {hasDownload ? (
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={PRODUCT_DOWNLOAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              <svg
                viewBox="0 0 24 24"
                className="mr-2 inline h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download VibeCode Safety Kit
            </a>
            <p className="text-sm text-violet-200">
              Download the ZIP, open QUICKSTART.md, start with Beginner
              Mode, and add Core Guardrails later.
            </p>
          </div>
        ) : (
          <div className="glass mx-auto mt-8 max-w-md rounded-xl p-5 text-sm text-gray-300">
            Your download link is being prepared. If you purchased and need
            access, email{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-violet-300 hover:text-violet-200"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </div>
        )}

        <div className="glass-strong mx-auto mt-10 rounded-2xl p-6 text-left shadow-glow">
          <div className="text-sm font-semibold uppercase tracking-wider text-violet-300">
            Your next 5 steps
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
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>

        <p className="mt-8 text-xs text-gray-500">
          This download page is for launch delivery. Do not share the product
          files publicly.
        </p>

        <p className="mt-3 text-xs text-gray-500">
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
