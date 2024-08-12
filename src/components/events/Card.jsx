import React from 'react'
import Image from "../../assets/thanks.jpeg"
import { FaArrowRightLong } from 'react-icons/fa6'

const Card = () => {
  return (
    <div className='card p-1'>
        <div className='image'>
            <img src={Image} />

        </div>
        <h4 className='text-center p-1'>Lepex Welcome Carnival</h4>
        <p className='text-center'>A Joyous celebration to kickstart the acedamic year, filled with games, fun and fun for all students and their families</p>
        <div className='d-flex gap-2 align-items-center justify-content-center'>
        <button>Read more</button>
        <FaArrowRightLong color='#fea439' />
        </div>
    </div>
  )
}

export default Card