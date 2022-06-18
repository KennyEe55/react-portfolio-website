import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

export default function Header () {
  return (
    <header>
      <div className="container header__cointainer">
        <h5>Hello I m'</h5>
        <h1>Kenneth Ee</h1>
        <h5 className='text-light'>Blockchain Developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt='me'/>
          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
         
      </div>
    </header>
  )
}
