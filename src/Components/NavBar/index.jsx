import React, { useState } from "react";
import scroll from "scroll";
import ease from "ease-component";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoCodeSharp, IoCodeSlash } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import Avatar from "../../assets/Avatar.svg";

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
        const targetPosition = section.offsetTop;

        scroll.top(document.documentElement, targetPosition, {
            ease: ease.inOutSine,
            duration: 1000,
        });

        setMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed z-50 bg-[#010409fd] backdrop-blur-lg w-full">
        <nav className="flex items-center justify-between p-2">
            <div className="flex mx-2 items-center">
            <img
                src={Avatar}
                alt="logo"
                className="mr-4 rounded-full size-12 shadow-md"
            />
            <IoCodeSharp className="items-center  font-semibold" />
            <p className="font-semibold text-center  px-1">TatiCor</p>
            <IoCodeSlash className="items-center font-semibold" />
            </div>

            <div
            className={`lg:hidden flex items-center justify-center cursor-pointer rounded-xl size-12 z-100 transition-transform transform ${
                isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={toggleMenu}
            >
            <CiMenuFries className="size-6" />
            </div>

            {isMenuOpen && (
            <div className="fixed top-16 left-0 b w-full h-auto bg-[#010409fd] bg-opacity-75 flex items-center justify-center">
                <div className="bg-[#010409fd] h-screen y w-screen p-6 rounded-md ">
                    <ul className="flex flex-col justify-center items-center text-white">
                        <li className="my-4">
                        <a 
                            href="#aboutMe" 
                            className="font-semibold"
                            onClick={() => scrollToSection("aboutMe")}
                        >
                            About me
                        </a>
                        </li>
                        <li className="my-4">
                        <a 
                            href="#projects" 
                            className="font-semibold"
                            onClick={() => scrollToSection("projects")}>
                            Projects
                        </a>
                        </li>
                        <li className="my-4">
                        <a
                            href="#technologies"
                            className="font-semibold"
                            onClick={() => scrollToSection("technologies")}
                        >
                            Technologies
                        </a>
                        </li>
                        <li className="my-4">
                        <a 
                            href="#contact" 
                            className="font-semibold"
                            onClick={() => scrollToSection("contact")}>
                            Contact
                        </a>
                        </li>
                        
                    </ul>
                    <ul className="flex justify-center items-center mt-4  text-white">
                        <li className="flex mr-5 items-center hover:scale-125 transition duration-200 hover:bg-white/5 rounded-full">
                            <a href="https://github.com/TatiCor">
                                <IoLogoGithub className="size-8" />
                            </a>
                        </li>
                        <li className="flex mr-5 items-center hover:scale-125 transition duration-200 hover:bg-white/5 rounded-full">
                            <a href="https://www.linkedin.com/in/tatianacordecci/">
                                <FaLinkedin className="size-8" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            )}

            <div
            className={`lg:flex items-center mx-2 ${
                isMenuOpen ? "hidden" : "hidden"
            }`}
            >
            <ul className="lg:flex items-center mx-10 h-full">
                <li className="mx-4 hover:border-b hover:border-white">
                <a href="#aboutMe" onClick={() => scrollToSection("aboutMe")}>
                    About me
                </a>
                </li>
                <li className="mx-4 hover:border-b hover:border-white">
                <a href="#projects" onClick={() => scrollToSection("projects")}>
                    Projects
                </a>
                </li>
                <li className="mx-4 hover:border-b hover:border-white">
                <a
                    href="#technologies"
                    onClick={() => scrollToSection("technologies")}
                >
                    Technologies
                </a>
                </li>
                <li className="mx-4 hover:border-b hover:border-white">
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                    Contact
                </a>
                </li>
            </ul>
            <ul className="flex justify-center items-center">
                <li className="flex mr-5 items-center hover:scale-125 transition duration-200 hover:bg-white/5 rounded-full">
                <a href="https://github.com/TatiCor">
                    <IoLogoGithub className="size-6" />
                </a>
                </li>
                <li className="flex mr-5 items-center hover:scale-125 transition duration-200 hover:bg-white/5 rounded-full">
                <a href="https://www.linkedin.com/in/tatianacordecci/">
                    <FaLinkedin className="size-6" />
                </a>
                </li>
            </ul>
            </div>
        </nav>
        </header>
    );
};

export { NavBar };
