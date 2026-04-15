"use client";

import React from "react";
import Link from "next/link";
import { Youtube, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FF3B3F] text-white px-6 py-16" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="text-2xl font-headline uppercase tracking-tighter mb-4">
              FirstMileDev
            </div>
            <p className="text-white/80 text-sm max-w-sm mb-6">
              The Market-First MVP Agency. We validate demand before you write code for high-growth startups.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@AnselmeMotchoLive"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition"
                aria-label="FirstMileDev on YouTube"
              >
                <Youtube size={20} aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition"
                aria-label="FirstMileDev on Twitter"
              >
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition"
                aria-label="FirstMileDev on LinkedIn"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-white/60">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#process" className="text-white/80 hover:text-white text-sm transition">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/#work" className="text-white/80 hover:text-white text-sm transition">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-white/80 hover:text-white text-sm transition">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-white/80 hover:text-white text-sm transition">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white/80 hover:text-white text-sm transition">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-white/60">
              Resources
            </h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white text-sm transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-white text-sm transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/case-study-fintech" className="text-white/80 hover:text-white text-sm transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="text-white/80 hover:text-white text-sm transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sitemap
                </a>
              </li>
            </ul>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-white/60">
              Contact
            </h4>
            <p className="text-white/80 text-sm">hello@firstmiledev.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-xs">
            &copy; {currentYear} FirstMileDev. Validate First. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="text-white/60 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
