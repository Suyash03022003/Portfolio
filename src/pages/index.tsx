import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faDownload, faChevronDown, faEye } from '@fortawesome/free-solid-svg-icons';
import { Montserrat } from "next/font/google";
import "@fontsource/barlow-condensed";
import Hero from '../Components/Hero/Hero'
import About from '@/Components/About/About';
import Skills from "@/Components/Skills/Skills";
import Project from '@/Components/Projects/Project';
import Education from '@/Components/Education/Education';
import Contact from '@/Components/Contact/Contact';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavButton, setShowNavButton] = useState(false);

  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const cursorSmall = useRef<HTMLDivElement>(null)
  const cursorBig = useRef<HTMLDivElement>(null)

  const mainHeadingStyles = {
    fontFamily: "'Barlow Condensed', sans-serif",
  };

  const handleMouseScroll = (index: any) => {
    sectionRefs.current[index].scrollIntoView({
      behavior: 'smooth',
    });
    setCurrentIndex(index);
    setShowNav(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowNavButton(true);
    } else {
      setShowNavButton(false);
    }

    if(window.scrollY >= sectionRefs.current[5].offsetTop - 400) {
      setCurrentIndex(5)
    } else if(window.scrollY < sectionRefs.current[5].offsetTop - 400 && window.scrollY >= sectionRefs.current[4].offsetTop - 400) {
      setCurrentIndex(4)
    } else if(window.scrollY < sectionRefs.current[4].offsetTop - 400 && window.scrollY >= sectionRefs.current[3].offsetTop - 400) {
      setCurrentIndex(3)
    } else if(window.scrollY < sectionRefs.current[3].offsetTop - 400 && window.scrollY >= sectionRefs.current[2].offsetTop - 400) {
      setCurrentIndex(2)
    } else if(window.scrollY < sectionRefs.current[2].offsetTop - 400 && window.scrollY >= sectionRefs.current[1].offsetTop - 400) {
      setCurrentIndex(1)
    } else if(window.scrollY < sectionRefs.current[1].offsetTop - 400) {
      setCurrentIndex(0)
    }
  };

  const positionElement = (e: any) => {
    if (cursorBig.current && cursorSmall.current) {
      cursorBig.current.style.visibility = 'visible';
      cursorSmall.current.style.visibility = 'visible';
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      cursorSmall.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      
      const newMouseX = mouseX - 27;
      const newMouseY = mouseY - 27;
      cursorBig.current.style.transform = `translate3d(${newMouseX}px, ${newMouseY}px, 0)`; 
      
      setTimeout(() => {
        (cursorBig.current as HTMLDivElement).style.visibility = 'hidden';
      }, 2000)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('mousemove', positionElement);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', positionElement);
    };
  }, []);

  const handleNavItemClick = (index:any) => {
    handleMouseScroll(index);
  };

  return (
    <>
      {/* <div 
        className="invisible fixed w-[8px] h-[8px] bg-white rounded-full z-20" 
        ref={cursorSmall} 
        style={{transition: '0s'}}
      ></div>
      <div 
        className="invisible fixed w-[60px] h-[60px] bg-white opacity-40 rounded-full z-20" 
        ref={cursorBig} 
        style={{transition: '0.3s ease-out'}}
      ></div> */}
      <div className='fixed w-[5%] h-screen flex flex-col items-center justify-center gap-5 z-50 right-8 opacity-70 hover:opacity-100'>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full border cursor-pointer ${currentIndex === index ? 'bg-white' : ''}`}
            onClick={() => handleNavItemClick(index)}
          >
          </div>
        ))}
      </div>
      <div className='bg-gradient-to-r from-[#0d0d0d] to-50% to-[#303030]'>
        <div className={`fixed top-0 left-0 h-screen flex gap-0 items-strech z-[60] ${!showNav ? 'w-0' : 'w-full md:w-[65%]'}`}>
          <div className='relative w-full h-screen bg-black/80 flex flex-col gap-7 items-center justify-center shadow-2xl shadow-[#bfbebd] z-50'>
            <p className="absolute top-5 right-5 w-10 h-10 md:w-14 md:h-14 text-white text-2xl font-semibold rounded-full bg-white/20 flex items-center justify-center hover:scale-110 cursor-pointer" onClick={() => { setShowNav(false) }}>
              <FontAwesomeIcon icon={faTimes} />
            </p>
            {['Home', 'About Me', 'Skills', 'Projects', 'Education', 'Contact Me'].map((link, index) => (
              <p key={index} className={`relative text-white font-semibold tracking-[2px] z-30 uppercase pb-1.5 overflow-hidden cursor-pointer myLink ${currentIndex === index ? 'font-bold text-xl md:text-2xl activeNav' : 'text-xl hover:scale-105'} ${!showNav ? 'hidden' : 'block'}`} onClick={() => handleMouseScroll(index)} style={mainHeadingStyles}>{link}</p>
            ))}
          </div>
        </div>
        <div className={`fixed right-0 top-0 h-screen z-[59] bg-gradient-to-r from-black/70 via-90% to-black/40 ${!showNav ? 'w-0' : 'w-0 md:w-[35%]'}`}></div>
        <p className={`z-20 fixed text-white text-xl font-semibold rounded-full bg-white/30 flex items-center justify-center hover:scale-110 cursor-pointer ${showNavButton ? 'w-12 h-12 md:w-14 md:h-14 top-7 left-7' : 'w-0 h-0 top-0 left-0'}`} onClick={() => { setShowNav(true) }}>
          <FontAwesomeIcon icon={faBars} className={`${showNavButton ? 'block' : 'hidden'} w-5 h-5 md:w-6 md:h-6`} />
        </p>
        <section ref={(ref) => sectionRefs.current[0] = ref as HTMLDivElement}>
          <Hero sectionRefs={sectionRefs} showNav={showNav} showNavButton={showNavButton} montserrat={montserrat} mainHeadingStyles={mainHeadingStyles} currentIndex={currentIndex} handleMouseScroll={handleMouseScroll} />
        </section>
        <div className='h-1 bg-white'></div>
        <section ref={(ref) => sectionRefs.current[1] = ref as HTMLDivElement}>
          <About showNav={showNav} mainHeadingStyles={mainHeadingStyles} />
        </section>
        <section ref={(ref) => sectionRefs.current[2] = ref as HTMLDivElement}>
          <Skills showNav={showNav} mainHeadingStyles={mainHeadingStyles} />
        </section>
        <section ref={(ref) => sectionRefs.current[3] = ref as HTMLDivElement}>
          <Project showNav={showNav} mainHeadingStyles={mainHeadingStyles} />
        </section>
        <section ref={(ref) => sectionRefs.current[4] = ref as HTMLDivElement}>
          <Education showNav={showNav} mainHeadingStyles={mainHeadingStyles} />
        </section>
        <section ref={(ref) => sectionRefs.current[5] = ref as HTMLDivElement}>
          <Contact showNav={showNav} mainHeadingStyles={mainHeadingStyles} />
        </section>
        <section className='mx-4 sm:mx-8 py-3 px-2 border-t border-gray-300 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4'>
          <p className='text-gray-100'>Suyash Patalbansi</p>
          <div className='flex flex-col md:flex-row items-center justify-center md:justify-between gap-1 md:gap-4'>
            <Link href="https://github.com/Suyash03022003" target="_blank" className='z-[55] text-gray-100 hover:scale-110 tracking-[1px]'>Github</Link>
            <Link href="https://www.linkedin.com/in/suyash-patalbansi" target="_blank" className='z-[55] text-gray-100 hover:scale-110 tracking-[1px]'>LinkedIn</Link>
            <Link href="https://www.instagram.com/suyashpatalbansi" target="_blank" className='z-[55] text-gray-100 hover:scale-110 tracking-[1px]'>Instagram</Link>
          </div>
          <button className='text-gray-100 z-[55]' onClick={() => handleNavItemClick(0)}>Back To Top</button>
        </section>
      </div>
    </>
  );
}
