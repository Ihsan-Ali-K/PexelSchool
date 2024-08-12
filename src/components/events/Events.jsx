import React from 'react'
import "./Events.scss"
import Card from './Card'
const Events = () => {
  return (
    <div className='container events py-5 d-flex flex-column gap-3'>
      <div className='d-flex flex-column align-items-center gap-2'>
        <h1>School Events</h1>
        <div className="border"></div>
        <div className="border-one"></div>

      </div>
      <div className='cards d-flex flex-wrap justify-content-center gap-1'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>

    </div>
  )
}

export default Events