"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Mic,
  Image as ImageIcon,
} from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { SectionBadge } from "@/components/common/SectionBadge";

export default function Assets() {
  const assets = [
    {
      title: "Inner Circle Conversations",
      description:
        "Join the dialogue. Candid conversations with industry leaders and community voices sharing unfiltered wisdom.",
      link: "/conversations",
      icon: MessageCircle,
      gradient: "from-blue-500/20 to-transparent",
      borderHover: "hover:border-blue-500/30",
      iconColor: "text-blue-500",
      bgHover: "group-hover:bg-blue-500/10",
    },
    {
      title: "Inner Circle Podcast",
      description:
        "Listen in. Deep dives into stories, lessons, and the journeys that shape our community and culture.",
      link: "/podcasts",
      icon: Mic,
      gradient: "from-purple-500/20 to-transparent",
      borderHover: "hover:border-purple-500/30",
      iconColor: "text-purple-500",
      bgHover: "group-hover:bg-purple-500/10",
    },
    {
      title: "Inner Circle Events Gallery",
      description:
        "Relive the moments. A visual journey through our gatherings, celebrations, and milestones.",
      link: "/gallery",
      icon: ImageIcon,
      gradient: "from-brand-orange/20 to-transparent",
      borderHover: "hover:border-brand-orange/30",
      iconColor: "text-brand-orange",
      bgHover: "group-hover:bg-brand-orange/10",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-brand-orange/30 font-sans">
      <div className="relative pt-32 pb-20 px-4 md:px-6">
        <AnimatedBackground />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto relative z-10"
        >
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              variants={fadeInUp}
              className="flex justify-center mb-6"
            >
              <SectionBadge>Discover More</SectionBadge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-medium tracking-tighter text-foreground mb-6 leading-[1.1]"
            >
              Explore Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange bg-[length:200%_auto] animate-gradient">
                Digital Assets
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed text-balance"
            >
              Dive deeper into the Inner Circle ecosystem. Listen, watch, and
              explore the content that defines our community.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {assets.map((asset, index) => (
              <motion.div
                key={asset.title}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className={`group relative p-8 h-[400px] flex flex-col justify-between rounded-[2rem] bg-card border border-border ${asset.borderHover} transition-all duration-500 overflow-hidden shadow-2xl`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${asset.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-700`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center mb-8 ${asset.iconColor} ${asset.bgHover} transition-colors duration-500`}
                  >
                    <asset.icon size={28} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4 tracking-tight leading-tight">
                    {asset.title}
                  </h3>

                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
                    {asset.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  <Link href={asset.link}>
                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-brand-orange transition-colors duration-300">
                      Explore
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </button>
                  </Link>
                </div>

                {/* Decorative Blur */}
                <div
                  className={`absolute -bottom-10 -right-10 w-40 h-40 ${asset.gradient
                    .split(" ")[0]
                    .replace(
                      "/20",
                      "/10"
                    )} rounded-full blur-[60px] group-hover:blur-[80px] transition-all duration-700`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
