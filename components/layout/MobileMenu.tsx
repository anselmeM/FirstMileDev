"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Close on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) onClose();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-[#E5E7EB]">
          <span className="font-headline text-lg text-[#FF3B3F]">Menu</span>
          <button
            onClick={onClose}
            className="p-2 text-[#1f2937] hover:text-[#FF3B3F] transition-colors"
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-1 p-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="px-4 py-3 text-base font-medium text-[#1f2937] hover:text-[#FF3B3F] hover:bg-[#F9FAFB] rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-5 border-t border-[#E5E7EB]">
          <Link
            href="/#contact"
            onClick={onClose}
            className="block w-full text-center px-5 py-3 rounded-full text-sm font-semibold text-white bg-[#FF3B3F] hover:bg-[#E63539] transition-all duration-200 shadow-[0_4px_14px_rgba(255,59,63,0.35)]"
          >
            Book Discovery Call
          </Link>
        </div>
      </div>
    </div>
  );
}
