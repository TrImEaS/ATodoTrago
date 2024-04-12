import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {
  const navigate = useNavigate()

  return (
    <div className='flex relative flex-col min-h-[600px] justify-between gap-10 py-7 px-3'>

      <div className='z-20 flex flex-col gap-2'>
        <h1 className='text-4xl font-bold'>Error 404</h1>
        <span className='text-xl'>
          Lo sentimos, no hemos encontrado la ruta que estas buscando...
        </span>
      </div>

      <img 
        src="/404-error.jpg"
        className=' bottom-5 w-full h-[500px] rounded-xl'
        />
      <div className='flex items-center justify-center z-20'>
        <button 
          onClick={() => navigate('/')}
          className='border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-black duration-500 font-bold'>
          Volver a home
        </button>
      </div>
    </div>
  )
}