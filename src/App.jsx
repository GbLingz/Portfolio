


import AboutMe from '../components/AboutMe'
import Card from '../components/Card'
import Footer from '../components/Footer'
import FormCard from '../components/FormCard'
import Hero from '../components/Hero'
import MyPortfolio from '../components/MyPortfolio'
import NavigationBar from '../components/NavigationBar'
import Testimonial from '../components/Testimonial'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   
    <NavigationBar/>
    <Hero/>
    <Card/>
    <AboutMe/>
    <MyPortfolio/>
    <Testimonial/>
    <FormCard/>
    <Footer/>

    </>
  )
}

export default App
