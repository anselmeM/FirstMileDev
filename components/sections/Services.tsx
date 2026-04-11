'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animation-variants';
import {
  Code2,
  Layers,
  Database,
  Cloud,
  Users,
  BarChart3,
  Zap,
  Globe,
} from 'lucide-react';

const SERVICES = [
  {
    icon: BarChart3,
    title: 'Ad Funnel Testing',
    description:
      'We run targeted ad campaigns to validate demand before you write a single line of code. Real click, real data.',
  },
  {
    icon: Globe,
    title: 'Landing Pages',
    description:
      'High-converting landing pages that turn visitors into leads. Built to validate your specific value proposition.',
  },
  {
    icon: Code2,
    title: 'Custom Web Apps',
    description:
      'Full-stack React/Next.js applications with real databases, authentication, and payment integration.',
  },
  {
    icon: Layers,
    title: 'Frontend Development',
    description:
      'Pixel-perfect, performant UI implementation. We take design files and turn them into responsive, accessible interfaces.',
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description:
      'Scalable Node.js/Express APIs, database architecture, and integrations with third-party services.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'AWS/Vercel deployment, CI/CD pipelines, and infrastructure setup that scales with your product.',
  },
  {
    icon: Users,
    title: 'MVP Coaching',
    description:
      '1-on-1 sessions to help founders understand the technical decisions that will make or break your early product.',
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    description:
      'Ship a working prototype in days, not weeks. Validate fast and iterate based on real user feedback.',
  },
];

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerContainer;

  return (
    <section id="services" className="px-6 md:px-8 lg:px-16 py-24 md:py-32 bg-[#EFEFEF]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl uppercase-text font-headline mb-4 text-gray-900">
            How We Help
          </h2>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
            End-to-end product development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={prefersReducedMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : fadeInUp}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#FF3B3F]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FF3B3F]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF3B3F] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#FF3B3F] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-headline text-lg uppercase-text mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
