import type { Metadata } from "next";
import { Flame, ThermometerSun, VolumeX } from "lucide-react";
import { IconShieldRoof } from "@/components/arch-icons";
import { POOL_CONSTRUCTION, POOL_INTERIOR } from "@/lib/media";
import { InquiryForm } from "@/components/inquiry-form";
import { Reveal } from "@/components/reveal";
import { CtaBand, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "ICF Home Plans",
  description:
    "Insulated Concrete Form home plans — energy efficient, storm-safe, quiet and comfortable. Complete buildable plan sets for ICF construction.",
};

const BENEFITS = [
  {
    icon: ThermometerSun,
    title: "Energy Efficient",
    body: "Due to the insulated walls, you can save significantly on heating and cooling.",
  },
  {
    icon: IconShieldRoof,
    title: "Safe",
    body: "Durable against hurricanes, tornadoes, earthquakes and fires thanks to concrete walls. It's like building a big safe house.",
  },
  {
    icon: Flame,
    title: "Design Options",
    body: "Finish the home like any other — sheetrock attaches directly to the walls. ICF blocks are also great for basements and safe rooms.",
  },
  {
    icon: VolumeX,
    title: "Noise Reduction",
    body: "ICF homeowners consistently share how quiet their homes are — outside noise simply stays outside.",
  },
];

export default function IcfHomesPage() {
  return (
    <>
      <PageHero
        eyebrow="Design services"
        title="ICF Homes"
        body="We now design ICF (Insulated Concrete Form) homes. The design process is the same you know from us — and we provide a complete, buildable set of plans."
        image="/images/stock/px-8134821.jpg"
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>Why ICF</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-navy">
            Why ICF homes are a great option.
          </h2>
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="h-full bg-white p-8">
                  <span className="grid h-12 w-12 place-items-center bg-cream text-gold-dark">
                    <b.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{b.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-body">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="grid gap-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/stock/px-36777847.jpg"
                  alt="Modern concrete and white home exterior"
                  className="aspect-[16/10] w-full border border-line object-cover"
                />
                <div className="grid grid-cols-2 gap-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={POOL_CONSTRUCTION[3]}
                    alt="Renovation structure with new framing"
                    loading="lazy"
                    className="aspect-[4/3] w-full border border-line object-cover"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={POOL_INTERIOR[12]}
                    alt="Calm, quiet insulated interior"
                    loading="lazy"
                    className="aspect-[4/3] w-full border border-line object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center border border-line bg-cream/60 p-8">
                <h3 className="font-display text-2xl font-semibold text-navy">
                  Curious about the blocks themselves?
                </h3>
                <p className="mt-3 leading-7 text-body">
                  We design for ICF systems like Fox Blocks — check them out to learn more about
                  how insulated concrete forms go together, then come back and we'll design the
                  home around them.
                </p>
                <a
                  href="https://www.foxblocks.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center border border-navy px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  Visit Fox Blocks
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Get a quote</Eyebrow>
              <h3 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">
                Design your ICF home with us.
              </h3>
              <p className="mt-5 leading-8 text-body">
                Same process, same care — a buildable set of ICF plans designed around how you
                live. Tell us where you're building and what you have in mind.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="border border-line bg-white p-7 shadow-card sm:p-10">
                <InquiryForm
                  type="custom-design"
                  title="ICF home design quote"
                  showLocationField
                  showTimelineField
                  messageLabel="Describe your ICF project"
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
