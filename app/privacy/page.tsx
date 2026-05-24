import { LegalShell } from "@/components/LegalShell";

export const metadata = { title: "Privacy — VibeCode Safety Kit" };

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="2025-01-01">
      <p>
        This policy explains what information we collect when you visit this
        site or purchase the VibeCode Safety Kit.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>Order details (email, payment confirmation) when checkout is enabled.</li>
        <li>Basic analytics (page views, referrer) to improve the site.</li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To deliver the Kit to your email after purchase.</li>
        <li>To provide receipts and respond to support requests.</li>
        <li>To improve the product and the site.</li>
      </ul>
      <h2>Third parties</h2>
      <p>
        Payments will be processed by Stripe once checkout is enabled. We do
        not sell your data.
      </p>
      <h2>Contact</h2>
      <p>
        For privacy questions, email the address listed on the homepage once
        published.
      </p>
    </LegalShell>
  );
}
