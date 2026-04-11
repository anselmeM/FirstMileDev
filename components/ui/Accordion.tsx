'use client';

import { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionContextValue {
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}

const AccordionContext = createContext<AccordionContextValue>({
  openIndex: null,
  setOpenIndex: () => {},
});

export function useAccordion() {
  return useContext(AccordionContext);
}

interface AccordionItemProps {
  index: number;
  question: string;
  answer: string;
}

function AccordionItem({ index, question, answer }: AccordionItemProps) {
  const { openIndex, setOpenIndex } = useAccordion();
  const isOpen = openIndex === index;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full p-6 flex justify-between items-center cursor-pointer"
        aria-expanded={isOpen}
      >
        <h4 className="font-bold text-lg text-gray-900 text-left">{question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="space-y-4">
        {items.map((item, index) => (
          <AccordionItem key={index} index={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </AccordionContext.Provider>
  );
}
