import Carousel from '../Shared/Carousel/Carousel.js';
import React from 'react';
import HeroBg from '../../src/assets/hero-images/cover-hero-banner.webp'

const Hero = () => {
    return (

        <div className="hero min-h-screen" style={{ backgroundImage: `url("${HeroBg}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="grid grid-cols-2 md:grid-cols-10 gap-x-36">
                    <div className='col-span-4 my-4 md:col-span-3 md:w-full w-3/5 p-4 border-white border-2 rounded-lg bg-sky-600/40'>
                        <div>
                            <h1 className="site-name mb-5 md:text-5xl text-2xl font-bold ">King Palace</h1>

                            <p className="mb-5">Wide sandy beaches, popular, busy beaches, secluded beaches—for most of us, the best beach...</p>
                            <a href='#more' className="btn bg-yellow-700">Check More...</a>
                        </div>
                    </div>
                    <div className='col-span-4 md:col-span-7 md:w-full w-3/5 mx-6 overflow-hidden'>
                        <Carousel></Carousel>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Hero;