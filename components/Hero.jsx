import React, { useEffect, useState } from 'react'
// import bgImage from '@/public/icons/bg.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { raleway } from '@/app/font'

const Hero = () => {
    const taglines = [
        {
            main: "Empowering Minds, Enriching Souls ",
            subs: "Fostering a deep connection between knowledge and spirituality.",
            bgImage: "/images/bg1.png"
        },

          {
            main: "Shaping Tomorrow with Islamic Values",
            subs: "Equipping students with knowledge to serve their communities.",
            bgImage: "/images/bg2.png"
          },

          {
            main: "Where Tradition Meets Modern Education",
            subs: "A learning environment that respects the past and shapes the future",
            bgImage: "/images/bg3.png"
          },

          {
            main: "Guided by Faith, Strengthened by Knowledge",
            subs: "Empowering students with wisdom to navigate the modern world.",
            bgImage: "/images/bg4.png"
          }
      ];

      const [currentIndex, setCurrentIndex] = useState(0);
      const [isVisible, setIsVisible] = useState(true);
      const [subVisible, setSubVisible] = useState(true);
      const images = [taglines[0].bgImage, taglines[1].bgImage, taglines[2].bgImage, taglines[3].bgImage]; // Array of images
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [imageVisible, setImageVisible] = useState(true);

      useEffect(() => {
        const intervalId = setInterval(() => {
          // Start fade out animation
          setIsVisible(false);
          setSubVisible(false);
          setImageVisible(false);
          
          // Change content after fade out
          setTimeout(() => {
            setCurrentIndex((prevIndex) => 
              prevIndex === taglines.length - 1 ? 0 : prevIndex + 1
            );
            setIsVisible(true);
            setImageVisible(true);
            
            // Stagger sub-tagline appearance
            setTimeout(() => {
              setSubVisible(true);
            }, 200);
          }, 500);
          
        }, 5000 ); // Increased interval to allow for sub-taglines
    
        return () => clearInterval(intervalId);
      }, []);

      useEffect(() => {
        const intervalId = setInterval(() => {
            // Start fade out animation
            setImageVisible(false);
            
            // Change image after fade out
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => 
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                setImageVisible(true); // Fade in new image
            }, 500); // Duration of fade out
            
        }, 5000); // Interval for image change

        return () => clearInterval(intervalId);
    }, []);
    
    return (
    <div>
        <div className='h-screen w-full fixed overflow-x-hidden'>
        <div className="">
            <Image 
                src={images[currentImageIndex]} 
                fill 
                alt="background" 
                className={`object-cover w-full h-full transition-opacity duration-500 ${imageVisible ? 'opacity-100' : 'opacity-0'}`} 
            />
        </div>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 md:px-12 lg:px-16 mt-6">
                <h1 className={` md:px-14 lg:px28 text-5xl lg:text-6xl font-extrabold transform transition-all duration-1000 text-white ${raleway.className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {taglines[currentIndex].main}
                </h1>

                <p className={`px-5 mt-4 lg:mt-4 text-gray-300 lg:text-lg transform transition-all duration-700 ${subVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    {taglines[currentIndex].subs}
                </p>
                <button className='relative mt-4 bg-green-900 text-white rounded-md lg:text-lg px-4 py-3 font-semibold hover:-translate-y-2 transition duration-500'>
                    <Link href="https://docs.google.com/forms/d/1NpAzRU3ipYvOvLeSPMMWH9EJ-OIanyVbW8GdW7MRra8/viewform?edit_requested=true">Get an admission</Link>
                </button>
            </div>
        </div>

    </div>
)
}

export default Hero



