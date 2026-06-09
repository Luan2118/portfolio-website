import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import './App.css'
import Skills from './components/sections/Skills'
import About from './components/sections/About'
import Contact from './components/sections/Contact'


function App() {

  return (
   <div className='bg-neutral-100'>
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contact />
   </div>
  )
}

export default App
