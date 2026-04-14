import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "E-Commerce Validator Case Study - FirstMileDev",
  description: "Learn how FirstMileDev validated an e-commerce startup idea, proving market demand before development saved $25K in unnecessary costs.",
};

export default function EcomValidatorCaseStudy() {
  return (
    <main id="main-content">
      {/* Case Study Hero */}
      <section className="bg-accent-red text-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              E-Commerce
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline uppercase mb-6">
            E-Commerce Validator
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            How we validated an online store concept and helped the client make a
            data-driven decision before investing in development.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 py-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 relative aspect-video md:aspect-[21/9]">
            <Image
              src="/images/E-Commerce Validator.png"
              alt="E-Commerce Validator"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Market validation landing page with ad campaign results and market
            analysis
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "14 Days", label: "Validation Time" },
              { val: "$2,500", label: "Investment" },
              { val: "$25K", label: "Dev Costs Saved" },
              { val: "Low", label: "Market Demand" },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-headline text-accent-red">{m.val}</p>
                <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline uppercase mb-8">
            The Challenge
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Lisa, an entrepreneur with a background in fashion retail, had a
            vision for an online boutique selling sustainable, ethically-made
            clothing. She was ready to invest $50,000 in building a full
            e-commerce platform.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Before committing her savings, she wanted to validate whether there
            was actually demand for sustainable fashion in her target demographic.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline uppercase mb-8">
            The Solution
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Phase 1: Market Research & Landing Page (Week 1)",
                desc: "We created a high-converting landing page showcasing the product concept with email signup for early access. Then ran targeted Facebook and Instagram ads.",
              },
              {
                title: "Phase 2: Ad Campaign Analysis (Week 2)",
                desc: "Found that while impressions were high, CTR was low (0.6%). Cost per lead was $89—indicating weak market demand for this specific niche.",
              },
              {
                title: "The Verdict",
                desc: "Data showed the niche was oversaturated. We recommended pivoting or testing with a pre-order model before full development.",
              },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-card">
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-24 bg-carbon-800 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-headline uppercase mb-6">
          Ready to Validate Your Idea?
        </h2>
        <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
          Let's help you validate before you build. Book a free discovery call
          to discuss your concept.
        </p>
        <Link href="/#contact" className="btn btn-primary btn-lg">
          Book Discovery Call
        </Link>
      </section>
    </main>
  );
}
