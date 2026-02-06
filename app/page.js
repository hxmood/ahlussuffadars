"use client"
import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Award, Globe, GraduationCap, Heart, Lightbulb, Target, TrendingUp, Library, Smartphone, HandHeart, ArrowRight, Quote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { roboto } from './font';
import Scrolltotop from '@/components/Scrolltotop';
import Link from 'next/link';

const AhlussuffaWebsite = () => {
  const [countsVisible, setCountsVisible] = useState(false);

  const programs = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Science Stream",
      description: "Advanced scientific education integrated with Islamic principles, preparing students for medical, engineering, and research careers.",
      degrees: ["BSc", "MSc", "Integrated Programs"],
      color: "from-primary to-secondary"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Commerce Stream",
      description: "Business and commerce education with ethical Islamic finance principles, creating future entrepreneurs and business leaders.",
      degrees: ["BCom", "MCom", "Professional Courses"],
      color: "from-secondary to-secondary"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Humanities Stream",
      description: "Comprehensive arts and humanities programs that blend classical Islamic knowledge with contemporary social sciences.",
      degrees: ["BA", "MA", "Research Programs"],
      color: "from-secondary to-primary"
    }
  ];

  const counts = [
    { number: "1500+", label: "Students", icon: <Users className="w-8 h-8" /> },
    { number: "50+", label: "Expert Faculty", icon: <GraduationCap className="w-8 h-8" /> },
    { number: "15+", label: "Years of Excellence", icon: <Award className="w-8 h-8" /> },
    { number: "98%", label: "Success Rate", icon: <Target className="w-8 h-8" /> }
  ];

  const features = [
    {
      icon: <Library className="w-10 h-10" />,
      title: "Advanced Library",
      description: "Access to extensive digital and physical resources"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Digital Skills",
      description: "Modern technology training for the digital age"
    },
    {
      icon: <HandHeart className="w-10 h-10" />,
      title: "Community Outreach",
      description: "Active engagement in social welfare programs"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Holistic Development",
      description: "Focus on spiritual, intellectual, and physical growth"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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

  const cardHover = {
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const countsSection = document.getElementById("counts-section");
      if (countsSection) {
        const rect = countsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setCountsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-white">
      <Navbar/>
      <Hero/>

      {/* About Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image Column */}
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image 
                  src="/images/about.jpg" 
                  alt="Ahlussuffa Campus"
                  width={400}
                  height={300}
                  className="w-full h-[300px] lg:h-[500px] object-cover"
                />
              </motion.div>
              
              {/* Floating Stats Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 transform transition-all duration-300 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    10+
                  </div>
                  <div className="text-sm font-semibold text-gray-700">Years of Excellence</div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl -z-10"
              ></motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 0.1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary to-secondary rounded-3xl -z-10"
              ></motion.div>
            </motion.div>

            {/* Content Column */}
            <motion.div 
              variants={fadeInUp}
              className="space-y-6"
            >
              <div>
                <motion.h2 
                  variants={fadeInUp}
                  className={`${roboto.className} text-4xl md:text-5xl font-bold text-gray-900 mb-4`}
                >
                  About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ahlussuffa</span>
                </motion.h2>
                <motion.div 
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                  className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-8"
                ></motion.div>
              </div>

              <motion.p 
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                With the blessings of Ustad Sultanul Ulama Kanthapuram and Ustad Dr. MAH Azhari, and under the leadership of 
                Ustad Arshad Nurani Kamil Saqafi, our institution has been providing holistic Islamic and modern education 
                for over eleven years. After seven years at Shuhada Makham in Thathoor, we are now continuing our mission at 
                Parapram Juma Masjid, Masjidu Swahaba and CampBazar Juma Masjid, Kannur. Committed to nurturing both spiritual and intellectual growth, 
                Ahlussuffa remains a beacon of knowledge and guidance for the next generation.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Link href="/about">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                  <span className="relative z-10 w-full h-full">Learn More About Us</span>
                </motion.button>
                </Link>

                <Link href="/about">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                  <Link href="/about">
                    Our History
                  </Link>
                </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200"
          >
            {[
              { number: "100+", label: "Students Enrolled" },
              { number: "6", label: "Expert Faculty" },
              { number: "98%", label: "Success Rate" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
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
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${roboto.className}`}>
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Features</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes Ahlussuffa a unique educational institution
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 border border-gray-100"
              >
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="text-primary mb-4 inline-block"
                >
                  {feature.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>


      {/* Programs Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className={`${roboto.className} text-4xl md:text-5xl font-bold text-gray-900 mb-6`}>
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Programs</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational pathways integrated with traditional Islamic education
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Higher Secondary Programs */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl shadow-xl transition-all duration-500 overflow-hidden"
            >
              <motion.div 
                whileHover={{ opacity: 0.1 }}
                className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 transition-opacity duration-500"
              ></motion.div>
              
              <div className="relative p-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white mb-6 transition-transform duration-300"
                >
                  <BookOpen className="w-12 h-12" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Higher Secondary</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Foundation programs preparing students for university education with strong Islamic values and academic excellence.
                </p>
                
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Explore HSC <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowRight className="w-5 h-5" /></motion.span>
                </motion.button>
              </div>
            </motion.div>

            {/* Bachelor's Degree Programs */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl shadow-xl transition-all duration-500 overflow-hidden"
            >
              <motion.div 
                whileHover={{ opacity: 0.1 }}
                className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary opacity-0 transition-opacity duration-500"
              ></motion.div>
              
              <div className="relative p-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white mb-6 transition-transform duration-300"
                >
                  <GraduationCap className="w-12 h-12" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Bachelor's Degrees</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Undergraduate programs combining modern academic disciplines with Islamic scholarship and ethical principles.
                </p>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View UG Programs <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowRight className="w-5 h-5" /></motion.span>
                </motion.button>
              </div>
            </motion.div>

            {/* Master's Degree Programs */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl shadow-xl transition-all duration-500 overflow-hidden"
            >
              <motion.div 
                whileHover={{ opacity: 0.1 }}
                className="absolute inset-0 bg-gradient-to-br from-secondary to-primary opacity-0 transition-opacity duration-500"
              ></motion.div>
              
              <div className="relative p-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block p-4 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white mb-6 transition-transform duration-300"
                >
                  <Award className="w-12 h-12" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Master's Degrees</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced postgraduate programs for specialized knowledge and research in various academic and Islamic disciplines.
                </p>
              
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-secondary to-primary text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Explore PG Programs <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowRight className="w-5 h-5" /></motion.span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </motion.section>

      {/* Founder Message Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="bg-white h-auto rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0 items-center content-between">
              <div className="relative flex items-center justify-center">
                <Image src="/images/usthad.jpg" width={580} height={100} alt='founder-image'/>
              </div>
              
              <div className="p-4 lg:p-12 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                </motion.div>
                  <Quote className="absolute top-5 right-4 lg:top-8 lg:right-8 w-10 h-10 lg:w-16 lg:h-16 text-primary/10" />
                <div className="relative z-10">
                  <motion.h3 
                    variants={fadeInUp}
                    className={`${roboto.className} text-3xl font-bold text-gray-900`}
                  >
                    Message from the Founder
                  </motion.h3>
                  <motion.p
                  variants={fadeInUp}
                  className='text-gray-400 font-semibold mb-6'>
                    Muhammad Arshad Noorani Assaqafi
                  </motion.p>
                  <motion.div 
                    variants={staggerContainer}
                    className="space-y-4 text-gray-700 leading-relaxed"
                  >
                    <motion.p variants={fadeInUp}>
                      It brings me immense joy to welcome you to Ahlussuffa, an institution born from a vision to harmonize traditional Islamic scholarship with contemporary academic excellence.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      In an era where knowledge is abundant but wisdom is rare, we strive to cultivate minds that are not only academically accomplished but also spiritually enriched and socially conscious.
                      Our commitment to the traditional Dars system, combined with modern educational methodologies, ensures that our students emerge as well-rounded individuals ready to serve humanity with knowledge, compassion, and integrity.
                    </motion.p>
                
                    <motion.p 
                      variants={fadeInUp}
                      className="text-primary font-semibold italic"
                    >
                      "Education is not just about earning a living, it's about enriching life with purpose and meaning."
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-br from-primary to-secondary"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`${roboto.className} text-4xl md:text-5xl font-bold text-white mb-6`}
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/90 mb-8"
          >
            Join our community of learners and embark on a transformative educational experience
          </motion.p>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-primary font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Apply Now
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
        <Scrolltotop/>
    </div>
  );
};

export default AhlussuffaWebsite;