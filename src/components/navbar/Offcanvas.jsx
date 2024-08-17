import React from 'react'
import "./Offcanvas.scss"
import Logo from "../../assets/logo-light.png"
import { Link } from 'react-router-dom'
import { Offcanvas as BootstrapOffcanvas } from 'bootstrap';
const Offcanvas = () => {
  function handleCloseOffcanvas() {
    const offcanvasElement = document.querySelector('.offcanvas');
    const offcanvasInstance = BootstrapOffcanvas.getInstance(offcanvasElement);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }

    // Manually remove the backdrop if needed
    const backdrop = document.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }


  return (
    <div>

      <div className="offcanvas offcanvas-start" style={{ width: "250px" }} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <img src={Logo} />
          <button type="button" className="btn-close  text-reset" data-bs-dismiss="offcanvas" aria-label="Close"  ></button>
        </div>
        <div className="offcanvas-body ">
          <div className='link d-flex flex-column  p-3'>
            <Link to='' onClick={handleCloseOffcanvas}>Home</Link >
            <Link to='/about' onClick={handleCloseOffcanvas}>About</Link >
            <Link to='events'  onClick={handleCloseOffcanvas} aria-label="Close">Events</Link >
            <Link to='staff'  onClick={handleCloseOffcanvas} aria-label="Close">Staff</Link >
            <Link to='gallery'  onClick={handleCloseOffcanvas} aria-label="Close">Gallery</Link >
            <Link to='contact'  onClick={handleCloseOffcanvas} aria-label="Close">Contact</Link >
            <Link to='login'  onClick={handleCloseOffcanvas} aria-label="Close">Login</Link >
            <Link to='register'  onClick={handleCloseOffcanvas} aria-label="Close">Register</Link >
          </div>
          <div className='offcanvas-footer'>


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