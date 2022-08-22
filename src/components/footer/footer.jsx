import React from 'react'
import './footer.css'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#logo" className="footerLogo">PORTFOLIO</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footerSocials">
        <a href="https://instagram.com"><FaInstagramSquare/></a>
        <a href="https://linkedin.com"><FaLinkedin/></a>
        <a href="https://github.com"><BsGithub/></a>
      </div>

      <div className="footerCopyright">
        <small>&copy; MiguelMancilla. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer