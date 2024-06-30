import React from 'react'
import { Icon } from "@iconify/react";
import { Navbar, Nav } from 'react-bootstrap'; 
import Navlogo from "../src/assets/NavLogo.svg";
import '../styles/Footer.css'



const Footer = () => {
  return (
    <>
        <Navbar expand="md" className="Footer container" >
      <Navbar.Brand className='flex-grow-1' href="#">
        <img src={Navlogo} alt="Logo" height="30" />
        <span className='fs-6'> JohnDev,</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto">
          <Nav.Link href="#" className="mx-2">Home</Nav.Link>
          <Nav.Link href="#" className="mx-2">Portfolio</Nav.Link>
          <Nav.Link href="#" className="mx-2">About me</Nav.Link>
          <Nav.Link href="#" className="mx-2">Contact</Nav.Link>
          <Nav.Link href="#" className="mx-2">Testimonials</Nav.Link>
          <Nav.Link href="#" className="mx-2">Portfolio </Nav.Link>
        </Nav>
        <Nav className="ml-auto align-items-center">
        <Nav.Link href="#" className="p-2">

            {/* Div for footer icons */}
           <div className='d-flex text-dark justify-content-space-between'>
            <div className='gap-3'>
           <Icon icon="fa6-brands:facebook-f"/>
            </div>

            <div className='gap-3'>
           <Icon icon="teenyicons:instagram-outline"  className='gap-3' />
            </div>

            <div className='gap-3'>
           <Icon icon="mingcute:twitter-fill" />
            </div>

            <div>
           <Icon icon="mdi:linkedin"/>
            </div>
           </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className='container'>
    <hr />
    </div>
      
    </>
  )
}

export default Footer