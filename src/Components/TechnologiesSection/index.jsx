import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HTML5Logo from '../../assets/html5.svg';
import CSS3Logo from '../../assets/css.svg';
import TailwindCSSLogo from '../../assets/tailwindcss.svg';
import JavaScriptLogo from '../../assets/javascript.svg';
import ReactLogo from  '../../assets/react.svg';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";


const CustomNextArrow = ({ onClick }) => (
    <div className="slick-arrow flex justify-center items-center text-center mr-40 opacity-90 rounded-full p-2  hover:scale-125" onClick={onClick}>
        <FcNext className='flex justify-center items-center size-8 mx-2 '/>
    </div>
);

const CustomPrevArrow = ({ onClick }) => (
    <div className="slick-arrow flex justify-center items-center text-center  mx-20 opacity-85 rounded-full p-2 hover:scale-125" onClick={onClick}>
        <FcPrevious className='flex justify-center items-center size-8 mx-2 rounded-full' />
    </div>
);

const TechnologiesSection = () => {
    const technologies = [
        {
            title: "HTML5",
            img: HTML5Logo,
        },
        {
            title: "CSS",
            img: CSS3Logo,
        },
        {
            title: "TailwindCSS",
            img: TailwindCSSLogo,
        },
        {
            title: "JavaScript",
            img: JavaScriptLogo,
        },
        {
            title: "ReactJS",
            img: ReactLogo,
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const sliderRef = useRef(null);

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section id='technologies' className='flex flex-col justify-center h-[600px] text-2xl m-4'>
            <h2 className='text-center text-4xl font-bold'>Technologies</h2>

            <Slider {...settings} ref={sliderRef} className='flex text-white justify-center items-center h-[650px]' 
                nextArrow={<CustomNextArrow onClick={goToNextSlide} />} 
                prevArrow={<CustomPrevArrow onClick={goToPrevSlide} />}
            >
                {technologies.map((tech, index) => (
                    <figure key={index} className="tech-card flex justify-around items-center hover:scale-110 transition duration-700 ease-in-out p-1 size-60 rounded-3xl">
                        <img src={tech.img} alt={tech.title} className="tech-icon size-60 object-fit shadow-sm shadow-black/30 rounded-3xl" />
                    </figure>
                
                ))}
            </Slider>
        </section>
    );
};

export { TechnologiesSection };
