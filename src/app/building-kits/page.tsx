import type { Metadata } from "next";
import { Check, Truck } from "lucide-react";
import { IconKitTruck, IconPostBeam, IconStockPlan } from "@/components/arch-icons";
import { InquiryForm } from "@/components/inquiry-form";
import { Reveal } from "@/components/reveal";
import { ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Barndominium Building Kits",
  description:
    "Complete barndominium building kits paired with award-winning floor plans. Heavy-duty post-frame kits delivered across Oklahoma and North Texas.",
};

const KIT_INCLUDES = [
  "Heavy-duty 6x6 (and larger) premium post & beam frames with industrial-grade steel plate joinery",
  "Engineered roof trusses, sized for your plan and your snow/wind loads",
  "Metal roof and siding package with trim and fasteners",
  "Framed openings per your plan — doors, windows, and shop bays",
  "Flexible customization: adjust dimensions, reconfigure floor plans, or swap architectural details",
];

const OFFERINGS = [
  {
    icon: IconPostBeam,
    title: "Post-Frame Kits (Wood)",
    body: "Ideal for complex rooflines, hips, and changes in direction that steel might not handle as cost-effectively.",
  },
  {
    icon: IconStockPlan,
    title: "The “Shell Only” Package",
    body: "For DIYers who want the exterior dried-in quickly, then finish the interior on their own schedule.",
  },
  {
    icon: IconKitTruck,
    title: "The “Turnkey Blueprint + Kit” Bundle",
    body: "A premium package including the full architectural set and the matching building components — a guaranteed fit between the two.",
  },
];

export default function BuildingKitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/37067773/pexels-photo-37067773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=827&w=1400"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="blueprint-grid relative">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
            <Eyebrow light>Custom designs, delivered</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.04] text-white sm:text-7xl">
              Complete barndominium building kits.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              We’ve paired our award-winning floor plans with post-frame building kits. Get the
              look you want and the structure you need, all in one place — delivered across
              Oklahoma and North Texas.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kit-quote"
                className="inline-flex h-[52px] items-center bg-gold px-8 text-[13px] font-bold uppercase tracking-[0.14em] text-navy-deep transition-colors hover:bg-gold-dark hover:text-white"
              >
                Get a Kit Quote
              </a>
              <ButtonLink href="/plans" variant="outline">
                Choose a Plan First
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Why buy from a designer */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <Eyebrow>Why buy from a designer?</Eyebrow>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-navy">
                  Most manufacturers sell “boxes.” We sell homes.
                </h2>
                <p className="mt-6 leading-8 text-body">
                  Most manufacturers sell boxes without a clear interior vision. We don’t just sell
                  wood — when you buy a kit through us, you’re getting a structure engineered
                  specifically to fit our custom floor plans.
                </p>
                <p className="mt-4 leading-8 text-body">
                  We provide the blueprints <em>and</em> the kit, ensuring a perfect fit between
                  the two. No mismatched openings, no plan-versus-building surprises on the
                  jobsite.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border border-line bg-cream/60 p-8">
                <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-navy">
                  Every Greg James Post-Frame Kit includes
                </h3>
                <ul className="mt-5 space-y-4">
                  {KIT_INCLUDES.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-body">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-deep py-20 text-white lg:py-24">
        <div className="blueprint-grid">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Eyebrow light>The Greg James post-frame process</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl">
              Select. Customize. Construct.
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Our pre-designed wood post-frame kits serve as the perfect architectural foundation
              for your next project — crafted with the same uncompromising quality as our fully
              custom designs, with exceptional value from streamlined engineering.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "Select",
                  body: "Pick the stock plan or kit footprint closest to your needs — or bring your own design.",
                },
                {
                  num: "02",
                  title: "Customize",
                  body: "Tailor your kit to your lifestyle — adjust dimensions, reconfigure floor plans, swap architectural details.",
                },
                {
                  num: "03",
                  title: "Construct",
                  body: "Materials delivered to your jobsite across Oklahoma and North Texas; erection by your crew or our preferred contractors.",
                },
              ].map((s, i) => (
                <Reveal key={s.num} delay={i * 0.08}>
                  <div className="border border-white/15 bg-white/5 p-8">
                    <span className="font-display text-5xl font-semibold text-gold/30">{s.num}</span>
                    <h3 className="mt-4 font-display text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/70">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>Categorized kit offerings</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-navy">
            Three ways to buy your building.
          </h2>
          <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-3">
            {OFFERINGS.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.06}>
                <div className="group h-full bg-white p-8">
                  <span className="trace-icon grid h-12 w-12 place-items-center bg-cream text-gold-dark transition-colors">
                    <o.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{o.title}</h3>
                  <p className="mt-3 leading-7 text-body">{o.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Kit & framework renderings — same fade-up + slow hover-scale as plan cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { src: "https://images.pexels.com/photos/37067773/pexels-photo-37067773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=827&w=1400", alt: "Shop and RV barndominium kit rendering", label: "Shop & RV framework" },
              { src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop", alt: "Farmhouse barndominium kit rendering", label: "Farmhouse shell, dried-in" },
              { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop", alt: "Completed barndominium at dusk", label: "Delivered & completed" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 0.1}>
                <figure className="group relative aspect-[4/3] overflow-hidden border border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[4000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent px-5 pb-4 pt-12 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                    {img.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-8 flex items-start gap-4 border border-gold/60 bg-gold/10 p-5">
              <Truck className="h-7 w-7 shrink-0 text-gold-dark" aria-hidden />
              <p className="text-sm leading-6 text-body">
                <strong className="text-navy">Please note:</strong> pricing, engineering,
                permitting, delivery and installation vary by project and jurisdiction. Kits are
                currently delivered across Oklahoma and North Texas — design services remain
                available nationwide.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      <section id="kit-quote" className="scroll-mt-24 bg-cream/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Get a kit quote</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-navy">
                Tell us what you're building.
              </h2>
              <p className="mt-5 leading-8 text-body">
                Include your project location, the plan (or size) you have in mind, and your ideal
                timeline. We'll respond with kit pricing and next steps — or schedule a full
                consultation to walk through it together.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="border border-line bg-white p-7 shadow-card sm:p-10">
                <InquiryForm
                  type="building-kit"
                  title="Building kit quote request"
                  showPlanField
                  showLocationField
                  showTimelineField
                  messageLabel="Building size and notes"
                  messagePlaceholder="e.g. 40' x 60' with 14' RV bay, or The Stallion #0017 with an extended shop…"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
