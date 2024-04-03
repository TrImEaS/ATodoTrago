import { Outlet } from "react-router-dom"
import DrinkCard from "../Components/DrinkCard"

export default function Drinks() {
  return (
    <section className="w-4/5 flex-col min-h-[700px] h-full flex items-center py-10">
      <h1 className="w-full text-center font-bold text-3xl">
        Bebidas
      </h1>
      <div>
        <p className="flex w-full ">
          <span>Shots</span>
        </p>
        <p className="flex w-full ">
          <span>Sin Alcohol</span>
        </p>
        <p className="flex w-full ">
          <span>Tragos</span>
        </p>
      </div>
      <DrinkCard 
        name={'Machu Picchu'} 
        img={'https://www.tragosdelmundo.cl/wp-content/uploads/2020/07/591-sin-título_20200704131937.png'} 
        description={'Un trago de tres colores diferentes, cuya sencilla y divertida preparación no exige ingredientes sofisticados ni la necesidad del uso de una coctelera. Machu Picchu – un rico cóctel elaborado a base de pisco, licor de menta, jugo de naranja y granadina. Sus colores (rojo, naranja y verde) forman en el vaso una bandera del …'}/>
      <Outlet/>
    </section>
  )
}