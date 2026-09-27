"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export type InquiryType =
  | "general"
  | "stock-plan"
  | "modification"
  | "custom-design"
  | "building-kit"
  | "consultation"
  | "ebook";

const TYPE_LABELS: Record<InquiryType, string> = {
  general: "General inquiry",
  "stock-plan": "Stock plan request",
  modification: "Plan modification quote",
  "custom-design": "Custom design request",
  "building-kit": "Building kit quote",
  consultation: "Consultation request",
  ebook: "eBook download",
};

const SUBMIT_LABELS: Record<InquiryType, string> = {
  general: "Send Message",
  "stock-plan": "Request Plan Info",
  modification: "Request Modification Quote",
  "custom-design": "Start My Custom Design",
  "building-kit": "Get a Kit Quote",
  consultation: "Request Consultation",
  ebook: "Send My Free eBook",
};

const TABS: { key: InquiryType; label: string }[] = [
  { key: "general", label: "General" },
  { key: "modification", label: "Modify a Plan" },
  { key: "custom-design", label: "Custom Design" },
  { key: "building-kit", label: "Building Kit" },
];

export function InquiryForm({
  type,
  planName = "",
  title,
  intro,
  showPlanField = false,
  showLocationField = true,
  showTimelineField = false,
  showBudgetField = false,
  showTypeTabs = false,
  dark = false,
  messageLabel = "Tell us about your project",
  messagePlaceholder = "Your vision, must-haves, land details, timeline — anything that helps us help you.",
}: {
  type: InquiryType;
  planName?: string;
  title?: string;
  intro?: string;
  showPlanField?: boolean;
  showLocationField?: boolean;
  showTimelineField?: boolean;
  showBudgetField?: boolean;
  showTypeTabs?: boolean;
  dark?: boolean;
  messageLabel?: string;
  messagePlaceholder?: string;
}) {
  const [activeType, setActiveType] = useState<InquiryType>(type);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const inputBase = dark
    ? "border-white/20 bg-white/5 text-white focus:border-gold"
    : "border-line bg-white text-ink focus:border-gold";
  const labelIdle = dark ? "text-white/55" : "text-body/70";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<
      string,
      string
    >;

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: activeType, ...data }),
      });
      if (!res.ok) throw new Error((await res.json()).error ?? "Something went wrong");
      // Button morphs to checkmark with the sage confirm-pulse, then routes to /thank-you.
      setStatus("sent");
      await new Promise((r) => setTimeout(r, 1300));
      router.push(`/thank-you?type=${activeType}`);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  /** Floating-label field: label rises and shrinks on focus; border → gold in 150ms. */
  function FloatField({
    id,
    label,
    name,
    fieldType = "text",
    required = false,
    autoComplete,
    defaultValue,
    placeholder,
    textarea = false,
    rows = 5,
  }: {
    id: string;
    label: string;
    name: string;
    fieldType?: string;
    required?: boolean;
    autoComplete?: string;
    defaultValue?: string;
    placeholder?: string;
    textarea?: boolean;
    rows?: number;
  }) {
    const labelCls = `pointer-events-none absolute left-4 ${textarea ? "top-[26px]" : "top-1/2 -translate-y-1/2"} ${labelIdle} text-sm transition-all duration-150
      peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-gold-dark
      peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em]`;

    if (textarea) {
      return (
        <div className="relative">
          <textarea
            id={id}
            name={name}
            rows={rows}
            required={required}
            placeholder=" "
            data-ph={placeholder}
            title={placeholder}
            className={`peer w-full resize-y border px-4 pb-3 pt-7 text-sm outline-none transition-colors duration-150 ${inputBase}`}
          />
          <label htmlFor={id} className={labelCls}>
            {label}
            {required ? " *" : ""}
          </label>
        </div>
      );
    }
    return (
      <div className="relative">
        <input
          id={id}
          name={name}
          type={fieldType}
          required={required}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          placeholder=" "
          className={`peer h-14 w-full border px-4 pb-2 pt-6 text-sm outline-none transition-colors duration-150 ${inputBase}`}
        />
        <label htmlFor={id} className={labelCls}>
          {label}
          {required ? " *" : ""}
        </label>
      </div>
    );
  }

  function StaticLabel({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
    return (
      <label
        htmlFor={htmlFor}
        className={`mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] ${
          dark ? "text-white/80" : "text-navy"
        }`}
      >
        {children}
      </label>
    );
  }

  const msgLabel =
    activeType === "modification" ? "Requested changes" : messageLabel;
  const msgPh =
    activeType === "modification"
      ? "List the changes you'd like — e.g. widen the shop to 40', add a fourth bedroom, mirror the plan, move the laundry…"
      : messagePlaceholder;

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-label={TYPE_LABELS[activeType]}>
      {(title || intro) && (
        <div className="mb-6">
          {title && (
            <h3 className={`font-display text-2xl font-semibold ${dark ? "text-white" : "text-navy"}`}>
              {title}
            </h3>
          )}
          {intro && (
            <p className={`mt-2 text-sm leading-6 ${dark ? "text-white/65" : "text-body"}`}>{intro}</p>
          )}
        </div>
      )}

      {/* Routed form tabs — slide-fade so users register the context change */}
      {showTypeTabs && (
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line" role="tablist" aria-label="Inquiry type">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={activeType === t.key}
              onClick={() => setActiveType(t.key)}
              className={`relative pb-3 text-[12px] font-bold uppercase tracking-[0.12em] transition-colors ${
                activeType === t.key ? "text-navy" : "text-body/70 hover:text-navy"
              }`}
            >
              {t.label}
              {activeType === t.key && (
                <motion.span
                  layoutId="inquiry-tab-line"
                  className="absolute inset-x-0 bottom-0 h-[2px] bg-gold"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeType}
          className="space-y-5"
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FloatField id={`${activeType}-first`} name="firstName" label="First name" required autoComplete="given-name" />
            <FloatField id={`${activeType}-last`} name="lastName" label="Last name" required autoComplete="family-name" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FloatField id={`${activeType}-email`} name="email" label="Email" fieldType="email" required autoComplete="email" />
            <FloatField id={`${activeType}-phone`} name="phone" label="Phone" fieldType="tel" autoComplete="tel" />
          </div>

          {(showPlanField || activeType === "modification" || activeType === "building-kit") && (
            <FloatField
              id={`${activeType}-plan`}
              name="planName"
              label="Plan name or number"
              defaultValue={planName}
            />
          )}

          {showLocationField && (
            <FloatField id={`${activeType}-location`} name="location" label="Project city & state" />
          )}

          <div className={`grid gap-5 ${showTimelineField && showBudgetField ? "sm:grid-cols-2" : ""}`}>
            {showTimelineField && (
              <div>
                <StaticLabel htmlFor={`${activeType}-timeline`}>Expected construction timeline</StaticLabel>
                <select id={`${activeType}-timeline`} name="timeline" defaultValue=""
                  className={`h-14 w-full border px-4 text-sm outline-none transition-colors duration-150 ${inputBase}`}>
                  <option value="" disabled>Select a timeline</option>
                  <option>0–3 months</option>
                  <option>3–6 months</option>
                  <option>6–12 months</option>
                  <option>12+ months</option>
                  <option>Just researching</option>
                </select>
              </div>
            )}
            {showBudgetField && (
              <div>
                <StaticLabel htmlFor={`${activeType}-budget`}>Budget range</StaticLabel>
                <select id={`${activeType}-budget`} name="budget" defaultValue=""
                  className={`h-14 w-full border px-4 text-sm outline-none transition-colors duration-150 ${inputBase}`}>
                  <option value="" disabled>Select a range</option>
                  <option>Under $250k</option>
                  <option>$250k – $500k</option>
                  <option>$500k – $1M</option>
                  <option>$1M+</option>
                  <option>Prefer to discuss</option>
                </select>
              </div>
            )}
          </div>

          <FloatField
            id={`${activeType}-message`}
            name="message"
            label={msgLabel}
            placeholder={msgPh}
            textarea
            required={activeType === "modification"}
          />
        </motion.div>
      </AnimatePresence>

      {status === "error" && (
        <p role="alert" className="border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg} — please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className={`btn-shimmer flex h-[52px] w-full items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] transition-colors ${
          status === "sent"
            ? "success-pulse bg-success text-white"
            : "bg-gold text-navy-deep hover:bg-gold-dark hover:text-white"
        } disabled:cursor-default`}
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : status === "sent" ? (
          <>
            <CheckCircle2 className="h-5 w-5" aria-hidden /> Received — redirecting
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            {SUBMIT_LABELS[activeType]}
          </>
        )}
      </button>

      <p className={`text-center text-xs leading-5 ${dark ? "text-white/45" : "text-body/80"}`}>
        By submitting, you consent to be contacted about your project. We never sell your
        information.
      </p>
    </form>
  );
}
