
import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import HeroSection from '../components/Herosection';
import AboutSection from '../components/Aboutsection';
import TechnologySection from '../components/TechnologySection';
export default function About() {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const textToType = "I'm Aman Chahar";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => currentIndex + 1);
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setText(textToType.slice(0, currentIndex));
  }, [currentIndex]);
  useEffect(() => {
        AOS.init();
      }, []);
  return (
    <main>
   <HeroSection text={text} />
   <AboutSection />
 <TechnologySection />
 </main>
  );
}
