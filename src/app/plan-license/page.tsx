import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal";

export const metadata: Metadata = {
  title: "Plan License",
  description:
    "Purchase usage terms for Greg James Designs stock and custom plan sets — single-build license, copying restrictions, transfer rules and refunds.",
};

export default function PlanLicensePage() {
  return (
    <LegalPage eyebrow="Legal" title="Plan License Agreement" updated="September 2026">
      <LegalSection title="Single-build license">
        <p>
          All plan sets — stock, modified, and custom — remain the intellectual property of Greg
          James Designs, LLC. Your purchase grants you a non-exclusive, non-transferable license
          to construct <strong>one (1)</strong> structure from the plans, for the client to whom
          the plans were sold.
        </p>
      </LegalSection>
      <LegalSection title="Copying and reuse restrictions">
        <p>
          Plans may not be copied, resold, shared, transferred, or used to construct additional
          structures without written permission. Additional build licenses can often be arranged —
          contact us before reusing a set.
        </p>
      </LegalSection>
      <LegalSection title="Modifications by others">
        <p>
          If you or your builder modify the plans after delivery, Greg James Designs, LLC is not
          responsible for the performance, code compliance, or accuracy of those modifications.
        </p>
      </LegalSection>
      <LegalSection title="Engineering and code compliance">
        <p>
          Plans are complete and buildable but do not automatically include structural engineering
          or an architectural seal. Many jurisdictions require local review and stamping.
          Foundation design may require site-specific soils or engineering information. The
          purchaser is responsible for verifying local permitting requirements.
        </p>
      </LegalSection>
      <LegalSection title="Refunds">
        <p>
          Because plan sets are delivered digitally, all sales are final once files have been
          delivered. If there is an error in your delivery, contact us and we will make it right.
        </p>
      </LegalSection>
      <LegalSection title="Questions">
        <p>
          Contact us at designteam@gregjamesdesigns.com or +1 405-856-2358 with any questions
          about licensing before you purchase.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
