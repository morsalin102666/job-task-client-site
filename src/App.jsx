import { Outlet } from 'react-router-dom'
import './App.css'
import Navebar from './components/Share/Navebar/Navebar'
import Footer from './components/Share/Footer/Footer'

function App() {

  return (
    <>
      <Navebar></Navebar>
      <div className='bg-[#2C2C6C] text-white'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
