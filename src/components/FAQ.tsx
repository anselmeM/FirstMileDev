"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQType {
  question: string;
  answer: string;
}

export const defaultFaqs: FAQType[] = [
  {
    question: "Why validate before building?",
    answer: "Development is expensive. Marketing a product nobody wants is even more expensive. By spending a small amount on validation (ads + landing page), we save you thousands of dollars and months of time."
  },
  {
    question: "What tech stack do you use?",
    answer: "For MVPs (Phase 2), we use advanced low-code tools like Bubble, FlutterFlow, or Webflow + Wized. For Scaled Apps (Phase 3), we build custom using the PERN stack (PostgreSQL, Express, React, Node.js) or Next.js."
  },
  {
    question: "Do I own the code?",
    answer: "Absolutely. Once the project is paid for, you own 100% of the IP, code, and design assets. We are your partners, not your landlords."
  }
];

const FAQItem = ({ question, answer }: FAQType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="faq-item bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6 flex justify-between items-center">
        <h4 className="font-bold text-lg text-gray-900">{question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-gray-500" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
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
}

const FAQ = ({ items = defaultFaqs, title = "Common Questions" }: FAQProps) => {
  return (
    <section id="faq" className="px-6 md:px-8 lg:px-16 py-20 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title && <h2 className="text-3xl md:text-5xl uppercase font-headline mb-12 text-center">{title}</h2>}
        </motion.div>
        <div className="space-y-4">
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
    </section>
  );
};

export default FAQ;
