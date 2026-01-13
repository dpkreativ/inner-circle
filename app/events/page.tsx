"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";

export default function EventsPage() {
  return (
    <main className="bg-background min-h-screen text-foreground overflow-hidden selection:bg-brand-orange/30 pt-32 pb-20">
      <AnimatedBackground />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 md:px-6 relative z-10"
      >
        {/* HEADER */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Upcoming <span className="text-brand-orange">Events</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Join the gathering of Trailblazers, Builders, and Legends.
            Experience the power of connection in person.
          </p>
        </motion.div>

        {/* INNER CIRCLE EVENTS SECTION */}
        <div className="mb-24">
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px bg-border flex-1" />
            <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm">
              Inner Circle Events
            </span>
            <div className="h-px bg-border flex-1" />
          </motion.div>

          {/* Event Card: Inner Circle Connect */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <Link href="/events/inner-circle-connect" className="group">
              <article className="h-full bg-card dark:bg-[#0A0A0A] border border-border dark:border-white/10 rounded-[2rem] overflow-hidden hover:border-brand-orange/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.15)] flex flex-col">
                {/* Card Image / Header */}
                <div className="h-48 bg-gradient-to-br from-brand-orange/20 via-brand-orange/5 to-background relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="text-brand-orange/40 w-16 h-16 group-hover:text-brand-orange/60 transition-colors" />
                  </div>
                  <div className="absolute top-4 right-4 bg-background/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                      Completed
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-brand-orange font-medium mb-3">
                    <Calendar size={16} />
                    <span>Dec 13, 2025</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-brand-orange transition-colors">
                    Inner Circle Connect
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 font-light line-clamp-3">
                    The Founders Gathering. A transformative morning of
                    connection, clarity, mentorship, and cross-generational
                    collaboration.
                  </p>

                  <div className="mt-auto flex items-center text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                    View Details{" "}
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        </div>

        {/* OTHER EVENTS SECTION */}
        <div>
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px bg-border flex-1" />
            <span className="text-muted-foreground/50 font-bold uppercase tracking-[0.2em] text-sm">
              Other Events
            </span>
            <div className="h-px bg-border flex-1" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center py-20 bg-muted/30 dark:bg-white/5 rounded-[2rem] border border-dashed border-border dark:border-white/10"
          >
            <Calendar className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-muted-foreground mb-2">
              More events coming soon
            </h3>
            <p className="text-muted-foreground/60 max-w-sm mx-auto font-light">
              Stay tuned for workshops, community meetups, and open gatherings.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
