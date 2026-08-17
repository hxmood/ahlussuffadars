"use client"
import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Award, Globe, GraduationCap, Heart, Target, TrendingUp, Library, Smartphone, HandHeart, ArrowRight, Quote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { roboto } from './font';
import Scrolltotop from '@/components/Scrolltotop';
import Link from 'next/link';
const AnimatedCounter = ({ valueString, visible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const endValue = parseInt(valueString.replace(/[^0-9]/g, ''), 10) || 0;

    let startTime;
    const duration = 3000; // 3 seconds
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo for a snappy slow-down feel
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [valueString, visible]);

  const suffix = valueString.replace(/[0-9]/g, '');
  return <>{count}{suffix}</>;
};

const AhlussuffaWebsite = () => {
  const [countsVisible, setCountsVisible] = useState(false);

  const counts = [
    { number: "100+", label: "Students", icon: <Users className="w-8 h-8" /> },
    { number: "5+", label: "Expert Faculty", icon: <GraduationCap className="w-8 h-8" /> },
    { number: "13+", label: "Years of Excellence", icon: <Award className="w-8 h-8" /> },
    { number: "90+", label: "Alumni", icon: <Globe className="w-8 h-8" /> }
  ];

  const features = [
    {
      icon: <Library className="w-8 h-8" />,
      title: "Advanced Library",
      description: "Access to extensive digital and physical resources",
      image: "/images/library.jpg"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Skills",
      description: "Modern technology training for the digital age",
      image: "/images/digital3.jpg"
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Community Outreach",
      description: "Active engagement in social welfare programs",
      image: "/images/community.jpg"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Holistic Development",
      description: "Focus on spiritual, intellectual, and physical growth",
      image: "/images/spiritual.jpg"
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

      {/* Floating Stats Section over Hero lower edge */}
      <div id="counts-section" className="relative z-20 max-w-6xl mx-auto px-4 -mt-16 md:-mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#fbfcff] shadow-[0_15px_40px_rgba(0,0,0,0.06)] relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 relative z-10 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {counts.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -2 }}
                className="flex flex-col md:flex-row items-center md:items-start justify-center p-8 lg:p-10 transition-transform duration-300 hover:bg-white text-center md:text-left"
              >
                {/* Icon */}
                <div className="mb-3 md:mb-0 md:mr-4 text-primary shrink-0 md:mt-1">
                  {React.cloneElement(stat.icon, { className: "w-10 h-10 lg:w-12 lg:h-12 stroke-[1.6]" })}
                </div>
                {/* Text Block */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="text-xl lg:text-2xl font-bold text-gray-700 tracking-tight">
                    <AnimatedCounter valueString={stat.number} visible={countsVisible} />
                  </div>
                  <div className="text-gray-500 font-medium text-sm leading-relaxed max-w-[140px]">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>


      {/* About Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 mt-2 md:mt-8 px-4 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Image Column */}
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden shadow-2xl border-[6px] border-white outline outline-1 outline-gray-200"
              >
                <Image 
                  src="/images/hero.jpg" 
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
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 right-0 sm:-right-6 bg-white shadow-2xl p-4 sm:p-5 transform transition-all duration-300 border border-gray-100 max-w-[180px] sm:max-w-none"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 sm:mb-2">
                    13+
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-700">Years of Excellence</div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary transform -rotate-6 -z-10"
              ></motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 0.1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary to-secondary transform rotate-6 -z-10"
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

              <motion.div 
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed"
              >
                <p>
                  With the blessings of Ustad Sultanul Ulama Kanthapuram and Ustad Dr. MAH Azhari, and under the leadership of 
                  Ustad Arshad Nurani Kamil Saqafi, our institution has been providing holistic Islamic and modern education 
                  for over thirteen years.
                </p>
                <p>
                  After seven years at Shuhada Makham in Thathoor, we are now continuing our mission at 
                  Parapram Juma Masjid, Masjidu Swahaba and CampBazar Juma Masjid, Kannur.
                </p>
                <p>
                  Committed to nurturing both spiritual and intellectual growth, 
                  Ahlussuffa remains a beacon of knowledge and guidance for the next generation.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Link href="/about">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-primary text-white font-semibold overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                  <span className="relative z-10 w-full h-full">Learn More About Us</span>
                </motion.button>
                </Link>
                
              </motion.div>
            </motion.div>
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
                className="bg-white shadow-lg transition-all duration-300 border border-gray-100 flex flex-col group"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
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
        className="py-20 px-8 lg:px-24 bg-primary my-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className={`${roboto.className} text-4xl md:text-5xl font-bold text-white mb-6`}>
              Our Programs
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Junior School */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-white/10 hover:bg-white/20 cursor-pointer backdrop-blur-md p-4 lg:p-6 flex items-center gap-6 transition-all duration-300 border border-white/10 shadow-lg"
            >
              <div className="bg-white w-14 h-14 shadow-sm flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-7 h-7 text-[#d97706]" />
              </div>
              <h3 className="text-white font-medium md:font-semibold text-lg md:text-xl">Junior School</h3>
            </motion.div>

            {/* Senior School */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-white/10 hover:bg-white/20 cursor-pointer backdrop-blur-md p-4 lg:p-6 flex items-center gap-6 transition-all duration-300 border border-white/10 shadow-lg"
            >
              <div className="bg-white w-14 h-14 shadow-sm flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-[#d97706]" />
              </div>
              <h3 className="text-white font-medium md:font-semibold text-lg md:text-xl">Senior School</h3>
            </motion.div>

            {/* Graduate School */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-white/10 hover:bg-white/20 cursor-pointer backdrop-blur-md p-4 lg:p-6 flex items-center gap-6 transition-all duration-300 border border-white/10 shadow-lg"
            >
              <div className="bg-white w-14 h-14 shadow-sm flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-[#d97706]" />
              </div>
              <h3 className="text-white font-medium md:font-semibold text-lg md:text-xl">Graduate School</h3>
            </motion.div>

            {/* Finishing School */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-white/10 hover:bg-white/20 cursor-pointer backdrop-blur-md p-4 lg:p-6 flex items-center gap-6 transition-all duration-300 border border-white/10 shadow-lg"
            >
              <div className="bg-white w-14 h-14 shadow-sm flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-[#d97706]" />
              </div>
              <h3 className="text-white font-medium md:font-semibold text-lg md:text-xl">Finishing School</h3>
            </motion.div>

            {/* Doura Course for Hifz Students */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-white/10 hover:bg-white/20 cursor-pointer backdrop-blur-md p-4 lg:p-6 flex items-center gap-6 transition-all duration-300 border border-white/10 shadow-lg"
            >
              <div className="bg-white w-14 h-14 shadow-sm flex items-center justify-center flex-shrink-0">
                <Heart className="w-7 h-7 text-[#d97706]" />
              </div>
              <h3 className="text-white font-medium md:font-semibold text-lg md:text-xl">Doura Course for Hifz Students</h3>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

      {/* Founder Message Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-24 px-4 bg-gray-50 relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={fadeInUp}
            className="bg-white shadow-[0_15px_60px_-15px_rgba(0,0,0,0.1)] border-primary border hover:border-r-primary transition-all duration-500 overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-stretch">
              
              {/* Image Section */}
              <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:w-6/12">
                <Image  
                  src="/images/usthad.jpg" 
                  fill
                  className="object-cover object-top"
                  alt='Muhammad Arshad Noorani Assaqafi - Founder'
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"></div>
                
                {/* Name Tag for Image */}
                <div className="absolute bottom-0 left-0 w-full p-4 lg:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-white/80 text-xs font-semibold tracking-wider uppercase mb-1 lg:mb-2">Founder & Chairman</p>
                    <p className="text-white text-xl lg:text-2xl font-bold leading-tight">Muhammad Arshad Noorani Assaqafi</p>
                  </motion.div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-6/12 p-8 md:p-12 lg:p-12 relative flex flex-col justify-center">
                
                {/* Decorative Quote Icon */}
                <div className="absolute top-10 right-10 text-gray-50 transform rotate-12">
                  <Quote className="w-32 h-32 md:w-48 md:h-48" />
                </div>

                <div className="relative z-10">
                  <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Vision & Leadership</span>
                  </motion.div>
                  
                  <motion.h3 
                    variants={fadeInUp}
                    className={`${roboto.className} text-3xl md:text-5xl font-extrabold text-gray-900 mb-6`}
                  >
                    Message from the <br className="hidden lg:block"/> Founder
                  </motion.h3>
                  
                  <motion.div 
                    variants={staggerContainer}
                    className="space-y-4 text-gray-600 text-[1rem] leading-relaxed mb-8"
                  >
                    <motion.p variants={fadeInUp}>
                      It brings me immense joy to welcome you to Ahlussuffa, an institution born from a vision to harmonize traditional Islamic scholarship with contemporary academic excellence.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      In an era where knowledge is abundant but wisdom is rare, we strive to cultivate minds that are not only academically accomplished but also spiritually enriched and socially conscious. Our commitment to the traditional Dars system, combined with modern educational methodologies, ensures that our students emerge as well-rounded individuals ready to serve humanity with knowledge, compassion, and integrity.
                    </motion.p>
                  </motion.div>

                  {/* Highlighted Quote Block */}
                  <motion.div 
                    variants={fadeInUp}
                    className="relative bg-gray-50 p-6 md:p-5 border-l-4 border-primary shadow-sm group hover:bg-white transition-colors duration-300"
                  >
                     <p className="text-lg font-medium text-gray-800 italic relative z-10 pl-2 md:pl-3 leading-relaxed">
                       "Education is not just about earning a living, it's about enriching life with purpose and meaning."
                     </p>
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
        className="py-24 px-4 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
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
            <Link href="/admission" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-10 py-4 bg-white text-primary font-bold transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Apply Now
              </motion.button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-10 py-4 bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-primary transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
        <Scrolltotop/>
    </div>
  );
};

export default AhlussuffaWebsite;