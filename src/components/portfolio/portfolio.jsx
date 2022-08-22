import React from 'react'
import './portfolio.css'
import IMG1 from '/Users/miguelmancilla/Desktop/Programacion/react-portfolio-website/src/img/p1.png'
import IMG2 from '/Users/miguelmancilla/Desktop/Programacion/react-portfolio-website/src/img/p2.png'
import IMG3 from '/Users/miguelmancilla/Desktop/Programacion/react-portfolio-website/src/img/p3.png'
import IMG4 from '/Users/miguelmancilla/Desktop/Programacion/react-portfolio-website/src/img/p4.png'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolioContainer">

        <article className="portfolioItem">
          <div className="portfolioItemImg">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="itemcta">
          <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btnPrimary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolioItem">
          <div className="portfolioItemImg">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="itemcta">
          <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btnPrimary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolioItem">
          <div className="portfolioItemImg">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="itemcta">
          <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btnPrimary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolioItem">
          <div className="portfolioItemImg">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="itemcta">
          <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btnPrimary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio