import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] ${
        light ? "text-gold" : "text-gold"
      }`}
    >
      <span className="inline-block h-px w-8 bg-gold" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  light,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </div>
      <h2
        className={`mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-5 text-[17px] leading-8 ${light ? "text-white/70" : "text-body"}`}>
          {body}
        </p>
      )}
    </div>
  );
}

export function ArrowLink({
  href,
  children,
  light,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] transition-colors ${
        light ? "text-gold hover:text-white" : "text-navy hover:text-gold"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "navy" | "white";
  className?: string;
}) {
  const styles = {
    gold: "btn-glow btn-shimmer bg-gold text-navy-deep hover:bg-gold-dark hover:text-white",
    navy: "bg-navy text-white hover:bg-navy-deep",
    outline: "border border-white/70 text-white hover:border-gold hover:text-gold",
    white: "bg-white text-navy hover:bg-cream",
  } as const;
  return (
    <Link
      href={href}
      className={`inline-flex h-[52px] items-center justify-center gap-2 px-8 text-[13px] font-bold uppercase tracking-[0.14em] transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  image,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/75 to-navy-deep/30" />
        </>
      )}
      <div className="blueprint-grid relative">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          {body && <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{body}</p>}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Not sure whether to buy, modify, or go custom?",
  body = "Talk it through with the people who draw barndominiums every day. A short conversation can save you months.",
  primary = { href: "/contact", label: "Talk With Our Design Team" },
  secondary = { href: "/plans", label: "Browse Stock Plans" },
}: {
  title?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div className="blueprint-grid">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 leading-7 text-white/70">{body}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
            <ButtonLink href={secondary.href} variant="outline">
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
