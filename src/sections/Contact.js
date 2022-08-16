import React from 'react'

export default function Contact() {
  return (
    <section className="contact">
      <div className="container container-contact">
          <h2>CONTACT</h2>
          <h4><a href='mailto:usher.marcp@gmail.com'>usher.marcp@gmail.com</a></h4>
          <ul className='icons icons-contact'>
            <li>
              <a href='https://www.linkedin.com/in/marcusher/' target='_blank' rel='noreferrer'>
                <i class="fa-brands fa-linkedin" aria-label="LinkedIn Profile"></i>
              </a>
            </li>
            <li>
              <a href='https://github.com/marcusher' target='_blank' rel='noreferrer'>
                <i class="fa-brands fa-github" aria-label="GitHub Profile"></i>
              </a>
            </li>
          </ul>
      </div>
    </section>
  )
}
