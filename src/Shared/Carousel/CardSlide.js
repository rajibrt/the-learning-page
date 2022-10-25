import React from 'react';
import { FaBed, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const CardSlide = ({ room }) => {
    const { id, title, picture, price, bed, guest } = room;
    return (
        <div className="card w-64 bg-base-100 shadow-xl">
            {/* <figure><img url={picture} alt="Room" /></figure> */}
            <img className='' src={picture} alt="room" />
            <div className="card-body text-yellow-700 p-0">

                <div className="">
                    <h2 className="card-title text-center p-2">{title}</h2>
                    <div className='flex justify-between items-center px-2'>
                        <div className='flex items-center rounded-md outline outline-white hover:bg-blue-100 p-2 hover:text-black'><FaBed></FaBed> <p className='ml-2'> {bed} </p></div>
                        <div className='flex items-center rounded-md outline outline-white hover:bg-blue-100 p-2 hover:text-black'><FaUser></FaUser><p className='ml-2'> {guest}</p></div>
                        <div>
                            <p className='text-2xl font-bold'>$ {price} </p>
                        </div>
                    </div>

                </div>
                <Link to={`/courses/${id}`}><button className="w-full font-bold text-xl text-white outline-0 py-1 px-2 bg-yellow-700">Check Now</button></Link>
            </div>
        </div>
    );
};

export default CardSlide;