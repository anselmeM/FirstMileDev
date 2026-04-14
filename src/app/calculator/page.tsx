import React from "react";
import CalculatorForm from "./CalculatorForm";
import Link from "next/link";

export const metadata = {
  title: "App Cost Calculator - FirstMileDev",
  description: "Estimate your MVP development cost with our free app cost calculator. Get a tailored quote based on features, complexity, and timeline.",
};

export default function CalculatorPage() {
  return (
    <main id="main-content">
      {/* Calculator Hero */}
      <section className="bg-accent-red text-white px-6 md:px-8 lg:px-16 py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl uppercase font-headline mb-8 leading-none">
            <span className="block">APP COST</span>
            <span className="block text-black">CALCULATOR</span>
          </h1>
          <p className="text-lg md:text-xl font-bold uppercase mb-8 leading-relaxed opacity-90 max-w-2xl tracking-wide">
            Estimate your MVP development cost in seconds.<br />
            Get a tailored quote based on features, complexity, and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a href="#cost-calculator" className="btn btn-white btn-lg">
              Calculate Now
            </a>
            <Link href="/#contact" className="btn btn-outline-white btn-lg">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="cost-calculator" className="px-6 py-16 md:py-24 bg-[#FAFAFA]">
        <CalculatorForm />
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-[#1f2937] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-headline uppercase mb-4">Ready to Build?</h2>
        <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
          Let's discuss your project and find the best path forward. Whether it's rapid validation or a custom scale build.
        </p>
        <Link href="/#contact" className="btn btn-primary btn-lg">
          Start Your Project
        </Link>
      </section>
    </main>
  );
}
