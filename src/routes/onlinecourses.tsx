import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Wifi,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";
import { ContactStrip } from "@/components/varjay/ContactStrip";

// ─── ROUTE — must be first export for TanStack Router code-splitter ──────────
export const Route = createFileRoute("/onlinecourses")({
  head: () => ({
    meta: [
      { title: "Online Courses — Varjay Music Academy" },
      {
        name: "description",
        content:
          "Learn Flute, Guitar, Vocal, Violin, Keyboard & Mandolin online with certified Hindustani and Carnatic faculty at Varjay Music Academy.",
      },
      { property: "og:title", content: "Online Courses — Varjay Music Academy" },
      {
        property: "og:description",
        content:
          "Certified online music lessons — Hindustani, Carnatic & Western. Batches of 5–7. Flexible timings.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://varjaymusic.com/online-courses" },
    ],
  }),
  component: OnlineCoursesPage,
});

// ─── PALETTE ─────────────────────────────────────────────────────────────────
const NAVY = "#0B1F3A";
const BLUE = "#5BB8E8";
const ACCENT = "#A8D8F0";
const LIGHT = "#EBF5FB";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const ONLINE_INSTRUMENTS = [
  {
    id: "flute",
    name: "Flute",
    style: "Hindustani",
    color: "#5BB8E8",
    img: "https://images.unsplash.com/photo-1645772647876-76f184a402a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    faculty: [
      {
        name: "Kaizan Vandrevala",
        avatar: "KV",
        bio: "Kaizan Vandrevala is a dedicated Hindustani music educator with 7 years of experience teaching professional bamboo flute, specialising in imparting music education right from the basics — covering Alankaars, Raagas, Taal, and songs. A key strength of his is ear training, where he identifies the root note/key of any song by listening and teaches students to do the same. He has deep expertise in Raga-based training, guiding students through the melodic atmosphere of a Raga, linking it to compositions, and helping them play tracks without relying on notations.",
        plans: [{ classes: 4, duration: "1 hr", fee: 2000 }],
      },
    ],
  },
  {
    id: "guitar",
    name: "Guitar",
    style: "Western",
    color: "#2E86AB",
    img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80",
    faculty: [
      {
        name: "Aabhas Shrivastav",
        avatar: "AS",
        bio: "Aabhas Shrivastava is a motivated musician and student music therapist with an extensive background in music and psychology, skilled in preparing customised lesson plans for individual learners. Since 2020, he has been working at Aalaap Studio in a dual role — as a Guitar Teacher and as a Production Artist. He is currently pursuing a degree in Piano from Trinity College of Music.",
        plans: [{ classes: 4, duration: "1 hr", fee: 2000 }],
      },
      {
        name: "Raju Kirtunia",
        avatar: "RK",
        bio: "Raju Kirtunia is a highly experienced multi-instrument music educator, holding Grade V in Nylon String Guitar from the Calcutta School of Music under Trinity College of London, and Grade VIII in Spanish Guitar from the University of West London. He brings over 30 years of teaching experience in Spanish Guitar and more than 20 years each in Nylon String Guitar, Bass Guitar, Mandolin, and Ukulele.",
        plans: [{ classes: 8, duration: "0.5 hr", fee: 2400 }],
      },
    ],
  },
  {
    id: "vocal-hindustani",
    name: "Vocal",
    style: "Hindustani",
    color: "#6C5CE7",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    faculty: [
      {
        name: "Akanksha Shah",
        avatar: "AK",
        bio: 'Akanksha Shah received her musical training under the guidance of the renowned Padma Bhushan awardee musician Pandit Hariharan ji and his disciple Shri Matang Parikh ji. During her 7 years of training, she spent 2 years in Mumbai and 5 years in Ahmedabad learning music under Shri Matang Parikh ji of the Mewati Gharana. During this period, 111 fellow disciples together got their names recorded in the India Book of Records.',
        plans: [{ classes: 12, duration: "0.75 hr", fee: 3600 }],
      },
    ],
  },
  {
    id: "vocal-carnatic",
    name: "Vocal",
    style: "Carnatic",
    color: "#E17055",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    faculty: [
      {
        name: "Roopavathi Kotte",
        avatar: "RK",
        bio: "Roopavathi Kotte is an accomplished Carnatic vocal teacher bringing deep expertise in Carnatic music traditions and pedagogy.",
        plans: [
          { classes: 6, duration: "0.5 hr", fee: 1800 },
          { classes: 6, duration: "0.75 hr", fee: 1800 },
          { classes: 8, duration: "0.5 hr", fee: 2000 },
          { classes: 8, duration: "1 hr", fee: 2000 },
        ],
      },
    ],
  },
  {
    id: "violin-hindustani",
    name: "Violin",
    style: "Hindustani",
    color: "#00B894",
    img: "https://images.unsplash.com/photo-1692553173440-bc496a6f5e19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    faculty: [
      {
        name: "Shivangi",
        avatar: "SH",
        bio: "Shivangi is an experienced Hindustani violin teacher, bringing deep knowledge of classical Indian violin technique and repertoire.",
        plans: [{ classes: 8, duration: "0.5 hr", fee: 2000 }],
      },
    ],
  },
  {
    id: "violin-carnatic",
    name: "Violin",
    style: "Carnatic",
    color: "#FDCB6E",
    img: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=800&q=80",
    faculty: [
      {
        name: "Sivashree S.P.",
        avatar: "SS",
        bio: "Sivashree S.P. is a skilled Carnatic violin teacher bringing expertise in Carnatic violin technique and the classical South Indian music tradition.",
        plans: [{ classes: 10, duration: "1 hr", fee: 3000 }],
      },
    ],
  },
  {
    id: "keyboard-western",
    name: "Keyboard",
    style: "Western",
    color: "#0984E3",
    img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80",
    faculty: [
      {
        name: "Chandru P.",
        avatar: "CP",
        bio: "Chandru P. is a skilled keyboard instructor specialising in Western keyboard techniques, covering theory, sight-reading, and performance skills.",
        plans: [
          { classes: 6, duration: "0.5 hr", fee: 1800 },
          { classes: 8, duration: "0.5 hr", fee: 2000 },
        ],
      },
      {
        name: "Aabhas Shrivastav",
        avatar: "AS",
        bio: "Aabhas Shrivastava is a motivated musician and student music therapist with an extensive background in music and psychology, skilled in preparing customised lesson plans for individual learners. Currently pursuing a degree in Piano from Trinity College of Music.",
        plans: [{ classes: 6, duration: "0.5 hr", fee: 1800 }],
      },
    ],
  },
  {
    id: "keyboard-carnatic",
    name: "Keyboard",
    style: "Carnatic",
    color: "#A29BFE",
    img: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
    faculty: [
      {
        name: "Sumalatha T.R.",
        avatar: "ST",
        bio: "Very passionate and dedicated music teacher having 7 years of experience in teaching vocal and instrumental music to students. Skilled in Carnatic music, violin, and keyboard playing, committed to creating a positive learning environment and helping students build confidence, creativity, and a love for music.",
        plans: [{ classes: 6, duration: "0.5 hr", fee: 1800 }],
      },
    ],
  },
  {
    id: "mandolin",
    name: "Mandolin",
    style: "Multi-style",
    color: "#D63031",
    img: "https://images.unsplash.com/photo-1704479220659-8d5911f8432c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    faculty: [
      {
        name: "Raju Kirtunia",
        avatar: "RK",
        bio: "Raju Kirtunia is a highly experienced multi-instrument music educator, holding Grade V in Nylon String Guitar from the Calcutta School of Music under Trinity College of London, and Grade VIII in Spanish Guitar from the University of West London. He brings over 20 years of teaching experience in Mandolin, online and offline.",
        plans: [{ classes: 6, duration: "0.5 hr", fee: 1800 }],
      },
    ],
  },
];

const COURSE_OPTIONS = ONLINE_INSTRUMENTS.map((i) => `${i.name} (${i.style})`);

// ─── TYPES ────────────────────────────────────────────────────────────────────
type FacultyMember = (typeof ONLINE_INSTRUMENTS)[0]["faculty"][0];
type Instrument = (typeof ONLINE_INSTRUMENTS)[0];

// ─── SUB-COMPONENTS (function declarations — hoisted, no conflict) ─────────

function FacultyCard({ faculty, color }: { faculty: FacultyMember; color: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-2xl bg-white border p-6"
      style={{ borderColor: `${color}30` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
          style={{ background: color }}
        >
          {faculty.avatar}
        </div>
        <div>
          <p className="font-semibold text-[#0B1F3A] text-base leading-tight">
            {faculty.name}
          </p>
          <p className="text-xs text-[#0B1F3A]/50 mt-0.5">Faculty</p>
        </div>
      </div>

      <div className="relative">
        <p
          className={`text-sm text-[#0B1F3A]/70 leading-relaxed ${
            !expanded ? "line-clamp-3" : ""
          }`}
        >
          {faculty.bio}
        </p>
        {faculty.bio.length > 160 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 flex items-center gap-1 text-xs font-semibold transition-colors"
            style={{ color }}
          >
            {expanded ? (
              <>Show less <ChevronUp className="w-3.5 h-3.5" /></>
            ) : (
              <>Read more <ChevronDown className="w-3.5 h-3.5" /></>
            )}
          </button>
        )}
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-xs font-mono tracking-widest uppercase text-[#0B1F3A]/40 mb-3">
          Available Plans
        </p>
        {faculty.plans.map((plan, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-xl px-4 py-3"
            style={{ background: `${color}0D` }}
          >
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-semibold px-2 py-1 rounded-full"
                style={{ background: `${color}20`, color }}
              >
                {plan.classes} classes/mo
              </span>
              <span className="text-xs text-[#0B1F3A]/60">
                {plan.duration} / session
              </span>
            </div>
            <span className="font-bold text-[#0B1F3A]">
              ₹{plan.fee.toLocaleString()}
            </span>
          </div>
        ))}
        <p className="text-[10px] text-[#0B1F3A]/40 pt-1">
          * Timings to be mutually decided between faculty and student.
        </p>
      </div>
    </div>
  );
}

function InstrumentSection({
  instrument,
  index,
}: {
  instrument: Instrument;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      id={instrument.id}
      className="scroll-mt-24"
    >
      <div
        className={`flex flex-col md:flex-row gap-8 items-start mb-8 ${
          !isEven ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-2/5 shrink-0">
          <div
            className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            style={{ boxShadow: `0 16px 48px ${instrument.color}25` }}
          >
            <img
              src={instrument.img}
              alt={`${instrument.name} ${instrument.style}`}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${instrument.color}30 0%, transparent 60%)`,
              }}
            />
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase text-white"
                style={{ background: instrument.color }}
              >
                {instrument.style}
              </span>
            </div>
          </div>
        </div>

        {/* Title + intro */}
        <div className="flex-1 pt-2">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-2"
            style={{ color: instrument.color }}
          >
            Online Classes
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl tracking-tight leading-none"
            style={{ color: NAVY }}
          >
            {instrument.name}
          </h2>
          <div
            className="w-10 h-[3px] rounded-full mt-4 mb-5"
            style={{ background: instrument.color }}
          />
          <p className="text-[#0B1F3A]/65 text-base leading-relaxed max-w-lg">
            Learn {instrument.name} ({instrument.style}) online with our certified
            faculty. Sessions are flexible, tailored to your pace, and conducted
            live one-on-one or in small batches of 5–7.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Live sessions", "Flexible timing", "Certificate on completion"].map(
              (tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
                  style={{
                    borderColor: `${instrument.color}40`,
                    color: instrument.color,
                    background: `${instrument.color}0A`,
                  }}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Faculty cards */}
      <div
        className={`grid gap-5 ${
          instrument.faculty.length === 1
            ? "lg:grid-cols-1 max-w-xl"
            : "sm:grid-cols-2"
        }`}
      >
        {instrument.faculty.map((f) => (
          <FacultyCard key={f.name} faculty={f} color={instrument.color} />
        ))}
      </div>
    </motion.div>
  );
}

function OnlineEnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleCourse = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course) ? prev.filter((c) => c !== course) : [...prev, course]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-[#5BB8E8]/15 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8 text-[#5BB8E8]" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-[#1C0A00] mb-2">
          We'll be in touch soon!
        </h3>
        <p className="text-[#57534e]">
          Thank you for reaching out. Our team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1C0A00]/60 mb-1.5 uppercase tracking-wider">
            Full Name *
          </label>
          <input
            required
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] bg-white text-[#1C0A00] text-sm placeholder:text-[#A8A29E] focus:outline-none focus:border-[#5BB8E8] focus:ring-2 focus:ring-[#5BB8E8]/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#1C0A00]/60 mb-1.5 uppercase tracking-wider">
            Phone / WhatsApp *
          </label>
          <input
            required
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] bg-white text-[#1C0A00] text-sm placeholder:text-[#A8A29E] focus:outline-none focus:border-[#5BB8E8] focus:ring-2 focus:ring-[#5BB8E8]/20 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1C0A00]/60 mb-1.5 uppercase tracking-wider">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] bg-white text-[#1C0A00] text-sm placeholder:text-[#A8A29E] focus:outline-none focus:border-[#5BB8E8] focus:ring-2 focus:ring-[#5BB8E8]/20 transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1C0A00]/60 mb-2 uppercase tracking-wider">
          Courses You're Interested In{" "}
          <span className="normal-case font-normal text-[#A8A29E]">
            (select all that apply)
          </span>
        </label>
        <div className="flex flex-wrap gap-2">
          {COURSE_OPTIONS.map((course) => {
            const active = selectedCourses.includes(course);
            return (
              <button
                key={course}
                type="button"
                onClick={() => toggleCourse(course)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all"
                style={
                  active
                    ? { background: NAVY, borderColor: NAVY, color: BLUE }
                    : { background: "white", borderColor: "#E7E5E4", color: "#1C0A00" }
                }
              >
                {active && <span className="mr-1">✓</span>}
                {course}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1C0A00]/60 mb-1.5 uppercase tracking-wider">
          Message
        </label>
        <textarea
          rows={3}
          placeholder="Any questions or special requirements..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] bg-white text-[#1C0A00] text-sm placeholder:text-[#A8A29E] focus:outline-none focus:border-[#5BB8E8] focus:ring-2 focus:ring-[#5BB8E8]/20 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all hover:opacity-90 active:scale-[0.99]"
        style={{ background: NAVY, color: BLUE }}
      >
        Book My Trial Class →
      </button>
    </form>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
function OnlineCoursesPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: NAVY, minHeight: "75svh" }}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute"
            style={{
              width: "65vw",
              height: "65vh",
              top: "-20%",
              right: "-10%",
              background: `radial-gradient(ellipse, ${BLUE}18 0%, transparent 65%)`,
            }}
          />
          <div
            className="absolute"
            style={{
              width: "45vw",
              height: "55vh",
              bottom: "-15%",
              left: "5%",
              background: `radial-gradient(ellipse, ${ACCENT}12 0%, transparent 65%)`,
            }}
          />
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full"
              style={{
                top: `${35 + i * 5}%`,
                height: "1px",
                background: `linear-gradient(to right, transparent, ${LIGHT}06 20%, ${LIGHT}06 80%, transparent)`,
              }}
            />
          ))}
        </div>

        {/* Desktop right image panel */}
        <div
          className="absolute inset-y-0 right-0 hidden md:block z-10"
          style={{
            width: "48%",
            clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80"
              alt="Online music classes"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div
            className="absolute inset-y-0 left-0 w-48 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${NAVY}, transparent)` }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, ${NAVY}88 0%, transparent 20%, transparent 70%, ${NAVY}EE 100%)`,
            }}
          />
        </div>

        {/* Mobile image */}
        <div className="absolute inset-0 md:hidden z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
              alt="Online music classes"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${NAVY}F5, ${NAVY}CC 55%, ${NAVY}88)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${NAVY}66, transparent 30%, transparent 58%, ${NAVY} 100%)`,
            }}
          />
        </div>

        {/* Hero content */}
        <div
          className="relative z-20 flex flex-col justify-center min-h-[75svh] pb-16 pt-24"
          style={{
            maxWidth: "55%",
            paddingLeft: "max(3rem,5vw)",
            paddingRight: "max(2rem,4vw)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full font-mono text-[10px] mb-8 tracking-widest uppercase"
            style={{ border: `1px solid ${BLUE}45`, background: `${BLUE}12`, color: BLUE }}
          >
            <Wifi className="w-3 h-3" />
            Online Courses
          </motion.div>

          <div className="max-w-lg">
            <h1
              className="font-serif leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.6rem,5vw,5rem)" }}
            >
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="block"
                style={{ color: LIGHT }}
              >
                Learn music
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="block italic"
                style={{ color: BLUE, textShadow: `0 0 50px ${BLUE}40` }}
              >
                from anywhere.
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-md"
          >
            <div
              className="w-10 h-[2px] mb-5 rounded-full"
              style={{ background: `linear-gradient(to right, ${BLUE}, ${ACCENT})` }}
            />
            <p className="text-lg leading-relaxed" style={{ color: `${LIGHT}CC` }}>
              Live one-on-one lessons in Flute, Guitar, Violin, Keyboard, Vocal &
              Mandolin — Hindustani, Carnatic and Western. Flexible timings,
              certified faculty.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-8"
          >
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: BLUE, color: NAVY }}
            >
              Book a Trial →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── WHY ONLINE ────────────────────────────────────────────────────── */}
      <section className="py-14" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={BLUE}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
                title: "Learn from Anywhere",
                desc: "Join from any city, country, or time zone. All you need is a device and a stable connection.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={BLUE}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M22 20v-2a4 4 0 0 0-3-3.87" />
                  </svg>
                ),
                title: "Certified Faculty",
                desc: "All teachers are certified professionals with years of performance and teaching experience.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={BLUE}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                  </svg>
                ),
                title: "Flexible Scheduling",
                desc: "Timings are mutually decided between faculty and student to suit your lifestyle.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 border border-[#A8D8F0]/40 flex flex-col items-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: `${BLUE}15`, border: `1.5px solid ${BLUE}30` }}
                >
                  {item.icon}
                </div>
                <p className="font-semibold text-[#0B1F3A] mb-1.5">{item.title}</p>
                <p className="text-sm text-[#0B1F3A]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTRUMENT SECTIONS ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-24">
          {ONLINE_INSTRUMENTS.map((instrument, index) => (
            <InstrumentSection key={instrument.id} instrument={instrument} index={index} />
          ))}
        </div>
      </section>

      {/* ── ENQUIRY SECTION ───────────────────────────────────────────────── */}
      <ContactStrip defaultCourse="Not sure yet" />
    </main>
  );
}
