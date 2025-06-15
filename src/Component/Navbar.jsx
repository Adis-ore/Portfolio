import { BiMenu } from "react-icons/bi"; 
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {

    const [open, setOpen] = useState(false);


  return (
    <div className='bg-[#1C1C1C]  text-white p-3 flex justify-center'>
        <ul className='hidden sm:flex gap-5 text-sm '>
            <NavLink className="flex flex-col items-center gap-" >
                <a href="#home">Home</a>
                <hr className="hidden w-2/3 bg-gray-400 border-none h-[1.5px]" />
            </NavLink>
            <NavLink className="flex flex-col items-center gap-" >
                <a href="">ABOUT</a>
                <hr className="hidden w-2/3 bg-gray-400 border-none h-[1.5px]" />
            </NavLink>
            <NavLink className="flex flex-col items-center gap-" >
                <a href="">PROJECTS</a>
                <hr className="hidden w-2/3 bg-gray-400 border-none h-[1.5px]" />
            </NavLink>
            <NavLink className="flex flex-col items-center gap-" >
                <a href="">CONTACTS</a>
                <hr className="hidden w-2/3 bg-gray-400 border-none h-[1.5px]" />
            </NavLink>
        </ul>
        <div className="sm:hidden flex items-center justify-end w-full">
            <BiMenu onClick={()=> setOpen(true)} className="text-[30px] cursor-pointer" />
        </div>
        <div   className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${
    open ? 'w-64 sm:w-72' : 'w-0'
  }`}
  style={{ transitionProperty: 'width', transitionDuration: '300ms' }}>
            <div>
                <div onClick={()=> setOpen(false)}>
                    <IoIosArrowForward className="text-black"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar