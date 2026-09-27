import type { Metadata } from "next";
import { Check } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { Reveal } from "@/components/reveal";
import { CtaBand, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Home Renovation Design",
  description:
    "Home renovation and remodeling plans: complete architectural drawings, demo plans, 3D renderings and interior design. As-built plans and design concepts.",
};

const INCLUDED = [
  "Complete set of architectural drawings",
  "As-built plan of your existing home",
  "Demo plan, as needed",
  "3D renderings of the new spaces",
  "Interior design, as needed",
];

export default function HomeRenovationPage() {
  return (
    <>
      <PageHero
        eyebrow="Design services"
        title="Home Renovation Design"
        body="We design home renovation and remodeling plans — from as-built documentation of what you have, to beautiful drawings of what it will become. Pricing is on a per-project basis."
        image="https://images.pexels.com/photos/7746642/pexels-photo-7746642.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=827&w=1400"
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="grid grid-cols-1 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/7746642/pexels-photo-7746642.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=827&w=1400"
                  alt="Renovated open-concept interior with vaulted beams"
                  className="aspect-[16/10] w-full border border-line object-cover"
                />
                <div className="grid grid-cols-2 gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.pexels.com/photos/3865399/pexels-photo-3865399.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=827&w=1400"
                    alt="Cottage style home exterior"
                    className="aspect-[4/3] w-full border border-line object-cover"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/floorplan-main.jpg"
                    alt="Architectural floor plan drawing"
                    className="aspect-[4/3] w-full border border-line bg-white object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <Eyebrow>How it works</Eyebrow>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-navy">
                  First we draw what you have. Then we design what you'll love.
                </h2>
                <p className="mt-6 leading-8 text-body">
                  In the process, we take your as-built plans and go over design concepts with you
                  — opening kitchens, adding primary suites, rethinking whole floors. Every
                  renovation is priced individually, because no two existing homes are alike.
                </p>
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
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Get a quote</Eyebrow>
              <h3 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">
                Tell us about your renovation.
              </h3>
              <p className="mt-5 leading-8 text-body">
                Contact us today for more information, or to schedule an appointment. Share the
                address, the rooms involved, and what you wish the house did better.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="border border-line bg-white p-7 shadow-card sm:p-10">
                <InquiryForm
                  type="custom-design"
                  title="Renovation design quote"
                  showLocationField
                  showTimelineField
                  messageLabel="Describe your renovation"
                  messagePlaceholder="e.g. Opening the kitchen to the living room, adding a primary suite over the garage…"
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
