"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Youtube, Play, FileCode, Send, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/lib/leads";

const Lab = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    await submitLead({
      email,
      source: "lab-hook"
    });
    
    setIsSubmitted(true);
  };

  return (
    <section id="lab" className="px-6 md:px-8 lg:px-16 py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-gray-900">
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
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
            <a href="https://www.youtube.com/@AnselmeMotchoLive" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center font-bold uppercase text-sm tracking-widest text-accent-red hover:text-black transition group">
              <Youtube className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" /> Visit
              The Lab
            </a>
            
            <div className="h-4 w-[1px] bg-gray-200 hidden sm:block"></div>
            
            <span className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></span>
              New: Post-Launch Growth Secrets
            </span>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <FileCode size={80} />
            </div>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-lg font-bold mb-2 uppercase tracking-tight text-gray-900">Get the $55k Tech Stack</h3>
                  <p className="text-sm text-gray-500 mb-6">Download the exact architecture and tools we used to build a FinTech MVP that secured $55,000 in funding.</p>
                  
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-accent-red transition-all text-sm shadow-sm text-gray-900"
                    />
                    <button type="submit" className="btn btn-primary btn-sm px-6 flex items-center gap-2 group">
                      Send Me The Stack
                      <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 py-2"
                >
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-tight">Check Your Inbox!</h3>
                    <p className="text-sm text-gray-500 font-medium">The technical breakdown is on its way.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
