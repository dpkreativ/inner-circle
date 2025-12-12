"use client";
import { motion } from "framer-motion";
import { Download, Share2, Zap, Type, Check, X } from "lucide-react";
import Image from "next/image";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function LogoPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-orange/30 font-sans">
      {/* --- HERO SECTION: THE RADIANT ECOSYSTEM --- */}
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-orange/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-yellow/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end justify-between border-b border-white/10 pb-8 md:pb-12 mb-12 md:mb-20"
          >
            <div className="max-w-3xl">
              <span className="text-brand-orange font-mono text-[10px] md:text-sm tracking-widest uppercase mb-3 md:mb-4 block">
                Visual Identity
              </span>
              {/* RESPONSIVE TYPE: 4xl on mobile -> 8xl on desktop */}
              <h1 className="text-4xl md:text-8xl font-medium tracking-tighter leading-[0.95]">
                The Radiant <br />
                <span className="text-transparent bg-clip-text px-3 bg-gradient-to-r from-brand-orange to-brand-yellow">
                  Ecosystem.
                </span>
              </h1>
            </div>
            <p className="text-zinc-400 text-sm md:text-lg max-w-sm leading-relaxed pb-1 md:pb-2">
              A visual metaphor for a living, breathing ecosystem of human
              potential. Anchored in Connection, Network, and Growth.
            </p>
          </motion.div>

          {/* --- THE 3 PILLARS (Responsive Grid) --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* 01: SYMBOL */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group relative p-6 md:p-8 rounded-[2rem] bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:bg-zinc-900/80 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 md:p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <Share2 className="text-brand-orange w-8 h-8 md:w-10 md:h-10" />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-white/10 mb-6 md:mb-8 block group-hover:text-brand-orange/20 transition-colors">
                01
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Unity in Diversity
              </h3>
              <p className="text-zinc-400 leading-relaxed text-xs md:text-sm">
                Distinct spheres unite to form a perfect circle. This represents
                Community: unique individuals drawn together by purpose,
                belonging to something greater.
              </p>
            </motion.div>

            {/* 02: GRADIENT */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group relative p-6 md:p-8 rounded-[2rem] bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:bg-zinc-900/80 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 md:p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <Zap className="text-brand-yellow w-8 h-8 md:w-10 md:h-10" />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-white/10 mb-6 md:mb-8 block group-hover:text-brand-yellow/20 transition-colors">
                02
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Energy & Growth
              </h3>
              <p className="text-zinc-400 leading-relaxed text-xs md:text-sm">
                The gradient shifts from deep orange (passion) to sunburst
                yellow (clarity). This symbolizes Growth—the "light bulb
                moments" when ideas are shared.
              </p>
            </motion.div>

            {/* 03: TYPOGRAPHY */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group relative p-6 md:p-8 rounded-[2rem] bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:bg-zinc-900/80 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 md:p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <Type className="text-white w-8 h-8 md:w-10 md:h-10" />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-white/10 mb-6 md:mb-8 block group-hover:text-white/20 transition-colors">
                03
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                The Integrated 'C'
              </h3>
              <p className="text-zinc-400 leading-relaxed text-xs md:text-sm">
                The letter &apos;C&apos; is built from the same particles as the
                icon, proving that the network IS the brand. Inner Circle is
                built by its people.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- ASSET SHOWCASE --- */}
      <section className="px-4 md:px-6 pb-20 md:pb-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            Official Assets
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* PRIMARY LOGO CARD */}
          <div className="relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.3)] transition-shadow duration-500">
            <div className="h-[300px] md:h-[450px] flex items-center justify-center p-8 md:p-12">
              <div className="relative w-48 h-48 md:w-72 md:h-72 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src="/images/logo-primary.png"
                  alt="Primary Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end bg-gradient-to-t from-gray-100 via-gray-100/80 to-transparent">
              <div>
                <h3 className="text-black font-bold text-xl md:text-2xl">
                  Primary Mark
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mt-1">
                  For light backgrounds & print
                </p>
              </div>
              <button className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-brand-orange transition-colors flex items-center gap-2">
                <span className="hidden md:inline">Download</span>{" "}
                <Download size={16} />
              </button>
            </div>
          </div>

          {/* REVERSED LOGO CARD */}
          <div className="relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-brand-orange/30 hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.3)] transition-all duration-500">
            <div className="h-[300px] md:h-[450px] flex items-center justify-center p-8 md:p-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/50 to-zinc-900">
              <div className="relative w-48 h-48 md:w-72 md:h-72 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src="/images/logo-white.png"
                  alt="Reversed Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent">
              <div>
                <h3 className="text-white font-bold text-xl md:text-2xl">
                  Reversed Mark
                </h3>
                <p className="text-zinc-500 text-xs md:text-sm mt-1">
                  For dark backgrounds & screens
                </p>
              </div>
              <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-brand-orange hover:text-white transition-colors flex items-center gap-2">
                <span className="hidden md:inline">Download</span>{" "}
                <Download size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK RULES --- */}
      <section className="border-t border-white/10 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div className="max-w-xs">
            <h3 className="text-xl font-bold mb-2 md:mb-4">Golden Rules</h3>
            <p className="text-zinc-500 text-sm">
              To preserve the integrity of the Inner Circle brand, please adhere
              to these non-negotiables.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 w-full md:w-auto">
            <div className="flex items-start gap-3 text-sm text-zinc-300">
              <Check className="text-green-500 shrink-0 mt-0.5" size={18} />
              <span>Maintain clear space (1x logo width) around the mark.</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-zinc-300">
              <X className="text-red-500 shrink-0 mt-0.5" size={18} />
              <span>Do not add drop shadows, outlines, or glow effects.</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-zinc-300">
              <X className="text-red-500 shrink-0 mt-0.5" size={18} />
              <span>
                Do not rotate the logo mark independently of the text.
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm text-zinc-300">
              <X className="text-red-500 shrink-0 mt-0.5" size={18} />
              <span>Do not change the colors of the gradient dots.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
