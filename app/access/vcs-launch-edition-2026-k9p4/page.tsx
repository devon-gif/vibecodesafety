import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCT_DOWNLOAD_LINK, SUPPORT_EMAIL } from "@/lib/checkout";

export const metadata: Metadata = {
  title: "Download VibeCode Safety Member Kit",
  robots: {
    index: false,
    follow: false,
  },
};

const steps = [
  "Download the member kit",
  "Open QUICKSTART.md",
  "Run the Heavy-Duty Repo Audit workflow",
  "Add the daily guardrails to your repo",
  "Use the Daily AI Change Review Prompt after AI coding changes",
];

export default function LaunchEditionAccessPage() {
  const hasDownload = Boolean(PRODUCT_DOWNLOAD_LINK);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="orb left-1/2 top-[-160px] h-[460px] w-[460px] -translate-x-1/2 bg-violet-600/40"
      />
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <span className="pill">
          <span className="pill-dot" />
          VibeCode Safety Member Kit
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Welcome to <span className="violet-text">VibeCode Safety</span>
        </h1>

        <p className="mt-6 text-gray-300">
          Download the current member kit below. Start with the heavy-duty repo
          audit, then add the daily guardrails to your project.
        </p>

        {hasDownload ? (
          <div className="mt-8 flex justify-center">
            <a
              href={PRODUCT_DOWNLOAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
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
              Download the member kit
            </a>
          </div>
        ) : (
          <div className="glass mx-auto mt-8 max-w-md rounded-xl p-5 text-sm leading-6 text-gray-300">
            The download link is not connected yet. If you purchased and need
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

        <p className="mt-8 text-xs text-gray-500">
          Please do not share or redistribute the product files.
        </p>

        <div className="mt-10 flex justify-center">
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
