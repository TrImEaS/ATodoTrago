import { NavLink } from "react-router-dom"
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import list from '../Data/list.json'

export default function Links () {
  return (
    <>
      <NavLink
        to={'/'}
        className={`${location.pathname === '/' ? 'isActive' : ''} 
        h-8 border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
        Home
      </NavLink>
      
      {/*bebidas menu*/}
      <div className="relative group flex">
        <NavLink
          to={'/bebidas'}
          className={`${location.pathname === '/bebidas' ? 'isActive' : ''} 
          h-8 border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2 group`}>
          Bebidas
        </NavLink>

        <ul className="group absolute h-[0px] w-[150px] group-hover:h-auto flex flex-col bg-[#111] group-hover:border-4 rounded-xl duration-300 top-[33.5px] left-[20px] text-xl justify-around border-[#FF9BD2] z-[9999] max-lg:hidden">
          <li className="group-hover:flex flex-col hidden">
            <NavLink
              to={'/bebidas/shots'}
              className='border-b-[3px] w-full hover:text-[#FF9BD2] duration-300 relative group pl-3 py-1 border-[#FF9BD2]'>
              Shots
            </NavLink>
            <ul className="text-base flex flex-col h-full">
              {list[0].Shots.map(name => (
                <li 
                  key={name + 1} 
                  className="group-hover:block hidden border-y pl-3 py-1 last:border-b-0 first:border-t-0">
                  <NavLink
                    to={`/bebidas/shots/?search=${name.toLowerCase()}`}
                    className='hover:text-[#FF9BD2] duration-300 relative group'>
                    -{name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li className="group-hover:flex flex-col hidden">
            <NavLink
              to={'/bebidas/sin_alcohol'}
              className='border-y-[3px] hover:text-[#FF9BD2] duration-300 relative group pl-3 py-1 border-[#FF9BD2]'>
              Sin alcohol
            </NavLink>
            <ul className="text-base flex flex-col h-full">
              {list[0]["Sin alcohol"].map(name => (
                <li 
                  key={name + 1} 
                  className="group-hover:block hidden border-y pl-3 py-1 last:border-b-0 first:border-t-0">
                  <NavLink
                    to={`/bebidas/sin_alcohol/?search=${name.toLowerCase()}`}
                    className={`hover:text-[#FF9BD2] duration-300 relative group`}>
                    -{name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li className="group-hover:flex flex-col hidden">
            <NavLink
              to={'/bebidas/tragos'}
              className={`${location.pathname === '/bebidas?sub_category=subcategoria' ? 'isActive' : ''} 
              border-y-[3px] hover:text-[#FF9BD2] duration-300 relative group pl-3 py-1 border-[#FF9BD2]`}>
              Tragos
            </NavLink>
            <ul className="text-base flex flex-col h-full w-full">
              {list[0].Tragos.map(name => (
                <li 
                  key={name + 1} 
                  className="group-hover:block hidden border-y pl-3 py-1 last:rounded-b-0 first:border-t-0">
                  <NavLink
                    to={`/bebidas/tragos/?search=${name}`}
                    className='hover:text-[#FF9BD2] duration-300 relative group'>
                    -{name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <NavLink
        to={'/eventos'}
        className={`${location.pathname === '/shots' ? 'isActive' : ''} 
        h-8  border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
        Eventos
      </NavLink>

      <NavLink
        to={'/sobre_nosotros'}
        className={`${location.pathname === '/sobre_nosotros' ? 'isActive' : ''} 
        h-8  border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
        Sobre nosotros
      </NavLink>

      <NavLink
        to={'/contacto'}
        className={`${location.pathname === '/contacto' ? 'isActive' : ''} 
        h-8  border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2`}>
        Contacto
      </NavLink>

      {/*Social Icons*/}
      <div className="flex max-lg:gap-10 gap-5">
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


       {/*Categories*/}
      {/* <section className="flex flex-col gap-5 px-10 w-4/5 max-sm:w-full">
        <h1 className="font-bold text-3xl w-full">
          Categorias
        </h1>
        <div className="flex justify-evenly gap-20">
          {list.map((categoriesObject) => (
            Object.keys(categoriesObject.categories).map((category) => (
              <ul
                className="flex flex-col" 
                key={category}>
                <NavLink className='hover:text-pink-500 duration-300 text-2xl'>
                  {category}
                </NavLink>
                {categoriesObject.categories[category].map((subcategory) => (
                  <li
                    className="flex flex-col w-full" 
                    key={subcategory}>
                    <NavLink className='hover:text-pink-500 duration-300 text-lg'>
                      -{subcategory}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ))
          ))}
        </div>
      </section> */}