'use client';

import { motion } from 'framer-motion';
import { BarChart3, Layout, FileText, Users, Database, CreditCard, Smartphone, Code2, Server, Shield } from 'lucide-react';

const TIERS = [
  {
    id: 'validation',
    phase: 'Phase 1',
    name: 'Market Proof',
    price: '$2,000',
    tag: 'Validation',
    tagColor: 'bg-green-50 text-green-700 border-green-100',
    badge: null,
    badgeText: '',
    description: "Don't build until you know they'll buy. We validate your concept with real data before writing code.",
    turnaround: 'Fast Turnaround (2 Weeks)',
    turnaroundColor: 'text-green-700 bg-green-50 border-green-100',
    features: [
      { icon: BarChart3, text: 'Ad Funnel Testing' },
      { icon: Layout, text: 'Landing Page Creation' },
      { icon: FileText, text: 'Viability Report' },
    ],
    cta: 'Start Validation',
    ctaStyle: 'outline',
    popular: false,
  },
  {
    id: 'mvp',
    phase: 'Phase 2',
    name: 'Launchpad MVP',
    price: '$5,000',
    tag: 'Most Popular',
    tagColor: 'bg-black text-white',
    badge: true,
    badgeText: 'Most Popular',
    description: "Get your first 100 users. We build a functional, beautiful product using high-performance Low-Code tools to save time.",
    turnaround: '4-6 Week Turnaround',
    turnaroundColor: 'text-gray-500',
    features: [
      { icon: Users, text: 'User Authentication' },
      { icon: Database, text: 'Real Database Integration' },
      { icon: CreditCard, text: 'Stripe Payments' },
      { icon: Smartphone, text: 'Mobile Responsive' },
    ],
    cta: 'Build My MVP',
    ctaStyle: 'primary',
    popular: true,
  },
  {
    id: 'scale',
    phase: 'Phase 3',
    name: 'Custom Scale',
    price: 'Custom',
    tag: 'Scaling',
    tagColor: 'bg-gray-100 text-gray-500',
    badge: null,
    badgeText: '',
    description: 'Ready to handle thousands of users? We migrate your MVP to a scalable custom architecture (PERN Stack).',
    turnaround: 'Long-term Partnership',
    turnaroundColor: 'text-gray-500',
    features: [
      { icon: Code2, text: 'React/Node.js Custom Code' },
      { icon: Server, text: 'AWS/Cloud Architecture' },
      { icon: Shield, text: 'Advanced Security' },
    ],
    cta: "Let's Scale",
    ctaStyle: 'outline',
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 md:px-8 lg:px-16 py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h2
          className="text-4xl md:text-6xl uppercase-text mb-4 font-headline text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The Roadmap
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 uppercase font-bold tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          De-risking your development journey
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {TIERS.map((tier) => (
          <motion.div
            key={tier.id}
            variants={cardVariants}
            className={`
              relative rounded-xl flex flex-col bg-white p-8 transition-all duration-300
              ${tier.popular
                ? 'border-2 border-gray-900 shadow-2xl transform md:-translate-y-6 z-10'
                : 'border border-gray-200 hover:shadow-xl hover:border-[#FF3B3F]'
              }
            `}
          >
            {/* Badge */}
            {tier.badge && (
              <div className="bg-black text-white text-[10px] font-black tracking-widest px-4 py-1 absolute top-0 right-0 rounded-bl-lg uppercase">
                {tier.badgeText}
              </div>
            )}
            {!tier.badge && (
              <div className={`text-[10px] font-black tracking-widest px-3 py-1 absolute top-0 right-0 rounded-bl-lg uppercase ${tier.tagColor}`}>
                {tier.tag}
              </div>
            )}

            {/* Phase */}
            <h3 className={`font-bold text-sm uppercase-text mb-2 tracking-widest ${tier.popular ? 'text-[#FF3B3F]' : 'text-gray-400 group-hover:text-[#FF3B3F] transition-colors'}`}>
              {tier.phase}
            </h3>

            {/* Name */}
            <h3 className="font-headline text-2xl uppercase-text mb-4 text-gray-900">
              {tier.name}
            </h3>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <p className="text-4xl font-black font-headline tracking-tight text-gray-900">
                {tier.price}
              </p>
              <p className={`text-xs font-bold mt-3 uppercase tracking-wide inline-block px-2 py-1 rounded border ${tier.turnaroundColor} ${tier.turnaroundColor.includes('bg-') ? '' : 'text-gray-500 bg-gray-50 border-gray-100'}`}>
                {tier.turnaround}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-500 mb-8 text-sm leading-relaxed flex-grow">
              {tier.description}
            </p>

            {/* Features */}
            <div className="space-y-4 text-gray-700 text-sm font-medium flex-grow mb-8">
              {tier.features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.text} className="flex items-center">
                    <Icon className="w-4 h-4 mr-3 text-[#FF3B3F] flex-shrink-0" />
                    {feature.text}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className={`
                font-bold uppercase text-sm tracking-widest px-6 py-4 text-center w-full block transition-all duration-300
                ${tier.ctaStyle === 'primary'
                  ? 'bg-[#FF3B3F] text-white hover:bg-black'
                  : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }
              `}
            >
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        className="mt-12 pt-8 border-t border-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          {[
            { icon: Shield, text: 'SSL Secure' },
            { icon: Shield, text: 'Encrypted Payments' },
            { icon: CreditCard, text: 'No Credit Card Required to Start' },
            { icon: Shield, text: '100% Ownership' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-green-600" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
