import { Compass } from "lucide-react";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-navy-deep py-28 text-white lg:py-40">
      <div className="blueprint-grid">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <Compass className="mx-auto h-14 w-14 text-gold" aria-hidden />
          <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.3em] text-gold">
            Error 404
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold sm:text-6xl">
            This plot isn't on our survey.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            The page you're looking for has moved, been renamed, or never existed. Let's get you
            back to solid ground.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/">Back to Home</ButtonLink>
            <ButtonLink href="/plans" variant="outline">
              Browse Stock Plans
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
