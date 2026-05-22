"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

export default function Analytics() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load tracking scripts only in production environment and not on localhost
    if (process.env.NODE_ENV === "production" && !window.location.hostname.includes("localhost")) {
      setShouldLoad(true);
    }
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "w1i576b6a9");
        `}
      </Script>

      {/* Tawk.to */}
      <Script id="tawk-to" strategy="afterInteractive">
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
  );
}

