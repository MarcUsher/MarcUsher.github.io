import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Project from './sections/Project'
import Interests from './sections/Interests'
import Contact from './sections/Contact'
import projects from './data/projects.json'

export default function App() {

  const allProjects = projects.map((project, index) => (
    <div key={index}>
      <Project {...project} />
    </div>
  ))

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
      {allProjects}
      <a name="interests"></a>
      <Interests />
      <a name="contact"></a>
      <Contact />
      <Footer />
    </div>
  )
}