import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";

import { breadcrumbSchema, ldJson, localBusinessSchema } from "@/components/varjay/schema";

const URL = "https://instrument-story-spark.lovable.app/contact";

// ─── THE BLUE PALETTE (DARK TO LIGHT) ────────────────────────────────────────
const NAVY = "#0B1F3A"; // Deep Navy (Hero background)
const BLUE = "#5BB8E8"; // Vibrant Sky Blue (Accents, Buttons)
const ACCENT = "#A8D8F0"; // Soft Blue Accent
const LIGHT = "#EBF5FB"; // Ice Blue (Section background)
const WHITE = "#FFFFFF"; // Form background

const notes = ["♩", "♪", "♫", "♬", "𝄞"];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Varjay Music Academy — After plot 78 to 81 and before sector 1, add Near Narayan Dairy, please make this change wherever address is there in the website" },
      {
        name: "description",
        content:
          "Call +91 777 000 3036 or send an enquiry. Studio in Sanpada, Navi Mumbai. Online classes worldwide. Mon–Sat, 10 AM – 8 PM.",
      },
      { property: "og:title", content: "Contact Varjay Music Academy" },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      ldJson(localBusinessSchema()),
      ldJson(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]),
      ),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your message has been sent.");
    }, 1500);
  };

  // Light theme input styles
  const inputStyles = "w-full rounded-xl bg-[#EBF5FB] border border-[#A8D8F0]/60 px-5 py-4 text-sm text-[#0B1F3A] placeholder:text-[#0B1F3A]/40 focus:outline-none focus:border-[#5BB8E8] focus:ring-2 focus:ring-[#5BB8E8]/30 transition-all";
  const labelStyles = "block font-mono text-[11px] tracking-widest text-[#0B1F3A]/60 mb-2 uppercase font-semibold";

  return (
    <main className="w-full overflow-hidden relative bg-white">

      {/* ─── CUSTOM CONTACT HERO (DARK NAVY) ────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: NAVY, minHeight: "80svh" }}>

        {/* Painterly blobs + staff lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute" style={{ width: "70vw", height: "70vh", top: "-20%", left: "-15%", background: `radial-gradient(ellipse, ${BLUE}18 0%, transparent 70%)`, transform: "rotate(-20deg)" }} />
          <div className="absolute" style={{ width: "50vw", height: "60vh", bottom: "-10%", left: "5%", background: `radial-gradient(ellipse, ${ACCENT}12 0%, transparent 65%)` }} />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-full" style={{ top: `${35 + i * 4}%`, height: "1px", background: `linear-gradient(to right, transparent, ${LIGHT}06 20%, ${LIGHT}06 80%, transparent)` }} />
          ))}
        </div>

        {/* RIGHT — Image panel (desktop split alignment) */}
        <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width: "50%", clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="absolute inset-0">
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg"
              alt="Varjay Music Academy Studio"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-48 pointer-events-none" style={{ background: `linear-gradient(to right, ${NAVY}, transparent)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, ${NAVY}88 0%, transparent 20%, transparent 70%, ${NAVY}EE 100%)` }} />
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: `linear-gradient(135deg, ${BLUE}55 0%, transparent 50%, ${ACCENT}33 100%)`, mixBlendMode: "color" }} />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="absolute inset-0">
            <img
              src="https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg"
              alt="Varjay Music Academy Studio"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${NAVY}F5, ${NAVY}CC 55%, ${NAVY}88)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${NAVY}66, transparent 30%, transparent 58%, ${NAVY} 100%)` }} />
        </div>

        {/* Floating music notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {notes.map((note, i) => {
            const c = [BLUE, ACCENT, LIGHT, BLUE, ACCENT][i];
            return (
              <motion.span key={i} className="absolute select-none"
                style={{ fontFamily: "serif", fontSize: `${1.5 + (i % 3) * 0.8}rem`, left: `${10 + i * 15}%`, top: `${25 + (i % 4) * 12}%`, color: `${c}22` }}
                animate={{ y: [-20, -60, -20], opacity: [0.08, 0.22, 0.08], rotate: [-8, 8, -8] }}
                transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}>
                {note}
              </motion.span>
            );
          })}
        </div>

        {/* LEFT CONTENT PANEL */}
        <div className="relative z-20 flex flex-col justify-center min-h-[80svh] pb-16 pt-24"
          style={{ maxWidth: "55%", paddingLeft: "max(3rem,5vw)", paddingRight: "max(2rem,4vw)" }}>

          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex self-start items-center gap-2.5 px-4 py-2 rounded-full font-mono text-[10px] mb-8 tracking-widest uppercase"
            style={{ border: `1px solid ${BLUE}45`, background: `${BLUE}12`, color: BLUE }}>
            CONTACT US
          </motion.div>

          <div className="max-w-xl">
            <h1 className="font-serif leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.8rem,5.5vw,5.5rem)" }}>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                className="block" style={{ color: LIGHT }}>
                We'd love to
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
                className="block italic" style={{ color: BLUE, textShadow: `0 0 50px ${BLUE}40` }}>
                hear from you.
              </motion.span>
            </h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 max-w-md">
            <div className="w-12 h-[2px] mb-6 rounded-full" style={{ background: `linear-gradient(to right, ${BLUE}, ${ACCENT})` }} />
            <p className="text-lg leading-relaxed" style={{ color: `${LIGHT}CC` }}>
              Whether you're starting out at 7 or 70 — drop us a line. We reply within a few hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── LIGHT THEME FORM SECTION ─────────────────────────────────────── */}
      <section className="relative z-20 py-24" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">

          {/* Left: Contact Info (Dark text on light background) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-[11px] tracking-widest text-[#5BB8E8] uppercase font-bold mb-4">
  Get in Touch
</p>

<h2 className="font-serif text-4xl font-semibold text-[#0B1F3A] leading-tight mb-6">
  Let's make some music.
</h2>

<p className="text-[#0B1F3A]/70 leading-relaxed mb-10 text-lg">
  Visit our academy in Sanpada or drop us a message right here. We are always
  happy to discuss your musical journey.
</p>

<ul className="space-y-8">
  <li className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-white border border-[#5BB8E8]/30 shadow-sm flex items-center justify-center shrink-0">
      <MapPin className="w-5 h-5 text-[#5BB8E8]" />
    </div>
    <div>
      <p className="font-semibold text-[#0B1F3A] text-lg">
        Varjay Music Academy
      </p>
      <p className="text-[#0B1F3A]/60 mt-1">
        Shop No. 1 & 2, Sai-Jyot Co-op Hsg Society, Plot No. 106 A,
        Next to Rekhi-Sai Orchid Co-op Hsg Society, Sector 1,
        Sanpada, Navi Mumbai - 400705, Maharashtra
      </p>
      <p className="text-[#0B1F3A]/60 mt-1">
        Studio + online classes worldwide
      </p>
    </div>
  </li>

  <li className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-white border border-[#5BB8E8]/30 shadow-sm flex items-center justify-center shrink-0">
      <Phone className="w-5 h-5 text-[#5BB8E8]" />
    </div>
    <div>
      <p className="font-semibold text-[#0B1F3A] text-lg">
        <a
          href="tel:+917770003037"
          className="hover:text-[#5BB8E8] transition-colors"
        >
          +91 77700 03037
        </a>
      </p>
      <p className="font-semibold text-[#0B1F3A] text-lg">
        <a
          href="tel:+917770003036"
          className="hover:text-[#5BB8E8] transition-colors"
        >
          +91 77700 03036
        </a>
      </p>
      <p className="text-[#0B1F3A]/60 mt-1">
        Call or WhatsApp us directly
      </p>
    </div>
  </li>

  <li className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-full bg-white border border-[#5BB8E8]/30 shadow-sm flex items-center justify-center shrink-0">
      <Mail className="w-5 h-5 text-[#5BB8E8]" />
    </div>
    <div>
      <p className="font-semibold text-[#0B1F3A] text-lg">
        <a
          href="mailto:info@varjaymusic.com"
          className="hover:text-[#5BB8E8] transition-colors"
        >
          info@varjaymusic.com
        </a>
      </p>
      <p className="text-[#0B1F3A]/60 mt-1">
        We typically reply within 24 hours
      </p>
    </div>
  </li>
</ul>
          </motion.div>

          {/* Right: Contact Form (White card on light blue background) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-8 sm:p-10 relative overflow-hidden bg-white shadow-xl border border-[#A8D8F0]/50"
          >
            <form onSubmit={handleSubmit} className="relative z-10 grid gap-6">

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelStyles}>Name</label>
                  <input required type="text" placeholder="Your full name" className={inputStyles} />
                </div>
                <div>
                  <label className={labelStyles}>Contact Number</label>
                  <input required type="tel" placeholder="+91 ..." className={inputStyles} />
                </div>
              </div>

              <div>
                <label className={labelStyles}>Email Address</label>
                <input required type="email" placeholder="you@example.com" className={inputStyles} />
              </div>

              <div>
                <label className={labelStyles}>Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you start your musical journey?"
                  className={`${inputStyles} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden bg-[#0B1F3A] text-[#5BB8E8] hover:bg-[#162F52] shadow-md shadow-[#0B1F3A]/10"
              >
                <span className="relative flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ─── LIGHT THEME GOOGLE MAP ───────────────────────────────────────── */}
      <section className="relative z-20 pb-24 pt-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-lg border border-[#A8D8F0]/30 transition-all"
          >
            <iframe
              title="Varjay Music Academy — Sanpada, Navi Mumbai"
              src="https://www.google.com/maps?q=Sanpada,+Navi+Mumbai&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

    </main>
  );
}
