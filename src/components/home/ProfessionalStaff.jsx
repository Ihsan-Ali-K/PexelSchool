import React from 'react'
import Staff from "../../assets/staff.jpg"
import "./ProfessionalStaff.scss"
const ProfessionalStaff = () => {
  return (
    <div className='container professional py-5'>
        <div className='row'>
            <div className='col-md-6 d-flex flex-column justify-content-center gap-2'>
                <h1>Haleemat Bamidele Olasunkanmi   </h1>
                <h2>Grade 1</h2>
                <p>I aspire to be a teacher because I believe in the transformative power of education. Witnessing the 'aha' moments in students, guiding them to discover their potential, and fostering a love for learning are incredibly rewarding experiences. I want to be a source of inspiration, providing not just academic knowledge but also valuable life skills. Ultimately, being a teacher allows me to contribute positively to the future by shaping young minds and helping them navigate the world with confidence and curiosity.</p>
            </div>
            <div className='col-md-6'>
               <div className='image'>
                <div className='image-container'>

               <img src={Staff} />
                </div>

               </div>
            </div>

        </div>

    </div>
  )
}

export default ProfessionalStaff