export default function DrinkCard({ name, img, description }) {
  const baseRouteImg = '../../Drink-Images'

  return (
    <section className="w-[400px] p-3 flex flex-col gap-3 items-center h-[450px] border border-gray-500 rounded-lg">
      <article className="w-full min-h-[45%]">
        <img 
          src={`${baseRouteImg}/${img}`}
          alt={name}
          className="h-full w-full"/>
      </article>
      <article className="w-full">
        <h1 className="text-4xl">
          {name}
        </h1>
      </article>
      <article>
        <p>
          {description}
        </p>
      </article>
    </section>
  )
}