import React from 'react'
import Images from "../../assets/room.jpeg"

const Image = () => {
  return (
    <div className='position-relative image'>
        <img src={Images} alt='room' />
        <div className='position-absolute top-0  text'>
           <div className='position-absolute text-center start-50 translate-middle-x bottom-0 '>
           <p className='title'>School Campus</p>
           <p>Images 0</p>
           </div>

        </div>

    </div>
  )
}

export default Image