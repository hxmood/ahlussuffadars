"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/public/icons/ahlussuffalogo.png'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Navbar2 = () => {
  const [dropDown, setDropDown] = useState(false)
  const handleClick = () => setDropDown(!dropDown)

  return (
    <div className='sticky top-0 w-full flex items-center justify-between px-5 md:px-14 lg:px-28 bg-slate-50 z-30 py-4 shadow-lg'>
        <Link href='/'>
            <Image src={logo} width={70} className="" alt='logo'/>
        </Link>

        <div className='hidden md:flex items-center justify-center gap-6 font-semibold'>
            <Link className='hover:text-green-600 transition-all duration-200 ' href="/">Home</Link>
            <Link className='hover:text-green-600 transition-all duration-200 ' href="/about">About</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Program</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Academics</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Contact</Link>
        </div>

        {/* mobile responsive navigation */}

        <div className='md:hidden relative'>
            {!dropDown ? 
              <Image className='cursor-pointer' src="/icons/menu.svg" height={40} width={40} alt='something' onClick={handleClick}/> : 
              <Image className='cursor-pointer' src="/icons/close.svg" height={40} width={40} alt='something' onClick={handleClick}/>
            }
        
          </div>

          {dropDown && (
            <>
            {/* <div className='absolute top-0 left-0 w-full h-screen bg-black opacity-55 '> */}
              {/* <Image className='cursor-pointer' src="/icons/close.svg" height={40} width={40} alt='something' onClick={handleClick}/> */}
              
            {/* </div> */}
            <div className='fixed left-0 top-0 bottom-0 bg-slate-50 shadow-xl z-40 transition-all duration-100 w-8/12' data-aos="fade-right">
            <Link href="/" className='w-fit'>
              <Image src={logo} width={140} className='p-8'/>
            </Link>

              <div className='flex flex-col gap-4 text-center py-10 px-14'>
                <Link href="/" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold' onClick={handleClick}>
                  <FaArrowRight className='text-green-800'/>
                  <h2>Home</h2>
                </Link>

                <Link href="/about" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold' onClick={handleClick}>
                  <FaArrowRight className='text-green-800'/>
                  <h2>About</h2>
                </Link>

                <Link href="/" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold' onClick={handleClick}>
                  <FaArrowRight className='text-green-800'/>
                  <h2>Program</h2>
                </Link>

                <Link href="/" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold' onClick={handleClick}>
                  <FaArrowRight className='text-green-800'/>
                  <h2>Programs</h2>
                </Link>

                <Link href="/" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold' onClick={handleClick}>
                  <FaArrowRight className='text-green-800'/>
                  <h2>Conract</h2>
                </Link>
              </div>
              
            </div>
          </>
          )}
    </div>
  )
}

export default Navbar2