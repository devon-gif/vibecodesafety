import { LegalShell } from "@/components/LegalShell";
import { SUPPORT_EMAIL } from "@/lib/checkout";

export const metadata = { title: "Terms & Agreements — VibeCode Safety Kit" };

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Agreements"
      updated="May 24, 2026"
      intro={
        <p>
          By purchasing or using VibeCode Safety Kit, you agree to these
          Terms &amp; Agreements.
        </p>
      }
    >
      <h2>1. Product Description</h2>
      <p>
        VibeCode Safety Kit is a digital product containing prompts,
        checklists, templates, documentation, and workflow guidance for
        AI-assisted builders.
      </p>
      <p>
        It is designed to help users review AI-generated code more
        systematically before commit, push, or deploy.
      </p>

      <h2>2. Not Professional Advice</h2>
      <p>
        VibeCode Safety Kit does not provide legal, financial, security,
        compliance, or professional engineering advice.
      </p>
      <p>
        The kit is not a replacement for a senior developer, QA process,
        security audit, or professional review.
      </p>

      <h2>3. No Guarantees</h2>
      <p>
        We do not guarantee that use of the kit will make your software
        bug-free, secure, compliant, production-ready, or free from
        vulnerabilities.
      </p>
      <p>
        You are responsible for reviewing, testing, and validating your own
        software before launch.
      </p>

      <h2>4. User Responsibility</h2>
      <p>You are responsible for:</p>
      <ul>
        <li>how you use the kit</li>
        <li>any code you write, generate, deploy, or sell</li>
        <li>testing your app before launch</li>
        <li>protecting user data</li>
        <li>
          securing your own accounts, keys, databases, and infrastructure
        </li>
        <li>complying with applicable laws and platform rules</li>
      </ul>

      <h2>5. Digital Product License</h2>
      <p>
        Your purchase gives you a personal or internal business-use license
        to use the kit in your own projects.
      </p>
      <p>
        You may not resell, redistribute, repackage, upload, share, or claim
        the kit as your own product.
      </p>
      <p>
        You may use the templates inside your own projects and client work,
        but you may not sell the kit itself as a competing product.
      </p>

      <h2>6. Payments</h2>
      <p>
        Payments are processed through Stripe or another third-party payment
        provider. By purchasing, you agree to the payment provider&apos;s
        terms.
      </p>

      <h2>7. No Refunds / Returns</h2>
      <p>
        Because this is a digital product with immediate access, all sales
        are final unless otherwise required by law.
      </p>
      <p>Please review the product description before purchasing.</p>

      <h2>8. Updates</h2>
      <p>
        We may update, improve, or change the kit over time. Future updates
        are not guaranteed unless explicitly stated.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, VibeCode Safety Kit and its
        creators are not liable for damages, losses, security incidents,
        bugs, downtime, lost revenue, or other issues related to your use of
        the kit or your software projects.
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions, contact:{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </LegalShell>
  );
}
