"use client";
import React, { useState } from "react";
import {
  Lightbulb,
  Target,
  BookOpen,
  Award,
  Users,
  Heart,
  Globe,
  GraduationCap,
  Star,
} from "lucide-react";
import Image from "next/image";
import Navbar2 from "@/components/Navbar2";
import { roboto } from "../font";
import Scrolltotop from "@/components/Scrolltotop";
import { motion } from "framer-motion";

const AhlussuffaAboutPage = () => {
  const [activeFaculty, setActiveFaculty] = useState(null);

  const facilities = [
    {
      title: "Imam Ghazali Garden",
      description: "Parappram, Pinarayi, Kannur",
      image: "/images/bg2.png",
    },
    {
      title: "Imam Navavi Garden",
      description: "Punchirimukku, Kadachira, Kannur",
      image: "/images/swahaba.jpeg",
    },
    {
      title: "Imam Rafi Garden",
      description: "Kannur Town",
      image: "/images/science-lab.jpg",
    },
    {
      title: "Junior School",
      description: "Punchirimukku, Kadachira, Kannur",
      image: "/images/student-center.jpg",
    },
  ];

  const stats = [
    { number: "1500+", label: "Students", icon: <Users className="w-8 h-8" /> },
    {
      number: "50+",
      label: "Expert Faculty",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full bg-white">
      <Navbar2 />

      {/* About Section with Image */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-10 lg:py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            className="flex flex-col lg:flex-row-reverse gap-12 items-center"
          >
            {/* Image Section */}
            <motion.div 
              variants={slideInRight}
              className="relative basis-1/2"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/about.jpeg"
                  width={500}
                  height={500}
                  alt="Ahlussuffa Campus"
                  className="w-full h-[300px] lg:h-[500px] object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              variants={slideInLeft}
              className="space-y-6 basis-1/2"
            >
              <div>
                <motion.h2
                  variants={fadeInUp}
                  className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${roboto.className}`}
                >
                  Our{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Story
                  </span>
                </motion.h2>
                <motion.div 
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-6"
                ></motion.div>
              </div>

              <motion.p 
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Ahlussuffa Educational Trust was established in 2008 with a
                visionary mission to create an educational institution that
                seamlessly integrates traditional Islamic scholarship with
                modern academic excellence. Our founders recognized the need for
                an educational model that nurtures both worldly success and
                spiritual fulfillment.
              </motion.p>

              <motion.p 
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Today, we stand as a beacon of integrated education, serving
                over 1500 students across multiple disciplines. Our unique
                approach combines the time-honored Dars system with contemporary
                educational methodologies, preparing students to excel in both
                their professional careers and spiritual lives.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 px-4 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${roboto.className}`}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Purpose
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 mb-16 bg-gray-50"
          >
            {/* Vision Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 border border-gray-100"
            >
              <div className="relative p-7 lg:p-10">
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="inline-block p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 transition-transform duration-300"
                >
                  <Lightbulb className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-700 leading-6 lg:leading-7 mb-4">
                  We envision a world where knowledge and character go hand in
                  hand. At Ahlussuffa, we aim to be more than just an
                  institution, we seek to be a guiding light for those pursuing
                  both spiritual and academic excellence.
                </p>
                <p className="text-lg text-gray-700 leading-6 lg:leading-7">
                  Our vision is to cultivate a generation of confident,
                  knowledgeable, and principled individuals who carry forward
                  the legacy of Ahlussunna while embracing the challenges of the
                  modern world with wisdom and integrity.
                </p>
              </div>
              <div className="h-2 bg-gradient-to-r from-primary to-[#16BBFF]"></div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 border border-gray-100"
            >
              <div className="relative p-7 lg:p-10">
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="inline-block p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 transition-transform duration-300"
                >
                  <Target className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-6 lg:leading-7 mb-4">
                  Our mission is to cultivate a generation of scholars grounded
                  in the rich traditions of Islamic sciences while equipping
                  them with the intellectual and ethical tools to engage with
                  contemporary challenges.
                </p>
                <p className="text-lg text-gray-700 leading-6 lg:leading-7">
                  Through a rigorous academic curriculum, spiritual enrichment,
                  and community engagement, we strive to nurture individuals who
                  embody knowledge, wisdom, and service to humanity.
                </p>
              </div>
              <div className="h-2 bg-gradient-to-r  from-secondary to-primary"></div>
            </motion.div>
          </motion.div>

          {/* Core Values */}
          <div className="mt-16">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Core{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Values
              </span>
            </motion.h3>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: <BookOpen className="w-10 h-10" />,
                  title: "Islamic Excellence",
                  description:
                    "Preserving authentic Islamic scholarship through traditional Dars system",
                  color: "from-primary to-[#16BBFF]",
                },
                {
                  icon: <Award className="w-10 h-10" />,
                  title: "Academic Merit",
                  description:
                    "Commitment to highest standards of modern education and research",
                  color: "from-[#16BBFF] to-secondary",
                },
                {
                  icon: <Heart className="w-10 h-10" />,
                  title: "Character Building",
                  description:
                    "Nurturing ethical values, moral integrity, and compassion",
                  color: "from-secondary to-primary",
                },
                {
                  icon: <Globe className="w-10 h-10" />,
                  title: "Social Responsibility",
                  description:
                    "Fostering community service and global citizenship",
                  color: "from-primary to-secondary",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 border border-gray-100 text-center"
                >
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`inline-block p-3 rounded-xl bg-gradient-to-r ${value.color} text-white mb-4 transition-transform duration-300`}
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Campus Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 max-w-7xl mx-auto px-4"
      >
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Campus
          </span>
        </motion.h3>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="group relative bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {facility.title}
                </h4>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>


      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-br from-primary via-[#16BBFF] to-secondary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold text-white mb-6 ${roboto.className}`}
          >
            Join Our Legacy of Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8"
          >
            Become part of a community dedicated to integrated education and
            holistic development
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-primary font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Apply for Admission
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Scrolltotop />
    </div>
  );
};

export default AhlussuffaAboutPage;