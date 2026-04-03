"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { roboto } from "../font";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactPage = () => {
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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We welcome your questions, thoughts, and inquiries. Reach out to Ahlussuffa and let us assist you in the best way possible.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Contact Area */}
      <div className="flex-grow py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Information (Left) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className={`${roboto.className} text-3xl font-bold text-gray-900 mb-8`}>
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 text-primary shrink-0 border border-primary/20">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Phone</h4>
                      <p className="text-gray-600">+91 99611 59173</p>
                      <p className="text-gray-600">+91 97464 31108</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 text-secondary shrink-0 border border-secondary/20">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Email</h4>
                      <p className="text-gray-600">ahlussuffa.igs@gmail.com</p>
                    </div>
                  </div>

                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Our Campuses</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium leading-relaxed">
                      Parapram Juma Masjid Campus<br/>
                      <span className="text-gray-500 font-normal text-sm">Pinarayi, Kannur, Kerala</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium leading-relaxed">
                      Masjidu Swahaba Campus<br/>
                      <span className="text-gray-500 font-normal text-sm">Kadachira, Kannur, Kerala</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium leading-relaxed">
                      CampBazar Juma Masjid Campus<br/>
                      <span className="text-gray-500 font-normal text-sm">Kannur town, Kerala</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-3 lg:pl-10"
            >
              <div className="bg-white p-8 md:p-10 shadow-xl border border-gray-100 relative">
                
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                
                <h3 className={`${roboto.className} text-3xl font-bold text-gray-900 mb-2`}>Send a Message</h3>
                <p className="text-gray-600 mb-8">Please fill out the form below and we will get back to you shortly.</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Phone Number</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Subject</label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 appearance-none text-gray-700 text-sm">
                      <option value="">Select an inquiry type</option>
                      <option value="admission">Admission Details</option>
                      <option value="programs">Program Information</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Message</label>
                    <textarea 
                      rows="5"
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="button"
                    className="w-full py-4 bg-primary text-white font-bold hover:bg-primary/90 flex items-center justify-center gap-2 transition-colors duration-300 shadow-md hover:shadow-xl group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
