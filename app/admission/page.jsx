"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarX2, BookOpen, GraduationCap, ArrowRight, BellRing } from "lucide-react";
import Navbar from "@/components/Navbar";
import { roboto } from "../font";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const AdmissionPage = () => {
  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`${roboto.className} text-5xl md:text-6xl font-bold text-gray-900 mb-6`}>
              <span className="text-primary">Admissions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Begin your journey of academic and spiritual excellence with Ahlussuffa. Discover our admission pathways tailored for different educational levels.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex-grow py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Admission Status Alert Box */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white border-l-4 border-green-500 shadow-xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 text-green-50 opacity-50 pointer-events-none">
              <BookOpen className="w-48 h-48" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="bg-green-50 text-green-600 p-4 shrink-0 rounded-full border border-green-100 shadow-sm">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="text-center md:text-left w-full flex-grow">
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Admissions Open
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Register for the New Academic Year</h3>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  We are now accepting applications! Join Ahlussuffa to experience a perfect blend of traditional Islamic scholarship and modern academic excellence. Spots are limited and filling up fast.
                </p>
                
                {/* Navigate to Form CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/admission/registration" className="inline-block w-full sm:w-auto">
                    <button className="px-8 py-4 bg-primary text-white font-bold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 w-full shadow-lg hover:shadow-xl hover:-translate-y-1">
                      <span>Go to Registration Form</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Admission Pathways */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="text-center mb-12">
              <h2 className={`${roboto.className} text-3xl md:text-4xl font-bold text-gray-900 mb-4`}>
                Admission Pathways
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Junior School Admission */}
              <div className="bg-white border text-center border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 p-8 md:p-12 group flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">RootExc Admission</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our RootExc stream is designed for young learners beginning their educational journey. Admission focuses on evaluating basic aptitude and establishing a strong foundation in Islamic and modern studies.
                </p>
                
                <ul className="text-left space-y-3 mb-8 w-full">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>From 8th standard onwards</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>Basic aptitude interview</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>Previous madrasa/school records required</span>
                  </li>
                </ul>

                <Link href="/admission/registration" className="w-full mt-auto">
                   <button className="w-full py-4 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors duration-300">
                     Apply Now
                   </button>
                </Link>
              </div>

              {/* High School Admission */}
              <div className="bg-white border text-center border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 p-8 md:p-12 group flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Higher Secondary Admission</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  The High School stream is designed specifically for students who have successfully completed their 10th standard examinations. It integrates rigorous board examinations with advanced Islamic scholarship.
                </p>
                
                <ul className="text-left space-y-3 mb-8 w-full">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Completed 10th standard board exams</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Written Entrance Examination</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Personal Interview with Scholars</span>
                  </li>
                </ul>

                <Link href="/admission/registration" className="w-full mt-auto">
                   <button className="w-full py-4 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors duration-300">
                     Apply Now
                   </button>
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
