import Image from 'next/image'
import React from 'react'
import logo from '@/public/icons/ahlussuffalogo.png'
import Link from 'next/link'

const Navbar2 = () => {
  return (
    <div className='w-full flex items-center justify-between px-5 md:px-14 lg:px-28 bg-transparent z-10 absolute top-0 py-4 bg-gray-50 shadow-lg'>
        <Link href='/'>
            <Image src={logo} width={70} className="" alt='logo'/>
        </Link>

        <div className='hidden md:flex items-center justify-center gap-6 font-semibold text-gray-800'>
            <Link className='hover:text-green-600 transition-all duration-200 ' href="/">Home</Link>
            <Link className='hover:text-green-600 transition-all duration-200 ' href="/about">About</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Program</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Academics</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar2