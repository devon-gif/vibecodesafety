import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCTA } from "@/components/StickyCTA";
import { ChatWidget } from "@/components/ChatWidget";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "VibeCode Safety Membership - Don't ship AI code blind.",
  description:
    "A subscription membership for AI-assisted builders with a repo audit workflow, daily AI change reviews, Weekly Safety Notes, and Monthly Safety Drops before you ship.",
  metadataBase: new URL("https://vibecodesafetykit.com"),
  openGraph: {
    title: "VibeCode Safety Membership",
    description: "Don't ship AI code blind. Run the audit before you deploy.",
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
