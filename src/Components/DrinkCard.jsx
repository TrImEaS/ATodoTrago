export default function DrinkCard({ name, img, description }) {
  return (
    <section className="min-w-[350px] p-1 flex flex-col gap-3 items-center h-[430px] border border-gray-500 rounded-lg">
      <article className="w-full">
        <img 
          src={img}
          alt={name}/>
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