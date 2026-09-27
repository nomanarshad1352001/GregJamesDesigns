import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We've received your request and will be in touch within one business day.",
  robots: { index: false },
};

const LABELS: Record<string, string> = {
  general: "message",
  "stock-plan": "plan request",
  modification: "modification quote request",
  "custom-design": "custom design request",
  "building-kit": "kit quote request",
  consultation: "consultation request",
  ebook: "ebook request",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const label = LABELS[type ?? "general"] ?? "request";

  return (
    <section className="bg-cream/60 py-24 lg:py-36">
      <div className="blueprint-grid-light">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="success-pulse mx-auto w-fit rounded-full">
            <CheckCircle2 className="h-16 w-16 text-success" aria-hidden />
          </div>
          <h1 className="mt-8 font-display text-5xl font-semibold text-navy">Thank you.</h1>
          <p className="mt-6 text-lg leading-8 text-body">
            Your {label} has been received. A member of our design team will reach out within one
            business day. For anything urgent, call{" "}
            <a href={SITE.phoneHref} className="font-semibold text-gold-dark hover:underline">
              {SITE.phone}
            </a>
            .
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/plans">Browse Stock Plans</ButtonLink>
            <ButtonLink href="/" variant="navy">
              Back to Home
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
