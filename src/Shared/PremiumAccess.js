import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumAccess = () => {
    const course = useLoaderData()
    console.log(course);
    const { id, title, picture, price } = course;
    return (
        <div className="my-20">
            <h2 className="text-2xl font-bold text-center mb-10">Thanks being with us!</h2>
            <div className="card w-3/5 self-center m-auto lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-80' src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>You have to pay: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn outline-0 bg-blue-800">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumAccess;