import React from 'react'
import './about.css'
import ME from '../../assets/moonbird.png'
import {FaAward} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'
import {FaFolder} from 'react-icons/fa'

export default function About () {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ year</small>
            </article>
            <article className='about__card'>
            <FaUserFriends className='about__icon'/>
            <h5>NFT Minted</h5>
            <small>200+ minted</small>
            </article>
            <article className='about__card'>
            <FaFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>2 projects completed</small>
            </article>
          </div>
          <p>
          I have been working in the financial service industry for more than 6 years before finding my newfound passion in blockchain technology and web3 development. Would love to contribute to the GameFi space especially to bring financial incentives to gaming to help gamers pursue their passion sustainably while rewarding them for their time and attention towards the game developers they love.          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
