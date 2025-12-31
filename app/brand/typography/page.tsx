"use client";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import { Info } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

// Load Montserrat Font via Next.js
const montserrat = Montserrat({ subsets: ["latin"] });

export default function TypographyPage() {
  // State for the Type Tester
  const [text, setText] = useState("The Radiant Ecosystem.");
  const [fontSize, setFontSize] = useState(64);

  return (
    <div
      className={`min-h-screen bg-[#050505] text-white selection:bg-brand-orange/30 ${montserrat.className} pt-24 md:pt-32 pb-20 px-4 md:px-6`}
    >
      {/* --- HEADER --- */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto mb-16 md:mb-24"
      >
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-3 mb-6"
        >
          <div className="px-3 py-1.5 md:px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
            <span className="text-brand-orange text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Primary Typeface
            </span>
          </div>
        </motion.div>

        {/* Responsive Header Size */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-9xl font-bold tracking-tighter mb-8 md:mb-12 break-words"
        >
          Montserrat<span className="text-brand-orange">.</span>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
        >
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            A geometric sans-serif type family that balances urban functionality
            with humanist warmth. It is the voice of the Inner Circle—confident,
            modern, and deeply connected.
          </p>
          <div className="flex flex-wrap gap-6 md:gap-8 border-t border-white/10 pt-6">
            <div>
              <span className="block text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-1">
                Designer
              </span>
              <span className="text-white font-medium text-sm md:text-base">
                Julieta Ulanovsky
              </span>
            </div>
            <div>
              <span className="block text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-1">
                Classification
              </span>
              <span className="text-white font-medium text-sm md:text-base">
                Geometric Sans
              </span>
            </div>
            <div>
              <span className="block text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-1">
                Origin
              </span>
              <span className="text-white font-medium text-sm md:text-base">
                Buenos Aires
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* --- THE STORY (Buenos Aires) --- */}
      <section className="max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="relative rounded-[2rem] md:rounded-[3rem] bg-zinc-900/50 border border-white/5 p-8 md:p-16 overflow-hidden group">
          <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-orange/5 rounded-full blur-[80px] md:blur-[120px] group-hover:bg-brand-orange/10 transition-colors duration-700" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Info size={20} className="md:w-6 md:h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Born in the Streets
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
                The old posters and signs in the traditional Montserrat
                neighborhood of Buenos Aires inspired this typeface. As urban
                development changed the face of the city, these designs were
                lost. This font rescues the beauty of urban typography from the
                first half of the 20th century.
              </p>
              <div className="flex items-center gap-2 text-brand-orange font-bold text-xs md:text-sm uppercase tracking-widest">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-orange animate-pulse" />
                Urban Heritage
              </div>
            </div>
            <div className="h-full flex items-center justify-center py-10 md:py-0">
              {/* Scaled down "Aa" for mobile */}
              <div className="text-[10rem] md:text-[18rem] font-black leading-none opacity-5 select-none tracking-tighter">
                Aa
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE TYPE TESTER --- */}
      <section className="max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Type Tester</h2>
          {/* Controls hidden on very small screens to save space, or stack them */}
          <div className="flex items-center gap-2 md:gap-4 bg-zinc-900 rounded-full p-1.5 md:p-2 border border-white/10 w-fit">
            <button
              onClick={() => setFontSize(32)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                fontSize === 32
                  ? "bg-white text-black"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              S
            </button>
            <button
              onClick={() => setFontSize(64)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                fontSize === 64
                  ? "bg-white text-black"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              M
            </button>
            <button
              onClick={() => setFontSize(96)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all ${
                fontSize === 96
                  ? "bg-white text-black"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              L
            </button>
          </div>
        </div>

        <div className="w-full bg-zinc-900/30 border border-white/10 rounded-[2rem] p-8 md:p-16 min-h-[250px] md:min-h-[300px] flex flex-col relative overflow-hidden">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-transparent border-none outline-none text-white font-bold w-full h-full z-10 placeholder-zinc-700 break-words whitespace-normal"
            // Responsive Font Size Logic applied via style
            style={{
              fontSize: `clamp(32px, ${fontSize}px, 12vw)`,
              lineHeight: 1.1,
            }}
            placeholder="Type something..."
          />
          <div className="mt-auto pt-8 md:pt-12 flex justify-between text-zinc-600 font-mono text-[10px] md:text-xs uppercase tracking-widest">
            <span>{fontSize}px</span>
            <span>Montserrat Bold</span>
          </div>
        </div>
      </section>

      {/* --- HIERARCHY & USAGE --- */}
      <section className="max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Hierarchy Guide
          </h2>
          <p className="text-zinc-400 text-sm md:text-base">
            Standardizing our voice across digital and print.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden">
          {/* H1 */}
          <div className="bg-[#0A0A0A] p-8 md:p-12 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start md:items-center">
            <div className="md:col-span-1">
              <span className="text-brand-orange font-mono text-[10px] md:text-xs uppercase block">
                H1 / Hero
              </span>
              <p className="text-zinc-500 text-[10px] md:text-xs mt-1">
                text-6xl to text-8xl / Bold
              </p>
            </div>
            <div className="md:col-span-3">
              <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none">
                Become Legacy.
              </h1>
            </div>
          </div>

          {/* H2 */}
          <div className="bg-[#0A0A0A] p-8 md:p-12 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start md:items-center">
            <div className="md:col-span-1">
              <span className="text-brand-orange font-mono text-[10px] md:text-xs uppercase block">
                H2 / Section
              </span>
              <p className="text-zinc-500 text-[10px] md:text-xs mt-1">
                text-4xl to text-5xl / Medium
              </p>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-5xl font-medium tracking-tight">
                Our Core Identity
              </h2>
            </div>
          </div>

          {/* H3 */}
          <div className="bg-[#0A0A0A] p-8 md:p-12 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start md:items-center">
            <div className="md:col-span-1">
              <span className="text-brand-orange font-mono text-[10px] md:text-xs uppercase block">
                H3 / Card Title
              </span>
              <p className="text-zinc-500 text-[10px] md:text-xs mt-1">
                text-2xl / Bold
              </p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl md:text-2xl font-bold">
                Community Growth
              </h3>
            </div>
          </div>

          {/* BODY */}
          <div className="bg-[#0A0A0A] p-8 md:p-12 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start md:items-center">
            <div className="md:col-span-1">
              <span className="text-brand-orange font-mono text-[10px] md:text-xs uppercase block">
                P / Body
              </span>
              <p className="text-zinc-500 text-[10px] md:text-xs mt-1">
                text-lg / Light / Relaxed
              </p>
            </div>
            <div className="md:col-span-3">
              <p className="text-sm md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
                Inner Circle is not just a community; it is a creative platform
                and legacy-building social impact engine. We bridge generations
                through storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WEIGHTS SHOWCASE --- */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: "Light", weight: "font-light" },
            { name: "Regular", weight: "font-normal" },
            { name: "Medium", weight: "font-medium" },
            { name: "SemiBold", weight: "font-semibold" },
            { name: "Bold", weight: "font-bold" },
          ].map((w) => (
            <div
              key={w.name}
              className="aspect-square rounded-[1.5rem] md:rounded-3xl bg-zinc-900 border border-white/5 flex flex-col items-center justify-center hover:border-brand-orange/50 transition-colors group"
            >
              <span
                className={`text-3xl md:text-5xl ${w.weight} mb-2 group-hover:scale-110 transition-transform`}
              >
                Aa
              </span>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">
                {w.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
