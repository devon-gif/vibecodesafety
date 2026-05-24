import type { ReactNode } from "react";
import Link from "next/link";

export function LegalShell({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="orb left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 bg-violet-700/30"
      />
      <div className="mx-auto max-w-3xl px-6 py-20">
        <span className="pill">
          <span className="pill-dot" />
          LEGAL
        </span>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: {updated}</p>

        {intro ? (
          <div className="mt-8 text-base leading-relaxed text-gray-300">
            {intro}
          </div>
        ) : null}

        <div className="prose prose-invert mt-8 max-w-none text-gray-300 [&_a]:text-violet-300 [&_a:hover]:text-violet-200 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_li]:my-1 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>

        <div className="mt-12">
          <Link href="/" className="btn-primary">
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
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
