import { NavBar } from './Components/NavBar'
import {AboutMeSection} from './Components/AboutMeSection'
import { ProjectsSection } from './Components/ProjectsSection'
import {TechnologiesSection} from './Components/TechnologiesSection'
import {ContactForm } from './Components/ContactSection'
import './App.css'


function App() {

  return (
    <>
      <NavBar />
      <AboutMeSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactForm />
    </>
  )
}

export default App
