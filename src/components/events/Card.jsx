import React from 'react'
import Image from "../../assets/thanks.jpeg"
import { FaArrowRightLong } from 'react-icons/fa6'
import {useTranslation} from "react-i18next"
const Card = ({data, index}) => {
  const {t} = useTranslation('events')
  return (
    <div className={`d-flex ${index % 2 !==0 ? 'flex-row-reverse': ""} big-card   flex-wrap  p-1 justify-content-between`}>
      
      <div className=' info d-flex flex-column p-1 justify-content-center  gap-md-3'>
         <h2 className='red-rose'>{t(data.name)}</h2>
         <p >{t(data.description)}</p>
         <p>{data.writer}</p>
         <div className='d-flex align-items-center  icon-link '>
         <button>{t('seeMore')} </button><FaArrowRightLong role='button' color='#fea439' />
         </div>
      </div>
      <div className=' image'>
        <img src={data.image} alt='image' />

      </div>
    </div>
  )
}

export default Card