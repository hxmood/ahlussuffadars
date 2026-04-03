"use client";
import { roboto } from "@/app/font";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Welcome to Ahlussuffa",
      tagline: "Empowering minds through Islamic and academic excellence",
      image: "/images/bg1.png",
    },
    {
      title: "Where Tradition Meets Modern Education",
      tagline: "Integrated education rooted in authentic Islamic scholarship",
      image: "/images/bg2.jpg",
    },
    {
      title: "Academic Excellence",
      tagline: "Multiple degree pathways for holistic development",
      image: "/images/bg3.jpg",
    },
    {
      title: "Building Tomorrow's Leaders",
      tagline: "Fostering social responsibility and community impact",
      image: "/images/bg4.jpg",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden bg-black flex text-left group">
      {/* Background Images with Dark Gradient Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
          {/* Dark gradient mapping to the left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
          {/* Overall subtle dark overlay to ensure text legibility */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 w-full px-6 md:px-16 lg:px-40 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Overlapping Container for Animated Text */}
          <div className="grid">
            {slides.map((slide, index) => (
              <div
                key={`text-${index}`}
                className={`col-start-1 row-start-1 flex flex-col justify-center transition-opacity duration-1000 ${
                  index === currentIndex ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"
                }`}
              >
                {/* Accent Line */}
                <div
                  className={`w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-6 transition-all duration-1000 ease-out transform ${
                    index === currentIndex ? "scale-x-100 origin-left opacity-100 translate-x-0" : "scale-x-0 origin-left opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: index === currentIndex ? "300ms" : "0ms" }}
                ></div>

                {/* Main Tagline: Slide and Fade animation */}
                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white mb-6 transition-all duration-1000 ease-out transform tracking-tight ${roboto.className} ${
                    index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: index === currentIndex ? "500ms" : "0ms" }}
                >
                  {slide.title}
                </h1>

                {/* Sub Tagline: Slide and Fade animation */}
                <div className="overflow-hidden mb-12">
                  <p
                    className={`text-lg md:text-2xl text-white/90 max-w-2xl transition-all duration-1000 ease-out transform font-light ${
                      index === currentIndex
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                    style={{ transitionDelay: index === currentIndex ? "700ms" : "0ms" }}
                  >
                    {slide.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 relative z-30">
            <Link
              href="/about"
              className="px-10 py-5 bg-primary text-white font-bold hover:bg-white transition-colors duration-500 hover:text-primary flex items-center justify-center gap-3 border border-transparent hover:border-white shadow-2xl group/btn"
            >
              <span>Explore Ahlussuffa</span>
              <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/admission"
              className="px-10 py-5 bg-transparent border-2 border-white/50 text-white font-bold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm text-center shadow-xl"
            >
              Admission Info
            </Link>
          </div>
        </div>
      </div>

      {/* Elegant Slide Indicators (Vertical on desktop) */}
      <div className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-4 z-30">
        {slides.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-500 relative flex items-center justify-end w-12 group/nav`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`h-1 transition-all duration-500 bg-white ${index === currentIndex ? 'w-12 opacity-100' : 'w-4 opacity-30 group-hover/nav:opacity-60 group-hover/nav:w-8'}`}></div>
          </button>
        ))}
      </div>
      
      {/* Horizontal style for mobile */}
      <div className="absolute bottom-8 left-6 md:left-16 lg:hidden flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={`indicator-mob-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-500 h-1 bg-white ${index === currentIndex ? 'w-12 opacity-100' : 'w-4 opacity-40'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;


