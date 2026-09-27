"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import type { Plan } from "@/lib/data";
import { PlanCard } from "@/components/plan-card";
import { CountUp } from "@/components/count-up";
import { ButtonLink } from "@/components/ui";

type SortKey = "featured" | "price-asc" | "price-desc" | "sqft-asc" | "sqft-desc" | "newest";

const QUICK_FILTERS = [
  { key: "all", label: "All Plans" },
  { key: "featured", label: "Featured" },
  { key: "under2000", label: "Under 2,000 SF" },
  { key: "bed3", label: "3 Bedroom" },
  { key: "bed4", label: "4+ Bedroom" },
  { key: "shop", label: "With Shop" },
  { key: "rv", label: "RV Garage" },
  { key: "small", label: "Small Home" },
] as const;

type QuickKey = (typeof QUICK_FILTERS)[number]["key"];

export function PlansBrowser({ plans }: { plans: Plan[] }) {
  const [quick, setQuick] = useState<QuickKey>("all");
  const [query, setQuery] = useState("");
  const [maxSqFt, setMaxSqFt] = useState(6000);
  const [minBeds, setMinBeds] = useState(0);
  const [shopOnly, setShopOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...plans];

    if (quick === "featured") list = list.filter((p) => p.featured);
    if (quick === "under2000") list = list.filter((p) => p.livingSqFt < 2000);
    if (quick === "bed3") list = list.filter((p) => p.bedrooms === 3);
    if (quick === "bed4") list = list.filter((p) => p.bedrooms >= 4);
    if (quick === "shop") list = list.filter((p) => p.hasShop);
    if (quick === "rv") list = list.filter((p) => p.hasRvGarage);
    if (quick === "small") list = list.filter((p) => p.category === "Small Home");

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.planNumber.toLowerCase().includes(q) ||
          p.style.toLowerCase().includes(q),
      );
    }

    list = list.filter((p) => p.livingSqFt <= maxSqFt);
    if (minBeds > 0) list = list.filter((p) => p.bedrooms >= minBeds);
    if (shopOnly) list = list.filter((p) => p.hasShop || (p.garageSqFt ?? 0) >= 800);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "sqft-asc":
        list.sort((a, b) => a.livingSqFt - b.livingSqFt);
        break;
      case "sqft-desc":
        list.sort((a, b) => b.livingSqFt - a.livingSqFt);
        break;
      case "newest":
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.displayOrder - a.displayOrder);
        break;
      default:
        list.sort((a, b) => Number(b.featured) - Number(a.featured) || a.displayOrder - b.displayOrder);
    }

    return list;
  }, [plans, quick, query, maxSqFt, minBeds, shopOnly, sort]);

  const reset = () => {
    setQuick("all");
    setQuery("");
    setMaxSqFt(6000);
    setMinBeds(0);
    setShopOnly(false);
    setSort("featured");
  };

  return (
    <div>
      {/* Toolbar */}
      <div className="border border-line bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-wrap items-center gap-2">
            {QUICK_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setQuick(f.key)}
                className={`relative h-10 border px-4 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors ${
                  quick === f.key
                    ? "border-navy bg-navy text-white"
                    : "border-line bg-white text-body hover:border-navy hover:text-navy"
                }`}
                aria-pressed={quick === f.key}
              >
                {f.label}
                {/* Gold underline slides between chips rather than cutting hard */}
                {quick === f.key && (
                  <motion.span
                    layoutId="quick-chip-underline"
                    className="absolute inset-x-3 bottom-1.5 h-[2px] bg-gold shadow-[0_0_6px_rgba(217,155,53,0.6)]"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body" aria-hidden />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or #plan"
                className="h-11 w-full border border-line bg-white pl-10 pr-3 text-sm text-ink outline-none transition-colors placeholder:text-body/60 focus:border-gold"
                aria-label="Search plans"
              />
            </div>
            <button
              onClick={() => setShowFilters((v) => !v)}
              className={`flex h-11 items-center gap-2 border px-4 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors ${
                showFilters ? "border-navy bg-navy text-white" : "border-line text-navy hover:border-navy"
              }`}
              aria-expanded={showFilters}
            >
              <SlidersHorizontal className="h-4 w-4" aria-hidden />
              Filters
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-5 grid gap-6 border-t border-line pt-5 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label htmlFor="sqft" className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy">
                    Max living area
                  </label>
                  <div className="mt-2 flex items-center gap-3">
                    <input
                      id="sqft"
                      type="range"
                      min={1100}
                      max={6000}
                      step={50}
                      value={maxSqFt}
                      onChange={(e) => setMaxSqFt(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="w-24 text-right text-sm font-semibold text-navy">
                      {maxSqFt >= 6000 ? "Any" : `${maxSqFt.toLocaleString()} SF`}
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="beds" className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy">
                    Bedrooms
                  </label>
                  <select
                    id="beds"
                    value={minBeds}
                    onChange={(e) => setMinBeds(Number(e.target.value))}
                    className="mt-2 h-11 w-full border border-line bg-white px-3 text-sm font-semibold text-navy outline-none focus:border-gold"
                  >
                    <option value={0}>Any</option>
                    <option value={2}>2+</option>
                    <option value={3}>3+</option>
                    <option value={4}>4+</option>
                    <option value={5}>5+</option>
                  </select>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy">
                    Shop / garage
                  </span>
                  <button
                    onClick={() => setShopOnly((v) => !v)}
                    className={`mt-2 flex h-11 w-full items-center justify-between border px-3 text-sm font-semibold transition-colors ${
                      shopOnly ? "border-navy bg-navy text-white" : "border-line text-navy"
                    }`}
                    aria-pressed={shopOnly}
                  >
                    800+ SF shop or garage
                    <span
                      className={`h-5 w-9 rounded-full p-0.5 transition-colors ${shopOnly ? "bg-gold" : "bg-line"}`}
                    >
                      <span
                        className={`block h-4 w-4 rounded-full bg-white transition-transform ${shopOnly ? "translate-x-4" : ""}`}
                      />
                    </span>
                  </button>
                </div>
                <div>
                  <label htmlFor="sort" className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy">
                    Sort by
                  </label>
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                    className="mt-2 h-11 w-full border border-line bg-white px-3 text-sm font-semibold text-navy outline-none focus:border-gold"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: low to high</option>
                    <option value="price-desc">Price: high to low</option>
                    <option value="sqft-asc">Living area: low to high</option>
                    <option value="sqft-desc">Living area: high to low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Result meta */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-semibold text-body" role="status">
          <CountUp
            key={filtered.length}
            end={filtered.length}
            duration={600}
            className="font-display text-2xl font-semibold text-navy"
          />{" "}
          {filtered.length === 1 ? "plan" : "plans"} found
        </p>
        <button
          onClick={reset}
          className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-body transition-colors hover:text-gold"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Clear filters
        </button>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={JSON.stringify([quick, query, maxSqFt, minBeds, shopOnly, sort])}
            className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filtered.map((plan, i) => (
              <motion.div
                key={plan.slug}
                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    duration: 0.25,
                    delay: Math.min(i, 6) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
              >
                <PlanCard plan={plan} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="blueprint-grid-light mt-6 border border-dashed border-line bg-cream/60 px-6 py-20 text-center">
          <p className="font-display text-3xl font-semibold text-navy">No plans match those filters</p>
          <p className="mx-auto mt-3 max-w-md text-body">
            Try widening your search — or tell our team what you need. We modify every stock plan
            and design fully custom homes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex h-12 items-center border border-navy px-6 text-[12px] font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Clear Filters
            </button>
            <ButtonLink href="/contact">Contact Us</ButtonLink>
          </div>
        </div>
      )}

      <p className="mt-10 border-t border-line pt-6 text-center text-sm text-body">
        More plans coming soon — every plan can be modified for steel I-beam, weld-up, bolt-up, or
        wood post-frame construction.
      </p>
    </div>
  );
}
