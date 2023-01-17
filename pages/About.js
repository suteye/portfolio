import React from 'react'
import { Element } from 'react-scroll'
import Image from 'next/image'
import pic from '../public/images/eye4.jpg'
import {FaEnvelope, FaGithub} from 'react-icons/fa'
import MarqueeCompo from '../components/MarqueeCompo'


const About = () => {
  return (
    <Element id='about' name='about'>
        <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold text-center text-gray-800 dark:text-gray-100'>Technical Skills</h1>
            <div className='flex justify-items-start items-center mx-40 gap-10 mt-16'>
                <MarqueeCompo/>
            </div>
        </div>
        <section className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    data-aos-offset="0"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                <Image src={pic} alt="" height={500} width={500} className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'/>
                <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                    <div className='flex flex-col'>
                        <p className='text-lg uppercase text-gray-400'> About Me</p>
                        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 
                        before:content-about relative 
                         before:absolute before:opacity-40 
                         before:-top-[2rem] before:hidden before:lg:block'>
                            Sutima Phetsatien
                        </h2>
                        <h5 className='mb-4 text-blue-700'>
                            Computer Science Student
                        </h5>
                        <p className='mb-8 leading-relaxed'>
                            I&apos;m a Computer Science student at Thammsat University. I&apos;m currently studying in my 3rd year and 
                            I&apos;m looking for an internship in the field of web development. 
                            I&apos;ve always been self-taught.And I&apos;m always looking for new opportunities to learn and improve my skills. 
                        </p>

                        {/* Education */}
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div className='flex flex-col'>
                                <h2 className='text-2xl text-black'> Education</h2>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col'>
                                        <h3 className='text-xl text-gray-800'>Thammasat University</h3>
                                        <p className='text-gray-600'> Bachelor&apos;s Degree of Science in Computer Science</p>
                                        <p className='text-gray-600'>May 2020 - Present (GPA 2.84)</p>


                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* social contact */}
                        <div className='flex flex-col lg:flex-row gap-4 mt-10'>
                            <a href='https://github.com/suteye' target='_blank' rel="noreferrer"className='flex items-center gap-2'>
                                <FaGithub className='text-5xl text-gray-600 hover:text-gray-800'/>
                            </a>
                            <a href='mailto:sutima.phe@dome.tu.ac.th' className='flex items-center gap-2'>
                                <FaEnvelope className='text-5xl text-gray-600 hover:text-gray-800'/>
                            </a>

                            {/* download resume  button */}
                            <a href='resume.pdf' download='Sutima Phetsatien Resume' target='_blank'  rel="noopener noreferrer" className='flex items-center gap-2'>
                                <button className='bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800'>
                                    Download Resume
                                </button>
                            </a>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
            
    </Element>
  )
}

export default About