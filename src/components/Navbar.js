import React from 'react'
import { useState } from 'react'

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  };

  return (
    <nav>
        <div className="nav-logo">
            <a href='#home'>MARC USHER</a>
        </div>
        <ul className={isActive ? 'nav-menu active' : 'nav-menu'} onClick={handleClick}>
            <li onClick={handleClick}><a href='#about' onClick={handleClick}>About</a></li>
            <li onClick={handleClick}><a href='#experience' onClick={handleClick}>Experience</a></li>
            <li onClick={handleClick}><a href='#skills' onClick={handleClick}>Skills</a></li>
            <li onClick={handleClick}><a href='#projects' onClick={handleClick}>Projects</a></li>
            <li onClick={handleClick}><a href='#interests' onClick={handleClick}>Interests</a></li>
            <li onClick={handleClick}><a href='#contact' onClick={handleClick}>Contact</a></li>
        </ul>
        <div className={isActive ? 'hamburger active' : 'hamburger'} onClick={handleClick}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
    </nav>
  )
}
