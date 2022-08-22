import React from 'react'
import './about.css'
/*import {ME} '/me2.png'*/
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about Container">
        <div className="aboutMe">
          <div className="aboutMeImg">
            <img src="#" alt="Me2"/>
          </div>
        </div>
          <div className="aboutContent">

            <div className="aboutCards">
              <article className="aboutCard">
                <FaAward className="aboutIcon"/>
                <h5>Experience</h5>
                <small>Rookie</small>
              </article>

              <article className="aboutCard">
                <FiUsers className="aboutIcon"/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className="aboutCard">
                <VscFolderLibrary className="aboutIcon"/>
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint possimus quo delectus esse pariatur facilis dolorum dolorem voluptates est, minima vitae labore eum, aliquam id unde ipsa explicabo porro.</p>
            <a href="#contact" className="btn btnPrimary">Let's Talk</a>
          </div>
      </div> 
    </section>
  
  )
}

export default about