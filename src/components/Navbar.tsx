"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Process", href: "/#process", id: "process" },
    { name: "The Lab", href: "/#lab", id: "lab" },
    { name: "Work", href: "/#work", id: "work" },
    { name: "Roadmap", href: "/#pricing", id: "pricing" },
  ];

  // Handle Scroll logic (Sticky & Scroll-Spy)
  useEffect(() => {
    const handleScroll = () => {
      // Sticky logic
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll-Spy logic for homepage
      if (isHomePage) {
        const sections = navLinks.map(link => document.getElementById(link.id));
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navLinks[i].id);
            break;
          }
          if (i === 0 && section && section.offsetTop > scrollPosition) {
            setActiveSection("");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 py-4 ${
          isScrolled || !isHomePage
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-black/5"
            : "bg-transparent md:bg-transparent bg-white/90" 
        }`}
      >
        {/* Added a bg-white/90 for mobile even when not scrolled to prevent overlap visibility issues */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 flex justify-between items-center">
          <Link
            href="/"
            className={`text-lg font-headline uppercase leading-tight font-black tracking-tighter transition-colors duration-300 ${
              isScrolled || !isHomePage ? "text-accent-red" : "text-white md:text-white text-accent-red"
            }`}
          >
            First<br />MileDev
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`uppercase text-[11px] font-bold tracking-widest transition-all duration-300 relative group ${
                    isScrolled || !isHomePage 
                      ? activeSection === link.id ? "text-accent-red" : "text-gray-600 hover:text-black" 
                      : "text-white hover:opacity-75"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent-red transition-all duration-300 ${
                    activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              ))}
              <Link
                href="/calculator"
                className={`uppercase text-[11px] font-bold tracking-widest transition-all px-4 py-2 rounded-full border ${
                  isScrolled || !isHomePage
                    ? "text-accent-red border-accent-red hover:bg-accent-red hover:text-white"
                    : "text-white border-white/30 hover:bg-white hover:text-accent-red"
                }`}
              >
                Calculator
              </Link>
            </nav>
            <Link 
              href="/#contact" 
              className={`btn btn-sm ${isScrolled || !isHomePage ? "btn-primary" : "btn-white"}`}
            >
              Start Validation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled || !isHomePage ? "text-gray-900 hover:bg-gray-100" : "md:text-white text-gray-900 hover:bg-gray-100"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* OLDER MOBILE MENU DESIGN (FULL SCREEN DARK) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1f2937] z-[1001] flex flex-col justify-center items-center text-center text-white"
          >
            {/* Close Button */}
            <button 
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white p-2 hover:rotate-90 transition-transform duration-300"
            >
              <X size={40} />
            </button>

            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col space-y-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-4xl font-headline text-white uppercase hover:text-accent-red transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants}>
                <Link
                  href="/calculator"
                  onClick={toggleMenu}
                  className="text-4xl font-headline text-accent-red uppercase hover:text-white transition-all"
                >
                  Calculator
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  href="/#contact"
                  onClick={toggleMenu}
                  className="mobile-link-item text-xl font-bold font-body text-white uppercase tracking-widest border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-[#1f2937] transition-all mt-4 inline-block"
                >
                  Start Validation
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
