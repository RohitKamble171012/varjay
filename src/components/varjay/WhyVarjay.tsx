import { motion } from "framer-motion";
<<<<<<< HEAD
import { BookOpen, Users, CheckCircle2} from "lucide-react";

function OnlineIcon({ className = "w-7 h-7 text-[#5BB8E8]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}
=======
import { BookOpen, Users, CheckCircle2, Mic2 } from "lucide-react";
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9

const items = [
  {
    Icon: BookOpen,
    title: "World Class Curriculum",
<<<<<<< HEAD
    desc: "Structured levels: Beginner → Intermediate → Advanced → Exam prep.Certified by Gandharva/Trinity.",
  },
  {
    Icon: Users,
    title: "Maximum 5–7 Offline Students Per Batch",
    desc: "Every student is part of Varjay family, each is known by name not by seat number.",
  },
  {
    Icon: OnlineIcon,
    title: "Online Classes",
    desc: "live one to one sessions with our expert teachers",
=======
    desc: "Structured levels: Beginner → Intermediate → Advanced → Exam prep. Certified by ABGMV.",
  },
  {
    Icon: Users,
    title: "Maximum 5–7 Per Batch",
    desc: "Not a factory. A family. Every student is known by name, not by seat number.",
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
  },
  {
    Icon: CheckCircle2,
    title: "No Admission Fee",
<<<<<<< HEAD
    desc: "Zero registration charges. Zero hidden costs. Just monthly fee starting at : ₹1,500.",
=======
    desc: "Zero registration charges. Zero hidden costs. Just one monthly fee: ₹1,500.",
  },
  {
    Icon: Mic2,
    title: "Perform on Stage",
    desc: "Every student gets to perform at recitals. Because music is meant to be heard.",
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
  },
];

export function WhyVarjay() {
  return (
    /*
      Dark navy panel — the "20% dark" piece of the 80/20 split.
      Uses the logo's deep background colour with sky-blue accents.
    */
    <section className="bg-[#0B1F3A] text-white py-24 relative overflow-hidden">
      {/* Decorative background rings */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-[#5BB8E8]/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full border border-[#5BB8E8]/8"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs text-[#5BB8E8]/60 tracking-widest text-center mb-4 uppercase">
          Why Choose Us
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-center font-semibold mb-16 text-white">
<<<<<<< HEAD
          Why 300+ students chose Varjay
=======
          Why 150+ students chose Varjay
>>>>>>> cd17ad2ae7ed554cbec92fe20594040b40d4bbf9
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-[#5BB8E8]/15">
          {items.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="px-8 py-8 lg:py-0 group"
            >
              {/* Icon in a blue circle */}
              <div className="w-14 h-14 rounded-2xl bg-[#5BB8E8]/10 border border-[#5BB8E8]/20 flex items-center justify-center mb-6 group-hover:bg-[#5BB8E8]/20 transition-colors">
                <Icon className="w-7 h-7 text-[#5BB8E8]" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-white">
                {title}
              </h3>
              <p className="text-[#A8D8F0]/70 leading-relaxed text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
