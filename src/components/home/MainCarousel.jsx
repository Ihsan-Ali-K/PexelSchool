import React, { useEffect, useRef, useState } from 'react'
import "./MainCarousel.scss"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import imageThree from "../../assets/image-two.jpg"
import imageOne from "../../assets/image-one.jpg"
import imageTwo from "../../assets/carousel-one.jpeg"
import imageFour from "../../assets/carousel-two.jpeg"
import OverlayText from './OverlayText'
const MainCarousel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const images = [
    imageThree,
    imageOne,
    imageFour,
    imageTwo,
  ];
  const length = images.length;
  const nextSlide = () => {
   setSlideNumber(prev=>(prev === length - 1? 0 : prev +1))

  }
  const prevSlide = ()=>{
    setSlideNumber(prev=>(prev === 0 ? length -1 : prev -1))
  }
  useEffect(()=>{
    const intervalId = setInterval(nextSlide, 5000);
    return ()=>{
      clearInterval(intervalId)
    }
  }, [slideNumber])
  return (

    <div className='container-fluid frame d-flex '>

      <div className="position-relative d-flex">
        <div className='icon position-absolute top-50 start-0  translate-middle-y z-index-1' onClick={prevSlide}>

          <IoIosArrowDropleftCircle
            size={25}
          />
        </div >

        <div className="slider" 
        style={{transform: `translateX(-${slideNumber * 100}%)`, transition: 'transform 1s ease-in-out'}}
        >
          {images.map((src, index) => (
            <img key={index} src={src} className="image" alt={`Slide ${index + 1}`} />
          ))}
        </div>
        <div className='icon position-absolute top-50 end-0 translate-middle-y z-index-1' onClick={nextSlide}>

          <IoIosArrowDroprightCircle
            className=''
            size={25}
          />
        </div>
       
      </div>
      <OverlayText />



    </div>

  )
}

export default MainCarousel