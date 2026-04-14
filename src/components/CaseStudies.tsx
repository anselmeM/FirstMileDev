"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const caseStudies = [
  {
    id: "fintech",
    title: "FinTech MVP",
    phase: "Phase 2: MVP Build",
    description: "Built a functional financial dashboard in 4 weeks using React & Node.js, allowing the founders to secure Pre-Seed funding.",
    image: "/images/sassdashboard.png",
    link: "/case-study-fintech",
    testimonial: {
      text: "Anselme moved faster in 2 weeks than our previous dev shop did in 2 months. The transparency was refreshing.",
      author: "Sarah J., CEO"
    }
  },
  {
    id: "ecom",
    title: "E-Com Validator",
    phase: "Phase 1: Validation",
    description: "Ran a 14-day ad test for a niche sneaker marketplace. The data proved the market was too small, saving the client $30k in dev costs.",
    image: "/images/E-Commerce Validator.png",
    link: "/case-study-ecom-validator",
    testimonial: {
      text: "Honesty is rare in this industry. FirstMileDev told us NOT to build, which was the best advice we got.",
      author: "Mike T., Founder"
    }
  }
];

const CaseStudies = () => {
  return (
    <section id="work" className="px-6 md:px-8 lg:px-16 py-20 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl uppercase font-headline mb-4">Case Studies</h2>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Real Results, Not Just Code</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 cursor-pointer"
            >
              <Link href={study.link}>
                <div className="h-64 overflow-hidden relative">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100">
                    <span className="text-white font-headline uppercase tracking-widest border-2 border-white px-6 py-2">
                      View Case Study
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline text-xl uppercase mb-1">{study.title}</h3>
                      <span className="text-xs font-bold text-accent-red uppercase tracking-widest">{study.phase}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{study.description}</p>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="flex text-accent-red mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xs italic text-gray-500">"{study.testimonial.text}"</p>
                    <p className="text-xs font-bold text-gray-900 mt-2">— {study.testimonial.author}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
