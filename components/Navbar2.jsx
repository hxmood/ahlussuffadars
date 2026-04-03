"use client"
import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="">
      <nav className={`w-full relative transition-all duration-300 bg-white shadow-lg py-4 border-b`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center justify-center ">
                <Image src='/icons/logo2.png' alt="Ahlussuffa Logo" width={50} height={50} />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/" 
                className="font-semibold transition-all duration-300 hover:scale-110 text-gray-900 hover:text-primary"
              >
                Home
              </Link>

              <Link 
                href="/about" 
                className="font-semibold transition-all duration-300 hover:scale-110 text-gray-900 hover:text-primary"
                >
                About
              </Link>

              <Link 
                href="/programs" 
                className="font-semibold transition-all duration-300 hover:scale-110 text-gray-900 hover:text-primary"
              >
                Programs
              </Link>

              <Link 
                href="/admission" 
                className="font-semibold transition-all duration-300 hover:scale-110 text-gray-900 hover:text-primary"
              >
                Admission
              </Link>

              <Link 
                href="/contact" 
                className="font-semibold transition-all duration-300 hover:scale-110 text-gray-900 hover:text-primary"
              >
                Contact
              </Link>
              <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden absolute right-0 left-0 w-full z-20 transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}>

            <div className="flex flex-col space-y-4 py-4 rounded-b-lg lg px-4 bg-white">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-semibold py-2 transition-colors text-gray-900 hover:text-primary"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="font-semibold py-2 transition-colors text-gray-900 hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/programs"
                onClick={() => setMobileMenuOpen(false)}
                className="font-semibold py-2 transition-colors text-gray-900 hover:text-primary"
              >
                Programs
              </Link>
              <Link
                href="/admission"
                onClick={() => setMobileMenuOpen(false)}
                className="font-semibold py-2 transition-colors text-gray-900 hover:text-primary"
              >
                Admission
              </Link>
              
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-semibold py-2 transition-colors text-gray-900 hover:text-primary"
              >
                Contact
              </Link>
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 w-full">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar2;