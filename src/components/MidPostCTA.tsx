"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface MidPostCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  type?: "calculator" | "contact" | "checklist";
}

const MidPostCTA = ({ title, description, buttonText, buttonHref, type = "calculator" }: MidPostCTAProps) => {
  return (
    <div className="my-12 bg-carbon-900 text-white rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-2xl border border-white/10">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Sparkles size={120} />
      </div>
      
      <div className="relative z-10">
        <span className="bg-accent-red text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 inline-block">
          Boost Your Startup
        </span>
        <h3 className="text-2xl md:text-3xl font-headline uppercase mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-gray-400 mb-8 text-lg max-w-xl">
          {description}
        </p>
        <Link 
          href={buttonHref} 
          className="btn btn-primary group inline-flex items-center"
        >
          {buttonText} 
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default MidPostCTA;
