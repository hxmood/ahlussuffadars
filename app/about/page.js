import Navbar2 from '@/components/Navbar2'
import Image from 'next/image'
import React from 'react'
import thathoor from '@/public/images/thathur.jpg'
import Footer from '@/components/Footer'
import usthad from '@/public/images/usthad.jpg'
import usthad2 from "@/public/images/usthad2.jpg"
import { raleway } from '../font'

const page = () => {
  return (
    <div>
        <Navbar2/>
        <div className='px-5 md:px-14 lg:px-44 h-screen '>
            <h1 className={`text-5xl text-green-800 font-extrabold  mt-36 text-center ${raleway.className}`}>Ahlussufa integrated studies</h1>
            <div className='lg:flex gap-7 py-20'>
                <Image src={thathoor} width={550} alt='' className='rounded-lg shadow-lg object-cover'/>
                <p className='text-justify'>
                    With the blessings of the venerable Ustad Sultan ul-Ulama Kanthapuram and Ustad Abdul Hakeem Azhari, the revered Ustad Arshad Nurani Kamil saqafi initiated the Ahlussuffa: Dars, an esteemed program on religious knowledge and science, at the Montal Mosque in Kannur in 2014 with the participation of five students. Over the past eight years, the program has flourished into a superior institution of 120 eminent scholars from various Islamic scholastic streams as well as modern-age education. The profound Islamic scholastic system organized by Shuhada Makham at Thathoor Mosque in Kozhikode has gained immense popularity, imparting knowledge to students through seven years of holistic religious and scientific education under the spiritual guidance of the revered Ustad. Ahlussuffa has been instrumental in creating a paradigm shift in the learning opportunities offered to students, providing them with the means to enhance their knowledge and skills through an insightful and comprehensive curriculum tailored to their needs. Ahlussuffa Dars is located at Thathoor Shuhada Maqam, a historical Masjid situated in Thathoor, Near Mavoor, has a history of more than 100 years. With the boundless help of the natives of the Mahall, our Dars has more than 120 students who are pursuing their academic studies includes B.sc Physics, Computer programming, Commerce, Chartered Accountant and psychology courses etc, simultaneously. Ahlussuffa is blessed with the Edu-Friendly Atmosphere of Thathoor Shuhada Maqam and Spiritual guidance of Thathoor shuhada. And also the mindful interventions of thathoor natives gives us an extra energy to fly.
                </p>
            </div>
        </div>

        <div className='w-full py-20 px-5 md:px-12 lg:px-44 bg-green-800 lg:flex items-center justify-between gap-10'>
            <div className='bg-white p-7 w-full rounded-lg'>
                <h1 className='text-2xl text-center text-green-800 font-bold'>Vision and mission</h1>
                <p className='text-gray-700 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eligendi eos exercitationem, corporis necessitatibus, dolorum tenetur cupiditate accusamus ipsam sequi ipsum earum excepturi eum architecto, unde numquam! Laudantium, quaerat ut.</p>
            </div>
            <div className='bg-white p-7 w-full rounded-lg'>
                <h1 className='text-2xl text-center text-green-800 font-bold'>Vision and mission</h1>
                <p className='text-gray-700 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eligendi eos exercitationem, corporis necessitatibus, dolorum tenetur cupiditate accusamus ipsam sequi ipsum earum excepturi eum architecto, unde numquam! Laudantium, quaerat ut.</p>
            </div>
        </div>

{/* --------------------------------------------------------- */}

        <div className='px-5 md:px-14 lg:px-44 py-28 flex flex-col items-center'>
            <h1 className={`text-3xl lg:text-4xl font-extrabold text-green-800 text-center ${raleway.className}`}>Our faculties</h1>
                <div className='flex border rounded-xl shadow-md mt-12 bg-[#f7fff2]'>
                    <div className=' p-8'>
                        <Image src={usthad} width={230} alt='' className='object-fit rounded-lg'/>
                    </div>
                    <div className='pr-8 flex flex-col justify-center'>
                        <h1 className={`text-2xl lg:text-3xl text-green-800 font-extrabold ${raleway.className}`}>Muhammad Arshad Nurani <br/> Kamil Saqafi</h1>
                        <p className='text-gray-500'>Founder</p>
                        <p className='mt-4 text-gray-800'></p>
                    </div>
                </div>


            <div className='grid lg:grid-cols-2 gap-6 mt-6 lg:mt-12'>
                <div className='flex border rounded-xl shadow-md bg-[#fafafa]'>
                    <div className='p-6'>
                        <Image src={usthad2} width={150} alt='' className='object-fit rounded-lg'/>
                    </div>
                    <div className='flex flex-col justify-center pr-6'>
                        <h1 className={`text-2xl text-green-800 font-bold ${raleway.className}`}>Muhammad Ali Nurani <br/> Saqafi</h1>
                    </div>
                </div>

                <div className='flex border rounded-xl shadow-md bg-[#fafafa]'>
                    <div className='p-6'>
                        <Image src={usthad} width={150} alt='' className='object-fit rounded-lg'/>
                    </div>
                    <div className='py-6 flex flex-col justify-center pr-6'>
                        <h1 className={`text-2xl text-green-800 font-bold ${raleway.className}`}>Muhammad Arshad Nurani Kamil Saqafi</h1>
                    </div>
                </div>

                <div className='flex border rounded-xl shadow-md bg-[#fafafa]'>
                    <div className=' p-6'>
                        <Image src={usthad} width={150} alt='' className='object-fit rounded-lg'/>
                    </div>
                    <div className='flex flex-col justify-center pr-6'>
                        <h1 className={`text-2xl text-green-800 font-bold ${raleway.className}`}>Hafiz Muhammad Umar Saqafi</h1>
                    </div>
                </div>

                <div className='flex border rounded-xl shadow-md bg-[#fafafa]'>
                    <div className='p-6'>
                        <Image src={usthad} width={150} alt='' className='object-fit rounded-lg'/>
                    </div>
                    <div className='flex flex-col justify-center pr-6'>
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