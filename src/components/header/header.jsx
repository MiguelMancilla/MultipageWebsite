import React from 'react'
import './header'
import CTA from './CTA'
/* import ME from 'me1' */
import HeaderSocials from './headerSocials'

const header = () => {
  return (
    <header>``
      <div className="container headerContainer">
        <h5>Hello I'm</h5>
        <h1>Miguel Mancilla</h1>
        <h5 className="textLight">Front-end Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src= "#" alt="me" />
        </div>
        <a href="#contact" className="scrollDown">Scroll Down</a>
      </div>
    </header>
  )
}

export default header