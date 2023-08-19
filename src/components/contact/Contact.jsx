import React, {useRef} from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsTelephonePlus} from 'react-icons/bs';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>baatka976@gmail.com</h5>
            <a href="mailto:baatka976@gmail.com" target='_blank'>Email Me</a>
          </article>
          <article className="contact__option">
            <BsTelephonePlus className='contact__option-icon'/>
            <h4>Telephone:</h4>
            <h5>+976 8063-8868</h5>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
