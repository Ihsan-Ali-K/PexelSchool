import React from 'react'
import "./Partners.scss"
import Partner1 from "../../assets/partner-1.jpg"
import Partner2 from "../../assets/partner-2.jpg"
import Partner3 from "../../assets/partner-3.jpg"

const partners= [
    Partner1,
    Partner2,
    Partner3
]

const Partners = () => {
    return (
        <div className='container partners d-flex flex-column gap-1 gap-md-3 py-3 mb-2 px-5'>
            <div className='d-flex flex-column align-items-center gap-1'>
                <h2><span>Our</span> Partners</h2>
                <div className="border-one"></div>

            </div>
            <div className='d-flex justify-content-center gap-3 overflow-x-auto'>
           {
            partners.map((partner, index)=>(
                <div className='images'>
                <img src={partner} alt='image' />
                </div>
            ))
           }
            </div>
        </div>
    )
}

export default Partners