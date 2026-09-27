"use client";

import { useEffect, useState } from "react";

/**
 * Signature LED light-trace — a barndominium elevation that wires itself
 * with a single line of gold light, holds as a glowing outline, then settles
 * to 15% opacity as permanent ambient detail. Runs once per session.
 *
 * variant="hero"      — 2.5–3.5s trace (homepage hero)
 * variant="elevation" — 4–5s atmospheric trace (Custom Design hero)
 */

const SEGMENTS: { d: string; delay: number }[] = [
  { d: "M110 302 H612", delay: 0 }, // ground line
  { d: "M180 302 V132 L320 64 L460 132 V302", delay: 0.35 }, // main silhouette + gable
  { d: "M196 178 H444", delay: 0.75 }, // porch header
  { d: "M236 178 V302", delay: 0.95 }, // porch posts
  { d: "M300 178 V302", delay: 1.05 },
  { d: "M364 178 V302", delay: 1.15 },
  { d: "M428 178 V302", delay: 1.25 },
  { d: "M460 214 H580 V302", delay: 1.35 }, // shop wing
  { d: "M490 238 H550 V302", delay: 1.55 }, // shop door frame
  { d: "M490 258 H550 M490 278 H550", delay: 1.7 }, // door slats
  { d: "M296 302 V226 H328 V302", delay: 1.5 }, // front door
  { d: "M212 210 H256 V250 H212 Z", delay: 1.6 }, // window frames
  { d: "M212 230 H256 M234 210 V250", delay: 1.72 }, // window mullions
  { d: "M384 210 H428 V250 H384 Z", delay: 1.66 },
  { d: "M384 230 H428 M406 210 V250", delay: 1.78 },
  { d: "M310 64 V44 H330 V64", delay: 1.9 }, // cupola
];

export function LedTraceHouse({
  className,
  variant = "hero",
  sessionKey,
}: {
  className?: string;
  variant?: "hero" | "elevation";
  sessionKey?: string;
}) {
  const key = sessionKey ?? `gjd-trace-${variant}`;
  const scale = variant === "elevation" ? 1.6 : 1;

  // sessionStorage gate — client-side navigations skip straight to ambient state
  const [seen] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem(key) === "1",
  );

  useEffect(() => {
    try {
      sessionStorage.setItem(key, "1");
    } catch {
      /* private mode — trace will simply run again next load */
    }
  }, [key]);

  const lifeSeconds = variant === "elevation" ? 9 : 5.5;
  const flySeconds = variant === "elevation" ? 4.8 : 2.9;

  return (
    <svg
      viewBox="0 0 640 340"
      className={`${variant === "elevation" ? "led-elevation " : ""}${className ?? ""}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Invisible route the light point travels along the roofline */}
        <path id={`gjd-route-${variant}`} d="M180 302 V132 L320 64 L460 132 V302" fill="none" />
      </defs>

      <g
        className={seen ? "led-static" : "led-life"}
        style={seen ? undefined : { animationDuration: `${lifeSeconds}s` }}
      >
        {/* Windows warm up once the outline resolves */}
        <g className="led-core" fill="var(--glow-core)">
          <rect
            x="212"
            y="210"
            width="44"
            height="40"
            className="led-window"
            style={{ animationDelay: `${2 * scale}s` }}
          />
          <rect
            x="384"
            y="210"
            width="44"
            height="40"
            className="led-window"
            style={{ animationDelay: `${2.2 * scale}s` }}
          />
        </g>

        {/* Navy motion trail behind the gold light */}
        <g
          fill="none"
          stroke="var(--motion-trail)"
          strokeWidth="7"
          strokeLinecap="square"
          opacity={variant === "elevation" ? 0.55 : 0.4}
        >
          {SEGMENTS.map((s, i) => (
            <path
              key={`trail-${i}`}
              d={s.d}
              pathLength={100}
              className="trace-trail"
              style={{ animationDelay: `${s.delay * scale}s` }}
            />
          ))}
        </g>

        {/* Gold glow core */}
        <g
          className="led-core"
          fill="none"
          stroke="var(--glow-core)"
          strokeWidth="1.7"
          strokeLinecap="square"
        >
          {SEGMENTS.map((s, i) => (
            <path
              key={`core-${i}`}
              d={s.d}
              pathLength={100}
              className="trace-path"
              style={{ animationDelay: `${s.delay * scale}s` }}
            />
          ))}
        </g>
      </g>

      {/* One point of light, leading the trace — once, never a marquee loop */}
      {!seen && (
        <g
          className="led-fly-once led-core"
          style={{ animationDuration: `${flySeconds + 0.6}s` }}
        >
          <circle r="6.5" fill="var(--glow-core)" opacity="0.55">
            <animateMotion
              dur={`${flySeconds}s`}
              begin={`${0.3 * scale}s`}
              repeatCount={1}
              fill="freeze"
              rotate="auto"
            >
              <mpath href={`#gjd-route-${variant}`} />
            </animateMotion>
          </circle>
          <circle r="2.4" fill="#ffffff">
            <animateMotion
              dur={`${flySeconds}s`}
              begin={`${0.3 * scale}s`}
              repeatCount={1}
              fill="freeze"
              rotate="auto"
            >
              <mpath href={`#gjd-route-${variant}`} />
            </animateMotion>
          </circle>
        </g>
      )}
    </svg>
  );
}
