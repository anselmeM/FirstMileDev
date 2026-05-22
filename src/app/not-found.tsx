"use client";

import Link from "next/link";
import { SearchX, ArrowRight, RotateCcw } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function NotFound() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center justify-center w-24 h-24 bg-red-50 text-accent-red rounded-full mb-8"
        >
          <SearchX size={48} />
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-headline uppercase mb-6 text-gray-900 leading-tight"
        >
          Invalid <br /><span className="text-accent-red">Hypothesis.</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-500 mb-12 max-w-lg mx-auto leading-relaxed"
        >
          Looks like this path hasn't been validated yet. The page you're looking for doesn't exist or has moved.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/" className="btn btn-primary btn-lg w-full sm:w-auto flex items-center gap-2">
            <RotateCcw size={20} /> Back to Roadmap
          </Link>
          <Link href="/calculator" className="btn btn-outline btn-lg w-full sm:w-auto flex items-center gap-2">
            Estimate Project Cost <ArrowRight size={20} />
          </Link>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-100"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Trusted by 50+ Founders Worldwide
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
