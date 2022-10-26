import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SidebarNab from './SidebarNab';


const LeftSidebar = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <div id='more' className='md:h-screen h-fit pt-6 grid grid-cols-1 gap-2 content-start bg-white md:drop-shadow-md drop-shadow-none'>
                {
                    allCourses.map(course => <SidebarNab
                        key={course.id}
                        course={course}
                    ></SidebarNab>)
                }
            </div>
        </div>
    );
};

export default LeftSidebar;