import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLoaderData } from "react-router-dom";
import CardSlide from "./CardSlide";

const Carousel = () => {
    const allCourses = useLoaderData();

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-8' {...settings}>
            {
                allCourses.map(course => <CardSlide
                    key={course.id}
                    course={course}
                ></CardSlide>)
            }
        </Slider>
    );
};

export default Carousel;