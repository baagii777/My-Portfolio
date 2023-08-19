import React from 'react';
import './footer.css';
import { BsFacebook } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Baagii</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/bat.delger.16" target='_blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/baagii___f0rest/" target='_blank'><BsInstagram/></a>
        <a href="https://github.com/baagii777" target='_blank'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>Bat-Erdene SW921b &copy;2023. All rights are reserved.</small>
      </div>
    </footer>
  )
}

export default Footer