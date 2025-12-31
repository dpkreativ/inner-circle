"use client";
import { motion } from "framer-motion";
import { Tag, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function MerchPage() {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground selection:bg-brand-orange/30 font-sans pt-32 pb-20 px-6 relative"
    >
      {/* --- HEADER --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-32 text-center"
      >
        <div className="flex justify-center mb-8">
          <div className="px-4 py-1.5 rounded-full border border-border dark:border-white/10 bg-muted/50 dark:bg-white/5 backdrop-blur-xl flex items-center gap-2">
            <Tag size={12} className="text-brand-orange" />
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.2em]">
              Official Lookbook
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-8xl font-medium tracking-tighter mb-8 text-foreground">
          Wear Your <br />
          <span className="text-transparent bg-clip-text px-3 bg-gradient-to-r from-brand-orange to-brand-yellow">
            Legacy.
          </span>
        </h1>

        <p className="text-xl text-muted-foreground dark:text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
          The official uniform of the Inner Circle ecosystem. Designed for
          visibility, connection, and impact.
        </p>
      </motion.div>

      {/* --- CATEGORY: APPAREL CAROUSEL --- */}
      <CarouselSection
        title="Apparel"
        subtitle="Essential Tees"
        items={apparel}
      />

      {/* --- MID SECTION VISUAL --- */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="relative h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden bg-gradient-to-r from-card to-background dark:from-zinc-900 dark:to-black border border-border dark:border-white/5 flex items-center justify-center group">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(249,115,22,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_5s_infinite]" />

          <div className="text-center z-10">
            <Sparkles className="text-brand-orange mx-auto mb-4" size={48} />
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
              Built for the Architects.
            </h3>
          </div>
        </div>
      </section>

      {/* --- CATEGORY: HEADWEAR CAROUSEL --- */}
      <CarouselSection
        title="Headwear"
        subtitle="Signature Caps"
        items={headwear}
        isSmall
      />
    </div>
  );
}

// --- REUSABLE CAROUSEL COMPONENT (SPOTIFY STYLE OVERLAYS) ---
interface MerchItem {
  name: string;
  desc: string;
  image: string;
}

function CarouselSection({
  title,
  subtitle,
  items,
  isSmall = false,
}: {
  title: string;
  subtitle: string;
  items: MerchItem[];
  isSmall?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll Handler
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = isSmall ? 300 : 400; // Approximate card width
      const targetScroll =
        direction === "left"
          ? current.scrollLeft - scrollAmount
          : current.scrollLeft + scrollAmount;

      current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-[100vw] mb-32 relative group/carousel">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 mb-8 flex items-end justify-between border-b border-border dark:border-white/10 pb-6">
        <div className="flex flex-col">
          <h2 className="text-4xl font-medium tracking-tight text-foreground">
            {title}
          </h2>
          <span className="text-muted-foreground text-sm font-mono uppercase tracking-widest mt-2">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Carousel Container with Overlays */}
      <div className="relative">
        {/* LEFT OVERLAY BUTTON (Spotify Style) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-md border border-border dark:border-white/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl text-foreground"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Scrollable Area */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-10 px-4 md:px-12 max-w-7xl mx-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`snap-start shrink-0 ${
                isSmall ? "w-[280px]" : "w-[320px] md:w-[380px]"
              }`}
            >
              <ShowcaseCard item={item} isSmall={isSmall} />
            </div>
          ))}
        </div>

        {/* RIGHT OVERLAY BUTTON (Spotify Style) */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-md border border-border dark:border-white/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl text-foreground"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

// --- COMPONENT: WHITE SHOWCASE CARD ---
function ShowcaseCard({
  item,
  isSmall = false,
}: {
  item: MerchItem;
  isSmall?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group cursor-default select-none"
    >
      {/* WHITE CARD CONTAINER */}
      <div
        className={`relative w-full bg-[#F4F4F5] rounded-[2.5rem] overflow-hidden mb-6 ${
          isSmall ? "aspect-square" : "aspect-[4/5]"
        } flex items-center justify-center border border-border`}
      >
        {/* Subtle Inner Shadow */}
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] pointer-events-none z-10" />

        {/* Product Image */}
        <div className="relative w-[85%] h-[85%] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-2deg]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain drop-shadow-2xl"
            unoptimized
          />
        </div>
      </div>

      {/* MINIMAL TEXT */}
      <div className="px-2">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-brand-orange transition-colors">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
      </div>
    </motion.div>
  );
}

// --- DATA ---
const apparel = [
  {
    name: "Standard Tee / Blk",
    desc: "Core Black Essential",
    image: "/images/merch-tee5.png",
  },
  {
    name: "Vision Tee / Wht",
    desc: "Clean White Heavyweight",
    image: "/images/merch-tee1.png",
  },
  {
    name: "Vision Tee / Blk",
    desc: "Alternative Black Fit",
    image: "/images/merch-tee2.png",
  },
  {
    name: "Impact Tee / Org",
    desc: "Statement Color",
    image: "/images/merch-tee3.png",
  },
  {
    name: "Graphic Tee",
    desc: "Community Edition",
    image: "/images/merch-tee4.png",
  },
];

const headwear = [
  {
    name: "Legacy Cap / 01",
    desc: "Variant Black",
    image: "/images/merch-cap1.png",
  },
  {
    name: "Legacy Cap / 02",
    desc: "Variant Orange",
    image: "/images/merch-cap2.png",
  },
  {
    name: "Legacy Cap / 03",
    desc: "Variant Hybrid",
    image: "/images/merch-cap3.png",
  },
  {
    name: "Legacy Cap / 04",
    desc: "Variant Two-Tone",
    image: "/images/merch-cap4.png",
  },
  {
    name: "Legacy Cap / 05",
    desc: "Variant Bold",
    image: "/images/merch-cap5.png",
  },
  {
    name: "Legacy Cap / 06",
    desc: "Variant Classic",
    image: "/images/merch-cap6.png",
  },
  {
    name: "Legacy Cap / 07",
    desc: "Variant White",
    image: "/images/merch-cap7.png",
  },
];
