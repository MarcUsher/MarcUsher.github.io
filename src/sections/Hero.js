import React from 'react'
import profile from '../assets/profile-image.jpg'

export default function Hero() {
  return (
    <section className="hero">
        <div className='container container-hero'>
            <div>
                <h1>Hi, I'm Marc Usher</h1>
                <h4>I'm a Junior Full Stack Software Engineer</h4>
            </div>
            <div>
                <div className='border profile-border'>
                    <img src={profile} alt="Headshot of Marc in black and white" className="profile" />
                </div>
            </div>
        </div>
    </section>
  )
}
