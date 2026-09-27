"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Reveal-mask image treatment — the photo resolves like a rendering
 * coming into focus (clip-path mask + gentle settle), never a slide.
 */
export function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <motion.figure
      ref={ref}
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(12% 6% 12% 6%)" }}
      animate={inView ? { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={reduce ? {} : { scale: 1.08 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.figure>
  );
}
