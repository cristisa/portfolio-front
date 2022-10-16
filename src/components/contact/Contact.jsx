import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ur6mxxg', 'template_lhdoj4f', form.current, 'EujslBs4X7Z8Toghp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
  };

  return (
    <section id='contact'>
      <h5>Write To Me</h5>
      <h2>Contact Form</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
           <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>cristy.si@gmail.com</h5>
            <a href='mailto:cristy.si@gmail.com'>Send a message</a>
          </article>
        </div>
        {/* Formulario*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact