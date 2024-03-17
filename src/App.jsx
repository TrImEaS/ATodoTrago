import { Routes, Route } from 'react-router-dom'
import { Home, Error } from './Pages/Routes.jsx'
import Nav from './Components/Nav.jsx'

function App() {

  return (
    <main className='flex flex-col items-center font-body justify-between bg-[#111] text-white min-h-screen min-w-[390px] h-full p-0 m-0'>
      <Nav/>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />

        <Route
          path="*"
          element={<Error/>}
        />
      </Routes>
    </main>
  )
}

export default App
