import { NavBar } from './Components/NavBar'
import {AboutMeSection} from './Components/AboutMeSection'
import { ProjectsSection } from './Components/ProjectsSection'
import {TechnologiesSection} from './Components/TechnologiesSection'
import {ContactForm } from './Components/ContactSection'
import {Footer } from './Components/Footer'
import './App.css'


function App() {

  return (
    <>
      <NavBar />
      <AboutMeSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
