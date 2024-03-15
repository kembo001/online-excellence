import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        BK
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
      <div className='contact'>
        Contact Me
      </div>
    </div>
  )
}

export default Header