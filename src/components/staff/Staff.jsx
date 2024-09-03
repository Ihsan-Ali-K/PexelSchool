import React from 'react'
import "./Staff.scss"
import Card from './Card'
import { staffData } from './staffData'
import { useTranslation } from 'react-i18next'
const Staff = () => {
  const {t} = useTranslation('staff')
  return (
    <div className='container staff py-md-5 py-2 d-flex flex-column gap-5'>
      <div className='d-flex flex-column align-items-center gap-2'>
        <h1 className='text-center'><span>{t('our')}</span>{t('staff')}</h1>
        <div className="border"></div>
        <div className="border-one"></div>

      </div>
      <div  className='cards d-flex justify-content-center gap-4 flex-wrap'>
        {
          staffData.map((item, index) => (
            <Card data={item} key={index}/>

          ))
        }
      </div>

    </div>
  )
}

export default Staff