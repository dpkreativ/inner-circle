"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  name: string;
  path: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Projects", path: "/projects" },
  {
    name: "Brand Guide",
    path: "/brand",
    children: [
      { name: "Logo", path: "/brand/logo" },
      { name: "Colors", path: "/brand/colors" },
      { name: "Typography", path: "/brand/typography" },
      { name: "Merch", path: "/brand/merch" },
    ],
  },
  { name: "Inner Circle Connect", path: "/connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
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
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-8 md:py-6 flex justify-between items-center bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm transition-all duration-300">
        <Link href="/" className="relative z-50">
          {/* LOGO CONTAINER */}
          <div className="relative w-28 h-10 md:w-36 md:h-12 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo-white.png"
              alt="Inner Circle Logo"
              fill={true}
              className="object-contain object-left invert dark:invert-0"
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive =
              pathname === item.path || pathname.startsWith(item.path + "/");
            const hasChildren = item.children && item.children.length > 0;

            return (
              <li
                key={item.path}
                className="relative"
                onMouseEnter={() => hasChildren && setActiveDropdown(item.name)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  className={`relative z-10 text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {hasChildren && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                {isActive && !hasChildren && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 w-full h-[1px] bg-brand-orange"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* DROPDOWN MENU */}
                {hasChildren && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 min-w-[200px] bg-popover/95 backdrop-blur-md border border-border rounded-2xl overflow-hidden shadow-2xl"
                      >
                        {item.children!.map((child) => {
                          const isChildActive = pathname === child.path;
                          return (
                            <Link
                              key={child.path}
                              href={child.path}
                              className={`block px-6 py-3 text-sm transition-colors ${
                                isChildActive
                                  ? "bg-brand-orange/10 text-brand-orange"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                              }`}
                            >
                              {child.name}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-50 p-2 text-foreground hover:text-brand-orange transition-colors"
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
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center px-8"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-brand-orange/10 rounded-full blur-[100px]" />

            <ul className="relative z-10 flex flex-col gap-2">
              {navItems.map((item, i) => {
                const isActive =
                  pathname === item.path ||
                  pathname.startsWith(item.path + "/");
                const hasChildren = item.children && item.children.length > 0;

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
                          : "text-muted-foreground hover:text-foreground"
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

                    {/* MOBILE SUB-ITEMS */}
                    {hasChildren && (
                      <ul className="ml-4 mt-2 space-y-1">
                        {item.children!.map((child) => {
                          const isChildActive = pathname === child.path;
                          return (
                            <li key={child.path}>
                              <Link
                                href={child.path}
                                className={`block text-sm py-2 px-4 rounded-lg transition-colors ${
                                  isChildActive
                                    ? "bg-brand-orange/10 text-brand-orange"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                }`}
                              >
                                {child.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </motion.li>
                );
              })}
              <div className="relative z-10 mt-6 px-4">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </ul>

            {/* Footer info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 left-0 w-full text-center"
            >
              <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest">
                Inner Circle Brand Guide
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
