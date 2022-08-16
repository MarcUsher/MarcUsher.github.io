import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Interests from './sections/Interests'
import Contact from './sections/Contact'

export default function App() {

  return (
    <div className='page-body'>
      <a name="home"></a>
      <Navbar />
      <Hero />
      <a name="about"></a>
      <About />
      <a name="skills"></a>
      <Skills />
      <a name="projects"></a>
      <Projects />
      <a name="interests"></a>
      <Interests />
      <a name="contact"></a>
      <Contact />
      <Footer />
    </div>
  )
}