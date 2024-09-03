import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
const Card = ({data}) => {
  const {t} = useTranslation('staff')
  return (
    <div className='position-relative card d-flex flex-column justify-content-between p-1 '>
        <div className='image'>
            <img src={data.image} alt={data.name} />

        </div>
        <h4 >{data.name}</h4>
        <h6>{t(data.position)}</h6>

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