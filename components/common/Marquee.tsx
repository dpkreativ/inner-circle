"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  return (
    <section className="py-4 md:py-6 border-y border-white/5 bg-black/50 backdrop-blur-md relative overflow-hidden">
      <div className="flex overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-12 md:gap-24 whitespace-nowrap items-center pr-12 md:pr-24"
        >
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 md:gap-6 text-xs md:text-base font-medium text-white/40 uppercase tracking-[0.15em] hover:text-white transition-colors cursor-default"
            >
              <Sparkles size={12} className="text-brand-orange" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
