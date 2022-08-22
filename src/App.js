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
    <>
    <Navbar />
    <div className='page-body'>
      <a className='anchor' name="home"></a>
      <Hero />
      <a className='anchor' name="about"></a>
      <About />
      <a className='anchor' name="skills"></a>
      <Skills />
      <a className='anchor' name="projects"></a>
      <Projects />
      <a className='anchor' name="interests"></a>
      <Interests />
      <a className='anchor' name="contact"></a>
      <Contact />
      <Footer />
    </div>
    </>
  )
}