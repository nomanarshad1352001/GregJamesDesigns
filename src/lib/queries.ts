import { PLANS, POSTS, TEAM, TESTIMONIALS } from "@/lib/data";

/* Data access layer — reads from static dummy data (no database). */

export async function getPlans() {
  return PLANS;
}

export async function getFeaturedPlans() {
  return PLANS.filter((p) => p.featured).slice(0, 3);
}

export async function getPlanBySlug(slug: string) {
  return PLANS.find((p) => p.slug === slug) ?? null;
}

export async function getRelatedPlans(slug: string, category: string) {
  const related = PLANS.filter((p) => p.slug !== slug && p.category === category);
  const rest = PLANS.filter((p) => p.slug !== slug && p.category !== category);
  return [...related, ...rest].slice(0, 3);
}

export async function getPosts() {
  return [...POSTS].sort((a, b) => a.publishedAt.getTime() - b.publishedAt.getTime());
}

export async function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}

export async function getTestimonials() {
  return TESTIMONIALS;
}

export async function getTeam() {
  return TEAM;
}
