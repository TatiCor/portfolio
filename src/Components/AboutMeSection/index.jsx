import React from 'react';
import { BsFlower2 } from "react-icons/bs";
import { Typewriter } from './typewriter.jsx';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const AboutMeSection = () => {
    const aboutMeTexts = [
        `Hello there!👋 I'm Tatiana Cordecci `,
        `Frontend Developer`,
    ];

    const titleClassNames = [
        'text-4xl font-bold mt-6 transition-opacity duration-500 ease-in-out', 
        'text-2xl my-4 text-gray-100 opacity-80 transition-opacity duration-500 ease-in-out ', 
    ];

    const textClassNames = 'md:text-md xl:text-lg text-wrap mb-2 leading-relaxed'; 

    return (
        <section id="aboutMe" className="flex flex-col m-6 justify-center items-center py-10 mb-40 w-full mx-auto px-4">
            <div className="flex justify-center items-center pb-10 mt-20 text-center w-full">
                <div className="flex flex-wrap justify-center items-center h-[200px]">
                    <Typewriter texts={aboutMeTexts} tag={['h1', 'h2']} className={titleClassNames} />
                </div>
            </div>
            <span className='flex justify-center items-center py-2 mb-2'>
                <BsFlower2 className='mx-1 size-6'/>
                <h2 className="flex justify-center items-center text-2xl md:text-4xl font-bold">About me</h2>
            </span>
            <div className="flex flex-col justify-center items-center gap-4 py-2 px-2 mb-2 text-center xl:w-2/4">   
                <p className={textClassNames}>
                    Hello! I'm Tati, from Argentina. After years as a lawyer ⚖, I decided to immerse myself in the fascinating 🌎 of programming. Now, as a Frontend Developer, I enjoy creating web experiences.
                </p>
                <p className={textClassNames}>
                    My communication and creative skills, crucial in my legal career, are now applied with determination in the frontend. I believe that attractive and user-friendly interfaces enable greater access to technology.
                </p>
                <p className={textClassNames}>
                    Currently, I lead an initiative that merges Technology and Law. My goal is to optimize the legal profession, immersing it in the tech world.✨
                </p>
            </div>
            <div className='flex justify-center items-center  lg:hidden'>
                <button className='flex justify-center items-center'>
                    <a 
                        href="https://github.com/TatiCor"
                        className='mx-2'
                    >
                        <IoLogoGithub className="size-10 mx-2" />
                    </a>
                </button>
                <button>
                    <a 
                        href="https://www.linkedin.com/in/tatianacordecci/"
                        className='mx-2'
                    >
                            
                        <FaLinkedin className="size-10 mx-4" />
                    </a>
                </button>
            </div>
        </section>
    );
};

export { AboutMeSection };
