import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock3, User } from "lucide-react";
import { getFeaturedPlans, getPostBySlug, getPosts } from "@/lib/queries";
import { PlanCard } from "@/components/plan-card";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/ui";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [allPosts, relatedPlans] = await Promise.all([getPosts(), getFeaturedPlans()]);
  const more = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-line bg-cream/50">
        <div className="mx-auto flex max-w-4xl items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-body sm:px-6">
          <Link href="/" className="transition-colors hover:text-gold">Home</Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <Link href="/resources" className="transition-colors hover:text-gold">Resources</Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <span className="truncate text-navy">{post.title}</span>
        </div>
      </nav>

      <article className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-dark">
              {post.category}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-body">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-gold" aria-hidden /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5 text-gold" aria-hidden /> {post.readMinutes} min read
              </span>
              <span>
                {post.publishedAt.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="mt-10 aspect-[16/8] w-full border border-line object-cover"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="prose-custom mt-10">
              {post.content.map((block, i) =>
                block.startsWith("## ") ? (
                  <h2
                    key={i}
                    className="mb-4 mt-10 font-display text-3xl font-semibold text-navy"
                  >
                    {block.replace("## ", "")}
                  </h2>
                ) : (
                  <p key={i} className="mb-6 text-[17px] leading-8 text-body">
                    {block}
                  </p>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related plans */}
      <section className="border-t border-line bg-cream/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold text-navy">
              Plans related to this guide
            </h2>
            <Link
              href="/plans"
              className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold-dark transition-colors hover:text-navy"
            >
              View all plans →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPlans.map((p) => (
              <PlanCard key={p.slug} plan={p} />
            ))}
          </div>
        </div>
      </section>

      {/* More articles */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-navy">Keep reading</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {more.map((p) => (
              <Link key={p.slug} href={`/resources/${p.slug}`} className="group flex items-center justify-between gap-6 py-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark">
                    {p.category}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-navy transition-colors group-hover:text-gold-dark">
                    {p.title}
                  </p>
                </div>
                <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-body transition-colors group-hover:text-gold">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
