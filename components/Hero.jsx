import React from 'react'
import HeroPicture from '../src/assets/HeroPicture.svg'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <>
<section className="bg-light Hero">
      <div className="container">
        <div className="row align-items-center px-1 mx-1 ">
          <div className="col-md-5 align-items-start text-md-left">
            <p>Hey, I am John</p>
            <h1>I develop dynamic and 
            <h1>user-centered Web </h1> 
            <h1>Applications </h1></h1>
            <h6 className='hero2'>My expertise spans both front-end and back-end development, 
            <h6> enabling me to build comprehensive solutions that meet diverse </h6> client needs.</h6>
            <br /> <br />
            <button className="btn1 rounded btn-primary"> Get in Touch
            </button>
          </div>
          <div className="col-md-6">
            <img src={HeroPicture} alt="John's Profile" className="img-fluid" />
          </div>
        </div>
      </div>
</section>

    
    
    </>
  )
}

export default Hero