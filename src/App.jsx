import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar';

import Footer from './shared/Footer'

function App() {
  return (
    <>
      {/* create components */}
      <Navbar/>
      <main className='mx-3'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App