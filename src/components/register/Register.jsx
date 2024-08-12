import React from 'react'
import StudentProfile from './StudentProfile'
import "./Register.scss"
import { PiStudentBold } from 'react-icons/pi'
import { FaLaptopMedical } from 'react-icons/fa'
import { FaHandshakeSimple } from 'react-icons/fa6'
import { SiTicktick } from 'react-icons/si'
import MedicalDetails from './MedicalDetails'
import Commitment from './Commitment'
import CompleteForm from './CompleteForm'
import CheckoutStepper from './CheckoutStepper'

const CHECKOUT_STEPS =[
    {
        name:    <PiStudentBold size={30} />,
        Component: StudentProfile,
    },
    {
        name: <FaLaptopMedical size={30} />,
        Component: MedicalDetails 
    },
    {
        name: <FaHandshakeSimple size={30} />,
        Component: Commitment 
    },
    {
        name:  <SiTicktick size={30} />,
        Component: CompleteForm
    },
]


const Register = () => {
  return (
    <div className='container register py-3 d-flex flex-column justify-content-center'>
         <div className='d-flex flex-column align-items-center gap-2'>
        <h1>Register your Ward</h1>
        <div className="border"></div>
        <div className="border-one"></div>

      </div>
       <div className='form-heads'>


   
        <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
      </div> 
   
      
    </div>
  )
}

export default Register