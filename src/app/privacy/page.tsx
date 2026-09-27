import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Greg James Designs collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="September 2026">
      <LegalSection title="What we collect">
        <p>
          When you submit a form on this site, we collect the information you provide: name,
          email, phone number, project location, plan interests, and any project details you share
          with us.
        </p>
      </LegalSection>
      <LegalSection title="How we use it">
        <p>
          We use your information to respond to your inquiry, prepare quotes, deliver plan sets,
          and — with your consent — send occasional updates about our services. We do not sell,
          rent, or share your personal information with third parties for their marketing.
        </p>
      </LegalSection>
      <LegalSection title="SMS and marketing consent">
        <p>
          If you opt in to receive SMS notifications, message frequency varies and message & data
          rates may apply. You can reply STOP to unsubscribe at any time.
        </p>
      </LegalSection>
      <LegalSection title="Data retention">
        <p>
          We retain inquiry records to serve you during your project and to maintain accurate
          client history. Request deletion of your data at any time by emailing
          designteam@gregjamesdesigns.com.
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
