"use client"
import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
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
    <div className="absolute top-0 left-0 right-0 z-50">
      <nav className="relative py-8 bg-transparent">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="flex relative">
          <Link href="/" className='w-full relative'>
            <Image src="/icons/logo.png" width={55} height={35} alt='Ahlussuffa Logo'/>
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/" 
          className="font-semibold text-white hover:text-secondary transition-all duration-300 hover:scale-110"
        >
          Home
        </Link>

        <Link 
          href="/about" 
          className="font-semibold text-white hover:text-secondary transition-all duration-300 hover:scale-110"
        >
          About
        </Link>
        
        <Link 
          href="/academics" 
          className="font-semibold text-white hover:text-secondary transition-all duration-300 hover:scale-110"
        >
          Academics
        </Link>

        <Link 
          href="/admission" 
          className="font-semibold text-white hover:text-secondary transition-all duration-300 hover:scale-110"
        >
          Admission
        </Link>

        <Link 
          href="/contact" 
          className="font-semibold text-white hover:text-secondary transition-all duration-300 hover:scale-110"
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
        className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>

    {/* Mobile Menu */}
    <div className={`md:hidden overflow-hidden transition-all duration-300 ${
      mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
    }`}>
      <div className="flex flex-col space-y-4 py-4 rounded-lg px-4 bg-white/10 backdrop-blur-md">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="font-semibold py-2 text-white hover:text-secondary transition-colors"
        >
          Home
        </Link>

        <Link
          href="/about"
          onClick={() => setMobileMenuOpen(false)}
          className="font-semibold py-2 text-white hover:text-secondary transition-colors"
        >
          About
        </Link>
        
        <Link
          href="/academics"
          onClick={() => setMobileMenuOpen(false)}
          className="font-semibold py-2 text-white hover:text-secondary transition-colors"
        >
          Academics
        </Link>
        
        <Link
          href="/admission"
          onClick={() => setMobileMenuOpen(false)}
          className="font-semibold py-2 text-white hover:text-secondary transition-colors"
        >
          Admission
        </Link>
        
        <Link
          href="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="font-semibold py-2 text-white hover:text-secondary transition-colors"
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

export default Navbar;