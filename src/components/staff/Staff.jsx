import React from 'react'
import "./Staff.scss"
import Card from './Card'
import { staffData } from './staffData'
const Staff = () => {
  return (
    <div className='container staff py-5 d-flex flex-column gap-5'>
      <div className='d-flex flex-column align-items-center gap-2'>
        <h1><span>Our</span> Professional Staff</h1>
        <div className="border"></div>
        <div className="border-one"></div>

      </div>
      <div  className='cards d-flex justify-content-center flex-wrap'>
        {
          staffData.map((item, index) => (
            <Card data={item} key={index}/>

          ))
        }
      </div>

    </div>
  )
}

export default Staff