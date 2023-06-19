import React from 'react'
import {motion} from 'framer-motion'
import ResumeCards from './ResumeCards'

const Skills = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className='flex w-full flex-col lgl:flex-row gap-10 lgl:gap-20 '>
                <div className='w-full lgl:w-1/2'> 
                    <div className='py-12 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px]'>Features</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Design Skills</h2>
                </div>
                    <div className='mt-14 w-full flex flex-col gap-6'>
                        <div>
                            <p className='text-sm uppercase font-medium'>Photoshot</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <span className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                    <span className='absolute -top-7 right-0'>100%</span>
                                </span>
                            </span>
                        </div>                       
                        <div>
                            <p className='text-sm uppercase font-medium'>Figma</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <span className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                    <span className='absolute -top-7 right-0'>60%</span>
                                </span>
                            </span>
                        </div>
                        <div>
                            <p className='text-sm uppercase font-medium'>Light Room</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <span className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                    <span className='absolute -top-7 right-0'>70%</span>
                                </span>
                            </span>
                        </div>
                        <div>
                            <p className='text-sm uppercase font-medium'>Design UI</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <span className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                    <span className='absolute -top-7 right-0'>75%</span>
                                </span>
                            </span>
                        </div>
                        
                    </div>
                </div>




                <div className='w-full lgl:w-1/2 '> 
                    <div className='py-12 font-titleFont'>
                        <p className='text-sm text-designColor tracking-[4px]'>Features</p>
                        <h2 className='text-3xl md:text-4xl font-bold'>Development Skills</h2>
                    </div>
                    <div className='mt-14 w-full flex flex-col gap-6'>
                    <div>
                            <p className='text-sm uppercase font-medium'>React</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <span className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                    <span className='absolute -top-7 right-0'>70%</span>
                                </span>
                            </span>
                        </div>
                        <div>
                            <p className='text-sm uppercase font-medium'>Fronted Development</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <span className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                    <span className='absolute -top-7 right-0'>80%</span>
                                </span>
                            </span>
                        </div>
                        <div>
                            <p className='text-sm uppercase font-medium'>Backend</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <span className='w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                    <span className='absolute -top-7 right-0'>50%</span>
                                </span>
                            </span>
                        </div>
                        <div>
                            <p className='text-sm uppercase font-medium'>C++ with DSA</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <span className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative'>
                                    <span className='absolute -top-7 right-0'>60%</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
  )
}

export default Skills


