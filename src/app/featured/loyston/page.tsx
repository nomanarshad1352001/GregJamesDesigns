import type { Metadata } from "next";
import { BedDouble, Check, ChevronRight, Grape, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { PlanGallery } from "@/components/plan-gallery";
import { InquiryForm } from "@/components/inquiry-form";
import { Reveal } from "@/components/reveal";
import { ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Loyston at Copper Top Estates — Featured Project",
  description:
    "A Tennessee lakeview destination wedding venue: 11,000+ SF hosting 150-guest celebrations and luxury accommodations for 36. Customize this design for your project.",
};

const SPECS = [
  {
    icon: Users,
    title: "150 guests",
    body: "A spacious facility for celebrations of up to 150 guests.",
  },
  {
    icon: Sparkles,
    title: "Every season",
    body: "Climate control makes it suitable year-round — indoor or outdoor ceremonies.",
  },
  {
    icon: BedDouble,
    title: "11,000+ SF",
    body: "On-site luxury accommodations for the whole wedding party.",
  },
  {
    icon: Grape,
    title: "36 overnight",
    body: "Sleeps up to 36 guests — and a winery vision rooted in Tennessee earth.",
  },
];

const PLAN_INCLUDES = [
  {
    title: "3D Modeling",
    body: "A perspective view of the home's design, inside and out.",
  },
  {
    title: "Main & Upper-Level Floor Plans",
    body: 'Typically drawn to 1/4" scale with all dimensions and notes, plus a complete window and door schedule.',
  },
  {
    title: "Exterior Elevations",
    body: "All elevations noted, with an aerial roof view showing hips, valleys and ridges.",
  },
  {
    title: "Siding Notes & Details",
    body: "Siding installation page plus wall sheathing and portal wall framing.",
  },
  {
    title: "General Notes & Area Details",
    body: "Square footage for foundation, porches, patios, garage and floor plans, plus contractor notes.",
  },
  {
    title: "Foundation Plan",
    body: "Dimensioned foundation plan with generic beam details and a basic plumbing layout. Slab standard; alternates for a fee.",
  },
  {
    title: "Joist & Truss Diagram",
    body: "Placement and direction of floor joists and suggested roof truss layout.",
  },
  {
    title: "Wall Sections",
    body: "Wall materials and assembly, plate heights, and fireplace detail.",
  },
];

export default function LoystonPage() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-line bg-cream/50">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-body sm:px-6">
          <Link href="/" className="transition-colors hover:text-gold">Home</Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <span className="text-navy">Featured Project — The Loyston</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow light>Featured project</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">
                The Loyston at Copper Top Estates
              </h1>
              <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.24em] text-gold">
                Your Tennessee lakeview destination wedding venue
              </p>
              <p className="mt-6 leading-8 text-white/75">
                Owner Matt Fleck, his wife Jodi and their four daughters began their Loyston
                journey over two years ago with the purchase of a beautiful Norris Lake / Smoky
                Mountain view property in Andersonville, Tennessee — now known as Copper Top
                Estates.
              </p>
              <p className="mt-4 leading-8 text-white/75">
                Purchased initially as a summer rental, the long-term vision grew into a
                destination wedding venue and winery. The venue name honors the rich local history
                of Loyston Point and Norris Dam — and now shares some of the most beautiful views
                in East Tennessee with couples making everlasting memories.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/customize">Customize This Design</ButtonLink>
                <a
                  href="#plan-set"
                  className="inline-flex h-[52px] items-center border border-white/60 px-8 text-[13px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-gold hover:text-gold"
                >
                  What's in the Plan Set
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <PlanGallery
                images={[
                  "/images/loyston-venue.jpg",
                  "/images/renders/farmhouse.jpg",
                  "/images/floorplan-main.jpg",
                  "/images/interior-great-room.jpg",
                ]}
                name="The Loyston"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key specs */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>Key specs</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-navy">
            Built for the biggest days of people's lives.
          </h2>
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {SPECS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full bg-white p-8">
                  <span className="grid h-12 w-12 place-items-center bg-cream text-gold-dark">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-body">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plan set inclusions */}
      <section id="plan-set" className="scroll-mt-24 bg-cream/60 py-20 lg:py-24">
        <div className="blueprint-grid-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Eyebrow>Documentation</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-navy">
              What's included in this plan set.
            </h2>
            <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {PLAN_INCLUDES.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.04}>
                  <div className="h-full bg-white p-6">
                    <p className="flex items-start gap-2 font-bold leading-snug text-navy">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-body">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <div className="mt-10 border border-gold/60 bg-gold/10 p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy">
                  Pricing
                </p>
                <p className="mt-2 leading-7 text-body">
                  Contact us for all pricing options — this design can be re-licensed and
                  customized for your venue, event center, or estate project.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Customize CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Make it yours</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-navy">
                We can customize this project for you.
              </h2>
              <p className="mt-5 leading-8 text-body">
                Share your vision with us! Describe your desired changes and we'll provide a
                personalized design estimate — venue, retreat, event center, or a very grand
                family estate.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="border border-line bg-white p-7 shadow-card sm:p-10">
                <InquiryForm
                  type="modification"
                  planName="The Loyston at Copper Top Estates"
                  showPlanField
                  showLocationField
                  showTimelineField
                  title="Customize The Loyston"
                  intro="Describe the changes you have in mind and we'll respond with a design estimate."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
