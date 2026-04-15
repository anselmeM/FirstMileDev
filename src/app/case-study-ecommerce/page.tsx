import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Market Validator Case Study - FirstMileDev",
  description: "Learn how FirstMileDev validated a niche sneaker marketplace concept, saving the client $30K in development costs.",
};

export default function EcommerceCaseStudy() {
  return (
    <main id="main-content">
      {/* Case Study Hero */}
      <section className="bg-accent-teal text-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 flex items-center gap-2">
            <Link href="/" className="text-white/80 hover:text-white transition">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Case Study</span>
          </nav>
          <div className="mb-6">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              E-Commerce
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline uppercase mb-6">
            Market Validator
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            How we validated a niche sneaker marketplace concept in 14 days and
            saved the client $30,000 in development costs.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "14 Days", label: "Validation Time" },
              { val: "$2,000", label: "Investment" },
              { val: "$30K", label: "Dev Costs Saved" },
              { val: "Small", label: "Market Verdict" },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-headline text-accent-teal">{m.val}</p>
                <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline uppercase mb-8">
            The Challenge
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Mike, an aspiring entrepreneur, had an idea for a niche sneaker
            marketplace focused on retro basketball shoes. He was ready to spend
            $50,000 on development without validating whether anyone would
            actually buy.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            He approached FirstMileDev hoping to build the full marketplace.
            Instead, we recommended a validation-first approach—test the market
            demand before writing a single line of code.
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
                title: "Week 1: Landing Page + Ad Testing",
                desc: "We created a high-converting landing page showcasing the concept, then ran targeted Facebook and Instagram ads to sneaker enthusiasts.",
              },
              {
                title: "Week 2: Data Analysis",
                desc: "Analyzed the campaign data. Findings: High impressions but low CTR (0.8%). The cost per interested lead was $47—indicating weak demand.",
              },
              {
                title: "The Verdict",
                desc: "The target market was too small. We recommended testing the concept as a side project or focusing on a broader market segment.",
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

      {/* Results */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline uppercase mb-12">The Results</h2>
          <div className="bg-accent-teal text-white p-8 md:p-12 rounded-xl mb-12">
            <p className="text-5xl md:text-7xl font-headline mb-4">$30,000</p>
            <p className="text-xl md:text-2xl font-semibold">
              Development Costs Saved
            </p>
            <p className="mt-6 opacity-90 max-w-xl mx-auto">
              By validating before building, Mike avoided spending his life
              savings on a product with uncertain demand.
            </p>
          </div>
          <Link href="/#contact" className="btn btn-primary btn-lg">
            Start Your Validation
          </Link>
        </div>
      </section>
    </main>
  );
}
