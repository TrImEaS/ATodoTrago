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
      
      <div className="relative group flex">
        <NavLink
          to={'/tragos'}
          className={`${location.pathname === '/tragos' ? 'isActive' : ''} 
          h-8 border-transparent hover:text-pink-500 hover:border-pink-500 duration-300 border-b-2 group`}>
          Bebidas
        </NavLink>
        <ul className="group absolute h-[0px] w-[250px] group-hover:h-auto group-hover:p-5 flex bg-[#111] group-hover:border-2 rounded-3xl rounded-tl-none duration-300 top-[35px] left-[20px] text-base flex-col items-center">
          <li className="h-[30px] group-hover:block hidden">
            <NavLink
              to={'/tragos'}
              className={`${location.pathname === '/tragos?sub_category=subcategoria' ? 'isActive' : ''} 
               border-transparent hover:text-pink-500 duration-300 relative group`}>
              -Subcategoria
            </NavLink>
          </li>

          <li className="h-[30px] group-hover:block hidden">
            <NavLink
              to={'/tragos'}
              className={`${location.pathname === '/tragos?sub_category=subcategoria' ? 'isActive' : ''} 
              border-transparent hover:text-pink-500 duration-300 relative group`}>
              -Subcategoria
            </NavLink>
          </li>

          <li className="h-[30px] group-hover:block hidden">
            <NavLink
              to={'/tragos'}
              className={`${location.pathname === '/tragos?sub_category=subcategoria' ? 'isActive' : ''} 
              border-transparent hover:text-pink-500 duration-300 relative group`}>
              -Subcategoria
            </NavLink>
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