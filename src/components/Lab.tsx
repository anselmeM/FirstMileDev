"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Youtube, Play } from "lucide-react";

const Lab = () => {
  return (
    <section id="lab" className="px-6 md:px-8 lg:px-16 py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl uppercase font-headline mb-6">Transparency as a Service</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            We don't hide our process behind buzzwords. Watch Anselme break down the exact tech stacks, scraping
            strategies, and code patterns we use for client builds in our "Build in Public" series.
          </p>
          <a href="https://www.youtube.com/channel/UCyonXfGimcVb2ZbfuaZfR_g" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center font-bold uppercase text-sm tracking-widest text-accent-red hover:text-black transition group">
            <Youtube className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" /> Visit
            The Lab
            <span
              className="block h-[2px] bg-accent-red w-0 group-hover:w-full transition-all duration-300 ml-2"
            ></span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-200 group cursor-pointer"
        >
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div
              className="w-20 h-20 bg-accent-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
            >
              <Play className="w-8 h-8 text-white fill-current ml-1" />
            </div>
          </div>
          <Image
            src="https://placehold.co/800x450/1f2937/fff?text=Build+In+Public+Series"
            alt="Build In Public video series thumbnail"
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition duration-500 scale-100 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Lab;
