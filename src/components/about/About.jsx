import React from 'react';
import './about.css';
import ME from '../../assets/me-me-mejor.png';
import {SiJavascript} from 'react-icons/si';
import {SiPython} from 'react-icons/si';
import {SiJava} from 'react-icons/si';



const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="Image of me" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <SiJavascript className='about__icon'/>
              <h5>Javascript</h5>
            </article>
            <article className='about__card'>
              <SiJava className='about__icon'/>
              <h5>Java</h5>
            </article>
            <article className='about__card'>
              <SiPython className='about__icon'/>
              <h5>Python</h5>
            </article>
          </div> 
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, vel? Nesciunt, odit? Doloribus sint ad necessitatibus cumque maiores facilis ex. Mollitia corporis quam voluptate neque doloribus esse cupiditate veniam repudiandae?
            Magnam natus reiciendis, quae sint corrupti numquam repudiandae, vero cupiditate enim dolor velit voluptas fugit reprehenderit quisquam non. Beatae commodi dolor veritatis reprehenderit magnam voluptatum iste. Molestiae quasi delectus quos?
          </p>
          <a href="/#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About