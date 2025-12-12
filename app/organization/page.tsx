"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Eye,
  Video,
  Megaphone,
  Anchor,
  TrendingUp,
  Activity,
  Users,
  UserPlus,
  Globe,
  HeartHandshake,
} from "lucide-react";
import Image from "next/image";
import { MouseEvent } from "react";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function OrganizationPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-orange/30 font-sans pt-24 md:pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* --- BLUEPRINT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px]" />
      </div>

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
                    fill
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
    </div>
  );
}

// --- SPOTLIGHT CARD COMPONENT ---
function SpotlightCard({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onMouseMove={handleMouseMove}
      className={`group relative border border-white/10 bg-zinc-900/30 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 hover:border-white/20 transition-colors duration-500 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] md:rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 115, 22, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

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
