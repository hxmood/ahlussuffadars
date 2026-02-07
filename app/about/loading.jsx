"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Star, Globe } from "lucide-react";

const AboutPageLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Loading Navbar */}
      <div className="relative py-8 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo Skeleton */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg animate-pulse"></div>
              <div className="space-y-2">
                <div className="w-32 h-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse"></div>
                <div className="w-24 h-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Menu Items Skeleton */}
            <div className="hidden md:flex items-center space-x-8">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Loading */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            {/* Image Skeleton */}
            <div className="relative basis-1/2">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="w-full h-[300px] lg:h-[500px] bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse rounded-3xl"></div>
                {/* Islamic Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231687C1' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>
              </div>
            </div>

            {/* Content Skeleton */}
            <div className="space-y-6 basis-1/2">
              {/* Title */}
              <div className="space-y-4">
                <div className="w-3/4 h-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse"></div>
                <div className="w-20 h-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-pulse"></div>
              </div>

              {/* Text Lines */}
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-full h-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full animate-pulse ${
                      i === 2 ? "w-5/6" : "w-full"
                    }`}
                  ></div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="w-16 h-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse mx-auto"></div>
                    <div className="w-24 h-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full animate-pulse mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Loading */}
      <div className="py-20 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="w-64 h-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse mx-auto mb-6"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-pulse mx-auto"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10"
              >
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl animate-pulse mb-6 mx-auto"></div>

                {/* Title */}
                <div className="w-48 h-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse mb-6 mx-auto"></div>

                {/* Content */}
                <div className="space-y-4">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className={`h-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full animate-pulse ${
                        j === 2 ? "w-5/6" : "w-full"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Values Loading */}
          <div className="mt-16">
            <div className="w-48 h-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl animate-pulse mb-4 mx-auto"></div>
                  
                  {/* Title */}
                  <div className="w-32 h-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse mb-3 mx-auto"></div>
                  
                  {/* Description */}
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full animate-pulse"></div>
                    <div className="w-4/5 h-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full animate-pulse mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Campus Section Loading */}
      <div className="mb-20 max-w-7xl mx-auto px-4">
        <div className="w-48 h-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse mx-auto mb-12"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Image */}
              <div className="h-48 bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse relative">
                {/* Islamic Geometric Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231687C1' fill-opacity='0.3'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="w-3/4 h-6 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse mb-3"></div>
                <div className="w-1/2 h-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Loading */}
      <div className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg animate-pulse mb-4 mx-auto"></div>
                
                {/* Number */}
                <div className="w-24 h-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse mb-2 mx-auto"></div>
                
                {/* Label */}
                <div className="w-20 h-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full animate-pulse mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section Loading */}
      <div className="py-20 px-4 bg-gradient-to-br from-primary/20 via-[#16BBFF]/20 to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <div className="w-3/4 h-12 bg-gradient-to-r from-white/30 to-white/20 rounded-full animate-pulse mx-auto mb-6"></div>
          
          {/* Description */}
          <div className="w-2/3 h-6 bg-gradient-to-r from-white/20 to-white/10 rounded-full animate-pulse mx-auto mb-8"></div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="w-40 h-12 bg-gradient-to-r from-white/30 to-white/20 rounded-full animate-pulse"></div>
            <div className="w-40 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Loading Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 to-secondary/30">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </div>

      {/* Loading Spinner with Islamic Design */}
      <div className="fixed inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-50">
        <div className="text-center">
          {/* Animated Logo */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Islamic Geometric Design */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
            <div className="absolute inset-4 rounded-full border-4 border-secondary/20"></div>
            <div className="absolute inset-8 rounded-full border-4 border-primary/10"></div>
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-primary animate-pulse" />
            </div>
          </motion.div>

          {/* Loading Text */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Loading Ahlussuffa
            </h3>
            <p className="text-gray-600">Preparing your educational journey...</p>
            
            {/* Animated Dots */}
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageLoading;