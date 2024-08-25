import React from 'react'
import "./Principal.scss"
import PrincipalImage from "../../assets/principal.jpg"
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
const Principal = () => {
  const {t} = useTranslation('home')
  const { ref, inView } = useInView({
    triggerOnce: true, 
     
  });
  return (
    <div className='container principal p-3'>
      <div className='d-flex flex-column align-items-center gap-1 '>
        <motion.h1
          ref={ref}
          initial={{opacity: 0, scale: 0.5}}
          animate={inView ? {opacity: 1, scale: 1} : {opacity: 0}}
          transition={{duration: 1, }}
        
        className='text-center'><span >M</span>{t('messageFromPrincipal')}</motion.h1>
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
          <h2>         Axelle OKA KOCORE (Miss OKA)             </h2>
          <h3>                      Principal/CEO Chairwoman          </h3>
          <p><strong>MSc.Information Technology & Fintech</strong></p>
          <motion.p 
          ref={ref}
          initial={{opacity: 0}}
          animate={inView ? {opacity: 1} : {opacity: 0}}
          transition={{duration: 1, delay: 0.5}}
          >{t('quote')}
          {t('message')}
          </motion.p>
        </div>

      </div>
    </div>
  )
}

export default Principal