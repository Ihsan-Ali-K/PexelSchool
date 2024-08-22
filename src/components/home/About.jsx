import React from 'react'
import "./About.css"
import { useTranslation } from 'react-i18next'
const About = () => {
  const {t} = useTranslation('home')

  // const backGroundStyle = {
  //   height: '100vh',
  //   backgroundImage: `url('../../assets/image-three.jpg')`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat'
  // }
  return (
    <div className='container-fluid about' >
       
       <div className='content d-flex flex-column align-items-center  gap-5'>
        <div className='d-flex flex-column gap-2 align-items-center'>
        <h1><span>A</span>{t('aboutUs')}</h1>
        <div className='border'></div>
        <div className='border-1'></div>
        </div>
        <h2>{t('welcome')}</h2>
        <p>
        {t('description')}</p>
       </div>
    </div>
  )
}

export default About