import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Phone,
  Play,
  Warehouse,
} from "lucide-react";
import { getFeaturedPlans, getTestimonials } from "@/lib/queries";
import { PlanCard } from "@/components/plan-card";
import { Reveal } from "@/components/reveal";
import { LedTraceHouse } from "@/components/led-trace";
import { ImageReveal } from "@/components/image-reveal";
import { PathsSection } from "@/components/paths-section";
import { GalleryMarquee } from "@/components/gallery-marquee";
import { CountUp } from "@/components/count-up";
import { WordReveal } from "@/components/word-reveal";
import {
  DimensionDivider,
  IconDraftCompass,
  IconIBeam,
  IconICFBlock,
  IconPostBeam,
  IconRenovation,
} from "@/components/arch-icons";
import { TestimonialsCarousel } from "@/components/testimonials";
import { ArrowLink, ButtonLink, CtaBand, Eyebrow, SectionHeading } from "@/components/ui";
import { SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return <HomeContent />;
}

async function HomeContent() {
  const [featured, testimonials] = await Promise.all([getFeaturedPlans(), getTestimonials()]);

  return (
    <>
      {/* ————— HERO ————— */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-barndominium.jpg"
          alt="Modern barndominium home at dusk with glowing windows"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/70 to-navy-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/30" />

        {/* Signature LED light-trace — a barndominium drawing itself at dusk */}
        <LedTraceHouse className="pointer-events-none absolute bottom-0 right-0 w-[42rem] max-w-[82vw] opacity-60 md:opacity-90" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-28 sm:px-6">
          <Reveal>
            <Eyebrow light>Plans made for real life</Eyebrow>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-[86px]">
              Where dreams
              <br />
              take <span className="italic text-gold">shape.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.27}>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
              Barndominium house plans, ready when you are. Choose a professionally designed stock
              plan, customize one to fit your life, or work with our team to create something
              completely original.
            </p>
          </Reveal>
          <Reveal delay={0.27}>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/plans">Shop Barndominium Plans</ButtonLink>
              <ButtonLink href="/custom-design" variant="outline">
                Start a Custom Design
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-[12px] font-bold uppercase tracking-[0.18em] text-white/70">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
                Stock plans from $1,300
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
                Every plan is customizable
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
                Serving all 50 states & Canada
              </span>
            </div>
          </Reveal>
        </div>

        <a
          href="#collection"
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white/70 transition-colors hover:text-gold lg:flex"
        >
          Explore
          <span className="grid h-10 w-10 animate-bounce place-items-center border border-white/30">
            <ArrowRight className="h-4 w-4 rotate-90" />
          </span>
        </a>
      </section>

      {/* ————— STATS ————— */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-line sm:divide-x lg:grid-cols-4">
          {[
            { end: 35, suffix: "+", label: "Years in construction" },
            { end: 50, suffix: "+", label: "States & provinces served" },
            { end: 29, suffix: "", label: "Stock plans & counting" },
            { end: 1300, prefix: "$", label: "Complete plan sets from" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="px-6 py-10 text-center sm:px-8">
              <CountUp
                end={s.end}
                prefix={s.prefix ?? ""}
                suffix={s.suffix}
                className="font-display text-4xl font-semibold text-navy sm:text-5xl"
              />
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-body">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— PLAN DISCOVERY ————— */}
      <section id="collection" className="bg-cream/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Explore the collection"
              title="Find the plan that fits your life."
              body="Browse by size, bedrooms, or the kind of space you need — then make any plan your own. Every set is complete and ready to build."
            />
            <ArrowLink href="/plans">Browse all 29 plans</ArrowLink>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((plan, i) => (
              <Reveal key={plan.slug} delay={i * 0.1}>
                <PlanCard plan={plan} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ————— THREE PATHS ————— */}
      <PathsSection />

      {/* ————— WHY BARNDO ————— */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white lg:py-28">
        <div className="blueprint-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-full w-full border border-gold/40" aria-hidden />
                <ImageReveal
                  src="/images/interior-great-room.jpg"
                  alt="Open-concept barndominium great room with vaulted ceiling"
                  className="relative aspect-[4/3] w-full"
                />
                <div className="absolute -bottom-6 -right-4 bg-gold px-6 py-4 text-navy-deep sm:-right-6">
                  <p className="font-display text-2xl font-semibold">Wide open.</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em]">By design</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Eyebrow light>Is a barndominium right for you?</Eyebrow>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl">
                  More than a home — a lifestyle.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="mt-8 space-y-5">
                  {[
                    "Large, wide-open spaces — the roof is carried by exterior walls, leaving the interior free for unlimited design possibilities.",
                    "Flexible for many styles of architecture: farmhouse, modern, and everything in between.",
                    "A seamless connection between indoor and outdoor living — a peaceful retreat to unwind and recharge.",
                    "Open-concept living that makes entertaining and family time effortless.",
                  ].map((point) => (
                    <li key={point} className="flex gap-4">
                      <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center bg-gold text-navy-deep">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <p className="leading-7 text-white/75">{point}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 border border-white/15 bg-white/5 p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                    Honest talk
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Barndos aren’t for every situation — complex footprints raise costs, and many
                    HOAs restrict metal exteriors. Wood post-frame structures handle hips and
                    direction changes more affordably, and brick or stone veneer can satisfy strict
                    covenants.
                  </p>
                  <ArrowLink href="/resources/benefits-and-challenges" light>
                    Read the full breakdown
                  </ArrowLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— WHAT WE DO ————— */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="What we do"
                  title="One studio. Every kind of barndo."
                  body="From stock plan sets to ground-up custom design, metal buildings to ICF — our work spans the full life of a project."
                />
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/renders/farmhouse.jpg"
                    alt="White modern farmhouse barndominium rendering"
                    className="aspect-[3/2] w-full border border-line object-cover"
                  />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-body">
                    Designing as we speak… · Visualizations by our studio
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-line border-y border-line">
                {[
                  {
                    num: "01",
                    icon: IconDraftCompass,
                    title: "Custom Barndominium Designs",
                    body: "Ground-up custom homes designed around your land, lifestyle and budget — with 3D renderings at every stage.",
                    href: "/custom-design",
                  },
                  {
                    num: "02",
                    icon: IconIBeam,
                    title: "Metal & Post-Frame Home Designs",
                    body: "Weld-up, bolt-up and wood post-frame homes — quality architectural plans at an affordable rate.",
                    href: "/services/metal-post-frame-homes",
                  },
                  {
                    num: "03",
                    icon: IconPostBeam,
                    title: "Post-Frame Building Designs",
                    body: "Shops, barns and commercial post-frame buildings — a one-stop shop for plans and building quotes in Oklahoma.",
                    href: "/services/post-frame-buildings",
                  },
                  {
                    num: "04",
                    icon: IconRenovation,
                    title: "Home Renovation Designs",
                    body: "As-built plans, additions and complete remodel drawings — including demo plans, renderings and interior design.",
                    href: "/services/home-renovation",
                  },
                  {
                    num: "05",
                    icon: IconICFBlock,
                    title: "ICF Home Plans",
                    body: "Insulated Concrete Form homes — energy-efficient, storm-tough, and quiet as a vault.",
                    href: "/services/icf-homes",
                  },
                ].map((s, i) => (
                  <Reveal key={s.num} delay={i * 0.05}>
                    <Link href={s.href} className="group flex gap-6 py-7 transition-colors hover:bg-cream/50 sm:gap-10">
                      <span className="hidden font-display text-3xl font-semibold text-cream-dark transition-colors group-hover:text-gold sm:block">
                        {s.num}
                      </span>
                      <span className="grid h-12 w-12 shrink-0 place-items-center border border-line text-gold-dark transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-navy-deep">
                        <s.icon className="h-6 w-6" />
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display text-2xl font-semibold text-navy transition-colors group-hover:text-gold-dark">
                          {s.title}
                        </h3>
                        <p className="mt-2 max-w-xl leading-7 text-body">{s.body}</p>
                      </div>
                      <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-body/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ————— FILMSTRIP ————— */}
      <GalleryMarquee />

      {/* ————— FEATURED DESIGN ————— */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white lg:py-28">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/loyston-venue.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow light>This season’s featured design</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl">
                The Loyston at Copper Top Estates
              </h2>
              <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.24em] text-gold">
                Your Tennessee lakeview destination wedding venue
              </p>
              <p className="mt-6 max-w-xl leading-8 text-white/75">
                Born from a family’s dream on a Norris Lake bluff, The Loyston hosts celebrations
                of up to 150 guests, sleeps 36 across 11,000 SF of luxury accommodations, and
                frames some of the finest views in East Tennessee.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/featured/loyston">Explore The Loyston</ButtonLink>
                <ButtonLink href="/customize" variant="outline">
                  Customize This Design
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-3 gap-px bg-white/15">
                {[
                  ["150", "Guest celebrations"],
                  ["11,000 SF", "Luxury accommodations"],
                  ["36", "Overnight guests"],
                ].map(([num, label]) => (
                  <div key={label} className="bg-navy-deep/80 px-5 py-8 text-center backdrop-blur">
                    <p className="font-display text-3xl font-semibold text-gold sm:text-4xl">{num}</p>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/loyston-venue.jpg"
                alt="The Loyston wedding venue barndominium at blue hour"
                className="mt-6 aspect-[16/9] w-full border border-white/15 object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dimension-line divider — product content into trust content (once per page) */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <DimensionDivider className="text-navy/20" />
      </div>

      {/* ————— EXPERIENCE ————— */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <Reveal>
                <Eyebrow>Experience behind every line</Eyebrow>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl">
                  Designed by people who understand how buildings get built.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 leading-8 text-body">
                  Greg James Designs combines real-world building knowledge with thoughtful
                  residential design. Our specialty is custom barndominiums that blend rustic charm
                  with modern comfort — plans that are beautiful on screen and practical on the
                  jobsite.
                </p>
                <p className="mt-4 leading-8 text-body">
                  From open-concept floor plans to luxurious outdoor living areas, we guide you
                  from initial concept to final blueprints — with a focus on quality, efficiency,
                  and homes built to last.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <blockquote className="mt-8 border-l-4 border-gold bg-cream/70 p-6 font-display text-2xl font-medium italic leading-relaxed text-navy">
                  “
                  <WordReveal text="A stock plan should feel like a smart beginning, not a compromise." />
                  ”
                </blockquote>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <ButtonLink href="/about" variant="navy">
                    Meet the Design Team
                  </ButtonLink>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-navy transition-colors group-hover:border-gold">
                      <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden />
                    </span>
                    Watch the RV Shop build series
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <ImageReveal
                  src="/images/renders/lodge.jpg"
                  alt="Rustic lodge barndominium rendering"
                  className="aspect-[3/4] w-full"
                />
                <ImageReveal
                  src="/images/renders/lakehouse.jpg"
                  alt="Lakefront barndominium rendering at golden hour"
                  className="mt-10 aspect-[3/4] w-full"
                  delay={0.12}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ————— TESTIMONIALS ————— */}
      <section className="bg-navy py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow light>Client stories</Eyebrow>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
                  First-class, from first call to final set.
                </h2>
                <p className="mt-5 leading-8 text-white/70">
                  Homeowners, ranchers, venue owners and dreamers across the U.S. and Canada trust
                  our team with the places they’ll call home.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.15}>
                <TestimonialsCarousel testimonials={testimonials} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ————— CALL STRIP ————— */}
      <section className="border-b border-line bg-cream/70">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center bg-navy text-gold">
              <Phone className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="font-display text-2xl font-semibold text-navy sm:text-3xl">
                Let’s connect! {SITE.serviceArea}.
              </p>
              <p className="mt-1 text-body">
                Give us a call at{" "}
                <a href={SITE.phoneHref} className="font-bold text-gold-dark hover:underline">
                  {SITE.phone}
                </a>{" "}
                · {SITE.hours}
              </p>
            </div>
          </div>
          <ButtonLink href="/contact">Request a Quote</ButtonLink>
        </div>
      </section>

      {/* ————— BOTTOM CTA ————— */}
      <CtaBand
        title="Ready to build your dream home?"
        body="Your dream barndominium awaits. From initial concept to final blueprints, we’ll guide you through every step of the process."
        primary={{ href: "/plans", label: "Shop Stock Plans" }}
        secondary={{ href: "/contact", label: "Contact Us" }}
      />
    </>
  );
}
