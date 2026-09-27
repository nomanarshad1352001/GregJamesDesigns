import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { SITE } from "@/lib/site";
import { FacebookIcon, YoutubeIcon } from "@/components/social-icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Connect with the Greg James Designs team about plan sets, building orders, renovations and custom barndominium design. Call +1 405-856-2358 or send a message.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const formType = type === "custom" ? "custom-design" : "general";

  return (
    <>
      <section className="border-b border-line bg-cream/60">
        <div className="blueprint-grid-light">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <Eyebrow>Contact us</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.04] text-navy sm:text-6xl">
              We'd love to hear about your project.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-body">
              Thank you for visiting. Whether you're designing a set of plans, ordering a building,
              starting a renovation, or navigating construction — fill out the form below for more
              information or a quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Info cards */}
            <div className="space-y-6 lg:col-span-5">
              <Reveal>
                <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
                  <a
                    href={SITE.phoneHref}
                    className="group bg-white p-6 transition-colors hover:bg-cream/60"
                  >
                    <Phone className="h-6 w-6 text-gold-dark" aria-hidden />
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-body">
                      Office
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-navy group-hover:text-gold-dark">
                      {SITE.phone}
                    </p>
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="group bg-white p-6 transition-colors hover:bg-cream/60"
                  >
                    <Mail className="h-6 w-6 text-gold-dark" aria-hidden />
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-body">
                      Email
                    </p>
                    <p className="mt-1 break-all font-display text-sm font-semibold text-navy group-hover:text-gold-dark">
                      {SITE.email}
                    </p>
                  </a>
                  <div className="bg-white p-6">
                    <MapPin className="h-6 w-6 text-gold-dark" aria-hidden />
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-body">
                      Studio
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-navy">{SITE.address}</p>
                  </div>
                  <div className="bg-white p-6">
                    <Clock className="h-6 w-6 text-gold-dark" aria-hidden />
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-body">
                      Hours
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-navy">
                      Mon – Fri · 8:00 am – 3:30 pm
                      <span className="block text-body">Sat – Sun · Closed</span>
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop"
                    alt="Greg James Designs barndominium project"
                    className="aspect-[16/9] w-full border border-line object-cover"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600&auto=format&fit=crop"
                      alt="Lakefront barndominium at golden hour"
                      loading="lazy"
                      className="aspect-[4/3] w-full border border-line object-cover"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.pexels.com/photos/37067773/pexels-photo-37067773.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=827&w=1400"
                      alt="Shop and RV barndominium rendering"
                      loading="lazy"
                      className="aspect-[4/3] w-full border border-line object-cover"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-body">
                    Follow along
                  </span>
                  <a
                    href={SITE.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="grid h-10 w-10 place-items-center border border-line text-navy transition-colors hover:border-gold hover:text-gold"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={SITE.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="grid h-10 w-10 place-items-center border border-line text-navy transition-colors hover:border-gold hover:text-gold"
                  >
                    <YoutubeIcon className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <div className="border border-line bg-white p-7 shadow-card sm:p-10">
                  <InquiryForm
                    type={formType}
                    showTypeTabs
                    title="Get a quote or ask a question"
                    intro="Choose the path that fits — tell us a little about your project and a member of our design team will respond within one business day."
                    showLocationField
                    showTimelineField
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
