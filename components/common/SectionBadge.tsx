"use client";

import { motion } from "framer-motion";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`px-3 py-1.5 md:px-4 md:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}
    >
      <span className="text-brand-orange text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
        {children}
      </span>
    </div>
  );
}
