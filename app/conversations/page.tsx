"use client";

import { motion } from "framer-motion";
import { MessageCircle, User, Clock, Tag, ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { SectionBadge } from "@/components/common/SectionBadge";
import Link from "next/link";

export default function Conversations() {
  const conversations = [
    {
      id: 1,
      title: "The Future of Legacy Building",
      excerpt:
        "How do we build something that outlasts us? A deep dive into intergenerational wealth and cultural preservation.",
      author: "Sarah J. & Michael K.",
      date: "Oct 12, 2025",
      readTime: "8 min read",
      tags: ["Legacy", "Culture"],
      featured: true,
    },
    {
      id: 2,
      title: "Navigating the Digital Divide",
      excerpt:
        "Bridging the gap between digital natives and immigrants in a rapidly evolving tech landscape.",
      author: "David L.",
      date: "Nov 05, 2025",
      readTime: "5 min read",
      tags: ["Tech", "Society"],
      featured: false,
    },
    {
      id: 3,
      title: "Community as Currency",
      excerpt:
        "Why social capital matters more than ever in the 21st century economy.",
      author: "Elena R.",
      date: "Nov 18, 2025",
      readTime: "6 min read",
      tags: ["Social Capital", "Networking"],
      featured: false,
    },
    {
      id: 4,
      title: "Sustainable Growth Models",
      excerpt:
        "Looking beyond quarterly profits to long-term community health and resilience.",
      author: "Marcus T.",
      date: "Dec 01, 2025",
      readTime: "10 min read",
      tags: ["Sustainability", "Growth"],
      featured: false,
    },
    {
      id: 5,
      title: "The Art of Mentorship",
      excerpt:
        " redefining the mentor-mentee relationship for mutual growth and impact.",
      author: "Dr. Alisha B.",
      date: "Dec 10, 2025",
      readTime: "7 min read",
      tags: ["Mentorship", "Leadership"],
      featured: false,
    },
  ];

  const featured = conversations.find((c) => c.featured);
  const others = conversations.filter((c) => !c.featured);

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
              Unfiltered{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Conversations
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed text-balance"
            >
              Candid dialogues with industry leaders and community voices
              sharing wisdom, stories, and perspectives.
            </motion.p>
          </div>

          {/* Featured Post */}
          {featured && (
            <motion.div
              variants={fadeInUp}
              className="mb-16 group relative rounded-[2.5rem] bg-card border border-border hover:border-blue-500/30 overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px]" />

              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
                <div className="flex flex-col justify-center">
                  <div className="flex gap-2 mb-4">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-medium mb-6 leading-tight group-hover:text-blue-700 dark:group-hover:text-blue-100 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-blue-500" />
                      <span>{featured.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-blue-500" />
                      <span>{featured.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  {/* Abstract Visual for Featured */}
                  <div className="relative w-full aspect-video md:aspect-square bg-gradient-to-br from-blue-900/20 to-card rounded-2xl border border-border flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <MessageCircle size={64} className="text-blue-500/50" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid of Other Conversations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {others.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-[2rem] bg-card border border-border hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md bg-muted text-[10px] text-muted-foreground uppercase tracking-widest border border-border group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-blue-500 transition-colors"
                    />
                  </div>

                  <h3 className="text-2xl font-medium mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-100 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-border text-xs text-muted-foreground uppercase tracking-widest">
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
