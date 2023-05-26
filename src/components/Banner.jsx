import { Button } from 'flowbite-react';
import React from 'react';

const Banner = () => {

    const sectionStyle = {
        backgroundImage: "url('https://img.freepik.com/free-photo/red-fiat-500e-is-black-background_1340-37121.jpg?w=1380&t=st=1684505992~exp=1684506592~hmac=6813cea782291a8ce0edc6f7776b1ca5a1c113bd5141f5865d1a71917d38facb')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundColor: "#606060",
        // marginTop: "40px",
        // borderRadius: "20px",

    };

    return (

        <section style={sectionStyle}>
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"><span
                    className="inline-block h-full bg-gradient-to-r from-purple-500 via-blue-500 to-blue-700 text-transparent bg-clip-text"
                    style={{
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-flex',
                        alignItems: 'center',
                        lineHeight: '2'
                    }}
                >
                    All your favorite cars here
                </span></h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Welcome to the Ultimate Toy Car Wonderland: Where Imagination Takes the Wheel and Adventure Knows No Bounds</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Button gradientDuoTone="purpleToBlue" className="inline-flex justify-center items-center py-1 px-4 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900">
                        Get started
                    </Button>
                    <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-1 px-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>
                </div>
            </div>
        </section>

    );
};

export default Banner;