import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Website and purchase terms for Greg James Designs.",
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="September 2026">
      <LegalSection title="Use of this website">
        <p>
          This website provides general information about our design services and plan products.
          Content — including renderings, specifications, and pricing — is provided in good faith
          and may change without notice.
        </p>
      </LegalSection>
      <LegalSection title="Estimates and calculators">
        <p>
          Any calculator or estimate on this site is for planning purposes only and is not a
          quote. Actual pricing is provided in a written proposal based on your project.
        </p>
      </LegalSection>
      <LegalSection title="Purchases">
        <p>
          Plan purchases are governed by our Plan License. Purchasers are responsible for
          verifying local code, permitting, and engineering requirements. Structural engineering
          or architectural sealing is not included unless explicitly stated in your agreement.
        </p>
      </LegalSection>
      <LegalSection title="Intellectual property">
        <p>
          All designs, drawings, renderings, text and imagery on this site are the property of
          Greg James Designs, LLC and may not be reproduced without written permission.
        </p>
      </LegalSection>
      <LegalSection title="Limitation of liability">
        <p>
          Greg James Designs, LLC is not liable for construction outcomes, builder performance, or
          modifications made to plans after delivery. Our liability is limited to the amount paid
          for the plans or services in question.
        </p>
      </LegalSection>
      <LegalSection title="Contact">
        <p>
          Greg James Designs · 215 1/2 South Division St, Guthrie, OK 73044 · +1 405-856-2358 ·
          designteam@gregjamesdesigns.com
        </p>
      </LegalSection>
    </LegalPage>
  );
}
