"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Analytics() {
  const [consent, setConsent] = useState<"accepted" | "declined" | "undecided">("undecided");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedConsent = localStorage.getItem("cookie_consent") as "accepted" | "declined" | null;
    if (savedConsent) {
      setConsent(savedConsent);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setConsent("accepted");
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    setConsent("declined");
  };

  if (!mounted) return null;

  const isProduction = process.env.NODE_ENV === "production" && !window.location.hostname.includes("localhost");
  const showBanner = consent === "undecided";

  return (
    <>
      {consent === "accepted" && isProduction && (
        <>
          {/* Google Analytics */}
          <GoogleAnalytics gaId="G-5FWBEXRG2N" />

          {/* Microsoft Clarity */}
          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "w1i576b6a9");
            `}
          </Script>

          {/* Tawk.to */}
          <Script id="tawk-to" strategy="lazyOnload">
            {`
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69c45fd846a6c41c341ab391/1jkjhcpdh';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `}
          </Script>
        </>
      )}

      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 z-[2005]"
            role="dialog"
            aria-label="Cookie consent banner"
          >
            <div className="bg-carbon-900 text-white p-6 rounded-3xl shadow-2xl border border-white/10 flex flex-col gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-tight mb-2">Cookie Preferences</p>
                <p className="text-xs text-white/60 leading-relaxed">
                  We use cookies and telemetry tools (Clarity, Google Analytics, and Tawk.to Live Chat) to analyze site usage and improve your experience.
                </p>
              </div>
              <div className="flex gap-3 justify-end pt-2">
                <button
                  onClick={declineCookies}
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white transition"
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="bg-accent-red hover:bg-accent-red-dark text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition shadow-lg shadow-red-900/20"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
