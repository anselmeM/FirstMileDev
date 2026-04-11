'use client';

import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: 'Sarah J.',
    company: 'FinTech Startup',
    role: 'CEO & Co-founder',
    quote:
      "Anselme moved faster in 2 weeks than our previous dev shop did in 2 months. The transparency was refreshing. We secured our Pre-Seed round with the dashboard he built.",
    result: 'Secured $500K Pre-Seed funding',
    initials: 'SJ',
  },
  {
    name: 'Mike T.',
    company: 'E-Commerce Validator',
    role: 'Founder',
    quote:
      "Honesty is rare in this industry. FirstMileDev told us NOT to build because the market data didn't support it. We saved $30k and pivoted to a better idea instead.",
    result: 'Saved $30k on wrong bet',
    initials: 'MT',
  },
  {
    name: 'Jessica L.',
    company: 'SaaS Founder',
    role: 'Solo Founder',
    quote:
      "As a non-technical founder, I was terrified of getting ripped off. Anselme explained every decision and kept me in the loop throughout. The MVP launched on time and under budget.",
    result: 'Launched on time, under budget',
    initials: 'JL',
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

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FF3B3F] fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="px-6 md:px-8 lg:px-16 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl uppercase-text font-headline mb-4 text-gray-900">
            What Founders Say
          </h2>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
            Real Results, Not Just Code
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="bg-[#FAFAFA] p-8 rounded-xl border border-gray-100 hover:shadow-xl hover:border-[#FF3B3F] transition-all duration-300 flex flex-col"
            >
              <StarRating />

              <p className="text-gray-600 text-sm leading-relaxed italic mb-6 flex-grow">
                "{t.quote}"
              </p>

              {/* Result badge */}
              <div className="bg-[#FF3B3F]/10 border border-[#FF3B3F]/20 rounded-lg px-3 py-2 mb-6">
                <p className="text-xs font-bold text-[#FF3B3F] uppercase tracking-widest">
                  {t.result}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
