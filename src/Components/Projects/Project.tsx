import React from 'react'
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'
import ProjectsData from './../../data/ProjectsData';

interface ProjectProps {
    showNav: boolean;
    mainHeadingStyles: React.CSSProperties;
}

const Project: React.FC<ProjectProps> = ({ showNav, mainHeadingStyles }) => {
    const [ numberOfProjects, setNumberOfProjects ] = React.useState(4);

    const changeNumberOfProjects = () => {
        if( numberOfProjects === 4 )
            setNumberOfProjects(ProjectsData.length)
        else
            setNumberOfProjects(4);
    }

    return (
        <main id="Skills" className={`w-full overflow-hidden ${showNav ? 'blur' : ''} pb-10 pt-14`}>
            <div className='w-full flex flex-col items-center justify-center px-16'>
                <div className="w-full flex items-center justify-center gap-5">
                    <div className='w-1/4 h-0.5 bg-white/80'></div>
                    <p className='text-white font-bold text-[35px] tracking-[2px] uppercase' style={mainHeadingStyles}>SEE WHAT I HAVE DEVELOPED!</p>
                    <div className='w-1/4 h-0.5 bg-white/80'></div>
                </div>
                <div className='flex flex-wrap justify-center items-stretch gap-10 my-8 pt-8'>
                    {ProjectsData.map((projectData, index) => (
                        index < numberOfProjects &&
                        <CardContainer className="inter-var z-50" key={index}>
                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="z-50 text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {projectData.heading}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="z-50 text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {projectData.desc}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="z-50 text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 py-1.5"
                                >
                                    <span className='font-semibold'>Technologies: </span> {projectData.technologies.join(', ')}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <img
                                        src={projectData.imageLink}
                                        height="1000"
                                        width="1000"
                                        className="z-50 h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className="flex flex-row-reverse justify-between items-center mt-10">
                                    <Link 
                                        href={projectData.githubLink} 
                                        target="__blank"
                                        className=''
                                    >
                                        <CardItem
                                            translateZ={20}
                                            as="button"
                                            className="z-[50] px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-semibold flex items-center justify-center gap-2"
                                        >
                                            <FontAwesomeIcon icon={faGithub} className="text-white text-xl" /> <span>Github</span>
                                        </CardItem>
                                    </Link>
                                    { projectData.link &&
                                        <CardItem
                                            translateZ={20}
                                            as={Link}
                                            href={projectData.link}
                                            target="__blank"
                                            className="z-[50] px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
                                        >
                                            Let&apos;s View →
                                        </CardItem>
                                    }
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
                {
                    numberOfProjects === 4 ? 
                    <p 
                        className='text-gray-300 cursor-pointer'
                        onClick={changeNumberOfProjects}
                    >
                            View More...
                    </p> :
                    <Link 
                        href='https://github.com/Suyash03022003' 
                        className='text-gray-300 cursor-pointer'
                        target='__blank'
                    >
                        View More...
                    </Link>
                }
            </div>
        </main>
    )
}

export default Project