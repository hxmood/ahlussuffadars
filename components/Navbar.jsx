"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "@/public/icons/ahlussuffalogo.png"
import logo1 from "@/public/icons/ahlussuffalogo1.png"
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false)
  const [fix, setFix] = useState(false)
  const handleClick = () => setDropDown(!dropDown)

  useEffect(() => { 
    const Navfix = () => {
      if (window.scrollY >= 600) {
        setFix(true);
      } else {
        setFix(false);
      }
    };
    window.addEventListener("scroll", Navfix);
  }, [])

  return (
    <div className={`w-full flex items-center justify-between px-5 md:px-14 lg:px-28 ${fix ? 'bg-slate-50 py-4 shadow-lg fixed' : 'bg-transparent py-8 absolute'}  z-40  top-0 transition-all duration-300`}>
        <Link href='/' className='cursor-pointer'>
          {fix ? <Image src={logo} width={70} alt='logo'/> : <Image src={logo1} width={70} alt='logo'/>}
        </Link>

        <div className={`hidden md:flex items-center justify-center gap-8  font-semibold ${fix ? 'text-black' : 'text-white'} `}>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Home</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/about">About</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Programs</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Academics</Link>
            <Link className='hover:text-green-600 transition-all duration-200' href="/">Contact</Link>
            <button className='bg-primary text-white rounded-md lg:text-lg px-3 py-2'>
              <Link href="https://docs.google.com/forms/d/1NpAzRU3ipYvOvLeSPMMWH9EJ-OIanyVbW8GdW7MRra8/viewform?edit_requested=true">Admission</Link>
            </button>
        </div>

        {/* mobile responsive navbar */}

        <div className='md:hidden'>
            {!dropDown ? 
              <Image className='cursor-pointer' src={fix ? "/icons/menu.svg" : "/icons/menu-white.svg"} height={40} width={40} alt='something' onClick={handleClick}/> : 
              <Image className='cursor-pointer' src={fix ? "/icons/close.svg" : "/icons/close-white.svg"} height={40} width={40} alt='something' onClick={handleClick}/>
            }
        
          </div>

          {dropDown && (
            <div className='fixed left-0 top-0 bottom-0 bg-slate-50 shadow-xl z-10 transition-all duration-100 w-8/12' data-aos="fade-right">
              <Link href="/">
                <Image src={logo} width={140} className='p-8'/>
              </Link>
              <div className='flex flex-col gap-4 text-center py-10 px-14'>
                <Link href="/" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold' onClick={handleClick}>
                  <FaArrowRight className='text-primary'/>
                  <h2>Home</h2>
                </Link>

                <Link href="/about" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold' onClick={handleClick}>
                  <FaArrowRight className='text-primary'/>
                  <h2>About</h2>
                </Link>

                <Link href="/" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold' onClick={handleClick}>
                  <FaArrowRight className='text-primary'/>
                  <h2>Program</h2>
                </Link>

                <Link href="/" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold' onClick={handleClick}>
                  <FaArrowRight className='text-primary'/>
                  <h2>Academics</h2>
                </Link>

                <Link href="/" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold' onClick={handleClick}>
                  <FaArrowRight className='text-primary'/>
                  <h2>Conract</h2>
                </Link>
                <button className='bg-primary text-white rounded-md lg:text-lg px-3 py-2 mt-5'>
                  <Link href="https://docs.google.com/forms/d/1NpAzRU3ipYvOvLeSPMMWH9EJ-OIanyVbW8GdW7MRra8/viewform?edit_requested=true">Admission</Link>
                </button>
              </div>
              
            </div>
          )}
    </div>
  )
}

export default Navbar