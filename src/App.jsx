

import AboutMe from '../components/AboutMe'
import Card from '../components/Card'
import Footer from '../components/Footer'
import FormCard from '../components/FormCard'
import Hero from '../components/Hero'
import Navbarr from '../components/Navbarr'
import Portfolio from '../components/Portfolio'
import Testimonial from '../components/Testimonial'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbarr/>
    <Hero/>
    <Card/>
    <AboutMe/>
    <Portfolio/>
    <Testimonial/>
    <FormCard/>
    <Footer/>

    </>
  )
}

export default App
