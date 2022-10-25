import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Shared/Hero';
import CourseCard from '../Shared/CourseCard';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 54 }}></span>
                    </span>
                    sec
                </div>
            </div>
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