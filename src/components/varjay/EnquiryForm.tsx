import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { INSTRUMENTS } from "./data";

const WHATSAPP_NUMBER = "917770003036";
// Configurable Google Apps Script web app URL. Set in Project Settings → Env vars:
//   VITE_GSHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfyc.../exec
const SHEETS_URL = (import.meta as any).env?.VITE_GSHEETS_WEBHOOK_URL as string | undefined;

// 1. Updated schema: 'course' is now an array of strings
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[0-9 +\-()]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(120),
  course: z.array(z.string()).min(1, "Please choose at least one course"),
  message: z.string().trim().max(600).optional(),
});

const COURSE_OPTIONS = [
  ...INSTRUMENTS.map((i) => i.name),
  "Vocals (Hindustani Classical)",
  "Keyboard",
  "Not sure yet",
];

type Props = {
  variant?: "card" | "inline";
  defaultCourse?: string;
  title?: string;
  subtitle?: string;
};

export function EnquiryForm({
  variant = "card",
  defaultCourse,
  title = "Enquire about a class",
  subtitle = "We'll get back within a few hours. Or message us directly on WhatsApp.",
}: Props) {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 2. Added state to track multiple selected courses
  const [selectedCourses, setSelectedCourses] = useState<string[]>(
    defaultCourse ? [defaultCourse] : []
  );

  const toggleCourse = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course) // Remove if already selected
        : [...prev, course]                // Add if not selected
    );
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // 3. Merge FormData with our local React state for courses
    const raw = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      course: selectedCourses,
      message: String(fd.get("message") || ""),
    };

    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const fieldErrs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = String(i.path[0] ?? "");
        if (k && !fieldErrs[k]) fieldErrs[k] = i.message;
      });
      setErrors(fieldErrs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    // Join courses into a single string for text-based platforms
    const coursesString = parsed.data.course.join(", ");

    // Fire-and-forget to Google Sheets
    if (SHEETS_URL) {
      try {
        await fetch(SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            ...parsed.data,
            course: coursesString, // Pass as a flattened string to Sheets
            page: typeof window !== "undefined" ? window.location.pathname : "",
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch {
        // ignore — Sheets webhook is best-effort
      }
    }

    // Open WhatsApp with prefilled enquiry
    const wa =
      `Hi Varjay Music Academy, my name is ${parsed.data.name}.%0A` +
      `Phone: ${parsed.data.phone}%0AEmail: ${parsed.data.email}%0A` +
      `Interested in: ${coursesString}` +
      (parsed.data.message ? `%0AMessage: ${encodeURIComponent(parsed.data.message)}` : "");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${wa}`, "_blank", "noopener");

    navigate({ to: "/thank-you" });
  }

  const wrap =
    variant === "card"
      ? "bg-white rounded-3xl shadow-xl border border-amber-100 p-7 md:p-9"
      : "";

  const input =
    "w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-[15px] text-[#1C0A00] placeholder:text-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/40 focus:border-[#F59E0B]";

  return (
    <div className={wrap}>
      <p className="font-mono text-[11px] tracking-widest text-[#F59E0B]">ENQUIRY FORM</p>
      <h3 className="font-display text-2xl md:text-3xl text-[#1C0A00] font-semibold mt-1">
        {title}
      </h3>
      <p className="text-sm text-[#78716C] mt-2">{subtitle}</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="font-mono text-[11px] tracking-wider text-[#78716C]">NAME *</label>
            <input name="name" className={`${input} mt-1`} placeholder="Your full name" />
            {errors.name && <p className="text-xs text-[#F43F5E] mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="font-mono text-[11px] tracking-wider text-[#78716C]">PHONE *</label>
            <input name="phone" className={`${input} mt-1`} placeholder="+91 ..." />
            {errors.phone && <p className="text-xs text-[#F43F5E] mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="font-mono text-[11px] tracking-wider text-[#78716C]">EMAIL *</label>
          <input name="email" type="email" className={`${input} mt-1`} placeholder="you@example.com" />
          {errors.email && <p className="text-xs text-[#F43F5E] mt-1">{errors.email}</p>}
        </div>

        {/* 4. New Multi-Select Pill Interface */}
        <div>
          <label className="font-mono text-[11px] tracking-wider text-[#78716C]">
            COURSES / INSTRUMENTS (Select all that apply) *
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {COURSE_OPTIONS.map((c) => {
              const isSelected = selectedCourses.includes(c);
              return (
                <button
                  type="button"
                  key={c}
                  onClick={() => toggleCourse(c)}
                  className={`px-3.5 py-2 rounded-full border text-[13px] transition-all duration-200 ${isSelected
                      ? "bg-[#F59E0B] border-[#F59E0B] text-white font-medium shadow-sm shadow-amber-500/20"
                      : "bg-white border-amber-200 text-[#78716C] hover:border-amber-400 hover:text-[#1C0A00]"
                    }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
          {errors.course && <p className="text-xs text-[#F43F5E] mt-1">{errors.course}</p>}
        </div>

        <div>
          <label className="font-mono text-[11px] tracking-wider text-[#78716C]">
            MESSAGE (OPTIONAL)
          </label>
          <textarea
            name="message"
            rows={3}
            className={`${input} mt-1 resize-none`}
            placeholder="When would you like to start? Online or offline?"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#F59E0B] text-[#1C0A00] font-semibold hover:bg-[#d97706] hover:text-white transition-colors shadow-lg shadow-amber-500/30 disabled:opacity-60"
        >
          {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          {submitting ? "Sending..." : "Send enquiry & open WhatsApp"}
        </button>

        <p className="text-[11px] text-[#a8a29e] font-mono mt-1">
          By submitting you agree to be contacted on the details above.
        </p>
      </form>
    </div>
  );
}