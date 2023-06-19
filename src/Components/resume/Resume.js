import React, { useState } from 'react'
import Title from '../layouts/Title'
import ResumeCards from './ResumeCards'
import Education from './Education'
import Skills from './Skills'
import Achivements from './Achivements'
import Experience from './Experience'

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillsData, setskillsData] = useState(false);
    const [experienceData, setexperienceData] = useState(false);
    const [achivementsData, setachivementsData] = useState(false);

    return (
        <section
            id='resume'
            className='w-full py-20 border-b-[1px] border-b-black'
        >
            <div className=' flex text-center items-center justify-center'>
                <Title
                    title='2 MONTHS OF EXPERIENCE'
                    des='My Resume'
                />
            </div>
            <div>
                <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                    <li 
                    onClick={()=>
                    setEducationData(true) &
                    setskillsData(false) &
                    setexperienceData(false) &
                    setachivementsData(false)
                    } 
                    className='resumeLi'>Education</li>

                    <li onClick={()=>
                    setEducationData(false)& 
                    setskillsData(true) &
                    setexperienceData(false) & 
                    setachivementsData(false) 
                    } className='resumeLi'>Professional Skills</li>

                    <li onClick={()=>
                    setskillsData(false) & 
                    setEducationData(false) & 
                    setexperienceData(true) &
                    setachivementsData(false)
                    } 
                    className='resumeLi'>Experience</li>
                    <li onClick={()=>
                    setEducationData(false)& 
                    setexperienceData(false) & 
                    setskillsData(false)& 
                    setachivementsData(true) 
                    } className='resumeLi'>Achivement</li>
                </ul>
            </div>
            {
                educationData && <Education/>
            }
            {
                skillsData && <Skills/>
            }
            {
                experienceData && <Experience/>
            }
            {
                achivementsData && <Achivements/>
            }

        </section>
    )
}

export default Resume
