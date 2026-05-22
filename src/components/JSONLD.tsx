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
    "url": "https://firstmiledev.com",
    "telephone": "+1-613-555-0199",
    "description": "Where Vision Meets Velocity. We transform ideas into market-validated MVPs using Data-Driven Insights, No-Code Agility, and PERN Stack Precision.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ottawa",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "priceRange": "$$"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FirstMileDev",
    "url": "https://firstmiledev.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://firstmiledev.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Startup Validation & Development",
    "serviceType": "Startup Validation & Development",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FirstMileDev"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roadmap Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Phase 1: Market Proof",
            "description": "Don't build until you know they'll buy. We validate your concept with real data (ads + landing page) before writing code."
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "2000",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Phase 2: Launchpad MVP",
            "description": "Get your first 100 users. We build a functional, beautiful product using high-performance Low-Code tools to save time."
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "5000",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Phase 3: Scale",
            "description": "Ready to handle thousands of users? We migrate your MVP to a scalable custom architecture (PERN Stack)."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why validate before building?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Development is expensive. Marketing a product nobody wants is even more expensive. By spending a small amount on validation (ads + landing page), we save you thousands of dollars and months of time. Most startups fail because they build too much too soon."
        }
      },
      {
        "@type": "Question",
        "name": "What tech stack do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For MVPs (Phase 2), we use advanced low-code tools like Bubble, FlutterFlow, or Webflow + Wized for speed. For Scaled Apps (Phase 3), we build custom using the PERN stack (PostgreSQL, Express, React, Node.js) or Next.js for maximum performance and ownership."
        }
      },
      {
        "@type": "Question",
        "name": "Do I own the code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Once the project is complete and paid for, you own 100% of the IP, source code, and design assets. We believe in being your long-term technical partner, not a gatekeeper."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical build take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Validation (Phase 1) takes exactly 2 weeks. A Launchpad MVP (Phase 2) takes between 4 to 6 weeks. Phase 3 scaling is an ongoing partnership based on your growth milestones."
        }
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default JSONLD;
