import React from 'react';
import { IoCodeSlashOutline } from "react-icons/io5";
import MokeponImage from '../../assets/projects/mokepon.png';
import GoogleClon from '../../assets/projects/GoogleClon.png'
import Ecommerce from '../../assets/projects/yardSale.png'
import Calculator from '../../assets/projects/previsionalCalc.png'
import ToDoList from '../../assets/projects/todo-list.png'
import EcommerceShopi from '../../assets/projects/ecommerce-shopi.png'


const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: 'MOKEPON! - Online game',
            date: 'April 2023',
            tags: ['HTML5', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
            github: 'https://github.com/TatiCor/juegoOnline',
            description: 'MOKEPON! is an online game crafted with HTML5, CSS, JavaScript, Node.js, and Express.js. Providing an interactive gaming experience, this project showcases skills in frontend and backend technologies.',
            imageUrl: MokeponImage,
            url: 'https://github.com/TatiCor/juegoOnline',
        },
        {
            id: 2,
            title: 'Google Clon',
            date: 'January 2023',
            tags: ['HTML5', 'CSS'],
            github: 'https://github.com/TatiCor/googleClon',
            description: 'Google Clon recreates the layout of the Google website using HTML and CSS. With a focus on frontend design, the project provides a familiar user experience. Check out the project on GitHub or try the live version here.',
            imageUrl: GoogleClon,
            url: 'https://taticor.github.io/googleClon/',
        },
        {
            id: 3,
            title: 'Yard Sale',
            date: 'June 2023',
            tags: ['HTML5', 'CSS', 'JavaScript', 'Git', 'Github'],
            github: 'https://github.com/TatiCor/cursoPractico-frontendDeveloper',
            description: 'Yard Sale emerged as a responsive e-commerce layout with interactive menu features, employing HTML5, CSS, JavaScript, Git, and GitHub. View the project on GitHub or try the live version here.',
            imageUrl: Ecommerce,
            url: 'https://taticor.github.io/cursoPractico-frontendDeveloper/',
        },
        {
            id: 4,
            title: 'Calculadora Previsional (Calculator for lawyers)',
            date: 'April 2020',
            tags: ['HTML5', 'CSS', 'JavaScript', 'Git', 'Github'],
            github: 'https://github.com/TatiCor/tatian.github.io',
            description: 'The "Calculator for Lawyers" project is a practical tool that simplifies debt calculations for legal professionals. The project has a responsive design that ensures seamless access across various devices, making it convenient for users. It also introduces a user-friendly dark mode and light mode, giving users the flexibility to choose their preferred interface.',
            imageUrl: Calculator,
            url: 'https://taticor.github.io/tatian.github.io/',
        },
        {
            id: 5,
            title: 'To-Do List',
            date: 'October 2023',
            tags: ['React', 'CSS', 'Vite', 'Git', 'Github'],
            github: 'https://github.com/TatiCor/ToDo-List',
            description: 'To-Do List is a responsive task management application built with React, CSS, Vite, Git, and GitHub. Featuring responsive design, the application seamlessly adapts to various screen sizes, providing an optimal user experience on both desktop and mobile devices. Storing tasks in local storage, users can easily add, track, and mark completed tasks. Explore the project on GitHub or live here.',
            imageUrl: ToDoList,
            url: 'https://taticor.github.io/ToDo-List/',
        },
        {
            id: 6,
            title: 'E-commerce Shopi',
            date: 'December 2023',
            tags: ['ReactJS', 'Vite','TailwindCSS',  'Git', 'Github'],
            github: 'github',
            description: 'Dynamic ReactJS and TailwindCSS-powered E-commerce platform developed from a Platzi technical test. Utilizing the Vite framework for superior performance, it seamlessly offers users an engaging experience in product exploration, category filtering, and order history review. Includes innovative user persistence with localStorage, simulating a backend and enhancing overall interaction.',
            imageUrl: EcommerceShopi,
            url: 'https://taticor.github.io/Ecommerce-Shopi/',
        },
        
    ];
    
    return (
        <section id="projects" className="flex flex-col justify-center items-center p-6 m-6 min-w[740px] ">
            <span className='flex justify-center items-center p-2 h-full'>
                <IoCodeSlashOutline className='mt-2 mx-2 size-7' />
                <h2 className='text-4xl font-bold'>Projects</h2>
            </span>

            <div className='grid grid-cols-3 gap-16 p-6 m-6'>
                {
                    projects.map((project) => (
                        <div key={project.id} className='w-80 rounded-lg overflow-hidden shadow-2xl shadow-white/10 transition duration-700 transform hover:scale-110 '>
                            <a href={project.url} target="_blank" rel="noopener noreferrer"> 
                                <img src={project.imageUrl} alt={project.title} className='w-80 h-60 ' />
                            </a>
                            <div className="flex- flex-col justify-center items-center p-4 bg-black/5">                                
                                <h3 className="text-lg font-semibold text-indigo-200 leading-relaxed">{project.title}</h3>
                                <p className="text-sm mb-2 opacity-80 leading-relaxed">{project.date}</p>
                                <p className="text-sm mb-2 opacity-80 leading-relaxed">{project.github}</p>
                                <ul className='flex mb-2 leading-relaxed'>
                                    {project.tags && Array.isArray(project.tags) && project.tags.map((tagItem, index) => <li key={index} className='mr-1 text-sm leading-relaxed'>{tagItem} | </li>)}
                                </ul>

                                <p className="text-md opacity-80 leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}


export {ProjectsSection}