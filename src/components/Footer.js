import React from 'react'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      <p>© Marc Usher {currentYear}</p>
    </footer>
  )
}
