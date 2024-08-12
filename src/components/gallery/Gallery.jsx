import React from 'react'
import Image from "./Image"
import "./Gallery.scss"
const Gallery = () => {
  return (
    <div className='container gallery py-5 d-flex flex-column gap-3'>
      <div className='d-flex flex-column align-items-start gap-2'>
        <h1>Gallery</h1>
        <div className="border"></div>
        <div className="border-one"></div>

      </div>
      <div className="images d-flex flex-wrap gap-4 justify-content-center">
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
      </div>

    </div>
  )
}

export default Gallery