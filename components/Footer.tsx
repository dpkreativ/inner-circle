"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 text-sm">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* BRAND COLUMN (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-96 h-20">
                <Image
                  src="/images/logo-white.png"
                  alt="Inner Circle Logo"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-zinc-400 leading-relaxed font-light">
              Your Life Concierge for growth, clarity, and legacy. Connecting
              Trailblazers, Builders, and Legends across generations.
            </p>
            <div className="flex items-center gap-4 text-zinc-400">
              <SocialLink
                href="#"
                icon={<Instagram size={20} />}
                label="Instagram"
              />
              <SocialLink
                href="#"
                icon={<Twitter size={20} />}
                label="Twitter"
              />
              <SocialLink
                href="#"
                icon={<Linkedin size={20} />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:hello@innercircle.com"
                icon={<Mail size={20} />}
                label="Email"
              />
            </div>
          </div>

          {/* SITEMAP (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/mission">Our Mission</FooterLink>
              <FooterLink href="/organization">Organization</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
            </ul>
          </div>

          {/* COMMUNITY (3 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">
              Community
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/events">Upcoming Events</FooterLink>
              <FooterLink href="/events/inner-circle-connect">
                Inner Circle Connect
              </FooterLink>
              <FooterLink href="/events/inner-circle-connect#join">
                Join Your Band
              </FooterLink>
              <FooterLink href="/brand/merch">Merchandise store</FooterLink>
            </ul>
          </div>

          {/* NEWSLETTER (3 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">
              Stay Connected
            </h4>
            <p className="text-zinc-500 mb-4 font-light text-xs leading-relaxed">
              Receive updates on upcoming events and community stories.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 flex-grow text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all"
              />
              <button
                type="button"
                className="bg-white text-black p-2 rounded-lg hover:bg-brand-orange hover:text-white transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Inner Circle. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-zinc-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all inline-block duration-200"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="p-2 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-all duration-300"
    >
      {icon}
    </a>
  );
}
