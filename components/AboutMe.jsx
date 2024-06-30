import React from 'react'
import AboutMePic from '../src/assets/About Me.svg'

const AboutMe = () => {
  return (
   <>

<section className="d-flex bg-light Hero mt-5 container d-none d-lg-block">
          <div className="col-md-6">
            <img src={AboutMePic} style={{ width: '25rem' }}  alt="John's Profile" className="img-fluid" />
          </div>
      <div className="container">
        <div className="row align-items-center px-1 mx-1 ">
          <div className="col-sm align-items-start text-md-left mt-5">
            <br /><br /><br />
            <p>About</p>
            <h1>About Me</h1> 
            <h6 className='hero2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quaerat placeat eius ratione asperiores, dolor quam. Iste rem mollitia quidem!
            Lorem ipsum dolor sit ang elit.
            </h6>
            <h6 className='hero2'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam praesentium fugit quo.</h6> <br />
            <h6 className='hero2'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam praesentium fugit quo.</h6>
          </div>
        </div>
      </div>
</section>
   
   </>
  )
}

export default AboutMe