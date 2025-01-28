"use client"
import Hero from "@/components/Hero";
import Image from "next/image";
import image from "@/public/images/pray.jpg";
import Link from "next/link";
import digi from "@/public/images/digi.jpg";
import code from '@/public/images/code.jpg';
import quran from '@/public/images/quran.jpg'
import library from '@/public/images/library.jpg'
import usthad from '@/public/images/usthad.jpg'
import bg from '@/public/icons/bg.jpg'
import { FaArrowRight } from "react-icons/fa";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import pray from '@/public/images/pray.jpg'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";
import { raleway } from "@/app/font";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="h-screen w-full bg-transparent"></div>
      <div className="absolute z-20">

      <div className='py-24 w-full px-5 md:px-14 bg-white flex flex-col-reverse lg:px-40 lg:flex-row lg:items-center lg:justify-center gap-10 lg:gap-6'>
            <div className='basis-1/2 h-full flex flex-col text-justify justify-center'>
                <h1 data-aos="fade-right" data-aos-duration='600' className={`text-3xl md:text-4xl font-bold text-green-800 ${raleway.className}`}>About Ahlussuffa</h1>
                <p data-aos="fade-right" data-aos-duration='600'  className='mt-5 text-gray-800'>With the blessings of the venerable Ustad Sultan ul-Ulama Kanthapuram and Ustad Abdul Hakeem Azhari, the revered Ustad Arshad ms as well as modern-age education. The profound Islamic scholastic system organized by Shuhada Makham at Thathoor Mosque in Kozhikode has gained immense popularity, imparting knowledge to students through seven years of holistic religious and scientific education under the spiritual guidance of the revered Ustad. Ahlussuffa has been instrumental in creating a paradigm shift in the learning opportunities offered to students, providing them with the means to enhance their knowledge and skills through an insightful and comprehensive curriculum tailored to their needs.</p>
                <button data-aos="fade-up" data-aos-delay="200" data-aos-duration='600' className='mt-5 bg-green-800 px-4 py-3 text-white rounded-md w-fit flex items-center gap-2 font-semibold shadow-md'>
                    <Link href="/about">Read more</Link>
                    <FaArrowRight/>
                </button>
            </div>

            <div className='basis-1/2 h-full flex items-center justify-center' data-aos="fade-left" data-aos-delay="100">
                <Image src={pray} width={550} alt='image of a masjid' className='rounded-lg hover:scale-105 transition-all duration-700  shadow-lg hover:shadow-2xl'/>
            </div>

        </div>

{/* -------------------------------------------- */}

      <div className="bg-[#edf3ed] py-20">
      
        <h1 data-aos='fade-left' className={`relative text-3xl lg:text-4xl font-bold text-green-900 text-center ${raleway.className}`}>Our programs</h1>

        <div className="relative w-full mx-auto px-5 md:px-12 min-w-max lg:px-44 mt-16 grid lg:grid-cols-3 place-content-center gap-5 lg:gap-2">
          <div data-aos='fade-up' data-aos-delay='200' data-aos-duration="500" className="relative border bg-white border-green-600 rounded-xl overflow-hidden max-w-sm h-auto">
            <div className="p-4">
              <Image src={library} alt="sdlfak" className="object-cover w-full h-56 rounded-xl" />
            </div>

            <div className="px-8 py-6 mb-4 relative">
              <h2 className="text-xl font-bold text-gray-900">Baithul hikma</h2>
              <p className="text-gray-600 mt-2"> Exhibiting as unrivalled knowledge centre {'Baitul Hikma Library'} is the main attraction of Ahlussufa Dars. contained with a large collection of kithabs and books on different subjects and languages, It has provided with extensive Mutala and reading facilities  </p>
              <Link href="/" className="text-green-600 font-semibold mt-4 inline-block">
                &gt; Learn more
              </Link>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='400' data-aos-duration="500" className="relative border bg-white border-green-600 rounded-xl overflow-hidden max-w-sm">
            <div className="p-4">
              <Image src={quran} alt="sdlfak" className="w-full h-56 object-cover rounded-xl" />
            </div>
            <div className="px-8 py-6 mb-4">
              <h2 className="text-xl font-bold text-gray-900">Suffathul huffaz</h2>
              <p className="text-gray-600 mt-2"> Exhibiting as unrivalled knowledge centre {'Baitul Hikma Library'} is the main attraction of Ahlussufa Dars. contained with a large collection of kithabs and books on different subjects and languages, It has provided with extensive Mutala and reading facilities. </p>
              <Link href="/" className="text-green-600 font-semibold mt-4 inline-block">
                &gt; Learn more
              </Link>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='600' data-aos-duration="500" className="relative border bg-white border-green-600 rounded-xl overflow-hidden max-w-sm">
            <div className="p-4">
              <Image src={code} alt="sdlfak" className="w-full h-56 object-cover rounded-xl" />
            </div>
            <div className="px-8 py-6 mb-4">
              <h2 className="text-xl font-bold text-gray-900">Suffa  Digi kiosk</h2>
              <p className="text-gray-600 mt-2"> Exhibiting as unrivalled knowledge centre {'Baitul Hikma Library'} is the main attraction of Ahlussufa Dars. contained with a large collection of kithabs and books on different subjects and languages, It has provided with extensive Mutala and reading facilities.   </p>
              <Link href="/" className="text-green-600 font-semibold mt-4 inline-block">
                &gt; Learn more
              </Link>
            </div>
          </div>

        </div>
        
      </div>

      {/* ------------------------------------------------------------------------------- */}

      <div className="">
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,.7)), url(${bg.src})`}} className="min-h-[350px] lg:min-h-[400px] w-full bg-cover bg-bottom bg-fixed flex flex-col items-center justify-center px-5">
          <h1 data-aos='fade-left' data-aos-duration='600' className={`text-3xl lg:text-5xl text-white font-bold text-center ${raleway.className}`}>Ahlussuffa Integrated Studies</h1>
          <h2 data-aos='fade-left' data-aos-duration='600' className="text-xl lg:text-3xl px-5 text-gray-300 text-center mt-2">Join With Us To Experience Real Edutainmental Atmosphere</h2>
          <button data-aos='zoom-in-up' data-aos-duration='600' className="px-4 py-3 text-white rounded-md font-semibold bg-green-800 mt-4">
            <Link href="/">Know More</Link>
          </button>
        </div>
      </div>


      {/* ----------------------------------------------------------------- */}

      <div className="px-5 md:px-12 lg:px-44 py-20 lg:flex items-center bg-white">
          <div data-aos="fade-right" data-aos-duration='600' className="basis-1/2 flex justify-center items-center">
            <Image src={usthad} alt="sdlfak" width={400} className="object-cover rounded-lg shadow-lg" />``
          </div>

          <div data-aos="fade-left" data-aos-duration='600' className="basis-1/2 mt-6 lg:mt-0">
            <h1 className={`text-3xl lg:text-4xl font-bold text-green-800 ${raleway.className}`}>Founder message</h1>
            <p className="text-gray-600">Muhammad Arshad Nurani Kamil saqafi</p>
            <p className="text-gray-800 py-5">With the blessings of the venerable Ustad Sultan ul-Ulama Kanthapuram and Ustad Abdul Hakeem Azhari, the revered Ustad Arshad ms as hift in the learning opportunities offered to students, providing them with the means to enhance their knowledge and skills through an insightful and comprehensive curriculum tailored to their needs es offered to students, providing them with the means to enhance their knowledge and skills through an insightful and comprehensive curriculum tailored to their needs.</p>
            <button className=" bg-green-800 px-4 py-3 text-white rounded-md w-fit flex items-center gap-2 font-semibold shadow-md">
              <Link href="/">Know more</Link>
              <FaArrowRight/>
            </button>
          </div>

          {/* -------------------------------------------------- */}


      </div>
      <Footer/>
      </div>
    </div>
  );
}
