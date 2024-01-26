import React, { useState, useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";
import "@fontsource/ysabeau-infant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import { Link, animateScroll as scroll } from "react-scroll";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [selectedNavItem, setSelectedNavItem] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNavButton, setShowNavButton] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRefs = useRef([]);

  const handleMouseScroll = (index) => {
    scroll.scrollTo(sectionRefs.current[index].offsetTop, {
      smooth: true,
    });
    setCurrentIndex(index);
    setShowNav(false);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    if (window.scrollY > 50) {
      setShowNavButton(true);
    } else {
      setShowNavButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleNavItemClick = (index) => {
    handleMouseScroll(index);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 h-screen flex gap-0 items-strech z-50 ${!showNav ? 'w-0' : 'w-full'}`}>
        <div className='relative w-[65%] h-screen bg-black/90 flex flex-col gap-7 items-center justify-center shadow-2xl shadow-[#bfbebd]'>
          <p className="absolute top-5 right-5 w-12 h-12 text-white text-xl font-semibold rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:scale-110" onClick={() => {setShowNav(false)}}><FontAwesomeIcon icon={faTimes} /></p>
          { ['Home', 'About Me', 'Education', 'Skills', 'Projects', 'Contact Me'].map((link, index) => (
            <p className={`relative cursor-pointer text-white font-semibold tracking-[2px] uppercase text-xl pb-1.5 overflow-hidden ${!showNav ? 'hidden' : 'block'} hover:scale-105 myLink`} style={{ fontFamily: "Ysabeau Infant" }} onClick={() => handleMouseScroll(index)}>{link}</p>
          )) }
        </div>
        <div className="w-[35%] h-screen bg-gradient-to-r from-black/90 via-90% to-black/40"></div>
      </div>
      <div className={`flex gap-10 items-center ${showNavButton ? 'block' : 'hidden'}`}>
        <p className="fixed w-12 h-12 top-5 left-5 text-white text-xl font-semibold rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:scale-110" onClick={() => {setShowNav(true)}}>
          <FontAwesomeIcon icon={faBars} />
        </p>
      </div>
      <main id="Hero" className={`w-[100%] h-screen bg-gradient-to-r from-black to-50% to-[#303030] flex items-center pr-[50px] overflow-hidden ${showNav ? 'blur' : ''}`} ref={(ref) => sectionRefs.current[0] = ref}>
        <div className="pl-[20px] w-[79%] h-screen flex flex-col items-start justify-between pt-[20px]">
          <div className={`flex items-center gap-8 my-5 pl-[40px] ${!showNavButton ? 'visible' : 'invisible'}`}>
            { ['Home', 'About Me', 'Education', 'Skills', 'Projects', 'Contact Me'].map((link, index) => (
              <p key={index} className={`relative cursor-pointer text-white font-semibold tracking-[2px] uppercase text-md pb-1.5 overflow-hidden myLink`} style={{ fontFamily: "Ysabeau Infant" }} onClick={() => handleMouseScroll(index)}>{link}</p>
            )) }
          </div>
          <div className="pl-[40px] w-full py-[80px] flex flex-col items-start justify-end gap-7">
            <div className="relative">
              <div className="absolute top-[-5px] left-[-5px] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
              <div className="absolute top-[-5px] left-[49%] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
              <div className="absolute bottom-[-5px] left-[49%] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
              <div className="absolute top-[40%] left-[-5px] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
              <div className="absolute bottom-[-5px] left-[-5px] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
              <div className="absolute bottom-[-5px] right-[-5px] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
              <div className="absolute top-[40%] right-[-5px] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
              <div className="absolute top-[-5px] right-[-5px] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
              <button className="text-xl bg-white text-[#303030] font-extrabold py-2.5 px-10 tracking-[7px]">PORTFOLIO</button>
            </div>
            <p id='name' className={`w-1/3 text-white text-[80px] font-semibold leading-none ${montserrat.className}`}>SUYASH PATALBANSI</p>
            {/* <p className="text-white text-xl tracking-[9px]">FULL STACK DEVELOPER</p> */}
            <TypeAnimation
              sequence={[
                'FULL STACK DEVELOPER',
                1000,
                '',
                200
              ]}
              speed={50}
              repeat={Infinity}
              className="text-white text-2xl tracking-[7px]"
            />
          </div>
        </div>
        <div className="relative w-[18%] h-screen flex items-center">
          <div className="relative w-full h-[80%] z-40 border-4 border-solid border-white rounded-[150px]">
            <img 
              src='/assets/profile.jpg' 
              alt='ProfilePhoto'
              className="h-full rounded-[150px] object-cover"
            />
          </div>

          <div className="absolute flex gap-3 items-center justify-center w-full h-screen">
            <div className={`w-[2px] bg-white h-full mr-[1px]`}></div>
            <div className={`w-[2px] bg-white h-full mr-[2px]`}></div>
            <div className={`w-[2px] bg-white h-full mr-[3px]`}></div>
            <div className={`w-[2px] bg-white h-full mr-[4px]`}></div>
            <div className={`w-[2px] bg-white h-full`}></div>
          </div>
        </div>
        <div className='w-[5%] flex flex-col gap-5 ml-12'>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div 
              key={index}
              className={`cursor-pointer w-4 h-4 rounded-full border ${currentIndex === index ? 'bg-white' : ''}`}
              onClick={() => handleNavItemClick(index)}
            >
            </div>
          ))}
        </div>
      </main>
      <div className='h-1 bg-white'></div>
      <main id="AboutMe" className={`w-[100%] h-screen bg-gradient-to-l from-black to-50% to-[#303030] flex items-center pr-[50px] overflow-hidden ${showNav ? 'blur' : ''}`} ref={(ref) => sectionRefs.current[1] = ref}></main>
      <div className='h-1 bg-white'></div>
      <main id="AboutMe" className={`w-[100%] h-screen bg-gradient-to-r from-black to-50% to-[#303030] flex items-center pr-[50px] overflow-hidden ${showNav ? 'blur' : ''}`} ref={(ref) => sectionRefs.current[2] = ref}></main>
      <div className='h-1 bg-white'></div>
      <main id="AboutMe" className={`w-[100%] h-screen bg-gradient-to-l from-black to-50% to-[#303030] flex items-center pr-[50px] overflow-hidden ${showNav ? 'blur' : ''}`} ref={(ref) => sectionRefs.current[3] = ref}></main>
      <div className='h-1 bg-white'></div>
      <main id="AboutMe" className={`w-[100%] h-screen bg-gradient-to-r from-black to-50% to-[#303030] flex items-center pr-[50px] overflow-hidden ${showNav ? 'blur' : ''}`} ref={(ref) => sectionRefs.current[4] = ref}></main>
      <div className='h-1 bg-white'></div>
      <main id="AboutMe" className={`w-[100%] h-screen bg-gradient-to-l from-black to-50% to-[#303030] flex items-center pr-[50px] overflow-hidden ${showNav ? 'blur' : ''}`} ref={(ref) => sectionRefs.current[5] = ref}></main>
      <div className='h-1 bg-white'></div>
    </>
  );
}
