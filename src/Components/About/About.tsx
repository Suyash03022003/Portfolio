import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface AboutProps {
    showNav: boolean;
    mainHeadingStyles: React.CSSProperties;
}

const About: React.FC<AboutProps> = ({ showNav, mainHeadingStyles }) => {
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
        <main id="AboutMe" className={`w-full overflow-hidden ${showNav ? 'blur' : ''} pb-10 pt-14`}>
          <div className="w-full flex items-center justify-center gap-5">
            <div className='w-1/4 h-0.5 bg-white/80'></div>
            <p className='text-white font-bold text-[35px] tracking-[2px] uppercase' style={mainHeadingStyles}>ABOUT ME</p>
            <div className='w-1/4 h-0.5 bg-white/80'></div>
          </div>
          <div className='w-3/5 m-auto mt-8 flex flex-col items-start gap-3 text-justify'>
            <p className='text-[#f1f1f1] text-xl leading-9 tracking-[1px]'>Hello, I&apos;m <span className='font-semibold text-white text-2xl'>Suyash Sunil Patalbansi</span>, a passionate and enthusiastic Full Stack Web Developer. I thrive on crafting engaging and interactive websites and web applications. My journey in the world of web development is fueled by a relentless curiosity to explore new technologies.</p>
            <p className='text-[#f1f1f1] text-xl leading-9 tracking-[1px] mt-5'>
              <span className='block font-semibold text-white text-2xl text-center mb-2 tracking-[2px]' style={mainHeadingStyles}>My Interests:</span>
              I am very much interested in taking part in hackathons, helping students in clearing their doubts, and in the free time, listening music! I am always eager to stay on the cutting edge, embrace new technologies and trends in the ever-evolving landscape of web development.
            </p>
            <p className='text-[#f1f1f1] text-xl leading-9 tracking-[1px] mt-5'>
              <span className='block font-semibold text-white text-2xl text-center mb-2 tracking-[2px]' style={mainHeadingStyles}>Let&apos;s Connect:</span>
              I&apos;m open to collaborations, learning opportunities, and exciting projects. If you share a passion for technology and innovation, I&apos;d love to connect with you!
            </p>
            <div className='w-full flex items-center justify-between mt-5'>
              <div className='flex items-center gap-6'>
                <button 
                  className="z-20 text-lg bg-white text-[#303030] font-bold py-2 px-9 tracking-[2px] rounded-lg cursor-pointer"
                  onClick={viewResume}
                >
                  <FontAwesomeIcon icon={faEye} /> RESUME
                </button>
              </div>
              <div className='flex items-center gap-4'>
                <a href="https://github.com/Suyash03022003" target="_blank" rel="noopener noreferrer" className='z-20 cursor-pointer w-14 h-14 rounded-full border-2 flex items-center justify-center hover:scale-110'>
                  <FontAwesomeIcon icon={faGithub} className="text-white text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/suyash-patalbansi" target="_blank" rel="noopener noreferrer" className='z-20 cursor-pointer w-14 h-14 rounded-full border-2 flex items-center justify-center hover:scale-110'>
                  <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl" />
                </a>
                <a href="https://www.instagram.com/suyashpatalbansi/" target="_blank" rel="noopener noreferrer" className='z-20 cursor-pointer w-14 h-14 rounded-full border-2 flex items-center justify-center hover:scale-110'>
                  <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </main>
    )
}

export default About;