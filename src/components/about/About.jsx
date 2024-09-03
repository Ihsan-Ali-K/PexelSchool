import React from 'react'
import "./About.scss"
import Image from "../../assets/about-us.jpg"
import mardis from "../../assets/mardis-7.jpg"
import { useTranslation } from 'react-i18next'
const About = () => {
  const {t} = useTranslation('about')
  return (
    <>
      <div className='container-fluid about-us '>
        <div className='position-relative image'>
          <img src={Image} />
          <div className=" text position-absolute top-0 d-flex align-items-center justify-content-center flex-column gap-1 ">
            <h2 className='text-center pt-5 pt-md-0'><span>About</span> Le Groupe Scolaire LEPEX</h2>
            <div className='border'></div>
            <div className='border-1'></div>


          </div>
        </div>


      </div>
      <div className='container mt-2'>
        <div className='d-flex  flex-wrap p-2 '>

          <div className='col-md-6 d-flex flex-column justify-content-center '>
            <h2 className=' pt-5 pt-md-0'><span>{t('our')}</span>{t('firsttitle')} </h2>
            <div className='border-1'></div>
            <p className='mt-2 flex-wrap p-1'>{t('ourIdentity')}</p>
          </div>
          <div className='col-md-6 inner-image'>
            <img src={mardis} alt='about-image' />

          </div>
        </div>
        <div className='p-2'>
        <h2 className=' pt-5 pt-md-0'><span>{t('our')} </span> {t('secondTitle')} </h2>
        <div className='border-1'></div>
          <p className=''>{t('ourMission')}

          </p>
        </div>

      </div>
    </>
  )
}

export default About




