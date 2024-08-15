import React, { useState } from 'react'
import Logo from "../../assets/logo-light.png"
import "./Navbar.css"
import Offcanvas from './Offcanvas'
import { CiMenuFries } from 'react-icons/ci'
import { Button } from 'react-bootstrap'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'



const Navbar = () => {
    const location = useLocation()
    console.log(location.pathname)
    const [showSideBar, setShowSideBar] = useState(false)
    return (
<>
    <div className='Navbar container-fluid'>

        <div className=' d-flex flex-wrap justify-content-between align-items-center '>
            <div className='d-flex '> 
                <img src={Logo} className='image' />
            </div>
            <div className='links d-flex p-4 fs-5  gap-md-3    '>
                <Link to='' className={`${location.pathname === '/'? 'active': ''}`}>Home</Link >
                <Link to='/about'  className={`${location.pathname === '/about'? 'active': ''}`}>About</Link >
                <Link to='events' className={`${location.pathname === '/events'? 'active': ''}`}>Events</Link >
                <Link to='staff' className={`${location.pathname === '/staff'? 'active': ''}`}>Staff</Link >
                <Link to='gallery' className={`${location.pathname === '/gallery'? 'active': ''}`}>Gallery</Link >
                <Link to='contact' className={`${location.pathname === '/contact'? 'active': ''}`}>Contact</Link >
                <Link to='login' className={`${location.pathname === '/login'? 'active': ''}`}>Login</Link >
                <Link to='register' className={`${location.pathname === '/register'? 'active': ''}`}>Register</Link >

            </div>
            <div className='buttons d-none d-md-block d-md-flex gap-2 align-items-center'>
            <div className='social-icons'><IoLogoWhatsapp className='cursor-pointer' size={20} /></div>

            <Button className='button' href='/contact' >
                        Contact Us
                    </Button>
            </div>
            <div className='menu'>
            <CiMenuFries className='i' color='white ' size={30} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" />
            </div>

        </div>

       
    </div>
     <Offcanvas />
     </>
    )
}

export default Navbar