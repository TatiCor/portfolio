import React from 'react';
import { IoCodeSlashOutline } from "react-icons/io5";


const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            date: 'April 2020',
            tags: ['HTML5', 'CSS', 'JavaScript', 'Git', 'Github'],
            github: 'github',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque quo nesci',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 2,
            title: 'Project 2',
            date: 'April 2020',
            tags: ['HTML5', 'CSS', 'JavaScript', 'Git', 'Github'],
            github: 'github',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque quo nesci',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 3,
            title: 'Project 3',
            date: 'April 2020',
            tags: ['HTML5', 'CSS', 'JavaScript', 'Git', 'Github'],
            github: 'github',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque quo nesci',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 4,
            title: 'Project 4',
            date: 'April 2020',
            tags: ['HTML5', 'CSS', 'JavaScript', 'Git', 'Github'],
            github: 'github',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque quo nesci',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 5,
            title: 'Project 5',
            date: 'April 2020',
            tags: ['HTML5', 'CSS', 'JavaScript', 'Git', 'Github'],
            github: 'github',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque quo nesci',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 6,
            title: 'Project 6',
            date: 'April 2020',
            tags: ['HTML5', 'CSS', 'JavaScript', 'Git', 'Github'],
            github: 'github',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque quo nesci',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 7,
            title: 'Project 7',
            date: 'April 2020',
            tags: ['HTML5', 'CSS', 'JavaScript', 'Git', 'Github'],
            github: 'github',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque quo nesci',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
    ];
    
    return (
        <section id="projects" className="flex flex-col justify-center items-center p-6 m-6 min-w[740px] ">
            <span className='flex justify-center items-center p-2 h-full'>
                <IoCodeSlashOutline className='mx-4 size-7' />
                <h2 className='text-4xl font-bold'>Projects</h2>
            </span>

            <div className='grid grid-cols-3 gap-16 p-6 m-6'>
                {
                    projects.map((project) => (
                        <div key={project.id} className='w-80 rounded-lg overflow-hidden shadow-2xl shadow-white/10 transition duration-700 transform hover:scale-110 '>
                            <a href={project.url} target="_blank" rel="noopener noreferrer"> 
                                <img src={project.imageUrl} alt={project.title} className='w-full h-40 object-cover' />
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