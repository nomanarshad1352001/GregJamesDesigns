"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { IconCustomize, IconDraftCompass, IconStockPlan } from "@/components/arch-icons";

/**
 * Icon box with micro LED-trace: draws the icon outline in gold on hover
 * (desktop). Touch devices have no hover, so each icon traces once on
 * scroll-into-view instead — per the motion addendum.
 */
function IconBox({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <span
      ref={ref}
      className={`trace-icon grid h-12 w-12 place-items-center transition-colors ${
        touch && inView ? "in-view" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}

const PATHS: {
  num: string;
  kicker: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  dark: boolean;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    num: "01",
    kicker: "Ready to build",
    title: "Buy a Stock Plan",
    body: "Choose a complete, professionally prepared plan set and move your project forward faster. Full buildable drawings from $1,300.",
    cta: "Browse All Plans",
    href: "/plans",
    dark: false,
    icon: IconStockPlan,
  },
  {
    num: "02",
    kicker: "Make it yours",
    title: "Customize a Plan",
    body: "Love a design but need a larger shop, a different layout, or another bedroom? Start with a proven plan and let our team tailor it to your life.",
    cta: "Explore Plan Customization",
    href: "/customize",
    dark: true,
    icon: IconCustomize,
  },
  {
    num: "03",
    kicker: "Completely original",
    title: "Design From Scratch",
    body: "Work one-on-one with our design team to create a barndominium built around your land, lifestyle, and vision — from first sketch to final set.",
    cta: "Start Your Custom Design",
    href: "/custom-design",
    dark: false,
    icon: IconDraftCompass,
  },
];

export function PathsSection() {
  // The three cards are compared as a set — they fade up together (no stagger),
  // then the center "Customize" card's navy fill wipes left-to-right to draw the eye.
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Three ways to build"
            title="Buy a plan, tailor a plan — or dream one up with us."
            align="center"
          />
        </Reveal>

        <div ref={gridRef} className="mt-14 grid gap-6 lg:grid-cols-3">
          {PATHS.map((path) => (
            <Reveal key={path.num} className="h-full">
              <div
                className={`group relative flex h-full flex-col overflow-hidden border p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-10 ${
                  path.dark ? "border-navy bg-white" : "border-line bg-white"
                }`}
              >
                {/* Navy color-fill wipe for the featured middle card — 400ms, arriving after the flanking cards settle */}
                {path.dark && (
                  <span
                    aria-hidden
                    className="absolute inset-0 z-0 origin-left bg-navy transition-transform duration-[400ms] ease-out"
                    style={{
                      transform: gridInView || reduce ? "scaleX(1)" : "scaleX(0)",
                      transitionDelay: "450ms",
                    }}
                  />
                )}
                <div className="relative z-10 flex items-start justify-between">
                  <IconBox
                    className={path.dark ? "bg-gold text-navy-deep" : "bg-cream text-gold-dark"}
                  >
                    <path.icon className="h-6 w-6" />
                  </IconBox>
                  <span
                    className={`font-display text-5xl font-semibold ${
                      path.dark ? "text-white/15" : "text-cream-dark"
                    }`}
                  >
                    {path.num}
                  </span>
                </div>
                <p
                  className={`relative z-10 mt-8 text-[11px] font-bold uppercase tracking-[0.24em] ${
                    path.dark ? "text-gold" : "text-gold-dark"
                  }`}
                >
                  {path.kicker}
                </p>
                <h3
                  className={`relative z-10 mt-2 font-display text-3xl font-semibold ${
                    path.dark ? "text-white" : "text-navy"
                  }`}
                >
                  {path.title}
                </h3>
                <p
                  className={`relative z-10 mt-4 flex-1 leading-7 ${path.dark ? "text-white/70" : "text-body"}`}
                >
                  {path.body}
                </p>
                <Link
                  href={path.href}
                  className={`relative z-10 mt-8 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] transition-colors ${
                    path.dark ? "text-gold hover:text-white" : "text-navy hover:text-gold"
                  }`}
                >
                  {path.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
