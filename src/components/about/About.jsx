import React from 'react';
import './about.css';
import ME from '../../assets/Baagii.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Baagii.jpg" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Clients</h5>
              <small>Soon</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>+1.5 Years</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi nulla vero numquam, perspiciatis cupiditate ad mollitia, pariatur est voluptas magnam reiciendis ullam nam sed enim temporibus error iure ea!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About