"use client"
import { ChevronUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Scrolltotop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setShowScrollTop(true);
          } else {
            setShowScrollTop(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      // Scroll to top function
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <div>
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-40 p-3 bg-primary backdrop-blur-sm border border-white/30 rounded-full transition-all duration-500 ${
            showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
          } hover:bg-white/30`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </button>
    </div>
  )
}

export default Scrolltotop