import React from 'react';
import { Link } from 'react-router-dom';

const SidebarNab = ({ course }) => {
    const { id, title, details_course_description, picture, price, created_by, course_duration, total_module, author_image } = course;
    return (


        <Link to={`/courses/${id}`}> <div className="h-fit items-start shadow-inner hover:shadow-lg duration-300 transition-all rounded-md p-2 my-1 mx-2">
            <div className=" flex items-center">
                <img className="w-10 h-10 rounded-full mr-2" src={author_image} alt="" />
                <h2 className="hover:text-yellow-700 duration-100 transition-all">{title}</h2>
            </div>
        </div ></Link>
    );
}

export default SidebarNab;