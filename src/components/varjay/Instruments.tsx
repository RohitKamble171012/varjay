import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { INSTRUMENTS } from "./data";

/* ── Design tokens ─────────────────────────────────────────────────────── */
const SKY = "#A8D8F0";
const DEEP = "#042C53";
const INK = "#0C2340";
const IVORY = "#F9F7F2";
const SAFFRON = "#F4813A";
const TURMERIC = "#E8B84B";
const TEAL = "#0E9E82";
const CRIMSON = "#C42850";
const LAVENDER = "#5E4DD4";
const FOREST = "#0E8A5A";

const PLAYFAIR = "'Playfair Display', Georgia, serif";

/* ── Per-instrument config ─────────────────────────────────────────────── */
// 8 instruments ordered: Tabla, Piano, Guitar | Dholak, Harmonium, Violin | Vocal, Flute
const INSTRUMENT_ORDER = [
  "Tabla", "Piano", "Guitar",
  "Dholak", "Harmonium", "Violin",
  "Vocal", "Flute",
];

const INSTRUMENT_META: Record<string, { accent: string; chip: string; chipBorder: string; note: string }> = {
  Tabla: { accent: SAFFRON, chip: "rgba(244,129,58,0.22)", chipBorder: "rgba(244,129,58,0.55)", note: "♩" },
  Piano: { accent: TEAL, chip: "rgba(14,158,130,0.22)", chipBorder: "rgba(14,158,130,0.55)", note: "𝄞" },
  Guitar: { accent: CRIMSON, chip: "rgba(196,40,80,0.22)", chipBorder: "rgba(196,40,80,0.55)", note: "♫" },
  Dholak: { accent: LAVENDER, chip: "rgba(94,77,212,0.22)", chipBorder: "rgba(94,77,212,0.55)", note: "♬" },
  Harmonium: { accent: TURMERIC, chip: "rgba(232,184,75,0.22)", chipBorder: "rgba(232,184,75,0.55)", note: "♪" },
  Violin: { accent: FOREST, chip: "rgba(14,138,90,0.22)", chipBorder: "rgba(14,138,90,0.55)", note: "♭" },
  Vocal: { accent: SAFFRON, chip: "rgba(244,129,58,0.22)", chipBorder: "rgba(244,129,58,0.55)", note: "𝄢" },
  Flute: { accent: TEAL, chip: "rgba(14,158,130,0.22)", chipBorder: "rgba(14,158,130,0.55)", note: "♮" },
};

/* ── Background music notes ────────────────────────────────────────────── */
const BG_NOTES = ["♩", "♪", "♫", "♬", "𝄞", "𝄢", "𝄡", "♭", "♮", "♯", "𝄃", "𝄄"];

/* ── 3-D tilt card ─────────────────────────────────────────────────────── */
interface TiltCardProps {
  inst: typeof INSTRUMENTS[number];
  index: number;
  tall?: boolean;
}

function TiltCard({ inst, index, tall = false }: TiltCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12]);

  const name = inst.name as keyof typeof INSTRUMENT_META;
  const meta = INSTRUMENT_META[name] ?? {
    accent: SAFFRON, chip: "rgba(244,129,58,0.22)", chipBorder: "rgba(244,129,58,0.55)", note: "♪"
  };

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    x.set(0); y.set(0); setHovered(false);
  }

  return (
    <motion.a
      ref={ref}
      href="#contact"
      className="relative block overflow-hidden cursor-pointer"
      style={{
        perspective: 1200,
        borderRadius: "22px",
        height: tall ? "340px" : "290px",
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.09, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* The 3-D inner shell */}
      <motion.div
        className="w-full h-full relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          borderRadius: "22px",
          border: "1.5px solid rgba(255,255,255,0.58)",
          boxShadow: hovered
            ? `0 30px 70px rgba(4,44,83,0.35), 0 0 0 1px rgba(255,255,255,0.30), inset 0 1px 0 rgba(255,255,255,0.80), 0 0 40px ${meta.accent}33`
            : "0 8px 32px rgba(4,44,83,0.18), 0 2px 8px rgba(4,44,83,0.12), inset 0 1px 0 rgba(255,255,255,0.70)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Image */}
        <img
          src={inst.img}
          alt={inst.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            borderRadius: "22px",
            transform: hovered ? "scale(1.06)" : "scale(1.0)",
            transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0" style={{
          borderRadius: "22px",
          background: "linear-gradient(165deg, rgba(4,44,83,0.04) 0%, rgba(4,44,83,0.10) 30%, rgba(4,44,83,0.62) 62%, rgba(4,44,83,0.94) 88%, rgba(4,44,83,1.0) 100%)",
        }} />

        {/* Sky tint top-left */}
        <div className="absolute inset-0 opacity-20" style={{
          background: `linear-gradient(135deg, ${SKY}80 0%, transparent 55%)`,
          borderRadius: "22px",
        }} />

        {/* Accent glow on hover */}
        {hovered && (
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `radial-gradient(ellipse 90% 55% at 50% 105%, ${meta.accent}40, transparent 68%)`,
            mixBlendMode: "screen",
            borderRadius: "22px",
          }} />
        )}

        {/* Top accent line on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
          background: `linear-gradient(to right, transparent, ${meta.accent}DD, transparent)`,
          borderRadius: "22px 22px 0 0",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }} />

        {/* 3-D raised shimmer edge (translateZ illusion) */}
        <div className="absolute inset-0 pointer-events-none" style={{
          borderRadius: "22px",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(0,0,0,0.15)",
        }} />

        {/* Ghost music note */}
        <span className="absolute top-3 right-4 select-none pointer-events-none" style={{
          fontFamily: PLAYFAIR,
          fontSize: "2.2rem",
          color: IVORY,
          opacity: hovered ? 0.38 : 0.18,
          transition: "opacity 0.3s",
        }}>
          {meta.note}
        </span>

        {/* Category chip on hover */}
        <div className="absolute top-4 left-4" style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.3s, transform 0.3s",
        }}>
          <span className="px-3 py-1 rounded-full font-mono text-[9px] tracking-widest" style={{
            background: meta.chip,
            border: `1px solid ${meta.chipBorder}`,
            color: IVORY,
            backdropFilter: "blur(12px)",
          }}>
            {inst.category}
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-mono text-[9px] tracking-[0.30em] mb-1.5 uppercase" style={{ color: `${meta.accent}DD` }}>
            {inst.category}
          </p>
          <h3 style={{
            fontFamily: PLAYFAIR,
            fontSize: "clamp(1.6rem,2.8vw,2.2rem)",
            color: IVORY,
            lineHeight: 1,
            fontWeight: 700,
          }}>
            {inst.name}
          </h3>
          <div className="mt-3 flex items-center gap-2 font-semibold text-sm" style={{
            color: meta.accent,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.3s, transform 0.3s",
          }}>
            Learn More <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Left accent bar */}
        <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full" style={{
          background: meta.accent,
          boxShadow: `0 0 12px ${meta.accent}90`,
          opacity: hovered ? 1 : 0.28,
          transition: "opacity 0.3s",
        }} />
      </motion.div>
    </motion.a>
  );
}

/* ── Main section ──────────────────────────────────────────────────────── */
export function Instruments() {
  // Sort instruments into the exact order requested
  const ordered = INSTRUMENT_ORDER
    .map(name => INSTRUMENTS.find(i => i.name === name))
    .filter(Boolean) as typeof INSTRUMENTS;

  // Fallback: if names don't match exactly, just use original order
  const displayList = ordered.length === 8 ? ordered : INSTRUMENTS.slice(0, 8);

  const row1 = displayList.slice(0, 3); // Tabla, Piano, Guitar
  const row2 = displayList.slice(3, 6); // Dholak, Harmonium, Violin
  const row3 = displayList.slice(6, 8); // Vocal, Flute

  return (
    <section
      id="instruments"
      className="relative overflow-hidden py-28"
      style={{ background: `linear-gradient(160deg, #B8E3F5 0%, ${SKY} 40%, #8ECCE8 100%)` }}
    >
      {/* ── Ambient background layer ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

        {/* Large radial glows */}
        <div className="absolute" style={{
          width: "900px", height: "900px", top: "-300px", right: "-250px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.10) 50%, transparent 70%)",
        }} />
        <div className="absolute" style={{
          width: "600px", height: "600px", bottom: "-180px", left: "-150px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(4,44,83,0.20) 0%, rgba(4,44,83,0.06) 55%, transparent 75%)",
        }} />
        <div className="absolute" style={{
          width: "420px", height: "520px", top: "22%", left: "36%", borderRadius: "50% 60% 40% 55%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.24) 0%, transparent 68%)",
          transform: "rotate(-18deg)",
        }} />
        <div className="absolute" style={{
          width: "260px", height: "260px", top: "60%", right: "18%", borderRadius: "50%",
          background: `radial-gradient(ellipse, ${TURMERIC}22 0%, transparent 70%)`,
        }} />
        <div className="absolute" style={{
          width: "190px", height: "190px", top: "15%", left: "18%", borderRadius: "50%",
          background: `radial-gradient(ellipse, ${SAFFRON}1A 0%, transparent 70%)`,
        }} />

        {/* Staff lines */}
        {[...Array(7)].map((_, i) => (
          <div key={i} className="absolute w-full" style={{
            top: `${10 + i * 13}%`, height: "1px",
            background: "linear-gradient(to right, transparent 0%, rgba(4,44,83,0.09) 15%, rgba(4,44,83,0.13) 50%, rgba(4,44,83,0.09) 85%, transparent 100%)",
          }} />
        ))}

        {/* Scattered music notation ghosts */}
        {BG_NOTES.map((note, i) => (
          <span key={i} className="absolute select-none" style={{
            fontFamily: PLAYFAIR,
            fontSize: `${2.8 + (i % 5) * 1.8}rem`,
            left: `${(i * 9 + 2) % 94}%`,
            top: `${(i * 13 + 4) % 88}%`,
            color: i % 3 === 0
              ? "rgba(4,44,83,0.08)"
              : i % 3 === 1
                ? "rgba(255,255,255,0.26)"
                : "rgba(4,44,83,0.05)",
            transform: `rotate(${-20 + (i % 7) * 7}deg)`,
            userSelect: "none",
            fontWeight: i % 2 === 0 ? "700" : "400",
          }}>{note}</span>
        ))}

        {/* Diagonal accent lines */}
        <div className="absolute" style={{
          width: "160%", height: "1px", top: "33%", left: "-30%",
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.28) 30%, rgba(255,255,255,0.28) 70%, transparent)",
          transform: "rotate(-4deg)",
        }} />
        <div className="absolute" style={{
          width: "160%", height: "1px", top: "66%", left: "-30%",
          background: "linear-gradient(to right, transparent, rgba(4,44,83,0.09) 30%, rgba(4,44,83,0.09) 70%, transparent)",
          transform: "rotate(-4deg)",
        }} />

        {/* Corner blob SVGs */}
        <svg className="absolute top-0 left-0 w-64 h-64 opacity-[0.07]" viewBox="0 0 200 200">
          <circle cx="10" cy="10" r="80" fill={DEEP} />
          <circle cx="60" cy="5" r="30" fill={DEEP} />
          <circle cx="5" cy="70" r="25" fill={DEEP} />
        </svg>
        <svg className="absolute bottom-0 right-0 w-72 h-72 opacity-[0.07]" viewBox="0 0 200 200">
          <circle cx="190" cy="190" r="90" fill={DEEP} />
          <circle cx="145" cy="195" r="35" fill={DEEP} />
          <circle cx="195" cy="140" r="28" fill={DEEP} />
        </svg>

        {/* Floating dots */}
        {[...Array(18)].map((_, i) => (
          <div key={i} className="absolute rounded-full" style={{
            width: `${3 + (i % 4)}px`, height: `${3 + (i % 4)}px`,
            left: `${(i * 19 + 7) % 92}%`, top: `${(i * 23 + 11) % 88}%`,
            background: i % 2 === 0 ? "rgba(4,44,83,0.11)" : "rgba(255,255,255,0.32)",
          }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Section header ──────────────────────────────────────────── */}
        <div className="mb-20">

          {/* Genre chips */}
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            <div className="h-px flex-shrink-0 w-12" style={{ background: "rgba(4,44,83,0.28)" }} />
            {[
              { label: "HINDUSTANI", color: SAFFRON },
              { label: "CARNATIC", color: TEAL },
              { label: "WESTERN", color: CRIMSON },
            ].map(({ label, color }) => (
              <span
                key={label}
                className="px-4 py-1.5 rounded-full font-mono text-[10px] tracking-widest"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(255,255,255,0.70)",
                  color: INK,
                  backdropFilter: "blur(10px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 3px rgba(4,44,83,0.10)",
                }}
              >
                <span style={{ color }}>{label}</span>
              </span>
            ))}
          </div>

          {/* Eyebrow */}
          {/* Eyebrow */}
          <p
            className="mb-4 tracking-[0.28em] uppercase"
            style={{ fontFamily: PLAYFAIR, fontSize: "0.7rem", color: SAFFRON, fontWeight: 700, letterSpacing: "0.28em" }}
          >
            Our Story
          </p>

          {/* Headline — three-line typographic stack */}
          <h2 style={{ fontFamily: PLAYFAIR, lineHeight: 1, fontWeight: 800, margin: 0 }}>
            {/* Ghost italic — sets the scene */}
            <span style={{
              display: "block",
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              fontStyle: "italic",
              color: "rgba(4,44,83,0.28)",
              letterSpacing: "-0.01em",
              marginBottom: "0.06em",
            }}>
              Discover
            </span>

            {/* Medium anchor — bridges ghost to giant */}
            <span style={{
              display: "block",
              fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
              color: DEEP,
              letterSpacing: "-0.025em",
              lineHeight: 0.95,
              marginBottom: "-0.08em",
            }}>
              Your Perfect
            </span>

            {/* Giant gradient word — the hero */}
            <span style={{
              display: "block",
              fontSize: "clamp(5.5rem, 11.5vw, 10rem)",
              lineHeight: 0.82,
              fontStyle: "italic",
              letterSpacing: "-0.03em",
              background: `linear-gradient(130deg, ${SAFFRON} 0%, ${TURMERIC} 60%, rgba(4,44,83,0.7) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px rgba(4,44,83,0.08)",
            }}>
              Instrument
            </span>
          </h2>

          {/* Tapered rule */}
          <div className="mt-6 flex gap-1.5 items-center">
            {[SAFFRON, TEAL, CRIMSON, LAVENDER, TURMERIC].map((c, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  height: i === 0 ? "3px" : i === 1 ? "2.5px" : "2px",
                  width: i === 0 ? "52px" : i === 1 ? "32px" : i === 2 ? "18px" : i === 3 ? "10px" : "6px",
                  background: c,
                  opacity: 1 - i * 0.14,
                }}
              />
            ))}
          </div>

          {/* Body */}
          <p
            className="mt-6 max-w-md leading-relaxed"
            style={{
              fontFamily: PLAYFAIR,
              fontStyle: "italic",
              fontSize: "1.05rem",
              color: "rgba(4,44,83,0.52)",
            }}
          >
            From the ancient rhythms of the tabla to the modern strings of the guitar — every sound has a home here.
          </p>
        </div>

        {/* ── Instrument grid: 3 – 3 – 2 pyramid ─────────────────────── */}
        <div className="flex flex-col gap-5">

          {/* Row 1 — Tabla · Piano · Guitar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {row1.map((inst, i) => (
              <TiltCard key={inst.name} inst={inst} index={i} />
            ))}
          </div>

          {/* Row 2 — Dholak · Harmonium · Violin */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {row2.map((inst, i) => (
              <TiltCard key={inst.name} inst={inst} index={i + 3} />
            ))}
          </div>

          {/* Row 3 — Vocal · Flute  (centred pair, wider cards) */}
          <div className="flex justify-center gap-5">
            {row3.map((inst, i) => (
              <div key={inst.name} className="w-full sm:w-[calc(33.333%-10px)]" style={{ maxWidth: "380px" }}>
                <TiltCard inst={inst} index={i + 6} tall />
              </div>
            ))}
          </div>

        </div>

        {/* ── Decorative row-separator glyphs ────────────────────────── */}
        <div className="flex justify-center gap-6 my-2 opacity-30 select-none" aria-hidden="true">
          {["♩", "𝄞", "♪", "𝄞", "♩"].map((n, i) => (
            <span key={i} style={{ fontFamily: PLAYFAIR, fontSize: "1.4rem", color: DEEP }}>{n}</span>
          ))}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="flex items-center gap-4 justify-center mb-9">
            <div className="flex-1 max-w-32 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(4,44,83,0.22))" }} />
            <div className="flex gap-2 items-center">
              {[SAFFRON, TEAL, CRIMSON].map((c, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c, opacity: 0.7 }} />
              ))}
            </div>
            <div className="flex-1 max-w-32 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(4,44,83,0.22))" }} />
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-300"
            style={{
              fontFamily: PLAYFAIR,
              background: "rgba(255,255,255,0.55)",
              border: "1.5px solid rgba(255,255,255,0.80)",
              color: DEEP,
              backdropFilter: "blur(16px)",
              boxShadow: "0 4px 24px rgba(4,44,83,0.14), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.78)";
              e.currentTarget.style.boxShadow = "0 8px 40px rgba(4,44,83,0.22), inset 0 1px 0 rgba(255,255,255,0.9)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.55)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(4,44,83,0.14), inset 0 1px 0 rgba(255,255,255,0.9)";
            }}
          >
            Explore All Instruments
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}