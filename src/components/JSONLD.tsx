import React from "react";

const JSONLD = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FirstMileDev",
    "url": "https://firstmiledev.com",
    "logo": "https://firstmiledev.com/images/icon-512.png",
    "description": "Where Vision Meets Velocity. We transform ideas into market-validated MVPs using Data-Driven Insights, No-Code Agility, and PERN Stack Precision.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ottawa",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@firstmiledev.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.youtube.com/@AnselmeMotchoLive"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FirstMileDev",
    "image": "https://firstmiledev.com/images/icon-512.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ottawa",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
};

export default JSONLD;
