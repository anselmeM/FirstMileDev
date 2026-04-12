'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export default function Intro() {
  return (
    <section id="process" className="px-6 md:px-8 lg:px-16 py-20 md:py-32 bg-[#FAFAFA]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 border-t border-b border-gray-200 py-16 max-w-7xl mx-auto">

        <motion.div
          className="md:col-span-2 pr-0 md:pr-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden flex-shrink-0 border-2 border-white shadow-sm z-10 relative">
              <img
                src="https://placehold.co/100x100/333/fff.webp?text=AM"
                alt="Anselme Motcho"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-bold text-lg text-gray-900">Anselme Motcho</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">
                Principal & Lead Developer
              </p>
            </div>
          </div>
          <h3 className="font-headline text-3xl md:text-4xl mb-6 uppercase-text leading-tight text-gray-900">
            Most startups fail because they build things nobody wants.
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl font-medium">
            I built FirstMileDev to stop that cycle. We don&apos;t just write code; we bridge the gap between
            business strategy and technical execution. Whether you need a quick No-Code validation or a scalable
            PERN stack platform, we ensure every dollar you spend moves you closer to Product-Market Fit.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center pt-8 md:pt-0 pl-0 md:pl-12 border-l-0 md:border-l border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <h4 className="font-headline text-lg uppercase-text text-gray-400 mb-2">The Old Way</h4>
            <p className="text-sm font-bold line-through decoration-red-500 decoration-2 text-gray-500">
              Guess Features &rarr; Spend $50k &rarr; Launch &rarr; Pray
            </p>
          </div>
          <div>
            <h4 className="font-headline text-2xl uppercase-text text-[#FF3B3F] mb-4">The FirstMile Way</h4>
            <ul className="list-none space-y-4 font-bold uppercase-text text-sm md:text-sm tracking-wide text-gray-800">
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                Phase 1: Prove Market Demand
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                Phase 2: Launch No-Code MVP
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                Phase 3: Scale with Custom Code
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
