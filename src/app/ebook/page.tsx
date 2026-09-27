import type { Metadata } from "next";
import { BookOpenCheck, Check } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Free eBook — The Barndominium Starter Guide",
  description:
    "Fill out the form to access your free barndominium starter guide eBook — budgeting, building systems, plan selection and the mistakes to avoid.",
};

const INSIDE = [
  "The three building systems — and how to choose yours",
  "A realistic budget framework (including what people forget)",
  "How to evaluate land before you fall in love with it",
  "Stock vs. modified vs. custom design — an honest comparison",
  "The 9 most expensive mistakes first-time barndo builders make",
];

export default function EbookPage() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 lg:py-28">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-barndominium.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/60" />
      <div className="blueprint-grid relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <Eyebrow light>Free download</Eyebrow>
              <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.04] text-white sm:text-6xl">
                The Barndominium Starter Guide
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                Everything we wish every client knew before their first call — condensed into one
                honest, practical read. Fill out the form to access your free copy.
              </p>
              <div className="mt-10 border border-white/15 bg-white/5 p-7">
                <p className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-gold">
                  <BookOpenCheck className="h-5 w-5" aria-hidden /> What's inside
                </p>
                <ul className="mt-5 space-y-3">
                  {INSIDE.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-white/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="border border-white/15 bg-navy/80 p-7 backdrop-blur sm:p-10">
                <InquiryForm
                  type="ebook"
                  dark
                  title="Access your free eBook"
                  intro="Your guide is delivered by email — usually within a few minutes."
                  showLocationField={false}
                  messageLabel="What would you like us to cover next?"
                  messagePlaceholder="Optional — topics you'd like us to write about."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
