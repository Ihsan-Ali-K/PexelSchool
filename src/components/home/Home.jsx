import React from 'react'
import MainCarousel from './MainCarousel'
import "./Home.css"
import About from './About'
import Principal from './Principal'
import ProfessionalStaff from './ProfessionalStaff'
import { staffData } from './staffData'
import SeeMore from './SeeMore'
import Partners from '../our-partners/Partners'
const Home = () => {
  return (
    <div className='container-fluid'>
      <MainCarousel />
      <Principal />
      <About />
      {
        staffData.map((item,index)=>(
          <ProfessionalStaff data={item} index={index}  />
        ))
      }
      <SeeMore />
      <Partners />
      
    
    </div>
  )
}

export default Home