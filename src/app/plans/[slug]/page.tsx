import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Bath,
  BedDouble,
  Check,
  ChevronRight,
  DraftingCompass,
  ExternalLink,
  Maximize,
  Ruler,
  Warehouse,
} from "lucide-react";
import { getPlanBySlug, getRelatedPlans } from "@/lib/queries";
import { PlanCard } from "@/components/plan-card";
import { PlanGallery } from "@/components/plan-gallery";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { SpecTableRows } from "@/components/spec-table";
import { InquiryForm } from "@/components/inquiry-form";
import { Accordion } from "@/components/accordion";
import { Eyebrow } from "@/components/ui";
import { formatBaths, formatPrice, formatSqFt, SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plan = await getPlanBySlug(slug);
  if (!plan) return { title: "Plan not found" };
  return {
    title: `${plan.name} Barndominium Plan | ${plan.bedrooms} Bed`,
    description: `${plan.name} ${plan.planNumber} — ${formatSqFt(plan.livingSqFt)} living, ${plan.bedrooms} bed, ${formatBaths(plan.bathrooms)} bath${plan.garageSqFt ? `, ${plan.garageSqFt.toLocaleString()} SF garage/shop` : ""}. Complete buildable plan set from ${formatPrice(plan.price)}.`,
  };
}

const INCLUDED = [
  {
    title: "Floor Plans",
    body: 'Drawn to 1/4" scale with full dimensions, notes, and a complete window & door schedule.',
  },
  {
    title: "Exterior Elevations",
    body: "All four elevations noted, plus an aerial roof view showing every hip, valley and ridge.",
  },
  {
    title: "Electrical Plan",
    body: "Fixture, switch and outlet layout ready for your electrician's review.",
  },
  {
    title: "3D Renderings",
    body: "Perspective views of your home's design so you can see it before it's built.",
  },
  {
    title: "Foundation Plan",
    body: "Dimensioned foundation plan with notes — slab standard; alternates available for a fee.",
  },
  {
    title: "Wall Sections & Details",
    body: "Wall materials and assembly, plate heights, joist and truss direction diagrams.",
  },
];

export default async function PlanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = await getPlanBySlug(slug);
  if (!plan) notFound();

  const related = await getRelatedPlans(plan.slug, plan.category);

  return (
    <>
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="border-b border-line bg-cream/50">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-body sm:px-6">
          <Link href="/" className="transition-colors hover:text-gold">Home</Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <Link href="/plans" className="transition-colors hover:text-gold">Plans</Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <span className="text-navy">{plan.name}</span>
        </div>
      </nav>

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Gallery + description */}
            <div className="lg:col-span-7">
              <Reveal>
                <PlanGallery images={plan.gallery} name={plan.name} />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-12">
                  <Eyebrow>About this plan</Eyebrow>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">
                    {plan.name} {plan.planNumber}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-body">{plan.description}</p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-10">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-navy">
                    Plan highlights
                  </h3>
                  <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-3 text-[15px] leading-6 text-body">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Spec table */}
              <Reveal delay={0.2}>
                <div className="mt-12 overflow-hidden border border-line">
                  <table className="w-full text-sm">
                    <caption className="bg-navy px-6 py-3 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                      Area schedule & dimensions
                    </caption>
                    <tbody className="divide-y divide-line">
                      <SpecTableRows
                        rows={[
                          ["Living area", formatSqFt(plan.livingSqFt)],
                          ["Bedrooms", `${plan.bedrooms}`],
                          ["Bathrooms", formatBaths(plan.bathrooms)],
                          ["Garage / shop", plan.garageSqFt ? formatSqFt(plan.garageSqFt) : "Not included — can be added"],
                          ["Stories", plan.stories],
                          ["Overall width", plan.widthFt ? `${plan.widthFt}'-0"` : "—"],
                          ["Overall depth", plan.depthFt ? `${plan.depthFt}'-0"` : "—"],
                          ["Style", plan.style],
                          ["Construction systems", "Steel I-beam · Weld-up · Bolt-up · Wood post-frame"],
                        ]}
                      />
                    </tbody>
                  </table>
                </div>
              </Reveal>

              {/* What's included */}
              <Reveal delay={0.25}>
                <div className="mt-12">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-navy">
                    What's included in this plan set
                  </h3>
                  <div className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-2">
                    {INCLUDED.map((item) => (
                      <div key={item.title} className="bg-white p-5">
                        <p className="flex items-center gap-2 font-bold text-navy">
                          <DraftingCompass className="h-4 w-4 text-gold-dark" aria-hidden />
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-body">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* FAQ */}
              <Reveal delay={0.3}>
                <div className="mt-12">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-navy">
                    Good to know
                  </h3>
                  <div className="mt-4">
                    <Accordion
                      items={[
                        {
                          q: "Can this plan be modified?",
                          a: `Yes — every stock plan can be tailored. Common changes to ${plan.name} include resizing the shop, adjusting the bedroom count, mirroring the layout for your lot, and revising porches or rooflines. Request a modification quote before any work begins.`,
                        },
                        {
                          q: "Is engineering or an architectural stamp included?",
                          a: "Not automatically. Plans are complete and buildable, but stamped engineering or an architectural seal — often required by your jurisdiction — can be added for a separate cost. Foundation design may also require site-specific soils information.",
                        },
                        {
                          q: "How does the plan license work?",
                          a: "Your purchase licenses you to build one structure. Plans remain the property of Greg James Designs, LLC and are not transferable or reusable for additional builds.",
                        },
                        {
                          q: "How are plans delivered?",
                          a: "Final sets are delivered digitally by email without watermarks — ready to take to your mortgage company, building provider, or construction manager. Delivery timing is confirmed with your order.",
                        },
                      ]}
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sticky purchase sidebar */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <div className="border border-line bg-white shadow-card">
                    <div className="border-b border-line bg-cream/50 px-7 py-5">
                      <div className="flex items-baseline justify-between gap-3">
                        <h1 className="font-display text-2xl font-semibold leading-tight text-navy">
                          {plan.name}
                        </h1>
                        <span className="text-sm font-bold uppercase tracking-[0.14em] text-body">
                          {plan.planNumber}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-body">
                        {plan.style} · {plan.category}
                      </p>
                    </div>

                    <div className="grid grid-cols-4 divide-x divide-line border-b border-line text-center">
                      {[
                        { icon: Maximize, count: plan.livingSqFt as number | null, v: null as string | null, l: "Living SF" },
                        { icon: BedDouble, count: null, v: `${plan.bedrooms}`, l: "Beds" },
                        { icon: Bath, count: null, v: formatBaths(plan.bathrooms), l: "Baths" },
                        { icon: Warehouse, count: plan.garageSqFt, v: plan.garageSqFt ? null : "—", l: "Shop SF" },
                      ].map(({ icon: Icon, count, v, l }) => (
                        <div key={l} className="px-2 py-4">
                          <Icon className="mx-auto h-4 w-4 text-gold-dark" aria-hidden />
                          <p className="mt-1.5 font-display text-lg font-semibold leading-none text-navy">
                            {count !== null ? <CountUp end={count} /> : v}
                          </p>
                          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-body">
                            {l}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="px-7 py-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-body">
                          From
                        </span>
                        <CountUp
                          end={plan.price}
                          prefix="$"
                          className="font-display text-4xl font-semibold text-navy"
                        />
                      </div>
                      <p className="mt-1 text-xs leading-5 text-body">
                        Complete buildable plan set. Engineering stamp available separately.
                      </p>

                      <a
                        href="#inquire"
                        className="mt-6 flex h-[52px] w-full items-center justify-center bg-gold text-[13px] font-bold uppercase tracking-[0.14em] text-navy-deep transition-colors hover:bg-gold-dark hover:text-white"
                      >
                        Request This Plan
                      </a>
                      <Link
                        href={`/customize?plan=${encodeURIComponent(`${plan.name} ${plan.planNumber}`)}`}
                        className="mt-3 flex h-[52px] w-full items-center justify-center border border-navy text-[13px] font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-navy hover:text-white"
                      >
                        Customize This Plan
                      </Link>

                      <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-xs leading-5 text-body">
                        {[
                          "Delivered digitally, without watermarks",
                          "One-build license — see plan license terms",
                          "Digital plan sets are non-refundable once delivered",
                          `Questions? Call ${SITE.phone}`,
                        ].map((t) => (
                          <li key={t} className="flex gap-2">
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div id="inquire" className="mt-6 scroll-mt-32 border border-line bg-white p-7 shadow-card">
                    <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-navy">
                      <Ruler className="h-4 w-4 text-gold-dark" aria-hidden />
                      Request info — {plan.name}
                    </p>
                    <div className="mt-5">
                      <InquiryForm
                        type="stock-plan"
                        planName={`${plan.name} ${plan.planNumber}`}
                        showPlanField
                        showLocationField
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <Link
                    href="/plan-license"
                    className="mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-body transition-colors hover:text-gold"
                  >
                    Read the plan license <ExternalLink className="h-3 w-3" aria-hidden />
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Related plans */}
          <div className="mt-20 border-t border-line pt-14">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
                You may also like
              </h2>
              <Link
                href="/plans"
                className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold-dark transition-colors hover:text-navy"
              >
                View all plans →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PlanCard key={p.slug} plan={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
