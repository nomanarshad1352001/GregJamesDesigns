import { ArrowLink, Eyebrow } from "@/components/ui";
import { MARQUEE_IMAGES } from "@/lib/media";

/**
 * "From the drawing board" filmstrip — a slow marquee of renders,
 * jobsites and finished interiors. Pauses on hover; the images are
 * the motion, in keeping with the photography-first rule.
 */
export function GalleryMarquee() {
  const loop = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

  return (
    <section className="gallery-marquee overflow-hidden border-y border-line bg-white py-16 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 px-4 sm:px-6">
        <div>
          <Eyebrow>From the drawing board</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl">
            Renders, jobsites, and the homes that follow.
          </h2>
        </div>
        <ArrowLink href="/plans">See the plans behind them</ArrowLink>
      </div>

      <div className="relative mt-12">
        <div className="animate-marquee flex w-max gap-5 px-5">
          {loop.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-56 w-80 shrink-0 overflow-hidden border border-line sm:h-64 sm:w-96"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                aria-hidden={i >= MARQUEE_IMAGES.length}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />
      </div>
    </section>
  );
}
