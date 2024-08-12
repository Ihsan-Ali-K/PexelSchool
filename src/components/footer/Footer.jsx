import React from 'react'
import Logo from "../../assets/logo-dark.png"
import "./Footer.css"
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
const Footer = () => {
    return (
        <div className="container-fluid footer p-3 py-4 gap-3">
            <div className='row'>
                <div className='col-md-5 '>
                    <div className='first-column d-flex justify-content-center'>
                        <img src={Logo} alt='logo' color='black' />
                    </div>

                    <div className='d-flex gap-3 justify-content-center'>
                        <div className='social-icons'>

                            <FaFacebook className='cursor-pointer' size={20} />
                        </div>
                        <div className='social-icons'><FaInstagramSquare className='cursor-pointer' size={20} /></div>
                        <div className='social-icons'><IoLogoWhatsapp className='cursor-pointer' size={20} /></div>
                        <div className='social-icons'><FaLinkedin className='cursor-pointer' size={20} /></div>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className='d-flex flex-column gap-2'>
                        <h5>About</h5>
                        <a href='' >About</a>
                        <a href='' >Teachers</a>
                        <a href='' >Gallery</a>
                    </div></div>
                <div className='col-md-3'>
                    <div className='d-flex flex-column gap-2'>
                        <h5>Contact Us</h5>
                        <p>+225 0797010206/+225 2722273123</p>
                        <p>
                            <a href="mailto:info@lepexschool.education">info@lepexschool.education</a>
                        </p>
                        <p>Cocody Riviera Cite Sir, Abidjan, Cote D'Ivoire</p>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className='d-flex flex-column gap-2'>
                        <h5>Resources</h5>
                        <a href=''>Terms and Conditions</a>
                        <a href=''>Privacy Policy</a>
                        <a href=''>Login</a>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center'>© All the rights reserved to The LEPEX school group.</p>
            </div>
           
        </div>
    )
}

export default Footer