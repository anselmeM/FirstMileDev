'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animation-variants';
import { Play } from 'lucide-react';

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerContainer;

  return (
    <section id="about" className="px-6 md:px-8 lg:px-16 py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Video / Lab section */}
        <motion.div
          variants={prefersReducedMotion ? fadeInUp : scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl uppercase-text font-headline mb-6">
            Transparency as a Service
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            We don&apos;t hide our process behind buzzwords. Watch Anselme break down the exact tech stacks, scraping
            strategies, and code patterns we use for client builds in our &quot;Build in Public&quot; series.
          </p>
          <a
            href="https://www.youtube.com/channel/UCyonXfGimcVb2ZbfuaZfR_g"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center font-bold uppercase text-sm tracking-widest text-[#FF3B3F] hover:text-black transition group"
          >
            <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
            Visit The Lab
            <span className="block h-[2px] bg-[#FF3B3F] w-0 group-hover:w-full transition-all duration-300 ml-2" />
          </a>

          {/* Video placeholder */}
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-200 group cursor-pointer mt-8">
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-20 h-20 bg-[#FF3B3F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-8 h-8 text-white fill-current ml-1" />
              </div>
            </div>
            <img
              src="https://placehold.co/800x450/1f2937/fff.webp?text=Build+In+Public+Series"
              alt="Build In Public video series"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        {/* Philosophy cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6"
        >
          {[
            {
              title: 'Data First, Code Second',
              description:
                'Every decision is backed by real market data — not assumptions or gut feelings. If the numbers say no, we tell you.',
              emoji: '📊',
            },
            {
              title: 'You Own Everything',
              description:
                '100% code ownership, IP rights, and full portability. We build your product, then hand you the keys.',
              emoji: '🔑',
            },
            {
              title: 'Speed with Purpose',
              description:
                "We move fast without cutting corners. Our process is optimized for validation — so you learn what's real before you scale.",
              emoji: '⚡',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={prefersReducedMotion ? fadeInUp : fadeInUp}
              className="bg-[#FAFAFA] rounded-xl p-6 border border-gray-100 hover:border-[#FF3B3F] transition-colors"
            >
              <span className="text-2xl mb-3 block">{item.emoji}</span>
              <h4 className="font-headline text-xl uppercase-text mb-2 text-gray-900">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
