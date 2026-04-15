import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "FinTech MVP Case Study - FirstMileDev",
  description: "Learn how FirstMileDev helped a startup build a financial dashboard MVP in 4 weeks that secured Pre-Seed funding.",
};

export default function FintechCaseStudy() {
  return (
    <main id="main-content">
      {/* Case Study Hero */}
      <section className="bg-accent-red text-white px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 flex items-center gap-2">
            <Link href="/" className="text-white/80 hover:text-white transition">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white">Case Study</span>
          </nav>
          <div className="mb-6">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              FinTech
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline uppercase mb-6">
            Financial Dashboard MVP
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Helping startup founders track their metrics and secure Pre-Seed
            funding with a functional MVP built in 4 weeks.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 py-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 relative aspect-video md:aspect-[21/9]">
            <Image
              src="/images/sassdashboard.png"
              alt="Financial Dashboard MVP"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Financial dashboard featuring real-time data visualization, user
            analytics, and automated reporting
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "4 Weeks", label: "Development Time" },
              { val: "$5,000", label: "Investment" },
              { val: "$500K", label: "Funding Secured" },
              { val: "3", label: "Integrations" },
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

      {/* The Challenge */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline uppercase mb-8">
            The Challenge
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Sarah and John, two fintech founders, had a brilliant idea for a
            financial dashboard that would help small businesses track their
            cash flow in real-time. However, they had limited budget and needed
            to prove their concept before investors would take notice.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Their previous development team had quoted $40,000 and 6 months for a
            full product. They needed a faster, more affordable solution to
            validate demand and secure Pre-Seed funding.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="px-6 py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline uppercase mb-8">
            The Solution
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Phase 1: Rapid Validation (Week 1)",
                desc: "We created a high-fidelity landing page with a waitlist signup form. Ran $2,000 in targeted LinkedIn ads to validate demand. Result: 847 signups in 14 days with 23% conversion rate.",
              },
              {
                title: "Phase 2: Low-Code MVP (Weeks 2-3)",
                desc: "Using Webflow + Wized + Xano, we built a functional dashboard with real-time data visualization, user authentication, and Stripe integration.",
              },
              {
                title: "Phase 3: Investor Demo (Week 4)",
                desc: "Delivered a polished product demo to investors. The functional MVP with real data convinced investors to commit $500K in Pre-Seed funding.",
              },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-card">
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-bold uppercase tracking-widest text-gray-500 mb-4">
              Tech Stack Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Webflow", "Wized", "Xano", "Stripe", "Chart.js"].map((t) => (
                <span
                  key={t}
                  className="bg-accent-red/10 text-accent-red px-4 py-2 rounded-lg font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials and more... */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline uppercase mb-12">The Results</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-accent-red text-white p-8 rounded-xl">
              <p className="text-5xl font-headline mb-2">$500K</p>
              <p className="text-lg font-semibold">Pre-Seed Funding Secured</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl text-gray-900">
              <p className="text-5xl font-headline mb-2">2,400+</p>
              <p className="text-lg font-semibold text-gray-600">Active Users</p>
            </div>
          </div>
          <Link href="/#contact" className="btn btn-primary btn-lg">
            Start Your Validation
          </Link>
        </div>
      </section>
    </main>
  );
}
