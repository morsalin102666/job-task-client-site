import { Outlet } from 'react-router-dom'
import './App.css'
import Navebar from './components/Share/Navebar/Navebar'
import Footer from './components/Share/Footer/Footer'

function App() {

  return (
    <>
      <Navebar></Navebar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
