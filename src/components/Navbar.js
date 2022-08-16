import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className="nav-logo">
            <a href='#home'>Marc Usher</a>
        </div>
        <ul className="nav-menu">
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#interests'>Interests</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>

    </nav>
  )
}
