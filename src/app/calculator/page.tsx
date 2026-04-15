import React from "react";
import CalculatorForm from "./CalculatorForm";
import Link from "next/link";
import { ArrowLeft, Sparkles, ShieldCheck, Zap } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "MVP Cost Calculator",
  "description": "Estimate your MVP development cost with our free app cost calculator. Get a tailored quote based on features, complexity, and timeline.",
  "url": "https://firstmiledev.com/calculator",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "FirstMileDev",
    "url": "https://firstmiledev.com"
  }
};

export const metadata = {
  title: "App Cost Calculator - FirstMileDev",
  description: "Estimate your MVP development cost with our free app cost calculator. Get a tailored quote based on features, complexity, and timeline.",
};

export default function CalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content" className="bg-white">
        {/* Calculator Hero */}
      <section className="bg-accent-red text-white px-6 md:px-8 lg:px-16 py-20 md:py-32 relative overflow-hidden flex flex-col justify-center min-h-[60vh]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        
        {/* Animated watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black opacity-5 select-none pointer-events-none uppercase tracking-tighter">
          ROI
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-white/60 hover:text-white mb-12 transition-all group"
          >
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Roadmap
          </Link>
          
          <h1 className="text-5xl md:text-8xl font-headline uppercase mb-8 leading-[0.9] tracking-tighter">
            App Cost <br /><span className="text-black">Calculator</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-bold uppercase mb-12 leading-relaxed opacity-90 max-w-2xl mx-auto tracking-wide">
            Stop guessing. Start budgeting.<br />
            Get a tailored technical breakdown in seconds.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full">
              <ShieldCheck size={14} className="text-white" />
              100% Free & Private
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full">
              <Zap size={14} className="text-white" />
              Instant Quote
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="cost-calculator" className="px-6 py-20 md:py-32 bg-gray-50">
        <CalculatorForm />
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 md:py-40 bg-carbon-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-red rounded-3xl mb-10 rotate-3 shadow-2xl">
            <Sparkles size={40} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-headline uppercase mb-8 leading-tight">Ready to <br />Build Your MVP?</h2>
          <p className="text-xl opacity-60 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Estimates are great, but a discovery call is better. Let's find the absolute shortest path to your first 100 paying users.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/#contact" className="btn btn-primary btn-lg px-12">
              Book Discovery Call
            </Link>
            <Link href="/" className="btn btn-outline-white btn-lg px-12">
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
