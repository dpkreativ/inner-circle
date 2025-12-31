"use client";

import { motion } from "framer-motion";
import { Play, Pause, Mic, Clock, Calendar } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { SectionBadge } from "@/components/common/SectionBadge";
import { useState } from "react";

export default function Podcasts() {
  const [playing, setPlaying] = useState<number | null>(null);

  const episodes = [
    {
      id: 1,
      title: "Episode 01: The Genesis of Inner Circle",
      description:
        "The founding story. How a simple idea evolved into a global movement for intergenerational connection.",
      duration: "45:20",
      date: "Oct 15, 2025",
      guest: "Founding Team",
    },
    {
      id: 2,
      title: "Episode 02: Wealth is More Than Money",
      description:
        "redefining wealth in the context of community, health, and social capital.",
      duration: "38:15",
      date: "Oct 29, 2025",
      guest: "Dr. Olaronke",
    },
    {
      id: 3,
      title: "Episode 03: The Power of Storytelling",
      description:
        "Why our stories matter and how to tell them in a way that resonates across generations.",
      duration: "52:10",
      date: "Nov 12, 2025",
      guest: "Chike The Storyteller",
    },
    {
      id: 4,
      title: "Episode 04: Building for the Next 100 Years",
      description:
        "Long-term thinking in a short-term world. diverse strategies for sustainable legacy.",
      duration: "41:00",
      date: "Nov 26, 2025",
      guest: "Tech Visionaries Panel",
    },
  ];

  const handlePlay = (id: number) => {
    if (playing === id) {
      setPlaying(null);
    } else {
      setPlaying(id);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-brand-orange/30 font-sans overflow-hidden">
      <div className="relative pt-32 pb-20 px-4 md:px-6">
        <AnimatedBackground />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto relative z-10"
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
              Voices of the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Circle
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed text-balance"
            >
              Deep dives into stories, lessons, and the journeys that shape our
              community and culture.
            </motion.p>
          </div>

          {/* Podcast List */}
          <div className="space-y-4">
            {episodes.map((episode) => (
              <motion.div
                key={episode.id}
                variants={fadeInUp}
                className={`group relative p-6 md:p-8 rounded-[2rem] border transition-all duration-300 ${
                  playing === episode.id
                    ? "bg-accent border-purple-500/50"
                    : "bg-card border-border hover:border-border"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                  {/* Play Button */}
                  <div className="shrink-0">
                    <button
                      onClick={() => handlePlay(episode.id)}
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        playing === episode.id
                          ? "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                          : "bg-muted text-foreground hover:bg-foreground hover:text-background"
                      }`}
                    >
                      {playing === episode.id ? (
                        <Pause fill="currentColor" size={24} />
                      ) : (
                        <Play fill="currentColor" size={24} className="ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      <span className="text-purple-400">
                        Episode {String(episode.id).padStart(2, "0")}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-zinc-700" />
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {episode.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-zinc-700" />
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {episode.duration}
                      </span>
                    </div>

                    <h3
                      className={`text-xl md:text-2xl font-medium mb-2 ${
                        playing === episode.id
                          ? "text-purple-700 dark:text-purple-100"
                          : "text-foreground"
                      }`}
                    >
                      {episode.title}
                    </h3>

                    <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed max-w-2xl">
                      {episode.description}
                    </p>
                  </div>

                  {/* Guest Badge (Desktop) */}
                  <div className="hidden md:block shrink-0">
                    <div className="px-4 py-2 rounded-full border border-border bg-muted backdrop-blur-sm flex items-center gap-2">
                      <Mic size={14} className="text-purple-400" />
                      <span className="text-xs text-foreground font-medium">
                        {episode.guest}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Playing Visualizer (Fake) */}
                {playing === episode.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 pt-6 border-t border-border overflow-hidden"
                  >
                    <div className="flex items-center justify-between gap-1 h-8">
                      {[...Array(40)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: ["20%", "100%", "20%"] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.05,
                            ease: "easeInOut",
                          }}
                          className="w-1 bg-purple-500/50 rounded-full"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Subscribe CTA */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 p-8 rounded-[2rem] bg-card border border-border text-center"
          >
            <h3 className="text-xl font-medium mb-6">
              Listen on your favorite platform
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                "Spotify",
                "Apple Podcasts",
                "Google Podcasts",
                "SoundCloud",
              ].map((platform) => (
                <button
                  key={platform}
                  className="px-6 py-3 rounded-full bg-muted border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 text-sm font-bold uppercase tracking-wide"
                >
                  {platform}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
