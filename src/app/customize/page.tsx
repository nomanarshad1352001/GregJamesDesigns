import type { Metadata } from "next";
import { ClipboardList, FileCheck2, ListChecks, Stamp, Check } from "lucide-react";
import {
  IconCustomize,
  IconDraftCompass,
  IconIBeam,
  IconPostBeam,
  IconRenovation,
  IconStockPlan,
} from "@/components/arch-icons";
import { Accordion } from "@/components/accordion";
import { InquiryForm } from "@/components/inquiry-form";
import { StepsFlow } from "@/components/process-steps";
import { LedTraceHouse } from "@/components/led-trace";
import { Reveal } from "@/components/reveal";
import { ArrowLink, ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Customize a Barndominium Plan",
  description:
    "Modify layout, shop, bedrooms, exterior, porches and more. Start with a proven stock plan and let our design team tailor it to your family, property and budget.",
};

const CHANGES = [
  {
    icon: IconStockPlan,
    title: "Living Spaces",
    body: "Move interior walls, enlarge rooms, rework the kitchen, or adjust the bedroom and bathroom count.",
  },
  {
    icon: IconPostBeam,
    title: "Garage & Shop",
    body: "Widen the shop, add an RV bay, change door locations, or create more storage and work space.",
  },
  {
    icon: IconRenovation,
    title: "Exterior Style",
    body: "Revise porches, windows, roof forms, materials, and architectural details.",
  },
  {
    icon: IconDraftCompass,
    title: "Plan Orientation",
    body: "Reverse or mirror the plan for the property, driveway, views, and approach.",
  },
  {
    icon: IconCustomize,
    title: "Family Needs",
    body: "Add a home office, guest suite, mother-in-law area, mudroom, pantry, or multigenerational space.",
  },
  {
    icon: IconIBeam,
    title: "Building System",
    body: "Discuss adjustments for steel, post-frame, foundation, and project-specific construction needs.",
  },
];

const STEPS = [
  {
    num: "1",
    title: "Choose a Plan",
    body: "Select the stock plan that comes closest to your needs — the closer the start, the smaller the budget.",
  },
  {
    num: "2",
    title: "Tell Us the Changes",
    body: "Share the plan name, your location, your wish list, sketches, and any site information.",
  },
  {
    num: "3",
    title: "Review Your Quote",
    body: "We define scope, deliverables, fee, and next steps — in writing, before any work begins.",
  },
  {
    num: "4",
    title: "Approve the Design",
    body: "We develop your revisions and prepare the updated plan package, with drafts along the way.",
  },
];

const CHECKLIST = [
  "Stock plan name or number",
  "Project city and state",
  "Written list of requested changes",
  "Marked-up plans or sketches when available",
  "Expected construction timeline",
];

export default async function CustomizePage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/renders/modern.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
              {/* Modern barndominium rendering — slower dusk LED trace per Section 3 */}
              <LedTraceHouse
                variant="elevation"
                sessionKey="gjd-trace-customize"
                className="pointer-events-none absolute bottom-0 right-0 w-[36rem] max-w-[76vw] opacity-50 md:opacity-75"
              />
              <div className="blueprint-grid relative">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
            <Eyebrow light>Start with a plan you love</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.04] text-white sm:text-7xl">
              Make the right plan <span className="italic text-gold">fit you.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              You don’t need to start from scratch to get a barndominium that works for your
              family, property, and budget. Choose one of our stock plans and let our design team
              tailor the details.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="inline-flex h-[52px] items-center bg-gold px-8 text-[13px] font-bold uppercase tracking-[0.14em] text-navy-deep transition-colors hover:bg-gold-dark hover:text-white"
              >
                Request a Modification Quote
              </a>
              <ButtonLink href="/plans" variant="outline">
                Browse Stock Plans
              </ButtonLink>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-[12px] font-bold uppercase tracking-[0.16em] text-white/70">
              <span>Professional design team</span>
              <span>·</span>
              <span>Clear scope before work begins</span>
              <span>·</span>
              <span>Plans available nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Common changes */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Common plan changes"
            title="The changes clients ask for most."
            body="If you like a plan's overall layout and exterior but need focused changes, customization is almost always the fastest, most economical path."
          />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {CHANGES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="group h-full bg-white p-8 transition-colors hover:bg-cream/60">
                  <span className="trace-icon grid h-12 w-12 place-items-center bg-cream text-gold-dark transition-colors">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{c.title}</h3>
                  <p className="mt-3 leading-7 text-body">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-deep py-20 text-white lg:py-28">
        <div className="blueprint-grid">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading
              light
              eyebrow="How it works"
              title="From favorite plan to your plan in four steps."
            />
            <div className="mt-14">
              <StepsFlow steps={STEPS} />
            </div>
          </div>
        </div>
      </section>

      {/* Decision + checklist */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="h-full border border-line bg-cream/60 p-8 sm:p-10">
                <FileCheck2 className="h-8 w-8 text-gold-dark" aria-hidden />
                <h3 className="mt-5 font-display text-3xl font-semibold text-navy">
                  Customization is right when…
                </h3>
                <p className="mt-4 leading-8 text-body">
                  You like the plan’s overall layout and exterior but need focused changes — a
                  bigger shop, a different bedroom count, a mirrored layout for your lot, porch
                  revisions.
                </p>
                <p className="mt-4 leading-8 text-body">
                  When the property, building system, or requested revisions call for a
                  substantially original solution, we’ll tell you honestly — and point you toward
                  fully custom design.
                </p>
                <div className="mt-6">
                  <ArrowLink href="/custom-design">Compare with custom design</ArrowLink>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full border border-line bg-white p-8 sm:p-10">
                <ListChecks className="h-8 w-8 text-gold-dark" aria-hidden />
                <h3 className="mt-5 font-display text-3xl font-semibold text-navy">
                  What to have ready
                </h3>
                <ul className="mt-6 space-y-4">
                  {CHECKLIST.map((item, i) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center border border-gold font-display text-sm font-semibold text-gold-dark">
                        {i + 1}
                      </span>
                      <p className="pt-1 leading-7 text-body">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="scroll-mt-24 bg-cream/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Request a quote"
                title="Tell us what you'd change."
                body="Pricing depends on scope and complexity — you'll receive a project-specific quote after we review your selected plan and request list. No work begins until you approve it."
              />
              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: ClipboardList,
                    title: "Scope in writing",
                    body: "Deliverables, fee and timeline defined before design starts.",
                  },
                  {
                    icon: Stamp,
                    title: "Stamps available",
                    body: "Engineering or architectural sealing can be added where required.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-5 border border-line bg-white p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center bg-navy text-gold">
                      <item.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-bold text-navy">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-body">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="border border-line bg-white p-7 shadow-card sm:p-10">
                <InquiryForm
                  type="modification"
                  planName={plan ?? ""}
                  showPlanField
                  showLocationField
                  showTimelineField
                  title="Modification quote request"
                  intro={
                    plan
                      ? `You're customizing ${plan}. Add the changes you'd like and we'll take it from there.`
                      : "Pick any stock plan as your starting point — or describe the closest plan and your goals."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            align="center"
            eyebrow="Questions"
            title="Modification FAQs"
          />
          <div className="mt-12">
            <Accordion
              items={[
                {
                  q: "How much do plan modifications cost?",
                  a: "Pricing depends on scope and complexity. After we review your selected plan and request list, you'll receive a project-specific quote in writing before any work begins.",
                },
                {
                  q: "Can you add a larger shop or RV garage?",
                  a: "Yes — it's one of our most common requests. Keep in mind that enlarging the shop can affect the floor plan, roof, elevations, and the overall building design, which we account for in your quote.",
                },
                {
                  q: "Can a plan be adjusted for my state?",
                  a: "Requirements vary by jurisdiction. Tell us your build location and we'll explain possible local architectural or engineering review — stamps are available for a separate cost.",
                },
                {
                  q: "What if I want to change most of the plan?",
                  a: "When revisions affect most of the layout or exterior, fully custom design is usually the better investment. We'll tell you honestly which path fits after reviewing your list.",
                },
              ]}
            />
          </div>
          <p className="mt-10 flex items-center justify-center gap-2 text-sm text-body">
            <Check className="h-4 w-4 text-gold" aria-hidden />
            Still deciding? <ArrowLink href="/plans">Browse the plan library</ArrowLink>
          </p>
        </div>
      </section>
    </>
  );
}
