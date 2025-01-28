import Image from 'next/image'
import React from 'react'
import logo from "@/public/icons/ahlussuffalogo.png"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between px-5 md:px-14 lg:px-32 bg-transparent z-10 absolute top-0 py-8'>
        <Image src={logo} width={70} className="" alt='logo'/>
        <div className='hidden md:flex items-center justify-center gap-8 text-white font-semibold'>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Home</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/about">About</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Program</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Academics</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar