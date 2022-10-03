import React from 'react'
import profile from '../assets/images/profile-image.jpg'

export default function Hero() {
  return (
    <section className="hero">
        <div className='container container-hero'>
            <div className='hero-copy'>
                <h1>Hi, I'm Marc Usher</h1>
                <h4>I'm a Full-Stack Software Engineer</h4>
            </div>
            <div className='profile-image-container'>
                <div className='border profile-border'>
                    <img src={profile} alt="Headshot of Marc in black and white" className="profile-image" />
                </div>
            </div>
        </div>
    </section>
  )
}
