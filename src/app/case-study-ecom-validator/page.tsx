import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldAlert,
  BarChart2
} from "lucide-react";

export const metadata = {
  title: "E-Commerce Validator Case Study - FirstMileDev",
  description: "Learn how FirstMileDev validated an e-commerce startup idea, proving market demand before development saved $25K in unnecessary costs.",
};

export default function EcomValidatorCaseStudy() {
  return (
    <main id="main-content" className="bg-white">
      {/* Case Study Hero */}
      <section className="bg-accent-red text-white px-6 py-16 md:py-24 relative overflow-hidden">
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
            <span className="bg-white text-accent-red px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              E-Commerce Build
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline uppercase mb-10 leading-[0.9] tracking-tighter">
            E-Commerce <br />Validator
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl font-medium leading-relaxed">
            How we validated an online store concept and helped the client make a
            data-driven decision before investing in development.
          </p>
        </div>
      </section>

      {/* Featured Image Section */}
      <div className="max-w-5xl mx-auto px-6 -mt-16 md:-mt-24 relative z-20">
        <div className="aspect-video rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] border-8 border-white bg-gray-100">
          <Image 
            src="/images/E-Commerce Validator.png" 
            alt="E-Commerce Validator"
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
              { val: "14 Days", label: "Test Duration", icon: <Clock className="text-accent-red w-5 h-5 mb-3" /> },
              { val: "$2,500", label: "Test Budget", icon: <BarChart2 className="text-accent-red w-5 h-5 mb-3" /> },
              { val: "$25K", label: "Risk Avoided", icon: <ShieldAlert className="text-accent-red w-5 h-5 mb-3" /> },
              { val: "0.6%", label: "Market CTR", icon: <AlertTriangle className="text-accent-red w-5 h-5 mb-3" /> },
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

      {/* Challenge & Solution */}
      <section className="px-6 py-16 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-5xl font-headline uppercase mb-10 leading-tight text-gray-900">
                The <br /><span className="text-accent-red">Challenge</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Lisa, an entrepreneur with a background in fashion retail, had a
                  vision for an online boutique selling sustainable, ethically-made
                  clothing. She was ready to invest $50,000 in building a full
                  e-commerce platform.
                </p>
                <p>
                  Before committing her savings, she wanted to validate whether there
                  was actually demand for sustainable fashion in her target demographic.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-carbon-900 text-white p-10 rounded-3xl flex flex-col justify-center shadow-2xl relative overflow-hidden">
              <h3 className="text-xl font-headline uppercase mb-6 text-accent-red">Verdict</h3>
              <p className="text-lg font-medium leading-relaxed text-gray-300">
                High saturation & low intent. We recommended a pivot to a subscription-based model or a focused micro-niche.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-32 bg-gray-50 rounded-[3rem] mx-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-headline uppercase mb-16 text-center text-gray-900">
            The <br /><span className="text-accent-red">Solution</span>
          </h2>
          
          <div className="space-y-12">
            {[
              {
                n: 1,
                title: "Phase 1: Market Research (Week 1)",
                desc: "We created a high-converting landing page showcasing the product concept with email signup for early access. Then ran targeted Facebook and Instagram ads.",
              },
              {
                n: 2,
                title: "Phase 2: Data Analysis (Week 2)",
                desc: "Found that while impressions were high, CTR was low (0.6%). Cost per lead was $89—indicating weak market demand for this specific niche.",
              },
              {
                n: 3,
                title: "The Pivot",
                desc: "Data showed the niche was oversaturated. We recommended Lisa test with a pre-order model or micro-niche before full development.",
              },
            ].map((s, i) => (
              <div key={i} className="flex gap-8 md:gap-12 group">
                <div className="bg-white text-accent-red w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center font-headline text-2xl md:text-3xl flex-shrink-0 shadow-lg group-hover:bg-accent-red group-hover:text-white transition-all duration-500">
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

      {/* CTA */}
      <section className="px-6 py-24 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-headline uppercase mb-12 text-gray-900">
            Ready to <br /><span className="text-accent-red">Validate?</span>
          </h2>
          <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto text-gray-600 leading-relaxed font-medium">
            Let's help you validate before you build. Book a free discovery call
            to discuss your concept and stop wasting capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link href="/#contact" className="btn btn-primary btn-lg px-12 group">
              Book Discovery Call
            </Link>
            <Link href="/calculator" className="btn btn-outline btn-lg px-12">
              Cost Calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
