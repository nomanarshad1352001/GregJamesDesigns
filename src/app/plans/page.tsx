import type { Metadata } from "next";
import { getPlans } from "@/lib/queries";
import { PlansBrowser } from "@/components/plans-browser";
import { CtaBand, Eyebrow } from "@/components/ui";
import { Check } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Barndominium Plans for Sale",
  description:
    "Browse buildable barndominium stock plans by size, bedroom count, shop and lifestyle. Complete plan sets from $1,300 — every plan customizable for steel or post-frame builds.",
};

export default async function PlansPage() {
  const plans = await getPlans();

  return (
    <>
      {/* Compact catalog header — products first, per the funnel */}
      <section className="border-b border-line bg-cream/60">
        <div className="blueprint-grid-light">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
            <Eyebrow>Barndominium stock plans</Eyebrow>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-navy sm:text-6xl">
                  Buildable plans, from $1,300 a set.
                </h1>
                <p className="mt-4 text-lg leading-8 text-body">
                  Complete, ready-to-build plan sets for every kind of barndo life. Filter by what
                  matters — size, bedrooms, shop space — and find your starting point.
                </p>
              </div>
            </div>
            <ul className="mt-8 grid gap-x-8 gap-y-2 text-sm text-body sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Full set of buildable plans — complete and ready to build",
                "Modifiable for steel I-beam, weld-up, bolt-up or wood post-frame",
                "Engineering or architectural stamp available for a separate cost",
                "Every plan can be customized — quotes before any work begins",
              ].map((point) => (
                <li key={point} className="flex gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PlansBrowser plans={plans} />
        </div>
      </section>

      <CtaBand
        title="Can't find quite the right plan?"
        body="Tell us what you need changed and we'll send a modification quote — or start a fully custom design with our team."
        primary={{ href: "/customize", label: "Customize a Plan" }}
        secondary={{ href: "/contact", label: "Ask the Design Team" }}
      />
    </>
  );
}
