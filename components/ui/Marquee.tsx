'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function Marquee({ children, speed = 30, className = '' }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
