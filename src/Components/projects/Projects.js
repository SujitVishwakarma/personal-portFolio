import React from 'react'
import Title from '../layouts/Title'
import ProjectCards from './ProjectCards'
import { projectOne, projectTwo, projectThree} from '../../assets/index'

const Projects = () => {
  return (
    <section
    id='projects'
    className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className=' flex text-center items-center justify-center'>
        <Title
          title='VISIT MY PORTFOLIO TO KEEP YOUR FEEDBACK'
          des='My Projects'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectCards
          title="E-commerce"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores." 
          src={projectOne}
        />
        <ProjectCards
          title="AZZIRO booking App"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores."
          src={projectTwo}
        />
        <ProjectCards
          title="Chating App"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores."
          src={projectThree}
        />
        <ProjectCards
          title="E-Commerce"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores."
          src={projectThree}
        />
        <ProjectCards
          title="React admin "
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores."
          src={projectTwo}
        />
        <ProjectCards
          title="ecommerce"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores."
          src={projectOne}
        />
      </div>
    </section>
  )
}

export default Projects
