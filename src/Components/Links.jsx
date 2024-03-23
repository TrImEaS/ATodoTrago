import { NavLink } from "react-router-dom"
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'


export default function Links () {
  return (
    <>
      <NavLink
        to={'/'}
        className={`${location.pathname === '/' ? 'isActive' : ''} h-8 border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
        Home
      </NavLink>

      <NavLink
        to={'/tragos'}
        className={`${location.pathname === '/tragos' ? 'isActive' : ''} h-8  border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
        Tragos
      </NavLink>

      <NavLink
        to={'/eventos'}
        className={`${location.pathname === '/shots' ? 'isActive' : ''} h-8  border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
        Eventos
      </NavLink>

      <NavLink
        to={'/sin_alcohol'}
        className={`${location.pathname === '/sin_alcohol' ? 'isActive' : ''} h-8  border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
        Sin alcohol
      </NavLink>

      <NavLink
        to={'/sobre_nosotros'}
        className={`${location.pathname === '/sobre_nosotros' ? 'isActive' : ''} h-8  border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
        Sobre nosotros
      </NavLink>

      <NavLink
        to={'/contacto'}
        className={`${location.pathname === '/contacto' ? 'isActive' : ''} h-8  border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
        Contacto
      </NavLink>

      {/*Social Icons*/}
      <div className="max-lg:flex gap-10">
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
    </>
  )
}