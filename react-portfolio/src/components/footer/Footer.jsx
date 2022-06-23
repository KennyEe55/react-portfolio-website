import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsSpotify, BsTwitter } from 'react-icons/bs'
import './footer.css'


export default function Footer () {
  return (
    <footer>
      <a href='#' className='footer__logo'>Kenneth Ee</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href='https://linkedin.com/in/kenneth-ee-68b718239' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/KennyEe55' target='_blank'><BsGithub /></a>
        <a href='https://twitter.com/kennetheejj' target='_blank'><BsTwitter /></a>
        <a href='https://open.spotify.com/show/6KHFutuaZQPNquJlk6cVX3?si=0fHeIjTpQ8ap9W5RrKbdCQ&utm_source=copy-link' target='_blank'><BsSpotify /></a>
        <a href='https://instagram.com/kennetheejunjie' target='_blank'><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kenneth Ee. All rights reserved. </small>
      </div>
    </footer>
  )
}
