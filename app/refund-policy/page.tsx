import { LegalShell } from "@/components/LegalShell";
import { SUPPORT_EMAIL } from "@/lib/checkout";

export const metadata = {
  title: "No Refunds / Returns Policy — VibeCode Safety Kit",
};

export default function RefundPolicyPage() {
  return (
    <LegalShell
      title="No Refunds / Returns Policy"
      updated="May 24, 2026"
      intro={
        <p>
          VibeCode Safety Kit is a digital product. Because digital files,
          prompts, templates, and documentation can be accessed immediately
          after purchase, all sales are final.
        </p>
      }
    >
      <h2>1. Digital Product</h2>
      <p>
        VibeCode Safety Kit includes digital templates, prompts, checklists,
        documents, and workflow materials. Once access is provided, the
        product cannot be returned.
      </p>

      <h2>2. No Refunds</h2>
      <p>
        We do not offer refunds, returns, or exchanges for digital purchases
        unless required by law.
      </p>

      <h2>3. Please Review Before Purchase</h2>
      <p>
        Before purchasing, please review the product description, included
        materials, FAQs, and disclaimers to make sure the kit is right for
        you.
      </p>

      <h2>4. No Guarantee of Results</h2>
      <p>
        The kit is designed to help reduce risk and improve AI coding review
        workflows. It does not guarantee bug-free software, secure software,
        successful deployments, revenue, or specific outcomes.
      </p>

      <h2>5. Access Issues</h2>
      <p>
        If you purchased the kit but did not receive access instructions,
        contact us and we will help resolve the issue.
      </p>
      <p>
        Contact: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </LegalShell>
  );
}
