import React from 'react';

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 2,
            title: 'Project 2',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 3,
            title: 'Project 3',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 4,
            title: 'Project 4',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 5,
            title: 'Project 5',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 6,
            title: 'Project 6',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 7,
            title: 'Project 7',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 8,
            title: 'Project 8',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
        {
            id: 9,
            title: 'Project 9',
            imageUrl: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
            url: 'https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/10-coding-projects-for-beginners-1.png',
        },
    ];
    
    return (
        <section id="projects" className="flex flex-col justify-center items-center p-6 m-6">
            <h2 className=' text-4xl font-bold'>Projects</h2>
            <div className='grid grid-cols-3 gap-16 p-6 m-6'>
            {
                    projects.map((project) => (
                        <div key={project.id} className='w-80 border rounded-lg overflow-hidden bg-white shadow-md transition duration-300 transform hover:scale-105'>
                            <a href={project.url} target="_blank" rel="noopener noreferrer"> 
                                <img src={project.imageUrl} alt={project.title} className='w-full h-40 object-cover' />
                            </a>
                            <div className="p-4 bg-slate-600">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="text-sm">Este es mi nuevo project</p>
                            </div>
                        </div>
                    ))
            }
            </div>
        </section>
        
    );
}

export { ProjectsSection };
