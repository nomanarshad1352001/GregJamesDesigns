# Barndo Studio — Barndominium Plan Store & Design Platform

**A full-featured, luxury-designed web platform for Greg James Designs — selling stock barndominium house plans, plan customization quotes, and premium custom design services.**

---

## 1. Project Title

**Barndo Studio — The Greg James Designs Digital Plan Store**
*A product-led barndominium plan sales platform with a signature "LED light-trace" motion system, built as a modern multi-page Next.js application.*

Tagline: *"Where dreams take shape — plans made for real life."*

---

## 2. What This Platform Does

Barndo Studio is a complete front-of-business website and sales funnel for a barndominium design studio. It turns content marketing into measurable revenue by organizing everything around three customer paths:

| Path | Customer State | Destination | Conversion |
|---|---|---|---|
| **Buy a Plan** | Ready to build | Stock plan catalog → plan detail page | Plan request / buy inquiry |
| **Customize a Plan** | Likes a plan, needs changes | Plan detail → Customize page | Modification quote request |
| **Design From Scratch** | Needs an original home | Custom Design page | Custom design consultation |

### Core capabilities

1. **A filterable stock plan store** — 29 barndominium house plans with full specs, pricing, 6-image galleries, and instant client-side filtering (size, bedrooms, shop/RV garage, style, price, newest).
2. **29 dedicated plan detail pages** — each with breadcrumb SEO structure, lightbox galleries, animated spec schedules, "what's included" documentation, plan-license disclosures, FAQs, and a prefilled inquiry form.
3. **Lead-generation funnels for services** — plan modification quotes, custom design, building kits (Oklahoma/North Texas), renovation design, ICF homes, and post-frame buildings — each with its own tailored form.
4. **Consultation booking system** — an interactive calendar that shows weekday availability in Central Time, lets visitors pick a date + 15-minute slot, and confirms the booking.
5. **Cost calculator** — an interactive estimator that computes a build budget range from living area, shop area, finish level, building system (post-frame / weld-up / bolt-up steel), and site work, with an itemized breakdown.
6. **Content & trust engine** — a resources journal (6 buying guides), FAQs with accordion UI, testimonials carousel, team/About pages, a featured project showcase (The Loyston wedding venue), careers page, eBook lead magnet, and full legal set (Plan License, Privacy, Terms).
7. **A signature motion identity** — the "LED light-trace": a barndominium outline that draws itself in gold light, plus a full interaction system across every image, icon, card, form, and page transition.

---

## 3. Who Buys / Uses This (Client Profile)

### The platform is built for:

**Primary client — the design studio owner (Greg James Designs, Guthrie, OK)**
A design/build studio that sells:
- Stock barndominium plan sets (from $1,300)
- Plan modification services (quoted)
- Fully custom design services (premium, 60–90 day engagements)
- Post-frame building kits and erection coordination (regional)
- Paid design consultations ($249/hr) and renovation/ICF plan work

**End users — the studio's customers:**
| Buyer Persona | What They Need | How the Platform Serves Them |
|---|---|---|
| **Rural homeowner / land buyer** | A buildable, affordable house plan | Catalog filtering, plan detail specs, plan-license clarity |
| **Shop-house / RV owner** | A home attached to a big shop or RV bay | "With Shop" and "RV Garage" filter chips, shop SF specs |
| **Custom-home client** | Ground-up design around their land | Custom Design qualification form with budget/timeline fields |
| **DIY / kit buyer (OK & TX)** | Materials + blueprints bundled | Building Kits page with kit quote form and bundled packages |
| **Venue / commercial developer** | Event centers, wedding venues, equestrian | Loyston featured project, commercial-capable plan sets |
| **Renovation homeowner** | As-builts + addition plans | Renovation service page + quote form |
| **First-time researcher** | Education before commitment | Journal guides, FAQs, cost calculator, free eBook capture |

**Agencies / developers who would buy this build:** any architecture studio, house-plan ecommerce seller, or design/build firm needing a premium plan-storefront with lead funnels — every content item is data-driven, so re-skinning the plans, posts, team, and services is a single-file edit.

---

## 4. Key Qualities

### Luxury design language
- Editorial, high-end palette: **warm onyx** (`#1B1611`), **champagne gold** (`#C7A45F`), **ivory** (`#F6F2E9`)
- Typography pairing: **Playfair Display** (serif headlines) + **Manrope** (clean UI body)
- Architectural grid textures, dimension-line dividers, square-corners-with-precision component language
- Fully responsive from 320px to widescreen; sticky header with scroll solidification, mobile drawer nav

### Performance
- Static/dynamic hybrid rendering; no database roundtrips
- All imagery remote-optimized stock (Pexels/Unsplash) + local studio renders, lazy-loaded
- Motion is 95% CSS/SVG — no heavy JS animation libraries running per frame
- Zero database, zero server state: deployable anywhere as a standard Next.js app

### Accessibility
- One H1 per page, semantic landmarks, skip-to-content link
- `prefers-reduced-motion` global short-circuit: every trace, shimmer, draw, and sweep serves its static end-state
- 44px+ touch targets, keyboard-operable lightbox/accordions/tabs, labeled form fields, aria-pressed filter states, live-region result counts

### Conversion discipline
- Every page ends in a routed CTA; every form leads to a tailored `/thank-you` confirmation
- Sticky purchase sidebar on plan pages with price, specs, and dual CTAs (request / customize)
- Honest-trust copy throughout (license terms, refund policy, jurisdiction disclaimers)

---

## 5. Feature Inventory

### A. Storefront & Catalog
- **Plan catalog** (`/plans`): quick-filter chips with sliding gold underline (Featured, Under 2,000 SF, 3 Bed, 4+ Bed, With Shop, RV Garage, Small Home), search box, expandable filters (max living-area slider, bedrooms, shop toggle, 6 sort orders), live count-up result counter, empty-state with blueprint texture
- **Animated result grid**: old set fades/scales out (200ms), new set staggers in (250ms, capped at 6)
- **Plan cards**: badge + plan number, multi-image hover galleries ("1/6" counter, 350ms cross-fades, pauses on last image), 4s-ease 1.03× hover settle, shimmer sweep, price + spec row

### B. Plan Detail Pages (dynamic `/plans/[slug]`)
- Breadcrumbs, lightbox gallery (6 images, LED-trace frame on switch, sliding gold thumb underline)
- Count-up animated price + living/shop square footage
- Area schedule table: rows fade up individually on scroll
- Plan highlights, "What's included" (6 documentation items), fold-out FAQs
- Sticky sidebar: price, specs grid, dual CTA, license bullets, prefilled per-plan inquiry form
- Related plans rail + plan-license legal page link

### C. Signature Motion System
- **LED light-trace hero**: SVG barndominium outline draws itself in gold with a navy motion trail, windows flicker warm, a light point travels the roofline once, then the whole trace settles to 15% ambient opacity — runs **once per session** (sessionStorage gate)
- **Variants**: fast hero trace (homepage), slow dusk "elevation" trace (Custom Design + Customize heroes)
- **Icon micro-traces**: custom 48px line-icon set (10 architectural icons, each with one gold accent detail) that draws itself on hover — or once-in-view on touch devices
- **Word-mask reveals**: pull quotes and testimonials reveal line-by-line (60ms/word)
- **Count-up numbers**: stats band, plan prices, spec SF, catalog result count
- **Process flows**: step numbers un-blur while connecting lines draw between steps
- **Page transitions**: 200ms fade between routes; scroll reveals use ease-out-expo `cubic-bezier(0.16,1,0.3,1)`

### D. Forms & Lead Capture (`/api/inquiries`)
- 7 typed inquiry funnels: general, stock-plan, modification, custom-design, building-kit, consultation, ebook
- **Floating labels** (rise/shrink on focus), gold focus borders, Zod-validated API
- Routed inquiry **tabs** on Contact (General / Modify / Custom / Kit) with 15px slide-fade transitions
- Success morph: button → sage checkmark with confirm-pulse → guarded redirect to `/thank-you?type=…`
- Booking calendar: month navigation, weekday-only selectable dates, 7 time slots, Central Time

### E. Tools
- **Cost calculator** (`/tools/cost-calculator`): 2 sliders + finish/system selectors + site-work toggle → live itemized estimate with sticky result card and quote CTA
- **eBook capture page**, **FAQ hub** (15 authentic Q&As), **Resources journal** (index + 6 dynamic articles with related plans rails)

### F. Content Pages
About + team (desaturating headshot reveals), Building Kits (offerings, kit gallery, disclaimers), 4 service pages (Metal/Post-Frame, Post-Frame Buildings, Renovation, ICF), Careers (profit-share partner posting), Featured Project (The Loyston venue with plan-set documentation), legal set (Plan License / Privacy / Terms), noindexed Thank-You page, branded 404

---

## 6. Tech Stack

### Core framework
| Layer | Technology | Version / Notes |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Server + client components, dynamic routes, route handlers |
| Language | **TypeScript 5.9** | Fully typed data models, strict builds |
| UI library | **React 19** | RSC architecture, server-side data composition |

### Styling & animation
| Layer | Technology | Notes |
|---|---|---|
| CSS framework | **Tailwind CSS v4** | `@theme` design tokens: colors, shadows, fonts |
| Motion | **Framer Motion 12** | Scroll reveals, layout animations (sliding underlines), AnimatePresence grid transitions, count-ups |
| Signature animation | **Pure SVG + CSS + SMIL** | LED light-trace (stroke-dashoffset draws, `animateMotion` light point, CSS filter blooms) — zero JS animation loops |
| Icons | **Lucide React** (utility) + **custom SVG set** (10 architectural icons, 48px grid) | Custom thin-line iconography per the motion spec |
| Fonts | **next/font** — Playfair Display + Manrope | Self-hosted, `display: swap`, CSS variables |

### Data & backend
| Layer | Technology | Notes |
|---|---|---|
| Data source | **Static TypeScript dummy data** (`src/lib/data.ts`) | 29 plans, 6 articles, 4 testimonials, 5 team members — **no database by design** |
| Media library | Curated Pexels + Unsplash URLs (`src/lib/media.ts`) + locally generated studio renders | Verified hotlink pools |
| Forms API | **Next.js Route Handler** (`/api/inquiries`) | **Zod** validation, typed inquiry enum |
| Health check | `/api/health` | Static-data mode confirmation |
| Images | `next.config.ts` remote patterns | images.pexels.com, images.unsplash.com whitelisted |

### Tooling & quality
- `next typegen` route-type generation
- `tsc --noEmit` strict typechecking (zero errors)
- Production build verified via `next build` + served healthcheck
- ESLint / Prettier-compatible source

### Deployment profile
- No environment variables required to run
- No database, no external services, no auth
- Deploys as a standard Node/Next.js app (Vercel, container, or any static+server host)

---

## 7. Project Structure

```
src/
├── app/                      # 27 routes (App Router)
│   ├── page.tsx              # Homepage (hero + LED trace, featured plans,
│   │                         #   3 paths, services, filmstrip marquee, testimonials)
│   ├── plans/                # Catalog + [slug] dynamic plan pages
│   ├── customize/            # Customize-a-Plan funnel
│   ├── custom-design/        # Custom design service + elevation trace
│   ├── building-kits/        # Kit offerings + gallery + kit quote form
│   ├── services/             # metal-post-frame-homes, post-frame-buildings,
│   │                         #   home-renovation, icf-homes
│   ├── about/  contact/  careers/  consultation/   # Company pages
│   ├── resources/            # Journal index + [slug] articles
│   ├── faqs/   ebook/   featured/loyston/          # Trust & showcase pages
│   ├── tools/cost-calculator/                      # Interactive estimator
│   ├── plan-license/  privacy/  terms/  thank-you/ # Legal & confirmation
│   └── api/                  # /inquiries (Zod-validated), /health
├── components/               # 25+ reusable components
│   ├── led-trace.tsx         # Signature SVG light-trace (2 variants)
│   ├── arch-icons.tsx        # Custom 10-icon architectural set + DimensionDivider
│   ├── plans-browser.tsx     # Filter/sort/search catalog engine
│   ├── plan-card.tsx         # Hover-gallery plan cards
│   ├── plan-gallery.tsx      # Lightbox gallery with switch trace
│   ├── inquiry-form.tsx      # Floating-label routed form (7 types + tabs)
│   ├── booking-calendar.tsx  # Interactive consultation booking
│   ├── cost-calculator.tsx   # Live budget estimator
│   └── …                     # Header, footer, reveal, counters, team, etc.
└── lib/
    ├── data.ts               # ALL site content (dummy data — edit here)
    ├── media.ts              # Verified stock image pools
    ├── queries.ts            # Data accessors (getPlans, getFeaturedPlans, …)
    └── site.ts               # Brand constants, nav config, formatters
```

---

## 8. Running the Project

```bash
npm install        # install dependencies
npm run dev        # local development
npm run build      # production build (validated)
npm run start      # production server

# Quality gates (all passing)
npx next typegen   # route types
npm exec tsc -- --noEmit --pretty false
```

No database, seed scripts, or environment setup required.

---

## 9. Extending the Platform

- **Add a plan** → append one object to `PLANS` seeds in `src/lib/data.ts` (gets its own detail page, catalog card, filters, and gallery automatically)
- **Add an article / testimonial / team member** → append to `POSTS` / `TESTIMONIALS` / `TEAM`
- **Add images** → append verified URLs to pools in `src/lib/media.ts`
- **New motion** → every category inherits its treatment from shared components (`PlanCard`, `TeamTile`, `ImageReveal`, icon set) — content added later automatically animates correctly

*Prepared for client handoff — Barndo Studio, built on the Greg James Designs Website Developer Handoff v1.0 + Motion & Animation Addendum.*
