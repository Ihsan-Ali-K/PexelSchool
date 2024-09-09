import React from 'react'
import "./Offcanvas.scss"
import Logo from "../../assets/logo-light.png"
import { Link } from 'react-router-dom'
import { Offcanvas as BootstrapOffcanvas } from 'bootstrap';
import { useTranslation } from 'react-i18next';
const Offcanvas = () => {

  const {t} = useTranslation('home')

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
            <Link to='' onClick={handleCloseOffcanvas}>{t('home')}</Link >
            <Link to='/about' onClick={handleCloseOffcanvas}>{t('about')}</Link >
            <Link to='events'  onClick={handleCloseOffcanvas} aria-label="Close">{t('events')}</Link >
            <Link to='staff'  onClick={handleCloseOffcanvas} aria-label="Close">{t('staff')}</Link >
            <Link to='gallery'  onClick={handleCloseOffcanvas} aria-label="Close">{t('gallery')}</Link >
            <Link to='contact'  onClick={handleCloseOffcanvas} aria-label="Close">{t('contact')}</Link >
            <Link to='login'  onClick={handleCloseOffcanvas} aria-label="Close">{t('login')}</Link >
            <Link to='register'  onClick={handleCloseOffcanvas} aria-label="Close">{t('register')}</Link >
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