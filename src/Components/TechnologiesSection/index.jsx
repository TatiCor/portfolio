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
  <div className="slick-arrow hidden sm:block flex justify-center items-center text-center sm:mr-8 mr-2 opacity-90 rounded-full p-2 hover:scale-125" onClick={onClick}>
    <FcNext className='flex justify-center items-center size-8 mx-2' />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div className="slick-arrow hidden sm:block flex justify-center items-center text-center mx-8 opacity-85 rounded-full p-2 hover:scale-125" onClick={onClick}>
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

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  return (
    <section id='technologies' className='flex flex-col justify-center py-10 h-[600px] pb-8 text-2xl m-4 mb-32'>
      <span className='flex justify-center items-center p-2 h-auto rounded-full mb-12 '>
        <HiOutlineComputerDesktop className='mx-2 size-7 opacity-90 mt-2 ' />
        <h2 className='text-center text-2xl md:text-4xl font-bold mb-'>Technologies</h2>
      </span>

      <Slider 
        {...settings} 
        ref={sliderRef} 
        nextArrow={<CustomNextArrow />}
        prevArrow={<CustomPrevArrow />}        
        className='flex justify-center items-center mx-auto w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3'>
        {technologies.map((tech, index) => (
          <figure key={index} className="tech-card flex justify-around items-center size-auto hover:scale-110 transition duration-700 ease-in-out p-1 rounded-3xl mx-2 sm:mx-6 md:mx-8 lg:mx-12">
            <img 
              src={tech.img} 
              alt={tech.title} 
              className="tech-icon size-32 sm:size-32 lg:size-48 object-fit rounded-3xl"
              draggable="false"
          />

          </figure>
        ))}
      </Slider>
    </section>
  );
};

export { TechnologiesSection };
