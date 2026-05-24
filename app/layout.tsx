import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "VibeCode Safety Kit — Make AI check the AI before you ship.",
  description:
    "A practical guardrail system for solo founders and AI builders — prompts, checklists, repo rules, and pre-deploy workflows that help catch broken flows, exposed secrets, schema drift, and risky AI-generated changes before they go live.",
  metadataBase: new URL("https://vibecodesafetykit.com"),
  openGraph: {
    title: "VibeCode Safety Kit",
    description: "Make AI check the AI before you ship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink-950 text-gray-200 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
