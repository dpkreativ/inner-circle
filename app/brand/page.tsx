"use client";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { SectionBadge } from "@/components/common/SectionBadge";
import Link from "next/link";
import { Palette, Type, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";

export default function BrandPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-brand-orange/30 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 md:px-6 overflow-hidden min-h-[80vh]">
        <AnimatedBackground />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 w-full max-w-6xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center mb-6 md:mb-8"
          >
            <SectionBadge>Brand Guidelines</SectionBadge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-[2.5rem] sm:text-5xl md:text-8xl font-medium tracking-tighter text-foreground mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] text-balance"
          >
            The Inner Circle{" "}
            <span className="bg-clip-text px-3 text-transparent bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange bg-[length:200%_auto] animate-gradient w-max">
              Brand Identity
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-2xl text-muted-foreground font-light max-w-lg md:max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed tracking-wide text-balance"
          >
            A comprehensive guide to our visual identity, design principles, and
            brand assets. Everything you need to represent Inner Circle
            authentically.
          </motion.p>
        </motion.div>
      </section>

      {/* --- BRAND VIDEO SHOWCASE --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-40 pt-10">
        <div className="mb-10 md:mb-16 text-center border-t border-border dark:border-white/5 pt-10 md:pt-20">
          <span className="text-muted-foreground font-medium uppercase tracking-[0.2em] text-xs mb-4 block">
            The Brand in Motion
          </span>
          <h2 className="text-3xl md:text-6xl font-medium tracking-tighter text-foreground">
            Visual Identity
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-video max-w-6xl mx-auto rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-border dark:border-white/5 shadow-[0_0_120px_rgba(0,0,0,0.8)] bg-black"
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

      {/* --- BRAND ASSETS GRID --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-medium mb-4 tracking-tighter text-foreground">
            Brand Assets
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our visual identity components
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {brandAssets.map((asset, i) => (
            <motion.div
              key={asset.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={asset.path}>
                <div className="group relative p-8 md:p-12 rounded-[2rem] bg-card dark:bg-[#0A0A0A] border border-border dark:border-white/5 hover:border-brand-orange/30 overflow-hidden transition-all duration-500 h-full flex flex-col">
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${asset.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-muted dark:bg-white/5 flex items-center justify-center mb-6 text-brand-orange group-hover:bg-brand-orange/10 transition-colors duration-500">
                    <asset.icon size={32} className="md:w-10 md:h-10" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl md:text-3xl font-medium text-foreground dark:text-white mb-3 tracking-tight">
                      {asset.title}
                    </h3>
                    <p className="text-muted-foreground dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                      {asset.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="relative z-10 flex items-center gap-2 text-brand-orange font-medium text-sm group-hover:gap-4 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- BRAND PRINCIPLES --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-32">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-medium mb-4 tracking-tighter text-foreground">
            Our Brand Principles
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The core values that guide our visual and verbal identity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brandPrinciples.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-card dark:bg-zinc-900/50 border border-border dark:border-white/5 hover:border-muted-foreground/20 dark:hover:border-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6 text-brand-orange">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-medium text-foreground dark:text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-muted-foreground dark:text-zinc-500 text-sm leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- USAGE GUIDELINES CTA --- */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pb-20 md:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-brand-orange/10 via-black to-black border border-brand-orange/20 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
              Need Help?
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              For questions about brand usage, partnerships, or custom
              applications of our brand assets, reach out to our team.
            </p>
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-brand-orange hover:text-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Contact Brand Team
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// --- DATA ---
const brandAssets = [
  {
    title: "Logo",
    description:
      "Our logo variations, usage guidelines, clear space requirements, and downloadable files in multiple formats.",
    path: "/brand/logo",
    icon: Sparkles,
    gradient: "from-brand-orange/20 to-transparent",
  },
  {
    title: "Colors",
    description:
      "Our brand color palette including primary, secondary, and accent colors with hex, RGB, and usage guidelines.",
    path: "/brand/colors",
    icon: Palette,
    gradient: "from-brand-yellow/20 to-transparent",
  },
  {
    title: "Typography",
    description:
      "Font families, weights, sizes, and typographic hierarchy for consistent brand communication.",
    path: "/brand/typography",
    icon: Type,
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    title: "Merchandise",
    description:
      "Official Inner Circle merchandise, apparel guidelines, and approved vendor information.",
    path: "/brand/merch",
    icon: ShoppingBag,
    gradient: "from-emerald-500/20 to-transparent",
  },
];

const brandPrinciples = [
  {
    title: "Authentic",
    description:
      "We represent real stories, genuine connections, and honest communication. Our brand reflects who we truly are.",
  },
  {
    title: "Inclusive",
    description:
      "Our visual identity welcomes all generations, backgrounds, and perspectives. Design that brings people together.",
  },
  {
    title: "Dynamic",
    description:
      "We balance timeless elegance with contemporary energy. Our brand evolves while staying true to our core.",
  },
  {
    title: "Purposeful",
    description:
      "Every design choice serves a function. We communicate with clarity and intention, never decoration alone.",
  },
  {
    title: "Warm",
    description:
      "Our brand feels approachable and human. We use color, typography, and imagery to create emotional connection.",
  },
  {
    title: "Bold",
    description:
      "We're not afraid to stand out. Our brand makes statements that inspire action and spark conversation.",
  },
];
