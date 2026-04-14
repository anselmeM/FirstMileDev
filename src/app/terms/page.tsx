import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | FirstMileDev",
  description: "FirstMileDev Terms of Service - Learn the terms and conditions governing the use of our services and website.",
  alternates: {
    canonical: "https://firstmiledev.com/terms",
  },
  openGraph: {
    type: "website",
    url: "https://firstmiledev.com/terms",
    title: "Terms of Service | FirstMileDev",
    description: "FirstMileDev Terms of Service - Terms and conditions for using our services.",
    images: ["https://firstmiledev.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | FirstMileDev",
    description: "FirstMileDev Terms of Service - Terms and conditions for using our services.",
    images: ["https://firstmiledev.com/twitter-image.jpg"],
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#FAFAFA]">
      {/* Page Header */}
      <section className="bg-[#FF3B3F] text-white px-6 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6">
            <Link href="/" className="text-white/80 hover:text-white transition-colors font-body">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium font-body">Terms of Service</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase font-headline">Terms of Service</h1>
          <p className="text-lg text-white/80 mt-4 max-w-2xl font-body">Please read these terms carefully before using our services.</p>
          <p className="text-sm text-white/60 mt-4 font-body">Last Updated: March 2026</p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="px-6 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 shadow-card mb-8 border border-gray-100">
            <p className="text-gray-600 mb-4 font-body leading-relaxed">Welcome to FirstMileDev. These Terms of Service ("Terms") govern your access to and use of the FirstMileDev website and services. By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.</p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-xl p-6 shadow-card mb-12 border border-gray-100">
            <h2 className="font-headline text-xl uppercase mb-4">Quick Links</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-body">
              <li><Link href="#acceptance" className="text-accent-red hover:text-black transition-colors">1. Acceptance of Terms</Link></li>
              <li><Link href="#services" className="text-accent-red hover:text-black transition-colors">2. Our Services</Link></li>
              <li><Link href="#intellectual-property" className="text-accent-red hover:text-black transition-colors">3. Intellectual Property</Link></li>
              <li><Link href="#user-conduct" className="text-accent-red hover:text-black transition-colors">4. User Conduct</Link></li>
              <li><Link href="#payment-terms" className="text-accent-red hover:text-black transition-colors">5. Payment Terms</Link></li>
              <li><Link href="#confidentiality" className="text-accent-red hover:text-black transition-colors">6. Confidentiality</Link></li>
              <li><Link href="#limitation" className="text-accent-red hover:text-black transition-colors">7. Limitation of Liability</Link></li>
              <li><Link href="#termination" className="text-accent-red hover:text-black transition-colors">8. Termination</Link></li>
              <li><Link href="#governing-law" className="text-accent-red hover:text-black transition-colors">9. Governing Law</Link></li>
              <li><Link href="#contact" className="text-accent-red hover:text-black transition-colors">10. Contact Us</Link></li>
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div id="acceptance" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">1. Acceptance of Terms</h2>
              <div className="text-gray-600 space-y-4 font-body leading-relaxed">
                <p>By accessing and using the FirstMileDev website (firstmiledev.com) and our services, you accept and agree to be bound by the terms and provisions of this agreement. Additionally, when using FirstMileDev's services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
                <p>We reserve the right to update these Terms at any time. Any changes will be posted on this page. Your continued use of the website following any changes indicates your acceptance of the new Terms.</p>
              </div>
            </div>

            {/* Section 2 */}
            <div id="services" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">2. Our Services</h2>
              <div className="text-gray-600 space-y-4 font-body leading-relaxed">
                <p>FirstMileDev provides MVP development and startup validation services, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Market Validation:</strong> Testing market demand through ad campaigns and landing pages</li>
                  <li><strong>MVP Development:</strong> Building minimum viable products using No-Code and Low-Code tools</li>
                  <li><strong>Custom Development:</strong> Scaling applications using MERN stack and custom architecture</li>
                  <li><strong>Consultation:</strong> Providing technical strategy and guidance for startups</li>
                </ul>
                <p className="mt-4">The specific scope of services, timelines, and deliverables will be defined in individual project agreements.</p>
              </div>
            </div>

            {/* Section 3 */}
            <div id="intellectual-property" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">3. Intellectual Property</h2>
              <div className="text-gray-600 space-y-4 font-body leading-relaxed">
                <h3 className="font-bold text-gray-800 mt-4">Our Intellectual Property</h3>
                <p>The website and its original content, features, and functionality are owned by FirstMileDev and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
                
                <h3 className="font-bold text-gray-800 mt-6">Client Ownership</h3>
                <p>Upon full payment for services rendered, the client shall own 100% of the intellectual property, code, and design assets created specifically for their project. FirstMileDev retains the right to use general knowledge, techniques, and experience gained during the project.</p>
                
                <h3 className="font-bold text-gray-800 mt-6">Third-Party Assets</h3>
                <p>Third-party assets (stock images, icons, frameworks) are subject to their respective licenses. Clients are responsible for any third-party licensing fees beyond the standard services provided.</p>
              </div>
            </div>

            {/* Section 4 */}
            <div id="user-conduct" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">4. User Conduct</h2>
              <div className="text-gray-600 space-y-4 font-body leading-relaxed">
                <p>When using our website and services, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Upload or transmit viruses, malware, or other harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper operation of the website</li>
                  <li>Engage in any activity that could damage, disable, or overburden our servers</li>
                  <li>Use our services for any unlawful purpose</li>
                  <li>Collect or store personal data about other users without their consent</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div id="payment-terms" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">5. Payment Terms</h2>
              <div className="text-gray-600 space-y-4 font-body leading-relaxed">
                <h3 className="font-bold text-gray-800 mt-4">Pricing</h3>
                <p>Pricing for services is as quoted in proposals and project agreements. All prices are in USD unless otherwise specified.</p>
                
                <h3 className="font-bold text-gray-800 mt-6">Payment Schedule</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Validation Services:</strong> 50% upfront, 50% upon completion</li>
                  <li><strong>MVP Development:</strong> 30% upfront, 40% at midpoint, 30% upon delivery</li>
                  <li><strong>Custom Development:</strong> As outlined in individual project agreements</li>
                </ul>
                
                <h3 className="font-bold text-gray-800 mt-6">Payment Methods</h3>
                <p>We accept bank transfers, credit cards, and other payment methods as agreed upon in project agreements.</p>
                
                <h3 className="font-bold text-gray-800 mt-6">Refunds</h3>
                <p>Due to the custom nature of our services, refunds are handled on a case-by-case basis. If you have concerns about our services, please contact us directly to discuss.</p>
              </div>
            </div>

            {/* Section 6 */}
            <div id="confidentiality" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">6. Confidentiality</h2>
              <div className="text-gray-600 space-y-4 font-body leading-relaxed">
                <p>Both parties agree to maintain the confidentiality of proprietary information exchanged during the course of business:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Technical information, code, and architectural decisions</li>
                  <li>Business strategies, marketing plans, and financial information</li>
                  <li>Client lists, project details, and user data</li>
                  <li>Trade secrets and proprietary methodologies</li>
                </ul>
                <p className="mt-4">This obligation survives termination of the business relationship. Confidentiality does not include information that is publicly available, independently developed, or received from third parties.</p>
              </div>
            </div>

            {/* Section 7 */}
            <div id="limitation" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">7. Limitation of Liability</h2>
              <div className="text-gray-600 space-y-4 font-body leading-relaxed">
                <p>FirstMileDev shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of or inability to use our services</li>
                  <li>Any unauthorized access to or use of our servers</li>
                  <li>Any interruption or cessation of transmission to or from our services</li>
                  <li>Any bugs, viruses, or the like that may be transmitted through our services</li>
                  <li>Any errors or omissions in any content</li>
                </ul>
                <p className="mt-4">Our total liability shall not exceed the amount paid by you for the specific service that gave rise to the claim.</p>
                <p className="mt-4">We make no warranties, express or implied, regarding the success of market validation or the commercial viability of any product built through our services.</p>
              </div>
            </div>

            {/* Section 8 */}
            <div id="termination" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">8. Termination</h2>
              <div className="text-gray-600 space-y-4 font-body leading-relaxed">
                <p>Either party may terminate this agreement with written notice. Upon termination:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All outstanding payments become immediately due</li>
                  <li>Client owns all work completed up to the termination date (upon full payment)</li>
                  <li>Confidentiality obligations survive termination</li>
                  <li>Return or destroy confidential materials upon request</li>
                </ul>
                <p className="mt-4">We reserve the right to terminate access to our services for any reason, including violation of these Terms.</p>
              </div>
            </div>

            {/* Section 9 */}
            <div id="governing-law" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">9. Governing Law</h2>
              <div className="text-gray-600 space-y-4 font-body leading-relaxed">
                <p>These Terms shall be governed by and construed in accordance with the laws of Ontario, Canada, without regard to its conflict of law provisions.</p>
                <p>Any disputes arising under these Terms shall be resolved through binding arbitration in Ottawa, Ontario, in accordance with the rules of the Canadian Arbitration Association.</p>
              </div>
            </div>

            {/* Section 10 */}
            <div id="contact" className="bg-white rounded-xl p-8 shadow-card border border-gray-100 scroll-mt-24">
              <h2 className="font-headline text-2xl uppercase mb-4 text-gray-900">10. Contact Us</h2>
              <div className="text-gray-600 space-y-4 font-body leading-relaxed">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4 font-body">
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
          <Link href="/#contact" className="btn btn-primary btn-lg inline-block transition-transform hover:scale-105">
            Book Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
