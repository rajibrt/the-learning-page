import React from 'react';
import { FaBed, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';


const RoomBooking = () => {
    const roomBooking = useLoaderData()
    const { id, title, picture, price, bed, guest } = roomBooking;
    return (

        <div className=" min-h-screen flex items-center justify-center relative" >
            <div className="w-full max-w-lg rounded-lg shadow-2xl overflow-hidden lg:mx-0 mx-8">
                <img className="absolute inset-0 h-full w-full object-cover" src={picture} alt="" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                <div className="items-center justify-center relative bg-white/80">
                    <div className="">
                        <img className='' src={picture} alt="room" />

                        <div className="items-center p-4 text-blue-600 grid gap-2 content-between">
                            <div className='flex justify-between'>
                                <h2 className="card-title text-gray-700">{title}  </h2>
                                <p className='text-2xl font-bold text-blue-600'>$ {price} </p>
                            </div>
                            <div className='flex justify-between items-center'>
                                {/* <p className='text-2xl font-bold text-blue-600'>$ {price} </p> */}
                                <div className='flex gap-2'>
                                    <div>
                                        <h2>From</h2>
                                        <input className='rounded-md text-slate-600' type="date" />
                                    </div>
                                    <div>
                                        <h2>To</h2>
                                        <input className='rounded-md text-slate-600' type="date" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between gap-2'>
                                <div className='flex gap-2'>
                                    <div className='flex items-center rounded-md outline outline-1 outline-blue-600 bg-white/80 hover:bg-blue-100 p-2 hover:text-black'><FaBed></FaBed> <p className='ml-2'> {bed} </p></div>
                                    <div className='flex items-center rounded-md outline outline-1 outline-blue-600 bg-white/80 hover:bg-blue-100 p-2 hover:text-black'><FaUser></FaUser><p className='ml-2'> {guest}</p></div>
                                </div>

                                <Link to='/'><button className="btn outline-0 bg-blue-800 text-white" >All Room</button></Link>
                                <button className="btn outline-0 bg-blue-800 text-white">Book Now</button>
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

export default RoomBooking;
