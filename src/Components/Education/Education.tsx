import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import EducationData from './../../data/EducationData';
import Image from 'next/image'

interface EducationProp {
    mainHeadingStyles: React.CSSProperties;
    showNav: boolean;
}

const Education: React.FC<EducationProp> = ({ mainHeadingStyles, showNav }) => {
    return (
        <main id="Education" className={`w-full overflow-hidden ${showNav ? 'blur' : ''} pb-10 pt-14`}>
            <div className='w-full flex flex-col items-center justify-center gap-8'>
                <div className="w-full flex items-center justify-center gap-5">
                    <div className='w-1/4 h-0.5 bg-white/80'></div>
                    <p className='text-white font-bold text-[35px] tracking-[2px] uppercase' style={mainHeadingStyles}>EDUCATION</p>
                    <div className='w-1/4 h-0.5 bg-white/80'></div>
                </div>
            </div>
            <div className='w-full lg:w-4/5 px-6 lg:px-0 m-auto mt-14 flex flex-wrap items-center justify-center gap-10'>
                {
                    EducationData.map(( data, index ) => (
                        <div className='flex items-center gap-6' key={index}>
                            <AcademicCapIcon className="h-8 w-8 text-gray-300" />
                            <div className='flex flex-col'>
                                <p className='text-sm text-gray-400'>{data.year}</p>
                                <p className='text-gray-200 text-xl font-semibold pt-1'>{data.degree}</p>
                                <p className='text-gray-300'>{data.college}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-full flex justify-center items-start px-10 pb-10 pt-20'>
                <Image src='/assets/bit.jpg' alt='' className='w-full md:w-2/3 xl:w-3/5 h-60 object-cover rounded-[10px]' width={1200} height={300} />
            </div>
        </main>
    )
}

export default Education;