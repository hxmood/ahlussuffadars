"use client"
import { roboto } from "@/app/font";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [countsVisible, setCountsVisible] = useState(false);

  const slides = [
    {
      title: "Welcome to Ahlussuffa",
      tagline: "Empowering minds through Islamic and academic excellence",
      image: "/images/bg1.png",
    },
    {
      title: "Where Tradition Meets Modern Education",
      tagline: "Integrated education rooted in authentic Islamic scholarship",
      image: "/images/bg2.png",
    },
    {
      title: "Academic Excellence",
      tagline: "Multiple degree pathways for holistic development",
      image: "/images/bg3.png",
    },
    {
      title: "Building Tomorrow's Leaders",
      tagline: "Fostering social responsibility and community impact",
      image: "/images/bg4.png",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, [currentSlide, isAnimating]); // Added dependencies

 
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden bg-black">

        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Image Background with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/80"></div>
              </div>

          

              {/* Content */}
              <div className="relative h-full flex items-center justify-center px-4">
                <div className="max-w-5xl mx-auto text-center">
                  <div className={`overflow-hidden ${roboto.className}`}>
                    <h1
                      className={`text-5xl md:text-7xl lg:text-7xl font-bold text-white mb-6 transition-all duration-700 ${
                        index === currentSlide
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0"
                      }`}
                      style={{
                        transitionDelay:
                          index === currentSlide ? "100ms" : "0ms",
                      }}
                    >
                      {slide.title}
                    </h1>
                  </div>

                  <div className="overflow-hidden lg:mb-12">
                    <p
                      className={` md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto transition-all duration-700 mb-5 ${
                        index === currentSlide
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0"
                      }`}
                      style={{
                        transitionDelay:
                          index === currentSlide ? "500ms" : "0ms",
                      }}
                    >
                      {slide.tagline}
                    </p>
                  </div>

                  <div
                    className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }`}
                    style={{
                      transitionDelay: index === currentSlide ? "700ms" : "0ms",
                    }}
                  >
                    <Link href="/programs" className="group relative px-8 py-4 bg-white text-[#1687C1] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      Explore Programs
                    </Link>
                    <Link href="/about" className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1687C1] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
