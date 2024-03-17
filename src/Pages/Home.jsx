import { NavLink } from "react-router-dom"
import { FaArrowRight } from 'react-icons/fa'

export default function Home () {
  return (
    <section className="min-h-screen w-full h-full">
      {/*Banner*/}
      <div id="banner" className="flex justify-center items-center bg-[#f3f3f3] w-full h-[600px] ">
        <div className="w-3/4 flex flex-col justify-center h-full gap-4">
          <span className="text-6xl">
            Bienvenido
          </span>
          <p className="text-2xl">
            Descubre nuestros tragos
          </p>
          <NavLink
          className={'flex justify-center items-center gap-2 border-2 w-[140px] h-12 rounded-lg hover:bg-white hover:text-black hover:text-lg duration-300'} 
          to={'/tragos'}>
            <span>Tragos</span>
            <FaArrowRight className="mt-[1px]"/>
          </NavLink>
        </div>
      </div>
    </section>
  )
}