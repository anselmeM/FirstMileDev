import Link from "next/link";

const FOOTER_LINKS = {
  Services: [
    { label: "Full-Stack Development", href: "/#services" },
    { label: "Frontend Engineering", href: "/#services" },
    { label: "Backend & APIs", href: "/#services" },
    { label: "SaaS Products", href: "/#services" },
    { label: "Technical Consulting", href: "/#services" },
  ],
  Company: [
    { label: "About", href: "/#about" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top: Logo + Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-headline text-2xl tracking-tight text-[#FF3B3F] hover:opacity-80 transition-opacity inline-block mb-4"
            >
              FirstMileDev
            </Link>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              We help startups and founders build MVPs that validate market
              demand before you scale.
            </p>

            {/* Social Icons Placeholder */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:bg-[#FF3B3F] hover:text-white transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:bg-[#FF3B3F] hover:text-white transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:bg-[#FF3B3F] hover:text-white transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#D1D5DB] hover:text-[#FF3B3F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.Company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#D1D5DB] hover:text-[#FF3B3F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF] mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.Legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#D1D5DB] hover:text-[#FF3B3F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1F2937] pt-8">
          <p className="text-sm text-[#6B7280] text-center">
            &copy; 2026 FirstMileDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
