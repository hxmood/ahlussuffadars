"use client"
import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admission', href: '/admission' },
    { name: 'Contact', href: '/contact' },
  ];

  const programs = [
    { name: 'Science Stream', href: '/academics/science' },
    { name: 'Commerce Stream', href: '/academics/commerce' },
    { name: 'Humanities Stream', href: '/academics/humanities' },
    { name: 'Islamic Studies', href: '/academics/islamic-studies' },
    { name: 'Professional Courses', href: '/academics/professional' },
  ];

  const resources = [
    { name: 'Library', href: '/resources/library' },
    { name: 'Research', href: '/resources/research' },
    { name: 'Events', href: '/events' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Career Guidance', href: '/career' },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      text: 'Ahlussuffa Campus, Educational Zone, City, State - PIN Code'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+91 XXXXX XXXXX'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'info@ahlussuffa.edu.in'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: 'Mon - Sat: 8:00 AM - 6:00 PM'
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/profile.php?id=100014534434979', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/ahlussuffadars/', name: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/@ahlussuffadars', name: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 w-full text-white">
      {/* Main Footer Content */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className=" flex items-center justify-center shadow-lg">
                  <Image src="/icons/logo.png" alt="Ahlussuffa Logo" width={75} height={75} />
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Where Faith Meets Knowledge. A pioneering Islamic educational institution 
                blending traditional scholarship with contemporary academic excellence.
              </p>
              

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r from-[#1687C1] to-secondary transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className='col-span-1 flex flex-col lg:items-center'>
              <h4 className="text-xl font-bold mb-6 bg-secondary bg-clip-text text-transparent">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform flex items-center group"
                    >
                      <div className="w-1 h-1 bg-secondary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 bg-secondary bg-clip-text text-transparent">
                Contact Us
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="text-[#1687C1] mt-0.5 flex-shrink-0">
                      {contact.icon}
                    </div>
                    <span className="text-gray-300 leading-relaxed">
                      {contact.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Quick Contact Button */}
              <button className="mt-6 w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {currentYear} Ahlussuffa Educational Trust. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;