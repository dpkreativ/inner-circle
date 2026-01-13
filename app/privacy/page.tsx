"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";

export default function PrivacyPage() {
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
            Privacy <span className="text-brand-orange">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Your trust is our foundation. How we protect and manage your data.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-12">
          <Section title="1. Introduction">
            <p>
              Welcome to Inner Circle. We respect your privacy and are committed
              to protecting your personal data. This privacy policy will inform
              you as to how we look after your personal data when you visit our
              website and participate in our community, and tell you about your
              privacy rights and how the law protects you.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-brand-orange">
              <li>
                <strong>Identity Data</strong> includes first name, last name,
                username or similar identifier, and date of birth (for
                Generational Tier placement).
              </li>
              <li>
                <strong>Contact Data</strong> includes email address and
                telephone numbers.
              </li>
              <li>
                <strong>Profile Data</strong> includes your interests,
                preferences, feedback and survey responses, and community
                contributions.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you
                use our website and services.
              </li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-brand-orange">
              <li>
                To register you as a new member of the Inner Circle community.
              </li>
              <li>
                To facilitate community connections and mentorship matching
                based on your Generational Tier.
              </li>
              <li>
                To manage our relationship with you, including notifying you
                about changes to our terms or privacy policy.
              </li>
              <li>
                To protect our community and ensure a safe, respectful
                environment for all members.
              </li>
            </ul>
          </Section>

          <Section title="4. Data Security">
            <p>
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors and other third parties who have a business need to
              know.
            </p>
          </Section>

          <Section title="5. Contact Us">
            <p>
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:{" "}
              <a
                href="mailto:privacy@innercircle.com"
                className="text-brand-orange hover:underline"
              >
                privacy@innercircle.com
              </a>
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
