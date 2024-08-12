import React from 'react'
import Image from "../../assets/teacher.jpeg"
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
const Card = () => {
  return (
    <div className='position-relative card d-flex flex-column gap-3 p-1 '>
        <div className='image'>
            <img src={Image} alt='teacher' />

        </div>
        <h3>Name</h3>
        <h3>Teacher</h3>

        <div className='read-more position-absolute bottom-0 end-0'>
            <h6>Read </h6>
            <div className='social-icons p-4 '>
                <h3>Contact</h3>
                <div className="social-icon">

                  <IoLogoWhatsapp className=' ' size={20} />
                </div>
                <div className="social-icon">

                  <FaFacebook className=' ' size={20} />
                </div>
              </div>
        </div>

    </div>
  )
}

export default Card