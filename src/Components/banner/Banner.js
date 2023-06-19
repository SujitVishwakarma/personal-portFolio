import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import {FaFacebook, FaTwitter,FaLinkedinIn, FaInstagram} from 'react-icons/fa'
import { bannerImg, bannerimg1, bannerimg2 } from '../../assets'




const Banner = () => {
  const [text] = useTypewriter({
    words:["Pofessional coder.","Full Stack Developer.", "UI Designer."],
    loop:true,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000,
  });
  return (
    <section id='home' 
    className='w-full py-20 flex flex-col lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black'
    >
     <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
            <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
            <h1 className='text-5xl font-bold text-white'>
                Hi, I'm
                 <span className='text-designColor capitalize'> Sujit Vishwakarma</span>
            </h1>
            <h2 className='text-4xl font-bold text-white'>
                a <span>{text}</span>
                <cursor
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor="#ff014f"
                />
            </h2>
            <p className='text-base font-bodyFont leading-6 tracking-wide'>
                I use animation as a third by which to simplyfy experience and kuiding thro each and every interaction. i'm not adding motion just to reduce it in ways that
            </p>
        </div>
        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>
            Find me in
          </h2>
          <div className='flex gap-4'>
          <span className='bannerIcon'>
            <FaFacebook/>
          </span>
          <span className='bannerIcon'>
            <FaTwitter/>
          </span>
          <span className='bannerIcon'>
            <FaLinkedinIn/>
          </span><span className='bannerIcon'>
            <FaInstagram/>
          </span>
          
          </div>
        </div>
     </div>
     <div className='w-full lgl:w-1/2 flex justify-center items-center relative'>
      <img
        className='w-[500px] h-[600px] z-10 '
        src={bannerimg2} alt='bannerImg'
        />
        <div className='absolute bottom-0 w-[400px] h-[550px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'>
        </div>

     </div> 
    </section>
  )
}

export default Banner

