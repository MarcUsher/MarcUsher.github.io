import React from 'react'
import Button from '../components/ui/Button'
import profile from '../assets/profile-image.jpg'

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
      <div className='border project-image'>
        <img src={profile} alt="Headshot of Marc in black and white" className="profile" />
      </div>
    </>
  )
}
