import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'; 
import Navlogo from "../src/assets/NavLogo.svg";


const NavigationBar = () => {
  return (
    <>
{/* Navigation Bar */}
    <Navbar  bg="white" expand="lg" className="bg-white container show={show} onHide={handleClose}" >
      <Navbar.Brand className='flex-grow-1' href="#">
        <img src={Navlogo} alt="Logo" height="30" />
        <span className='fs-6'> JohnDev,</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto">
      
          <Nav.Link href="/" className="mx-2 text-primary">Home</Nav.Link>
          <Nav.Link href="#" className="mx-2">Portfolio</Nav.Link>
          <Nav.Link href="#" className="mx-2">About me</Nav.Link>
          <Nav.Link href="#" className="mx-2">Testimonials</Nav.Link>
        </Nav>
        <Nav className="ml-auto align-items-center">
        <Nav.Link href="#" className="p-2">

           <button type="button" className="btn btn-outline-primary"> Contact Me </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default NavigationBar