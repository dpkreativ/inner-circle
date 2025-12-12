"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  Sparkles,
  Zap,
  Heart,
  Lightbulb,
  TrendingUp,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";

export default function InnerCircleConnect() {
  return (
    <main className="bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-brand-orange/30">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden py-32">
        <AnimatedBackground />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 w-full max-w-5xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.1]"
          >
            INNER CIRCLE
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-4xl text-white/90 font-light mb-8 max-w-4xl mx-auto leading-normal"
          >
            Your Multi-Generational{" "}
            <span className="text-brand-orange font-normal">
              Life Concierge
            </span>{" "}
            for Growth, Clarity, and Legacy.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Connect across generations. Build confidence. Find clarity. Grow
            with people who inspire, support, and elevate you.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-zinc-300 font-light max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Welcome to Inner Circle — the ecosystem where Trailblazers,
            Builders, Balancers, and Legends come together to share wisdom,
            opportunities, and lifelong support.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white font-medium mb-12"
          >
            This is where your next level begins.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 backdrop-blur-md mb-4"
          >
            <Calendar size={16} className="text-brand-orange" />
            <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">
              13th December 2025
            </span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Inner Circle Connect - The Founders Gathering
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-base text-zinc-400 max-w-2xl mx-auto mt-4"
          >
            A transformative morning of connection, clarity, mentorship,
            storytelling, and cross-generational collaboration.
          </motion.p>
        </motion.div>
      </section>

      {/* WHAT IS INNER CIRCLE */}
      <section className="py-20 md:py-32 relative text-center px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs mb-4 block"
            >
              What is Inner Circle?
            </motion.span>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8"
            >
              Inner Circle is a multi-generational ecosystem where real people
              connect, grow, and build legacy together. We bring Trailblazers,
              Builders, Balancers, and Legends into one coordinated space where
              wisdom meets energy, ambition meets guidance, and everyone gains
              value from shared experiences.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
            >
              <p className="text-xl md:text-2xl text-white font-light italic">
                "It is a platform, a culture, a Life Concierge, and a lifelong
                support system built to help you rise, evolve, and impact your
                world."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OUR OBJECTIVE */}
      <section className="py-20 relative px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium mb-4">
            Our Objective
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto">
            Inner Circle is designed to remain relevant to you today, tomorrow,
            and for decades to come.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-brand-orange/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6 text-brand-orange">
                <item.icon size={24} />
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO IS INNER CIRCLE FOR */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-12 text-center md:text-left">
            <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs mb-2 block">
              Who is Inner Circle For?
            </span>
            <h2 className="text-3xl md:text-5xl font-medium mb-4">
              Everyone. Every Season of Life.
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              You join your natural age Band; you grow with your Band; you
              connect across all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bands.map((band, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-black border border-white/10 hover:border-white/20 transition-all"
              >
                <div className={`mb-4 ${band.color}`}>
                  <band.icon size={32} />
                </div>
                <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">
                  {band.age}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {band.name}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {band.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE CONCIERGE */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-brand-orange/5 blur-[80px] rounded-full pointer-events-none" />
            <h2 className="relative z-10 text-3xl md:text-5xl font-medium mb-8">
              Your Inner Circle <br />
              <span className="text-brand-orange">Life Concierge</span>
            </h2>
            <p className="relative z-10 text-lg text-zinc-400 mb-8 font-light leading-relaxed">
              Think of Inner Circle as your personal Life Concierge, a support
              system that helps you:
            </p>

            <ul className="relative z-10 space-y-4">
              {lifeConcierge.map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="text-brand-orange shrink-0 mt-1"
                    size={18}
                  />
                  <span className="text-zinc-300">{item}</span>
                </motion.li>
              ))}
            </ul>

            <p className="relative z-10 text-zinc-400 mt-8 italic">
              It is a human system of help, support, and direction throughout
              your life stages.
            </p>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-widest text-zinc-500 mb-6">
              What You Stand To Gain
            </h3>
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors"
              >
                <h4 className="text-lg font-bold text-white mb-1">
                  {benefit.title}
                </h4>
                <p className="text-zinc-400 text-sm font-light">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 13TH DECEMBER EVENT */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-brand-orange/20 via-black to-black">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 inline-block border border-brand-orange/50 rounded-full px-6 py-2 bg-black/30 backdrop-blur-md"
          >
            <span className="text-brand-orange font-mono uppercase tracking-widest text-sm">
              The Founders Gathering
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            INNER CIRCLE{" "}
            <span className="text-transparent bg-clip-text px-3 bg-gradient-to-r from-brand-orange to-brand-yellow">
              CONNECT
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-4 font-light">
            Our first physical gathering —
          </p>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-light">
            Inner Circle - The{" "}
            <strong className="font-bold text-white">CATALYST</strong> the
            ignition moment of the Inner Circle initiative.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-16">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="text-brand-yellow" size={20} /> What to
                Expect
              </h3>
              <ul className="space-y-3 text-zinc-300 font-light text-sm">
                <li>• High-energy cross-generational networking</li>
                <li>• Life-changing insights and clarity</li>
                <li>• Story exchanges that make you rethink your journey</li>
                <li>
                  • Guided moments powered by the Life Concierge philosophy
                </li>
                <li>• Aha moments, reflection tasks, and safe conversations</li>
                <li>
                  • The unveiling of the Inner Circle model and your role in
                  shaping it
                </li>
              </ul>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Heart className="text-brand-orange" size={20} /> Why You Should
                Be There
              </h3>
              <p className="text-zinc-300 font-light text-sm mb-4 leading-relaxed">
                You are part of the founding set. The early builders. The people
                whose stories and experiences will shape how Inner Circle grows
                into thousands.
              </p>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              Why Join Inner Circle Now?
            </h3>
            <p className="text-zinc-300 font-light leading-relaxed mb-4">
              Because early members become the faces, storytellers, and pillars
              of this movement. You gain first access to partnerships, programs,
              visibility, and founding-level recognition.
            </p>
            <p className="text-white font-medium">
              Inner Circle is not a "group." It is a Life Concierge system, a
              multi-generational family, and a platform built to last.
            </p>
          </div>
        </div>
      </section>

      {/* THE PROMISE */}
      <section className="py-20 md:py-32 px-4 text-center bg-[#080808]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium mb-8">
            The Inner Circle Promise
          </h2>
          <div className="space-y-4 text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
            <p>We help you connect.</p>
            <p>We help you grow.</p>
            <p>We help you build a legacy.</p>
            <p className="text-white font-normal mt-8">
              And at every step of the journey,
              <br />
              Inner Circle is your Life Concierge - guiding, supporting, and
              elevating you.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 md:py-32 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-[#111] border border-white/10 rounded-[3rem] p-10 md:p-20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
              Join The Founding Circle
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Become part of the first 100 people shaping the future of Inner
              Circle.
            </p>

            <div className="mb-12 text-left max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">
                Why Join Now?
              </h3>
              <ul className="space-y-3 text-zinc-300">
                {whyJoinNow.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-brand-orange shrink-0 mt-1"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mb-6">
              Take Your First Step
            </h3>
            <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
              Be part of a community that supports your growth, amplifies your
              voice, and helps you build a legacy.
            </p>

            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <button className="w-full py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-brand-orange hover:text-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Register for 13th Dec Event
              </button>
              <button className="w-full py-5 bg-transparent border border-white/20 text-white text-lg font-medium rounded-full hover:bg-white/5 transition-colors duration-300">
                Join Your Band
              </button>
            </div>

            <p className="mt-12 text-zinc-500 text-sm font-light">
              Inner Circle — Where your story connects with others, <br />
              and your future becomes clearer, stronger, and more intentional.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// DATA
const objectives = [
  {
    icon: Users,
    desc: "Connects people across generations for learning, collaboration, and support",
  },
  {
    icon: Target,
    desc: "Offers a Life Concierge experience that helps you navigate opportunities, decisions, and growth",
  },
  {
    icon: Lightbulb,
    desc: "Unlocks visibility, mentorship, and real-world value",
  },
  {
    icon: TrendingUp,
    desc: "Builds confidence, clarity, purpose, and long-term accountability",
  },
  {
    icon: Sparkles,
    desc: "Sustains itself through content, events, and strategic partnerships",
  },
];

const bands = [
  {
    name: "Trailblazers",
    age: "13–24",
    desc: "Creative, energetic, ready for greatness",
    icon: Zap,
    color: "text-brand-yellow",
  },
  {
    name: "Builders",
    age: "25–40",
    desc: "Ambitious, shaping careers, families, and influence",
    icon: Target,
    color: "text-brand-orange",
  },
  {
    name: "Balancers",
    age: "41–55",
    desc: "Leading, stabilizing, navigating responsibilities",
    icon: Users,
    color: "text-purple-400",
  },
  {
    name: "Legends",
    age: "55+",
    desc: "Wise, seasoned, ready to guide and leave impact",
    icon: Sparkles,
    color: "text-amber-500",
  },
];

const lifeConcierge = [
  "Find clarity when life gets confusing",
  "Access the right people at the right time",
  "Connect with wisdom far ahead of your journey",
  "Receive guidance, shortcuts, and opportunities",
  "Navigate decisions around career, relationships, money, growth, and purpose",
  "Stay supported, inspired, and accountable",
];

const benefits = [
  {
    title: "1. Real Connections",
    desc: "Meaningful relationships across all generations.",
  },
  {
    title: "2. Mentorship & Support (Your Life Concierge in action)",
    desc: "You do not walk alone; you grow with people who have done it before.",
  },
  {
    title: "3. Opportunities & Visibility",
    desc: "Through events, stories, networking, and spotlight platforms.",
  },
  {
    title: "4. Mindset & Personal Development",
    desc: "Podcasts, reels, huddles, and reflective conversations.",
  },
  {
    title: "5. A Community That Grows With You",
    desc: "From student to professional, from professional to leader, from leader to legacy.",
  },
];

const whyJoinNow = [
  "You gain priority access to the Inner Circle Life Concierge",
  "You become a recognized foundation member",
  "You shape the culture, conversations, and impact of this movement",
  "You access mentorship, opportunities, and connections across all life Bands",
  "You secure your place before others and benefit from the introductory offers",
];
