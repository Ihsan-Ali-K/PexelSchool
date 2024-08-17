import React from 'react'
import "./SeeMore.scss"
import { Button } from 'react-bootstrap'
const SeeMore = () => {

  return (
    <div className='big-button p-5 d-flex justify-content-center'>
        <Button className='button' href='/staff' >See More</Button>
    </div>
  )
}

export default SeeMore