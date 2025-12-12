"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-36 h-12">
                <Image
                  src="/images/logo-white.png"
                  alt="Inner Circle Logo"
                  fill={true}
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              A multi-generational ecosystem where stories, community, and
              purpose become legacy. Your Life Concierge for growth, clarity,
              and impact.
            </p>
          </div>

          {/* Navigation Sections */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              About
            </h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Brand Guide
            </h3>
            <ul className="space-y-3">
              {brandLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} Inner Circle. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mission"
              className="text-zinc-500 hover:text-white transition-colors text-xs"
            >
              Mission
            </Link>
            <Link
              href="/organization"
              className="text-zinc-500 hover:text-white transition-colors text-xs"
            >
              Organization
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Navigation Data
const aboutLinks = [
  { name: "About Us", path: "/about" },
  { name: "Mission", path: "/mission" },
  { name: "Organization", path: "/organization" },
  { name: "Projects", path: "/projects" },
];

const brandLinks = [
  { name: "Brand Overview", path: "/brand" },
  { name: "Logo", path: "/brand/logo" },
  { name: "Colors", path: "/brand/colors" },
  { name: "Typography", path: "/brand/typography" },
  { name: "Merchandise", path: "/brand/merch" },
];

const connectLinks = [
  { name: "Inner Circle Connect", path: "/connect" },
  { name: "Join Your Band", path: "/connect#join" },
  { name: "Register for Event", path: "/connect#register" },
];
