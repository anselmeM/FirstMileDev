'use client';

import { motion } from 'framer-motion';
import Marquee from '@/components/ui/Marquee';

const TECH_LOGOS = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Webflow', icon: '🌊' },
  { name: 'Xano', icon: '🔥' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Stripe', icon: '💳' },
  { name: 'Next.js', icon: '▲' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Tailwind', icon: '🎨' },
];

const wordVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

function AnimatedLine({ text, className = '', startDelay = 0 }: { text: string; className?: string; startDelay?: number }) {
  return (
    <span className={`line-wrapper-anim block overflow-hidden ${className}`}>
      <motion.span
        className="line-content-anim block"
        custom={0}
        variants={wordVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: startDelay }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="bg-[#FF3B3F] text-white px-6 md:px-8 lg:px-16 py-6 md:py-8 min-h-screen flex flex-col justify-between relative overflow-hidden">

      {/* Navbar placeholder - will be replaced by real Navbar */}
      <div />

      <div className="mt-12 md:mt-20 mb-12 z-10">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase-text leading-none font-headline mb-8"
          initial="hidden"
          animate="visible"
        >
          <AnimatedLine text="VALIDATE DEMAND" startDelay={0.1} />
          <AnimatedLine text="BEFORE YOU WRITE" startDelay={0.2} />
          <AnimatedLine text="A SINGLE" className="text-black" startDelay={0.3} />
          <AnimatedLine text="LINE OF CODE" startDelay={0.4} />
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12 md:mb-16 z-10">
        <div className="lg:col-start-2">
          <motion.p
            className="text-base md:text-lg font-bold uppercase-text mb-8 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Where Vision Meets Velocity. We transform ideas into market-validated MVPs using Data-Driven Insights,
            No-Code Agility, and PERN Stack Precision. Your breakthrough product—built faster, tested smarter, ready for launch.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex flex-col">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Limited Availability - 2 spots left this month
              </span>
              <motion.a
                href="#contact"
                className="inline-block bg-white text-[#FF3B3F] font-headline uppercase-text px-8 py-4 text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Discovery Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="border-t border-white/20 pt-8 z-10">
        <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6 text-center">
          Technologies We Use
        </p>
        <Marquee speed={35} className="opacity-70">
          {TECH_LOGOS.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 mr-12">
              <span className="text-xl">{tech.icon}</span>
              <span className="font-bold text-sm uppercase tracking-widest">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-[-5%] right-[-5%] text-[15rem] md:text-[20rem] leading-none font-black text-center inline-block py-8 md:py-10 opacity-10 select-none text-black pointer-events-none">
        *
      </div>
    </section>
  );
}
