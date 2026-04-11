'use client';

import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

/**
 * Hook to check if user prefers reduced motion.
 * Returns true if user has enabled prefers-reduced-motion.
 * Use this to conditionally disable animations.
 */
export function useReducedMotion() {
  return useFramerReducedMotion() ?? false;
}

/**
 * Reduced-motion-aware animation variants.
 * If reduced motion is preferred, elements appear instantly (no animation).
 */
export function getReducedMotionVariants<T extends Record<string, unknown>>(
  animatedVariants: T,
  instantVariants: T
) {
  return {
    animated: animatedVariants,
    instant: instantVariants,
  };
}
