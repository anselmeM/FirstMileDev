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
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 py-4 ${
          isScrolled || !isHomePage
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 flex justify-between items-center">
          <Link
            href="/"
            className={`text-lg font-headline uppercase leading-tight font-black tracking-tighter transition-colors duration-300 ${
              isScrolled || !isHomePage ? "text-accent-red" : "text-white"
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
              isScrolled || !isHomePage ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1001] md:hidden"
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[1002] shadow-2xl md:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <span className="text-accent-red font-headline text-lg uppercase tracking-tighter">
                  First<br />MileDev
                </span>
                <button onClick={toggleMenu} className="p-2 text-gray-500 hover:text-black">
                  <X size={32} />
                </button>
              </div>

              <nav className="flex-grow flex flex-col p-8 space-y-6">
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className={`text-3xl font-headline uppercase transition-colors ${
                        activeSection === link.id ? "text-accent-red" : "text-gray-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Link
                    href="/calculator"
                    onClick={toggleMenu}
                    className="text-3xl font-headline text-accent-red uppercase"
                  >
                    Calculator
                  </Link>
                </motion.div>
                
                <motion.div variants={itemVariants} className="pt-8">
                  <Link
                    href="/#contact"
                    onClick={toggleMenu}
                    className="btn btn-primary btn-lg w-full"
                  >
                    Start Validation
                  </Link>
                </motion.div>
              </nav>

              <div className="p-8 border-t border-gray-100 bg-gray-50">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Get in touch</p>
                <p className="text-gray-900 font-bold">hello@firstmiledev.com</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
