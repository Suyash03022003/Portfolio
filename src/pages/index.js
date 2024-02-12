import React, { useState, useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";
import "@fontsource/ysabeau-infant";
import "@fontsource/barlow-condensed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faDownload, faChevronDown, faEye } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { SkillsData } from '../data/SkillsData';
import { SkillsTypeData } from '../data/SkillsTypeData';
import '@fontsource/fira-sans';

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNavButton, setShowNavButton] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDownButtonHovered, setIsDownButtonHovered] = useState(false);
  const cursorSmall = useRef(null)
  const cursorBig = useRef(null)

  const sectionRefs = useRef([]);

  const mainHeadingStyles = {
    fontFamily: "'Barlow Condensed', sans-serif",
  };

  const handleMouseScroll = (index) => {
    sectionRefs.current[index].scrollIntoView({
      behavior: 'smooth',
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

  const positionElement = (e) => {
    if (cursorBig.current && cursorSmall.current) {
      cursorBig.current.style.visibility = 'visible';
      const mouseY = window.scrollY + e.clientY;
      const mouseX = e.clientX;
      cursorSmall.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      
      const newMouseX = mouseX - 30;
      const newMouseY = mouseY - 30;
      cursorBig.current.style.transform = `translate3d(${newMouseX}px, ${newMouseY}px, 0)`; 
      
      setTimeout(() => {
        cursorBig.current.style.visibility = 'hidden';
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

  const handleNavItemClick = (index) => {
    handleMouseScroll(index);
  };

  const viewResume = () => {
    const resumePath = '/assets/Resume.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.target = '_blank'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <div className="absolute w-[8px] h-[8px] bg-white rounded-full z-20" ref={el => cursorSmall.current = el} style={{transition: '0s'}}></div>
      <div className="absolute w-[70px] h-[70px] bg-white opacity-40 rounded-full z-20" ref={el => cursorBig.current = el} style={{transition: '0.2s ease-out'}}></div>
      <div className='bg-gradient-to-r from-[#0d0d0d] to-50% to-[#303030]'>
        <div className={`fixed top-0 left-0 h-screen flex gap-0 items-strech z-30 ${!showNav ? 'w-0' : 'w-full'}`}>
          <div className='relative w-[65%] h-screen bg-black/80 flex flex-col gap-7 items-center justify-center shadow-2xl shadow-[#bfbebd] z-50'>
            <p className="absolute top-5 right-5 w-12 h-12 text-white text-xl font-semibold rounded-full bg-white/20 flex items-center justify-center hover:scale-110" onClick={() => { setShowNav(false) }}><FontAwesomeIcon icon={faTimes} /></p>
            {['Home', 'About Me', 'Skills', 'Education', 'Projects', 'Contact Me'].map((link, index) => (
              <p key={index} className={`relative text-white font-semibold tracking-[2px] z-30 uppercase pb-1.5 overflow-hidden myLink ${currentIndex === index ? 'font-bold text-2xl activeNav' : 'text-xl hover:scale-105'} ${!showNav ? 'hidden' : 'block'}`} onClick={() => handleMouseScroll(index)} style={mainHeadingStyles}>{link}</p>
            ))}
          </div>
          <div className="w-[35%] h-screen bg-gradient-to-r from-black/70 via-90% to-black/40"></div>
        </div>
        <p className={`z-20 fixed text-white text-xl font-semibold rounded-full bg-white/30 flex items-center justify-center hover:scale-110 ${showNavButton ? 'w-14 h-14 top-7 left-7' : 'w-0 h-0 top-0 left-0'}`} onClick={() => { setShowNav(true) }}>
          <FontAwesomeIcon icon={faBars} className={`${showNavButton ? 'block' : 'hidden'} w-6 h-6`} />
        </p>
        <main id="Hero" className={` w-[100%] h-screen flex items-center pr-[50px] overflow-hidden ${showNav ? 'blur' : ''}`} ref={(ref) => sectionRefs.current[0] = ref}>
          <div className="pl-[20px] w-[79%] h-screen flex flex-col items-start justify-between pt-[20px]">
            <div className={`flex items-center gap-8 my-5 pl-[40px] ${!showNavButton ? 'visible' : 'invisible'}`}>
              {['Home', 'About Me', 'Skills', 'Education', 'Projects', 'Contact Me'].map((link, index) => (
                <p key={index} className={`relative text-white font-semibold tracking-[2px] z-30 uppercase pb-1.5 overflow-hidden myLink ${currentIndex === index ? 'font-bold text-xl activeNav' : 'hover:scale-105 text-lg'}`} onClick={() => handleMouseScroll(index)} style={mainHeadingStyles}>{link}</p>
              ))}
            </div>
            <div
              className='absolute bottom-24 flex items-center justify-center left-1/2 z-[100]'
              id='downButton'
              onMouseEnter={() => setIsDownButtonHovered(true)}
              onMouseLeave={() => setIsDownButtonHovered(false)}
              onClick={() => {
                sectionRefs.current[1].scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              <div className='relative top-0 left-1/2 text-3xl' style={{
                transform: isDownButtonHovered ? 'translateY(10px)' : 'translateY(0)',
                transition: 'transform 0.3s ease-in-out',
              }}>
                <FontAwesomeIcon icon={faChevronDown} className='absolute top-0 left-0 text-white/70' />
                <FontAwesomeIcon icon={faChevronDown} className='absolute top-3 left-0 text-white/70' />
              </div>
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
                <button className="text-xl bg-white text-[#303030] font-extrabold py-2.5 px-10 tracking-[7px] cursor-crosshair">PORTFOLIO</button>
              </div>
              <p id='name' className={`w-1/3 text-white text-[80px] font-semibold leading-none ${montserrat.className}`}>SUYASH PATALBANSI</p>
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
                className="text-white text-2xl tracking-[4px]"
                style={mainHeadingStyles}
              />
            </div>
          </div>
          <div className="relative w-[18%] h-screen flex items-center mr-24">
            <div className="relative w-full h-[80%] z-10 border-4 border-solid border-white rounded-[150px]">
              <img
                src='/assets/profile.jpg'
                alt='ProfilePhoto'
                className="h-full rounded-[150px] object-cover"
              />
            </div>

            <div className={`absolute flex gap-3.5 items-center justify-center w-full h-screen`}>
              <div className={`w-[2px] bg-white h-full mr-[1px]`}></div>
              <div className={`w-[2px] bg-white h-full mr-[2px]`}></div>
              <div className={`w-[2px] bg-white h-full mr-[3px]`}></div>
              <div className={`w-[2px] bg-white h-full mr-[4px]`}></div>
              <div className={`w-[2px] bg-white h-full`}></div>
            </div>
          </div>
          <div className='fixed w-[5%] flex flex-col items-center gap-5 z-50 right-8 opacity-70 hover:opacity-100'>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full border ${currentIndex === index ? 'bg-white' : ''}`}
                onClick={() => handleNavItemClick(index)}
              >
              </div>
            ))}
          </div>
        </main>
        <div className='h-1 bg-white'></div>
        <main id="AboutMe" className={`w-full overflow-hidden ${showNav ? 'blur' : ''} pb-10 pt-14`} ref={(ref) => sectionRefs.current[1] = ref}>
          <div className="w-full flex items-center justify-center gap-5">
            <div className='w-1/4 h-0.5 bg-white/80'></div>
            <p className='text-white font-bold text-[35px] tracking-[2px] uppercase' style={mainHeadingStyles}>ABOUT ME</p>
            <div className='w-1/4 h-0.5 bg-white/80'></div>
          </div>
          <div className='w-3/5 m-auto mt-8 flex flex-col items-start gap-3 text-justify'>
            <p className='text-[#f1f1f1] text-xl leading-9 tracking-[1px]'>Hello, I'm <span className='font-semibold text-white text-2xl'>Suyash Sunil Patalbansi</span>, a passionate and enthusiastic Full Stack Web Developer. I thrive on crafting engaging and interactive websites and web applications. My journey in the world of web development is fueled by a relentless curiosity to explore new technologies.</p>
            <p className='text-[#f1f1f1] text-xl leading-9 tracking-[1px] mt-5'>
              <span className='block font-semibold text-white text-2xl text-center mb-2 tracking-[2px]' style={mainHeadingStyles}>My Interests:</span>
              I am very much interested in taking part in hackathons, helping students in clearing their doubts, and in the free time, listening music! I am always eager to stay on the cutting edge, embrace new technologies and trends in the ever-evolving landscape of web development. I'd love to 
            </p>
            <p className='text-[#f1f1f1] text-xl leading-9 tracking-[1px] mt-5'>
              <span className='block font-semibold text-white text-2xl text-center mb-2 tracking-[2px]' style={mainHeadingStyles}>Let's Connect:</span>
              I'm open to collaborations, learning opportunities, and exciting projects. If you share a passion for technology and innovation, I'd love to connect with you!
            </p>
            <div className='w-full flex items-center justify-between mt-5'>
              <div className='flex items-center gap-6'>
                <button 
                  className="text-lg bg-white text-[#303030] font-bold py-2 px-9 tracking-[2px] rounded-lg"
                  onClick={viewResume}
                >
                  <FontAwesomeIcon icon={faEye} /> RESUME
                </button>
                {/* <button 
                  className="text-lg bg-white text-[#303030] font-bold py-2 px-9 tracking-[2px] rounded-lg"
                  onClick={downloadResume}
                >
                  <FontAwesomeIcon icon={faDownload} /> RESUME
                </button> */}
              </div>
              <div className='flex items-center gap-4'>
                <a href="https://github.com/Suyash03022003" target="_blank" rel="noopener noreferrer" className='z-20 cursor-none w-14 h-14 rounded-full border-2 flex items-center justify-center hover:scale-110'>
                  <FontAwesomeIcon icon={faGithub} className="text-white text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/suyash-patalbansi" target="_blank" rel="noopener noreferrer" className='z-20 cursor-none w-14 h-14 rounded-full border-2 flex items-center justify-center hover:scale-110'>
                  <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl" />
                </a>
                <a href="https://www.instagram.com/suyashpatalbansi/" target="_blank" rel="noopener noreferrer" className='z-20 cursor-none w-14 h-14 rounded-full border-2 flex items-center justify-center hover:scale-110'>
                  <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </main>
        <main id="Skills" className={`w-full overflow-hidden ${showNav ? 'blur' : ''} pb-10 mr-[300px]`} ref={(ref) => sectionRefs.current[2] = ref}>
          <div className="w-full flex items-center justify-center gap-5 mt-20">
            <div className='w-1/4 h-0.5 bg-white/80'></div>
            <p className='text-white font-bold text-[35px] tracking-[2px] uppercase' style={mainHeadingStyles}>My Skills</p>
            <div className='w-1/4 h-0.5 bg-white/80'></div>
          </div>
          <div className='w-2/3 m-auto mt-10 flex flex-col items-start gap-7 text-justify'>
            { SkillsTypeData.map((type, typeIndex) => (
              <div className='relative border-4 border-gray-100 w-full py-5 px-5 h-auto rounded-xl flex items-center justify-center flex-wrap bg-white/15'>
                <p className='absolute top-[-18px] left-10 bg-gray-100 text-[#111] font-semibold rounded-lg border-0 py-1 px-5 xl:text-lg'>{type.name}</p>
                { SkillsData.map((data, index) => (
                  <>
                    { data.type === type.name ? 
                      <div key={index} className='w-1/5 xl:w-1/6 h-25 flex flex-col items-center justify-center p-3 gap-1'>
                        <div className='w-full flex justify-center rounded-full p-3'>{data.svg}</div>
                        <p className='text-white text-xl'>{data.name}</p>
                      </div>
                    : <></> }
                  </>
                )) 
                }
              </div>
            ))
            }
          </div>
        </main>
        <main id="Education" className={`w-full overflow-hidden ${showNav ? 'blur' : ''} pb-10`} ref={(ref) => sectionRefs.current[3] = ref}>
          <div className="w-full flex items-center justify-center gap-5 mt-20">
            <div className='w-1/4 h-0.5 bg-white/80'></div>
            <p className='text-white font-bold text-[35px] tracking-[2px] uppercase' style={mainHeadingStyles}>EDUCATION</p>
            <div className='w-1/4 h-0.5 bg-white/80'></div>
          </div>
          <div className='w-4/5 m-auto mt-14 flex items-center gap-3 text-justify'>
            <div className='w-1/2 flex flex-col items-start gap-10'>
              <div className='w-full flex gap-10 items-start'>
                <p className='bg-white w-10 h-10 text-2xl text-[#111] rounded-full flex justify-center items-center font-bold'>1</p>
                <div className='flex flex-col items-start gap-1'>
                    <p className='text-white text-2xl font-bold'>Bajaj Institute of Technology, Wardha</p>
                    <p className='text-white text-xl'>Bachelor of Technology</p>
                    <p className='text-white text-xl'>2020 - 2024</p>
                    <p className='text-white text-xl'><span>CGPA:</span> 8.6</p>
                </div>
              </div>
              <div className='w-full flex gap-10 items-start'>
                <p className='bg-white w-10 h-10 text-2xl text-[#111] rounded-full flex justify-center items-center font-bold'>2</p>
                <div className='flex flex-col items-start gap-1'>
                    <p className='text-white text-2xl font-bold'>School of Scholars, Nagpur</p>
                    <p className='text-white text-xl'>HSC - CBSE</p>
                    <p className='text-white text-xl'>2018 - 2020</p>
                </div>
              </div>
              <div className='w-full flex gap-10 items-start'>
                <p className='bg-white w-10 h-10 text-2xl text-[#111] rounded-full flex justify-center items-center font-bold'>3</p>
                <div className='flex flex-col items-start gap-1'>
                    <p className='text-white text-2xl font-bold'>School of Scholars, Yavatmal</p>
                    <p className='text-white text-xl'>SSC - CBSE</p>
                </div>
              </div>
            </div>
            <div className='w-1/2 flex justify-center items-start'>
              <img src='/assets/bit.jpg' alt='' className='w-full h-60 object-cover rounded-[150px]' />
            </div>
          </div>
        </main>
        <main id="Projects" className={`w-full min-h-screen overflow-hidden ${showNav ? 'blur' : ''} pb-10 px-20`} ref={(ref) => sectionRefs.current[4] = ref}>
          <div className="w-full flex items-center justify-center gap-5 mt-20">
            <div className='w-1/4 h-0.5 bg-white/80'></div>
            <p className='text-white font-bold text-[35px] tracking-[2px] uppercase' style={mainHeadingStyles}>Projects</p>
            <div className='w-1/4 h-0.5 bg-white/80'></div>
          </div>
          <div className='full m-auto mt-10 flex flex-wrap items-strech justify-center text-justify gap-[30px]'>
            <div className='w-[31%] border-2 border-white rounded-2xl cursor-pointer'>
              {/* <div className='w-full h-48 rounded-t-3xl opacity-80'><img src='../../assets/project1.png' className='rounded-t-3xl w-full h-full object-contain hover:scale-110' /></div> */}
              <div className='w-full h-52 overflow-hidden opacity-80 rounded-t-2xl hover:opacity-60'>
                <div className='w-full h-52 rounded-t-2xl hover:scale-110' style={{ backgroundImage: 'url(../../assets/project1.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
              </div>
              <div className='flex flex-col gap-3 items-center py-4'>
                <p className={`font-semibold text-white/90 text-lg text-center tracking-[1px]`} style={{ fontFamily: 'Fira Sans' }}>Placement Preparation Module</p>
              </div>
            </div>
          </div>
        </main>
        <main id="AboutMe" className={`w-[100%] h-screen flex items-center pr-[50px] overflow-hidden ${showNav ? 'blur' : ''}`} ref={(ref) => sectionRefs.current[5] = ref}></main>
      </div>
    </>
  );
}
