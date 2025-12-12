"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Inner Circle Connect", path: "/connect" },
  { name: "Mission", path: "/mission" },
  { name: "Organization", path: "/organization" },
  { name: "Brand Guide", path: "/brand" },
  // { name: "Logo", path: "/logo" },
  // { name: "Colors", path: "/colors" },
  // { name: "Typography", path: "/typography" },
  // { name: "Merch", path: "/merch" },
  { name: "Projects", path: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-8 md:py-6 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm transition-all duration-300">
        <Link href="/" className="relative z-50">
          {/* LOGO CONTAINER */}
          <div className="relative w-28 h-10 md:w-36 md:h-12 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo-white.png"
              alt="Inner Circle Logo"
              fill
              className="object-contain object-left"
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path} className="relative">
                <Link
                  href={item.path}
                  className={`relative z-10 text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 w-full h-[1px] bg-brand-orange"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-50 p-2 text-white hover:text-brand-orange transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center px-8"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-[100px]" />

            <ul className="relative z-10 flex flex-col gap-4">
              {navItems.map((item, i) => {
                const isActive = pathname === item.path;
                return (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.path}
                      className={`group flex items-center justify-between text-2xl font-medium tracking-tight py-2 border-b border-white/5 ${
                        isActive
                          ? "text-brand-orange"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowRight
                        size={16}
                        className={`opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${
                          isActive ? "opacity-100 translate-x-0" : ""
                        }`}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Footer info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 left-0 w-full text-center"
            >
              <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
                Inner Circle Brand Guide
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
