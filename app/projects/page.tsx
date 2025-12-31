"use client";
import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Radio,
  Zap,
  Users,
  Target,
  Play,
} from "lucide-react";
import { useRef } from "react";

// --- ANIMATION VARIANTS ---
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function ProjectsPage() {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#050505] text-white selection:bg-brand-orange/30 font-sans pt-32 pb-20 px-6 relative overflow-hidden"
    >
      {/* --- BACKGROUND GRID --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* --- HEADER --- */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto mb-24 relative z-10"
      >
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-3 mb-6"
        >
          <div className="px-4 py-1.5 rounded-full border border-brand-yellow/20 bg-brand-yellow/5 backdrop-blur-xl flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            <span className="text-brand-yellow text-xs font-bold uppercase tracking-[0.2em]">
              Live Roadmap
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight"
          >
            Building the <br />
            <span className="text-transparent bg-clip-text px-3 bg-gradient-to-r from-brand-orange to-brand-yellow">
              Next Chapter.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-zinc-400 font-light leading-relaxed pb-2"
          >
            From digital storytelling to physical summits. Explore the active
            initiatives defining the Inner Circle ecosystem [cite: 161-168].
          </motion.p>
        </div>
      </motion.div>

      {/* --- INTERACTIVE ROADMAP & CALENDAR --- */}
      <section className="max-w-7xl mx-auto mb-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT: THE TIMELINE  */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-medium mb-12 flex items-center gap-3">
              <Target className="text-brand-orange" />
              Key Milestones
            </h3>

            <div className="relative border-l border-white/10 ml-4 space-y-16">
              {milestones.map((item, i) => (
                <TimelineItem key={i} item={item} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* RIGHT: THE CALENDAR WIDGET */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="p-8 rounded-[2rem] bg-zinc-900/50 border border-white/10 backdrop-blur-md">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-bold text-lg">Upcoming Events</h3>
                  <Calendar className="text-brand-yellow" size={20} />
                </div>

                {/* Calendar Visual */}
                <div className="grid grid-cols-7 gap-2 mb-8 text-center text-sm font-mono text-zinc-500">
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>

                  {/* Mock Days */}
                  {Array.from({ length: 31 }).map((_, i) => {
                    const day = i + 1;
                    const isEvent = [13, 20].includes(day); // Event dates based on
                    const isToday = day === 15; // Mock today

                    return (
                      <div
                        key={i}
                        className={`
                                    aspect-square flex items-center justify-center rounded-full text-xs relative
                                    ${
                                      isToday
                                        ? "bg-white text-black font-bold"
                                        : ""
                                    }
                                    ${
                                      isEvent
                                        ? "text-brand-orange font-bold"
                                        : ""
                                    }
                                 `}
                      >
                        {day}
                        {isEvent && (
                          <div className="absolute bottom-1 w-1 h-1 rounded-full bg-brand-orange" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Event List */}
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-center min-w-[3rem]">
                      <span className="block text-xs text-brand-orange uppercase font-bold">
                        Dec
                      </span>
                      <span className="block text-xl font-bold">13</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">CircleConnect 1.0</h4>
                      <p className="text-xs text-zinc-500 mt-1">
                        Official Launch Event{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-center min-w-[3rem]">
                      <span className="block text-xs text-zinc-500 uppercase font-bold">
                        Jan
                      </span>
                      <span className="block text-xl font-bold text-zinc-400">
                        01
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-zinc-400">
                        Monthly Calendar
                      </h4>
                      <p className="text-xs text-zinc-600 mt-1">
                        2026 Series Begins{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACTIVE PROJECTS (PLACEHOLDERS) --- */}
      {/* Based on [cite: 39-48] Engagement Pillars */}
      <section className="max-w-7xl mx-auto pb-32 relative z-10">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
          <h2 className="text-3xl font-medium">Active Projects</h2>
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
            Current Phase
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} delay={i * 0.1} />
          ))}
        </div>
      </section>
    </div>
  );
}

// --- COMPONENT: TIMELINE ITEM ---
interface MilestoneItem {
  date: string;
  title: string;
  desc: string;
  status: string;
}

function TimelineItem({ item, delay }: { item: MilestoneItem; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-12"
    >
      {/* Dot on line */}
      <div
        className={`absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2 ${
          item.status === "done"
            ? "bg-brand-orange border-brand-orange"
            : "bg-black border-zinc-600"
        }`}
      />

      <span
        className={`text-xs font-mono uppercase tracking-widest mb-2 block ${
          item.status === "done" ? "text-brand-orange" : "text-zinc-500"
        }`}
      >
        {item.date}
      </span>
      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
      <p className="text-zinc-400 leading-relaxed max-w-lg">{item.desc}</p>
    </motion.div>
  );
}

// --- COMPONENT: PROJECT CARD ---
interface ProjectItem {
  title: string;
  tag: string;
  desc: string;
  icon: React.ElementType;
}

function ProjectCard({
  project,
  delay,
}: {
  project: ProjectItem;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="group relative p-8 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 hover:border-brand-orange/30 hover:bg-zinc-900 transition-all duration-500 cursor-pointer overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
      </div>

      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-zinc-400 group-hover:text-brand-yellow group-hover:bg-brand-yellow/10 transition-colors">
        <project.icon size={24} />
      </div>

      <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-zinc-400 mb-4">
        {project.tag}
      </span>

      <h3 className="text-3xl font-bold mb-3 group-hover:text-brand-orange transition-colors">
        {project.title}
      </h3>
      <p className="text-zinc-400 leading-relaxed mb-8">{project.desc}</p>

      {/* Progress Bar (Visual Flair) */}
      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-brand-orange to-brand-yellow w-[35%]" />
      </div>
      <div className="flex justify-between mt-2 text-[10px] font-mono text-zinc-600 uppercase">
        <span>Progress</span>
        <span>35%</span>
      </div>
    </motion.div>
  );
}

// --- DATA: MILESTONES  ---
const milestones = [
  {
    date: "November 2024",
    title: "Podcast Recording Kickoff",
    desc: "The start of our storytelling engine. Episode planning, recording, and editing begins to give the brand an online presence.",
    status: "done",
  },
  {
    date: "December 2024",
    title: "Pop-Up Physical Meeting",
    desc: "Giving the brand physical presence. Venue coordination and ambassador mobilization for the first touchpoint.",
    status: "done",
  },
  {
    date: "December 13, 2024",
    title: "CircleConnect 1.0 Launch",
    desc: "Revealing the brand to the general public. A major summit event to solidify our community stance.",
    status: "pending",
  },
  {
    date: "January 2026",
    title: "Monthly Calendars Begin",
    desc: "Consistent development on what we've started. Regular programming and community engagement.",
    status: "pending",
  },
];

// --- DATA: PROJECTS (PLACEHOLDERS based on [cite: 39-48]) ---
const projects = [
  {
    title: "The Podcast Engine",
    tag: "Media & Content",
    desc: "A series of stories, lessons, and cross-generation conversations designed to digitize wisdom[cite: 40, 43].",
    icon: Radio,
  },
  {
    title: "CircleConnect",
    tag: "Events",
    desc: "Physical huddles, city meetups, and summits. Creating safe spaces for deep connection and networking[cite: 41, 44].",
    icon: Users,
  },
  {
    title: "Digital Visibility",
    tag: "Marketing",
    desc: "A campaign of reels and narratives to spread the Inner Circle ethos across social platforms[cite: 42, 45].",
    icon: Zap,
  },
  {
    title: "Legacy Workshops",
    tag: "Education",
    desc: "Training and masterclasses focused on empowerment and skill transfer between generations[cite: 155].",
    icon: Play,
  },
];
