"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Bath, BedDouble, Warehouse } from "lucide-react";
import type { Plan } from "@/lib/data";
import { formatBaths, formatPrice, formatSqFt } from "@/lib/site";

/**
 * Plan card — uniform catalog treatment for every plan:
 * slow 1.03× hover settle, plus the "1/4"-style multi-image gallery:
 * on hover/tap-hold the numbered images cross-fade (~350ms each),
 * pausing on the image the cursor last landed on.
 */
export function PlanCard({ plan }: { plan: Plan }) {
  const gallery = useMemo(() => plan.gallery.slice(0, 6), [plan.gallery]);
  const [frame, setFrame] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const start = () => {
    setLoaded(true); // mount the stacked gallery only on first interaction
    if (timer.current || gallery.length < 2) return;
    timer.current = setInterval(() => {
      setFrame((i) => (i + 1) % gallery.length);
    }, 850);
  };

  useEffect(() => stop, []);

  const shown = loaded ? gallery : [gallery[0]];

  return (
    <Link
      href={`/plans/${plan.slug}`}
      className="group flex h-full flex-col border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-lift"
      aria-label={`View ${plan.name} barndominium plan`}
      onMouseEnter={start}
      onMouseLeave={() => {
        stop(); // pause on the image the cursor last landed on
      }}
    >
      <div className="shimmer-sweep relative aspect-[3/2] overflow-hidden bg-cream">
        <div className="absolute inset-0 transition-transform duration-[4000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
          {shown.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${src}-${i}`}
              src={src}
              alt={i === 0 ? `${plan.name} ${plan.style} barndominium exterior rendering` : ""}
              aria-hidden={i !== 0}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[350ms] ease-out ${
                i === frame ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {plan.badge && (
          <span className="absolute left-4 top-4 bg-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-navy-deep">
            {plan.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 border border-white/40 bg-navy-deep/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
          {plan.planNumber}
        </span>
        {gallery.length > 1 && (
          <span
            className={`absolute bottom-4 right-4 px-2 py-1 text-[10px] font-bold tracking-[0.12em] text-white backdrop-blur transition-colors ${
              frame > 0 || timer.current ? "bg-gold/90 text-navy-deep" : "bg-navy-deep/60"
            }`}
          >
            {frame + 1}/{gallery.length}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-[21px] font-semibold leading-tight text-navy">
              {plan.name}
            </h3>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-body">
              {plan.style}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-body">From</p>
            <p className="font-display text-xl font-semibold text-gold-dark">
              {formatPrice(plan.price)}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4 text-[13px] font-semibold text-navy/80">
          <span className="tracking-wide">{formatSqFt(plan.livingSqFt)}</span>
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-gold" aria-hidden /> {plan.bedrooms} Bed
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-gold" aria-hidden /> {formatBaths(plan.bathrooms)} Bath
          </span>
          {plan.garageSqFt !== null && (
            <span className="flex items-center gap-1.5">
              <Warehouse className="h-4 w-4 text-gold" aria-hidden />{" "}
              {plan.garageSqFt.toLocaleString()} SF
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between pt-5 transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
          <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-navy transition-colors group-hover:text-gold">
            <span className="relative pb-0.5">
              View Plan
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold shadow-[0_0_6px_rgba(217,155,53,0.5)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
          <span className="h-px flex-1" aria-hidden />
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-body">
            Customizable
          </span>
        </div>
      </div>
    </Link>
  );
}
