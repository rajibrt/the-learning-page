import React from 'react';
import LeftSidebar from '../Shared/LeftSidebar';
import AllCourses from './AllCourses';


const Courses = () => {
    return (
        <div className='grid md:grid-cols-9 gird-cols-2 gap-4'>

            <div className='md:col-span-2 col-span-1'>
                <LeftSidebar></LeftSidebar>
            </div>

            <div className='md:col-span-7 col-span-1'>
                <AllCourses></AllCourses>
            </div>
        </div>
    );
};

export default Courses;