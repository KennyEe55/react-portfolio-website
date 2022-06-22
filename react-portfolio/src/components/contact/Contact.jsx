import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs  from 'emailjs-com'

export default function Contact () {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wvg8pw2', 'template_ikjdl5a', form.current, '2R90rlu33705ETVdh')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kennetheejunjie@gmail.com</h5>
            <a href='mailto:kennetheejunjie@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Kenneth Ee</h5>
            <a href='https://m.me/kennethee.junjie' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+6591870375</h5>
            <a href='https://api.whatsapp.com/send?phone=+6591870375' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your message' required />
          <button type='submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
