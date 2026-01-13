"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";

export default function TermsPage() {
  return (
    <main className="bg-background min-h-screen text-foreground overflow-hidden selection:bg-brand-orange/30 pt-32 pb-20">
      <AnimatedBackground />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        <motion.div variants={fadeInUp} className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Terms of <span className="text-brand-orange">Service</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Guidelines for our community of Trailblazers, Builders, and Legends.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-12">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the Inner Circle website and services, you
              agree to be bound by these Terms of Service and all applicable
              laws and regulations. If you do not agree with any of these terms,
              you are prohibited from using or accessing this site.
            </p>
          </Section>

          <Section title="2. Community Guidelines">
            <p>
              Inner Circle is a multi-generational community built on respect,
              wisdom, and shared growth. As a member, you agree to:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-brand-orange">
              <li>
                Respect all members regardless of their Generational Tier or
                background.
              </li>
              <li>
                Engage in constructive dialogue and mentorship in good faith.
              </li>
              <li>Not post unauthorized commercial communications (spam).</li>
              <li>
                Not collect users' content or information, or otherwise access
                Inner Circle, using automated means (such as harvesting bots,
                robots, spiders, or scrapers) without our prior permission.
              </li>
            </ul>
          </Section>

          <Section title="3. Intellectual Property">
            <p>
              The content, organization, graphics, design, compilation, magnetic
              translation, digital conversion and other matters related to the
              Site are protected under applicable copyrights, trademarks and
              other proprietary (including but not limited to intellectual
              property) rights. The copying, redistribution, use or publication
              by you of any such matters or any part of the Site, except as
              allowed by these Terms, is strictly prohibited.
            </p>
          </Section>

          <Section title="4. Legacy Content">
            <p>
              By posting content to Inner Circle (stories, lessons, legacy
              documents), you grant us a non-exclusive, transferable,
              sub-licensable, royalty-free, worldwide license to use any IP
              content that you post on or in connection with Inner Circle. This
              allows us to preserve your legacy within the community ecosystem
              as intended by the platform's mission.
            </p>
          </Section>

          <Section title="5. Disclaimer">
            <p>
              The materials on Inner Circle's website are provided on an 'as is'
              basis. Inner Circle makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </Section>

          <div className="pt-8 border-t border-border text-sm text-muted-foreground text-center">
            Last updated: January 2026
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="p-8 rounded-[2rem] bg-card border border-border/50 hover:border-brand-orange/20 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 text-foreground">{title}</h2>
      <div className="text-muted-foreground leading-relaxed font-light space-y-4">
        {children}
      </div>
    </section>
  );
}
