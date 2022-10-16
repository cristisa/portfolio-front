import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me-me-circulo.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Cristina Sanjuan</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img classname="me" src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>

    </header>
  )
}

export default Header