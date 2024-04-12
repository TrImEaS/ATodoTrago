import DrinkCard from "../Components/DrinkCard"
import drinks from '../Data/drinks.json'

export default function Drinks() {
  return (
    <div className="w-4/5 flex-col min-h-[700px] h-full flex items-center py-10 gap-10">
      <section className="flex flex-col gap-2">
        <h1 className="w-full text-center font-bold text-3xl">
        Carta de bebidas
        </h1>
        <select className="text-black outline-none px-1 py-2 rounded-sm font-bold cursor-pointer">
          <option value="all">Todas</option>
          <option value="shots">Shots</option>
          <option value="virgin">Sin Alcohol</option>
          <option value="tragos">Tragos</option>
        </select>
      </section>
      <section className="flex w-full h-full items-center justify-center flex-wrap gap-10">
        {drinks.map(drink => (
          <DrinkCard
            key={drink.id}
            name={drink.name}
            description={drink.description}
            img={drink.img}
          />
        ))}
      </section>
    </div>
  )
}