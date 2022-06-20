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
              <p>Website Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Design</p>
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
              <p>NFT dApp</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Token Creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>DAO</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Whitelist</p>
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
              <p>NFT dApp</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Token Creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>DAO</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Whitelist</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}


