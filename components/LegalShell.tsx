import type { ReactNode } from "react";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {updated}</p>
        <div className="prose prose-invert mt-10 max-w-none text-gray-300 [&_a]:text-emerald-300 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </div>
    </section>
  );
}
