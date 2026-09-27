import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { IconCalendarClock, IconCustomize } from "@/components/arch-icons";
import { BookingCalendar } from "@/components/booking-calendar";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";
import { POOL_CONSTRUCTION, POOL_INTERIOR } from "@/lib/media";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Schedule a free 15-minute consultation for your barndominium project. Discuss your plans and questions with our design team — virtual or by phone.",
};

export default function ConsultationPage() {
  return (
    <>
      <section className="border-b border-line bg-cream/60">
        <div className="blueprint-grid-light">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <Eyebrow>Free consultation request</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.04] text-navy sm:text-6xl">
              Schedule a free 15-minute consultation.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-body">
              We’ll discuss your project and any questions you have. Check our availability and
              book a time slot that suits you — Monday through Friday, Central Time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <BookingCalendar />

          <div className="mt-16 grid gap-px border border-line bg-line lg:grid-cols-2">
            <div className="flex items-start gap-5 bg-white p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-navy text-gold">
                <IconCalendarClock className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold text-navy">
                  Free Virtual Consultation
                </h2>
                <p className="mt-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-body">
                  <Clock className="h-3.5 w-3.5 text-gold" aria-hidden /> 15 min · Free
                </p>
                <p className="mt-3 text-sm leading-6 text-body">
                  A quick one-on-one to discuss your project scope, answer initial questions, and
                  point you toward stock, modified, or custom design.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 bg-white p-8">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-gold text-navy-deep">
                <IconCustomize className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold text-navy">
                  Design Consultation
                </h2>
                <p className="mt-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-body">
                  <Clock className="h-3.5 w-3.5 text-gold" aria-hidden /> 1 hr · $249
                </p>
                <p className="mt-3 text-sm leading-6 text-body">
                  A deep-dive working session: site reviews, plan markups, budget strategy and
                  building-system guidance. Bookable after your free intro call.
                </p>
              </div>
            </div>
          </div>

          {/* What a consultation can unlock */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { src: POOL_CONSTRUCTION[4], alt: "Reviewing a roof frame on site", label: "Site & plan reviews" },
              { src: POOL_INTERIOR[3], alt: "Open-plan great room with fireplace", label: "Layout & lifestyle fit" },
              { src: "https://images.pexels.com/photos/37067773/pexels-photo-37067773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=827&w=1400", alt: "Shop and RV barndominium rendering", label: "Shop & system choices" },
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
