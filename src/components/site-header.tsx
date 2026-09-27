"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Greg James Designs — home">
      <span className="logo-mark grid h-11 w-11 place-items-center border-2 border-navy font-display text-lg font-bold tracking-tight text-navy transition-colors group-hover:border-gold group-hover:text-gold">
        GJ
      </span>
      <span className="leading-none">
        <span className="block font-display text-[17px] font-bold tracking-tight text-navy">
          Greg James Designs
        </span>
        <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
          Barndominium Plans
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div
        className={`bg-navy-deep text-white/80 transition-all duration-300 ${
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-[11px] font-semibold uppercase tracking-[0.16em] sm:px-6">
          <p className="hidden sm:block">Professionally designed in Oklahoma — available nationwide</p>
          <p className="sm:hidden">Serving all 50 states & Canada</p>
          <div className="flex items-center gap-5">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Phone className="h-3 w-3" aria-hidden /> {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-gold md:flex"
            >
              <Mail className="h-3 w-3" aria-hidden /> {SITE.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "border-line shadow-[0_8px_30px_-12px_rgba(9,39,53,0.25)]" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className={`nav-underline flex items-center gap-1 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-gold ${
                      pathname.startsWith(item.href) ? "nav-underline-active text-gold" : "text-navy"
                    }`}
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-2"
                      >
                        <div className="border border-line bg-white p-2 shadow-lift">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group block px-4 py-3 transition-colors hover:bg-cream"
                            >
                              <span className="block text-sm font-bold text-navy transition-colors group-hover:text-gold">
                                {child.label}
                              </span>
                              {child.desc && (
                                <span className="mt-0.5 block text-xs text-body">{child.desc}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`nav-underline px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-gold ${
                    pathname.startsWith(item.href) ? "nav-underline-active text-gold" : "text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/plans"
              className="hidden h-12 items-center bg-gold px-6 text-[13px] font-bold uppercase tracking-[0.12em] text-navy-deep transition-colors hover:bg-gold-dark hover:text-white sm:flex"
            >
              Shop Plans
            </Link>
            <button
              className="grid h-11 w-11 place-items-center border border-line text-navy lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-navy-deep/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-white lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-line p-4">
                <Logo />
                <button
                  className="grid h-11 w-11 place-items-center border border-line text-navy"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {NAV.map((item) =>
                  item.children ? (
                    <div key={item.label} className="border-b border-line">
                      <button
                        className="flex w-full items-center justify-between py-4 text-left text-sm font-bold uppercase tracking-[0.1em] text-navy"
                        onClick={() =>
                          setMobileSection(mobileSection === item.label ? null : item.label)
                        }
                        aria-expanded={mobileSection === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileSection === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileSection === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block py-2.5 pl-4 text-sm font-semibold text-body transition-colors hover:text-gold"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block border-b border-line py-4 text-sm font-bold uppercase tracking-[0.1em] text-navy"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
              <div className="border-t border-line p-4">
                <Link
                  href="/plans"
                  className="flex h-12 w-full items-center justify-center bg-gold text-[13px] font-bold uppercase tracking-[0.12em] text-navy-deep"
                >
                  Shop Barndominium Plans
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="mt-3 flex h-12 w-full items-center justify-center gap-2 border border-navy text-[13px] font-bold uppercase tracking-[0.12em] text-navy"
                >
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
