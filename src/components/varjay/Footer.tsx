import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { INSTRUMENTS } from "./data";
import { motion } from "framer-motion";

const SLUG: Record<string, string> = {
  Tabla: "/tabla",
  Guitar: "/guitar",
  "Hindustani Classical": "/hindustani-classical",
};

// Framer Motion Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export function Footer() {
  return (
    <footer className="relative bg-[#0A0F1E] text-[#F9F3E8] pt-24 pb-8 border-t border-white/10 overflow-hidden" id="footer">
      {/* ── BACKGROUND ANIMATED GLOWS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[50%] rounded-full bg-[#F4813A]/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[40%] rounded-full bg-[#5BB8E8]/5 blur-[100px] animate-pulse delay-1000" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <div className="grid md:grid-cols-12 gap-12 pb-16">

          {/* ── LOGO & TAGLINE ── */}
          <motion.div variants={itemVariants} className="md:col-span-4 pr-4">
            <Link to="/">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://varjaymusic.com/wp-content/uploads/2024/05/logo.png"
                alt="Varjay"
                // Logo size increased heavily here
                className="h-20 md:h-24 bg-white rounded-2xl p-3 inline-block shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(244,129,58,0.2)] transition-shadow duration-500"
              />
            </Link>
            <p className="mt-8 font-serif italic text-[#F4813A] text-2xl leading-relaxed tracking-wide">
              Where talent meets <br />
              <span className="relative inline-block mt-1 text-[#F9F3E8]">
                tradition.
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#F4813A] to-transparent rounded-full" />
              </span>
            </p>
          </motion.div>

          {/* ── INSTRUMENTS LINKS ── */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <h4 className="font-mono text-sm text-[#F4813A] tracking-widest mb-6 uppercase flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#F4813A]" /> Instruments
            </h4>
            <ul className="space-y-3 text-[#F9F3E8]/70">
              {INSTRUMENTS.map((i) => {
                const destination = SLUG[i.name] || "/courses";
                return (
                  <li key={i.name}>
                    <Link
                      to={destination}
                      className="group flex items-center gap-3 text-[15px] hover:text-[#F4813A] transition-colors"
                    >
                      {/* Animated sliding dash on hover */}
                      <span className="w-0 h-[1px] bg-[#F4813A] transition-all duration-300 ease-out group-hover:w-3" />
                      <span className="transform transition-transform duration-300 ease-out group-hover:translate-x-1">
                        {i.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* ── QUICK LINKS ── */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h4 className="font-mono text-sm text-[#F4813A] tracking-widest mb-6 uppercase flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#F4813A]" /> Links
            </h4>
            <ul className="space-y-3 text-[#F9F3E8]/70">
              {[
                { label: "About Us", to: "/about" },
                { label: "Courses", to: "/courses" },
                { label: "Gallery", to: "/gallery" },
                { label: "FAQs", to: "/faqs" },
                { label: "Register", to: "/register" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-3 text-[15px] hover:text-[#F4813A] transition-colors"
                  >
                    <span className="w-0 h-[1px] bg-[#F4813A] transition-all duration-300 ease-out group-hover:w-3" />
                    <span className="transform transition-transform duration-300 ease-out group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── CONTACT INFO ── */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <h4 className="font-mono text-sm text-[#F4813A] tracking-widest mb-6 uppercase flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#F4813A]" /> Contact
            </h4>
            <ul className="space-y-4 text-[15px] text-[#F9F3E8]/70">
              <li className="flex gap-3 items-start group">
                <MapPin className="w-5 h-5 mt-0.5 text-[#F4813A] shrink-0 group-hover:-translate-y-1 transition-transform" />
                <span className="group-hover:text-white transition-colors">After plot 78 to 81 and before sector 1, add Near Narayan Dairy, please make this change wherever address is there in the website</span>
              </li>
              <li className="flex gap-3 items-start group">
                <Phone className="w-5 h-5 mt-0.5 text-[#F4813A] shrink-0 group-hover:rotate-12 transition-transform" />
                <a href="tel:+917770003036" className="hover:text-white transition-colors">+91 777 000 3036</a>
              </li>
              <li className="flex gap-3 items-start group">
                <Mail className="w-5 h-5 mt-0.5 text-[#F4813A] shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@varjaymusic.com" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#F4813A] after:transition-all hover:after:w-full">
                  info@varjaymusic.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[
                { Icon: YoutubeIcon, href: "https://www.youtube.com/channel/UCxrYgHmwDxVIpVjFvVadKYA" },
                { Icon: FacebookIcon, href: "https://www.facebook.com/p/Varjay-Music-Academy-100077740792261/" },
                { Icon: InstagramIcon, href: "https://www.instagram.com/varjay.music.academy/" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-[#F4813A] hover:border-[#F4813A] text-white hover:text-[#0A0F1E] flex items-center justify-center transition-colors shadow-lg"
                >
                  <social.Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── COPYRIGHT ── */}
        <motion.div
          variants={itemVariants}
          className="relative border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center font-mono text-[13px] text-[#F9F3E8]/40"
        >
          <p>© {new Date().getFullYear()} Varjay Music Academy. All rights reserved.</p>
          <p>Made with ❤️ in Sanpada</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}