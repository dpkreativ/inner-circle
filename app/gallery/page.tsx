"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon, MapPin, Calendar } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { SectionBadge } from "@/components/common/SectionBadge";
import { useState } from "react";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Events", "Retreats", "Community"];

  const items = [
    {
      id: 1,
      category: "Events",
      title: "Impact Summit 2024",
      location: "Lagos, Nigeria",
      date: "Dec 10, 2024",
      color: "bg-orange-500",
      height: "h-64",
    },
    {
      id: 2,
      category: "Retreats",
      title: "Founders Getaway",
      location: "Accra, Ghana",
      date: "Nov 05, 2024",
      color: "bg-blue-500",
      height: "h-96",
    },
    {
      id: 3,
      category: "Community",
      title: "Smallies Workshop",
      location: "Nairobi, Kenya",
      date: "Oct 22, 2024",
      color: "bg-purple-500",
      height: "h-64",
    },
    {
      id: 4,
      category: "Events",
      title: "Networking Night",
      location: "London, UK",
      date: "Sep 15, 2024",
      color: "bg-yellow-500",
      height: "h-80",
    },
    {
      id: 5,
      category: "Community",
      title: "Mentorship Launch",
      location: "Virtual",
      date: "Aug 30, 2024",
      color: "bg-green-500",
      height: "h-72",
    },
    {
      id: 6,
      category: "Retreats",
      title: "Creative Camp",
      location: "Cape Town, SA",
      date: "Aug 12, 2024",
      color: "bg-pink-500",
      height: "h-64",
    },
  ];

  const filteredItems =
    filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-brand-orange/30 font-sans overflow-hidden">
      <div className="relative pt-32 pb-20 px-4 md:px-6">
        <AnimatedBackground />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto relative z-10"
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              variants={fadeInUp}
              className="flex justify-center mb-6"
            >
              <SectionBadge>Inner Circle</SectionBadge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-medium tracking-tighter text-foreground mb-6 leading-[1.1]"
            >
              Captured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">
                Moments
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed text-balance"
            >
              A visual journey through our gatherings, celebrations, and
              milestones across the globe.
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? "bg-foreground text-background scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid Simulation */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className={`group relative rounded-[2rem] overflow-hidden ${item.height} ${item.color}/10 border border-border hover:border-border transition-all duration-500`}
              >
                {/* Placeholder Content (Abstract Gradient) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${
                    item.color.split("-")[1]
                  }-500/20 to-card opacity-60`}
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">
                      <Calendar size={12} /> {item.date}
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin size={14} /> {item.location}
                    </div>
                  </div>
                </div>

                {/* Visible Icon when not hovering */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground/10 group-hover:opacity-0 transition-opacity duration-300">
                  <ImageIcon size={48} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
