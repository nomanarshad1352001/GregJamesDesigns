import type { Metadata } from "next";
import { Check, MapPin, Ruler, Sparkles, Timer, Wallet } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { Reveal } from "@/components/reveal";
import { StepsFlow } from "@/components/process-steps";
import { LedTraceHouse } from "@/components/led-trace";
import { ButtonLink, CtaBand, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Custom Barndominium Design",
  description:
    "Original barndominium design built around your property, lifestyle, building system and priorities. Work one-on-one with our design team from concept to construction plans.",
};

const PROCESS = [
  {
    num: "01",
    title: "Discovery",
    body: "We learn how you live: land, views, family, work, hobbies, timeline and budget. This conversation shapes everything.",
  },
  {
    num: "02",
    title: "Concept",
    body: "First floor plan draft and exterior direction. You're allotted 3 drafts to create a completely custom floor plan.",
  },
  {
    num: "03",
    title: "Refinement",
    body: "Review each draft, make notes, and work with your designer until every room earns its place.",
  },
  {
    num: "04",
    title: "Documentation",
    body: "Floor plans, elevations, electrical, 3D renderings and a preliminary set of construction plans — delivered without watermarks.",
  },
  {
    num: "05",
    title: "Coordination",
    body: "Take your set to your mortgage company, building provider and construction manager — we're a call away the whole way.",
  },
];

const INCLUDED = [
  "Floor plans, drawn to scale with full dimensions",
  "Exterior elevations on all sides",
  "Electrical plan",
  "3D renderings of your design",
  "Preliminary set of construction plans",
];

export default function CustomDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-barndominium.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        {/* Slow atmospheric elevation trace — "built around your vision" at dusk */}
        <LedTraceHouse
          variant="elevation"
          sessionKey="gjd-trace-custom"
          className="pointer-events-none absolute bottom-0 right-0 w-[38rem] max-w-[78vw] opacity-55 md:opacity-80"
        />
        <div className="blueprint-grid relative">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
            <Eyebrow light>Completely original</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.04] text-white sm:text-7xl">
              Custom barndominium plans, drawn <span className="italic text-gold">around you.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Metal buildings — weld-up or bolt-up — post-frame, barndominiums, and ICF homes.
              Original design built around your property, lifestyle, building system, and
              priorities.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#start"
                className="inline-flex h-[52px] items-center bg-gold px-8 text-[13px] font-bold uppercase tracking-[0.14em] text-navy-deep transition-colors hover:bg-gold-dark hover:text-white"
              >
                Start a Custom Design
              </a>
              <ButtonLink href="/plans" variant="outline">
                Browse Stock Plans Instead
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Best fit */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <Eyebrow>Is custom right for you?</Eyebrow>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl">
                  When no stock plan comes close, start here.
                </h2>
                <p className="mt-6 leading-8 text-body">
                  Custom design is the right investment when your land is unusually shaped or
                  sloped, when your lifestyle doesn’t fit a template, when the building system is
                  project-specific, or when your revision list would rewrite a stock plan anyway.
                </p>
                <p className="mt-4 leading-8 text-body">
                  We work closely with you throughout the design of your home and deliver quality
                  working plans personalized to your liking — typically 60–90 days from kickoff to
                  final set, depending on scope.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-line bg-cream/60 p-8">
                <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-navy">
                  Your bid set includes
                </h3>
                <ul className="mt-5 space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-body">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-line pt-5 text-sm leading-6 text-body">
                  For an additional charge: site plans, detailed interior design, engineering,
                  HVAC and framing plans.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-deep py-20 text-white lg:py-28">
        <div className="blueprint-grid">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading
              light
              eyebrow="The design process"
              title="Five phases. You in the loop for every one."
            />
            <div className="mt-14">
              <StepsFlow steps={PROCESS} />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Recent custom work" title="From first sketch to framed view." />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { src: "/images/renders/lodge.jpg", alt: "Custom lodge barndominium", label: "Family Lodge · Oklahoma" },
              { src: "/images/interior-great-room.jpg", alt: "Custom great room interior", label: "Great room · Interior design" },
              { src: "/images/loyston-venue.jpg", alt: "The Loyston venue", label: "The Loyston · Tennessee" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 0.08}>
                <figure className="group relative aspect-[4/3] overflow-hidden border border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent px-5 pb-4 pt-12 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                    {img.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification form */}
      <section id="start" className="scroll-mt-24 bg-cream/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Start here"
                title="Tell us about your project."
                body="Share the essentials below and our team will respond with a design agreement and quote. The more you can tell us, the sharper the quote."
              />
              <ul className="mt-10 space-y-5">
                {[
                  { icon: MapPin, text: "Project location and whether you own the land" },
                  { icon: Ruler, text: "Approximate size, bedrooms, and shop needs" },
                  { icon: Wallet, text: "Budget range and how you'll fund the build" },
                  { icon: Timer, text: "Timeline — when you want to be building" },
                  { icon: Sparkles, text: "Must-haves and inspiration — links welcome" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center bg-navy text-gold">
                      <item.icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="pt-1.5 text-[15px] leading-7 text-body">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="border border-line bg-white p-7 shadow-card sm:p-10">
                <InquiryForm
                  type="custom-design"
                  title="Custom design request"
                  intro="Receive a quote and our design agreement — tell our team a little about your barndominium build."
                  showLocationField
                  showTimelineField
                  showBudgetField
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Rather talk it through first?"
        body="Book a free 15-minute consultation and we'll help you decide between stock, modified, and custom."
        primary={{ href: "/consultation", label: "Book a Free Consultation" }}
        secondary={{ href: "/faqs", label: "Read the FAQs" }}
      />
    </>
  );
}
