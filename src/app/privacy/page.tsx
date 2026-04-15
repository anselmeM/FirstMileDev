import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft, Mail, ChevronRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | FirstMileDev",
  description: "FirstMileDev Privacy Policy - Learn how we collect, use, and protect your personal information when you use our services.",
  alternates: {
    canonical: "https://firstmiledev.com/privacy",
  },
};

export default function PrivacyPage() {
  const sections = [
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "information-sharing", title: "Information Sharing" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "data-security", title: "Data Security" },
    { id: "your-rights", title: "Your Rights" },
    { id: "third-party", title: "Third-Party Services" },
    { id: "changes", title: "Changes to This Policy" },
    { id: "contact", title: "Contact Us" }
  ];

  return (
    <main id="main-content" className="bg-white">
      {/* Hero Section */}
      <section className="bg-accent-red text-white px-6 md:px-8 lg:px-16 py-20 md:py-32 relative overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <Link 
            href="/" 
            className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-white/60 hover:text-white mb-12 transition-all group"
          >
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Roadmap
          </Link>
          
          <div className="flex items-center gap-3 mb-8">
            <Shield className="text-white w-6 h-6" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Compliance & Legal</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-headline uppercase mb-8 leading-[0.9] tracking-tighter">
            Privacy <br /><span className="text-black">Policy</span>
          </h1>
          
          <p className="text-lg md:text-xl font-bold uppercase max-w-2xl leading-relaxed text-white opacity-90 tracking-wide">
            Your trust is our most valuable asset. This policy outlines exactly how we handle your information with total transparency.
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
                <div className="bg-carbon-900 rounded-3xl p-8 text-white shadow-2xl overflow-hidden relative">
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
                        <span>0{i+1}. {section.title}</span>
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <h4 className="font-headline text-sm uppercase mb-4 text-gray-900">Need Clarity?</h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">If you have specific questions about your data, our legal team is ready to help.</p>
                  <a href="mailto:hello@firstmiledev.com" className="btn btn-primary btn-sm btn-full flex items-center justify-center gap-2 group">
                    <Mail size={14} />
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Legal Content */}
            <div className="lg:col-span-8 space-y-12">
              
              <div id="information-we-collect" className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 scroll-mt-32">
                <h2 className="font-headline text-3xl md:text-4xl uppercase mb-8 text-gray-900">1. Information We Collect</h2>
                <div className="prose prose-lg prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600">
                  <p>We collect information that you provide directly to us, as well as information automatically collected when you use our services.</p>
                  <h3 className="font-headline text-xl uppercase mt-10 mb-4 text-gray-800">Information You Provide</h3>
                  <ul className="space-y-4">
                    <li><strong>Contact Information:</strong> Name, email address, phone number when you fill out forms or book discovery calls.</li>
                    <li><strong>Project Information:</strong> Details about your startup, business goals, and technical requirements when discussing projects.</li>
                    <li><strong>Payment Information:</strong> Billing details for project payments processed securely through third-party processors.</li>
                  </ul>
                  <h3 className="font-headline text-xl uppercase mt-10 mb-4 text-gray-800">Automatically Collected</h3>
                  <ul className="space-y-4">
                    <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and tactical links clicked.</li>
                    <li><strong>Device Information:</strong> Browser type, operating system, and unique device identifiers.</li>
                  </ul>
                </div>
              </div>

              <div id="how-we-use" className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 scroll-mt-32">
                <h2 className="font-headline text-3xl md:text-4xl uppercase mb-8 text-gray-900">2. How We Use Data</h2>
                <div className="prose prose-lg prose-p:text-gray-600 prose-li:text-gray-600">
                  <p>We use the information we collect to provide, maintain, and improve the FirstMileDev experience:</p>
                  <ul className="space-y-4">
                    <li>Responding to inquiries and providing technical support.</li>
                    <li>Scheduling and conducting discovery calls and roadmap consultations.</li>
                    <li>Processing payments and delivering automated invoices.</li>
                    <li>Analyzing trends to improve our validation methodology.</li>
                    <li>Detecting and preventing fraudulent transactions.</li>
                  </ul>
                </div>
              </div>

              <div id="information-sharing" className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 scroll-mt-32">
                <h2 className="font-headline text-3xl md:text-4xl uppercase mb-8 text-gray-900">3. Information Sharing</h2>
                <div className="prose prose-lg prose-p:text-gray-600">
                  <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
                  <ul className="space-y-4">
                    <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website and conducting business.</li>
                    <li><strong>Legal Requirements:</strong> Disclosing information when required by law or in response to valid requests by public authorities.</li>
                    <li><strong>Business Transfers:</strong> Information may be transferred as part of a merger or sale of company assets.</li>
                  </ul>
                </div>
              </div>

              <div id="cookies" className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 scroll-mt-32">
                <h2 className="font-headline text-3xl md:text-4xl uppercase mb-8 text-gray-900">4. Cookies & Tracking</h2>
                <div className="prose prose-lg prose-p:text-gray-600">
                  <p>We use cookies and similar tracking technologies to enhance your browsing experience and understand user flow.</p>
                  <h3 className="font-headline text-xl uppercase mt-10 mb-4 text-gray-800">Types of Cookies</h3>
                  <ul className="space-y-4">
                    <li><strong>Essential:</strong> Required for basic website functionality.</li>
                    <li><strong>Analytics:</strong> Help us understand how visitors use our site (GA4, Clarity).</li>
                    <li><strong>Marketing:</strong> Used to deliver relevant advertisements.</li>
                  </ul>
                </div>
              </div>

              <div id="contact" className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 scroll-mt-32">
                <h2 className="font-headline text-3xl md:text-4xl uppercase mb-8 text-gray-900">9. Contact Us</h2>
                <div className="prose prose-lg prose-p:text-gray-600">
                  <p>If you have any questions about this Privacy Policy, our data practices, or your rights, please reach out to us:</p>
                  <div className="bg-gray-50 p-8 rounded-2xl mt-8 border border-gray-100">
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
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline uppercase mb-8 leading-[0.95]">
            Ready to <br /><span className="text-accent-red">Validate?</span>
          </h2>
          <p className="text-xl opacity-60 mb-12 max-w-xl mx-auto leading-relaxed font-medium">
            Don't let legalities slow you down. Let's focus on building your breakthrough product.
          </p>
          <Link href="/#contact" className="btn btn-primary btn-lg px-12">
            Book Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
