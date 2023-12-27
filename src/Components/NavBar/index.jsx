import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Avatar from './AvatarMaker.svg';

const NavBar = () => {
    return (
        <header className="bg-[#010409] shadow-md w-full">
            <nav className="flex items-center justify-between p-2">
                <div className="flex mx-2 items-center">
                    <img src={Avatar} alt="logo" className="mr-2 rounded-full h-14 w-14 shadow-md" />
                    <p className="font-semibold">Tatiana Cordecci</p>
                </div>

                <div className="flex items-center mx-2">
                    <ul className="flex items-center ">
                        {/* Aquí están los enlaces con anclas */}
                        <li className="mx-4"><a href="#aboutMe">About me</a></li>
                        <li className="mx-4"><a href="#projects">Projects</a></li>
                        <li className="mx-4"><a href="#technologies">Technologies</a></li>
                        <li className="mx-4"><a href="#contact">Contact</a></li>
                    </ul>
                    <ul className="flex m-2 p-1 items-center">
                        <li className="mx-2 item"><a href="https://github.com/TatiCor"><IoLogoGithub className="h-6 w-6"/></a></li>
                        <li><a href="https://www.linkedin.com/in/tatianacordecci/"><FaLinkedin className="h-6 w-6"/></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export { NavBar };
