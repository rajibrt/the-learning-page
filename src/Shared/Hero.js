import Carousel from '../Shared/Carousel/Carousel.js';
import React from 'react';
import HeroBg from '../../src/assets/hero-images/cover-hero-banner.webp'

const Hero = () => {
    return (

        <div className="hero min-h-screen" style={{ backgroundImage: `url("${HeroBg}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="">
                    <div className='col-span-4 my-4 md:col-span-3 md:w-3/5 w-3/5 p-4 m-auto border-white border-2 rounded-lg bg-sky-600/40'>
                        <div>
                            <h1 className="site-name mb-5 md:text-4xl text-2xl font-bold ">The Learning Page</h1>
                            <h2 className="mb-5 md:text-4xl text-2xl  ">Learn without limits</h2>

                            <p className="mb-5">Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                            <a href='#more' className="btn bg-yellow-700">Enroll Now</a>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Hero;