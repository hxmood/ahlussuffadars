// "use client"
// import React, { useState } from 'react';
// import {
//   Lightbulb,
//   Target,
//   BookOpen,
//   Award,
//   Users,
//   Heart,
//   Globe,
//   Calendar,
//   ChevronRight,
//   Quote,
//   GraduationCap,
//   MapPin,
//   Clock,
//   Star,
//   Building,
//   UsersRound,
//   Library,
//   Microscope
// } from 'lucide-react';
// import Navbar2 from '@/components/Navbar2';
// import Footer from '@/components/Footer';
// import Image from 'next/image';

// const AhlussuffaAboutPage = () => {
//   const [activeFaculty, setActiveFaculty] = useState(null);

//   // Core Values with images
//   const coreValues = [
//     {
//       icon: <BookOpen className="w-10 h-10" />,
//       title: "Islamic Excellence",
//       description: "Preserving authentic Islamic scholarship through traditional Dars system",
//       color: "from-primary to-[#16BBFF]",
//       image: "/images/islamic-education.jpg"
//     },
//     {
//       icon: <Award className="w-10 h-10" />,
//       title: "Academic Merit",
//       description: "Commitment to highest standards of modern education",
//       color: "from-[#16BBFF] to-secondary",
//       image: "/images/academic-excellence.jpg"
//     },
//     {
//       icon: <Heart className="w-10 h-10" />,
//       title: "Character Building",
//       description: "Nurturing ethical values and moral integrity",
//       color: "from-secondary to-primary",
//       image: "/images/character-building.jpg"
//     },
//     {
//       icon: <Globe className="w-10 h-10" />,
//       title: "Social Responsibility",
//       description: "Fostering community service and global citizenship",
//       color: "from-primary to-secondary",
//       image: "/images/community-service.jpg"
//     }
//   ];

//   // Faculty members with images
//   const faculties = [
//     {
//       id: 1,
//       name: "Dr. Mohammed Ibrahim",
//       position: "Head of Islamic Studies",
//       qualification: "PhD in Islamic Jurisprudence, Al-Azhar University",
//       experience: "15+ years",
//       specialization: "Fiqh, Hadith, Tafseer",
//       image: "/images/faculty-ibrahim.jpg",
//       achievements: ["Published 5 research papers", "International conferences", "Curriculum development"],
//       color: "from-primary to-[#16BBFF]"
//     },
//     {
//       id: 2,
//       name: "Prof. Sarah Ahmed",
//       position: "Dean of Sciences",
//       qualification: "PhD in Molecular Biology, University of London",
//       experience: "12+ years",
//       specialization: "Biology, Chemistry, Research",
//       image: "/images/faculty-sarah.jpg",
//       achievements: ["Research grants", "Student mentorship", "Lab development"],
//       color: "from-[#16BBFF] to-secondary"
//     },
//     {
//       id: 3,
//       name: "Dr. Abdul Rahman",
//       position: "Head of Commerce",
//       qualification: "PhD in Business Administration, IIM Ahmedabad",
//       experience: "10+ years",
//       specialization: "Finance, Economics, Management",
//       image: "/images/faculty-abdul.jpg",
//       achievements: ["Industry collaborations", "Placement coordinator", "Case studies"],
//       color: "from-secondary to-primary"
//     },
//     {
//       id: 4,
//       name: "Prof. Fatima Khan",
//       position: "Head of Humanities",
//       qualification: "PhD in English Literature, University of Oxford",
//       experience: "14+ years",
//       specialization: "Literature, Language, History",
//       image: "/images/faculty-fatima.jpg",
//       achievements: ["Literary awards", "Publications", "Debate club mentor"],
//       color: "from-primary to-secondary"
//     }
//   ];

//   // Campus facilities
//   const facilities = [
//     {
//       title: "Main Campus",
//       description: "Sprawling 10-acre campus with modern infrastructure",
//       image: "/images/campus-main.jpg",
//       icon: <Building className="w-8 h-8" />
//     },
//     {
//       title: "Digital Library",
//       description: "State-of-the-art library with 50,000+ books",
//       image: "/images/library.jpg",
//       icon: <Library className="w-8 h-8" />
//     },
//     {
//       title: "Science Labs",
//       description: "Advanced laboratories for practical learning",
//       image: "/images/science-lab.jpg",
//       icon: <Microscope className="w-8 h-8" />
//     },
//     {
//       title: "Student Center",
//       description: "Modern facilities for extracurricular activities",
//       image: "/images/student-center.jpg",
//       icon: <UsersRound className="w-8 h-8" />
//     }
//   ];

//   return (
//     <div className="w-full bg-white min-h-full">
//       <Navbar2/>

//       {/* Hero Section with Institution Image */}
//       <section className="relative pt-24 pb-16 px-4 overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src="/images/campus-hero.jpg"
//             alt="Ahlussuffa Campus"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="text-white space-y-6">
//               <h1 className="text-5xl md:text-7xl font-bold">
//                 About <span className="text-secondary">Ahlussuffa</span>
//               </h1>
//               <p className="text-xl text-white/90 leading-relaxed">
//                 A pioneering Islamic educational institution committed to nurturing well-rounded individuals
//                 who excel in both religious knowledge and academic pursuits.
//               </p>
//               <div className="flex flex-wrap gap-4 pt-4">
//                 <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
//                   <div className="text-3xl font-bold">1500+</div>
//                   <div className="text-white/80">Students</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
//                   <div className="text-3xl font-bold">50+</div>
//                   <div className="text-white/80">Faculty</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
//                   <div className="text-3xl font-bold">15+</div>
//                   <div className="text-white/80">Years</div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//                 <h3 className="text-2xl font-bold text-white mb-4">Our Legacy</h3>
//                 <p className="text-white/90 mb-6">
//                   Founded on the principles of authentic Islamic scholarship, we integrate the time-honored
//                   Dars system with modern educational methodologies to prepare students for success in this
//                   world and the hereafter.
//                 </p>
//                 <div className="flex items-center gap-3 text-white/80">
//                   <Calendar className="w-5 h-5" />
//                   <span>Established 2008</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Introduction Section with Images */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//                 Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Story</span>
//               </h2>
//               <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>

//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Ahlussuffa is a pioneering Islamic educational institution committed to nurturing
//                 well-rounded individuals who excel in both religious knowledge and academic pursuits.
//               </p>

//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Founded in 2008 with a visionary mission to create an educational institution that
//                 seamlessly integrates traditional Islamic scholarship with modern academic excellence.
//               </p>

//               <div className="grid grid-cols-2 gap-4 pt-4">
//                 <div className="bg-primary/5 p-4 rounded-xl">
//                   <div className="text-2xl font-bold text-primary">15+</div>
//                   <div className="text-gray-600">Years of Excellence</div>
//                 </div>
//                 <div className="bg-secondary/5 p-4 rounded-xl">
//                   <div className="text-2xl font-bold text-secondary">1500+</div>
//                   <div className="text-gray-600">Students Enrolled</div>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="relative h-64 rounded-2xl overflow-hidden">
//                 <Image
//                   src="/images/classroom.jpg"
//                   alt="Classroom"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
//                 <Image
//                   src="/images/library-interior.jpg"
//                   alt="Library"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="relative h-64 rounded-2xl overflow-hidden">
//                 <Image
//                   src="/images/prayer-hall.jpg"
//                   alt="Prayer Hall"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
//                 <Image
//                   src="/images/science-lab-interior.jpg"
//                   alt="Science Lab"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Vision & Mission Cards */}
//           <div className="grid md:grid-cols-2 gap-8 mb-20">
//             {/* Vision Card */}
//             <div className="relative bg-gradient-to-br from-primary to-[#16BBFF] rounded-3xl overflow-hidden group">
//               <div className="absolute inset-0">
//                 <Image
//                   src="/images/vision-bg.jpg"
//                   alt="Vision"
//                   fill
//                   className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
//                 />
//               </div>
//               <div className="relative p-10 text-white">
//                 <div className="inline-block p-4 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
//                   <Lightbulb className="w-12 h-12" />
//                 </div>
//                 <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
//                 <p className="text-lg leading-relaxed mb-4">
//                   To be a beacon of Islamic education that harmoniously integrates traditional Dars system
//                   with modern academic excellence.
//                 </p>
//                 <p className="text-lg leading-relaxed">
//                   We aspire to nurture scholars who are equipped to lead with knowledge, faith, and integrity.
//                 </p>
//               </div>
//             </div>

//             {/* Mission Card */}
//             <div className="relative bg-gradient-to-br from-secondary to-[#16BBFF] rounded-3xl overflow-hidden group">
//               <div className="absolute inset-0">
//                 <Image
//                   src="/images/mission-bg.jpg"
//                   alt="Mission"
//                   fill
//                   className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
//                 />
//               </div>
//               <div className="relative p-10 text-white">
//                 <div className="inline-block p-4 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
//                   <Target className="w-12 h-12" />
//                 </div>
//                 <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
//                 <p className="text-lg leading-relaxed mb-4">
//                   To promote religious learning, academic excellence, and social responsibility through
//                   an integrated educational approach.
//                 </p>
//                 <p className="text-lg leading-relaxed">
//                   We prepare students for both worldly success and spiritual fulfillment.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Campus Facilities */}
//           {/* <div className="mb-20">
//             <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//               Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Campus</span>
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {facilities.map((facility, index) => (
//                 <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
//                   <div className="relative h-48">
//                     <Image
//                       src={facility.image}
//                       alt={facility.title}
//                       fill
//                       className="object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                     <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
//                       {facility.icon}
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h4 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h4>
//                     <p className="text-gray-600">{facility.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div> */}

//           {/* Core Values with Images */}
//           <div className="mb-20">
//             <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//               Core <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Values</span>
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {coreValues.map((value, index) => (
//                 <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
//                   <div className="relative h-40">
//                     <Image
//                       src={value.image}
//                       alt={value.title}
//                       fill
//                       className="object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                     <div className={`absolute -bottom-6 right-4 p-3 rounded-xl bg-gradient-to-r ${value.color} text-white`}>
//                       {value.icon}
//                     </div>
//                   </div>
//                   <div className="pt-10 p-6">
//                     <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
//                     <p className="text-gray-600 leading-relaxed">{value.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Faculty Section */}
//           <div className="mb-20">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                 Meet Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Faculty</span>
//               </h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Our distinguished team of scholars and educators bring decades of experience and expertise
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {faculties.map((faculty) => (
//                 <div
//                   key={faculty.id}
//                   onClick={() => setActiveFaculty(activeFaculty === faculty.id ? null : faculty.id)}
//                   className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer ${
//                     activeFaculty === faculty.id ? 'ring-2 ring-primary scale-105' : ''
//                   }`}
//                 >
//                   <div className="relative h-56">
//                     <Image
//                       src={faculty.image}
//                       alt={faculty.name}
//                       fill
//                       className="object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <h3 className="text-xl font-bold text-white">{faculty.name}</h3>
//                       <p className="text-white/90 text-sm">{faculty.position}</p>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${faculty.color} text-white mb-4`}>
//                       {faculty.specialization}
//                     </div>

//                     {/* Details - Show on active */}
//                     <div className={`transition-all duration-300 ${
//                       activeFaculty === faculty.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                     } overflow-hidden`}>
//                       <div className="space-y-3 pt-4 border-t border-gray-200">
//                         <div>
//                           <p className="text-xs font-semibold text-gray-500 mb-1">Qualification</p>
//                           <p className="text-sm text-gray-700">{faculty.qualification}</p>
//                         </div>
//                         <div className="flex justify-between">
//                           <div>
//                             <p className="text-xs font-semibold text-gray-500 mb-1">Experience</p>
//                             <p className="text-sm text-gray-700">{faculty.experience}</p>
//                           </div>
//                         </div>
//                         <div>
//                           <p className="text-xs font-semibold text-gray-500 mb-2">Achievements</p>
//                           <ul className="space-y-1">
//                             {faculty.achievements.map((achievement, idx) => (
//                               <li key={idx} className="text-xs text-gray-600 flex items-center">
//                                 <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${faculty.color} mr-2`}></div>
//                                 {achievement}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Click indicator */}
//                     <div className="flex items-center justify-center mt-4">
//                       <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
//                         activeFaculty === faculty.id ? 'rotate-90' : ''
//                       }`} />
//                     </div>
//                   </div>

//                   <div className={`h-1 bg-gradient-to-r ${faculty.color}`}></div>
//                 </div>
//               ))}
//             </div>

//             {/* Faculty Stats */}
//             <div className="grid md:grid-cols-3 gap-8 mt-16">
//               <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-[#16BBFF]/10 rounded-2xl">
//                 <div className="text-5xl font-bold text-primary mb-2">50+</div>
//                 <div className="text-xl text-gray-700 font-semibold">Expert Faculty</div>
//               </div>
//               <div className="text-center p-8 bg-gradient-to-br from-[#16BBFF]/10 to-secondary/10 rounded-2xl">
//                 <div className="text-5xl font-bold text-[#16BBFF] mb-2">200+</div>
//                 <div className="text-xl text-gray-700 font-semibold">Years Combined Experience</div>
//               </div>
//               <div className="text-center p-8 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl">
//                 <div className="text-5xl font-bold text-secondary mb-2">15+</div>
//                 <div className="text-xl text-gray-700 font-semibold">Specialized Departments</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-primary via-[#16BBFF] to-secondary">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Join Our Legacy of Excellence
//           </h2>
//           <p className="text-xl text-white/90 mb-8">
//             Become part of a community dedicated to integrated education and holistic development
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
//               Apply for Admission
//             </button>
//             <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300">
//               Schedule Campus Visit
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AhlussuffaAboutPage;

// "use client"
// import React, { useState } from 'react';
// import { Lightbulb, Target, BookOpen, Award, Users, Heart, Globe, TrendingUp, Microscope, Calculator, Palette, Languages, Code, Music, ChevronRight } from 'lucide-react';
// import Navbar from '@/components/Navbar';
// import Navbar2 from '@/components/Navbar2';
// import Footer from '@/components/Footer';

// const AhlussuffaAboutPage = () => {
//   const [activeFaculty, setActiveFaculty] = useState(null);

//   const coreValues = [
//     {
//       icon: <BookOpen className="w-10 h-10" />,
//       title: "Islamic Excellence",
//       description: "Preserving authentic Islamic scholarship through traditional Dars system",
//       color: "from-primary to-[#16BBFF]"
//     },
//     {
//       icon: <Award className="w-10 h-10" />,
//       title: "Academic Merit",
//       description: "Commitment to highest standards of modern education",
//       color: "from-[#16BBFF] to-secondary"
//     },
//     {
//       icon: <Heart className="w-10 h-10" />,
//       title: "Character Building",
//       description: "Nurturing ethical values and moral integrity",
//       color: "from-secondary to-primary"
//     },
//     {
//       icon: <Globe className="w-10 h-10" />,
//       title: "Social Responsibility",
//       description: "Fostering community service and global citizenship",
//       color: "from-primary to-secondary"
//     }
//   ];

//   const faculties = [
//     {
//       id: 1,
//       name: "Dr. Mohammed Ibrahim",
//       position: "Head of Islamic Studies",
//       qualification: "PhD in Islamic Jurisprudence",
//       experience: "15+ years",
//       specialization: "Fiqh, Hadith, Tafseer",
//       icon: <BookOpen className="w-8 h-8" />,
//       color: "from-primary to-[#16BBFF]"
//     },
//     {
//       id: 2,
//       name: "Prof. Sarah Ahmed",
//       position: "Dean of Sciences",
//       qualification: "PhD in Molecular Biology",
//       experience: "12+ years",
//       specialization: "Biology, Chemistry, Research",
//       icon: <Microscope className="w-8 h-8" />,
//       color: "from-[#16BBFF] to-secondary"
//     },
//     {
//       id: 3,
//       name: "Dr. Abdul Rahman",
//       position: "Head of Commerce",
//       qualification: "PhD in Business Administration",
//       experience: "10+ years",
//       specialization: "Finance, Economics, Management",
//       icon: <TrendingUp className="w-8 h-8" />,
//       color: "from-secondary to-primary"
//     },
//     {
//       id: 4,
//       name: "Prof. Fatima Khan",
//       position: "Head of Humanities",
//       qualification: "PhD in Literature",
//       experience: "14+ years",
//       specialization: "Language, Literature, History",
//       icon: <Languages className="w-8 h-8" />,
//       color: "from-primary to-secondary"
//     },
//     {
//       id: 5,
//       name: "Dr. Yusuf Ali",
//       position: "Mathematics Faculty",
//       qualification: "PhD in Applied Mathematics",
//       experience: "11+ years",
//       specialization: "Calculus, Statistics, Algebra",
//       icon: <Calculator className="w-8 h-8" />,
//       color: "from-[#16BBFF] to-primary"
//     },
//     {
//       id: 6,
//       name: "Prof. Aisha Rahman",
//       position: "Arts & Culture Head",
//       qualification: "MA in Fine Arts",
//       experience: "8+ years",
//       specialization: "Visual Arts, Calligraphy",
//       icon: <Palette className="w-8 h-8" />,
//       color: "from-secondary to-[#16BBFF]"
//     },
//     {
//       id: 7,
//       name: "Dr. Hamza Malik",
//       position: "Technology Faculty",
//       qualification: "PhD in Computer Science",
//       experience: "9+ years",
//       specialization: "Programming, AI, Web Development",
//       icon: <Code className="w-8 h-8" />,
//       color: "from-primary to-[#16BBFF]"
//     },
//     {
//       id: 8,
//       name: "Prof. Zainab Hussain",
//       position: "Islamic Music & Nasheed",
//       qualification: "MA in Islamic Arts",
//       experience: "7+ years",
//       specialization: "Nasheed, Islamic Poetry",
//       icon: <Music className="w-8 h-8" />,
//       color: "from-[#16BBFF] to-secondary"
//     }
//   ];

//   return (
//     <div className="w-full bg-white min-h-full">
//         <Navbar2/>
//       {/* Hero Section */}

//       {/* Introduction Section */}
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
//             <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
//               Ahlussuffa is a pioneering Islamic educational institution committed to nurturing well-rounded individuals who excel in both religious knowledge and academic pursuits. Founded on the principles of authentic Islamic scholarship, we integrate the time-honored Dars system with modern educational methodologies to prepare students for success in this world and the hereafter.
//             </p>
//             <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
//               Our comprehensive curriculum spans Science, Commerce, and Humanities, offering multiple degree pathways while maintaining a strong foundation in Islamic studies. We believe in developing not just scholars, but compassionate leaders who contribute positively to society.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Purpose</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mb-16">
//             {/* Vision Card */}
//             <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#16BBFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
//               <div className="relative p-10">
//                 <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-primary to-[#16BBFF] mb-6 transform group-hover:rotate-6 transition-transform duration-300">
//                   <Lightbulb className="w-12 h-12 text-white" />
//                 </div>
//                 <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h3>
//                 <p className="text-lg text-gray-700 leading-relaxed mb-4">
//                   To be a beacon of Islamic education that harmoniously integrates traditional Dars system with modern academic excellence.
//                 </p>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   We aspire to nurture scholars who are equipped to lead with knowledge, faith, and integrity, making meaningful contributions to both their communities and the global society.
//                 </p>
//               </div>
//               <div className="h-2 bg-gradient-to-r from-primary to-[#16BBFF]"></div>
//             </div>

//             {/* Mission Card */}
//             <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
//               <div className="relative p-10">
//                 <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 transform group-hover:rotate-6 transition-transform duration-300">
//                   <Target className="w-12 h-12 text-white" />
//                 </div>
//                 <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h3>
//                 <p className="text-lg text-gray-700 leading-relaxed mb-4">
//                   To promote religious learning, academic excellence, and social responsibility through an integrated educational approach.
//                 </p>
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   We prepare students for both worldly success and spiritual fulfillment, fostering critical thinking, ethical values, and a commitment to lifelong learning.
//                 </p>
//               </div>
//               <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
//             </div>
//           </div>

//           {/* Core Values */}
//           <div className="mt-16">
//             <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//               Our Core <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Values</span>
//             </h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {coreValues.map((value, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
//                 >
//                   <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${value.color} text-white mb-4`}>
//                     {value.icon}
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
//                   <p className="text-gray-600 leading-relaxed">{value.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Faculty Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Meet Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Faculty</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our distinguished team of scholars and educators bring decades of experience and expertise
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {faculties.map((faculty) => (
//               <div
//                 key={faculty.id}
//                 onClick={() => setActiveFaculty(activeFaculty === faculty.id ? null : faculty.id)}
//                 className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border-2 ${
//                   activeFaculty === faculty.id ? 'border-primary scale-105' : 'border-transparent'
//                 }`}
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${faculty.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

//                 <div className="relative p-6">
//                   {/* Icon */}
//                   <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${faculty.color} flex items-center justify-center text-white mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
//                     {faculty.icon}
//                   </div>

//                   {/* Name & Position */}
//                   <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{faculty.name}</h3>
//                   <p className={`text-sm font-semibold bg-gradient-to-r ${faculty.color} bg-clip-text text-transparent text-center mb-4`}>
//                     {faculty.position}
//                   </p>

//                   {/* Details - Show on active */}
//                   <div className={`transition-all duration-300 ${
//                     activeFaculty === faculty.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                   } overflow-hidden`}>
//                     <div className="pt-4 border-t border-gray-200 space-y-3">
//                       <div>
//                         <p className="text-xs font-semibold text-gray-500 mb-1">Qualification</p>
//                         <p className="text-sm text-gray-700">{faculty.qualification}</p>
//                       </div>
//                       <div>
//                         <p className="text-xs font-semibold text-gray-500 mb-1">Experience</p>
//                         <p className="text-sm text-gray-700">{faculty.experience}</p>
//                       </div>
//                       <div>
//                         <p className="text-xs font-semibold text-gray-500 mb-1">Specialization</p>
//                         <p className="text-sm text-gray-700">{faculty.specialization}</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Click indicator */}
//                   <div className="flex items-center justify-center mt-4">
//                     <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
//                       activeFaculty === faculty.id ? 'rotate-90' : ''
//                     }`} />
//                   </div>
//                 </div>

//                 <div className={`h-1 bg-gradient-to-r ${faculty.color}`}></div>
//               </div>
//             ))}
//           </div>

//           {/* Faculty Stats */}
//           <div className="grid md:grid-cols-3 gap-8 mt-16">
//             <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-[#16BBFF]/10 rounded-2xl">
//               <div className="text-5xl font-bold text-primary mb-2">50+</div>
//               <div className="text-xl text-gray-700 font-semibold">Expert Faculty</div>
//             </div>
//             <div className="text-center p-8 bg-gradient-to-br from-[#16BBFF]/10 to-secondary/10 rounded-2xl">
//               <div className="text-5xl font-bold text-[#16BBFF] mb-2">200+</div>
//               <div className="text-xl text-gray-700 font-semibold">Years Combined Experience</div>
//             </div>
//             <div className="text-center p-8 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl">
//               <div className="text-5xl font-bold text-secondary mb-2">15+</div>
//               <div className="text-xl text-gray-700 font-semibold">Specialized Departments</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ahlussuffa</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               {
//                 title: "Integrated Curriculum",
//                 description: "Unique blend of traditional Dars system with modern academic programs",
//                 icon: <BookOpen className="w-6 h-6" />
//               },
//               {
//                 title: "Experienced Faculty",
//                 description: "Learn from scholars with decades of teaching and research experience",
//                 icon: <Users className="w-6 h-6" />
//               },
//               {
//                 title: "Holistic Development",
//                 description: "Focus on spiritual, intellectual, physical, and social growth",
//                 icon: <Heart className="w-6 h-6" />
//               },
//               {
//                 title: "Modern Facilities",
//                 description: "State-of-the-art infrastructure and digital learning resources",
//                 icon: <Globe className="w-6 h-6" />
//               },
//               {
//                 title: "Career Guidance",
//                 description: "Comprehensive support for academic and professional success",
//                 icon: <Target className="w-6 h-6" />
//               },
//               {
//                 title: "Community Impact",
//                 description: "Active engagement in social welfare and community service",
//                 icon: <Award className="w-6 h-6" />
//               }
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary"
//               >
//                 <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                   <p className="text-gray-600 leading-relaxed">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-primary via-[#16BBFF] to-secondary">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Join Our Community
//           </h2>
//           <p className="text-xl text-white/90 mb-8">
//             Become part of a legacy of excellence in Islamic and academic education
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
//               Apply for Admission
//             </button>
//             <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300">
//               Schedule a Visit
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* <Footer/> */}
//     </div>
//   );
// };

// export default AhlussuffaAboutPage;

// this is the main page

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
  Calendar,
  ChevronRight,
  Quote,
  GraduationCap,
  MapPin,
  Clock,
  Star,
  Building,
  Library,
  Microscope,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Navbar2 from "@/components/Navbar2";
import { roboto } from "../font";
import Scrolltotop from "@/components/Scrolltotop";

const AhlussuffaAboutPage = () => {
  const [activeFaculty, setActiveFaculty] = useState(null);

  const historyTimeline = [
    {
      year: "2008",
      title: "Foundation Established",
      description:
        "Ahlussuffa Educational Trust founded with a vision to integrate traditional Islamic education with modern academics",
    },
    {
      year: "2010",
      title: "Campus Inauguration",
      description:
        "First campus building inaugurated with initial batch of 50 students across three streams",
    },
    {
      year: "2013",
      title: "University Affiliation",
      description:
        "Received formal affiliation with state university for degree programs",
    },
    {
      year: "2016",
      title: "Expansion Phase",
      description:
        "Added new facilities including library, science labs, and computer center",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Implemented comprehensive digital learning infrastructure and online resources",
    },
    {
      year: "2023",
      title: "Current Excellence",
      description:
        "Serving 1500+ students with 50+ faculty members across multiple disciplines",
    },
  ];

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

  const faculties = [
    {
      id: 1,
      name: "Dr. Mohammed Ibrahim",
      position: "Head of Islamic Studies",
      qualification: "PhD in Islamic Jurisprudence, Al-Azhar University",
      experience: "15+ years",
      specialization: "Fiqh, Hadith, Tafseer",
      image: "/images/faculty1.jpg",
      achievements: [
        "Published 5 research papers",
        "International conferences",
        "Curriculum development",
      ],
    },
    {
      id: 2,
      name: "Prof. Sarah Ahmed",
      position: "Dean of Sciences",
      qualification: "PhD in Molecular Biology, University of London",
      experience: "12+ years",
      specialization: "Biology, Chemistry, Research Methodology",
      image: "/images/faculty2.jpg",
      achievements: [
        "Research grants",
        "Student mentorship",
        "Lab development",
      ],
    },
    {
      id: 3,
      name: "Dr. Abdul Rahman",
      position: "Head of Commerce",
      qualification: "PhD in Business Administration, IIM Ahmedabad",
      experience: "10+ years",
      specialization: "Finance, Economics, Business Management",
      image: "/images/faculty3.jpg",
      achievements: [
        "Industry collaborations",
        "Placement coordinator",
        "Case studies",
      ],
    },
    {
      id: 4,
      name: "Prof. Fatima Khan",
      position: "Head of Humanities",
      qualification: "PhD in English Literature, University of Oxford",
      experience: "14+ years",
      specialization: "Literature, Language, Critical Thinking",
      image: "/images/faculty4.jpg",
      achievements: ["Literary awards", "Publications", "Debate club mentor"],
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

  return (
    <div className="w-full bg-white">
      <Navbar2 />

      {/* About Section with Image */}
      <section className="py-10 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">

            {/* Image Section */}

            <div className="relative basis-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about.jpeg"
                  width={500}
                  height={500}
                  alt="Ahlussuffa Campus"
                  className="w-full h-[300px] lg:h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 basis-1/2">
              <div>
                <h2
                  className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${roboto.className}`}
                >
                  Our{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Story
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-6"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Ahlussuffa Educational Trust was established in 2008 with a
                visionary mission to create an educational institution that
                seamlessly integrates traditional Islamic scholarship with
                modern academic excellence. Our founders recognized the need for
                an educational model that nurtures both worldly success and
                spiritual fulfillment.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we stand as a beacon of integrated education, serving
                over 1500 students across multiple disciplines. Our unique
                approach combines the time-honored Dars system with contemporary
                educational methodologies, preparing students to excel in both
                their professional careers and spiritual lives.
              </p>
            </div>


            
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${roboto.className}`}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Purpose
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 bg-gray-50">
            {/* Vision Card */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 border border-gray-100">
              <div className="relative p-7 lg:p-10">
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                  <Lightbulb className="w-12 h-12 text-white" />
                </div>
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
            </div>

            {/* Mission Card */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 border border-gray-100">
              <div className="relative p-7 lg:p-10">
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                  <Target className="w-12 h-12 text-white" />
                </div>
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
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Core{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Values
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
                >
                  <div
                    className={`inline-block p-3 rounded-xl bg-gradient-to-r ${value.color} text-white mb-4`}
                  >
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Section */}

      <div className="mb-20 max-w-7xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Campus
          </span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {/* <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  {facility.icon}
                </div> */}
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {facility.title}
                </h4>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-[#16BBFF] to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-6 ${roboto.className}`}
          >
            Join Our Legacy of Excellence
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Become part of a community dedicated to integrated education and
            holistic development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Apply for Admission
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Scrolltotop />
    </div>
  );
};

export default AhlussuffaAboutPage;
