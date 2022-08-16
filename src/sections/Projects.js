import React from 'react'
import SingleProject from './SingleProject'
import projects from '../data/projects.json'

export default function Projects() {

    const allProjects = projects.map((project, index) => (
        <div id={index} className='single-project'>
            <SingleProject {...project} />
        </div>
    ))

  return (
    <section className='projects'>
        <div className='container container-projects'>
            <h2>PROJECTS</h2>
            {allProjects}
        </div>  
    </section>
    
    
  )
}
