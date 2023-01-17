import React , { Fragment, useState }from 'react'
import { Element } from 'react-scroll'
import { Dialog, Transition } from '@headlessui/react'
import Slider from '../components/Slider'
import {FaGithub} from 'react-icons/fa'




const Project = () => {
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)

    function closeModal() {
        setIsOpen1(false)
    }

    function openModal() {
        setIsOpen1(true)
    }

    function closeModal2() {
        setIsOpen2(false)
    }
    
    function openModal2() {
        setIsOpen2(true)
    }
  return (

    <Element name="project" className="element" id="project">
    <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
        <h2 className='text-6xl font-bold text-center text-indigo-900 '>Projects</h2>
    </div>
    <div className='md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10'>
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Urban sound Project</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Urban Sound is a chatbot that allows users to report the noise pollution in their area.
            </p>
            <a href="#" onClick={openModal} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>

            {/*modal for urban sound*/}
            <Transition appear show={isOpen1} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <Transition className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                {/* insert video */}
                                <div className='w-full h-96 justify-center items-center'>
                                    <iframe width="640" height="360" align="middle" src="https://www.youtube.com/embed/NP3JJvea_UQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>

                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900">
                                    Urban Sound Project
                                    <i className=' text-gray-500 text-sm font-normal ml-2'>
                                        ( 2022 - Present )
                                    </i>
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm leading-relaxed text-gray-700">
                                    Urban Sound is a chatbot that allows users to report the noise pollution in their area.
                                    Because of the noise pollution, people can&apos;t sleep well, and it can cause many health problems.
                                    So, this chatbot will be collecting data on noise pollution, such as the voice of the noise it records from the microphone in the Line application, the location, and the volume on a rating scale from 1 to 5.
                                    This chatbot was created with Dialogflow and the Line Messaging API and connected to the Line official account.
                                    And the data will be stored in a MySQL database. Currently, the project is in the development phase.
                                 </p>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div> 
                        </Transition.Child>
                    </Transition>
                </Dialog>
            </Transition>
        </div>
        
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="https://github.com/suteye/BakeAtDome" target='_blank' rel="noreferrer">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-500">Bake@Dome project</h5>
            </a>
             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Bake@Dome is a POS (point-of-sale) system used within Bake@Dome store.{/*It is a web application that allows the store to manage their products, orders, and customers.</p> */}</p>
            <a href="#" onClick={openModal2} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>

        {/*modal for bake@dome*/}
        <Transition appear show={isOpen2} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal2}
            >
                <Transition className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <span
                        className="inline-block h-screen align-middle"  
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child

                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Slider/>
                            <Dialog.Title
                                as="h3"
                                className="text-xl font-medium leading-6 mt-5 text-gray-900">
                                Bake@Dome Project
                                <i className=' text-gray-500 text-sm font-normal ml-2'>
                                    ( 2022 )
                                </i>
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm leading-relaxed text-gray-700">
                                Bake@Dome is a POS (point-of-sale) system used within Bake@Dome store.
                                It is a web application that is used to sell bakery and drinks, manage financial transactions, control and check the total number of bakery and drinks within the store.
                                This project is developed using the MERN system, so it will use MongoDB, Express, React, and Node.
                                Deployed a production on an AWS EC2 instance using a CI/CD pipeline built with GitHub Actions and Docker.
                                </p>
                                
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal2}
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </Transition>
            </Dialog>
        </Transition>



    </div>
    </Element>
  )
}

export default Project