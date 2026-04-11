'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Accordion from '@/components/ui/Accordion';

const FAQ_ITEMS = [
  {
    question: 'Why validate before building?',
    answer:
      'Development is expensive. Marketing a product nobody wants is even more expensive. By spending a small amount on validation (ads + landing page), we save you thousands of dollars and months of time.',
  },
  {
    question: 'What tech stack do you use?',
    answer:
      'For MVPs (Phase 2), we use advanced low-code tools like Bubble, FlutterFlow, or Webflow + Wized. For Scaled Apps (Phase 3), we build custom using the PERN stack (PostgreSQL, Express, React, Node.js) or Next.js.',
  },
  {
    question: 'Do I own the code?',
    answer:
      'Absolutely. Once the project is paid for, you own 100% of the IP, code, and design assets. We are your partners, not your landlords.',
  },
  {
    question: 'How long does an MVP take?',
    answer:
      'Phase 1 validation takes 2 weeks. Phase 2 MVP takes 4-6 weeks. Phase 3 custom builds vary by scope, but we ship fast without cutting corners.',
  },
  {
    question: "What's included in the Launchpad MVP?",
    answer:
      'User authentication, real database integration, Stripe payments, mobile-responsive design, and deployment. Everything you need to get your first 100 users.',
  },
  {
    question: 'Can you work with an existing codebase?',
    answer:
      'Yes. We offer technical due diligence, code audits, and strategic consulting to help you understand what you have and what you need.',
  },
  {
    question: 'What if my idea is at an early stage?',
    answer:
      'Perfect — that is exactly who we built this process for. Our Phase 1 validation is designed to help early-stage founders test their assumptions before investing heavily.',
  },
];

export default function FAQ() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" className="px-6 md:px-8 lg:px-16 py-20 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl uppercase-text font-headline mb-12 text-center"
        >
          Common Questions
        </motion.h2>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion items={FAQ_ITEMS} />
        </motion.div>
      </div>
    </section>
  );
}
