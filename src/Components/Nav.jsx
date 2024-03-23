import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa'
import Links from './Links.jsx'

export default function Nav () {
  const [mobileNav, setMobileNav] = useState(false)
  const location = useLocation()
  
  const handleMobileNav = () => setMobileNav(!mobileNav)

  return (
    <section className="flex items-center justify-between w-full h-[150px] px-20 text-lg font-semibold bg-[#111]">
      {/*Logo*/}
      <div className="w-[100px] scale-[2]">
        <NavLink
          to={'/'} 
          className="">
          <img 
            src="./logo.png" 
            className="rounded-full"/>
        </NavLink>
      </div>

      {/*Full screen Nav*/}
      <div className=" max-lg:hidden flex items-center justify-around gap-x-5 w-[700px]">
        <Links/>
      </div>

      {/*Mobile nav*/}
      <div className={`flex flex-col justify-evenly items-start p-7 pl-[60px] border-2 fixed h-[500px] w-[240px] top-[60px] z-[9999] rounded-lg bg-[#111] duration-300
      ${mobileNav ? 'right-[2px]' : 'right-[-250px]'}`}> 
        <FaTimes 
          onClick={handleMobileNav}
          className="absolute cursor-pointer top-[20px] right-[20px] text-2xl"/>
        <Links/>
      </div>

      {/*Mobile nav button*/}
      <button 
        className="text-2xl"
        onClick={handleMobileNav}>
        <FaBars/>
      </button>


    </section>
  )
}