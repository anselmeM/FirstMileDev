"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, CheckCircle2, Mail, ArrowRight } from "lucide-react";
import { submitLead } from "@/lib/leads";
import Link from "next/link";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    await submitLead({
      email,
      source: "lead-magnet"
    });
    
    setIsSubmitted(true);
  };

  return (
    <section className="px-6 md:px-8 lg:px-16 py-20 bg-carbon-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="w-[800px] h-[800px] border-[40px] border-white rounded-full mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="p-8 md:p-12 lg:p-16 flex-1 text-gray-900">
            <span className="bg-accent-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6 inline-block">
              Free Resource
            </span>
            <h2 className="text-3xl md:text-5xl font-headline uppercase mb-6 leading-tight">
              The Startup <br /><span className="text-accent-red">Validation Checklist</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Don't spend a dollar on development until you've checked these 15 boxes. Get our internal framework for testing market demand.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "How to identify your 'Killer' assumption",
                "3 low-cost ways to test willingness to pay",
                "The exact ad metrics that prove a winner",
                "5 questions to ask early adopters"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 lg:w-[400px] flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-900 uppercase tracking-tight">Download for Free</h3>
                  <p className="text-sm text-gray-500 mb-6 font-medium">We'll send the PDF directly to your inbox.</p>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-accent-red transition-all text-gray-900 shadow-sm"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-full flex items-center justify-center gap-2 group">
                      Get The Checklist
                      <Download className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="font-headline text-2xl uppercase mb-2 text-gray-900">Check Your Inbox!</h3>
                  <p className="text-gray-500 mb-8">The checklist is on its way. Ready to skip the line?</p>
                  <Link href="/#contact" className="text-accent-red font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                    Talk to an expert <ArrowRight size={16} />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
