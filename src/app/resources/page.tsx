import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Eye } from "lucide-react";
import { getPosts } from "@/lib/queries";
import { Reveal } from "@/components/reveal";
import { CtaBand, Eyebrow } from "@/components/ui";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Resources & Guides",
  description:
    "Barndominium buying guides: plan selection, budget and cost, building systems, energy efficiency and design tips from the Greg James Designs team.",
};

export default async function ResourcesPage() {
  const posts = (await getPosts()).slice().reverse();
  const [lead, ...rest] = posts;
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <>
      <section className="border-b border-line bg-cream/60">
        <div className="blueprint-grid-light">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <Eyebrow>Tools & tips · the journal</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.04] text-navy sm:text-6xl">
              Barndominium know-how, from the drawing board.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-body">
              Buying guides, budget breakdowns and design lessons — written by the same people who
              draw the plans.
            </p>
            {categories.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <span
                    key={c}
                    className="border border-line bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-navy"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Lead article */}
          {lead && (
            <Reveal>
              <Link
                href={`/resources/${lead.slug}`}
                className="group grid overflow-hidden border border-line bg-white transition-shadow hover:shadow-lift lg:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={lead.image}
                    alt={lead.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 bg-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-navy-deep">
                    Latest guide
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-dark">
                    {lead.category}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy transition-colors group-hover:text-gold-dark sm:text-4xl">
                    {lead.title}
                  </h2>
                  <p className="mt-4 leading-7 text-body">{lead.excerpt}</p>
                  <p className="mt-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-body">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" aria-hidden /> {lead.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" aria-hidden /> {lead.readMinutes} min read
                    </span>
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-navy group-hover:text-gold">
                    Read the guide
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  href={`/resources/${post.slug}`}
                  className="group flex h-full flex-col border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark">
                      {post.category}
                    </p>
                    <h3 className="mt-2 font-display text-[22px] font-semibold leading-snug text-navy transition-colors group-hover:text-gold-dark">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-body">{post.excerpt}</p>
                    <p className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-body">
                      <span className="flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5" aria-hidden /> {post.readMinutes} min
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Eye className="h-3.5 w-3.5" aria-hidden />
                        {post.publishedAt.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Reading is research. A plan is progress."
        body="When you're ready to move from articles to drawings, browse the stock plan library or book a free consultation."
        primary={{ href: "/plans", label: "Browse Stock Plans" }}
        secondary={{ href: "/consultation", label: "Book a Free Call" }}
      />
    </>
  );
}
