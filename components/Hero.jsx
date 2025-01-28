import React from 'react'
import bgImage from '@/public/icons/bg.jpg'
import Image from 'next/image'
import Link from 'next/link'
import pray from '@/public/images/pray.jpg'
import { FaArrowRight } from "react-icons/fa";
import { raleway } from '@/app/font'

const Hero = () => {
return (
    <div>
        <div className='h-screen w-full fixed overflow-x-hidden'>
        <div className="">
            <Image src={bgImage} fill alt="background" className="object-cover w-full h-full" />
        </div>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 md:px-12 lg:px-16 mt-6">
                <h1 className={`text-5xl lg:text-7xl font-extrabold text-white ${raleway.className}`}>Nurturing Minds, Enriching Souls</h1>
                <p className="mt-2 lg:mt-4 text-gray-300 lg:text-lg">A place where sacred knowledge and modern education come together to shape future leaders.</p>
                <button className='mt-4 bg-green-900 text-white rounded-md lg:text-lg px-4 py-3 font-semibold flex'>
                    <Link href="/">Know Us</Link>
                </button>
            </div>
        </div>

    </div>
)
}

export default Hero



