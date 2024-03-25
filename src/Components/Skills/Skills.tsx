import React from 'react';
import AnimatedTooltip from "@/Components/ui/animated-tooltip";
import SkillsData from "@/data/SkillsData";

interface SkillsProps {
    mainHeadingStyles: React.CSSProperties;
    showNav: boolean;
}

const Skills: React.FC<SkillsProps> = ({ mainHeadingStyles, showNav }) => {
    return (
        <main id="Skills" className={`w-full overflow-hidden ${showNav ? 'blur' : ''} pb-10 pt-14`}>
            <div className='w-full flex flex-col items-center justify-center gap-8'>
                <div className="w-full flex items-center justify-center gap-5">
                    <div className='w-1/4 h-0.5 bg-white/80'></div>
                    <p className='text-white font-bold text-[35px] tracking-[2px] uppercase' style={mainHeadingStyles}>MY SKILLS</p>
                    <div className='w-1/4 h-0.5 bg-white/80'></div>
                </div>
                <div className="w-1/2 flex flex-wrap items-center gap-7 justify-center py-6">
                    <AnimatedTooltip items={SkillsData} />
                </div>
            </div>
        </main>
    )
}

export default Skills;