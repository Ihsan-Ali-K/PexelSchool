import React from 'react'

import Images from "../../assets/room.jpeg"
import "./Gallery.scss"

import ImageLists from './ImageLists'
import { useNavigate } from 'react-router-dom'
const Gallery = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/image-list'); // Replace '/image-list' with the route you want to navigate to
  };
  return (
    <div className='container gallery py-5 d-flex flex-column gap-3'>
      <div className='d-flex flex-column align-items-start gap-2'>
        <h1>Gallery</h1>
        <div className="border"></div>
        <div className="border-one"></div>

      </div>
      <div  className="images d-flex flex-wrap gap-4 justify-content-center cursor-pointer" role='button' onClick={handleNavigate}>
        <div className='position-relative image'>
          <img src={Images} alt='room' />
          <div className='position-absolute top-0  text'>
            <div className='position-absolute text-center start-50 translate-middle-x bottom-0 '>
              <p className='title'>School Campus</p>
              <p>Images 0</p>
            </div>

          </div>

        </div>
      </div>
      

    </div>
  )
}

export default Gallery