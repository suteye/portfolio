import React, {useState} from 'react'
import {Transition} from "@headlessui/react"
import {Link} from "react-scroll"
import Image from "next/image";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <nav className='fixed z-20 bg-white w-full'>
            <div className='w-full'>
                <div className='flex items-center h-20 w-full'>
                    <div className='flex items-center sm:mx-10 md:mx-20 justify-between w-full'>
                        {/* this section for name */}
                        <div className='flex justify-center items-center flex-shrink-0'>
                            <h1 className='font-bold text-xl cursor-pointer'>
                                Sutima <span className='text-blue-500'>Phetsatien</span>
                            </h1>
                        </div>
                        {/* this section for Links */}
                        <div className='hidden md:block'>
                            <div className='ml-10 flex items-baseline space-x-4'>
                                <Link activeClass='Home' to='home' smooth={true} offset={-70} duration={500} className='cursor-pointer text-blue-500 px-3 py-2 text-md hover:text-black'>Home</Link>
                                <Link activeClass='About' to='about' smooth={true} offset={-70} duration={500} className='cursor-pointer text-blue-500 px-3 py-2 text-md hover:text-black'>About</Link>
                                <Link activeClass='Project' to='project' smooth={true} offset={-70} duration={500} className='cursor-pointer text-blue-500 px-3 py-2 text-md hover:text-black'>Project</Link>
                                <Link activeClass='Contact' to='contact' smooth={true} offset={-70} duration={500} className='cursor-pointer text-blue-500 px-3 py-2 text-md hover:text-black'>Contact</Link>
                            </div>
                        </div>
                        {/* this section for direct contact via email section */}
                        <div className='flex justify-center items-center flex-shrink-0'>
                            <a href='mailto:sutima.phe@dome.tu.ac.th' className='bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-4 cursor-pointer hidden md:block'>
                                Contact Me
                            </a>
                        </div>
                    </div>
                    {/* completed the desktop part */}
                    {/* this section for mobile menu */}
                    <div className='mr-14 flex md:hidden'>
                        <button onClick={() => setIsOpen(!isOpen)} className='bg-gradient-to-r from-blue-500 to-teal-500 rounded-md p-2 inline-flex items-center justify-center p-2 text-white hover:text-white hover:bg-black focus:outline-none focus:outline-none  focus:ring-white mobile-menu-button' aria-expanded='false' aria-controls='mobile-menu'>
                            {isOpen ? (
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            ) : (
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* small size: mobile div start */}
            <Transition show={isOpen} enter='transition duration-100 ease-out' enterFrom='transform scale-95 opacity-0' enterTo='transform scale-100 opacity-100' leave='transition duration-75 ease-in duration-75' leaveFrom='scale-100 opacity-100' leaveTo='scale-95 opacity-0'>
                {(ref) => (
                    <div className='md:hidden' id='mobile-menu'>
                        <div ref={ref} className='bg-white mx-4 mr-20 pt-4 pb-4 space-y-1'>
                        <Link
							href="/home"
							activeClass="home"
							to="home"
							smooth={true}
							offset={50}
							duration={500}
							className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
								Home
						</Link>
                        <Link
                            href="/about"
                            activeClass="about"
                            to='about'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                About
                        </Link>
                        <Link
                            href="/project"
                            activeClass="project"
                            to='project'
                            smooth={true}
                            offset={50}
                            duration={500}
							className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Projects
						</Link>
                        <Link
                            href="/contact"
                            activeClass="contact"
                            to='contact'
                            smooth={true}
                            offset={50}
							duration={500}
							className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
							Contact
						</Link>
                        <Link 
                            href='mailto:sutima.phe@dome.tu.ac.th'
                            activeClass='contact'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className='bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-4 cursor-pointer block md:hidden'>
                                Contact Me
                        </Link>
                    </div>
                </div>
                )}
            </Transition>
        </nav>
    </div>

  )
}

export default Navbar