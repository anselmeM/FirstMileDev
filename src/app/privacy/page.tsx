import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | FirstMileDev",
  description: "FirstMileDev Privacy Policy - Learn how we collect, use, and protect your personal information when you use our services.",
  alternates: {
    canonical: "https://firstmiledev.com/privacy",
  },
  openGraph: {
    type: "website",
    url: "https://firstmiledev.com/privacy",
    title: "Privacy Policy | FirstMileDev",
    description: "FirstMileDev Privacy Policy - Learn how we collect, use, and protect your personal information.",
    images: ["https://firstmiledev.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | FirstMileDev",
    description: "FirstMileDev Privacy Policy - Learn how we collect, use, and protect your personal information.",
    images: ["https://firstmiledev.com/twitter-image.jpg"],
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#FAFAFA]">
      {/* Page Header */}
      <section className="bg-[#FF3B3F] text-white px-6 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase font-headline">Privacy Policy</h1>
          <p className="text-lg text-white/80 mt-4 max-w-2xl font-body">Your privacy is important to us. This policy outlines how we collect, use, and protect your information.</p>
          <p className="text-sm text-white/60 mt-4 font-body">Last Updated: March 2026</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Table of Contents */}
          <div className="bg-white rounded-xl p-6 shadow-card mb-12 border border-gray-100">
            <h2 className="font-headline text-xl uppercase mb-4">Quick Links</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-body">
              <li><Link href="#information-we-collect" className="text-accent-red hover:text-black transition-colors">1. Information We Collect</Link></li>
              <li><Link href="#how-we-use" className="text-accent-red hover:text-black transition-colors">2. How We Use Your Information</Link></li>
              <li><Link href="#information-sharing" className="text-accent-red hover:text-black transition-colors">3. Information Sharing</Link></li>
              <li><Link href="#cookies" className="text-accent-red hover:text-black transition-colors">4. Cookies & Tracking</Link></li>
              <li><Link href="#data-security" className="text-accent-red hover:text-black transition-colors">5. Data Security</Link></li>
              <li><Link href="#your-rights" className="text-accent-red hover:text-black transition-colors">6. Your Rights</Link></li>
              <li><Link href="#third-party" className="text-accent-red hover:text-black transition-colors">7. Third-Party Services</Link></li>
              <li><Link href="#changes" className="text-accent-red hover:text-black transition-colors">8. Changes to This Policy</Link></li>
              <li><Link href="#contact" className="text-accent-red hover:text-black transition-colors">9. Contact Us</Link></li>
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div id="information-we-collect" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">1. Information We Collect</h2>
              <div className="text-gray-600 space-y-4 font-body">
                <p>We collect information that you provide directly to us, as well as information automatically collected when you use our services.</p>
                <h3 className="font-bold text-gray-800 mt-6">Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number when you fill out forms or book discovery calls</li>
                  <li><strong>Project Information:</strong> Details about your startup, business goals, and technical requirements when discussing projects</li>
                  <li><strong>Payment Information:</strong> Billing details for project payments (processed securely through third-party payment processors)</li>
                  <li><strong>Communications:</strong> Any messages or inquiries you send us</li>
                </ul>
                <h3 className="font-bold text-gray-800 mt-6">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
                  <li><strong>Location Data:</strong> General location information (country/region) derived from IP address</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div id="how-we-use" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">2. How We Use Your Information</h2>
              <div className="text-gray-600 space-y-4 font-body">
                <p>We use the information we collect to provide, maintain, and improve our services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Schedule and conduct discovery calls and consultations</li>
                  <li>Process payments and deliver invoices</li>
                  <li>Send you important updates about our services</li>
                  <li>Understand how you use our website to improve user experience</li>
                  <li>Analyze trends and gather aggregate data for business insights</li>
                  <li>Detect and prevent fraudulent transactions and abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div id="information-sharing" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">3. Information Sharing</h2>
              <div className="text-gray-600 space-y-4 font-body">
                <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with trusted third parties who assist us in operating our website, conducting business, or servicing you</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information when required by law or in response to valid requests by public authorities</li>
                  <li><strong>Business Transfers:</strong> Information may be transferred as part of a merger, acquisition, or sale of company assets</li>
                  <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                </ul>
                <p className="mt-4">We require all third parties to respect the security of your personal information and treat it in accordance with the law.</p>
              </div>
            </div>

            {/* Section 4 */}
            <div id="cookies" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">4. Cookies & Tracking Technologies</h2>
              <div className="text-gray-600 space-y-4 font-body">
                <p>We use cookies and similar tracking technologies to enhance your browsing experience.</p>
                <h3 className="font-bold text-gray-800 mt-4">Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google Analytics)</li>
                  <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes</li>
                  <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                </ul>
                <h3 className="font-bold text-gray-800 mt-4">Managing Cookies</h3>
                <p>You can control or disable cookies through your browser settings. However, disabling essential cookies may affect the functionality of our website.</p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="data-security" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">5. Data Security</h2>
              <div className="text-gray-600 space-y-4 font-body">
                <p>We implement appropriate security measures to protect your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure servers with regular security updates</li>
                  <li>Limited access to personal information by authorized personnel</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Encrypted storage of sensitive data</li>
                </ul>
                <p className="mt-4">While we strive to protect your personal information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.</p>
              </div>
            </div>

            {/* Section 6 */}
            <div id="your-rights" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">6. Your Rights</h2>
              <div className="text-gray-600 space-y-4 font-body">
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request your data in a machine-readable format</li>
                  <li><strong>Restriction:</strong> Request restriction of processing your personal information</li>
                </ul>
                <p className="mt-4">To exercise any of these rights, please contact us at <strong>hello@firstmiledev.com</strong>.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div id="third-party" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">7. Third-Party Services</h2>
              <div className="text-gray-600 space-y-4 font-body">
                <p>Our website may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices of these third parties.</p>
                <p className="mt-4">We use the following third-party services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                  <li><strong>Microsoft Clarity:</strong> User behavior analytics</li>
                  <li><strong>Calendly:</strong> Scheduling and booking discovery calls</li>
                  <li><strong>Stripe:</strong> Payment processing</li>
                  <li><strong>Tawk.to:</strong> Live chat functionality</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div id="changes" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">8. Changes to This Policy</h2>
              <div className="text-gray-600 space-y-4 font-body">
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>
                <p>We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
              </div>
            </div>

            {/* Section 9 */}
            <div id="contact" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">9. Contact Us</h2>
              <div className="text-gray-600 space-y-4 font-body">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p className="font-bold text-gray-900 mb-2">FirstMileDev</p>
                  <p className="mb-2">Ottawa, Ontario, Canada</p>
                  <p>Email: <a href="mailto:hello@firstmiledev.com" className="text-accent-red hover:text-black transition-colors">hello@firstmiledev.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-8 lg:px-16 py-16 bg-[#1f2937] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl uppercase font-headline mb-4">Ready to Validate Your Idea?</h2>
          <p className="text-gray-400 mb-8 font-body">Book a discovery call and let's see if your startup is ready for the First Mile.</p>
          <Link href="/#contact" className="btn btn-primary btn-lg inline-block">
            Book Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
