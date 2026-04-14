"use client";

import React from "react";
import Script from "next/script";

const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-8 lg:px-16 py-20 bg-accent-red text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl uppercase font-headline mb-6">Let's build your First Mile.</h2>
            <p className="text-lg opacity-90 mb-12 leading-relaxed">
              Stop guessing. Start validating. Book a free 15-minute discovery call below or find a time that works for you.
            </p>
            <div className="flex flex-col space-y-6">
              {[
                { num: "1", title: "Quick discovery call", desc: "15 minutes to align on your vision and goals." },
                { num: "2", title: "Custom validation roadmap", desc: "A tailored strategy to test your market demand." },
                { num: "3", title: "Execution & Growth", desc: "Rapid building and scaling based on real data." }
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white text-accent-red rounded-full flex items-center justify-center flex-shrink-0 font-black text-lg group-hover:scale-110 transition-transform">
                    {item.num}
                  </div>
                  <div>
                    <p className="font-bold uppercase tracking-widest text-sm mb-1">{item.title}</p>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="font-bold uppercase tracking-widest text-xs text-white/60 mb-4 text-center lg:text-left">Trusted by founders from</p>
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start opacity-50 grayscale brightness-200">
                {/* Placeholder logos or text */}
                <span className="font-headline text-xl">FINTECH</span>
                <span className="font-headline text-xl">E-COMMERCE</span>
                <span className="font-headline text-xl">SAAS</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Calendly inline widget begin */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              <div 
                className="calendly-inline-widget w-full h-full"
                data-url="https://calendly.com/anselme-firstmiledev?hide_gdpr_banner=1&primary_color=ff3b3f"
              ></div>
            </div>
            <Script 
              type="text/javascript" 
              src="https://assets.calendly.com/assets/external/widget.js" 
              strategy="afterInteractive"
            />
            {/* Calendly inline widget end */}
            
            {/* Trust badge under Calendly */}
            <div className="mt-4 flex items-center justify-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Next available slot: Tomorrow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
