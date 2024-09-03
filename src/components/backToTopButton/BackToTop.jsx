import React, { useEffect, useState } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'
import "./Button.scss"
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])
    return (
        <>
            {isVisible
                &&
                <div className='totop-button'>

                    <FaArrowUpLong size={20} onClick={scrollToTop}/>

                </div>
            }
        </>
    )
}

export default BackToTop