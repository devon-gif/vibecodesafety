import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCTA } from "@/components/StickyCTA";
import { ChatWidget } from "@/components/ChatWidget";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "VibeCode Safety Membership - Audit your repo. Guard every AI change.",
  description:
    "A subscription membership for AI-assisted builders with a heavy-duty repo audit workflow, VibeCode Auditor Agent, daily change-review guardrails, and monthly safety drops.",
  metadataBase: new URL("https://vibecodesafetykit.com"),
  openGraph: {
    title: "VibeCode Safety Membership",
    description: "Audit your repo. Guard every AI change. Ship with fewer surprises.",
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
        <StickyCTA />
        <ChatWidget />
        <ScrollReveal />
      </body>
    </html>
  );
}
