import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n10kruq', 'template_i0ei6kc', form.current, 'len72e3uKI25xGEQf')
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contactContainer">
        <div className="contactOptions">

          <article className="contactOption">
            <MdOutlineMailOutline className="contactOptionIcon"/>
            <h4>Email</h4>
            <h5>miguelescamillla@gmail.com</h5>
            <a href="mailto:miguelescamillla@gmail.com" target="_blank" rel="noreferrer">Sen a message</a>
          </article>

          <article className="contactOption">
            <BsWhatsapp className="contactOptionIcon"/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone+5255579355328" target="_blank" rel="noreferrer">Send a message</a>
          </article>

        </div>
        <form ref= {form} onSubmit= {sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="text" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required/>
          <button type="submit" className="btn btnPrimary">Send Message</button>
        </form>
      </div>
    </section>
  )
}


export default Contact