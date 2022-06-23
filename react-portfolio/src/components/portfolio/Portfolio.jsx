import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/hvatcats.jpg'



export default function Portfolio () {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="hvatcat website" />
          </div>
          <h3>HVATCATS Society</h3>
          <div className="portfolio__item-cta">
          <a href="https://www.hvatcats.io/" className='btn btn-primary' target='_blank'>Website</a>
          </div>
        </article>
      </div>
    </section>
  )
}

