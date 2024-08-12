import React from 'react'
import "./Offcanvas.css"
import Logo from "../../assets/logo-light.png"
import { Link } from 'react-router-dom'
const Offcanvas = () => {
  
  return (
    <div>

      <div className="offcanvas offcanvas-start" style={{ width: "250px" }} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <img src={Logo} />
          <button type="button" className="btn-close  text-reset" data-bs-dismiss="offcanvas" aria-label="Close"  ></button>
        </div>
        <div className="offcanvas-body ">
          <div className='link d-flex flex-column mt-2'>
          <Link to=''>Home</Link >
                <Link to='about'className="  text-reset" data-bs-dismiss="offcanvas" aria-label="Close" >About</Link >
                <Link to='events' className="  text-reset" data-bs-dismiss="offcanvas" aria-label="Close">Events</Link >
                <Link to='staff' className="  text-reset" data-bs-dismiss="offcanvas" aria-label="Close">Staff</Link >
                <Link to='gallery' className="  text-reset" data-bs-dismiss="offcanvas" aria-label="Close">Gallery</Link >
                <Link to='contact' className="  text-reset" data-bs-dismiss="offcanvas" aria-label="Close">Contact</Link >
                <Link to='login' className="  text-reset" data-bs-dismiss="offcanvas" aria-label="Close">Login</Link >
                <Link to='register' className="  text-reset" data-bs-dismiss="offcanvas" aria-label="Close">Register</Link >
          </div>
          <div className='offcanvas-footer'>
            
            <div className='d-flex'>
              <div ><i className="fa-brands fa-facebook  fa-sm" ></i></div>
              <div className='mx-3'><i className="fa-brands fa-twitter fa-sm"></i></div>
              <div ><i className="fa-brands fa-youtube fa-sm"></i></div>
              <div className='mx-3'><i className="fa-brands fa-pinterest fa-sm"></i></div>
            </div>
            <div className='mt-2'>
              <a href='' >Home</a>
              <a href='' className='mx-2' >About Us</a>
              <a href='' >Contact Us</a>
            </div>

          </div>
        </div>
      </div></div>
  )
}

export default Offcanvas