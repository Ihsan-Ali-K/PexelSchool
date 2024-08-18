import React from 'react'
import Image from "../../assets/thanks.jpeg"
import { FaArrowRightLong } from 'react-icons/fa6'

const Card = ({data, index}) => {
  return (
    <div className={`d-flex ${index % 2 !==0 ? 'flex-row-reverse': ""} big-card   flex-wrap  p-1 gap-2 gap-md-5`}>
      
      <div className=' info d-flex flex-column p-1 justify-content-center  gap-md-3'>
         <h2 className='red-rose'>{data.name}</h2>
         <p >{data.description}</p>
         <div className='d-flex align-items-center  icon-link '>
         <button>See More</button><FaArrowRightLong role='button' color='#fea439' />
         </div>
      </div>
      <div className=' image'>
        <img src={data.image} alt='image' />

      </div>
    </div>
  )
}

export default Card