// AboutMeSection.jsx
import React from 'react';
import { Typewriter } from './typewriter.jsx';

const AboutMeSection = () => {
    const aboutMeTexts = [
        `Hello there!👋 I'm Tatiana Cordecci `,
        `Frontend Developer`,
        `I'm a passionate about combining design and functionality. I specialize in creating unique solutions using HTML, CSS, JavaScript, and React. I believe in the importance of continuous learning and stay up-to-date with the latest web technologies to provide innovative solutions for your projects. Let's connect and see how I can bring a fresh perspective and ongoing innovation to your endeavors! ✨`
    ];

    const classNames = [
        'font-bold text-5xl mt-6 transition-opacity duration-500 ease-in-out',
        'text-xl my-4 text-gray-100 transition-opacity duration-500 ease-in-out',
        'text-2xl whitespace-wrap w-[900px] h-auto font-light py-5 text-gray-500 leading-relaxed transition-opacity duration-500 ease-in-out'
    ];

    const tagNames = ['h1', 'h2', 'p'];

    return (
        <section id="aboutMe" className="flex flex-col justify-center items-center py-10 h-[600px] lg:w-[600px] mx-auto">
            <div className="p-16 m-6 text-center">
                <Typewriter texts={aboutMeTexts} tag={tagNames} className={classNames} />
            </div>
        </section>
    );
};

export { AboutMeSection };
