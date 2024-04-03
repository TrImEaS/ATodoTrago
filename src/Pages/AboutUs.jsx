import { NavLink } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="flex flex-col gap-5 w-3/4 py-10 z-30">
      <p className="underline text-pink-500">
        <h1 className="font-bold text-4xl text-white">
          Julieta y Noel
        </h1>
      </p>
      <p>
        Hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus nam totam quas voluptate dignissimos saepe ex beatae voluptatum omnis pariatur quia harum at, ipsam, quibusdam vero voluptates odit dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque culpa sit minima accusamus, soluta ipsa enim quidem dolorem at, repellat rem minus itaque optio eligendi debitis? Optio eligendi voluptate earum.
      </p>
      <p className="underline text-pink-500">
        <h1 className="font-bold text-3xl text-white">
          ¿De dónde surge la idea?
        </h1>
      </p>
      <p>
        Hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus nam totam quas voluptate dignissimos saepe ex beatae voluptatum omnis pariatur quia harum at, ipsam, quibusdam vero voluptates odit dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque culpa sit minima accusamus, soluta ipsa enim quidem dolorem at, repellat rem minus itaque optio eligendi debitis? Optio eligendi voluptate earum.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aut libero. Veniam dolor earum cupiditate sint voluptates laboriosam nisi illo officiis voluptate, debitis optio repellendus facere quod perferendis, omnis quo.
      </p>
      <p className="underline text-pink-500 flex">
        <span className="font-bold text-3xl text-white">
          Quieres saber más sobre nosotros?
          <span> --{`>`} </span>        
          <NavLink 
            className='font-bold text-3xl hover:text-pink-500 duration-300'
            to={'/contact'}>
            Contáctanos!
          </NavLink>
        </span>
      </p>
      <div className="flex items-center justify-center w-full">
        <img 
        className="rounded-xl"
        src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"/>
      </div>
    </section>
  )
}