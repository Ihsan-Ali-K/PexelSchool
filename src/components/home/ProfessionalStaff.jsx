import React from 'react'

import "./ProfessionalStaff.scss"

const ProfessionalStaff = ({data, index}) => {
  return (
    <div className='container professional py-5 px-2'>
        <div className={`row ${index % 2 !==0 ? 'flex-row-reverse': ""} `}>
            <div className='col-md-6 d-flex flex-column justify-content-center gap-2'>
                <h1 className='red-rose'>{data.name}  </h1>
                <h3>{data.grade}</h3>
                <p>{data.description}</p>
            </div>
            <div className='col-md-6'>
               <div className='image'>
                <div className='image-container'>

               <img className={`${index % 2 !== 0 ? "imge" : "img"}`} src={data.image} alt={data.name} />
                </div>

               </div>
            </div>

        </div>

        

    </div>
  )
}

export default ProfessionalStaff