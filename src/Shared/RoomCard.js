import React from 'react';
import { FaBed, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const RoomCard = ({ room }) => {
    const { id, title, picture, price, bed, guest } = room;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                {/* <figure><img url={picture} alt="Room" /></figure> */}
                <img className='' src={picture} alt="room" />
                <div className="card-body">

                    <h2 className="card-title">{title} </h2>
                    <p className='text-2xl font-bold'>$ {price} </p>
                    <div className="flex justify-between items-center">
                        <div className='flex items-center rounded-md outline outline-white hover:bg-blue-100 p-2 hover:text-black'><FaBed></FaBed> <p className='ml-2'> {bed} </p></div>
                        <div className='flex items-center rounded-md outline outline-white hover:bg-blue-100 p-2 hover:text-black'><FaUser></FaUser><p className='ml-2'> {guest}</p></div>

                        <Link to={`/room/${id}`}><button className="btn outline-0 bg-blue-800">Check Now</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default RoomCard;

