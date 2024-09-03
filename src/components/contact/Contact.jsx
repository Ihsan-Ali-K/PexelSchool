import React from 'react'
import "./Contact.scss"
import { ImLocation } from 'react-icons/im'
import { MdOutlineMail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { LiaFaxSolid } from 'react-icons/lia'
import Forms from './Forms'
import { useTranslation } from 'react-i18next'
const Contact = () => {
  const {t} = useTranslation('contact')
  return (
    <div className='container contact p-5 d-flex flex-column gap-4'>
        <div className='d-flex flex-column  gap-2'>
        <h1><span>{t('get')}</span> {t('contactTitle')}</h1>
        <div className="border"></div>
        <div className="border-one"></div>

      </div>
      <div className='d-flex justify-content-between flex-wrap'>

      
      <div className='d-flex flex-column gap-3'>

    
      <div className='card '>
        <div className="icon" >

      <ImLocation  size={30}/>
        </div>
      
      <p>{t('address')}</p>
      
      </div>
      <div className='card'>
      <div className="icon" >

      <MdOutlineMail size={30} />
      </div>

      <p>{t("email")} </p>
      </div>
      <div className='card'>
      <div className="icon" >

      <FaPhoneAlt size={30} />
      </div>

      <p>{t('phonePrimary') }</p>
      </div>
      <div className='card'>
      <div className="icon" >

      <LiaFaxSolid size={30} />
      </div>

      <p>{t('phoneSecondary')} </p>
      </div>
      </div>
      <div className='d-flex flex-column justify-content-center  '>

      <Forms />
      <button >{t('submitButton')} </button>
      </div>
      </div>
    </div>
  )
}

export default Contact