"use client"
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import programming from '@/public/images/coding.png';
import quran from '@/public/images/quran.png'
import library from '@/public/images/library.png'
import usthad from '@/public/images/usthad.jpg'
import { FaArrowRight } from "react-icons/fa";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Aos from "aos";
import { raleway } from "@/app/font";
import pattern from '@/public/icons/acadenic-shape-2.png'
import { FaGraduationCap } from "react-icons/fa6";
import { SlBookOpen } from "react-icons/sl";
import { SiBookstack } from "react-icons/si";
import { PiStudent } from "react-icons/pi";
import about from '@/public/images/about.jpg'
import dynamic from "next/dynamic";
import bg from '@/public/icons/bg.jpg'


export default function Home() {
  const [counterOn, setCountOn] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      Aos.init({
        once: true
      }); 
    }
  }, [])

  return (
    <div>
      <Navbar/>
      <Hero/>

      {/* About Ahlussuffa */}

      <div className="h-screen w-screen bg-transparent"></div>
      <div className="absolute z-20 overflow-x-hidden">

      <div className='py-24 w-full px-5 md:px-14 bg-white flex flex-col-reverse lg:px-40 lg:flex-row lg:items-center lg:justify-center gap-10 lg:gap-6'>
            <div className='basis-1/2 h-full flex flex-col text-justify justify-center relative'>
                <h1 data-aos="fade-right" data-aos-duration='600' className={`text-3xl md:text-4xl font-bold text-green-800 ${raleway.className}`}>About Ahlussuffa</h1>
                <p data-aos="fade-right" data-aos-duration='600'  className='mt-5 text-gray-800'>
                With the blessings of Ustad Sultanul Ulama Kanthapuram and Ustad Dr. MAH Azhari, and under the leadership of Ustad Arshad Nurani Kamil Saqafi, our institution has been providing holistic Islamic and modern education for over eleven years. After seven years at Shuhada Makham in Thathoor, we are now continuing our mission at Parapram Juma Masjid, Kannur. Committed to nurturing both spiritual and intellectual growth, Ahlussuffa remains a beacon of knowledge and guidance for the next generation.
                </p>
                <div data-aos='fade-up' data-aos-duration='600' data-aos-delay='200'>
                  <button  className=" relative bg-green-700 px-4 py-3 w-fit mt-5 text-white rounded-md flex items-center font-semibold shadow-md hover:-translate-y-2 transition duration-500 hover:shadow-xl">
                    <Link className="mr-2" href="/about">Read more</Link>
                    <FaArrowRight/>
                  </button>
                </div>
            </div>

            <div className='basis-1/2 h-full flex items-center justify-center' data-aos="fade-left" data-aos-delay="100">
                <Image src={about} width={500} alt='image of a masjid' className='rounded-lg hover:scale-105 transition-all duration-700  shadow-lg hover:shadow-2xl'/>
            </div>

        </div>

{/* --------------------  Programs context --------------------------------- */}

      <div className="bg-background py-20 relative w-full">
        <Image src={pattern} width={340} alt="unkown" className="absolute top-0 right-0"/>
        <h1 data-aos='fade-left' className={`relative text-3xl lg:text-4xl font-bold text-primary text-center ${raleway.className}`}>Our programs</h1>

        <div className="relative w-full px-5 md:px-12 lg:px-44 mt-16 grid lg:grid-cols-3 place-content-center content-center gap-5 lg:gap-2">
          <div data-aos='fade-up' data-aos-delay='200' data-aos-duration="500" className="relative bg-white rounded-xl overflow-hidden max-w-sm h-auto">
            <div className="p-6 flex items-center justify-center">
              <Image src={library} alt="sdlfak" className="object-cover w-36 rounded-xl" />
            </div>

            <div className="px-8 mb-4 relative">
              <h2 className="text-xl font-bold text-center text-primary">Baithul hikma</h2>
              <p className="text-gray-600 mt-2"> Exhibiting as unrivalled knowledge centre {'Baitul Hikma Library'} is the main attraction of Ahlussufa Dars. contained with a large collection of kithabs and books on different subjects and languages, It has provided with extensive Mutala and reading facilities  </p>
              <Link href="/" className="text-green-600 font-semibold mt-4 inline-block">
                &gt; Learn more
              </Link>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='400' data-aos-duration="500" className="relative bg-white rounded-xl overflow-hidden max-w-sm">
            <div className="p-6 flex items-center justify-center">
              <Image src={quran} alt="sdlfak" className="w-36 object-cover rounded-xl" />
            </div>
            <div className="px-8 mb-4">
              <h2 className="text-xl font-bold text-center text-primary">Suffathul huffaz</h2>
              <p className="text-gray-600 mt-2"> Suffathul huffaz is an academy established for Quranic studies and staying in the hearts of more than 30 {`mutha'allim`} hafilis of Ahlussuffa. The aim is to inculcate ahlul of the noble quran and demanded by the society by providing opportunities for hifz daura and special qirath training classes. </p>
              <Link href="/" className="text-green-600 font-semibold mt-4 inline-block">
                &gt; Learn more
              </Link>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='600' data-aos-duration="500" className="relative bg-white rounded-xl overflow-hidden max-w-sm">
            <div className="p-6 flex items-center justify-center">
              <Image src={programming} alt="sdlfak" className="w-36 object-cover rounded-xl" />
            </div>
            <div className="px-8  mb-6">
              <h2 className="text-xl font-bold text-center text-primary">Suffa  Digi kiosk</h2>
              <p className="text-gray-600 mt-2"> Suffa Digi kiosk is a project initiated with the aim of moding the learned community to understand and address the possibilities of deeni {`da'wath`} in this fast moving modern age. Apart from that, Digi world is molding students who excel in different fields like web designing, graphic designing etc.   </p>
              <Link href="/" className="text-green-600 font-semibold mt-4 inline-block">
                &gt; Learn more
              </Link>
            </div>
          </div>

        </div>
        
      </div>
      
      {/* -------------------------  Students context   ------------------------ */}

      <div className="px-5 md:px-12 lg:px-44 py-16 lg:py-24 lg:flex items-center bg-primary text-primary">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full gap-6 lg:gap-10 px-8">
            <div data-aos='fade-up' data-aos-duration='600' data-aos-delay='200' className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-lg">
              <PiStudent className="text-5xl"/>
              <h1 className="text-2xl font-bold">
                100+
              </h1>
              <h1 className="text-xl">students</h1>
            </div>

            <div data-aos='fade-up' data-aos-duration='600' data-aos-delay='400' className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-lg">
              <SlBookOpen className="text-5xl"/>
              <h1 className="text-2xl font-bold">
                4+</h1>
              <h1 className="text-xl">Mentors</h1>
            </div>

            <div data-aos='fade-up' data-aos-duration='600' data-aos-delay='600' className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-lg">
              <SiBookstack className="text-5xl"/>
              <h1 className="text-2xl font-bold">
                5+</h1>
              <h1 className="text-xl">Programs</h1>
            </div>

            <div data-aos='fade-up' data-aos-duration='600' data-aos-delay='800' className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-lg">
              <FaGraduationCap className="text-5xl"/>
              <h1 className="text-2xl font-bold">
                65+</h1>
              <h1 className="text-xl">Alumni Networks</h1>
            </div>

          </div>
      </div>

      {/* --------------------------  About Founder context  --------------------------------------- */}

      <div className="px-5 md:px-12 lg:px-44 py-20 lg:flex items-center bg-white">
          <div data-aos="fade-right" data-aos-duration='600' className="basis-1/2 flex justify-center items-center">
            <Image src={usthad} alt="sdlfak" width={400} className="object-cover rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500" />
          </div>

          <div data-aos="fade-left" data-aos-duration='600' className="basis-1/2 mt-6 lg:mt-0">
            <h1 className={`text-3xl lg:text-4xl font-bold text-green-800 ${raleway.className}`}>Founder message</h1>
            <p className="text-gray-600">Muhammad Arshad Nurani Kamil saqafi</p>
            <p className="text-gray-800 py-5">With the blessings of the venerable Ustad Sultan ul-Ulama Kanthapuram and Ustad Abdul Hakeem Azhari, the revered Ustad Arshad ms as hift in the learning opportunities offered to students, providing them with the means to enhance their knowledge and skills through an insightful and comprehensive curriculum tailored to their needs es offered to students, providing them with the means to enhance their knowledge and skills through an insightful and comprehensive curriculum tailored to their needs.</p>
            <button className=" relative bg-primary px-4 py-3 text-white rounded-md w-fit flex items-center font-semibold shadow-md hover:-translate-y-2 transition duration-500 hover:shadow-xl">
              <Link className="mr-2" href="/about">Know more</Link>
              <FaArrowRight/>
            </button>
          </div>

      </div>

      <Footer/>

      </div>
    </div>
  );
}
