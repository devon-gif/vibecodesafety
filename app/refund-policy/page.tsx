import { LegalShell } from "@/components/LegalShell";

export const metadata = { title: "Refund policy — VibeCode Safety Kit" };

export default function RefundPolicyPage() {
  return (
    <LegalShell title="Refund Policy" updated="2025-01-01">
      <p>
        The VibeCode Safety Kit is a one-time digital product delivered
        immediately after purchase.
      </p>
      <h2>Refund window</h2>
      <p>
        If the Kit is not what you expected, email us within 14 days of
        purchase and we will issue a full refund. Please include your order
        confirmation.
      </p>
      <h2>What&apos;s not refundable</h2>
      <ul>
        <li>Refund requests after 14 days.</li>
        <li>Requests where the Kit has been redistributed or shared.</li>
      </ul>
      <h2>How to request a refund</h2>
      <p>
        Reply to your purchase receipt or contact the support email listed on
        the homepage.
      </p>
    </LegalShell>
  );
}
