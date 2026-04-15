"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, ChevronUp } from "lucide-react";
import Link from "next/link";
import { submitLead } from "@/lib/leads";

const LeadCapture = () => {
  const [showScrollCta, setShowScrollCta] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasShownExit, setHasHasShownExit] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / height) * 100;

      // Show scroll CTA at 75% scroll
      if (progress > 75) {
        setShowScrollCta(true);
      } else if (progress < 50) {
        setShowScrollCta(false);
      }

      // Show back to top button
      if (scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExit) {
        setShowExitPopup(true);
        setHasHasShownExit(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShownExit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    await submitLead({
      email,
      source: "exit-intent"
    });

    setIsSubmitted(true);
    // Auto-close after success
    setTimeout(() => {
      setShowExitPopup(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 500);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 left-6 z-[40] w-12 h-12 bg-accent-red text-white rounded-full flex items-center justify-center shadow-lg hover:bg-carbon-800 transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll-Triggered CTA */}
      <AnimatePresence>
        {showScrollCta && (
          <motion.div
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            className="fixed bottom-8 left-1/2 z-[45] w-[90%] max-w-lg"
          >
            <div className="bg-carbon-800 text-white p-4 md:p-6 rounded-2xl flex items-center justify-between shadow-2xl border border-white/10">
              <div className="flex-1 pr-4">
                <p className="text-sm md:text-base font-bold uppercase tracking-tight">
                  Ready to validate your idea?
                </p>
                <p className="text-xs text-white/60 hidden md:block">
                  Book your free 15-minute roadmap call today.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/#contact" className="btn btn-primary btn-sm md:btn-md whitespace-nowrap">
                  Start Now
                </Link>
                <button 
                  onClick={() => setShowScrollCta(false)}
                  className="text-white/40 hover:text-white transition"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit-Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitPopup(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-xl w-full relative shadow-2xl overflow-hidden mt-12 md:mt-20"
            >
              <button 
                onClick={() => setShowExitPopup(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition p-2"
                aria-label="Close popup"
              >
                <X size={28} />
              </button>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <span className="text-accent-red font-black uppercase tracking-widest text-[10px] md:text-xs mb-4 block">
                      Don't Leave Just Yet!
                    </span>
                    <h2 className="text-3xl md:text-4xl font-headline uppercase mb-4 text-gray-900 leading-tight">
                      Free Startup <br /><span className="text-accent-red">Validation Checklist</span>
                    </h2>
                    <p className="text-gray-500 mb-8 text-base md:text-lg">
                      We've helped 50+ founders validate their ideas. Get our internal checklist for free and stop guessing.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <input
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-accent-red transition-all text-gray-900"
                      />
                      <button type="submit" className="btn btn-primary btn-lg group">
                        Send Me The Checklist <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                    <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-widest font-bold">
                      No Spam. Only Insights.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="font-headline text-3xl uppercase mb-2 text-gray-900">It's on its way!</h3>
                    <p className="text-gray-500 text-lg">Check your inbox for the checklist.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeadCapture;
