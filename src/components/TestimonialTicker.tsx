"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Anselme moved faster in 2 weeks than our previous dev shop did in 2 months. The transparency was refreshing.",
    author: "Sarah J.",
    role: "FinTech CEO",
    stars: 5
  },
  {
    text: "FirstMileDev told us NOT to build, which was the best advice we got. Saved us $30k easily.",
    author: "Mike T.",
    role: "E-commerce Founder",
    stars: 5
  },
  {
    text: "The roadmap they provided gave our investors the confidence to lead our Pre-Seed round.",
    author: "David L.",
    role: "SaaS Founder",
    stars: 5
  },
  {
    text: "True experts in both Bubble and Next.js. They built our MVP and helped us scale to 10k users.",
    author: "Elena R.",
    role: "Product Manager",
    stars: 5
  }
];

const TestimonialTicker = () => {
  return (
    <section className="py-24 bg-accent-red overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <h2 className="text-white text-3xl md:text-5xl font-headline uppercase">Success Signals</h2>
        <p className="text-white/70 font-bold uppercase tracking-widest mt-4">What Founders Are Saying</p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex relative">
        <motion.div 
          className="flex gap-6 px-3"
          animate={{
            x: [0, -1032], // Adjust based on content width
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Double the list for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-[320px] md:w-[400px] flex-shrink-0 bg-white p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-between border border-white/20"
            >
              <div>
                <div className="flex text-accent-red mb-6">
                  {[...Array(t.stars)].map((_, si) => (
                    <Star key={si} size={16} fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-gray-100 absolute top-8 right-8 w-12 h-12 -z-0" />
                <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed relative z-10">
                  "{t.text}"
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-50">
                <p className="font-headline text-gray-900 uppercase tracking-tight">{t.author}</p>
                <p className="text-accent-red text-xs font-bold uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialTicker;
