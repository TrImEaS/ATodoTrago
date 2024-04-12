import { FaArrowDown } from 'react-icons/fa'

export default function Contact() {
  return(
    <section className="flex flex-col gap-10 w-3/4 py-10 z-30">
      <div className="flex flex-col gap-2 items-center">
        <div className='flex gap-4 items-center'>
          <FaArrowDown className='text-3xl animate-bounce mt-4'/>
          <h1 className="font-bold text-3xl">
            Dejanos tu mensaje por aqui
          </h1>
          <FaArrowDown className='text-3xl animate-bounce mt-4'/>
        </div>
      </div>
      <form 
        className="flex flex-col gap-5 justify-center items-center text-black">
        <section className="flex flex-col w-full">
          <label 
            className="text-white" 
            htmlFor="name-help">
            Nombre y apellido
          </label>
          <input 
            type="text" 
            className="border-2 border-black p-2 rounded-lg"
            placeholder="Escriba aqui su nombre completo" 
            required/>
        </section>
        
        <section className="flex gap-5 max-sm:flex-col w-full">
          <div className="flex flex-col w-full">
            <label 
              className="text-white" 
              htmlFor="name-help">
              Telefono
            </label>
            <input 
              type="number" 
              className="border-2 border-black p-2 rounded-lg"
              placeholder="Escriba aqui su telefono" 
              required/>
          </div>
          <div className="flex flex-col w-full">
            <label 
              className="text-white" 
              htmlFor="name-help">
              E-mail
            </label>
            <input 
              type="email" 
              className="border-2 border-black p-2 rounded-lg"
              placeholder="Escriba aqui su e-mail" 
              required/>
          </div>
        </section>

        <section className="flex flex-col w-full">
          <label 
            className="text-white" 
            htmlFor="name-help">
            Mensaje
          </label>
          <textarea 
            type="email" 
            placeholder="Escriba aqui su e-mail" rows={6}
            className="border-2 border-black rounded-lg p-2"
            required/>
        </section>
        
          <button className="w-[200px] border-2 py-3 rounded-lg hover:text-black text-white hover:bg-white duration-300">
          Enviar
        </button>
      </form>
    </section>
  )
}