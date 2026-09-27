"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Clock, Loader2 } from "lucide-react";
import { IconCalendarClock } from "@/components/arch-icons";

const TIMES = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function startOfDay(d: Date) {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  return c;
}

export function BookingCalendar() {
  const today = startOfDay(new Date());
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selected, setSelected] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const router = useRouter();

  const cells = useMemo(() => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    const first = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const blanks = first.getDay();
    const out: (Date | null)[] = [];
    for (let i = 0; i < blanks; i++) out.push(null);
    for (let d = 1; d <= daysInMonth; d++) out.push(new Date(year, month, d));
    return out;
  }, [cursor]);

  const isBookable = (d: Date | null) => {
    if (!d) return false;
    const day = d.getDay();
    return d >= today && day !== 0 && day !== 6;
  };

  const moveMonth = (dir: 1 | -1) => {
    setCursor((c) => new Date(c.getFullYear(), c.getMonth() + dir, 1));
    setSelected(null);
    setTime(null);
  };

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "consultation",
          ...data,
          meta: {
            requestedDate: selected ? selected.toDateString() : "",
            requestedTime: time ?? "",
          },
        }),
      });
      if (!res.ok) throw new Error("Could not submit");
      // Sage confirm-pulse moment, then route to /thank-you (no instant redirect).
      setStatus("sent");
      await new Promise((r) => setTimeout(r, 1400));
      router.push("/thank-you?type=consultation");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border border-line bg-cream/60 p-10 text-center"
      >
        <div className="success-pulse mx-auto w-fit rounded-full">
          <CheckCircle2 className="h-12 w-12 text-success" aria-hidden />
        </div>
        <h3 className="mt-5 font-display text-3xl font-semibold text-navy">You’re on the calendar.</h3>
        <p className="mx-auto mt-3 max-w-md leading-7 text-body">
          We’ve received your request for{" "}
          <strong className="text-navy">
            {selected?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at{" "}
            {time} (Central)
          </strong>
          . We’ll confirm by email shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="border border-line bg-white">
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <button
              onClick={() => moveMonth(-1)}
              className="grid h-10 w-10 place-items-center border border-line text-navy transition-colors hover:border-gold hover:text-gold"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <p className="font-display text-xl font-semibold text-navy">
              {MONTHS[cursor.getMonth()]} {cursor.getFullYear()}
            </p>
            <button
              onClick={() => moveMonth(1)}
              className="grid h-10 w-10 place-items-center border border-line text-navy transition-colors hover:border-gold hover:text-gold"
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-px bg-line">
            {DAYS.map((d) => (
              <div
                key={d}
                className="bg-cream py-2 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-body"
              >
                {d}
              </div>
            ))}
            {cells.map((d, i) => {
              const bookable = isBookable(d);
              const isSelected = d && selected && startOfDay(d).getTime() === selected.getTime();
              return (
                <button
                  key={i}
                  disabled={!bookable}
                  onClick={() => {
                    setSelected(d);
                    setTime(null);
                  }}
                  className={`flex h-12 items-center justify-center bg-white text-sm font-semibold transition-colors sm:h-14 ${
                    !d
                      ? "cursor-default bg-cream/50"
                      : !bookable
                        ? "cursor-not-allowed text-body/35"
                        : isSelected
                          ? "bg-navy font-bold text-white"
                          : "text-navy hover:bg-gold/20"
                  }`}
                  aria-label={d ? `Select ${d.toDateString()}` : undefined}
                  aria-pressed={Boolean(isSelected)}
                >
                  {d?.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
                Availability for{" "}
                {selected.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                <span className="ml-2 font-semibold normal-case tracking-normal text-body">
                  · Central Time
                </span>
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-7">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`h-11 border text-[13px] font-bold transition-colors ${
                      time === t
                        ? "border-gold bg-gold text-navy-deep"
                        : "border-line bg-white text-navy hover:border-gold"
                    }`}
                    aria-pressed={time === t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="lg:col-span-5">
        <div className="border border-line bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center bg-navy text-gold">
              <IconCalendarClock className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-navy">
                Free 15-Minute Consultation
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-body">
                <Clock className="h-3.5 w-3.5 text-gold" aria-hidden /> Virtual or by phone · Mon–Fri
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-body">
            We’ll discuss your project and answer your questions. Longer design consultations (1
            hr · $249) can be arranged after your first call.
          </p>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <input type="hidden" name="message" value={`Consultation request: ${selected?.toDateString() ?? ""} ${time ?? ""}`} />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="bk-first" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-navy">
                  First name *
                </label>
                <input id="bk-first" name="firstName" required className="h-12 w-full border border-line px-4 text-sm outline-none transition-colors focus:border-gold" />
              </div>
              <div>
                <label htmlFor="bk-last" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-navy">
                  Last name *
                </label>
                <input id="bk-last" name="lastName" required className="h-12 w-full border border-line px-4 text-sm outline-none transition-colors focus:border-gold" />
              </div>
            </div>
            <div>
              <label htmlFor="bk-email" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-navy">
                Email *
              </label>
              <input id="bk-email" name="email" type="email" required className="h-12 w-full border border-line px-4 text-sm outline-none transition-colors focus:border-gold" />
            </div>
            <div>
              <label htmlFor="bk-phone" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-navy">
                Phone *
              </label>
              <input id="bk-phone" name="phone" type="tel" required className="h-12 w-full border border-line px-4 text-sm outline-none transition-colors focus:border-gold" />
            </div>
            <div>
              <label htmlFor="bk-topic" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-navy">
                What should we prepare for?
              </label>
              <textarea id="bk-topic" name="location" rows={3} placeholder="e.g. 2,400 SF barndo + shop near Tulsa — land purchased" className="w-full border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-gold" />
            </div>

            <button
              type="submit"
              disabled={!selected || !time || status === "sending"}
              className="flex h-[52px] w-full items-center justify-center gap-2 bg-gold text-[13px] font-bold uppercase tracking-[0.14em] text-navy-deep transition-colors hover:bg-gold-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Booking…
                </>
              ) : selected && time ? (
                <>Book {selected.getMonth() + 1}/{selected.getDate()} at {time}</>
              ) : (
                "Select a date & time"
              )}
            </button>
            {status === "error" && (
              <p role="alert" className="text-center text-sm text-red-600">
                Something went wrong — please call us at +1 405-856-2358.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
