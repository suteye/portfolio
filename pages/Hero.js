import React from 'react'
import Image from 'next/image'
import eyeImage from '../public/images/eye3.jpg'

const Hero = () => {
  return (
    <div className='flex justify-between text-center md:mx-20 md:pt-32 pt-28'>
        {/* circle pic fix*/}
        <div className='w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block'>
            <Image
                src={eyeImage} 
                alt="my self" 
                layout='fill' 
                objectFit='cover' 
                className='object-none w-36 h-36 rounded-full custom-position' 
            />
        </div>
        <div className='flex flex-col md:ml-20 mx-10 mt-10'>
            <h1 className='font-bold text-7xl text-left mb-5'>
                Hello, I am <span className='text-indigo-600'>Sutima</span>
            </h1>
            <p className='text-left font-normal mb-5 flex-wrap leading-relaxed '>
                I am a Computer Science student at Thammasat University. I love to learn new things and I am interested in web development.
            </p>
            <a href='#' className='font-semibold text-white md:mt-10 mt-5 pt-5 bg-blue-700 rounded-md w-60 h-16 text-lg hover:bg-blue-900'>
                Let&apos;s get cracking!
            </a>
        </div>
    </div>
  )
}

export default Hero