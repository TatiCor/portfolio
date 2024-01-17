import React from "react";
import scroll from 'scroll';
import ease from 'ease-component';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoCodeSharp, IoCodeSlash } from "react-icons/io5";
import Avatar from '../../assets/Avatar.svg';

const NavBar = () => {
    const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
        const targetPosition = section.offsetTop;

        scroll.top(document.documentElement, targetPosition, {
        ease: ease.inOutSine,
        duration: 1000,
        });
    }
};

    return (
        <header className="fixed z-50 bg-[#010409fd] backdrop-blur-lg w-full">
        <nav className="flex items-center justify-between p-2">
            <div className="flex mx-2 items-center">
            <img src={Avatar} alt="logo" className="mr-4 rounded-full size-12 shadow-md" />
            <IoCodeSharp className="items-center  font-semibold"/>
            <p className="font-semibold text-center  px-1">TatiCor</p>
            <IoCodeSlash className="items-center font-semibold" />
            </div>

            <div className="flex items-center mx-2">
            <ul className="flex items-center mx-10 h-full">
                <li className="mx-4 hover:border-b hover:border-white">
                <a href="#aboutMe" onClick={() => scrollToSection('aboutMe')}>About me</a>
                </li>
                <li className="mx-4 hover:border-b hover:border-white">
                <a href="#technologies" onClick={() => scrollToSection('technologies')}>Technologies</a>
                </li>
                <li className="mx-4 hover:border-b hover:border-white">
                <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
                </li>
                <li className="mx-4 hover:border-b hover:border-white">
                <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
                </li>
            </ul>
            <ul className="flex justify-center items-center">
                <li className="flex mr-5 items-center hover:scale-125 transition duration-200 hover:bg-white/5 rounded-full">
                <a href="https://github.com/TatiCor"><IoLogoGithub className="size-6" /></a>
                </li>
                <li className="flex mr-5 items-center hover:scale-125 transition duration-200 hover:bg-white/5 rounded-full">
                <a href="https://www.linkedin.com/in/tatianacordecci/"><FaLinkedin className="size-6" /></a>
                </li>
            </ul>
            </div>
        </nav>
        </header>
    );
};

export { NavBar };
