"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight, AlertCircle } from "lucide-react";

const Philosophy = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section id="process" className="px-6 md:px-8 lg:px-16 py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Content */}
          <div className="lg:col-span-7">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-accent-red p-0.5 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-[14px] overflow-hidden border-2 border-white/20">
                  <Image
                    src="https://placehold.co/100x100/333/fff?text=AM"
                    alt="Anselme Motcho"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="font-headline uppercase text-sm tracking-tighter text-gray-900">Anselme Motcho</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-red">Principal & Lead Dev</p>
              </div>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="font-headline text-4xl md:text-6xl mb-10 uppercase leading-[0.95] tracking-tighter text-gray-900">
              Most startups fail because they build things <span className="text-accent-red italic underline decoration-4 underline-offset-8">nobody wants.</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-500 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium mb-12">
              I built FirstMileDev to stop that cycle. We don't just write code; we bridge the gap between
              business strategy and technical execution. 
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-headline uppercase text-lg text-gray-900">Validation First</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We test your riskiest assumptions with real data before investing in heavy development. 
                  Efficiency is our core metric.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-headline uppercase text-lg text-gray-900">Scalable Results</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Once validated, we build MVPs that are designed to scale, not to be thrown away. 
                  Your tech debt is minimized from day one.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contrast Sidebar */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-6">
              {/* The Old Way */}
              <motion.div 
                variants={itemVariants} 
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="text-gray-400 w-5 h-5" />
                  <h4 className="font-headline uppercase text-sm tracking-widest text-gray-400">The Old Way</h4>
                </div>
                <p className="text-lg font-bold line-through decoration-accent-red decoration-2 text-gray-400 leading-tight">
                  Guess Features &rarr; Spend $50k &rarr; Launch &rarr; Pray
                </p>
              </motion.div>
              
              {/* The FirstMile Way */}
              <motion.div 
                variants={itemVariants}
                className="p-8 md:p-10 rounded-[2rem] bg-carbon-900 text-white shadow-2xl relative overflow-hidden border border-white/5"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <ArrowRight size={80} className="-rotate-45" />
                </div>
                
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <Check className="text-accent-red w-6 h-6" />
                  <h4 className="font-headline uppercase text-xl tracking-tight text-white">The FirstMile Way</h4>
                </div>
                
                <ul className="space-y-6 relative z-10">
                  {[
                    { p: "Phase 1", t: "Prove Market Demand" },
                    { p: "Phase 2", t: "Launch No-Code MVP" },
                    { p: "Phase 3", t: "Scale with Custom Code" }
                  ].map((phase, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent-red font-headline text-xs">
                        0{i+1}
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-0.5">{phase.p}</p>
                        <p className="font-bold text-sm uppercase tracking-wide">{phase.t}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-white/10 relative z-10 text-center lg:text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-6">Ready to skip the guessing?</p>
                  <a href="#contact" className="btn btn-primary btn-full md:btn-md">
                    Start Your Roadmap
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Philosophy;
