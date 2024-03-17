import { NavLink, useLocation } from "react-router-dom"
import { FaInstagram, FaWhatsapp, FaCocktail } from 'react-icons/fa'

export default function Nav () {
  const location = useLocation()
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

      {/*Links*/}
      <div className="flex items-center justify-around gap-x-5 w-[700px]">
        <NavLink
          to={'/'}
          className={`${location.pathname === '/' ? 'isActive' : ''} h-8 border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
          Home
        </NavLink>

        <NavLink
          to={'/tragos'}
          className={`${location.pathname === '/tragos' ? 'isActive' : ''} h-8 border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
          Tragos
        </NavLink>

        <NavLink
          to={'/eventos'}
          className={`${location.pathname === '/shots' ? 'isActive' : ''} h-8 border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
          Eventos
        </NavLink>

        <NavLink
          to={'/sin_alcohol'}
          className={`${location.pathname === '/sin_alcohol' ? 'isActive' : ''} h-8 border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
          Sin alcohol
        </NavLink>

        <NavLink
          to={'/sobre_nosotros'}
          className={`${location.pathname === '/sobre_nosotros' ? 'isActive' : ''} h-8 border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
          Sobre nosotros
        </NavLink>

        <NavLink
          to={'/contacto'}
          className={`${location.pathname === '/contacto' ? 'isActive' : ''} h-8 border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
          Contacto
        </NavLink>

        {/*Social Icons*/}
        <a 
          href="https://www.instagram.com/a_todotrago"
          target="blank"
          className="text-2xl hover:text-pink-500 hover:border-pink-500 duration-300">
          <FaInstagram/>
        </a>

        <a 
          href="https://api.whatsapp.com/send/?phone=1128197582&text&type=phone_number&app_absent=0"
          target="blank"
          className="text-2xl hover:text-pink-500 hover:border-pink-500 duration-300">
          <FaWhatsapp/>
        </a>
      </div>

    </section>
  )
}
          {/* <section id="logo" className="group border-2 w-[119px] h-[119px] rounded-full hover:border-pink-500 duration-500">
            <div className="group flex flex-col w-[120px] h-[120px] gap-1 items-center justify-center border-2 rounded-full font-logo hover:border-pink-500 duration-500">
              <i className="text-2xl group group-hover:text-pink-500 duration-500">
                <FaCocktail/>
              </i>
              <i className="group-hover:text-pink-500 duration-500">
                A todo trago
              </i>
            </div>
          </section> */}