"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const lineVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="hero-section"
      className="bg-accent-red text-white px-6 md:px-8 lg:px-16 py-6 md:py-8 min-h-[90vh] flex flex-col justify-center relative overflow-hidden"
    >
      <motion.div
        className="mt-12 md:mt-20 mb-12 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-none font-headline mb-8">
          <span className="overflow-hidden block">
            <motion.span variants={lineVariants} className="block">
              VALIDATE DEMAND
            </motion.span>
          </span>
          <span className="overflow-hidden block">
            <motion.span variants={lineVariants} className="block">
              BEFORE YOU WRITE
            </motion.span>
          </span>
          <span className="overflow-hidden block">
            <motion.span variants={lineVariants} className="block text-black">
              A SINGLE LINE
            </motion.span>
          </span>
          <span className="overflow-hidden block">
            <motion.span variants={lineVariants} className="block">
              OF CODE
            </motion.span>
          </span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12 md:mb-16 z-10">
        <div className="lg:col-start-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base md:text-lg font-bold uppercase mb-8 leading-relaxed tracking-wide"
          >
            Where Vision Meets Velocity. We transform ideas into market-validated
            MVPs using Data-Driven Insights, No-Code Agility, and PERN Stack
            Precision. Your breakthrough product—built faster, tested smarter,
            ready for launch.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Limited Availability - 2 spots left this month
            </span>
            <Link href="#contact" className="hero-cta-link">
              Book Discovery Call
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-5%] right-[-5%] text-[15rem] md:text-[20rem] leading-none font-black text-center inline-block py-8 md:py-10 opacity-10 select-none text-black pointer-events-none"
      >
        *
      </motion.div>
    </section>
  );
};

export default Hero;
