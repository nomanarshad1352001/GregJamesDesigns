export const SITE = {
  name: "Greg James Designs",
  tagline: "Barndominium Plans & Custom Design",
  phone: "+1 405-856-2358",
  phoneHref: "tel:+14058562358",
  email: "designteam@gregjamesdesigns.com",
  address: "215 1/2 South Division St, Guthrie, OK 73044",
  hours: "Mon – Fri · 8:00 am – 3:30 pm",
  serviceArea: "Designing for all 50 U.S. states & Canada",
  social: {
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Stock Plans", href: "/plans" },
  { label: "Customize a Plan", href: "/customize" },
  {
    label: "Design Services",
    href: "/custom-design",
    children: [
      {
        label: "Custom Barndominium Design",
        href: "/custom-design",
        desc: "Original design built around your land and life",
      },
      {
        label: "Metal & Post-Frame Homes",
        href: "/services/metal-post-frame-homes",
        desc: "Weld-up, bolt-up and post-frame home plans",
      },
      {
        label: "Post-Frame Buildings",
        href: "/services/post-frame-buildings",
        desc: "Shops, barns & buildings — Oklahoma",
      },
      {
        label: "Home Renovation Design",
        href: "/services/home-renovation",
        desc: "As-builts, additions and remodel plans",
      },
      {
        label: "ICF Homes",
        href: "/services/icf-homes",
        desc: "Insulated concrete form home plans",
      },
    ],
  },
  { label: "Building Kits", href: "/building-kits" },
  {
    label: "Tools & Tips",
    href: "/resources",
    children: [
      {
        label: "Journal & Guides",
        href: "/resources",
        desc: "Buying guides and building know-how",
      },
      {
        label: "FAQs",
        href: "/faqs",
        desc: "Answers to the questions we hear most",
      },
      {
        label: "Cost Calculator",
        href: "/tools/cost-calculator",
        desc: "Rough-build budget in two minutes",
      },
      {
        label: "Featured Project — The Loyston",
        href: "/featured/loyston",
        desc: "A Tennessee lakeview wedding venue",
      },
      {
        label: "Free eBook",
        href: "/ebook",
        desc: "The Barndominium Starter Guide",
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      {
        label: "About & Meet the Team",
        href: "/about",
        desc: "The people behind the plans",
      },
      {
        label: "Request a Consultation",
        href: "/consultation",
        desc: "Book a free 15-minute call",
      },
      {
        label: "Careers",
        href: "/careers",
        desc: "Principal Business Partner opportunity",
      },
      {
        label: "Contact",
        href: "/contact",
        desc: "Talk with our design team",
      },
    ],
  },
];

export function formatSqFt(n: number | null | undefined) {
  if (n === null || n === undefined) return "—";
  return `${n.toLocaleString("en-US")} SF`;
}

export function formatBaths(n: number) {
  return n % 1 === 0 ? `${n}` : n.toFixed(1);
}

export function formatPrice(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}
