import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrollPosition = window.scrollY + windowHeight;

        if (scrollPosition >= fullHeight) {
        setShowFooter(true);
        } else {
        setShowFooter(false);
        }
    };

    return (
        <footer
        className={`bg-[#010409] blackdrop-blur-lg w-full text-white py-6 ${
            showFooter ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0 transition-opacity duration-2000 ease-in-out'
        }`}
        style={{ opacity: showFooter ? 1 : 0 }}
        >
        <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Tatiana's Portfolio</p>
            <p>Argentina</p>
        </div>
        </footer>
    );
};

export { Footer };
