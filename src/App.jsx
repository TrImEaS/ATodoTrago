import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Home, Error, Drinks, AboutUs, Contact } from './Pages/Routes.jsx'
import Nav from './Components/Nav.jsx'
import Footer from './Components/Footer.jsx'


function App() {

  return (
    <main className='flex flex-col items-center font-body justify-between bg-[#111] text-white min-h-screen min-w-[390px] h-full p-0 m-0 relative'>
      <ScrollToTopOnLocationChange />
      <Nav/>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />

        <Route
        path='/bebidas'
        element={<Drinks/>}>

        </Route>

        <Route
          path='/sobre_nosotros'
          element={<AboutUs/>}
        />
        
        <Route
          path='/contacto'
          element={<Contact/>}
        />


        <Route
          path="*"
          element={<Error/>}
        />
      </Routes>
      <Footer/>
    </main>
  )
}

function ScrollToTopOnLocationChange() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null
}

export default App
