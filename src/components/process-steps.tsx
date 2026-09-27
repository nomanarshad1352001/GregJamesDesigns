"use client";

import { motion, useReducedMotion } from "framer-motion";

export type FlowStep = { num: string; title: string; body: string };

/**
 * Process steps read as one continuous path: each step number un-blurs
 * on scroll, then its connecting line draws (stroke-style animation,
 * same technique as the LED trace but simpler — no glow).
 */
export function StepsFlow({ steps }: { steps: FlowStep[] }) {
  const reduce = useReducedMotion();
  const cols =
    steps.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-5";

  return (
    <div className={`grid gap-6 ${cols}`}>
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <div
            key={s.num}
            className="relative flex h-full flex-col border border-white/15 bg-white/5 p-7"
          >
            <motion.span
              className="font-display text-6xl font-semibold text-gold/25"
              initial={reduce ? false : { opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: Math.min(i, 6) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {s.num}
            </motion.span>
            <h3
              className={`mt-4 font-display ${steps.length === 4 ? "text-2xl" : "text-xl"} font-semibold text-white`}
            >
              {s.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-white/70">{s.body}</p>
            {!last && (
              <motion.span
                aria-hidden
                className="absolute -right-3 top-1/2 hidden h-px w-6 origin-left bg-gold lg:block"
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(i, 6) * 0.1 + 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
