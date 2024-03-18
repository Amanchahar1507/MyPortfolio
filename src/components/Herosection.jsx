import React from 'react';
import welcome from '../images/welcome.png';
import linkedin from "../images/graylinkedin.png";
import gmail from "../images/graygmail.png";
import github from "../images/graygithub.png";

const HeroSection = ({ text }) => (
  <section id="hero">
    <div className="hero-container">
      <div className="fadeIn">
        <div className="hero-logo">
          <img src={welcome} alt="Imperial"></img>
        </div>
        <h1>{text}</h1>
        <h2>A Web Developer</h2>
        <div className="actions">
          <a href="https://github.com/Amanchahar1507" target="_blank" rel="noopener noreferrer"><img src={github} alt="github icon"></img></a>
          <a href="https://www.linkedin.com/in/aman-chahar-8445b0211/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin icon"></img></a>
          <a href="mailto:amanchahar1507@gmail.com" ><img style={{ marginTop: '10px' }} src={gmail} alt="gmail icon"></img></a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
