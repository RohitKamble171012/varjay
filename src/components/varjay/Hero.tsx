import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ArrowRight, MapPin, Phone, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import tablaAudio from "@/assets/audio/tabla.wav";

import guruTabla    from "@/assets/hero/guru-arvind-tabla.jpg";
import guruPortrait from "@/assets/hero/guru-arvind-portrait.jpg";
<<<<<<< HEAD
import vocalImg     from "@/assets/hero/vocal.jpg";
=======
import tablaClose   from "@/assets/hero/tabla-closeup.jpg";
import harmoniumImg from "@/assets/hero/harmonium.jpg";
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
import fluteImg     from "@/assets/hero/bansuri-flute.jpg";
import guitarImg    from "@/assets/hero/guitar.jpg";

const INK      = "#0A0F1E";
const SAFFRON  = "#F4813A";
const TURMERIC = "#E8B84B";
const INDIGO   = "#3D5AF1";
const TEAL     = "#17C8A3";
const SKY      = "#5BB8E8";
const CRIMSON  = "#E8365D";
const IVORY    = "#F9F3E8";
const LAVENDER = "#B9A8FF";
<<<<<<< HEAD
const WHITE    = "#FFFFFF";


const slides = [
  { src: guruTabla,    label: "Guru Arvind",  tag: "TABLA VISHARAD",       accent: SAFFRON,  glow: SAFFRON,  position: "center 20%" },
  { src: vocalImg,     label: "Vocal",        tag: "RAAG BILAWAL",         accent: TEAL,    glow: TEAL,    position: "center 30%" },
=======

const slides = [
  { src: guruTabla,    label: "Guru Arvind",  tag: "TABLA VISHARAD",       accent: SAFFRON,  glow: SAFFRON,  position: "center 20%" },
  { src: tablaClose,   label: "Tabla",        tag: "TEEN TAAL · EKTAAL",   accent: TURMERIC, glow: TURMERIC, position: "center center" },
  { src: harmoniumImg, label: "Harmonium",    tag: "HINDUSTANI CLASSICAL",  accent: TEAL,     glow: TEAL,     position: "center 40%" },
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
  { src: fluteImg,     label: "Bansuri",      tag: "RAAG YAMAN",            accent: SKY,      glow: INDIGO,   position: "center center" },
  { src: guitarImg,    label: "Guitar",       tag: "WESTERN & BOLLYWOOD",   accent: CRIMSON,  glow: CRIMSON,  position: "center 30%" },
  { src: guruPortrait, label: "Guru Arvind",  tag: "FOUNDER · VARJAY",      accent: LAVENDER, glow: INDIGO,   position: "center 15%" },
];

const notes         = ["♩","♪","♫","♬","𝄞","𝄢"];

export function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
<<<<<<< HEAD
  const sectionRef = useRef<HTMLElement | null>(null);
=======
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
  const [playing, setPlaying]   = useState(false);
  const [idx, setIdx]           = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
<<<<<<< HEAD
    const section = sectionRef.current;
    const audio = audioRef.current;
    if (!section || !audio) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          audio.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          audio.pause();
          audio.currentTime = 0;
          setPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);
    };
  }, []);

  useEffect(() => {
=======
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
    setProgress(0);
    const INTERVAL = 5000;
    const TICK     = 50;
    let elapsed    = 0;
    const ticker   = setInterval(() => {
      elapsed += TICK;
      setProgress((elapsed / INTERVAL) * 100);
      if (elapsed >= INTERVAL) {
        elapsed = 0;
        setIdx((i) => (i + 1) % slides.length);
      }
    }, TICK);
    return () => clearInterval(ticker);
  }, [idx]);

  const toggleAudio = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => {});
    else { a.pause(); setPlaying(false); }
  };

  const current = slides[idx];

  return (
<<<<<<< HEAD
    <section ref={sectionRef} className="relative overflow-hidden" style={{ background: INK, minHeight: "100svh" }}>
=======
    <section className="relative overflow-hidden" style={{ background: INK, minHeight: "100svh" }}>
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9

      {/* Painterly blobs + staff lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute" style={{ width:"70vw",height:"70vh",top:"-20%",left:"-15%", background:`radial-gradient(ellipse, ${INDIGO}18 0%, transparent 70%)`, transform:"rotate(-20deg)" }} />
        <div className="absolute" style={{ width:"50vw",height:"60vh",bottom:"-10%",left:"5%", background:`radial-gradient(ellipse, ${SAFFRON}12 0%, transparent 65%)` }} />
        {[...Array(5)].map((_,i) => (
          <div key={i} className="absolute w-full" style={{ top:`${28+i*4}%`, height:"1px", background:`linear-gradient(to right, transparent, ${IVORY}06 20%, ${IVORY}06 80%, transparent)` }} />
        ))}
      </div>

      {/* RIGHT — Image panel (desktop) */}
      <div className="absolute inset-y-0 right-0 hidden md:block z-10" style={{ width:"58%", clipPath:"polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
        <AnimatePresence mode="sync">
          <motion.div key={idx} initial={{ opacity:0, scale:1.05 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }} transition={{ duration:2, ease:[0.25,0.46,0.45,0.94] }} className="absolute inset-0">
            <img src={current.src} alt={current.label} className="w-full h-full object-cover" style={{ objectPosition:current.position }} loading="eager" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-y-0 left-0 w-52 pointer-events-none" style={{ background:`linear-gradient(to right, ${INK}, transparent)` }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background:`linear-gradient(to bottom, ${INK}88 0%, transparent 20%, transparent 60%, ${INK}EE 100%)` }} />
        <AnimatePresence mode="sync">
          <motion.div key={`glow-${idx}`} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:1.6 }} className="absolute inset-0 pointer-events-none" style={{ background:`radial-gradient(ellipse 65% 55% at 65% 45%, ${current.glow}30, transparent 70%)` }} />
        </AnimatePresence>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background:`linear-gradient(135deg, ${INDIGO}55 0%, transparent 50%, ${SAFFRON}33 100%)`, mixBlendMode:"color" }} />
        <div className="absolute bottom-24 right-8 z-20 text-right">
          <AnimatePresence mode="wait">
            <motion.div key={`tag-${idx}`} initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }} transition={{ duration:0.5 }}>
              <p className="font-mono text-[9px] tracking-[0.3em] text-white/35 mb-1.5 uppercase">{current.tag}</p>
              <p className="font-serif italic text-3xl font-light tracking-tight" style={{ color:current.accent, textShadow:`0 0 40px ${current.accent}60` }}>{current.label}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile image */}
      <div className="absolute inset-0 md:hidden z-0">
        <AnimatePresence mode="sync">
          <motion.div key={`mob-${idx}`} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:1.6 }} className="absolute inset-0">
            <img src={current.src} alt={current.label} className="w-full h-full object-cover object-top" loading="eager" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0" style={{ background:`linear-gradient(to right, ${INK}F5, ${INK}CC 55%, ${INK}88)` }} />
        <div className="absolute inset-0" style={{ background:`linear-gradient(to bottom, ${INK}66, transparent 30%, transparent 58%, ${INK} 100%)` }} />
      </div>

      {/* Floating music notes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {notes.map((note, i) => {
          const c = [SAFFRON,TEAL,TURMERIC,INDIGO,CRIMSON,SKY][i];
          return (
            <motion.span key={i} className="absolute select-none"
              style={{ fontFamily:"serif", fontSize:`${1.2+(i%3)*0.8}rem`, left:`${5+i*7}%`, top:`${15+(i%5)*12}%`, color:`${c}22` }}
              animate={{ y:[-20,-60,-20], opacity:[0.08,0.22,0.08], rotate:[-8,8,-8] }}
              transition={{ duration:5+i*0.5, repeat:Infinity, ease:"easeInOut", delay:i*0.5 }}>
              {note}
            </motion.span>
          );
        })}
      </div>

      {/* Vertical slide indicators */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-3 items-center">
        {slides.map((s, i) => (
          <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i+1}`} className="group flex items-center gap-2">
            <span className="text-[9px] font-mono text-white/20 group-hover:text-white/45 transition-colors">{String(i+1).padStart(2,"0")}</span>
            <span className="block rounded-full transition-all duration-500" style={{ width:"3px", height:i===idx?"36px":"10px", background:i===idx?current.accent:"rgba(255,255,255,0.18)", boxShadow:i===idx?`0 0 10px ${current.accent}80`:"none" }} />
          </button>
        ))}
      </div>

      {/* LEFT CONTENT PANEL */}
<<<<<<< HEAD
      <div className="relative z-20 flex flex-col justify-center min-h-svh pt-20 md:pt-24 pb-16"
        style={{ maxWidth:"52%", padding:"5rem max(3rem,5vw) 4rem max(3rem,5vw)" }}>
=======
      <div className="relative z-20 flex flex-col justify-center min-h-svh pb-16"
        style={{ maxWidth:"52%", padding:"4rem max(3rem,5vw) 4rem max(3rem,5vw)" }}>
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9

        <motion.div initial={{ opacity:0, y:-12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
          className="inline-flex self-start items-center gap-2.5 px-4 py-2 rounded-full font-mono text-[10px] mb-10 tracking-widest"
          style={{ border:`1px solid ${SAFFRON}45`, background:`${SAFFRON}12`, color:SAFFRON }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background:SAFFRON }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background:SAFFRON }} />
          </span>
          EST. 2021 · SANPADA · NAVI MUMBAI
        </motion.div>

        <div className="max-w-xl">
          <h1 className="font-serif leading-[0.95] tracking-tight" style={{ fontSize:"clamp(3rem,6.5vw,7rem)" }}>
            {[
              { text:"Turn Your",   color:IVORY,   italic:false },
              { text:"Talent Into", color:SAFFRON, italic:true  },
              { text:"A Musical",   color:IVORY,   italic:false },
              { text:"Milestone.",  color:TEAL,    italic:true  },
            ].map((line, i) => (
              <motion.span key={line.text}
                initial={{ opacity:0, x:-80, skewX:-4 }}
                animate={{ opacity:1, x:0, skewX:0 }}
                transition={{ delay:0.2+i*0.15, duration:0.9, ease:[0.22,1,0.36,1] }}
                className={`block${line.italic?" italic":""}`}
                style={{ color:line.color, textShadow:line.italic?`0 0 60px ${line.color}40`:"none" }}>
                {line.text}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.85 }} className="mt-10 max-w-lg">
          <div className="w-16 h-[2px] mb-5 rounded-full" style={{ background:`linear-gradient(to right, ${SAFFRON}, ${TEAL})` }} />
          <p className="text-xl leading-relaxed" style={{ fontFamily:"serif", color:TURMERIC }}>
            संगीतं परमानन्दं संगीतं परमं दयालुम्।
          </p>
<<<<<<< HEAD
          <p className="text-sm mt-2 italic font-bold tracking-wide" style={{ color:WHITE }}>
=======
          <p className="text-sm mt-2 italic font-light tracking-wide" style={{ color:`${IVORY}55` }}>
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
            Music is supreme bliss · Music is the most compassionate.
          </p>
        </motion.div>

        <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.0 }} className="mt-11 flex flex-wrap gap-4">
          <a href="#instruments"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
            style={{ background:`linear-gradient(135deg, ${SAFFRON}, ${TURMERIC})`, color:INK, boxShadow:`0 8px 36px ${SAFFRON}45` }}
            onMouseEnter={e=>(e.currentTarget.style.boxShadow=`0 12px 48px ${SAFFRON}70`)}
            onMouseLeave={e=>(e.currentTarget.style.boxShadow=`0 8px 36px ${SAFFRON}45`)}>
            Explore Instruments
            <span className="w-6 h-6 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform bg-black/15">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
          <a href="#youtube"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
            style={{ border:`1.5px solid ${TEAL}55`, color:TEAL }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor=TEAL; e.currentTarget.style.background=`${TEAL}14`; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor=`${TEAL}55`; e.currentTarget.style.background="transparent"; }}>
            <Play className="w-3.5 h-3.5 fill-current" />
            Watch Us Play
          </a>
        </motion.div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.15 }} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
<<<<<<< HEAD
          <span className="font-mono text-xs" style={{ color:TURMERIC }}>
            <span className="font-bold">★ 5.0</span>&nbsp; GOOGLE REVIEWS
=======
          <span className="font-mono text-xs" style={{ color:`${IVORY}55` }}>
            <span style={{ color:TURMERIC }} className="font-bold">★ 4.9</span>&nbsp; 35+ students
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <a href="#contact" className="inline-flex items-center gap-1.5 font-mono text-xs transition-colors" style={{ color:`${IVORY}40` }}
            onMouseEnter={e=>(e.currentTarget.style.color=SKY)} onMouseLeave={e=>(e.currentTarget.style.color=`${IVORY}40`)}>
            <MapPin className="w-3 h-3" style={{ color:SKY }} /> Sanpada, Navi Mumbai
          </a>
          <a href="tel:+917770003036" className="inline-flex items-center gap-1.5 font-mono text-xs transition-colors" style={{ color:`${IVORY}40` }}
            onMouseEnter={e=>(e.currentTarget.style.color=SKY)} onMouseLeave={e=>(e.currentTarget.style.color=`${IVORY}40`)}>
<<<<<<< HEAD
            <Phone className="w-3 h-3" style={{ color:SKY }} /> +91 777 000 3037
=======
            <Phone className="w-3 h-3" style={{ color:SKY }} /> +91 777 000 3036
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
          </a>
        </motion.div>

        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.3 }} className="mt-12 self-start">
          <div className="relative rounded-2xl p-3.5 pr-6 flex items-center gap-4 max-w-[300px] overflow-hidden"
            style={{ background:"rgba(255,255,255,0.05)", backdropFilter:"blur(24px)", border:`1px solid ${TURMERIC}28` }}>
            <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background:`linear-gradient(135deg, ${SAFFRON}10, ${INDIGO}0A)` }} />
            <button onClick={toggleAudio} aria-label={playing?"Pause tabla":"Play tabla"}
              className="relative w-12 h-12 rounded-xl flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-transform"
              style={{ background:`linear-gradient(135deg, ${SAFFRON}, ${TURMERIC})`, color:INK, boxShadow:`0 4px 20px ${SAFFRON}55` }}>
              {playing ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>
            <div className="relative">
              <p className="font-mono text-[9px] tracking-[0.2em] mb-0.5" style={{ color:`${IVORY}35` }}>{playing?"NOW PLAYING":"TAP TO LISTEN"}</p>
              <p className="text-sm font-semibold" style={{ color:IVORY }}>Teen Taal · Tabla</p>
              <div className="flex items-end gap-[2px] mt-1.5 h-4">
                {[3,8,5,12,7,4,10,6,9,5].map((h, i) => (
                  <motion.span key={i} className="w-[2px] rounded-full"
                    style={{ background:playing?SAFFRON:`${IVORY}25` }}
                    animate={playing?{ height:[`${h}px`,`${16-h+4}px`,`${h}px`] }:{ height:`${Math.floor(h/2)+2}px` }}
                    transition={{ duration:0.6+i*0.04, repeat:playing?Infinity:0, ease:"easeInOut" }} />
                ))}
              </div>
            </div>
            <audio ref={audioRef} src={tablaAudio} loop onEnded={()=>setPlaying(false)} onPause={()=>setPlaying(false)} />
          </div>
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] z-30" style={{ background:"rgba(255,255,255,0.06)" }}>
        <motion.div className="h-full" style={{ width:`${progress}%`, background:`linear-gradient(to right, ${SAFFRON}, ${TEAL})` }} />
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1">
        <span className="font-mono text-[9px] tracking-[0.3em]" style={{ color:`${IVORY}22` }}>SCROLL</span>
        <motion.div animate={{ y:[0,6,0] }} transition={{ duration:1.5, repeat:Infinity, ease:"easeInOut" }}>
          <ChevronDown className="w-4 h-4" style={{ color:`${IVORY}22` }} />
        </motion.div>
      </motion.div>

    </section>
  );
}
