import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft,
  Search,
  Target,
  BarChart3,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";

export const metadata = {
  title: "Market Validator Case Study - FirstMileDev",
  description: "Learn how FirstMileDev validated a niche sneaker marketplace concept, saving the client $30K in development costs.",
};

export default function EcommerceCaseStudy() {
  return (
    <main id="main-content" className="bg-white">
      {/* Case Study Hero */}
      <section className="bg-accent-teal text-white px-6 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white mb-12 transition-colors group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Work
          </Link>
          
          <div className="mb-8">
            <span className="bg-white text-accent-teal px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              E-Commerce Validation
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline uppercase mb-10 leading-[0.9] tracking-tighter">
            Market <br />Validator
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl font-medium leading-relaxed">
            How we validated a niche sneaker marketplace concept in 14 days and
            saved the client $30,000 in development costs.
          </p>
        </div>
      </section>

      {/* Featured Image Section */}
      <div className="max-w-5xl mx-auto px-6 -mt-16 md:-mt-24 relative z-20">
        <div className="aspect-video rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] border-8 border-white bg-gray-100">
          <Image 
            src="/images/E-Commerce Validator.png" 
            alt="Market Validator Dashboard"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Key Metrics Grid */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { val: "14 Days", label: "Analysis Time", icon: <Search className="text-accent-teal w-5 h-5 mb-3" /> },
              { val: "$2,000", label: "Total Cost", icon: <Target className="text-accent-teal w-5 h-5 mb-3" /> },
              { val: "$30K", label: "Capital Saved", icon: <ShieldCheck className="text-accent-teal w-5 h-5 mb-3" /> },
              { val: "0.8%", label: "Market CTR", icon: <BarChart3 className="text-accent-teal w-5 h-5 mb-3" /> },
            ].map((m, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
                {m.icon}
                <p className="text-3xl md:text-4xl font-headline text-gray-900 leading-none">{m.val}</p>
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-4">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-5xl font-headline uppercase mb-10 leading-tight text-gray-900">
                The <br /><span className="text-accent-teal">Challenge</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Mike, an aspiring entrepreneur, had an idea for a niche sneaker
                  marketplace focused on retro basketball shoes. He was ready to spend
                  $50,000 on development without validating whether anyone would
                  actually buy.
                </p>
                <p>
                  He approached FirstMileDev hoping to build the full marketplace.
                  Instead, we recommended a validation-first approach—test the market
                  demand before writing a single line of code.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-gray-900 text-white p-10 rounded-3xl flex flex-col justify-center shadow-2xl relative overflow-hidden">
              <h3 className="text-xl font-headline uppercase mb-6 text-accent-teal">The Verdict</h3>
              <p className="text-lg font-medium leading-relaxed text-gray-300">
                The target market was too small to justify a $50k custom build. We advised Mike to pivot before spending his life savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-32 bg-gray-50 rounded-[3rem] mx-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-headline uppercase mb-16 text-center text-gray-900">
            The <br /><span className="text-accent-teal">Solution</span>
          </h2>
          
          <div className="space-y-12">
            {[
              {
                n: 1,
                title: "Landing Page & Ad Testing (Week 1)",
                desc: "We created a high-converting landing page showcasing the concept, then ran targeted Facebook and Instagram ads to sneaker enthusiasts.",
              },
              {
                n: 2,
                title: "Data Analysis (Week 2)",
                desc: "Analyzed the campaign data. Findings: High impressions but low CTR (0.8%). The cost per interested lead was $47—indicating weak demand.",
              },
              {
                n: 3,
                title: "Consultation & Pivot",
                desc: "We provided a detailed market report. Instead of building, Mike decided to pivot his concept based on the data we gathered.",
              },
            ].map((s, i) => (
              <div key={i} className="flex gap-8 md:gap-12 group">
                <div className="bg-white text-accent-teal w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center font-headline text-2xl md:text-3xl flex-shrink-0 shadow-lg group-hover:bg-accent-teal group-hover:text-white transition-all duration-500">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-2xl font-headline uppercase mb-4 text-gray-900">{s.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 py-24 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-headline uppercase mb-12">The Results</h2>
          <div className="bg-accent-teal text-white p-8 md:p-20 rounded-[2rem] mb-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none text-white">
              <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>
            <p className="text-5xl md:text-8xl font-headline mb-4 relative z-10">$30,000</p>
            <p className="text-xl md:text-2xl font-bold uppercase tracking-widest relative z-10">
              Development Costs Saved
            </p>
            <p className="mt-8 opacity-90 max-w-xl mx-auto text-lg leading-relaxed relative z-10">
              By validating before building, Mike avoided spending his life
              savings on a product with uncertain demand. That's a win.
            </p>
          </div>
          <Link href="/#contact" className="btn btn-primary btn-lg px-12">
            Start Your Validation
          </Link>
        </div>
      </section>
    </main>
  );
}
