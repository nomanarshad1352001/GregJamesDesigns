"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

export function PlanGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const next = useCallback(() => setActive((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(
    () => setActive((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, next, prev]);

  return (
    <div>
      <button
        className="group relative block aspect-[16/10] w-full overflow-hidden border border-line bg-cream"
        onClick={() => setLightbox(true)}
        aria-label={`Enlarge ${name} gallery image`}
      >
        <span className="relative block h-full w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            key={active}
            src={images[active]}
            alt={`${name} — view ${active + 1}`}
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
          {/* Brief light-trace signals the image change — replaces a plain crossfade */}
          <svg
            key={`trace-${active}`}
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            role="presentation"
            aria-hidden
          >
            <path
              d="M1.5 1.5 H98.5 V98.5 H1.5 Z"
              pathLength={100}
              vectorEffect="non-scaling-stroke"
              className="gallery-trace"
            />
          </svg>
        </span>
        <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-navy-deep/70 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur transition-colors group-hover:bg-gold group-hover:text-navy-deep">
          <Expand className="h-3.5 w-3.5" aria-hidden /> {active + 1} / {images.length}
        </span>
      </button>

      <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {images.map((src, i) => (
          <button
            key={`${src}-${i}`}
            onClick={() => setActive(i)}
            className={`relative aspect-[4/3] overflow-hidden border transition-all ${
              active === i ? "border-navy/40" : "border-line opacity-70 hover:opacity-100"
            }`}
            aria-label={`Show image ${i + 1}`}
            aria-pressed={active === i}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            {/* Gold bottom-border slides to the active thumbnail */}
            {active === i && (
              <motion.span
                layoutId="gallery-thumb-underline"
                className="absolute inset-x-0 bottom-0 h-[3px] bg-gold"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur"
            onClick={() => setLightbox(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${name} image viewer`}
          >
            <button
              className="absolute right-4 top-4 grid h-12 w-12 place-items-center border border-white/30 text-white transition-colors hover:border-gold hover:text-gold"
              onClick={() => setLightbox(false)}
              aria-label="Close viewer"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/30 text-white transition-colors hover:border-gold hover:text-gold"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              src={images[active]}
              alt={`${name} — enlarged view ${active + 1}`}
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/30 text-white transition-colors hover:border-gold hover:text-gold"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
