import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Shared/Hero';
import CourseCard from '../Shared/CourseCard';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <div id='more' className=' grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-4 flex flex-wrap justify-center'>
                {
                    allCourses.map(course => <CourseCard
                        key={course.id}
                        course={course}
                    ></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Home;