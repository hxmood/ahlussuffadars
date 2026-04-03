"use client";
import React, { useState, useEffect } from "react";
import { GraduationCap, Menu, X, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
      {/* Top Bar */}
      <div className={`hidden md:flex justify-between items-center px-4 md:px-16 lg:px-32 w-full text-sm bg-black text-white/80 transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0 py-0 opacity-0 border-none' : 'max-h-14 py-2 border-b border-white/20 opacity-100'}`}>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>ahlussuffa.igs@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+91 99611 59173</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://www.facebook.com/profile.php?id=100014534434979" className="transition-colors hover:text-[#1687C1]">
            <Facebook className="w-4 h-4" />
          </Link>
          <Link href="#" className="transition-colors hover:text-[#1687C1]">
            <Twitter className="w-4 h-4" />
          </Link>
          <Link href="https://www.instagram.com/ahlussuffadars/" className="transition-colors hover:text-[#1687C1]">
            <Instagram className="w-4 h-4" />
          </Link>
          <Link href="https://www.linkedin.com/company/ahlussuffa/posts/?feedView=all" className="transition-colors hover:text-[#1687C1]">
            <Linkedin className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <nav className={`relative transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex relative">
                <Link href="/" className="w-full relative">
                  <Image
                    src="/icons/logo.png"
                    width={170}
                    height={35}
                    alt="Ahlussuffa Logo"
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10 text-lg ">
              <Link
                href="/"
                className="relative inline-block font-bold transition-all duration-300 text-gray-800 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="relative inline-block font-bold transition-all duration-300 text-gray-800 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                About
              </Link>

              <Link
                href="/programs"
                className="relative inline-block font-bold transition-all duration-300 text-gray-800 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                Programs
              </Link>

              <Link
                href="/admission"
                className="relative inline-block font-bold transition-all duration-300 text-gray-800 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                Admission
              </Link>

              <Link
                href="/contact"
                className="relative inline-block font-bold transition-all duration-300 text-gray-800 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                Contact
              </Link>

              <Link
                href="/admission"
                className="ml-4 px-6 py-2.5 bg-primary text-white font-semibold shadow-md hover:shadow-xl hover:bg-primary/90 transition-all duration-300 border border-transparent hover:border-white"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 transition-colors hover:bg-black/10 text-gray-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              mobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col space-y-4 py-4 px-4 bg-white shadow-lg border border-gray-100">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="relative w-max font-semibold py-2 transition-colors hover:text-secondary text-gray-800 after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-0 after:h-[2px] after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="relative w-max font-semibold py-2 transition-colors hover:text-secondary text-gray-800 after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-0 after:h-[2px] after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
              >
                About
              </Link>

              <Link
                href="/programs"
                onClick={() => setMobileMenuOpen(false)}
                className="relative w-max font-semibold py-2 transition-colors hover:text-secondary text-gray-800 after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-0 after:h-[2px] after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
              >
                Programs
              </Link>

              <Link
                href="/admission"
                onClick={() => setMobileMenuOpen(false)}
                className="relative w-max font-semibold py-2 transition-colors hover:text-secondary text-gray-800 after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-0 after:h-[2px] after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
              >
                Admission
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="relative w-max font-semibold py-2 transition-colors hover:text-secondary text-gray-800 after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-0 after:h-[2px] after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
              >
                Contact
              </Link>

              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all duration-300 w-full">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;