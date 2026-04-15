"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export interface FAQType {
  question: string;
  answer: string;
}

export const defaultFaqs: FAQType[] = [
  {
    question: "Why validate before building?",
    answer: "Development is expensive. Marketing a product nobody wants is even more expensive. By spending a small amount on validation (ads + landing page), we save you thousands of dollars and months of time. Most startups fail because they build too much too soon."
  },
  {
    question: "What tech stack do you use?",
    answer: "For MVPs (Phase 2), we use advanced low-code tools like Bubble, FlutterFlow, or Webflow + Wized for speed. For Scaled Apps (Phase 3), we build custom using the PERN stack (PostgreSQL, Express, React, Node.js) or Next.js for maximum performance and ownership."
  },
  {
    question: "Do I own the code?",
    answer: "Absolutely. Once the project is complete and paid for, you own 100% of the IP, source code, and design assets. We believe in being your long-term technical partner, not a gatekeeper."
  },
  {
    question: "How long does a typical build take?",
    answer: "Validation (Phase 1) takes exactly 2 weeks. A Launchpad MVP (Phase 2) takes between 4 to 6 weeks. Phase 3 scaling is an ongoing partnership based on your growth milestones."
  }
];

const FAQItem = ({ question, answer }: FAQType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`group border-b border-gray-200 transition-all duration-500 ${isOpen ? "pb-6" : "pb-0"}`}
    >
      <button 
        className="w-full py-8 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className={`font-headline text-lg md:text-xl uppercase transition-colors duration-300 ${isOpen ? "text-accent-red" : "text-gray-900 group-hover:text-accent-red"}`}>
          {question}
        </h4>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-accent-red text-white rotate-180" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-900"}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="text-gray-500 text-lg leading-relaxed max-w-2xl font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQProps {
  items?: FAQType[];
  title?: string;
  subtitle?: string;
}

const FAQ = ({ 
  items = defaultFaqs, 
  title = "Common Questions",
  subtitle = "Everything you need to know about the FirstMileDev process"
}: FAQProps) => {
  return (
    <section id="faq" className="px-6 md:px-8 lg:px-16 py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Title Column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="text-accent-red w-6 h-6" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Support Center</span>
                </div>
                <h2 className="text-4xl md:text-6xl uppercase font-headline mb-6 text-gray-900 leading-[0.95] tracking-tighter">
                  Got <br /><span className="text-accent-red">Questions?</span>
                </h2>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm leading-relaxed max-w-xs">
                  {subtitle}
                </p>
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Don't see your answer?</p>
                  <a href="#contact" className="text-accent-red font-headline text-sm uppercase hover:text-gray-900 transition-colors flex items-center gap-2">
                    Contact Us Directly <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* FAQ Accordion Column */}
          <div className="lg:col-span-8">
            <div className="border-t border-gray-200">
              {items.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FAQItem {...faq} />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from "lucide-react";
export default FAQ;
