import type { Metadata } from "next";
import { getTeam } from "@/lib/queries";
import { Reveal } from "@/components/reveal";
import { TeamMonogram, TeamTile } from "@/components/team-tile";
import { CtaBand, Eyebrow, SectionHeading } from "@/components/ui";
import { POOL_CONSTRUCTION, POOL_INTERIOR } from "@/lib/media";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About & Meet the Team",
  description:
    "Meet the faces of Greg James Designs — a team passionate about turning your barndominium dream into a reality. 35+ years of construction and design experience.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default async function AboutPage() {
  const team = await getTeam();
  const founder = team[0];
  const rest = team.slice(1);

  return (
    <>
      {/* Story hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-barndominium.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/40" />
        <div className="blueprint-grid relative">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
            <Eyebrow light>The faces of Greg James Designs</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.04] text-white sm:text-7xl">
              Redefining spaces. <span className="italic text-gold">Redefining lives.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              We believe that redefining your space redefines your life. Our team is passionate
              about turning your dream of a barndominium into a reality — challenging the
              traditional perception of what a barndominium can be.
            </p>
          </div>
        </div>
      </section>

      {/* Founder story */}
      {founder && (
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <Reveal className="lg:col-span-5">
                <div className="sticky top-32">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 h-full w-full border border-gold/50" aria-hidden />
                  <TeamMonogram
                    name={founder.name}
                    role={founder.role}
                    className="relative aspect-[4/5]"
                  />
                </div>
                </div>
              </Reveal>
              <div className="lg:col-span-7">
                <Reveal>
                  <Eyebrow>How did Greg James Designs get started?</Eyebrow>
                  <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl">
                    {founder.name} — Owner & Lead Designer
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-7 text-lg leading-8 text-body">{founder.bio}</p>
                  <p className="mt-5 leading-8 text-body">
                    He looks forward to helping you with your new home — bringing the same care to
                    your plans that he once brought to hand-built hulls on the Gulf Coast.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="mt-8 border-l-4 border-gold bg-cream/70 p-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-dark">
                      Off the clock
                    </p>
                    <p className="mt-2 leading-7 text-body">{founder.offClock}</p>
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mt-10 grid grid-cols-3 divide-x divide-line border border-line text-center">
                    {[
                      ["35+", "Years of construction"],
                      ["1997", "Design journey began"],
                      ["100s", "Projects designed"],
                    ].map(([num, label]) => (
                      <div key={label} className="px-4 py-6">
                        <p className="font-display text-3xl font-semibold text-navy">{num}</p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-body">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team grid */}
      <section className="bg-cream/60 py-20 lg:py-28">
        <div className="blueprint-grid-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Who we are"
              title="The team behind the plans."
              body="We work closely with you, listening attentively to your unique needs and desires. Together, we'll create a functional and stylish home that reflects your personal style."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {rest.map((member, i) => (
                <TeamTile key={member.id} member={member} index={i} />
              ))}
            </div>

            {/* Inside the studio — the work behind the people */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { src: POOL_CONSTRUCTION[1], alt: "House framing on the jobsite" },
                { src: "/images/renders/lodge.jpg", alt: "Lodge barndominium rendering" },
                { src: POOL_INTERIOR[5], alt: "Open-plan interior with wooden beams" },
                { src: POOL_CONSTRUCTION[4], alt: "Reviewing a roof frame" },
              ].map((img, i) => (
                <Reveal key={img.src} delay={i * 0.06}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className={`aspect-[4/5] w-full border border-line object-cover ${i % 2 === 1 ? "lg:mt-8" : ""}`}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's design something worth calling home."
        body="Browse the plan library, or start a conversation with the team about your project."
        primary={{ href: "/plans", label: "Browse Plans" }}
        secondary={{ href: "/contact", label: "Contact the Team" }}
      />
    </>
  );
}
