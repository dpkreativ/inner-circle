"use client";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { Copy, Check, Palette } from "lucide-react";
import { useState } from "react";

export default function ColorsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-orange/30 font-sans pt-24 md:pt-32 pb-20 px-4 md:px-6">
      {/* --- HEADER --- */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto mb-16 md:mb-24 text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="flex justify-center mb-6 md:mb-8"
        >
          <div className="px-3 py-1.5 md:px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-2">
            <Palette size={12} className="text-brand-orange" />
            <span className="text-brand-orange text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
              Brand Palette
            </span>
          </div>
        </motion.div>

        {/* Responsive Typography: 4xl mobile -> 7xl desktop */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-7xl font-medium tracking-tighter mb-6 md:mb-8 leading-tight"
        >
          Energy &{" "}
          <span className="text-transparent bg-clip-text px-3 bg-gradient-to-r from-brand-orange to-brand-yellow">
            Enlightenment.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Our colors represent the journey of our members. From the grounding
          passion of orange to the clarity and innovation of yellow.
        </motion.p>
      </motion.div>

      {/* --- PRIMARY GRADIENT SECTION --- */}
      <section className="max-w-7xl mx-auto mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-80 md:h-96 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br md:bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange bg-[length:200%_auto] animate-gradient" />

          {/* Labels: Stacked on Mobile, Inline on Desktop */}
          <div className="absolute inset-0 flex flex-col md:flex-row justify-between p-8 md:px-20 md:items-center">
            <div className="text-black/80 font-bold text-xl md:text-3xl tracking-tight md:tracking-widest uppercase mix-blend-overlay text-left">
              Deep <br className="md:hidden" /> Tangerine
            </div>

            <div className="hidden md:block h-[1px] flex-grow bg-black/20 mx-8 mix-blend-overlay" />

            <div className="text-black/80 font-bold text-xl md:text-3xl tracking-tight md:tracking-widest uppercase mix-blend-overlay text-right md:text-left">
              Sunburst <br className="md:hidden" /> Yellow
            </div>
          </div>
        </motion.div>

        {/* Meaning Cards */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="p-6 md:p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5">
            <h3 className="text-brand-orange font-bold uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4">
              Meaning
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              The deep orange symbolizes the grounding passion and raw potential
              of our members. It is the spark of connection and the warmth of
              community.
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5">
            <h3 className="text-brand-yellow font-bold uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4">
              Meaning
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              The transition to bright yellow signifies clarity, innovation, and
              &ldquo;light bulb moments.&rdquo; It represents the dawn of a new
              generation of leaders.
            </p>
          </div>
        </div>
      </section>

      {/* --- COLOR SWATCHES GRID --- */}
      <section className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12 flex items-center gap-4">
          <div className="w-1 h-6 md:h-8 bg-white" />
          <h2 className="text-2xl md:text-3xl font-medium">Utility Palette</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {colors.map((color, index) => (
            <ColorCard key={index} color={color} delay={index * 0.1} />
          ))}
        </div>
      </section>
    </div>
  );
}

// --- COLOR CARD COMPONENT ---
interface ColorData {
  name: string;
  usage: string;
  hex: string;
  rgb: string;
  cmyk: string;
}

function ColorCard({ color, delay }: { color: ColorData; delay: number }) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-zinc-900 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-colors duration-500"
    >
      {/* Color Preview Area */}
      <div
        className="h-40 md:h-48 w-full relative transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundColor: color.hex }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Color Details */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-medium mb-1">{color.name}</h3>
        <p className="text-zinc-500 text-xs md:text-sm mb-6">{color.usage}</p>

        <div className="space-y-2 md:space-y-3">
          {/* HEX ROW */}
          <button
            onClick={() => handleCopy(color.hex, "HEX")}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-black border border-white/10 hover:bg-white/5 hover:border-white/30 transition-all group/btn active:scale-95"
          >
            <span className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase">
              HEX
            </span>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono text-xs md:text-sm">
                {color.hex}
              </span>
              {copied === "HEX" ? (
                <Check size={14} className="text-green-500" />
              ) : (
                <Copy
                  size={14}
                  className="text-zinc-600 group-hover/btn:text-white"
                />
              )}
            </div>
          </button>

          {/* RGB ROW */}
          <button
            onClick={() => handleCopy(color.rgb, "RGB")}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-black border border-white/10 hover:bg-white/5 hover:border-white/30 transition-all group/btn active:scale-95"
          >
            <span className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase">
              RGB
            </span>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono text-xs md:text-sm">
                {color.rgb}
              </span>
              {copied === "RGB" ? (
                <Check size={14} className="text-green-500" />
              ) : (
                <Copy
                  size={14}
                  className="text-zinc-600 group-hover/btn:text-white"
                />
              )}
            </div>
          </button>

          {/* CMYK ROW */}
          <button
            onClick={() => handleCopy(color.cmyk, "CMYK")}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-black border border-white/10 hover:bg-white/5 hover:border-white/30 transition-all group/btn active:scale-95"
          >
            <span className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase">
              CMYK
            </span>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono text-xs md:text-sm">
                {color.cmyk}
              </span>
              {copied === "CMYK" ? (
                <Check size={14} className="text-green-500" />
              ) : (
                <Copy
                  size={14}
                  className="text-zinc-600 group-hover/btn:text-white"
                />
              )}
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// --- COLOR DATA ---
const colors = [
  {
    name: "Deep Tangerine",
    usage: "Primary Brand Color",
    hex: "#F97316",
    rgb: "249, 115, 22",
    cmyk: "0, 54, 91, 2",
  },
  {
    name: "Sunburst Yellow",
    usage: "Highlight & Accent",
    hex: "#EAB308",
    rgb: "234, 179, 8",
    cmyk: "0, 24, 97, 8",
  },
  {
    name: "Void Black",
    usage: "Backgrounds",
    hex: "#050505",
    rgb: "5, 5, 5",
    cmyk: "0, 0, 0, 98",
  },
  {
    name: "Pure White",
    usage: "Typography",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    cmyk: "0, 0, 0, 0",
  },
];
