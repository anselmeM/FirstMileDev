import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Scale, ArrowLeft, Mail, ChevronRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | FirstMileDev",
  description: "FirstMileDev Terms of Service - Learn the terms and conditions governing the use of our services and website.",
  alternates: {
    canonical: "https://firstmiledev.com/terms",
  },
};

export default function TermsPage() {
  const sections = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "services", title: "Our Services" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "user-conduct", title: "User Conduct" },
    { id: "payment-terms", title: "Payment Terms" },
    { id: "confidentiality", title: "Confidentiality" },
    { id: "limitation", title: "Limitation of Liability" },
    { id: "termination", title: "Termination" },
    { id: "governing-law", title: "Governing Law" },
    { id: "contact", title: "Contact Us" }
  ];

  return (
    <main id="main-content" className="bg-white">
      {/* Hero Section */}
      <section className="bg-accent-red text-white px-6 md:px-8 lg:px-16 py-20 md:py-32 relative overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center md:text-left">
          <Link 
            href="/" 
            className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-white/60 hover:text-white mb-12 transition-all group"
          >
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Roadmap
          </Link>
          
          <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
            <Scale className="text-white w-6 h-6" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Agreement & Conditions</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-headline uppercase mb-8 leading-[0.9] tracking-tighter">
            Terms of <br /><span className="text-black">Service</span>
          </h1>
          
          <p className="text-lg md:text-xl font-bold uppercase max-w-2xl leading-relaxed text-white opacity-90 tracking-wide">
            Please read these terms carefully. By using our services, you agree to be bound by these provisions for a fair and professional partnership.
          </p>
          
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mt-12">
            Last Updated: March 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-8 lg:px-16 py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar TOC */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-8">
                <div className="bg-carbon-900 rounded-3xl p-8 text-white shadow-2xl overflow-hidden relative border border-white/5">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <FileText size={100} />
                  </div>
                  <h3 className="font-headline text-xl uppercase mb-8 relative z-10">Directory</h3>
                  <nav className="space-y-4 relative z-10">
                    {sections.map((section, i) => (
                      <Link 
                        key={section.id} 
                        href={`#${section.id}`}
                        className="group flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-accent-red transition-colors"
                      >
                        <span>{i+1 < 10 ? `0${i+1}` : i+1}. {section.title}</span>
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <h4 className="font-headline text-sm uppercase mb-4 text-gray-900">Project Agreement</h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">Specific project deliverables and timelines are governed by individual signed statements of work.</p>
                  <Link href="/#contact" className="btn btn-primary btn-sm btn-full flex items-center justify-center gap-2 group">
                    Book Discovery Call
                  </Link>
                </div>
              </div>
            </div>

            {/* Legal Content */}
            <div className="lg:col-span-8 space-y-12">
              
              <div id="acceptance" className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 scroll-mt-32">
                <h2 className="font-headline text-3xl md:text-4xl uppercase mb-8 text-gray-900">1. Acceptance of Terms</h2>
                <div className="prose prose-lg prose-p:text-gray-600 prose-p:leading-relaxed">
                  <p>By accessing and using the FirstMileDev website (firstmiledev.com) and our services, you accept and agree to be bound by the terms and provisions of this agreement.</p>
                  <p>We reserve the right to update these Terms at any time. Any changes will be posted on this page. Your continued use of the website following any changes indicates your acceptance of the new Terms.</p>
                </div>
              </div>

              <div id="services" className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 scroll-mt-32">
                <h2 className="font-headline text-3xl md:text-4xl uppercase mb-8 text-gray-900">2. Our Services</h2>
                <div className="prose prose-lg prose-p:text-gray-600 prose-li:text-gray-600">
                  <p>FirstMileDev provides MVP development and startup validation services, including but not limited to:</p>
                  <ul className="space-y-4">
                    <li><strong>Market Validation:</strong> Testing market demand through ad campaigns and landing pages.</li>
                    <li><strong>MVP Development:</strong> Building minimum viable products using No-Code and Low-Code tools.</li>
                    <li><strong>Custom Development:</strong> Scaling applications using Next.js and custom architecture.</li>
                    <li><strong>Consultation:</strong> Providing technical strategy and guidance for startups.</li>
                  </ul>
                </div>
              </div>

              <div id="intellectual-property" className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 scroll-mt-32">
                <h2 className="font-headline text-3xl md:text-4xl uppercase mb-8 text-gray-900">3. Intellectual Property</h2>
                <div className="prose prose-lg prose-p:text-gray-600">
                  <h3 className="font-headline text-xl uppercase mt-4 mb-4 text-gray-800">Our Property</h3>
                  <p>The website and its original content, features, and functionality are owned by FirstMileDev and are protected by international copyright laws.</p>
                  
                  <h3 className="font-headline text-xl uppercase mt-10 mb-4 text-gray-800">Client Ownership</h3>
                  <p>Upon full payment for services rendered, the client shall own 100% of the intellectual property, code, and design assets created specifically for their project. FirstMileDev retains the right to use general knowledge and experience gained during the project.</p>
                </div>
              </div>

              <div id="payment-terms" className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 scroll-mt-32">
                <h2 className="font-headline text-3xl md:text-4xl uppercase mb-8 text-gray-900">5. Payment Terms</h2>
                <div className="prose prose-lg prose-p:text-gray-600">
                  <p>Pricing for services is as quoted in proposals and project agreements. All prices are in USD unless otherwise specified.</p>
                  <h3 className="font-headline text-xl uppercase mt-10 mb-4 text-gray-800">Typical Schedule</h3>
                  <ul className="space-y-4">
                    <li><strong>Validation:</strong> 50% upfront, 50% upon completion.</li>
                    <li><strong>MVP Build:</strong> 30% upfront, 40% at midpoint, 30% upon delivery.</li>
                  </ul>
                </div>
              </div>

              <div id="limitation" className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 scroll-mt-32">
                <h2 className="font-headline text-3xl md:text-4xl uppercase mb-8 text-gray-900">7. Liability</h2>
                <div className="prose prose-lg prose-p:text-gray-600">
                  <p>FirstMileDev shall not be liable for any indirect, incidental, or consequential damages resulting from your use of our services.</p>
                  <p>We make no warranties, express or implied, regarding the commercial success of any product built through our services. Market validation is an analysis tool, not a guarantee of future revenue.</p>
                </div>
              </div>

              <div id="contact" className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 scroll-mt-32">
                <h2 className="font-headline text-3xl md:text-4xl uppercase mb-8 text-gray-900">10. Contact Us</h2>
                <div className="prose prose-lg prose-p:text-gray-600">
                  <p>If you have any questions about these Terms of Service, please reach out:</p>
                  <div className="bg-gray-50 p-8 rounded-2xl mt-8 border border-gray-100 text-center md:text-left">
                    <p className="font-headline text-gray-900 uppercase text-lg mb-2">FirstMileDev</p>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Ottawa, Ontario, Canada</p>
                    <a href="mailto:hello@firstmiledev.com" className="text-accent-red font-black uppercase text-sm tracking-widest hover:text-black transition-colors">
                      hello@firstmiledev.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Article Footer CTA */}
      <section className="px-6 py-24 md:py-40 bg-carbon-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none text-white">
          <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline uppercase mb-8 leading-[0.95]">
            Let's Build <br /><span className="text-accent-red">Something Real.</span>
          </h2>
          <p className="text-xl opacity-60 mb-12 max-w-xl mx-auto leading-relaxed font-medium">
            Agreements are the foundation of trust. Let's get the formalities out of the way and start validating your vision.
          </p>
          <Link href="/#contact" className="btn btn-primary btn-lg px-12">
            Book Roadmap Call
          </Link>
        </div>
      </section>
    </main>
  );
}
