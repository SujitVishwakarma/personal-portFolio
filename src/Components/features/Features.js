import React from 'react'
import {AiFillAppstore} from "react-icons/ai"
import {FaMobile, FaGlobe,FaBars} from "react-icons/fa"
import {SiProgress, SiAntdesign} from "react-icons/si"
import Title from '../layouts/Title'
import Card from './Card'

const Features = () => {
  return (
    <section id='features' 
    className='w-full pb-20 border-b-[1px] border-b-black'
    >
    <Title title='Features' des="What I Do"/>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
      <Card 
        title="Business Strategy"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores."
        icon={<FaBars/>}
      />
      <Card
        title="App developemt"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores."
        icon={<AiFillAppstore/>}
      />
      <Card
        title="SEO Optimation"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores."
        icon={<SiProgress/>}
      />
      <Card
        title="Mobile Development"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores."
        icon={<FaMobile/>}
      />
      <Card
        title="UI Designer"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores."
        icon={<SiAntdesign/>}
      />
      <Card
        title="Hosting Website"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta est quidem sunt! Ipsa autem odit minima repellendus ab aliquid asperiores."
        icon={<FaGlobe/>}
      />
    </div>
    </section>
  )
}

export default Features
