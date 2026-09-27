import type { Metadata } from "next";
import { CostCalculator } from "@/components/cost-calculator";
import { ArrowLink, CtaBand, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Barndominium Cost Calculator",
  description:
    "Estimate your barndominium build budget in two minutes — shell, finish-out, site work and soft costs, by building system and finish level.",
};

export default function CostCalculatorPage() {
  return (
    <>
      <section className="border-b border-line bg-cream/60">
        <div className="blueprint-grid-light">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <Eyebrow>Tools & tips</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.04] text-navy sm:text-6xl">
              The barndominium cost calculator.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-body">
              A planning-grade estimate in two minutes. Adjust the sliders, compare building
              systems, and see where your budget actually goes — then get a real quote when you're
              ready.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <CostCalculator />
          <p className="mt-12 text-center text-sm text-body">
            Want the long version?{" "}
            <ArrowLink href="/resources/cost-to-build-barndominium">
              Read: How much does it cost to build a barndominium?
            </ArrowLink>
          </p>
        </div>
      </section>

      <CtaBand
        title="Like the number you see?"
        body="Send us the estimate and your wish list — we'll turn it into a real, buildable quote."
        primary={{ href: "/contact", label: "Get a Real Quote" }}
        secondary={{ href: "/plans", label: "Browse Plans" }}
      />
    </>
  );
}
