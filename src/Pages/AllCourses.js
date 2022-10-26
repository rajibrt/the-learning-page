import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard';

const AllCourses = () => {
    const ourCourses = useLoaderData();
    return (
        <div>
            <div id='more' className='flex flex-wrap justify-center gap-4 mt-10'>
                {
                    ourCourses.map(course => <CourseCard
                        key={course.id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default AllCourses;