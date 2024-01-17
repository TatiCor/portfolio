import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HTML5Logo from '../../assets/tech/html5.svg';
import CSS3Logo from '../../assets/tech/css.svg';
import TailwindCSSLogo from '../../assets/tech/tailwindcss.svg';
import JavaScriptLogo from '../../assets/tech/javascript.svg';
import ReactLogo from  '../../assets/tech/react.svg';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { HiOutlineComputerDesktop } from "react-icons/hi2";


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
        <section  id='technologies' className='flex flex-col justify-center py-10 h-[600px] pb-8 text-2xl m-4 mb-32'>
            <span className='flex justify-center items-center p-2 h-full rounded-full'>
                <HiOutlineComputerDesktop className='mx-2 size-7 opacity-90 mt-2 ' />
                <h2 className='text-center text-4xl font-bold'>Technologies</h2>
            </span>

            <Slider {...settings} ref={sliderRef} className='flex text-white justify-center items-center' 
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
