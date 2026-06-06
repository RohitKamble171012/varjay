import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INSTRUMENTS } from "./data";

const SKY      = "#A8D8F0";
const DEEP     = "#042C53";
const INK      = "#0C2340";
const IVORY    = "#F9F7F2";
const SAFFRON  = "#F4813A";
const TURMERIC = "#E8B84B";
const TEAL     = "#0E9E82";
const CRIMSON  = "#C42850";
const LAVENDER = "#5E4DD4";
const FOREST   = "#0E8A5A";

const CARD_PALETTE = [
  { accent: SAFFRON,  chip: "rgba(244,129,58,0.20)",  chipBorder: "rgba(244,129,58,0.50)" },
  { accent: TEAL,     chip: "rgba(14,158,130,0.20)",  chipBorder: "rgba(14,158,130,0.50)" },
  { accent: CRIMSON,  chip: "rgba(196,40,80,0.20)",   chipBorder: "rgba(196,40,80,0.50)"  },
  { accent: LAVENDER, chip: "rgba(94,77,212,0.20)",   chipBorder: "rgba(94,77,212,0.50)"  },
  { accent: TURMERIC, chip: "rgba(232,184,75,0.20)",  chipBorder: "rgba(232,184,75,0.50)" },
  { accent: FOREST,   chip: "rgba(14,138,90,0.20)",   chipBorder: "rgba(14,138,90,0.50)"  },
  { accent: SAFFRON,  chip: "rgba(244,129,58,0.20)",  chipBorder: "rgba(244,129,58,0.50)" },
  { accent: TEAL,     chip: "rgba(14,158,130,0.20)",  chipBorder: "rgba(14,158,130,0.50)" },
  { accent: CRIMSON,  chip: "rgba(196,40,80,0.20)",   chipBorder: "rgba(196,40,80,0.50)"  },
];

const BG_NOTES = ["♩","♪","♫","♬","𝄞","𝄢","𝄡","♭","♮","♯","𝄃","𝄄"];

const PLAYFAIR = "'Playfair Display', Georgia, serif";

export function Instruments() {
  return (
    <section
      id="instruments"
      className="relative overflow-hidden py-28"
      style={{ background: SKY }}
    >
      {/* ── Artistic background layer ────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

        <div className="absolute" style={{
          width: "900px", height: "900px", top: "-300px", right: "-250px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.10) 50%, transparent 70%)",
        }} />
        <div className="absolute" style={{
          width: "600px", height: "600px", bottom: "-180px", left: "-150px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(4,44,83,0.18) 0%, rgba(4,44,83,0.06) 55%, transparent 75%)",
        }} />
        <div className="absolute" style={{
          width: "400px", height: "500px", top: "20%", left: "35%", borderRadius: "50% 60% 40% 55%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.22) 0%, transparent 68%)",
          transform: "rotate(-18deg)",
        }} />
        <div className="absolute" style={{
          width: "250px", height: "250px", top: "60%", right: "18%", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(232,184,75,0.14) 0%, transparent 70%)",
        }} />
        <div className="absolute" style={{
          width: "180px", height: "180px", top: "15%", left: "20%", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(244,129,58,0.12) 0%, transparent 70%)",
        }} />

        {[...Array(7)].map((_, i) => (
          <div key={i} className="absolute w-full" style={{
            top: `${10 + i * 13}%`, height: "1px",
            background: "linear-gradient(to right, transparent 0%, rgba(4,44,83,0.10) 15%, rgba(4,44,83,0.14) 50%, rgba(4,44,83,0.10) 85%, transparent 100%)",
          }} />
        ))}

        {BG_NOTES.map((note, i) => (
          <span key={i} className="absolute select-none" style={{
            fontFamily: PLAYFAIR,
            fontSize: `${2.5 + (i % 5) * 1.6}rem`,
            left: `${(i * 9 + 2) % 94}%`,
            top: `${(i * 13 + 4) % 88}%`,
            color: i % 3 === 0 ? "rgba(4,44,83,0.09)" : i % 3 === 1 ? "rgba(255,255,255,0.28)" : "rgba(4,44,83,0.06)",
            transform: `rotate(${-20 + (i % 7) * 7}deg)`,
            userSelect: "none",
            fontWeight: i % 2 === 0 ? "700" : "400",
          }}>
            {note}
          </span>
        ))}

        <div className="absolute" style={{
          width: "160%", height: "1px", top: "33%", left: "-30%",
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.30) 30%, rgba(255,255,255,0.30) 70%, transparent)",
          transform: "rotate(-4deg)",
        }} />
        <div className="absolute" style={{
          width: "160%", height: "1px", top: "66%", left: "-30%",
          background: "linear-gradient(to right, transparent, rgba(4,44,83,0.10) 30%, rgba(4,44,83,0.10) 70%, transparent)",
          transform: "rotate(-4deg)",
        }} />

        <svg className="absolute top-0 left-0 w-64 h-64 opacity-[0.07]" viewBox="0 0 200 200">
          <circle cx="10" cy="10" r="80" fill={DEEP} />
          <circle cx="60" cy="5"  r="30" fill={DEEP} />
          <circle cx="5"  cy="70" r="25" fill={DEEP} />
        </svg>
        <svg className="absolute bottom-0 right-0 w-72 h-72 opacity-[0.07]" viewBox="0 0 200 200">
          <circle cx="190" cy="190" r="90" fill={DEEP} />
          <circle cx="145" cy="195" r="35" fill={DEEP} />
          <circle cx="195" cy="140" r="28" fill={DEEP} />
        </svg>

        {[...Array(18)].map((_, i) => (
          <div key={i} className="absolute rounded-full" style={{
            width: `${3 + (i % 4)}px`,
            height: `${3 + (i % 4)}px`,
            left: `${(i * 19 + 7) % 92}%`,
            top: `${(i * 23 + 11) % 88}%`,
            background: i % 2 === 0 ? "rgba(4,44,83,0.12)" : "rgba(255,255,255,0.35)",
          }} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="mb-20">

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-shrink-0 w-12" style={{ background: "rgba(4,44,83,0.30)" }} />
            {[
              { label: "CLASSICAL", color: SAFFRON },
              { label: "WESTERN",   color: TEAL    },
              { label: "FOLK",      color: CRIMSON },
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
          <p
            className="mb-3 tracking-[0.25em] uppercase"
            style={{
              fontFamily: PLAYFAIR,
              fontSize: "0.72rem",
              color: TEAL,
              fontWeight: 600,
            }}
          >
            Our Story
          </p>

          {/* Headline */}
          <h2
            className="leading-[0.92] tracking-tight"
            style={{
              fontFamily: PLAYFAIR,
              fontSize: "clamp(3.2rem,8vw,7rem)",
              fontWeight: 800,
              color: DEEP,
            }}
          >
            <span style={{
              display: "block",
              fontStyle: "italic",
              fontSize: "0.55em",
              letterSpacing: "0.04em",
              marginBottom: "0.1em",
              color: "rgba(4,44,83,0.45)",
              fontWeight: 700,
            }}>
              ♩ discover your
            </span>
            <span style={{ color: DEEP }}>Pick Your </span>
            <span style={{
              fontStyle: "italic",
              color: "rgba(4,44,83,0.72)",
              WebkitTextStroke: `1.5px ${DEEP}`,
            }}>
              Instrument
            </span>
          </h2>

          {/* Decorative multi-color rule */}
          <div className="mt-6 flex gap-1.5 items-center">
            {[SAFFRON, TEAL, CRIMSON, LAVENDER, TURMERIC].map((c, i) => (
              <div key={i} className="h-[3px] rounded-full" style={{
                width: i === 0 ? "48px" : i === 1 ? "32px" : i === 2 ? "16px" : i === 3 ? "10px" : "6px",
                background: c,
                opacity: 1 - i * 0.12,
              }} />
            ))}
          </div>

          <p
            className="mt-7 text-lg max-w-lg leading-relaxed"
            style={{
              fontFamily: PLAYFAIR,
              fontStyle: "italic",
              color: "rgba(4,44,83,0.65)",
            }}
          >
            From the ancient rhythms of the tabla to the modern strings of the guitar — every sound has a home here.
          </p>
        </div>

        {/* ── Masonry card grid ─────────────────────────────────────────── */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {INSTRUMENTS.map((inst, i) => {
            const pal = CARD_PALETTE[i % CARD_PALETTE.length];
            return (
              <motion.a
                key={inst.name}
                href="#contact"
                initial={{ opacity: 0, y: 52, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="group relative block mb-5 overflow-hidden break-inside-avoid cursor-pointer"
                style={{
                  height: inst.height,
                  borderRadius: "24px",
                  border: "1.5px solid rgba(255,255,255,0.55)",
                  boxShadow: "0 2px 16px rgba(4,44,83,0.12), inset 0 1px 0 rgba(255,255,255,0.70)",
                }}
              >
                <img
                  src={inst.img}
                  alt={inst.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                />

                <div className="absolute inset-0" style={{
                  background: "linear-gradient(to bottom, rgba(4,44,83,0.08) 0%, rgba(4,44,83,0.08) 30%, rgba(4,44,83,0.55) 62%, rgba(4,44,83,0.93) 85%, rgba(4,44,83,0.98) 100%)",
                }} />

                <div className="absolute inset-0 opacity-25" style={{
                  background: `linear-gradient(135deg, ${SKY}70 0%, transparent 55%)`,
                }} />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 85% 50% at 50% 100%, ${pal.accent}45, transparent 70%)` }}
                />

                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, transparent, ${pal.accent}CC, transparent)`, borderRadius: "24px 24px 0 0" }}
                />

                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <span
                    className="px-3 py-1 rounded-full font-mono text-[9px] tracking-widest"
                    style={{
                      background: pal.chip,
                      border: `1px solid ${pal.chipBorder}`,
                      color: IVORY,
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {inst.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p
                    className="font-mono text-[10px] tracking-[0.30em] mb-2 uppercase"
                    style={{ color: `${pal.accent}DD` }}
                  >
                    {inst.category}
                  </p>
                  <h3
                    className="font-semibold tracking-tight"
                    style={{
                      fontFamily: PLAYFAIR,
                      fontSize: "clamp(1.8rem,3vw,2.4rem)",
                      color: IVORY,
                      lineHeight: 1,
                    }}
                  >
                    {inst.name}
                  </h3>
                  <div
                    className="mt-3 flex items-center gap-2 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    style={{ color: pal.accent }}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div
                  className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full opacity-30 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: pal.accent, boxShadow: `0 0 10px ${pal.accent}80` }}
                />

                <span
                  className="absolute top-3 right-4 select-none pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity"
                  style={{ fontFamily: PLAYFAIR, fontSize: "2rem", color: IVORY }}
                >
                  {BG_NOTES[i % BG_NOTES.length]}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
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
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.78)";
              e.currentTarget.style.boxShadow = "0 8px 40px rgba(4,44,83,0.22), inset 0 1px 0 rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
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
