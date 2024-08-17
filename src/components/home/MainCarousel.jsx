import React, { useEffect, useRef, useState } from 'react'
import "./MainCarousel.scss"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import imageThree from "../../assets/front-sliding-3.jpg"
import imageOne from "../../assets/front-sliding-1.jpg"
import imageTwo from "../../assets/front-sliding-2.jpg"
import imageFour from "../../assets/front-sliding-4.jpg"
import OverlayText from './OverlayText'
const MainCarousel = () => {
  const sliderRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(1);
  const images = [
    imageThree,
    imageOne,
    imageFour,
    imageTwo,
  ];
  const length = images.length;

  const nextSlide = () => {
    setSlideNumber((prev) => {
      const nextSlideNumber = prev === length ? 1 : prev + 1;
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${(nextSlideNumber - 1) * 100}%)`;
      }
      return nextSlideNumber;
    });
  };

  const getFirstSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = 'translateX(0px)';
      setSlideNumber(1);
    }
  };

  const getLastSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${(length - 1) * 100}%)`;
      setSlideNumber(length);
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${(slideNumber - 2) * 100}%)`;
      setSlideNumber((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
  };

  const handleLeftClick = () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    
   
    return () => {
      clearInterval(intervalId);
    };
  }, [slideNumber]);
  return (

    <div className='container-fluid frame d-flex '>

      <div className="position-relative d-flex">
        <div className='icon position-absolute top-50 start-0  translate-middle-y z-index-1' onClick={handleLeftClick}>

          <IoIosArrowDropleftCircle
            size={25}
          />
        </div >

        <div className="slider" ref={sliderRef}>
          {images.map((src, index) => (
            <img key={index} src={src} className="image" alt={`Slide ${index + 1}`} />
          ))}
        </div>
        <div className='icon position-absolute top-50 end-0 translate-middle-y z-index-1' onClick={handleRightClick}>

          <IoIosArrowDroprightCircle
            className=''
            size={25}
          />
        </div>
       
      </div>
      {/* <OverlayText /> */}



    </div>

  )
}

export default MainCarousel