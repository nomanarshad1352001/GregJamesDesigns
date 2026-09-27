import type { Metadata } from "next";
import { Check } from "lucide-react";
import { IconIBeam, IconPostBeam } from "@/components/arch-icons";
import { POOL_CONSTRUCTION } from "@/lib/media";
import { InquiryForm } from "@/components/inquiry-form";
import { Reveal } from "@/components/reveal";
import { CtaBand, Eyebrow, PageHero } from "@/components/ui";
import { YoutubeIcon } from "@/components/social-icons";

export const metadata: Metadata = {
  title: "Metal & Post-Frame Home Plans",
  description:
    "Quality architectural plans for metal building homes and post-frame homes at an affordable rate. Floor plans, elevations, 3D renderings and construction plans.",
};

const INCLUDED = [
  "Floor plans drawn to scale with all dimensions and notes",
  "Exterior elevations with an aerial roof view",
  "3D renderings of your home design",
  "Preliminary set of construction plans",
];

export default function MetalPostFrameHomesPage() {
  return (
    <>
      <PageHero
        eyebrow="Design services"
        title="Metal & Post-Frame Homes"
        body="We specialize in designing metal building homes and post & frame homes — quality architectural plans at an affordable rate. We're passionate about hearing your vision and providing an enjoyable experience along the way."
        image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <Eyebrow>Your bid set</Eyebrow>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-navy">
                  Everything your builder needs to price it right.
                </h2>
                <ul className="mt-8 space-y-4">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-body">
                      <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center bg-gold text-navy-deep">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-l-4 border-gold bg-cream/70 p-5 text-sm leading-7 text-body">
                  For an additional charge, we can also provide a site plan or more detailed
                  interior design work. With a complete set of plans, you'll be ready to start
                  building your dream home.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="relative">
                <div className="absolute -right-4 -top-4 h-full w-full border border-gold/50" aria-hidden />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/36777966/pexels-photo-36777966.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=827&w=1400"
                  alt="Post-frame lodge style home rendering"
                  className="relative aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Building systems */}
      <section className="bg-cream/60 py-20 lg:py-24">
        <div className="blueprint-grid-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Eyebrow>Three systems, one set of plans</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-navy">
              We design for the way you want to build.
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  icon: IconIBeam,
                  title: "Steel — Weld-Up",
                  body: "Rigid frames welded on site. Excellent for wide clear spans, tall walls and the biggest door openings. Fire-resistant and termite-proof.",
                },
                {
                  icon: IconIBeam,
                  title: "Steel — Bolt-Up",
                  body: "Pre-engineered red-iron frames that bolt together. Predictable engineering and pricing, especially at larger sizes. Fast to erect.",
                },
                {
                  icon: IconPostBeam,
                  title: "Wood Post-Frame",
                  body: "Often 15–20% less expensive than steel, no traditional foundation required, and the friendliest system for porches, hips and complex rooflines.",
                },
              ].map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="h-full border border-line bg-white p-8">
                    <div className="flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center bg-cream text-gold-dark">
                        <s.icon className="h-6 w-6" />
                      </span>
                      <span className="font-display text-5xl font-semibold text-cream-dark">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-navy">{s.title}</h3>
                    <p className="mt-3 leading-7 text-body">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            {/* Jobsite proof — metal and post-frame work in progress */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { src: POOL_CONSTRUCTION[2], alt: "Roof framing against the sky", label: "Frame first" },
                { src: POOL_CONSTRUCTION[0], alt: "Interior residential framing", label: "Built to plan" },
                { src: POOL_CONSTRUCTION[6], alt: "Modern home under construction", label: "Erected & enclosed" },
              ].map((img, i) => (
                <Reveal key={img.src} delay={i * 0.08}>
                  <figure className="group relative aspect-[16/10] overflow-hidden border border-line">
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

            <Reveal delay={0.2}>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="group mt-10 flex items-center gap-4 border border-line bg-white p-5 transition-colors hover:border-gold"
              >
                <span className="grid h-12 w-12 place-items-center bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                  <YoutubeIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-bold text-navy">Check out our YouTube channel</span>
                  <span className="text-sm text-body">
                    Hear more about the different building types and other tips.
                  </span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Get a quote</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-navy">
                Let's design your metal or post-frame home.
              </h2>
              <p className="mt-5 leading-8 text-body">
                Our design team would love to connect. Give us a call, fill out the form for a
                quote and more information, or schedule an appointment to meet about your project.
                We look forward to working with you.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/7746642/pexels-photo-7746642.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=827&w=1400"
                alt="Finished metal building home interior"
                className="mt-8 aspect-[16/10] w-full border border-line object-cover"
              />
            </div>
            <div className="lg:col-span-7">
              <div className="border border-line bg-white p-7 shadow-card sm:p-10">
                <InquiryForm
                  type="custom-design"
                  title="Metal & post-frame home quote"
                  intro="Tell us about your project and we'll respond with a quote and design agreement."
                  showLocationField
                  showTimelineField
                  showBudgetField
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
