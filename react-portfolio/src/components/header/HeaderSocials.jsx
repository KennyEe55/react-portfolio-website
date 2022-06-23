import React from 'react'
import {BsInstagram, BsLinkedin, BsSpotify} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/kenneth-ee-68b718239' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/KennyEe55' target='_blank'><BsGithub /></a>
        <a href='https://twitter.com/kennetheejj' target='_blank'><BsTwitter /></a>
        <a href='https://open.spotify.com/show/6KHFutuaZQPNquJlk6cVX3?si=0fHeIjTpQ8ap9W5RrKbdCQ&utm_source=copy-link' target='_blank'><BsSpotify /></a>
        <a href='https://instagram.com/kennetheejunjie' target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials