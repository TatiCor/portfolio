import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Avatar from './AvatarMaker.svg';

const NavBar = () => {
    return (
        <header className="bg-[#010409] blackdrop-blur-lg  w-full">
            <nav className="flex items-center justify-between p-2">
                <div className="flex mx-2 items-center">
                    <img src={Avatar} alt="logo" className="mr-2 rounded-full size-14 shadow-md" />
                    <p className="font-semibold">Tatiana Cordecci</p>
                </div>

                <div className="flex items-center mx-2">
                    <ul className="flex items-center mx-10 ">
                        <li className="mx-4 "><a href="#aboutMe" >About me</a></li>
                        <li className="mx-4"><a href="#projects">Projects</a></li>
                        <li className="mx-4"><a href="#technologies">Technologies</a></li>
                        <li className="mx-4"><a href="#contact">Contact</a></li>
                    </ul>
                    <ul className="flex justify-center items-center">
                        <li className="flex mr-5 items-center hover:scale-125 transition duration-200 hover:bg-white/5 rounded-full"><a href="https://github.com/TatiCor"><IoLogoGithub className="size-6"/></a></li>
                        <li className="flex mr-5 items-center hover:scale-125 transition duration-200 hover:bg-white/5 rounded-full"><a href="https://www.linkedin.com/in/tatianacordecci/"><FaLinkedin className="size-6"/></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export { NavBar };
