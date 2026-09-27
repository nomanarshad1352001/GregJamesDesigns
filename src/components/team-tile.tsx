"use client";

import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { useRef } from "react";
import type { TeamMember } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

/**
 * Team headshot treatment — fade up with a brief desaturated-to-full-color
 * transition on scroll-in. The visual itself never zooms or shifts;
 * on hover only the name gets a gold underline. Dignified, professional.
 */
export function TeamMonogram({
  name,
  role,
  className = "",
}: {
  name: string;
  role?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "grayscale(0.9)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "grayscale(0)" } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative grid place-items-center bg-navy ${className}`}
    >
      <span className="font-display text-8xl font-semibold text-gold/90">{initials(name)}</span>
      {role && (
        <p className="absolute bottom-6 text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
          {role}
        </p>
      )}
    </motion.div>
  );
}

export function TeamTile({ member, index }: { member: TeamMember; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "grayscale(0.85)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "grayscale(0)" } : {}}
      transition={{ duration: 0.6, delay: Math.min(index, 6) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group flex h-full flex-col border border-line bg-white p-8 transition-shadow duration-300 hover:shadow-lift sm:p-10"
    >
      <div className="flex items-center gap-5">
        <span className="grid h-16 w-16 shrink-0 place-items-center bg-navy font-display text-2xl font-semibold text-gold">
          {initials(member.name)}
        </span>
        <div>
          <h3 className="relative inline-block font-display text-2xl font-semibold text-navy">
            {member.name}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold shadow-[0_0_6px_rgba(217,155,53,0.5)] transition-transform duration-300 group-hover:scale-x-100" />
          </h3>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-dark">
            {member.role}
          </p>
        </div>
      </div>
      <p className="mt-6 flex-1 leading-7 text-body">{member.bio}</p>
      <div className="mt-6 border-t border-line pt-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy">Off the clock</p>
        <p className="mt-2 text-sm leading-6 text-body">{member.offClock}</p>
      </div>
      <a
        href={`mailto:${member.email}`}
        className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold"
      >
        <Mail className="h-4 w-4" aria-hidden /> {member.email}
      </a>
    </motion.article>
  );
}
