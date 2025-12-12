"use client";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Crown,
  Globe,
  Layers,
  Mic,
  Sparkles,
  Sun,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Brand() {
  // Hero Scroll Parallax
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // --- CAROUSEL LOGIC (SPOTIFY STYLE) ---
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = 300;
      const targetScroll =
        direction === "left"
          ? current.scrollLeft - scrollAmount
          : current.scrollLeft + scrollAmount;

      current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-brand-orange/30 font-sans"
    >
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 md:px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-orange/20 rounded-full blur-[80px] md:blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-brand-yellow/10 rounded-full blur-[80px] md:blur-[120px]"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ y }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 w-full max-w-6xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center mb-6 md:mb-8"
          >
            <div className="px-3 py-1.5 md:px-4 md:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <span className="text-brand-orange text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
                Inner Circle Brand Guide
              </span>
            </div>
          </motion.div>

          {/* OPTIMIZED TYPOGRAPHY FOR MOBILE */}
          <motion.h1
            variants={fadeInUp}
            className="text-[2.5rem] sm:text-5xl md:text-8xl font-medium tracking-tighter text-white mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] text-balance"
          >
            Where <span className="font-light text-white/70">Stories</span>,{" "}
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              Community
            </span>
            , & Purpose <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange bg-[length:200%_auto] animate-gradient">
              Become Legacy.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-2xl text-zinc-400 font-light max-w-lg md:max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed tracking-wide text-balance"
          >
            Building a global, multi-generational community that sustains itself
            financially, socially, and culturally.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center w-full px-4"
          >
            <Link href="/logo" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto relative px-8 py-4 bg-white text-black rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                <span className="relative z-10 flex items-center justify-center gap-3 text-sm font-bold tracking-wide uppercase">
                  Explore Assets{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0 opacity-20" />
              </button>
            </Link>
            <Link href="/mission" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300">
                <span className="text-sm font-medium tracking-wide uppercase">
                  Read the Mission
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --- INFINITE SCROLL MARQUEE --- */}
      <section className="py-4 md:py-6 border-y border-white/5 bg-black/50 backdrop-blur-md relative overflow-hidden">
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex gap-12 md:gap-24 whitespace-nowrap items-center pr-12 md:pr-24"
          >
            {[...brandPillars, ...brandPillars].map((pillar, i) => (
              <div
                key={i}
                className="flex items-center gap-4 md:gap-6 text-xs md:text-base font-medium text-white/40 uppercase tracking-[0.15em] hover:text-white transition-colors cursor-default"
              >
                <Sparkles size={12} className="text-brand-orange" />
                {pillar}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- GENERATIONAL TIERS CAROUSEL --- */}
      <section className="py-20 md:py-32 relative group/carousel">
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
          <span className="text-brand-orange font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 block">
            Our Community
          </span>
          <h2 className="text-3xl md:text-6xl font-medium tracking-tighter text-white">
            Generational Tiers
          </h2>
        </div>

        <div className="relative">
          {/* LEFT ARROW (Overlay - Desktop Only) */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* SCROLL CONTAINER */}
          <div
            ref={carouselRef}
            className="flex gap-4 md:gap-8 overflow-x-auto px-6 md:px-12 pb-12 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="snap-center shrink-0 w-[280px] md:w-[380px] h-[450px] md:h-[500px] relative rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-white/10 group select-none shadow-2xl shadow-black/50"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${tier.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-700`}
                />

                <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <tier.icon size={18} className="md:w-5 md:h-5" />
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg group-hover:bg-brand-orange/20 group-hover:border-brand-orange/40 group-hover:text-brand-orange transition-all">
                      Ages {tier.age}
                    </span>
                  </div>

                  <div className="flex-grow flex items-center justify-center relative opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 transform">
                    {tier.visual}
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    <h3 className="text-2xl md:text-3xl font-medium mb-2 tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                      {tier.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT ARROW (Overlay - Desktop Only) */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex">
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID IDENTITY SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-medium mb-6 tracking-tighter">
            Our Core Identity
          </h2>
          <p className="text-lg md:text-2xl text-zinc-400 font-light leading-normal">
            Inner Circle is not just a community; it is a creative platform and
            legacy-building social impact engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[220px]">
          {/* LARGE CARD */}
          <div className="md:col-span-2 row-span-1 md:row-span-2 group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-brand-orange/30 overflow-hidden transition-all duration-700 flex flex-col justify-between min-h-[300px]">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <div className="absolute top-10 right-10 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)]" />
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                <line
                  x1="50%"
                  y1="30%"
                  x2="70%"
                  y2="50%"
                  stroke="#F97316"
                  strokeWidth="0.5"
                />
                <line
                  x1="70%"
                  y1="50%"
                  x2="60%"
                  y2="70%"
                  stroke="#F97316"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <div className="relative z-10 mt-auto">
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4 text-brand-orange border border-brand-orange/20">
                <Users size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight">
                Community of Shared Growth
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md font-light">
                A space where connection transcends time, providing mentorship
                and opportunities across generations.
              </p>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-brand-yellow/30 overflow-hidden transition-all duration-700 flex flex-col justify-between min-h-[200px]">
            <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow border border-brand-yellow/20">
              <Layers size={20} />
            </div>
            <div className="relative z-10 mt-4">
              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Storytelling Ecosystem
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Where stories become lessons and content becomes legacy.
              </p>
            </div>
          </div>

          <div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/20 overflow-hidden transition-all duration-700 flex flex-col justify-between min-h-[200px]">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10">
              <Target size={20} />
            </div>
            <div className="relative z-10 mt-4">
              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Impact Engine
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Legacy-building initiatives driven by social impact.
              </p>
            </div>
          </div>

          {/* WIDE CARD */}
          <div className="md:col-span-3 group relative p-8 rounded-[2rem] bg-gradient-to-r from-[#0A0A0A] to-[#111] border border-white/5 hover:border-brand-orange/30 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute right-[-10%] top-[-50%] w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px]" />
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="text-brand-orange" size={18} />
                <span className="text-brand-orange font-bold uppercase text-[10px] tracking-[0.2em]">
                  Global Vision
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight">
                A Multi-Generational Movement
              </h3>
              <p className="text-zinc-400 text-base md:text-lg max-w-2xl font-light">
                To bridge generations, providing access, mentorship, and
                belonging that transcend time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BRAND VIDEO SHOWCASE --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-40 pt-10">
        <div className="mb-10 md:mb-16 text-center border-t border-white/5 pt-10 md:pt-20">
          <span className="text-zinc-500 font-medium uppercase tracking-[0.2em] text-xs mb-4 block">
            The Brand in Motion
          </span>
          <h2 className="text-3xl md:text-6xl font-medium tracking-tighter text-white">
            Visual Identity
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-video max-w-6xl mx-auto rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_0_120px_rgba(0,0,0,0.8)] bg-[#050505]"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
          >
            <source src="/videos/logo-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>
      </section>
    </main>
  );
}

// --- DATA & VISUALS ---
const brandPillars = [
  "Community of Shared Growth",
  "Storytelling Ecosystem",
  "Impact Engine",
  "Multi-Generational Movement",
  "Legacy Building",
];

const tiers = [
  {
    name: "Smallies",
    age: "7-12",
    icon: Sparkles,
    desc: "The youngest seeds of our community. Learning early, dreaming big, and starting their journey.",
    gradient: "from-blue-500/20 to-transparent",
    visual: (
      <div className="flex gap-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px]" />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -40, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        ))}
      </div>
    ),
  },
  {
    name: "Trailblazers",
    age: "13-24",
    icon: Zap,
    desc: "The energetic future. High school and university students ready to challenge the norm.",
    gradient: "from-brand-yellow/20 to-transparent",
    visual: (
      <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
        <div className="absolute inset-0 bg-brand-yellow/10 rounded-full blur-[50px]" />
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]"
        >
          <motion.path
            d="M55 5L20 50H55L45 95L80 40H55L55 5Z"
            stroke="#EAB308"
            strokeWidth="3"
            fill="rgba(234, 179, 8, 0.1)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>
      </div>
    ),
  },
  {
    name: "Creatives",
    age: "25-40",
    icon: Mic,
    desc: "The engine room. Young professionals and artists building careers and shaping culture.",
    gradient: "from-brand-orange/20 to-transparent",
    visual: (
      <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
        <div className="absolute inset-0 bg-brand-orange/10 rounded-full blur-[50px]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="relative w-24 h-24 md:w-40 md:h-40 border-2 border-brand-orange/40 rounded-3xl"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border-2 border-white/20 rounded-2xl"
          />
          <div className="absolute inset-12 bg-brand-orange/20 backdrop-blur-md rounded-xl border border-brand-orange/50" />
        </motion.div>
      </div>
    ),
  },
  {
    name: "Luminaries",
    age: "41-55",
    icon: Sun,
    desc: "Established leaders. Shining light on paths for others and solidifying their impact.",
    gradient: "from-purple-500/20 to-transparent",
    visual: (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-[60px]" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 md:w-40 md:h-40 rounded-full border border-dashed border-purple-400/50"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute w-16 h-16 md:w-20 md:h-20 bg-purple-500/30 rounded-full blur-xl"
        />
        <div className="absolute w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)]" />
      </div>
    ),
  },
  {
    name: "Pillars",
    age: "56-65",
    icon: Anchor,
    desc: "The structural support. providing stability, wisdom, and governance to the circle.",
    gradient: "from-emerald-500/20 to-transparent",
    visual: (
      <div className="flex gap-4 items-end h-32 md:h-40 w-full justify-center">
        <div className="absolute inset-0 bg-emerald-500/10 blur-[50px]" />
        {[40, 80, 60, 90, 50].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
            className="w-4 md:w-6 bg-gradient-to-t from-emerald-500/60 to-emerald-300/20 rounded-t-lg border-t border-emerald-400/50"
          />
        ))}
      </div>
    ),
  },
  {
    name: "Icons",
    age: "65+",
    icon: Crown,
    desc: "The living legends. Holders of history and guidance for the generations to come.",
    gradient: "from-amber-500/20 to-transparent",
    visual: (
      <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
        <div className="absolute inset-0 bg-amber-500/10 blur-[60px]" />
        <motion.div
          animate={{ rotateY: 180 }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 md:w-32 md:h-32 border-[3px] border-amber-500/50 transform rotate-45 flex items-center justify-center backdrop-blur-sm"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.4)]" />
        </motion.div>
      </div>
    ),
  },
];
