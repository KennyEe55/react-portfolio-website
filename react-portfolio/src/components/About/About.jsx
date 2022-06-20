import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
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
            <h5>Clients</h5>
            <small>200+ clients</small>
            </article>
            <article className='about__card'>
            <FaFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>2 main projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis quae deleniti dolore veritatis labore ut, ex molestias impedit consequatur, molestiae, assumenda error officiis commodi obcaecati ipsa quas. Hic, quibusdam!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
