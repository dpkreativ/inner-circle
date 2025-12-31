"use client";
import { motion } from "framer-motion";
import {
  Smartphone,
  Users,
  Layers,
  Unlink,
  ShieldAlert,
  ArrowDown,
  Heart,
  BookOpen,
  Lightbulb,
  Shield,
  Handshake,
  Gem,
  Fingerprint,
} from "lucide-react";

import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-orange/30 font-sans">
      {/* --- HERO: THE PROBLEM STATEMENT --- */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background noise for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <div className="px-4 py-1.5 rounded-full border border-border/50 bg-muted/50 backdrop-blur-md">
              <span className="text-muted-foreground text-xs font-medium uppercase tracking-[0.2em]">
                The Context
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-medium tracking-tighter text-foreground mb-8 leading-[1.1]"
          >
            Why We Are Here.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-20 leading-relaxed"
          >
            We live in an era of unprecedented connectivity, yet we have never
            felt more alone. People today face a crisis of{" "}
            <span className="text-foreground font-normal">disconnection</span>.
          </motion.p>

          {/* THE 5 PROBLEMS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-card/50 dark:bg-zinc-900/50 border border-border dark:border-white/5 hover:border-brand-orange/20 dark:hover:border-white/10 hover:bg-card dark:hover:bg-zinc-900 transition-all duration-300 shadow-sm dark:shadow-none"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-muted dark:bg-zinc-800 flex items-center justify-center mb-6 ${item.color}`}
                >
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-medium text-foreground dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground dark:text-zinc-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- TRANSITION: THE BRIDGE --- */}
      <div className="flex justify-center py-10 opacity-20 text-foreground">
        <ArrowDown className="animate-bounce" size={32} />
      </div>

      {/* --- THE MISSION & VISION --- */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[150px] pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10"
        >
          {/* MISSION SIDE */}
          <motion.div variants={fadeInUp}>
            <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight mb-8 text-foreground">
              To <span className="text-brand-orange">bridge</span> generations.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed border-l-2 border-brand-orange/30 pl-8">
              Providing access, mentorship, opportunities, and belonging that{" "}
              <span className="text-foreground font-normal">
                transcend time
              </span>
              .
            </p>
          </motion.div>

          {/* VISION SIDE */}
          <motion.div
            variants={fadeInUp}
            className="bg-card dark:bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-border dark:border-white/10 shadow-lg dark:shadow-none"
          >
            <span className="text-brand-yellow font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
              Our Vision
            </span>
            <p className="text-lg text-muted-foreground dark:text-zinc-400 leading-relaxed mb-8">
              To build a global, multi-generational community that sustains
              itself financially, socially, and culturally.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] flex-grow bg-border dark:bg-white/10" />
              <span className="text-foreground dark:text-white text-lg font-medium">
                Leaving a lasting impact.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- THE SOLUTION PILLARS --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-muted-foreground uppercase tracking-[0.3em] text-xs mb-16">
            The Inner Circle Solution
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { word: "Connection", desc: "Deep, authentic bonds." },
              { word: "Purpose", desc: "Aligned with your 'Why'." },
              { word: "Belonging", desc: "A place to be you." },
              { word: "Growth", desc: "Expanding horizons." },
            ].map((item, i) => (
              <motion.div
                key={item.word}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 rounded-[2rem] border border-border dark:border-white/5 hover:border-brand-orange/30 hover:bg-card dark:hover:bg-white/5 transition-all duration-500 cursor-default flex flex-col justify-center items-center h-48"
              >
                <h4 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-transparent bg-clip-text px-3 bg-gradient-to-b from-foreground to-muted-foreground dark:from-white dark:to-zinc-500 group-hover:to-foreground dark:group-hover:to-white transition-all duration-500 w-full overflow-visible">
                  {item.word}
                  <span className="text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    .
                  </span>
                </h4>
                <p className="mt-4 text-muted-foreground text-sm font-light opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR VALUES --- */}
      <section className="pt-20 pb-40 px-6 bg-muted/30 dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-medium tracking-tight mb-4 text-foreground">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  y: -5,
                  backgroundColor: "var(--card)",
                }}
                className={`p-8 rounded-[2rem] border border-border dark:border-white/5 bg-card/50 dark:bg-zinc-900/20 flex flex-col items-center text-center group ${
                  val.wide ? "md:col-span-2" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-muted dark:bg-white/5 flex items-center justify-center mb-6 text-muted-foreground dark:text-zinc-400 group-hover:text-brand-yellow group-hover:bg-brand-yellow/10 transition-all duration-500">
                  <val.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-2">
                  {val.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// --- DATA ---
const problems = [
  {
    title: "Digital Disconnection",
    desc: "Despite being 'online', true connection is rare. We face a paradox of hyper-connectivity and deep isolation.",
    icon: Smartphone,
    color: "text-blue-400",
  },
  {
    title: "Surface-Level Engagement",
    desc: "Interactions often lack depth. We crave conversations that go beyond the weather and social feeds.",
    icon: Layers,
    color: "text-purple-400",
  },
  {
    title: "Weak Mentorship",
    desc: "Guidance is fragmented. There is a gap in structured support for transferring wisdom between generations.",
    icon: Unlink,
    color: "text-red-400",
  },
  {
    title: "Generational Silos",
    desc: "Age groups are separated. Limited cross-generational connection means wisdom gets lost and energy gets wasted.",
    icon: Users,
    color: "text-brand-yellow",
  },
  {
    title: "Lack of Trusted Spaces",
    desc: "Safe harbors are missing. People lack inspiring community spaces where they can truly be themselves.",
    icon: ShieldAlert,
    color: "text-brand-orange",
  },
];

const values = [
  { title: "Belonging", icon: Heart, wide: false },
  { title: "Learning", icon: BookOpen, wide: false },
  { title: "Creativity", icon: Lightbulb, wide: false },
  { title: "Integrity", icon: Shield, wide: false },
  { title: "Collaboration", icon: Handshake, wide: false },
  { title: "Legacy", icon: Gem, wide: false },
  { title: "Inclusivity", icon: Fingerprint, wide: true },
];
