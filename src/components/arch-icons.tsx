import type { ReactNode } from "react";

/**
 * Custom architectural iconography set.
 * 48×48 grid, 2px stroke, square corners, line-only —
 * every icon carries exactly one small gold accent element
 * (a dot, tip, rivet, segment, or hand). Never a fully gold icon.
 */

const ACCENT = "var(--color-gold)";

type IconProps = { className?: string };

function Base({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

/** Roofline + door — "Ready to Build / Buy a Stock Plan". Accent: doorknob dot */
export function IconStockPlan({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M8 40 V22 L24 12 L40 22 V40" pathLength={100} />
      <path d="M5 40 H43" pathLength={100} />
      <path d="M20 40 V29 H28 V40" pathLength={100} />
      <circle cx="25.5" cy="34.5" r="1.8" fill={ACCENT} stroke="none" />
    </Base>
  );
}

/** Pencil over a floor plan — "Customize a Plan". Accent: pencil tip */
export function IconCustomize({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M8 10 H32 V38 H8 Z" pathLength={100} />
      <path d="M8 20 H20 M20 20 V38 M14 10 V20" pathLength={100} />
      <path d="M28.5 34.5 38.5 24.5 L42 28 32 38 27.5 39.2Z" pathLength={100} />
      <path d="M27.5 39.2 L30.2 36.6 L32.9 39.3Z" fill={ACCENT} stroke="none" transform="translate(-1.4 -1.4)" />
      <circle cx="28.2" cy="38.5" r="1.7" fill={ACCENT} stroke="none" />
    </Base>
  );
}

/** Blank drafting sheet + compass — "Design From Scratch". Accent: compass point */
export function IconDraftCompass({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M9 7 H27 L34 14 V41 H9 Z" pathLength={100} />
      <path d="M27 7 V14 H34" pathLength={100} />
      <path d="M22 17 L17.5 33 M22 17 L26.5 33" pathLength={100} />
      <circle cx="22" cy="17" r="2.2" />
      <circle cx="17.5" cy="33" r="2" fill={ACCENT} stroke="none" />
    </Base>
  );
}

/** Stacked post & beam frame — Post-Frame Buildings. Accent: bolt/plate joiner */
export function IconPostBeam({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M12 41 V10 M36 41 V10" pathLength={100} />
      <path d="M8 12 H40 M8 26 H40" pathLength={100} />
      <path d="M7 41 H17 M31 41 H41" pathLength={100} />
      <circle cx="36" cy="26" r="2.2" fill={ACCENT} stroke="none" />
    </Base>
  );
}

/** Steel I-beam cross-section — Metal Building Homes. Accent: rivet */
export function IconIBeam({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M14 10 H34 V16 H14 Z" pathLength={100} />
      <path d="M14 32 H34 V38 H14 Z" pathLength={100} />
      <path d="M22.5 16 V32 M25.5 16 V32" pathLength={100} />
      <circle cx="18.5" cy="13" r="1.8" fill={ACCENT} stroke="none" />
    </Base>
  );
}

/** Concrete block cutaway — ICF Homes. Accent: insulation core line */
export function IconICFBlock({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M8 12 H40 V36 H8 Z" pathLength={100} />
      <path d="M12 16 H18 V32 H12 Z M30 16 H36 V32 H30 Z" pathLength={100} />
      <path d="M18 20 H30 M18 28 H30" pathLength={100} />
      <path d="M24 16 V32" stroke={ACCENT} pathLength={100} />
    </Base>
  );
}

/** House with return arrow — Home Renovation Design. Accent: arrow tip */
export function IconRenovation({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M9 38 V23 L21 14 33 23 V38" pathLength={100} />
      <path d="M7 38 H35" pathLength={100} />
      <path d="M39 17 a11 11 0 1 1 -8.6 16" pathLength={100} />
      <path d="M30.4 33 L34.8 34.8 L31.2 38Z" fill={ACCENT} stroke="none" />
    </Base>
  );
}

/** Truck + building outline — Building Kits / delivery. Accent: headlight dot */
export function IconKitTruck({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M6 34 V21 H20 V34" pathLength={100} />
      <path d="M20 25 H36 V34 H20" pathLength={100} />
      <path d="M6 34 H42" pathLength={100} />
      <path d="M26 25 V19 L33 16 V25" pathLength={100} />
      <circle cx="13" cy="36.5" r="2.4" />
      <circle cx="29" cy="36.5" r="2.4" />
      <circle cx="9" cy="30.5" r="1.6" fill={ACCENT} stroke="none" />
    </Base>
  );
}

/** Shield with a roofline — energy efficiency & safety (ICF, FAQ). Accent: rivet */
export function IconShieldRoof({ className }: IconProps) {
  return (
    <Base className={className}>
      <path
        d="M24 6 L38 12 V22 C38 31 32 38 24 41 C16 38 10 31 10 22 V12Z"
        pathLength={100}
      />
      <path d="M16 25 L24 18 32 25" pathLength={100} />
      <circle cx="24" cy="10.5" r="1.8" fill={ACCENT} stroke="none" />
    </Base>
  );
}

/** Calendar + clock — Consultation booking. Accent: clock hand */
export function IconCalendarClock({ className }: IconProps) {
  return (
    <Base className={className}>
      <path d="M8 12 H26 V36 H8 Z" pathLength={100} />
      <path d="M8 18 H26" pathLength={100} />
      <path d="M13 8 V14 M21 8 V14" pathLength={100} />
      <circle cx="33.5" cy="30.5" r="7.5" pathLength={100} />
      <path d="M33.5 30.5 L37 33" pathLength={100} />
      <path d="M33.5 26 V30.5" stroke={ACCENT} pathLength={100} />
    </Base>
  );
}

/**
 * Dimension-line divider — a drafting dimension line (rule with ticked ends),
 * placed once per page at the product → trust content transition.
 */
export function DimensionDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`w-full ${className}`}>
      <svg
        className="block h-6 w-full"
        viewBox="0 0 1000 24"
        preserveAspectRatio="none"
        role="presentation"
      >
        <path
          d="M14 12 H986"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          opacity="0.75"
        />
        <path
          d="M14 4 V20 M986 4 V20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}
