import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Footer from './components/footer/Footer';

const app = () => {
  return (
    <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />

    </>
  )
}

export default app