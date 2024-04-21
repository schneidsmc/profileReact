import './App.css'
import Navbar from './components/navbar';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import About from './components/About'
import Footer from './shared/Footer'

function App() {
 

  return (
    <>
      {/* create components */}

      <Navbar/>
      <Home/>
      <About />
      <AboutMe />
      <Footer />


    </>
  )
}

export default App