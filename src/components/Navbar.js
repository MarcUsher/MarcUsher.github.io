import React from 'react'
import { useState } from 'react'

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    event.currentTarget.classList.toggle('active');
    setIsActive(current => !current);
  };

  return (
    <nav>
        <div className="nav-logo">
            <a href='#home'>MARC USHER</a>
        </div>
        <ul className={isActive ? 'nav-menu active' : 'nav-menu'} onClick={handleClick}>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#interests'>Interests</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
    </nav>
  )
}
