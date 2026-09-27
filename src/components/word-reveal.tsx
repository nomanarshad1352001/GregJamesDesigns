"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Line-by-line (word-mask) quote reveal — each word masks up,
 * ~60ms per word, slowing the reader down on brand-voice lines.
 */
export function WordReveal({
  text,
  className = "",
  wordDelay = 0.06,
}: {
  text: string;
  className?: string;
  wordDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * wordDelay, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
