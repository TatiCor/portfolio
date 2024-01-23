import React from 'react';
import { NavBar } from './Components/NavBar';
import { AboutMeSection } from './Components/AboutMeSection';
import { ProjectsSection } from './Components/ProjectsSection';
import { TechnologiesSection } from './Components/TechnologiesSection';
import { ContactForm } from './Components/ContactSection';
import { Footer } from './Components/Footer';
import './App.css';

function App() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <>
      <NavBar />
      <animated.div style={props}>
        <AboutMeSection />
      </animated.div>
      <animated.div style={props}>
        <ProjectsSection />
      </animated.div>
      <animated.div style={props}>
        <TechnologiesSection />
      </animated.div>
      <animated.div style={props}>
        <ContactForm />
      </animated.div>
      <animated.div style={props}>
        <Footer />
      </animated.div>
    </>
  );
}

export default App;
