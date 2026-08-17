"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, GraduationCap, Award, Target, Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { roboto } from "../font";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const programs = [
  {
    id: "junior",
    title: "RootExc ",
    icon: <BookOpen className="w-8 h-8" />,
    image: "/images/spiritual.jpg",
    description: "Our RootExc (Junior School) program lays the essential foundation for young minds. We focus on nurturing a love for learning while introducing the fundamental tenets of Islamic education alongside a robust modern curriculum.",
    subjects: [
      "Foundations of Islamic Principles",
      "Basic Arabic Language & Vocabulary",
      "Memorization of Short Surahs",
      "Foundational Mathematics & Sciences",
      "English Language & Literature"
    ]
  },
  {
    id: "senior",
    title: "Senior School",
    icon: <GraduationCap className="w-8 h-8" />,
    image: "/images/digital.webp",
    description: "The Senior School bridges foundational knowledge with advanced concepts. Students delve deeper into classical Islamic texts while preparing for rigorous modern academic standards and board examinations.",
    subjects: [
      "Arabic Syntax & Morphology (Nahw & Sarf)",
      "Islamic Jurisprudence (Fiqh)",
      "Prophetic Traditions (Hadith basics)",
      "Advanced Sciences & Mathematics",
      "Social Studies & Humanities"
    ]
  },
  {
    id: "graduate",
    title: "Graduate School",
    icon: <Award className="w-8 h-8" />,
    image: "/images/digital2.jpg",
    description: "Our core higher education tier. The Graduate School offers comprehensive degree programs that seamlessly integrate advanced Islamic scholarship with university-level modern academic disciplines.",
    subjects: [
      "Advanced Islamic Theology (Aqeedah)",
      "Exegesis of the Quran (Tafsir)",
      "Science of Hadith Validation",
      "Undergraduate Degree Programs (BA/BSc)",
      "Comparative Religion Studies"
    ]
  },
  {
    id: "finishing",
    title: "Finishing School",
    icon: <Target className="w-8 h-8" />,
    image: "/images/digital3.jpg",
    description: "Designed for our senior scholars, the Finishing School focuses on practical application, leadership, and community service. It prepares graduates to lead and inspire in the modern world.",
    subjects: [
      "Advanced Da'wah & Communication",
      "Modern Leadership & Management",
      "Applied Islamic Ethics",
      "Contemporary Global Issues",
      "Public Speaking & Counseling"
    ]
  },
  {
    id: "doura",
    title: "Doura Course for Hifz",
    icon: <Heart className="w-8 h-8" />,
    image: "/images/spiritual2.jpg",
    description: "A specialized, intensive program dedicated to the pristine memorization of the Holy Quran, accompanied by mastery in Tajweed and the various modes of recitation.",
    subjects: [
      "Complete Quranic Memorization (Hifz)",
      "Advanced Tajweed Rules",
      "Sciences of Qira'at",
      "Tafsir Basics for Huffaz",
      "Spiritual Tarbiyah"
    ]
  }
];

const ProgramsPage = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className={`${roboto.className} text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight`}>
              Academic <span className="text-primary">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our comprehensive educational pathway. From early foundations to advanced scholarship, we offer a seamless integration of traditional Islamic learning and modern academic excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Programs Detailed Sections */}
      <div className="pb-24 pt-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              className="bg-white border border-gray-100 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Icon & Title */}
              <div className="flex flex-col gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h2 
                  className={`${roboto.className} text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300`}
                >
                  {program.title}
                </h2>
              </div>
              
              <p 
                className="text-gray-600 leading-relaxed mb-6 flex-grow"
              >
                {program.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider font-bold text-gray-400 mb-4 border-b border-gray-100 pb-2">Core Subjects</h3>
                <ul className="space-y-3">
                  {program.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-secondary mt-1"><ArrowRight className="w-4 h-4" /></span>
                      <span className="font-medium text-gray-800 text-sm">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto pt-6 border-t border-gray-100">
                <button className="w-full py-4 bg-transparent border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 flex justify-center items-center gap-2">
                  <span>Admission Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProgramsPage;