import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export default function Services () {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Smart Contract Integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interactive Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Search Engine Optimisation</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Blockchain Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>NFT Minting Engine</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Token Creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>DAO Creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Whitelist</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>NFT exclusive Discord</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>NFT Launch Advisory</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Pre-launch checklist</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Launch Day Prep</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Constructive Feedback on Project</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Potential Collaborations with Partners</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}


