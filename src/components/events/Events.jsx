import React from 'react'
import "./Events.scss"
import Card from './Card'
import { eventData } from './eventsData'
import { useTranslation } from 'react-i18next'
const Events = () => {
  const {t}  = useTranslation('events')
  return (
    <div className='container events py-5 d-flex flex-column gap-3'>
      <div className='d-flex flex-column align-items-center gap-2'>
        <h1>{t('schoolEvents')}</h1>
        <div className="border"></div>
        <div className="border-one"></div>

      </div>
      <div className='cards d-flex flex-wrap  gap-5  '>
      {
        eventData.map((data, index)=>(
          <Card data={data} key={index} index={index} />
        ))
      }
    
      </div>

    </div>
  )
}

export default Events