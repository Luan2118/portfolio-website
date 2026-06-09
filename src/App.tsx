import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import './App.css'
import Skills from './components/sections/Skills'
import About from './components/sections/About'


function App() {

  return (
   <div className='bg-neutral-100'>
    <Hero />
    <Projects />
    <Skills />
    <About />
   </div>
  )
}

export default App
