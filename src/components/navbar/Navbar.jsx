import React, { useState } from 'react'
import Logo from "../../assets/logo-light.png"
import "./Navbar.css"
import Offcanvas from './Offcanvas'
import { CiMenuFries } from 'react-icons/ci'
import { Button } from 'react-bootstrap'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import {motion} from "framer-motion"


const Navbar = () => {
    const location = useLocation()
    console.log(location.pathname)
    const [showSideBar, setShowSideBar] = useState(false)
    return (
<>
    <div className='Navbar container-fluid'>

        <div className=' d-flex flex-wrap justify-content-between align-items-center '>
            <div className='d-flex '> 
                <motion.img
                src={Logo} className='image' 
                initial = {{x: -100}}
                animate = {{x: 0, }}
                transition={{duration: 1, delay:0.5 }}

                />
            </div>
            <motion.div className='links d-flex p-4 fs-5  gap-md-3    '
             initial = {{opacity: 0, scale: 0.5 }}
             animate = {{opacity: 1, scale: 1 }}
             transition={{duration: 1, delay:0.5,  ease: [0, 0.71, 0.2, 1.01] }}
            >
                <Link to='' className={`${location.pathname === '/'? 'active': ''}`}>Home</Link >
                <Link to='/about'  className={`${location.pathname === '/about'? 'active': ''}`}>About</Link >
                <Link to='events' className={`${location.pathname === '/events'? 'active': ''}`}>Events</Link >
                <Link to='staff' className={`${location.pathname === '/staff'? 'active': ''}`}>Staff</Link >
                <Link to='gallery' className={`${location.pathname === '/gallery'? 'active': ''}`}>Gallery</Link >
                <Link to='contact' className={`${location.pathname === '/contact'? 'active': ''}`}>Contact</Link >
                <Link to='login' className={`${location.pathname === '/login'? 'active': ''}`}>Login</Link >
                <Link to='register' className={`${location.pathname === '/register'? 'active': ''}`}>Register</Link >

            </motion.div>
            <motion.div className='buttons d-none d-md-block d-md-flex gap-2 align-items-center px-2'
            initial = {{x: 100}}
            animate = {{x: 0, }}
            transition={{duration: 1, delay:0.5 }}
            >
            <div className='social-icons'><IoLogoWhatsapp className='cursor-pointer' size={20} /></div>

            <Button className='button red-rose' href='/contact' >
                        Contact Us
                    </Button>
            </motion.div>
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