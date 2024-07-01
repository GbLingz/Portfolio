import React from 'react'
// import { Icon } from "@iconify/react";
// import { Navbar, Nav } from 'react-bootstrap'; 
import FacebookImg from '../src/assets/Facebook.svg'
import InstaImg from '../src/assets/Vector.svg'
import TwitterImg from '../src/assets/Twitter.svg'
import LinkedImg from '../src/assets/LinkedIn.svg'
import Navlogo from "../src/assets/NavLogo.svg";
import '../styles/Footer.css'



const Footer = () => {
  return (
    <>
<footer className="bg-light py-4">
        <main className="container mt-5">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
              <img src={Navlogo} alt="Logo" className="img-fluid" />
              <span className='fs-6'> JohnDev,</span>
            </div>
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <div className="d-flex flex-column flex-lg-row justify-content-center gap-2 gap-lg-4">
                <p className="mb-0" type='button'>Home</p>
                <p className="mb-0" type='button'>Portfolio</p>
                <p className="mb-0" type='button'>AboutMe</p>
                <p className="mb-0" type='button'>Contact</p>
                <p className="mb-0" type='button'>Testimonials</p>
              </div>
            </div>
            <div className="col-12 col-lg-4 text-center text-lg-end">
              <img src={FacebookImg} alt="Facebook" className="mx-2 img-fluid" />
              <img src={InstaImg} alt="Instagram" className="mx-2 img-fluid" />
              <img src={LinkedImg} alt="LinkedIn" className="mx-2 img-fluid" />
              <img src={TwitterImg} alt="Twitter" className="mx-2 img-fluid" />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 d-flex flex-column flex-lg-row justify-content-between align-items-center">
              <div className="text-center text-lg-start mb-3 mb-lg-0">
                <p>Made with 💖 by Gbolahan</p>
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-center gap-2 gap-lg-4 text-center text-lg-end">
                <p className="mb-0">Privacy Policy</p>
                <p className="mb-0">Terms of Service</p>
                <p className="mb-0">Cookies Settings</p>
              </div>
            </div>
            <div className="col-12 text-center mt-3">
              <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
          </div>
        </main>
      </footer>
    </>
  )
}

export default Footer