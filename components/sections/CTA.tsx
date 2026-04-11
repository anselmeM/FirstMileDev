'use client';

import { motion } from 'framer-motion';
import { Zap, Code, Mail, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement; prefill?: unknown }) => void;
    };
  }
}

export default function CTA() {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="px-6 md:px-8 lg:px-16 py-20 bg-[#1f2937] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

        {/* Left Side: Copy */}
        <motion.div
          className="lg:col-span-2 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl uppercase-text font-headline mb-6">
            Let's Validate Your Idea
          </h2>
          <p className="text-sm text-green-400 font-bold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            2-5 founders viewing this page
          </p>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            Stop guessing and start building with confidence. Book a 15-minute discovery call to see if your
            idea is ready for the First Mile.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-start">
              <div className="bg-[#FF3B3F] p-3 rounded-full mr-4 shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">Rapid Validation</h4>
                <p className="text-sm text-gray-400">We'll discuss your market hypothesis.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#FF3B3F] p-3 rounded-full mr-4 shrink-0">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">Tech Strategy</h4>
                <p className="text-sm text-gray-400">Determine if you need No-Code or Custom.</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Direct Contact</p>
            <div className="flex items-center text-gray-300 mb-2">
              <Mail className="w-5 h-5 mr-3 text-[#FF3B3F]" />
              hello@firstmiledev.com
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-3 text-[#FF3B3F]" />
              Ottawa, Ontario
            </div>
          </div>
        </motion.div>

        {/* Right Side: Calendly Embed */}
        <motion.div
          className="lg:col-span-3 w-full bg-white rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            ref={calendlyRef}
            className="calendly-inline-widget"
            data-url="https://calendly.com/anselme-firstmiledev?hide_gdpr_banner=1&primary_color=ff3b3f"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>

      </div>
    </section>
  );
}
