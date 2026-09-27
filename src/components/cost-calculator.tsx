"use client";

import { useMemo, useState } from "react";
import { Info } from "lucide-react";

const FINISH_LEVELS = [
  {
    key: "essential",
    label: "Essential",
    desc: "Simple, durable finishes. Sealed concrete, stock cabinetry, clean and honest.",
    livingRate: 95,
  },
  {
    key: "classic",
    label: "Classic",
    desc: "The most popular level. Wood-look floors, quartz counters, quality fixtures.",
    livingRate: 130,
  },
  {
    key: "signature",
    label: "Signature",
    desc: "High-end finish-out. Custom cabinetry, stone, appliance package, designer details.",
    livingRate: 185,
  },
];

const SYSTEMS = [
  {
    key: "post-frame",
    label: "Wood Post-Frame",
    desc: "Most economical shell. No traditional foundation required.",
    livingShell: 48,
    shopShell: 24,
  },
  {
    key: "steel-weld",
    label: "Steel Weld-Up",
    desc: "Rigid frame welded on site. Great for tall doors and wide spans.",
    livingShell: 62,
    shopShell: 33,
  },
  {
    key: "steel-bolt",
    label: "Steel Bolt-Up (Red Iron)",
    desc: "Pre-engineered frames. Predictable at larger sizes.",
    livingShell: 58,
    shopShell: 30,
  },
];

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function CostCalculator() {
  const [living, setLiving] = useState(2400);
  const [shop, setShop] = useState(1200);
  const [finish, setFinish] = useState("classic");
  const [system, setSystem] = useState("post-frame");
  const [siteWork, setSiteWork] = useState(true);

  const result = useMemo(() => {
    const f = FINISH_LEVELS.find((x) => x.key === finish)!;
    const s = SYSTEMS.find((x) => x.key === system)!;

    const shell = living * s.livingShell + shop * s.shopShell;
    const finishOut = living * f.livingRate + shop * 18;
    const site = siteWork ? 45000 : 0;
    const soft = 12000 + living * 3;

    const mid = shell + finishOut + site + soft;
    return {
      low: Math.round((mid * 0.92) / 1000) * 1000,
      high: Math.round((mid * 1.12) / 1000) * 1000,
      shell,
      finishOut,
      site,
      soft,
      perSf: mid / (living + shop),
    };
  }, [living, shop, finish, system, siteWork]);

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      {/* Inputs */}
      <div className="space-y-8 lg:col-span-7">
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="calc-living" className="text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
              Heated living area
            </label>
            <span className="font-display text-2xl font-semibold text-navy">
              {living.toLocaleString()} SF
            </span>
          </div>
          <input
            id="calc-living"
            type="range"
            min={800}
            max={6000}
            step={50}
            value={living}
            onChange={(e) => setLiving(Number(e.target.value))}
            className="mt-3 w-full"
          />
          <div className="mt-1 flex justify-between text-xs text-body">
            <span>800 SF</span>
            <span>6,000 SF</span>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="calc-shop" className="text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
              Garage / shop area
            </label>
            <span className="font-display text-2xl font-semibold text-navy">
              {shop.toLocaleString()} SF
            </span>
          </div>
          <input
            id="calc-shop"
            type="range"
            min={0}
            max={3500}
            step={50}
            value={shop}
            onChange={(e) => setShop(Number(e.target.value))}
            className="mt-3 w-full"
          />
          <div className="mt-1 flex justify-between text-xs text-body">
            <span>None</span>
            <span>3,500 SF</span>
          </div>
        </div>

        <div>
          <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
            Finish level
          </span>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {FINISH_LEVELS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFinish(f.key)}
                className={`border p-4 text-left transition-colors ${
                  finish === f.key
                    ? "border-navy bg-navy text-white"
                    : "border-line bg-white hover:border-navy"
                }`}
                aria-pressed={finish === f.key}
              >
                <span className="block text-sm font-bold">{f.label}</span>
                <span className={`mt-1 block text-xs leading-5 ${finish === f.key ? "text-white/70" : "text-body"}`}>
                  {f.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
            Building system
          </span>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {SYSTEMS.map((s) => (
              <button
                key={s.key}
                onClick={() => setSystem(s.key)}
                className={`border p-4 text-left transition-colors ${
                  system === s.key
                    ? "border-gold bg-gold/10 text-navy"
                    : "border-line bg-white hover:border-gold"
                }`}
                aria-pressed={system === s.key}
              >
                <span className="block text-sm font-bold">{s.label}</span>
                <span className="mt-1 block text-xs leading-5 text-body">{s.desc}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setSiteWork((v) => !v)}
          className="flex w-full items-center justify-between border border-line px-5 py-4 text-left transition-colors hover:border-navy"
          aria-pressed={siteWork}
        >
          <span>
            <span className="block text-sm font-bold text-navy">Include typical site work</span>
            <span className="mt-0.5 block text-xs text-body">
              Drive, well, septic and utility allowance (~$45,000)
            </span>
          </span>
          <span className={`h-6 w-11 rounded-full p-0.5 transition-colors ${siteWork ? "bg-gold" : "bg-line"}`}>
            <span
              className={`block h-5 w-5 rounded-full bg-white transition-transform ${siteWork ? "translate-x-5" : ""}`}
            />
          </span>
        </button>
      </div>

      {/* Results */}
      <div className="lg:col-span-5">
        <div className="sticky top-32 border border-navy bg-navy-deep p-8 text-white shadow-lift">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
            Estimated build budget
          </p>
          <p className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {fmt(result.low)} – {fmt(result.high)}
          </p>
          <p className="mt-2 text-sm text-white/60">
            ≈ {fmt(result.perSf)} per enclosed SF · {((living + shop)).toLocaleString()} SF total
          </p>

          <dl className="mt-8 space-y-3 border-t border-white/15 pt-6 text-sm">
            {[
              ["Shell materials & erection", result.shell],
              ["Interior finish-out", result.finishOut],
              ...(siteWork ? ([["Site work allowance", result.site]] as const) : []),
              ["Plans, engineering & soft costs", result.soft],
            ].map(([label, value]) => (
              <div key={label as string} className="flex justify-between gap-4">
                <dt className="text-white/70">{label}</dt>
                <dd className="font-semibold">{fmt(value as number)}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex gap-3 border border-white/15 bg-white/5 p-4 text-xs leading-5 text-white/70">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
            <p>
              This is a planning range, not a quote. Material markets, region, and your final
              design move real numbers. Request a quote for a number you can build around.
            </p>
          </div>

          <a
            href={`/contact?type=custom&living=${living}&shop=${shop}`}
            className="mt-8 flex h-[52px] w-full items-center justify-center bg-gold text-[13px] font-bold uppercase tracking-[0.14em] text-navy-deep transition-colors hover:bg-gold-dark hover:text-white"
          >
            Get a Real Quote
          </a>
        </div>
      </div>
    </div>
  );
}
