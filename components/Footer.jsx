import React from 'react'
import logo from "@/public/icons/ahlussuffalogo1.png"
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='w-full'>

    <div className='w-full bg-green-900 py-20 grid lg:grid-cols-3 gap-5 px-5 md:px-14 lg:px-44 place-content-center'> 
        <div className=''>
            <Image src={logo} width={80} className="" alt='logo'/>
            <p className='mt-4 text-white'>Ahlussufla travelling on the right way to forge potential products by conducting effective trainings and developmenta bootcamps</p>

            <div className='flex gap-4 mt-6'>
                <Link data-aos='fade-up' data-aos-duration='400' href='https://www.facebook.com/profile.php?id=100014534434979' className='bg-white p-2 text-green-900 rounded'><FaFacebookF size={15} className=''/></Link>
                <Link data-aos='fade-up' data-aos-duration='400'data-aos-delay='100' href='https://www.instagram.com/ahlussuffadars/'  className='bg-white p-2 text-green-900 rounded'><FaInstagram size={15} className=''/></Link>
                <Link data-aos='fade-up' data-aos-duration='400'data-aos-delay='300' href='https://www.youtube.com/@ahlussuffadars'  className='bg-white p-2 text-green-900 rounded'><FaYoutube size={15} className=''/></Link>
                <Link data-aos='fade-up' data-aos-duration='400'data-aos-delay='500' href='/'  className='bg-white p-2 text-green-900 rounded'><FaXTwitter size={15} className=''/></Link>
            </div> 
        </div>

        <div className='text-gray-300 hidden lg:flex lg:flex-col lg:items-center'>
            <h1 className='text-white text-xl font-bold'>Quick Links</h1>
            <ul className='mt-4 flex flex-col gap-4'>
                <li data-aos='fade-right' data-aos-delay='600' data-aos-duration='400' className='hover:text-green-600 transition-all duration-200 flex gap-2 items-center'><FaRegArrowAltCircleRight/><Link href='/'>Home</Link></li>
                <li data-aos='fade-right' data-aos-delay='700' data-aos-duration='400' className='hover:text-green-600 transition-all duration-200 flex gap-2 items-center'><FaRegArrowAltCircleRight/><Link href='/about'>About</Link></li>
                <li data-aos='fade-right' data-aos-delay='800' data-aos-duration='400' className='hover:text-green-600 transition-all duration-200 flex gap-2 items-center'><FaRegArrowAltCircleRight/><Link href='/'>Program</Link></li>
                <li data-aos='fade-right' data-aos-delay='900' data-aos-duration='400' className='hover:text-green-600 transition-all duration-200 flex gap-2 items-center'><FaRegArrowAltCircleRight/><Link href='/'>Academics</Link></li>
                <li data-aos='fade-right' data-aos-delay='1000' data-aos-duration='400' className='hover:text-green-600 transition-all duration-200 flex gap-2 items-center'><FaRegArrowAltCircleRight/><Link href='/'>Contact</Link></li>
            </ul>
        </div>

        <div className='flex flex-col lg:items-center mt-5 lg:mt-0 border-t lg:border-none py-4'>
            <div>
            <h1 className='text-white font-bold text-xl'>Get in touch</h1>
            <div className='mt-4'>
                <h2 className='text-white text-lg font-semibold'>Ahlussuffa Integrated Studies</h2>
                <p className='text-gray-300'>Parappram, Pinarayi</p>
                <p className='text-gray-300'>Kannur, Kerala</p>
                {/* <p className='text-gray-300'>Kerala Pin: 6546865</p> */}
            </div>

            <div className='mt-6'>
                <div className='flex items-center gap-2 text-white'>
                    <CiMail className='text-lg'/>
                    <p>ahlussuffa.igs@gmail.com</p>
                </div>

                <div className='flex gap-2 text-white'>
                    <FaPhoneAlt className='text-lg'/>
                    <p>+91 9746431108</p>
                </div>
            </div>
            </div>

        </div>
    </div>
    <div className='bg-green-800 text-center py-4'>
        <h1 className=' text-gray-300 '>&copy; Ahlussuffa Institute of Integrated Studies</h1>        
    </div>
    </div>
  )
}

export default Footer