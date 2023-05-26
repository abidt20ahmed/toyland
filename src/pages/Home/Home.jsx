import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { Button, Carousel } from 'flowbite-react';
import SharedFooter from '../../components/SharedFooter';
import Banner from '../../components/Banner';
import useTitle from '../../hooks/useTitle';
import Gallery from '../../components/Gallery';
// import AOS from 'aos';
// import 'aos/dist/aos.css';


const Home = () => {
    useTitle('ToyLand-Home')
    // AOS.init({ duration: 1000 });

    return (
        <div>
            <NavBar></NavBar>

            <Banner></Banner>

            <div className="h-56 sm:h-64 md:h-[500px] 2xl:h-[700px] my-10 lg:mt-40 mb-16 lg:pb-24 max-w-7xl mx-auto overflow-hidden">
                <Carousel slideInterval={3000}>
                    <div className='relative'>
                        <img className='w-full object-cover rounded-lg brightness-50' src='https://img.freepik.com/premium-photo/overhead-view-different-car-toys_359031-25585.jpg' alt="" />
                        <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full absolute top-0'></div>
                        <div className=" hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto md:text-left md:left-1/4 md:pl-40 lg:w-1/2 ">
                            <h1 className="mb-8 mr-0 lg:w-[] leading-8 text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                                <span
                                    className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                                    style={{
                                        WebkitTextFillColor: 'transparent',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        lineHeight: '2'
                                    }} 
                                >
                                    Endless Fun at Unbeatable Prices
                                </span>
                            </h1>
                            <p className="mb-8 text-lg max-w-[550px] font-normal text-gray-300 lg:text-xl sm:px- lg:px-">There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <Button gradientDuoTone="purpleToBlue" className="bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 inline-flex justify-center items-center py-2 px-4 text-xl font-medium text-center text-white rounded-lg">
                                    Get started
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Button>
                                <Link className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                                    See All Toys
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className=' w-ful object-cover rounded-lg brightness-50' src='https://img.freepik.com/free-photo/chrome-sports-car-driving-asphalt-road-generative-ai_188544-8146.jpg?w=1380&t=st=1684528168~exp=1684528768~hmac=b698f62c1348abfd2e54b52d11e2e8938f898f6c35073805f8c4d4ff4ae0a4a2' alt="" />
                        <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full absolute top-0'></div>
                        <div className=" hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto md:text-left md:left-1/4 md:pl-40 lg:w-1/2 ">
                            <h1 className="mb-8 lg:w-[] leading-8 text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"><span
                                className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                                style={{
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    lineHeight: '2'
                                }}
                            >
                                Endless Fun at Unbeatable Prices                </span></h1>
                            <p className="mb-8 text-lg max-w-[550px] font-normal text-gray-300 lg:text-xl sm:px- lg:px-">Discover a World of Infinite Toy Car Options: Uncover Countless Engaging Designs and Witness Their Transformative Appeal</p>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <Button gradientDuoTone="purpleToBlue" className="bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 inline-flex justify-center items-center py-2 px-4 text-xl font-medium text-center text-white rounded-lg">
                                    Get started
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Button>
                                <Link className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                                    See All Toys
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className=' w-full h-[600px] object-cover rounded-lg brightness-50' src='https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb' alt="" />
                        <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full absolute top-0'></div>
                        <div className=" hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto md:text-left md:left-1/4 md:pl-40 lg:w-1/2 ">
                            <h1 className="mb-8 lg:w-[] leading-8 text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"><span
                                className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                                style={{
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    lineHeight: '2'
                                }}
                            >
                                Endless Fun at Unbeatable Prices                </span></h1>
                            <p className="mb-8 text-lg max-w-[550px] font-normal text-gray-300 lg:text-xl sm:px- lg:px-">Discover a World of Infinite Toy Car Options: Uncover Countless Engaging Designs and Witness Their Transformative Appeal</p>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <Button gradientDuoTone="purpleToBlue" className="bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 inline-flex justify-center items-center py-2 px-4 text-xl font-medium text-center text-white rounded-lg">
                                    Get started
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Button>
                                <Link className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                                    See All Toys
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='w-full h-[600px] object-cover rounded-lg brightness-50' src='https://images.unsplash.com/photo-1597670250484-0e9aff7f8804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt="" />
                        <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full absolute top-0'></div>
                        <div className=" hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto md:text-left md:left-1/4 md:pl-40 lg:w-1/2 ">
                            <h1 className="mb-8 lg:w-[] leading-8 text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"><span
                                className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                                style={{
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    lineHeight: '2'
                                }}
                            >
                                Endless Fun at Unbeatable Prices                </span></h1>
                            <p className="mb-8 text-lg max-w-[550px] font-normal text-gray-300 lg:text-xl sm:px- lg:px-">Discover a World of Infinite Toy Car Options: Uncover Countless Engaging Designs and Witness Their Transformative Appeal</p>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <Button gradientDuoTone="purpleToBlue" className="bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 inline-flex justify-center items-center py-2 px-4 text-xl font-medium text-center text-white rounded-lg">
                                    Get started
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Button>
                                <Link className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                                    See All Toys
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className=' w-full h-[600px] object-cover rounded-lg brightness-50' src='https://img.freepik.com/premium-photo/futuristic-retro-wave-synth-wave-car-retro-sport-car-with-neon-backlight-contours_743201-875.jpg' alt="" />
                        <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full absolute top-0'></div>
                        <div className=" hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto md:text-left md:left-1/4 md:pl-40 lg:w-1/2 ">
                            <h1 className="mb-8 lg:w-[] leading-8 text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"><span
                                className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                                style={{
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    lineHeight: '2'
                                }}
                            >
                                Endless Fun at Unbeatable Prices                </span></h1>
                            <p className="mb-8 text-lg max-w-[550px] font-normal text-gray-300 lg:text-xl sm:px- lg:px-">Discover a World of Infinite Toy Car Options: Uncover Countless Engaging Designs and Witness Their Transformative Appeal</p>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <Button gradientDuoTone="purpleToBlue" className="bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 inline-flex justify-center items-center py-2 px-4 text-xl font-medium text-center text-white rounded-lg">
                                    Get started
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Button>
                                <Link className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                                    See All Toys
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className=' w-full h-[600px] object-cover rounded-lg brightness-50' src='https://img.freepik.com/free-photo/red-black-supercar-with-word-supercar-side_1340-23413.jpg?w=1380&t=st=1684528519~exp=1684529119~hmac=8789e01366dd0d11a1b5613c2969a7c1a3bba5d0aab0a73fbafb3e12cb8de9a7' alt="" />
                        <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full absolute top-0'></div>
                        <div className=" hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto md:text-left md:left-1/4 md:pl-40 lg:w-1/2 ">
                            <h1 className="mb-8 lg:w-[] leading-8 text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"><span
                                className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                                style={{
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    lineHeight: '2'
                                }}
                            >
                                Endless Fun at Unbeatable Prices                </span></h1>
                            <p className="mb-8 text-lg max-w-[550px] font-normal text-gray-300 lg:text-xl sm:px- lg:px-">Discover a World of Infinite Toy Car Options: Uncover Countless Engaging Designs and Witness Their Transformative Appeal</p>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <Button gradientDuoTone="purpleToBlue" className="bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 inline-flex justify-center items-center py-2 px-4 text-xl font-medium text-center text-white rounded-lg">
                                    Get started
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Button>
                                <Link className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                                    See All Toys
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className=' w-full h-[600px] object-cover rounded-lg brightness-50' src='https://img.freepik.com/free-photo/green-yellow-red-purple-violet-sedan-sport-cars-standing-dark-space_114579-1159.jpg?w=1380&t=st=1684402596~exp=1684403196~hmac=88e25a85f0a6adfae1fb91a3b1c34175e588cb679dcd2d4cde8dbab3ff3b4e0b' alt="" />
                        <div className='bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full absolute top-0'></div>
                        <div className=" hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto md:text-left md:left-1/4 md:pl-40 lg:w-1/2 ">
                            <h1 className="mb-8 lg:w-[] leading-8 text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"><span
                                className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                                style={{
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    lineHeight: '2'
                                }}
                            >
                                Endless Fun at Unbeatable Prices                </span></h1>
                            <p className="mb-8 text-lg max-w-[550px] font-normal text-gray-300 lg:text-xl sm:px- lg:px-">Discover a World of Infinite Toy Car Options: Uncover Countless Engaging Designs and Witness Their Transformative Appeal</p>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <Button gradientDuoTone="purpleToBlue" className="bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 inline-flex justify-center items-center py-2 px-4 text-xl font-medium text-center text-white rounded-lg">
                                    Get started
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Button>
                                <Link className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                                    See All Toys
                                </Link>
                            </div>
                        </div>
                    </div>


                </Carousel>
            </div >

            <Outlet></Outlet>

            <h1 className=" text-2xl md:text-5xl font-bold text-center mb-28" data-aos="zoom-in">
                <span
                    className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                    style={{
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-flex',
                        alignItems: 'center',
                        lineHeight: '2'
                    }}

                >
                    Top Car Galleries
                </span>
            </h1>



            <Gallery></Gallery>

            <SharedFooter></SharedFooter>
        </div>
    );
};

export default Home;