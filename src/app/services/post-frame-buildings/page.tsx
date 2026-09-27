import type { Metadata } from "next";
import { AlertTriangle, Check, Truck } from "lucide-react";
import { IconDraftCompass, IconKitTruck, IconPostBeam } from "@/components/arch-icons";
import { InquiryForm } from "@/components/inquiry-form";
import { Reveal } from "@/components/reveal";
import { CtaBand, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Post-Frame Buildings — Oklahoma",
  description:
    "One-stop shop for wood post-frame buildings: custom plans, building kits and erection coordination. Currently serving Oklahoma for buildings and erection services.",
};

const WHY = [
  "Often 15–20% less expensive than steel buildings, depending on size and location",
  "No traditional foundation required — saving thousands on the project",
  "Dirt or gravel floor can be installed after the building is completed",
  "Wood frame buildings easily span up to 60 feet",
  "Easy to erect — a solid option for the do-it-yourself client",
  "No-maintenance exterior with metal siding and roof",
];

const CONSIDER = [
  "Eave heights limited — usually no more than 18' under most circumstances",
  "Building width limited to roughly 60', depending on the manufacturer",
  "Larger buildings ship on multiple trucks, raising freight costs",
  "Lower fire rating than steel, and termites are a factor with any wood structure",
  "Roof trusses are engineered, but the rest of the structure typically is not — a registered structural engineer may need to stamp plans for permit",
];

export default function PostFrameBuildingsPage() {
  return (
    <>
      <PageHero
        eyebrow="One-stop shop · Oklahoma"
        title="Post-Frame Buildings"
        body="In search of a quality post & frame building for your project? Whether you want a shop, home, or commercial building, we can provide the whole package — design, building kit, and erection coordination. Currently only selling and erecting buildings in Oklahoma."
        image="https://images.pexels.com/photos/37067773/pexels-photo-37067773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=827&w=1400"
      />

      {/* One stop shop */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Eyebrow>We are a one-stop shop</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.08] text-navy">
            Plans, kit and crew — one phone call.
          </h2>
          <p className="mt-4 max-w-2xl text-body">
            Currently servicing Oklahoma for buildings and erection services. Out of state? We'll
            still design your building plans anywhere in the U.S. or Canada.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: IconDraftCompass,
                num: "01",
                title: "Design Services",
                body: "A complete set of custom plans that matches up perfectly with your building order.",
              },
              {
                icon: IconPostBeam,
                num: "02",
                title: "Post-Frame Building Kit",
                body: "A building quote based on your plans — we take care of the entire ordering process for you.",
              },
              {
                icon: IconKitTruck,
                num: "03",
                title: "Erection Coordination",
                body: "Need help putting your building up? We have a list of preferred contractors to erect your shop or home.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group h-full border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="trace-icon grid h-12 w-12 place-items-center bg-navy text-gold transition-colors">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-4xl font-semibold text-cream-dark">{s.num}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-3 leading-7 text-body">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why / consider */}
      <section className="bg-navy-deep py-20 text-white lg:py-24">
        <div className="blueprint-grid">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <Reveal>
                <div>
                  <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                    So… why a post frame?
                  </h2>
                  <p className="mt-3 text-white/60">
                    A few reasons to choose wood post & frame for your barn, shop or barndominium.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {WHY.map((item) => (
                      <li key={item} className="flex gap-3 leading-7 text-white/80">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="border border-white/15 bg-white/5 p-8">
                  <h3 className="flex items-center gap-3 font-display text-2xl font-semibold">
                    <AlertTriangle className="h-6 w-6 text-gold" aria-hidden />
                    Things to consider first
                  </h3>
                  <ul className="mt-6 space-y-4 text-sm leading-6 text-white/70">
                    {CONSIDER.map((item) => (
                      <li key={item} className="flex gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <p className="mt-12 max-w-3xl text-white/70">
                Overall, post & frame buildings are a great, economical option for your home or
                shop. We currently only serve Oklahoma for the buildings themselves — however, if
                you're out of state we can definitely still help with the design.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Get a building quote</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-navy">
                Tell us about your project.
              </h2>
              <p className="mt-5 leading-8 text-body">
                Receive a building quote based on your plans — size, doors, colors and options.
                Buildings and erection services are currently available in Oklahoma only.
              </p>
              <div className="mt-8 flex items-center gap-4 border border-gold/60 bg-gold/10 p-5">
                <Truck className="h-8 w-8 shrink-0 text-gold-dark" aria-hidden />
                <p className="text-sm leading-6 text-body">
                  <strong className="text-navy">Note:</strong> Currently only selling buildings in
                  Oklahoma. Design services remain available nationwide.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="border border-line bg-white p-7 shadow-card sm:p-10">
                <InquiryForm
                  type="building-kit"
                  title="Post-frame building quote"
                  intro="Building size, door layout, location, and your timeline — that's all we need to start."
                  showLocationField
                  showTimelineField
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
