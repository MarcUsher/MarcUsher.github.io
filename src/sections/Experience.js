import React from 'react'

export default function About() {
  return (
    <section className="experience">
      <div className="container container-experience">
        <div className='single-column'>
            <h2>EXPERIENCE</h2>
            <div>
                <h3>Software Engineer</h3>
                <p>
                    <b><a href="https://www.itoworld.com/">Ito World</a></b>
                    <br></br> October 2022 – May 2023
                    <br></br><em>Cambridge (Remote)</em>
                </p>
                <ul>
                    <li>Developed public transport data analytics products for the Department for Transport and major transport clients as part of a full-stack engineering team.</li>
                    <li>Focused on Django and Ariadne (GraphQL) API back-end architecture connecting with PostgreSQL databases in Dockerized microservice-structured products.</li>
                    <li>Optimised and created API endpoints to deliver fast response times, and collaborated on implementation of new product-driven functionality.</li>
                    <li>Adhered to test-driven development processes and principles, using Pytest throughout development.</li>
                    <li>Participated in product architecture discussions to prioritise product scalability, flexibility and performance, ensuring cross-team communication.</li>
                    <li>Developed critical thinking and problem-solving skills; troubleshooting, debugging and solving complex issues while following internal development standards and industry best practices.</li>
                </ul>
            </div>
            <div>
                <h3>Software Engineering Student</h3>
                <p>
                    <b><a href='https://generalassemb.ly/education/software-engineering-immersive/london'>General Assembly Software Engineering course</a></b>
                    <br></br>May 2022 – July 2022
                    <br></br><em>London (Remote)</em>
                </p>
                <p>A full-time 12-week immersive course focusing on full-stack engineering which covered the fundamentals of front end and back end programming and computer science. It involved:</p>
                <ul>
                    <li>Daily stand-ups</li>
                    <li>Online lessons</li>
                    <li>Labs</li>
                    <li>Self-led learning</li>
                    <li>Pair-programming</li>
                    <li>Four capstone projects in an Agile development workflow</li>
                </ul>
                <p>The <a href='#projects'>projects</a> ranged from a simple front-end single-page game built with HTML, CSS, JavaScript and jQuery to more complex full-stack applications built with Node.js/Express or Django back ends interfacing with MongoDB or PostgreSQL databases and React front ends.</p>
            </div>
            <h4><a href='https://www.linkedin.com/in/marcusher/' target='_blank'>See full professional experience on LinkedIn</a></h4>
        </div>
      </div>
    </section>
    
  )
}
