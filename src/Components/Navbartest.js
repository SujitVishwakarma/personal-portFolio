import React from 'react'
import {logo, logo1,profilelogo} from '../../src/assets/index'
import {FiMenu} from "react-icons/fi"
import {MdClose} from "react-icons/md"
import {navLinksdata} from '../constants/index'
import { Link } from 'react-scroll'
import { useState } from 'react'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='w-full h-20 sticky top-0 z-50 bg-bodyColor max-auto flex justify-between items-center font-titleFont border-b-[1px] border-gray-600'>
      <div>
        <img className='w-[3rem]' src={profilelogo} alt='logo'/>
      </div>
      <div>
        <ul className='hidden mdl:inline-flex items-center gap-6 lg:gap-10'>
          {
            navLinksdata.map(({_id, title, link})=>(
              <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
              hover:text-designColor duration-300' key={_id}
              >
                <Link 
                  activeClass='active'
                  to={link}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                {title}
                </Link>
              </li>
            ))
          }
        </ul>
        <span onClick={()=>(!showMenu)} className='text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'>
        <FiMenu/>
        </span>
        {
          showMenu && (
            <div className='w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide'>
              <div></div>
                <span onClick={()=>setShowMenu(false)}
                className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'
                >
                  <MdClose/>
                </span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
