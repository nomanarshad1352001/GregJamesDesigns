import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="border-b border-line bg-cream/60">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-body">Last updated: {updated}</p>
        </div>
      </section>
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">{children}</div>
      </section>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-navy">{title}</h2>
      <div className="mt-3 space-y-3 leading-7 text-body">{children}</div>
    </div>
  );
}
