import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/bat.delger.16" target='_blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/baagii___f0rest/" target='_blank'><BsInstagram/></a>
        <a href="https://github.com/baagii777" target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials