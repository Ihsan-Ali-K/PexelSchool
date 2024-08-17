import React from 'react'
import Images from "../../assets/room.jpeg"
import "./Gallery.scss"
import { useNavigate } from 'react-router-dom'
import { galleryData } from './galleryData'

const Gallery = () => {
  const navigate = useNavigate();

  const handleNavigate = (data) => {
    navigate('/image-list', {state: {data}} ); 
  };
  return (
    <div className='container gallery py-5 d-flex flex-column gap-3'>
      <div className='d-flex flex-column align-items-start gap-2'>
        <h1>Gallery</h1>
        <div className="border"></div>
        <div className="border-one"></div>

      </div>
      <div className="images d-flex flex-wrap gap-4 justify-content-center cursor-pointer" >
      {
        galleryData.map((item, index) => (
            <div className='position-relative image' role='button' key={index} onClick={()=>handleNavigate(item)}>
              <img src={item.catImage} alt='room' />
              <div className='position-absolute top-0  text'>
                <div className='position-absolute text-center start-50 translate-middle-x bottom-0 '>
                  <p className='title'>{item.category}</p>
                  <p>({item.images.length} Images)</p>
                </div>

              </div>

            </div>
        ))
      }
      </div>


    </div>
  )
}

export default Gallery