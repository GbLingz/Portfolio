import React from 'react';
import { Icon } from "@iconify/react";
import DisplayImg1 from '../src/assets/image1.svg'
import DisplayImg2 from '../src/assets/image2.svg'
import DisplayImg3 from '../src/assets/image3.svg'
import '../styles/Testimonial.css'




const Testimonial = () => {
  return (
    <>
    <main  className='container Hero mt-5 mb-5 cardbg'>
      <br /><br /><br />
    <p> Clients Feedback</p>
    <h1> Customers testimonials</h1>

    <div className="container mb-5 mt-5">
  <div className="row">
    <div className="col-sm">
      {/*  First Testimony*/}
    <div className="card p-3 card1">
              <div>
                <h4 className=" text-success mt-3 mb-3"> <Icon icon="ic:baseline-star" />
                <Icon icon="ic:baseline-star" /> 
                <Icon icon="ic:baseline-star" />
                <Icon icon="ic:baseline-star" /> 
                <Icon icon="ic:baseline-star" />
                </h4>
                <p className="hero2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                  Lorem ipsum dolor sit amet.
                </p>

{/* Div for both name, profile picture and post*/}
<div className='d-flex gap-4 mt-4'>

                {/* div for profile picture*/}
                <div>
                <img src={DisplayImg1} style={{ width: '4rem' }} alt="profile-picture"  />
                </div>
                {/* div for name and post */}
                <div>
                <h5> Dianne Rusell</h5>
                <p className='hero2'> Starbucks</p>
                </div>

</div>
              </div>
              </div>
    </div>


{/* Second Testimony */}
    <div className="col-sm">
    <div className="card p-3 card1">
              <div>
                <h4 className=" text-success mt-3 mb-3"> <Icon icon="ic:baseline-star" />
                <Icon icon="ic:baseline-star" /> 
                <Icon icon="ic:baseline-star" />
                <Icon icon="ic:baseline-star" /> 
                <Icon icon="ic:baseline-star" />
                </h4>
                <p className="hero2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                  Lorem ipsum dolor sit amet.
                </p>

{/* Div for both name, profile picture and post*/}
<div className='d-flex gap-4 mt-4'>

                {/* div for profile picture*/}
                <div>
                <img src={DisplayImg2} style={{ width: '4rem' }} alt="profile-picture2"  />
                </div>
                {/* div for name and post */}
                <div>
                <h5>Kristine Watson</h5>
                <p className='hero2'>Louis Vuitton</p>
                </div>

</div>
              </div>
              </div>
    
    </div>


{/* Third Testimony */}
    <div className="col-sm">
     
    <div className="card p-3 card1">
              <div>
                <h4 className=" text-success mt-3 mb-3"> <Icon icon="ic:baseline-star" />
                <Icon icon="ic:baseline-star" /> 
                <Icon icon="ic:baseline-star" />
                <Icon icon="ic:baseline-star" /> 
                <Icon icon="ic:baseline-star" />
                </h4>
                <p className="hero2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                  Lorem ipsum dolor sit amet.
                </p>

{/* Div for both name, profile picture and post*/}
<div className='d-flex gap-4 mt-4'>

                {/* div for profile picture*/}
                <div>
                <img src={DisplayImg3} style={{ width: '4rem' }} alt="profile-picture3"  />
                </div>
                {/* div for name and post */}
                <div>
                <h5> Kathryn Murphy</h5>
                <p className='hero2'> McDonalds</p>
                </div>

</div>
              </div>
              </div>
    </div>
  </div>
</div>
<br />
    </main>

      
    </>
  )
}

export default Testimonial