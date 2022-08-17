import React from 'react'
import Button from '../components/ui/Button'
import profile from '../assets/images/profile-image.jpg'

export default function Project(props) {

  const allStack = props.stack.map((tech, index) => (
    <li id={index}>{tech + " | "}</li>
  ))

  const links = props.links.map((link, index) => (
    <Button {...link}/>
  ))

  return (
    <>
      <div className='project-info'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <ul> 
          <b>{`Stack: `}</b>
          {allStack}
        </ul>
        {links}
      </div>
      <div className='project-image'>
        <img src={props.image} alt={props.title + " App Screenshot"} className="image" />
      </div>
    </>
  )
}
