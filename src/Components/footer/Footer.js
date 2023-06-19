import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import {profilelogo} from '../../assets/index'

import { logo, logo1 } from '../../assets/index'
const Footer = () => {
    return (
        <div id='footer' className='w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-10'>
            <div className='w-full h-full flex flex-col gap-8'>
                <img className='w-32' src={profilelogo} alt='logo' />
                <div className='flex gap-1 md:gap-4'>
                    <span className='bannerIcon'>
                        <FaFacebook />
                    </span>
                    <span className='bannerIcon'>
                        <FaTwitter />
                    </span>
                    <span className='bannerIcon'>
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
            <div className='w-full h-full'>
                <h3 className='text-xl uppercase text-designColor tracking-wider'>
                    Quick Link
                </h3>
                <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 relative cursor-pointer group'>About<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 relative cursor-pointer group'>Portfolio<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 relative cursor-pointer group'>Services<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 relative cursor-pointer group'>Contact<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className='w-full h-full'>
            <h3 className='text-xl uppercase text-designColor tracking-wider'>
                    RESOURCES
                </h3>
                <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 relative cursor-pointer group'>Authentication<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 relative cursor-pointer group'>System Status<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 relative cursor-pointer group'>Terms Of service<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 relative cursor-pointer group'>Pricing<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className='w-full h-full'>
            <h3 className='text-xl uppercase text-designColor tracking-wider'>
                    DEVELOPER
                </h3>
                <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 relative cursor-pointer group'>Documentation<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 relative cursor-pointer group'>Authentication<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 relative cursor-pointer group'>API Refeerence<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 relative cursor-pointer group'>Support<span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
