"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function SpotlightCard({
  children,
  delay = 0,
  className = "",
}: SpotlightCardProps) {
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
