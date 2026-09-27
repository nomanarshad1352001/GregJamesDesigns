import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Accordion } from "@/components/accordion";
import { ArrowLink, CtaBand, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site";
import { POOL_INTERIOR, POOL_CONSTRUCTION } from "@/lib/media";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to the questions we hear most: services, consultations, plan timelines, engineering stamps, service area, plan licensing and barndominium energy efficiency.",
};

const FAQS = [
  {
    q: "What services do you offer?",
    a: "We provide custom plans for barndominiums — including homes, event centers, churches and equestrian facilities. For local clients around the Oklahoma City area, we provide a subscription service for construction management. If you have an existing home, we can also provide renovation plans.",
  },
  {
    q: "What is included in the consultation meeting?",
    a: "A consultation with Greg or a member of our senior design team, either in person or virtually. We'll do our best to answer all of your questions about your project and clarify the process. Additional consultations beyond the free intro can be scheduled at $179 (45 min) or $250 (Saturday, 45 min).",
  },
  {
    q: "How long does it take to get a set of plans?",
    a: "On average, about 60–90 days to receive your custom plans, though this varies depending on scope, revisions and workload. Stock plan delivery is much faster — confirmed with your order.",
  },
  {
    q: "Do you provide an architectural stamp for your plans?",
    a: "We provide the design — we are designers, not licensed architects. Greg is self-taught with over 35 years in commercial and residential construction. Stamps can be arranged separately where your jurisdiction requires them.",
  },
  {
    q: "Are the engineer plans included?",
    a: "We can provide engineering plans for an additional cost, as well as HVAC and framing plans.",
  },
  {
    q: "Do you handle permits and other regulatory issues?",
    a: "No — permitting is handled by the homeowner or your contractor. Your plan set is prepared to support that process.",
  },
  {
    q: "Is there an expiration date on the plans?",
    a: "No. Once delivered, your plans don't expire.",
  },
  {
    q: "Do you design plans throughout the US?",
    a: "Yes — we serve every state in the U.S. as well as Canada.",
  },
  {
    q: "Can you design on an existing foundation and/or structure?",
    a: "Yes — we do remodeling and additions on existing homes, including designs that work with an existing foundation.",
  },
  {
    q: "Do you need to have land before starting the design process?",
    a: "No — land is not required to begin the design. That said, knowing your land's dimensions, orientation and views makes for a better design.",
  },
  {
    q: "Do you build in every state?",
    a: "We only provide construction management services for local projects in the Oklahoma City area. Design services are nationwide.",
  },
  {
    q: "Do you need to know building sizes before starting the design?",
    a: "No — we can help you determine the size of the structure based on your needs and wants.",
  },
  {
    q: "Are barndominiums energy efficient?",
    a: "Yes — as with any structure, when they are designed properly. Insulation strategy, orientation and window planning make all the difference.",
  },
  {
    q: "Are these plans transferable?",
    a: "No. Plans are the property of Greg James Designs, LLC. We grant permission to build one home or building for the client the plans were sold to.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-cream/60">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/renders/farmhouse.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/30" />
        <div className="blueprint-grid-light relative">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <Eyebrow>Tools & tips</Eyebrow>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.04] text-navy sm:text-6xl">
              Frequently asked questions.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-body">
              Looking for something specific? Here are the answers we give most often — and if
              yours isn't here, we're one call away.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Accordion items={FAQS} />
            </div>

            {/* Visual sidebar */}
            <div className="lg:col-span-4">
              <div className="space-y-5 lg:sticky lg:top-32">
                <Reveal>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={POOL_INTERIOR[0]}
                    alt="Finished barndominium great room with fireplace"
                    loading="lazy"
                    className="aspect-[4/3] w-full border border-line object-cover"
                  />
                </Reveal>
                <Reveal delay={0.08}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={POOL_CONSTRUCTION[1]}
                    alt="Barndominium framing on the jobsite"
                    loading="lazy"
                    className="aspect-[4/3] w-full border border-line object-cover"
                  />
                </Reveal>
                <Reveal delay={0.16}>
                  <div className="border border-navy bg-navy-deep p-7 text-white">
                    <span className="grid h-11 w-11 place-items-center bg-gold text-navy-deep">
                      <Phone className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="mt-5 font-display text-2xl font-semibold">
                      One question away from an answer.
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-white/70">
                      Call {SITE.phone} during studio hours — or ask us through the contact form and
                      we'll reply within one business day.
                    </p>
                    <div className="mt-5">
                      <ArrowLink href="/contact" light>
                        Ask the design team
                      </ArrowLink>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready when you are."
        body="Browse the plan library, or book a free 15-minute consultation to talk through your project."
        primary={{ href: "/plans", label: "Shop Stock Plans" }}
        secondary={{ href: "/consultation", label: "Book a Free Call" }}
      />
    </>
  );
}
