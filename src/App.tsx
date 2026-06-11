import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import './App.css'
import Skills from './components/sections/Skills'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import Navbar from './components/sections/Navbar'


function App() {

  return (
   <div className='bg-neutral-100 pt-[57px]'>
    <Navbar />
    <Hero />
    <Skills />
    <Projects />
    <About />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
