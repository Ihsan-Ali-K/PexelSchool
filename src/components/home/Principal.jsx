import React from 'react'
import "./Principal.scss"
import PrincipalImage from "../../assets/principal.jpg"
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
const Principal = () => {
  return (
    <div className='container principal p-3'>
      <div className='d-flex flex-column align-items-center gap-1 '>
        <h1 className='text-center'><span >M</span>essage from Principal</h1>
        <div className='border'></div>
        <div className='border-1'></div>
      </div>
      <div className='row principal-message '>
        <div className='col-md-4 '>
          <div className="position-relative image d-flex justify-content-center ">
            <div className='principal-links postion-absolute'>
              <div className='social-icons  d-flex flex-column p-4 gap-2'>
                <h3>Contact</h3>
                <div className="social-icon">

                  <IoLogoWhatsapp className=' ' size={20} />
                </div>
                <div className="social-icon">

                  <FaFacebook className=' ' size={20} />
                </div>
              </div>

            </div>
            <img src={PrincipalImage} alt='principal' />
          </div>
        </div>
        <div className='col-md-8 d-flex flex-column py-5 gap-2'>
          <h2>                      Axelle OKA Kocor              </h2>
          <h3>                      Principal          </h3>
          <p>“Teaching kids to count is fine, but teaching kids what counts is best.” — Bob Talbert
            As teachers, we have a lot on our shoulders, and yes, that does mean literally teaching kids their ABCs and their 123s. However, the love and kindness, and compassion we show in the classroom every day is going a long way too! It helps our students see the kind of people they can grow up to be!</p>
        </div>

      </div>
    </div>
  )
}

export default Principal