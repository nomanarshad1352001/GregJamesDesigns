import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/social-icons";

const exploreLinks = [
  { label: "Stock Plans", href: "/plans" },
  { label: "Customize a Plan", href: "/customize" },
  { label: "Custom Design", href: "/custom-design" },
  { label: "Building Kits", href: "/building-kits" },
  { label: "Featured Project", href: "/featured/loyston" },
];

const serviceLinks = [
  { label: "Metal & Post-Frame Homes", href: "/services/metal-post-frame-homes" },
  { label: "Post-Frame Buildings", href: "/services/post-frame-buildings" },
  { label: "Home Renovation Design", href: "/services/home-renovation" },
  { label: "ICF Homes", href: "/services/icf-homes" },
  { label: "Consultation", href: "/consultation" },
];

const resourceLinks = [
  { label: "Journal & Guides", href: "/resources" },
  { label: "FAQs", href: "/faqs" },
  { label: "Cost Calculator", href: "/tools/cost-calculator" },
  { label: "About the Team", href: "/about" },
  { label: "Careers", href: "/careers" },
];

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="blueprint-grid">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center border-2 border-white/80 font-display text-lg font-bold text-white">
                  GJ
                </span>
                <span className="leading-none">
                  <span className="block font-display text-lg font-bold">Greg James Designs</span>
                  <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                    Barndominium Plans
                  </span>
                </span>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
                Custom barndominiums, metal and post-frame homes, renovations and building
                solutions — designed in Oklahoma, built across the United States and Canada.
              </p>
              <div className="mt-7 space-y-3 text-sm text-white/80">
                <a href={SITE.phoneHref} className="flex items-center gap-3 transition-colors hover:text-gold">
                  <Phone className="h-4 w-4 text-gold" aria-hidden /> {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 transition-colors hover:text-gold">
                  <Mail className="h-4 w-4 text-gold" aria-hidden /> {SITE.email}
                </a>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  {SITE.address}
                </p>
              </div>
              <div className="mt-7 flex gap-3">
                {[
                  { icon: YoutubeIcon, label: "YouTube", href: SITE.social.youtube },
                  { icon: InstagramIcon, label: "Instagram", href: SITE.social.instagram },
                  { icon: FacebookIcon, label: "Facebook", href: SITE.social.facebook },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center border border-white/20 text-white/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
              <FooterCol title="Explore" links={exploreLinks} />
              <FooterCol title="Services" links={serviceLinks} />
              <FooterCol title="Resources" links={resourceLinks} />
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Greg James Designs. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/plan-license" className="transition-colors hover:text-gold">
                Plan License
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-gold">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-gold">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
