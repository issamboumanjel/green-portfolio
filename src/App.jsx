import './App.css'
import About from './assets/components/About/About'
import Contact from './assets/components/Contact/Contact'
import Footer from './assets/components/Footer/Footer'
import Hero from './assets/components/Hero/Hero'
import Navbar from './assets/components/Navbar/Navbar'
import Projects from './assets/components/Projects/Projects'
import Skills from './assets/components/Skills/Skills'

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
