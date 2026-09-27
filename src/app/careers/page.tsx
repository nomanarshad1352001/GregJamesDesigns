import type { Metadata } from "next";
import { ArrowRight, Check, Handshake, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { POOL_CONSTRUCTION, POOL_INTERIOR } from "@/lib/media";

export const metadata: Metadata = {
  title: "Careers — Principal Business Partner",
  description:
    "Help lead the business behind the dreams. Greg James Designs is seeking a Principal Business Partner — a profit-sharing leadership opportunity open to U.S. and Canadian citizens.",
};

const IMPACT = [
  "Leading general business operations",
  "Building scalable processes and clear priorities",
  "Strengthening sales activity and client relationships",
  "Guiding marketing campaigns and business development",
  "Supporting a collaborative, accountable team culture",
  "Helping define and execute the company's growth strategy",
];

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-line bg-cream/60">
        <div className="blueprint-grid-light">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <Eyebrow>Job opportunity</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.04] text-navy sm:text-6xl">
              Help lead the business behind the dreams.
            </h1>
            <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.22em] text-gold-dark">
              Principal Business Partner · Greg James Designs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="font-display text-3xl font-semibold text-navy">Mission</h2>
                <p className="mt-5 text-lg leading-8 text-body">
                  At Greg James Designs, we turn ideas into spaces people can see, feel, and one
                  day call home. Our work spans custom barndominiums, metal and post-frame homes,
                  renovations, and building solutions for clients throughout the United States and
                  Canada.
                </p>
                <p className="mt-5 leading-8 text-body">
                  As demand and opportunity grow, we are looking for a Principal Business Partner
                  who can bring operational leadership to the creative heart of our company. This
                  is a rare opportunity to join a design business at a meaningful point in its
                  journey — working alongside the founder and team, bringing structure to growth,
                  energy to sales, discipline to marketing, and strong leadership to daily
                  operations.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="mt-14 font-display text-3xl font-semibold text-navy">Your impact</h2>
                <p className="mt-4 leading-8 text-body">
                  You will help ensure that exceptional design is supported by an exceptional
                  business. That means:
                </p>
                <ul className="mt-6 space-y-3">
                  {IMPACT.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-body">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.15}>
                <h2 className="mt-14 font-display text-3xl font-semibold text-navy">
                  The person we are looking for
                </h2>
                <p className="mt-4 leading-8 text-body">
                  You are equal parts leader, organizer, communicator, and builder. You connect
                  well with people, enjoy the sales process, and know how to move from vision to
                  execution. You have years of experience running a company or leading within
                  management — preferably in a service-based organization.
                </p>
                <p className="mt-4 leading-8 text-body">
                  Most importantly, you are looking for more than employment. You want to
                  contribute at a partner level and accept both the opportunity and the challenge
                  of helping grow a business.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-14 border border-navy bg-navy-deep p-8 text-white sm:p-10">
                  <Handshake className="h-8 w-8 text-gold" aria-hidden />
                  <h2 className="mt-5 font-display text-3xl font-semibold">Partnership structure</h2>
                  <p className="mt-4 leading-8 text-white/75">
                    This is a profit-sharing partnership opportunity and is not a salaried
                    position. The right person will value influence, responsibility, and shared
                    success.
                  </p>
                  <p className="mt-4 flex items-start gap-2 leading-8 text-white/75">
                    <MapPin className="mt-1.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    Our home base is Guthrie, Oklahoma — but living locally is not required for the
                    right partner. The opportunity is open to U.S. and Canadian citizens.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Apply sidebar */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <div className="border border-line bg-white p-8 shadow-card sm:p-10">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-dark">
                      Start the conversation
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold text-navy">
                      Sound like you?
                    </h3>
                    <p className="mt-4 leading-7 text-body">
                      Please send your résumé and a short introduction to{" "}
                      <a
                        href="mailto:greg@gregjamesdesigns.com?subject=Principal%20Business%20Partner%20Opportunity"
                        className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4"
                      >
                        greg@gregjamesdesigns.com
                      </a>
                      . If there is a strong potential fit, we will contact you to arrange a
                      face-to-face meeting.
                    </p>
                    <a
                      href="mailto:greg@gregjamesdesigns.com?subject=Principal%20Business%20Partner%20Opportunity"
                      className="mt-8 flex h-[52px] w-full items-center justify-center gap-2 bg-gold text-[13px] font-bold uppercase tracking-[0.14em] text-navy-deep transition-colors hover:bg-gold-dark hover:text-white"
                    >
                      Apply by Email <ArrowRight className="h-4 w-4" aria-hidden />
                    </a>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-6 border border-line bg-cream/60 p-6 text-sm leading-6 text-body">
                    <p className="font-bold text-navy">Equal opportunity</p>
                    <p className="mt-1">
                      We evaluate every candidate on character, capability, and fit for the
                      journey ahead.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* The business behind the dreams — in pictures */}
          <div className="mt-16 grid gap-6 border-t border-line pt-14 sm:grid-cols-3">
            {[
              { src: "/images/hero-barndominium.jpg", alt: "Completed barndominium at dusk", label: "The homes we design" },
              { src: POOL_CONSTRUCTION[6], alt: "Modern home under construction", label: "The builds they become" },
              { src: POOL_INTERIOR[8], alt: "Warm chalet interior with fireplace", label: "The lives they hold" },
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
        </div>
      </section>
    </>
  );
}
