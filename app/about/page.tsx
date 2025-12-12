"use client";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { SpotlightCard } from "@/components/cards/SpotlightCard";
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
  HeartHandshake,
  Video,
  TrendingUp,
  UserPlus,
  Activity,
  Anchor,
  Megaphone,
  Eye,
  Globe,
} from "lucide-react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-brand-orange/30">
      {/* --- HERO: THE PROBLEM STATEMENT --- */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background noise for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="text-zinc-400 text-xs font-medium uppercase tracking-[0.2em]">
                The Context
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8 leading-[1.1]"
          >
            Why We Are Here.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto mb-20 leading-relaxed"
          >
            We live in an era of unprecedented connectivity, yet we have never
            felt more alone. People today face a crisis of{" "}
            <span className="text-white font-normal">disconnection</span>.
          </motion.p>

          {/* THE 5 PROBLEMS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 ${item.color}`}
                >
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- TRANSITION: THE BRIDGE --- */}
      <div className="flex justify-center py-10 opacity-20">
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
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight mb-8">
              To <span className="text-brand-orange">bridge</span> generations.
            </h2>
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed border-l-2 border-brand-orange/30 pl-8">
              Providing access, mentorship, opportunities, and belonging that{" "}
              <span className="text-white font-normal">transcend time</span>.
            </p>
          </motion.div>

          {/* VISION SIDE */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-white/10"
          >
            <span className="text-brand-yellow font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
              Our Vision
            </span>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              To build a global, multi-generational community that sustains
              itself financially, socially, and culturally.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] flex-grow bg-white/10" />
              <span className="text-white text-lg font-medium">
                Leaving a lasting impact.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- THE SOLUTION PILLARS --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-zinc-500 uppercase tracking-[0.3em] text-xs mb-16">
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
                className="group relative p-6 rounded-[2rem] border border-white/5 hover:border-brand-orange/30 hover:bg-white/5 transition-all duration-500 cursor-default flex flex-col justify-center items-center h-48"
              >
                <h4 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-transparent bg-clip-text px-3 bg-gradient-to-b from-white to-zinc-500 group-hover:to-white transition-all duration-500 w-full overflow-visible">
                  {item.word}
                  <span className="text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    .
                  </span>
                </h4>
                <p className="mt-4 text-zinc-500 text-sm font-light opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR VALUES --- */}
      <section className="pt-20 pb-40 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-medium tracking-tight mb-4">
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
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
                className={`p-8 rounded-[2rem] border border-white/5 bg-zinc-900/20 flex flex-col items-center text-center group ${
                  val.wide ? "md:col-span-2" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-brand-yellow group-hover:bg-brand-yellow/10 transition-all duration-500">
                  <val.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {val.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HEADER --- */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto mb-16 md:mb-24 text-center relative z-10"
      >
        <motion.div
          variants={fadeInUp}
          className="flex justify-center mb-6 md:mb-8"
        >
          <div className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
            <span className="text-brand-orange text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Organizational Structure
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-7xl font-medium tracking-tighter mb-6 md:mb-8 leading-tight"
        >
          The Engine <span className="text-zinc-500">&</span> <br />
          <span className="text-transparent bg-clip-text px-3 bg-gradient-to-r from-brand-orange to-brand-yellow">
            The Architects.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed"
        >
          A strong leadership backbone ensures coordination, community building,
          and content excellence.
        </motion.p>
      </motion.div>

      {/* --- SECTION 1: THE TRIAD (COMPANIES) --- */}
      <section className="max-w-7xl mx-auto mb-24 md:mb-40 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-4 mb-8 md:mb-12"
        >
          <div className="w-1 h-6 md:h-8 bg-brand-orange" />
          <h2 className="text-2xl md:text-3xl font-medium">
            The Ecosystem Triad
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {companies.map((company, i) => (
            <SpotlightCard key={i} delay={i * 0.1}>
              {/* LOGO PLATE */}
              <div className="relative w-full h-32 md:h-40 mb-6 md:mb-8 rounded-2xl md:rounded-3xl bg-white flex items-center justify-center p-4 md:p-6 group-hover:scale-[1.02] transition-transform duration-500 shadow-lg">
                <div className="relative w-full h-full">
                  <Image
                    src={company.logo}
                    alt={company.title}
                    fill={true}
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>

              <span className="text-zinc-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-2 block">
                Entity 0{i + 1}
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                {company.title}
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-grow">
                {company.desc}
              </p>

              <div className="pt-6 md:pt-8 border-t border-white/5">
                <span className="text-[10px] md:text-xs font-bold uppercase text-white/50 mb-3 block">
                  Focus Areas
                </span>
                <div className="flex flex-wrap gap-2">
                  {company.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 md:px-3 rounded-full bg-white/5 text-[10px] uppercase tracking-wider text-zinc-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* --- VISUAL DIVIDER --- */}
      <div className="max-w-7xl mx-auto py-6 md:py-10 flex items-center justify-center relative z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* --- SECTION 2: LEADERSHIP TEAM --- */}
      <section className="max-w-7xl mx-auto mb-24 md:mb-32 relative z-10">
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            <div className="w-1 h-6 md:h-8 bg-brand-yellow" />
            <div>
              <h2 className="text-2xl md:text-3xl font-medium">
                The Leadership Core
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm mt-1">
                Visionaries & Strategists
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {team.map((member, i) => (
            <SpotlightCard key={i} delay={i * 0.1} className="h-full">
              <div className="flex flex-col h-full">
                {/* HEADER */}
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <span
                    className={`px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest border ${
                      member.tag === "Co-Founder"
                        ? "bg-brand-orange/10 text-brand-orange border-brand-orange/20"
                        : "bg-white/5 text-zinc-400 border-white/10 group-hover:text-white group-hover:border-white/20 transition-colors"
                    }`}
                  >
                    {member.tag}
                  </span>
                  <member.icon
                    size={18}
                    className="text-zinc-700 group-hover:text-brand-yellow transition-colors duration-300 md:w-5 md:h-5"
                  />
                </div>

                {/* BODY */}
                <div className="mb-4 md:mb-6">
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-1 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-brand-yellow text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>

                {/* FOOTER: Bullet Points */}
                <div className="mt-auto border-t border-white/5 pt-4 md:pt-6">
                  <ul className="space-y-2 md:space-y-3">
                    {member.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs md:text-sm text-zinc-400 font-light leading-snug group-hover:text-zinc-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/50 mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: THE AMBASSADOR NETWORK --- */}
      <section className="max-w-7xl mx-auto mb-24 md:mb-40 relative z-10">
        <div className="mb-8 md:mb-12 flex items-center gap-4">
          <div className="w-1 h-6 md:h-8 bg-white" />
          <div>
            <h2 className="text-2xl md:text-3xl font-medium">
              The Ambassadors
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm mt-1">
              Tier & Regional Leads
            </p>
          </div>
        </div>

        <SpotlightCard className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-2 md:p-4">
            {/* Description Side */}
            <div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4 md:mb-6 text-brand-orange">
                <Globe size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium mb-3 md:mb-4">
                The Extension of the Core.
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                Ambassadors are the vital link between the leadership and the
                community. They represent Inner Circle across regions, driving
                participation and growth on the ground.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Regional Leads", "Tier Leads", "Mentors", "Hosts"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 md:px-3 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs uppercase tracking-widest text-zinc-400"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Responsibilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ambassadorDuties.map((duty, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-brand-orange/20 transition-colors"
                >
                  <duty.icon
                    size={18}
                    className="text-brand-yellow mb-3 md:w-5 md:h-5"
                  />
                  <h4 className="text-xs md:text-sm font-bold text-white mb-1">
                    {duty.title}
                  </h4>
                  <p className="text-[10px] md:text-xs text-zinc-500">
                    {duty.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </section>
    </main>
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

// --- DATA: COMPANIES ---
const companies = [
  {
    title: "Inner Circle Community",
    desc: "The heart of the ecosystem. Focused on membership, events, ambassadors, and building genuine connection.",
    logo: "/images/logo-white.png",
    tags: ["Membership", "Events", "Community"],
  },
  {
    title: "CircleWorks Consulting",
    desc: "The business engine. Handles monetization, sponsorships, trainings, and business development.",
    logo: "/images/logo-consulting.png",
    tags: ["Monetization", "Training", "Biz Dev"],
  },
  {
    title: "Inner Circle Legacy",
    desc: "The soul of the brand. CSR, impact, SDG-driven initiatives, and empowerment projects.",
    logo: "/images/logo-legacy.png",
    tags: ["CSR", "Impact", "Empowerment"],
  },
];

// --- DATA: LEADERSHIP ---
const team = [
  {
    name: "Nnene",
    role: "Strategic Director",
    tag: "Co-Founder",
    icon: Eye,
    points: [
      "Chief Vision Architect setting direction & mission.",
      "Leads governance, values, and alignment.",
      "Approves partnerships and major collaborations.",
      "Drives long-term sustainability.",
    ],
  },
  {
    name: "Nonso",
    role: "Production Director",
    tag: "Co-Founder",
    icon: Video,
    points: [
      "Creative Vision Lead for all visual output.",
      "Directs production, podcasts, and reels via Paragon Studios.",
      "Ensures brand identity and quality control.",
      "Builds scalable content systems for monetization.",
    ],
  },
  {
    name: "Paul",
    role: "Lead Ambassador",
    tag: "Community",
    icon: Megaphone,
    points: [
      "Community Energizer driving generational unity.",
      "Leads ambassadors across tiers and regions.",
      "Hosts engagements and meetups to build belonging.",
    ],
  },
  {
    name: "Fred",
    role: "Operations Lead",
    tag: "Execution",
    icon: Anchor,
    points: [
      "Physical Engagement Architect for events.",
      "Creates run sheets, logistics plans, and readiness structures.",
      "Ensures high-quality 'Inner Circle standard' experiences.",
    ],
  },
  {
    name: "Ani",
    role: "Finance & Revenue",
    tag: "Growth",
    icon: TrendingUp,
    points: [
      "Financial Strategist developing revenue models.",
      "Oversees budgets, approvals, and financial controls.",
      "Manages ERP financial modules and reporting.",
    ],
  },
  {
    name: "Haoma",
    role: "Operations Interface",
    tag: "Alignment",
    icon: Activity,
    points: [
      "Cross-Entity Alignment Lead bridging all companies.",
      "Manages communication, updates, and deliverables.",
      "Tracks tasks and alignment between teams.",
    ],
  },
  {
    name: "TBA",
    role: "Marketing Lead",
    tag: "TBA",
    icon: Users,
    points: [
      "Brand Visibility Builder leading social strategy.",
      "Drives paid ads, campaigns, and engagement funnels.",
      "Secures sponsorships and brand partnerships.",
    ],
  },
  {
    name: "TBA",
    role: "Admin & HR",
    tag: "TBA",
    icon: UserPlus,
    points: [
      "People Systems Lead overseeing onboarding.",
      "Manages internal communication and scheduling.",
      "Supports culture and compliance documentation.",
    ],
  },
];

// --- DATA: AMBASSADOR DUTIES ---
const ambassadorDuties = [
  {
    title: "Lead Generations",
    desc: "Manage generation-specific circles and tier activities.",
    icon: Users,
  },
  {
    title: "Host Engagements",
    desc: "Organize meetups, mentorship sessions, and activities.",
    icon: HeartHandshake,
  },
  {
    title: "Gather Content",
    desc: "Collect stories, experiences, and content moments.",
    icon: Video,
  },
  {
    title: "Drive Growth",
    desc: "Drive participation and membership expansion.",
    icon: TrendingUp,
  },
];
