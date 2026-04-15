import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Clock,
  DollarSign,
  Award
} from "lucide-react";

export const metadata = {
  title: "FinTech MVP Case Study - FirstMileDev",
  description: "Learn how FirstMileDev helped a startup build a financial dashboard MVP in 4 weeks that secured Pre-Seed funding.",
};

export default function FintechCaseStudy() {
  return (
    <main id="main-content" className="bg-white">
      {/* Case Study Hero */}
      <section className="bg-accent-red text-white px-6 py-16 md:py-24 relative overflow-hidden">
        {/* Background Pattern */}
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
              FinTech Build
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline uppercase mb-10 leading-[0.9] tracking-tighter">
            Financial <br />Dashboard MVP
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl font-medium leading-relaxed">
            Helping startup founders track their metrics and secure Pre-Seed
            funding with a functional MVP built in 4 weeks.
          </p>
        </div>
      </section>

      {/* Featured Image Section */}
      <div className="max-w-5xl mx-auto px-6 -mt-16 md:-mt-24 relative z-20">
        <div className="aspect-video relative rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] border-8 border-white bg-gray-100">
          <Image 
            src="/images/sassdashboard.png" 
            alt="Financial Dashboard MVP"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mt-6">
          Real-time data visualization & automated reporting
        </p>
      </div>

      {/* Key Metrics Grid */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { val: "4 Weeks", label: "Build Time", icon: <Clock className="text-accent-red w-5 h-5 mb-3" /> },
              { val: "$5,000", label: "Investment", icon: <DollarSign className="text-accent-red w-5 h-5 mb-3" /> },
              { val: "$500K", label: "Seed Funding", icon: <Award className="text-accent-red w-5 h-5 mb-3" /> },
              { val: "2,400+", label: "Active Users", icon: <TrendingUp className="text-accent-red w-5 h-5 mb-3" /> },
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

      {/* The Challenge & Solution */}
      <section className="px-6 py-16 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-5xl font-headline uppercase mb-10 leading-tight text-gray-900">
                The <br /><span className="text-accent-red">Challenge</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Sarah and John, two fintech founders, had a brilliant idea for a
                  financial dashboard that would help small businesses track their
                  cash flow in real-time.
                </p>
                <p>
                  Their previous development team had quoted $40,000 and 6 months for a
                  full product. They needed a faster, more affordable solution to
                  validate demand and secure Pre-Seed funding.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-carbon-900 text-white p-10 rounded-3xl flex flex-col justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award size={120} />
              </div>
              <h3 className="text-xl font-headline uppercase mb-6 relative z-10">The Result</h3>
              <div className="space-y-8 relative z-10">
                <div>
                  <p className="text-4xl font-headline text-accent-red">$500,000</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50">Raised in 7 months</p>
                </div>
                <div>
                  <p className="text-4xl font-headline text-accent-red">100%</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50">Market Validation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Phases */}
      <section className="px-6 py-20 md:py-32 bg-gray-50 rounded-[3rem] mx-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-headline uppercase mb-16 text-center text-gray-900">
            The <br /><span className="text-accent-red">Solution</span>
          </h2>
          
          <div className="space-y-12">
            {[
              {
                n: 1,
                title: "Rapid Validation (Week 1)",
                desc: "We created a high-fidelity landing page with a waitlist signup form. Ran $2,000 in targeted LinkedIn ads to validate demand. Result: 847 signups in 14 days.",
              },
              {
                n: 2,
                title: "Low-Code MVP (Weeks 2-3)",
                desc: "Using Webflow + Wized + Xano, we built a functional dashboard with real-time data visualization, user authentication, and Stripe integration.",
              },
              {
                n: 3,
                title: "Investor Demo (Week 4)",
                desc: "Delivered a polished product demo to investors. The functional MVP with real data convinced investors to commit $500K in Pre-Seed funding.",
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

          <div className="mt-24 pt-16 border-t border-gray-200">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8 text-center">Tech Stack Precision</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Webflow", "Wized", "Xano", "Stripe", "Chart.js", "Tailwind"].map((t) => (
                <span
                  key={t}
                  className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs border border-gray-100 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-6 py-24 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-20 bg-gray-50 rounded-[2rem] border border-gray-100">
            <CheckCircle2 className="text-accent-red w-16 h-16 mb-8" />
            <p className="text-2xl md:text-4xl font-medium text-gray-900 leading-tight mb-10 italic">
              "Anselme moved faster in 2 weeks than our previous dev shop did in 2 months. The transparency was refreshing and the results were undeniable."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-red rounded-full flex items-center justify-center text-white font-black">SJ</div>
              <div>
                <p className="font-headline uppercase text-sm tracking-tight">Sarah J.</p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">CEO, FinTech Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Footer CTA */}
      <section className="mb-24 px-6">
        <div className="max-w-4xl mx-auto py-20 bg-accent-red text-white rounded-[2rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-headline uppercase mb-8 leading-tight relative z-10">
            Ready to Build Your <br /><span className="text-black">First Mile?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link href="/#contact" className="btn btn-white btn-lg px-12 group">
              Start Your Validation
            </Link>
            <Link href="/calculator" className="btn btn-outline-white btn-lg px-12">
              Cost Calculator
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
