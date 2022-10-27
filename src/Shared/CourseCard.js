import React from 'react';
import { FaBook, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const CourseCard = ({ course }) => {
    console.log(course);
    const { id, title, rating, picture, short_description, price, course_duration, total_module
    } = course;

    return (
        <div>
            <div className="card h-[550px] min-h-[550px] w-96 bg-base-100 shadow-xl">
                <div className="relative" >
                    <img src={picture} alt="course" />
                    <h2 className="absolute text-white font-bold w-full p-2 bottom-0 bg-black/50">Rating: {rating.number}</h2>
                </div>

                <div className="card-body">

                    <h2 className="card-title">{title}</h2>

                    <p>{short_description.length > 100 ? short_description.slice(0, 100) + '...' : short_description}</p>
                    <p className='text-2xl font-bold'>$ {price} </p>
                    <div className="flex justify-between items-center">
                        <div className='flex items-center rounded-md outline outline-white hover:bg-blue-100 p-2 hover:text-black'><FaClock></FaClock> <p className='ml-2'> {course_duration} </p></div>
                        <div className='flex items-center rounded-md outline outline-white hover:bg-blue-100 p-2 hover:text-black'><FaBook></FaBook><p className='ml-2'> {total_module
                        }</p></div>

                        <Link to={`/courses/${id}`}><button className="btn outline-0 bg-blue-800">Check Now</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CourseCard;

