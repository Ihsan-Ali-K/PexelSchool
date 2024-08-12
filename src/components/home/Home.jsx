import React from 'react'
import MainCarousel from './MainCarousel'
import "./Home.css"
import About from './About'
import Principal from './Principal'
import ProfessionalStaff from './ProfessionalStaff'
const Home = () => {
  return (
    <div className='container-fluid'>
      <MainCarousel />
      <Principal />
      <About />
      <ProfessionalStaff />
      
    
    </div>
  )
}

export default Home