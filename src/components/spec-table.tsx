"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Spec-table rows fade up individually on scroll (60ms stagger) —
 * "read it like a drawing."
 */
export function SpecTableRows({ rows }: { rows: [string, string][] }) {
  const reduce = useReducedMotion();

  return (
    <>
      {rows.map(([k, v], i) => (
        <motion.tr
          key={k}
          className="odd:bg-cream/40"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          <th scope="row" className="w-44 px-6 py-3.5 text-left font-bold text-navy">
            {k}
          </th>
          <td className="px-6 py-3.5 text-body">{v}</td>
        </motion.tr>
      ))}
    </>
  );
}
