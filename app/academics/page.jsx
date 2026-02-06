"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Users, 
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  ChevronDown,
  Target,
  Star,
  Library,
  Microscope,
  Calculator,
  Palette,
  Languages,
  Code,
  Music,
  TrendingUp,
  Globe,
  Heart,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  BookMarked,
  Shield,
  Lightbulb
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const AhlussuffaAcademicsPage = () => {
  const [activeProgram, setActiveProgram] = useState('higher-secondary');
  const [activeTab, setActiveTab] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    faculty: 0,
    programs: 0,
    successRate: 0
  });
  
  const statsRef = useRef(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  // Programs data
  const programs = {
    'higher-secondary': {
      title: 'Higher Secondary',
      description: 'Foundation programs with strong academic and Islamic foundation',
      duration: '2 Years',
      eligibility: '10th Standard Pass',
      streams: [
        {
          name: 'Science Stream',
          subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Islamic Studies'],
          icon: <Microscope className="w-8 h-8" />,
          color: 'from-[#1687C1] to-[#16BBFF]'
        },
        {
          name: 'Commerce Stream',
          subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English', 'Islamic Studies'],
          icon: <TrendingUp className="w-8 h-8" />,
          color: 'from-[#16BBFF] to-[#72BF44]'
        },
        {
          name: 'Humanities Stream',
          subjects: ['History', 'Political Science', 'Sociology', 'Psychology', 'English', 'Islamic Studies'],
          icon: <Globe className="w-8 h-8" />,
          color: 'from-[#72BF44] to-[#1687C1]'
        },
        {
          name: 'Islamic Sciences',
          subjects: ['Quranic Studies', 'Hadith', 'Fiqh', 'Arabic Language', 'Islamic History', 'General Sciences'],
          icon: <BookMarked className="w-8 h-8" />,
          color: 'from-[#1687C1] to-[#72BF44]'
        }
      ],
      features: [
        'Integrated Islamic Studies',
        'Regular Counseling Sessions',
        'Career Guidance Workshops',
        'Co-curricular Activities'
      ]
    },
    'bachelors': {
      title: "Bachelor's Degrees",
      description: 'Undergraduate programs combining modern disciplines with Islamic scholarship',
      duration: '3-4 Years',
      eligibility: '12th Standard Pass',
      streams: [
        {
          name: 'BSc Programs',
          subjects: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biotechnology'],
          icon: <Microscope className="w-8 h-8" />,
          color: 'from-[#1687C1] to-[#16BBFF]',
          degrees: ['BSc Computer Science', 'BSc Mathematics', 'BSc Physics', 'BSc Chemistry']
        },
        {
          name: 'Commerce & Business',
          subjects: ['Finance', 'Accounting', 'Marketing', 'Management', 'Economics'],
          icon: <TrendingUp className="w-8 h-8" />,
          color: 'from-[#16BBFF] to-[#72BF44]',
          degrees: ['BCom', 'BBA', 'BMS', 'BBA in Islamic Finance']
        },
        {
          name: 'Arts & Humanities',
          subjects: ['English Literature', 'History', 'Psychology', 'Sociology', 'Political Science'],
          icon: <Globe className="w-8 h-8" />,
          color: 'from-[#72BF44] to-[#1687C1]',
          degrees: ['BA English', 'BA History', 'BA Psychology', 'BA Sociology']
        },
        {
          name: 'Islamic Studies',
          subjects: ['Quranic Sciences', 'Hadith Studies', 'Fiqh', 'Islamic History', 'Arabic Literature'],
          icon: <BookMarked className="w-8 h-8" />,
          color: 'from-[#1687C1] to-[#72BF44]',
          degrees: ['BA Islamic Studies', 'BA Arabic', 'BA Islamic Economics']
        }
      ],
      features: [
        'Industry Internships',
        'Research Projects',
        'Professional Certifications',
        'Islamic Ethics Integration'
      ]
    },
    'masters': {
      title: "Master's Degrees",
      description: 'Advanced postgraduate programs for specialized knowledge and research',
      duration: '2 Years',
      eligibility: 'Bachelor\'s Degree',
      streams: [
        {
          name: 'Science & Technology',
          subjects: ['Data Science', 'Biotechnology', 'Environmental Science', 'Computer Applications'],
          icon: <Microscope className="w-8 h-8" />,
          color: 'from-[#1687C1] to-[#16BBFF]',
          degrees: ['MSc Data Science', 'MSc Biotechnology', 'MSc Environmental Science', 'MCA']
        },
        {
          name: 'Business & Management',
          subjects: ['Finance', 'Marketing', 'Human Resources', 'Operations', 'Islamic Finance'],
          icon: <TrendingUp className="w-8 h-8" />,
          color: 'from-[#16BBFF] to-[#72BF44]',
          degrees: ['MCom', 'MBA', 'Executive MBA', 'MA Islamic Economics']
        },
        {
          name: 'Arts & Social Sciences',
          subjects: ['Literature', 'History', 'Psychology', 'Sociology', 'Islamic Studies'],
          icon: <Globe className="w-8 h-8" />,
          color: 'from-[#72BF44] to-[#1687C1]',
          degrees: ['MA English', 'MA History', 'MA Psychology', 'MA Islamic Studies']
        },
        {
          name: 'Research Programs',
          subjects: ['MPhil', 'PhD', 'Post-Doctoral', 'Special Research'],
          icon: <BookMarked className="w-8 h-8" />,
          color: 'from-[#1687C1] to-[#72BF44]',
          degrees: ['MPhil', 'PhD in Islamic Studies', 'PhD in Sciences', 'PhD in Commerce']
        }
      ],
      features: [
        'Advanced Research Facilities',
        'International Collaborations',
        'Publication Support',
        'Conference Funding'
      ]
    }
  };

  const tabs = [
    { id: 0, label: 'Higher Secondary', value: 'higher-secondary' },
    { id: 1, label: "Bachelor's", value: 'bachelors' },
    { id: 2, label: "Master's", value: 'masters' },
    { id: 3, label: 'Research', value: 'research' }
  ];

  const facilities = [
    {
      icon: <Library className="w-10 h-10" />,
      title: 'Digital Library',
      description: 'Extensive collection of books, journals, and digital resources'
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: 'Advanced Labs',
      description: 'State-of-the-art science and computer laboratories'
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Tech Center',
      description: 'Modern computing and programming facilities'
    },
    {
      icon: <BookMarked className="w-10 h-10" />,
      title: 'Islamic Resource Center',
      description: 'Specialized library for Islamic studies and research'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Smart Classrooms',
      description: 'Interactive learning spaces with multimedia facilities'
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Student Support',
      description: 'Comprehensive counseling and guidance services'
    }
  ];

  // Animation for stats counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsStatsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isStatsVisible) return;

    const durations = [2000, 2500, 1800, 3000];
    const targetValues = { students: 1500, faculty: 50, programs: 25, successRate: 98 };

    Object.keys(targetValues).forEach((key, index) => {
      const duration = durations[index];
      const target = targetValues[key];
      const step = target / (duration / 20);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 20);
    });
  }, [isStatsVisible]);

  return (
    <div className="w-full bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-[#1687C1] via-[#16BBFF] to-[#72BF44] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Academics
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Comprehensive educational pathways integrated with traditional Islamic scholarship
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section with Animation */}
      <section ref={statsRef} className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                icon: <Users className="w-8 h-8" />, 
                value: animatedStats.students, 
                label: 'Students Enrolled',
                suffix: '+',
                color: 'from-[#1687C1] to-[#16BBFF]'
              },
              { 
                icon: <GraduationCap className="w-8 h-8" />, 
                value: animatedStats.faculty, 
                label: 'Expert Faculty',
                suffix: '+',
                color: 'from-[#16BBFF] to-[#72BF44]'
              },
              { 
                icon: <BookOpen className="w-8 h-8" />, 
                value: animatedStats.programs, 
                label: 'Programs Offered',
                suffix: '+',
                color: 'from-[#72BF44] to-[#1687C1]'
              },
              { 
                icon: <Award className="w-8 h-8" />, 
                value: animatedStats.successRate, 
                label: 'Success Rate',
                suffix: '%',
                color: 'from-[#1687C1] to-[#72BF44]'
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1687C1] to-[#72BF44] bg-clip-text text-transparent mb-2">
                  {stat.value}
                  {stat.suffix === '%' ? '%' : stat.value === 0 ? '' : stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Navigation Tabs */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setActiveProgram(tab.value);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#1687C1] to-[#72BF44] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Program Details */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Program Header */}
            <div className="bg-gradient-to-r from-[#1687C1] to-[#72BF44] p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {programs[activeProgram]?.title}
                  </h2>
                  <p className="text-white/90 max-w-2xl">
                    {programs[activeProgram]?.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex items-center gap-2 text-white">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">{programs[activeProgram]?.duration}</span>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex items-center gap-2 text-white">
                      <Target className="w-5 h-5" />
                      <span className="font-semibold">{programs[activeProgram]?.eligibility}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Streams */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {programs[activeProgram]?.streams?.map((stream, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
                  >
                    <div className={`h-2 bg-gradient-to-r ${stream.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${stream.color} text-white`}>
                          {stream.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{stream.name}</h3>
                          {stream.degrees && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {stream.degrees.map((degree, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                >
                                  {degree}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Subjects Include:</p>
                        {stream.subjects.map((subject, idx) => (
                          <div key={idx} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stream.color} mr-2`}></div>
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Program Features */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {programs[activeProgram]?.features?.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-[#1687C1] to-[#72BF44] text-white">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Structure */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Curriculum <span className="bg-gradient-to-r from-[#1687C1] to-[#72BF44] bg-clip-text text-transparent">Structure</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1687C1] to-[#72BF44] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated curriculum combines academic excellence with Islamic values
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Core Subjects',
                percentage: '60%',
                description: 'Main academic disciplines and major subjects',
                color: 'from-[#1687C1] to-[#16BBFF]',
                subjects: ['Mathematics', 'Sciences', 'Languages', 'Social Sciences']
              },
              {
                title: 'Islamic Studies',
                percentage: '25%',
                description: 'Traditional Dars system and Islamic sciences',
                color: 'from-[#16BBFF] to-[#72BF44]',
                subjects: ['Quranic Studies', 'Hadith', 'Fiqh', 'Islamic History']
              },
              {
                title: 'Skill Development',
                percentage: '15%',
                description: 'Professional skills and co-curricular activities',
                color: 'from-[#72BF44] to-[#1687C1]',
                subjects: ['Digital Skills', 'Communication', 'Leadership', 'Arts']
              }
            ].map((section, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  {/* Percentage Circle */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gray-100"></div>
                    <div className={`absolute inset-4 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                      <span className="text-3xl font-bold text-white">{section.percentage}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">{section.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{section.description}</p>
                  
                  <div className="space-y-2">
                    {section.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.color} mr-3`}></div>
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Campus <span className="bg-gradient-to-r from-[#1687C1] to-[#72BF44] bg-clip-text text-transparent">Facilities</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1687C1] to-[#72BF44] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art infrastructure supporting comprehensive learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className={`inline-block p-3 rounded-xl bg-gradient-to-r from-[#1687C1] to-[#72BF44] text-white mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
                <div className="h-1 bg-gradient-to-r from-[#1687C1] to-[#72BF44] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Info */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1687C1] via-[#16BBFF] to-[#72BF44]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Academic Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our community of learners and embark on a transformative educational experience
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                step: '01',
                title: 'Check Eligibility',
                description: 'Review admission requirements for your chosen program'
              },
              {
                step: '02',
                title: 'Apply Online',
                description: 'Fill out the application form with required documents'
              },
              {
                step: '03',
                title: 'Join Campus',
                description: 'Begin your transformative educational journey'
              }
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-500"
              >
                <div className="text-5xl font-bold text-white/30 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="group px-10 py-4 bg-white text-[#1687C1] font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#1687C1] transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AhlussuffaAcademicsPage;