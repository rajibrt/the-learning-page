import React from 'react';
import { FaArrowLeft, FaBook, FaClock, FaFilePdf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const CourseEnroll = () => {
    const enrollment = useLoaderData()
    const { id, title, details_course_description, picture, price, created_by, course_duration, total_module, author_image } = enrollment;
    const ref = React.createRef();

    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2]
    };

    return (
        <div>
            {/* <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf> */}
            <div options={options} x={.5} y={.5} scale={0.8} ref={ref}>
                <div className="flex items-center justify-center relative" >
                    <div className="md:w-8/12 w-full rounded-lg shadow-2xl overflow-hidden lg:mx-0 md:my-8 mx-8 md:mx-0">

                        <img className="absolute inset-0 h-full w-full object-cover blur-sm " src={picture} alt="" />
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                        <div className="items-center relative mt-8">
                            <div className="relative">
                                <div className="relative lg:h-[700px] md:h-[450px] h-64 bg-center bg-cover rounded-t-md" style={{ backgroundImage: `url("${picture}")` }}>
                                    <div className="absolute top-0 w-full flex bg-black/50 rounded-t-md justify-between items-center h-20">
                                        <h2 className='lg:text-3xl md:text-2xl text-xl md:py-6 px-2 text-white'>{title}</h2>
                                        <div className="bg-gray-900 h-full lg:py-4 md:py-6 py-6 px-4 transition ease-in-out delay-50 duration-300 flex space-x-2 items-center border-l-2 border-yellow-500 hover:border-l-4 hover:border-emerald-500"><FaFilePdf className="mr-2 text-white text-2xl "></FaFilePdf>
                                            <Pdf targetRef={ref} filename="code-example.pdf">
                                                {({ toPdf }) => <button className="text-white hover:text-red-500 hover:transform-2" onClick={toPdf}>DOWNLOAD</button>}
                                            </Pdf>
                                        </div>

                                    </div>
                                    <div className='absolute bottom-0 shadow-md bg-slate-100/50 md:p-4 p-2 w-full flex flex-wrap items-center justify-between '>
                                        <div className='flex items-center '>
                                            <img className='rounded-full w-10 h-10 mr-2' src={author_image} alt="" />
                                            <p className="capitalize font-bold"><span className="font-bold">Author:</span> {created_by}</p>
                                        </div>
                                        <div className="flex items-center capitalize">
                                            <FaClock className="mr-2 "></FaClock>
                                            <h2 className="mr-1">Course Time:</h2> <p className="font-bold">{course_duration}</p>
                                        </div>
                                        <div className="flex items-center capitalize">
                                            <FaBook className="mr-2 "></FaBook>
                                            <h2 className="mr-1">Classes:</h2> <p className="font-bold">{total_module}</p>
                                        </div>
                                        <p className='right-4 top-4 bg-white/50 rounded-md px-2 text-2xl font-bold text-yellow-700'>$ {price} </p>
                                    </div>

                                </div>
                                <div className="items-center md:p-8 grid gap-2 bg-white content-between">
                                    <div className='m-4'>
                                        {/* <div>
                                            <h2>WHAT YOU WILL LEARN</h2>
                                            {
                                                enrollment.map(learn => <ol>
                                                    learn.what_you_will_learn
                                                </ol>)
                                            }
                                        </div> */}
                                        <h2 className="font-bold">Course Details</h2>
                                        <div className="flex flex-col-reverse">
                                            <div className='flex-1 flex-64 mb-4'><p>{details_course_description}</p></div>
                                        </div>

                                        <div className='flex justify-between gap-2'>
                                            <Link to='/'><button className="btn outline-0 bg-blue-800 text-white" ><FaArrowLeft></FaArrowLeft> </button></Link>
                                            <Link to={`/premiumaccess/${id}`} className="btn outline-0 bg-blue-800 text-white">Get premium access</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>




        // <div className="flex items-center justify-center relative" >
        //         <div className="absolute top-0 bg-red-500 z-99">
        //             <h2>{title}</h2>
        //         </div>
        //         <div className="md:w-8/12 w-full rounded-lg shadow-2xl overflow-hidden lg:mx-0 md:my-8 mx-8 md:mx-0">

        //             <img className="absolute inset-0 h-full w-full object-cover blur-sm " src={picture} alt="" />
        //             <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        //             <div className="items-center relative mt-8">
        //                 <div className="relative">
        //                     <div className="relative lg:h-[700px] md:h-[450px] h-64 bg-center bg-cover rounded-t-md" style={{ backgroundImage: `url("${picture}")` }}>
        //                         <div className="absolute top-0 w-full flex bg-black/50 rounded-t-md justify-between items-center h-20">
        //                             <h2 className='lg:text-3xl md:text-2xl text-xl md:py-6 px-2 text-white'>{title}</h2>
        //                             <div className="bg-gray-900 h-full lg:py-4 md:py-6 py-6 px-4 transition ease-in-out delay-50 duration-300 flex space-x-2 items-center border-l-2 border-yellow-500 hover:border-l-4 hover:border-emerald-500"><FaFilePdf className="mr-2 text-white text-2xl "></FaFilePdf>

        //                                 <PDFDownloadLink document={<PDFFile />} filename="FORM">
        //                                     {({ loading }) => (loading ? <button>Loading Document...</button> : <button className="text-white hover:text-red-500 hover:transform-2">DOWNLOAD</button>)}
        //                                 </PDFDownloadLink>
        //                                 {/* <PDFFile /> */}</div>

        //                         </div>
        //                         <div className='absolute bottom-0 shadow-md bg-slate-100/50 md:p-4 p-2 w-full flex flex-wrap items-center justify-between '>
        //                             <p className="capitalize font-bold"><span className="font-bold">Author:</span> {created_by}</p>
        //                             <div className="flex items-center capitalize">
        //                                 <FaClock className="mr-2 "></FaClock>
        //                                 <h2 className="mr-1">Course Time:</h2> <p className="font-bold">{course_duration}</p>
        //                             </div>
        //                             <div className="flex items-center capitalize">
        //                                 <FaClock className="mr-2 "></FaClock>
        //                                 <h2 className="mr-1">Classes:</h2> <p className="font-bold">{total_module}</p>
        //                             </div>
        //                             <p className='right-4 top-4 bg-white/50 rounded-md px-2 text-2xl font-bold text-yellow-700'>$ {price} </p>
        //                         </div>

        //                     </div>
        //                     <div className="items-center md:p-8 grid gap-2 bg-white content-between">
        //                         <div className='m-4'>

        //                             <h2 className="font-bold">Course Details</h2>
        //                             <div className="flex flex-col-reverse">
        //                                 <div className='flex-1 flex-64 mb-4'><p>{details_course_description}</p></div>
        //                             </div>

        //                             <div className='flex justify-between gap-2'>
        //                                 <Link to='/'><button className="btn outline-0 bg-blue-800 text-white" ><FaArrowLeft></FaArrowLeft> </button></Link>
        //                                 <button className="btn outline-0 bg-blue-800 text-white">Enroll Now</button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div >
    );
};

export default CourseEnroll;
