import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import FAQ, { FAQType } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | FirstMileDev",
  description: "Get answers to common questions about FirstMileDev's MVP development services, pricing, process, and startup validation approach.",
  alternates: {
    canonical: "https://firstmiledev.com/faq",
  },
  openGraph: {
    type: "website",
    url: "https://firstmiledev.com/faq",
    title: "FAQ - Frequently Asked Questions | FirstMileDev",
    description: "Get answers to common questions about FirstMileDev's MVP development services, pricing, and startup validation approach.",
    images: ["https://firstmiledev.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Frequently Asked Questions | FirstMileDev",
    description: "Get answers to common questions about FirstMileDev's MVP development services, pricing, and startup validation approach.",
    images: ["https://firstmiledev.com/twitter-image.jpg"],
  },
};

const faqItems: FAQType[] = [
  {
    question: "What is the typical timeline for MVP development?",
    answer: "Most MVPs can be delivered in 4-8 weeks depending on complexity. Our rapid validation approach ensures you get a functional prototype quickly to test market assumptions. Phase 1 (Validation) typically takes 2 weeks, Phase 2 (MVP Build) takes 4-6 weeks, and Phase 3 (Custom Scale) is scoped based on your specific requirements."
  },
  {
    question: "How much does MVP development cost?",
    answer: "MVP development costs range from $5,000 to $25,000 depending on features and complexity. We offer flexible engagement models: Phase 1 (Market Validation) starts at $2,000, Phase 2 (MVP Build) starts at $5,000, and Phase 3 (Custom Scale) is priced based on your specific needs. We provide detailed quotes after understanding your requirements."
  },
  {
    question: "What tech stack do you use?",
    answer: "We primarily use modern JavaScript frameworks like React, Node.js, and MongoDB. We also offer no-code solutions like Bubble, FlutterFlow, and Webflow + Wized for faster deployment. For MVPs, we recommend low-code tools to reduce time-to-market. For scaling, we build custom using the MERN stack (MongoDB, Express, React, Node.js) or Next.js."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we offer ongoing maintenance and support packages to ensure your MVP continues to perform optimally after launch. We provide bug fixes, security updates, performance monitoring, and feature enhancements. Our support packages are flexible and can be tailored to your needs."
  },
  {
    question: "Why validate before building?",
    answer: "Development is expensive. Marketing a product nobody wants is even more expensive. By spending a small amount on validation (ads + landing page), we save you thousands of dollars and months of time. Our validation process tests your market hypothesis with real data before you commit to building."
  },
  {
    question: "Do I own the code?",
    answer: "Absolutely. Once the project is paid for, you own 100% of the IP, code, and design assets. We are your partners, not your landlords. You'll receive all source code, database access, and deployment credentials upon project completion."
  },
  {
    question: "How does the validation process work?",
    answer: "Our validation process involves: 1) Market Research & Competitor Analysis, 2) Creating a Landing Page with your value proposition, 3) Running targeted ads to test demand, 4) Analyzing conversion data and customer feedback. You'll receive a detailed viability report with recommendations on whether to proceed and how to optimize."
  },
  {
    question: "What industries do you work with?",
    answer: "We work across various industries including FinTech, E-commerce, SaaS, HealthTech, EdTech, and more. Our team has experience building MVPs for startups in both B2B and B2C spaces. We adapt our approach based on your industry's specific requirements and regulations."
  },
  {
    question: "Can you work with existing code or legacy systems?",
    answer: "Yes, we can work with existing codebases and help modernize legacy systems. We offer code audits to assess your current infrastructure and provide recommendations for improvement. Our team can integrate new features into existing systems or migrate you to modern architectures."
  },
  {
    question: "What happens after I book a discovery call?",
    answer: "During the 15-minute discovery call, we'll discuss your startup idea, target market, and goals. We'll answer any questions you have and explain our approach. If there's a good fit, we'll outline next steps and provide a customized proposal for your project."
  }
];

export default function FAQPage() {
  return (
    <div className="bg-[#FAFAFA]">
      {/* FAQ HERO SECTION */}
      <section className="bg-[#FF3B3F] text-white px-6 md:px-8 lg:px-16 py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl uppercase font-headline mb-8 leading-none">
            <span className="block">FREQUENTLY</span>
            <span className="block">ASKED QUESTIONS</span>
          </h1>
          <p className="text-lg md:text-xl font-bold uppercase mb-8 leading-relaxed opacity-90 max-w-2xl font-body">
            Get answers to common questions about MVP development, startup validation, and our process.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT SECTION */}
      <FAQ items={faqItems} title="" />

      {/* Still Have Questions CTA */}
      <section className="px-6 md:px-8 lg:px-16 pb-20 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="font-headline text-2xl uppercase mb-4 text-gray-900">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6 font-body">Book a free discovery call and we'll help you find the answers.</p>
          <Link href="/#contact" className="btn btn-primary inline-block">
            Book Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
