"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { WordReveal } from "@/components/word-reveal";
import type { Testimonial } from "@/lib/data";

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = testimonials[index];

  useEffect(() => {
    if (paused || testimonials.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, [paused, testimonials.length]);

  if (!current) return null;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative"
    >
      <Quote className="h-14 w-14 text-gold" aria-hidden />
      <div className="mt-6 min-h-[220px] sm:min-h-[190px]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote className="max-w-3xl font-display text-2xl font-medium leading-[1.4] text-white sm:text-[28px]">
              “
              <WordReveal text={current.quote} wordDelay={0.03} />
              ”
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="flex gap-1" aria-label="Five star review">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                ))}
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                {current.clientName}
              </span>
              <span className="text-sm text-white/60">
                {current.location}
                {current.project ? ` · ${current.project}` : ""}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-3">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`h-1 transition-all duration-300 ${
              i === index ? "w-12 bg-gold" : "w-6 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="grid h-11 w-11 place-items-center border border-white/25 text-white transition-colors hover:border-gold hover:text-gold"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="grid h-11 w-11 place-items-center border border-white/25 text-white transition-colors hover:border-gold hover:text-gold"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
