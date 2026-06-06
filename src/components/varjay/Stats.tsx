import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

// ─── COLOUR PALETTE ──────────────────────────────────────────────────────────
const BLUE     = "#5BB8E8";
const NAVY     = "#0B1F3A";
const NAVY_MID = "#0F2847";
const ACCENT   = "#A8D8F0";
const WHITE    = "#EEF6FC";

// ── GOLD TOKENS (three-stop shimmer for the numbers) ─────────────────────────
const GOLD_LIGHT  = "#F5D97A";   // highlight
const GOLD_MID    = "#C8963C";   // rich mid-gold
const GOLD_DARK   = "#8A5E1A";   // shadow stop
// ─────────────────────────────────────────────────────────────────────────────

function CountUp({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv     = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v * 10) / 10}${suffix}`);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  return (
    <span ref={ref} className="inline-block">
      <motion.span>{display}</motion.span>
    </span>
  );
}

const stats = [
  { value: 5,   suffix: "+", prefix: "",   label: "YEARS"       },
  { value: 150, suffix: "+", prefix: "",   label: "STUDENTS"    },
  { value: 9,   suffix: "",  prefix: "",   label: "INSTRUMENTS" },
  { value: 4.9, suffix: "",  prefix: "★ ", label: "RATING"      },
];

export function Stats() {
  return (
    <section
      style={{
        background: NAVY_MID,
        borderTop:    `1px solid ${BLUE}20`,
        borderBottom: `1px solid ${BLUE}20`,
      }}
      className="py-20 relative overflow-hidden"
    >
      {/* Subtle ambient glow behind the whole row */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 70% 120% at 50% 50%, ${GOLD_MID}08, transparent 70%)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center px-4 py-8 relative group"
            style={{ borderRight: i < 3 ? `1px solid ${BLUE}18` : "none" }}
          >
            {/* Per-stat top glow line — gold */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[1px] transition-opacity duration-300 group-hover:opacity-100 opacity-60"
              style={{ background: `linear-gradient(to right, transparent, ${GOLD_MID}80, transparent)` }}
            />

            {/*
              GOLD NUMBER
              Uses a CSS background-clip trick: the number text is transparent
              and the gold gradient shows through — giving a genuine metallic
              shimmer without any image assets.
            */}
            <div
              className="font-serif font-light select-none"
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                lineHeight: 1,
                // Three-stop gold gradient: light highlight → rich mid → dark shadow
                background: `linear-gradient(160deg, ${GOLD_LIGHT} 0%, ${GOLD_MID} 45%, ${GOLD_DARK} 80%, ${GOLD_MID} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                // Subtle glow behind the number
                filter: `drop-shadow(0 0 18px ${GOLD_MID}55)`,
              }}
            >
              <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>

            {/* Label — stays in the blue palette */}
            <div
              className="font-mono text-xs tracking-widest mt-3 uppercase"
              style={{ color: `${WHITE}55` }}
            >
              {s.label}
            </div>

            {/* Bottom accent dot — gold on hover */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: GOLD_MID }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
