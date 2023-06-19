import React from 'react'
import { motion } from 'framer-motion'
import ResumeCards from './ResumeCards'

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className='flex flex-col lgl:flex-row w-full gap-20'>
            <div> <div className='py-12 font-titleFont'>
                <p className='text-sm text-designColor tracking-[4px]'>2001 - 2023</p>
                <h2 className='text-4xl font-bold'>Education Quality</h2>
            </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCards
                        title="B.Tech in Electronics & Telecommunication"
                        subTittle="Veer Surendra Sai University Of Technology (2020 - 2024)"
                        des="The traing provided by thre university in order to prepare people to work in various sectors"
                    />
                    <ResumeCards
                        title="Secondary in Science stream"
                        subTittle="Stewart science Collage (2017-2019)"
                        des="The traing provided by thre university in order to prepare people to work in various sectors"
                    />
                    <ResumeCards
                        title="Primary School"
                        subTittle="Modern Public School (2012-2017)"
                        des="The traing provided by thre university in order to prepare people to work in various sectors"
                    />
                </div>
            </div>
            <div className=''> <div className='py-12 font-titleFont'>
                <p className='text-sm text-designColor tracking-[4px]'>2020 - 2023</p>
                <h2 className='text-4xl font-bold'>Job experience</h2>
            </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCards
                        title="Inter at Integrated Test Range(ITR)"
                        subTittle="Defence Research and Development Organisation"
                        des="The traing provided by thre university in order to prepare people to work in various sectors"
                    />
                    <ResumeCards
                        title="Intern at 'NALCO' CPP Divison"
                        subTittle="National Aluminium Company Limited (NALCO, Angul)"
                        des="The traing provided by thre university in order to prepare people to work in various sectors"
                    />
                    <ResumeCards
                        title="Techinal Team Member at ROBOTICS Society"
                        subTittle="Veer Surendra Sai University Of Technology (2021-present)"
                        des="The traing provided by thre university in order to prepare people to work in various sectors"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Education
