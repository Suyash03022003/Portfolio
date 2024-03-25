import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';

interface HeroProps {
  sectionRefs: React.MutableRefObject<HTMLDivElement[]>;
  showNav: boolean;
  showNavButton: boolean;
  montserrat: { className: string }; // Assuming className is a string
  mainHeadingStyles: React.CSSProperties;
  currentIndex: number;
  handleMouseScroll: (index: number) => void;
}

const Hero: React.FC<HeroProps> = ({ sectionRefs, showNav, showNavButton, montserrat, mainHeadingStyles, currentIndex,  handleMouseScroll }) => {
  const [isDownButtonHovered, setIsDownButtonHovered] = useState(false);

  return (
    <main id="Hero" className={`relative w-[100%] h-screen flex flex-col-reverse md:flex-row md:items-center pr-[50px] overflow-hidden gap-10 sm:gap-7 ${showNav ? 'blur' : ''}`}>
      <div className="pl-[20px] w-full md:w-[79%] md:h-screen flex flex-col items-start justify-between md:pt-[20px]">
        <div className={`absolute w-full hidden md:flex items-center gap-8 my-5 pl-[40px] ${!showNavButton ? 'visible' : 'invisible'}`}>
          {['Home', 'About Me', 'Skills', 'Projects', 'Education', 'Contact Me'].map((link, index) => (
            <p key={index} className={`relative text-white font-semibold tracking-[2px] z-30 uppercase pb-1.5 overflow-hidden cursor-pointer myLink ${currentIndex === index ? 'font-bold text-xl activeNav' : 'hover:scale-105 text-lg'}`} onClick={() => handleMouseScroll(index)} style={mainHeadingStyles}>{link}</p>
          ))}
        </div>
        <div className='absolute bottom-0 left-0 w-full flex items-center justify-center h-[27vh]'>
          <div
            className='flex items-center justify-center z-[100]'
            id='downButton'
            onMouseEnter={() => setIsDownButtonHovered(true)}
            onMouseLeave={() => setIsDownButtonHovered(false)}
            onClick={() => {
              sectionRefs.current[1].scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            <div className='relative text-3xl cursor-pointer' style={{
              transform: isDownButtonHovered ? 'translateY(10px) scale(0.9, 0.9)' : 'translateY(0)',
              transition: 'transform 0.3s ease-in-out',
            }}>
              <FontAwesomeIcon icon={faChevronDown} className='m-auto absolute top-0 left-0 text-white/70' />
              <FontAwesomeIcon icon={faChevronDown} className='m-auto absolute top-3 left-0 text-white/70' />
            </div>
          </div>
        </div>
        <div className="md:h-screen pl-[40px] w-full pb-[50px] md:py-[80px] flex flex-col items-start justify-end gap-7">
          <div className="relative">
            <div className="absolute top-[-5px] left-[-5px] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
            <div className="absolute top-[-5px] left-[49%] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
            <div className="absolute bottom-[-5px] left-[49%] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
            <div className="absolute top-[40%] left-[-5px] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
            <div className="absolute bottom-[-5px] left-[-5px] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
            <div className="absolute bottom-[-5px] right-[-5px] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
            <div className="absolute top-[40%] right-[-5px] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
            <div className="absolute top-[-5px] right-[-5px] w-2.5 h-2.5 border border-[#000] bg-[#c9c9c9]"></div>
            <button className="text-lg lg:text-xl bg-white text-[#303030] font-extrabold py-1.5 lg:py-2.5 px-6 lg:px-10 tracking-[3px] lg:tracking-[7px] cursor-crosshair">PORTFOLIO</button>
          </div>
          <p id='name' className={`lg:w-1/3 text-white text-[40px] md:text-[50px] lg:text-[70px] font-semibold leading-none tracking-[2px] md:tracking-none ${montserrat.className}`}>SUYASH PATALBANSI</p>
          {/* <p className="text-white text-xl tracking-[9px]">FULL STACK DEVELOPER</p> */}
          <TypeAnimation
            sequence={[
              'FULL STACK WEB DEVELOPER',
              1000,
              '',
              200
            ]}
            speed={50}
            repeat={Infinity}
            className="text-white text-xl lg:text-2xl tracking-[4px]"
            style={mainHeadingStyles}
          />
        </div>
      </div>
      <div className="relative w-[50%] md:w-[30%] lg:w-[18%] h-3/4 lg:h-screen flex items-end lg:items-center ml-[60px] md:ml-0 md:mr-10 lg:mr-24">
        <div className="relative w-full h-[80%] z-10 border-4 border-solid border-white md:rounded-[150px]">
          <img
            src='/assets/profile.jpg'
            alt='ProfilePhoto'
            className="h-full w-full md:rounded-[150px] object-cover"
          />
        </div>

        <div className={`absolute hidden lg:flex gap-3.5 items-center justify-center w-full h-screen`}>
          <div className={`w-[2px] bg-white h-full mr-[1px]`}></div>
          <div className={`w-[2px] bg-white h-full mr-[2px]`}></div>
          <div className={`w-[2px] bg-white h-full mr-[3px]`}></div>
          <div className={`w-[2px] bg-white h-full mr-[4px]`}></div>
          <div className={`w-[2px] bg-white h-full`}></div>
        </div>
      </div>
    </main>
  )
}

export default Hero