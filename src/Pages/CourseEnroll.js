import { Avatar } from 'flowbite-react';
import React from 'react';
import { FaArrowLeft, FaBook, FaClock, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';


const CourseEnroll = () => {
    const roomBooking = useLoaderData()
    const { id, title, details_course_description, picture, price, created_by, course_duration, total_module } = roomBooking;
    return (

        <div className="flex items-center justify-center relative" >
            <div className="md:w-8/12 w-full rounded-lg shadow-2xl overflow-hidden lg:mx-0 md:my-8 mx-8 md:mx-0">
                <img className="absolute inset-0 h-full w-full object-cover blur-sm " src={picture} alt="" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                <div className="items-center relative mt-8">
                    <div className="relative">
                        {/* <img className=" inset-0 h-full w-full object-cover" src={picture} alt="" /> */}
                        {/* <img className="rounded-t-lg" src={picture} alt="course" /> */}

                        <div className="relative lg:h-[700px] md:h-[450px] h-64 bg-center bg-cover rounded-t-md" style={{ backgroundImage: `url("${picture}")` }}>
                            <h2 className='text-4xl w-full p-2 absolute top-0 bg-black/50 text-white'>{title}</h2>
                            <div className='absolute bottom-0 shadow-md bg-slate-100/50 p-4 w-full'>
                                <p className="capitalize font-bold"><span className="font-bold">Author:</span> {created_by}</p>
                                <p className="btn btn-ghost capitalize"><FaClock className="mr-2 text-white "></FaClock>{course_duration}</p>
                                <p className="btn btn-ghost capitalize"><FaBook className="mr-2 text-white "></FaBook>{total_module}</p>

                                <p className='absolute right-4 top-4 bg-white/50 rounded-md px-2 text-2xl font-bold text-yellow-700'>$ {price} </p>
                            </div>

                        </div>
                        <div className="items-center md:p-8 grid gap-2 bg-white content-between">
                            <div className='m-4'>
                                <h2 className="font-bold">Course Details</h2>
                                <div className="flex flex-col-reverse">
                                    <div className='flex-1 flex-64 mb-4'><p>{details_course_description}</p></div>
                                </div>

                                <div className='flex justify-between gap-2'>
                                    <Link to='/'><button className="btn outline-0 bg-blue-800 text-white" ><FaArrowLeft></FaArrowLeft> </button></Link>
                                    <button className="btn outline-0 bg-blue-800 text-white">Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >



        // <div className="hero min-h-screen" style={{ backgroundImage: `url("${picture}")` }}>
        //     <img src={picture} alt="" />
        //     <div className="card mt-96 lg-w-1/3 w-4/5 hover:bg-white/95 bg-white/70 shadow-xl transition-colors">
        //         {/* <img className='' src={picture} alt="room" /> */}
        //         <div className="card-body">

        //             <h2 className="card-title text-gray-700">{title} </h2>
        //             <p className='text-2xl font-bold text-blue-600'>$ {price} </p>
        //             <div className="flex justify-between items-center  text-blue-600">
        //                 <div className='flex gap-2'>
        //                     <div className='flex items-center rounded-md outline outline-1 outline-blue-600 bg-white/80 hover:bg-blue-100 p-2 hover:text-black'><FaBed></FaBed> <p className='ml-2'> {bed} </p></div>
        //                     <div className='flex items-center rounded-md outline outline-1 outline-blue-600 bg-white/80 hover:bg-blue-100 p-2 hover:text-black'><FaUser></FaUser><p className='ml-2'> {guest}</p></div>
        //                 </div>
        //                 <button className="btn outline-0 bg-blue-800">Book Now</button>
        //             </div>
        //         </div>
        //     </div>
        // </div >
    );
};

export default CourseEnroll;
