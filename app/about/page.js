"use client"
import Navbar2 from '@/components/Navbar2'
import Image from 'next/image'
import React, { useEffect } from 'react'
import thathoor from '@/public/images/thathur.jpg'
import Footer from '@/components/Footer'
import usthad from '@/public/images/usthad.png'
import usthad2 from "@/public/images/usthad2.png"
import usthad3 from "@/public/images/usthad3.png"
import usthad4 from "@/public/images/usthad4.png"
import sir from "@/public/images/sir.png"
import { raleway } from '../font'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Link from 'next/link'
import texture from '@/public/icons/texture.png'


const page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        Aos.init({
            // once: true
        });
    }, [])

  return (
    <div>
        <Navbar2/>

        <h1 className={`px-5 md:px-14 lg:px-44 text-4xl lg:text-5xl text-green-800 mt-10 lg:mt-14 font-bold lg:font-extrabold ${raleway.className}`}>About</h1>
        <h1 className='px-5 md:px-14 lg:px-44 text-lg text-gray-700 mt-2'><Link href='/'>Home</Link>  &gt; About</h1>

        <div className='px-5 md:px-14 lg:px-44 '>
            <div className='grid lg:grid-cols-2 content-center lg:flex gap-12 py-12 lg:py-20'>
                <div data-aos='fade-right' data-aos-duration='600' className='basis-1/2 order-2 lg:order-1'>
                    <h1 className={`text-4xl lg:text-5xl font-bold text-gray-300 tracking-wider ${raleway.className}`}>Ahlussufa Institute Of Integrated Studies</h1>
                    <p className='text-justify mt-8 text-gray-700'>
                    With the blessings of the venerable Ustad Sultan ul-Ulama Kanthapuram and Ustad Abdul Hakeem Azhari, the revered Ustad Arshad Nurani Kamil saqafi initiated the Ahlussuffa: Dars, an esteemed program on religious knowledge and science, at the Montal Mosque in Kannur in 2014 with the participation of five students. Over the past eight years, the program has flourished into a superior institution of 120 eminent scholars from various Islamic scholastic streams as well as modern-age education. The profound Islamic scholastic system organized by Shuhada Makham at Thathoor Mosque in Kozhikode has gained immense popularity, imparting knowledge to students through seven years of holistic religious and scientific education under the spiritual guidance of the revered Ustad.
                    </p>

                </div>
                <div data-aos='fade-left' data-aos-duration='600' className='basis-1/2 order-1 lg:order-2'>
                    <Image src={thathoor} width={600} alt='' className='rounded-lg shadow-lg object-cover hover:scale-105 transition duration-500 hover:shadow-xl'/>
                </div>
            </div>
        </div>

        {/* ---------------------------------------------------- */}

        <div className='w-full relative mt-6 py-20 px-5 md:px-12 lg:px-44 grid bg-[#f5fdf2] lg:grid-cols-2 gap-10'>
            <Image src={texture} width={100} alt='something' className='absolute left-0 top-10 lg:left-36'/>
            <div data-aos='fade-up' data-aos-duration='600' className='z-20'>
                <div className='bg-white shadow-md p-12 w-full rounded-lg hover:shadow-xl transition-all duration-500'>
                    <h1 className={`text-3xl text-center text-green-800 font-bold ${raleway.className}`}>Vision</h1>
                    <p className='text-gray-700 mt-4 text-justify'>
                        We envision a world where knowledge and character go hand in hand. At Ahlussuffa, we aim to be more than just an institution, we seek to be a guiding 
                        light for those pursuing both spiritual and academic excellence. Our vision is to cultivate a generation of confident, knowledgeable, and 
                        principled individuals who carry forward the legacy of Ahlussunna while embracing the challenges of the modern world with wisdom and integrity.
                    </p>
                </div>
                
            </div>

            <div data-aos='fade-up' data-aos-duration='600' data-aos-delay='200'>
                <div className='bg-white shadow-md p-12 w-full rounded-lg hover:shadow-xl transition-all duration-500'>
                    <h1 className={`text-3xl text-center text-green-800 font-bold ${raleway.className}`}>Mission</h1>
                    <p className='text-gray-700 mt-4 text-justify'>
                        Our mission is to cultivate a generation of scholars grounded in the rich traditions of Islamic sciences while equipping them with the 
                        intellectual and ethical tools to engage with contemporary challenges. Through a rigorous academic curriculum, spiritual enrichment, and 
                        community engagement, we strive to nurture individuals who embody knowledge, wisdom, and service to humanity.
                    </p>
                </div>
            </div>
        </div>

{/* -------------------------  Faculties section  -------------------------------- */}

        <div className='px-5 md:px-14 lg:px-44 py-28 flex flex-col items-center'>
            <h1 className={`text-3xl lg:text-4xl font-extrabold text-green-800 text-center ${raleway.className}`}>Our faculties</h1>
                <div data-aos='fade-up' data-aos-duration='600' className='flex gap-4 p-4 border rounded-xl shadow-md mt-12 bg-[#fafafa]'>
                    <div className='basis-2/6'>
                        <Image src={usthad} width={130} alt='' className='object-fit rounded-lg hover:scale-105 transition-all duration-300'/>
                    </div>
                    <div className='basis-4/6 flex flex-col justify-center'>
                        <h1 className={`text-2xl lg:text-3xl text-green-800 font-extrabold ${raleway.className}`}>Muhammad Arshad Nurani Kamil Saqafi</h1>
                        <p className='text-gray-500'>Founder</p>
                        <p className='mt-4 text-gray-800'></p>
                    </div>
                </div>


            <div className='grid lg:grid-cols-2 gap-6 mt-6 lg:mt-12'>
                <div data-aos='fade-up' data-aos-duration='600'  data-aos-delay='200' className='flex gap-4 p-4  border rounded-xl shadow-md bg-[#fafafa]'>
                    <div className='basis-2/6'>
                        <Image src={usthad2} width={130} alt='' className='object-fit rounded-lg hover:scale-105 transition-all duration-300'/>
                    </div>
                    <div className='basis-4/6 flex flex-col justify-center'>
                        <h1 className={`text-2xl text-green-800 font-bold ${raleway.className}`}>Muhammad Ali Nurani Saqafi</h1>
                    </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='600'  data-aos-delay='400' className='flex gap-4 p-4 border rounded-xl shadow-md bg-[#fafafa]'>
                    <div className='basis-2/6'>
                        <Image src={usthad3} width={130} alt='' className='object-fit rounded-lg hover:scale-105 transition-all duration-300'/>
                    </div>
                    <div className='basis-4/6 flex flex-col justify-center pr-6'>
                        <h1 className={`text-2xl text-green-800 font-bold ${raleway.className}`}>Hafiz Muhammad Umar Saqafi</h1>
                    </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='600'  data-aos-delay='600' className='flex gap-4 p-4 border rounded-xl shadow-md bg-[#fafafa]'>
                    <div className='basis-2/6'>
                        <Image src={usthad4} width={130} alt='' className='object-fit rounded-lg hover:scale-105 transition-all duration-300'/>
                    </div>
                    <div className='basis-4/6 flex flex-col justify-center'>
                        <h1 className={`text-2xl text-green-800 font-bold ${raleway.className}`}>Hafiz Faris Manzari</h1>
                    </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='600'  data-aos-delay='800' className='flex gap-4 p-4 border rounded-xl shadow-md bg-[#fafafa]'>
                    <div className='basis-2/6'>
                        <Image src={sir} width={130} alt='' className='object-fit rounded-lg hover:scale-105 transition-all duration-300'/>
                    </div>
                    <div className='basis-4/6 flex flex-col justify-center pr-6'>
                        <h1 className={`text-2xl text-green-800 font-bold ${raleway.className}`}>Ameer MN</h1>
                    </div>
                </div>
            </div>
        </div>


        <Footer/>
    </div>
  )
}

export default page