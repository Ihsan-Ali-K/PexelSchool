import React, { useState } from 'react'
import Logo from "../../assets/logo-light.png"
import "./Navbar.css"
import Offcanvas from './Offcanvas'
import { CiMenuFries } from 'react-icons/ci'
import { Button } from 'react-bootstrap'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next'
import Switcher from './Switcher'


const Navbar = () => {
    const { t } = useTranslation('home')
    const location = useLocation()
    //console.log(location.pathname)
    //const [showSideBar, setShowSideBar] = useState(false)
    return (
        <>
            <div className='Navbar container-fluid'>

                <div className=' d-flex flex-wrap justify-content-between align-items-center '>
                    <Link to='/'>
                        <div className='d-flex '>
                            <motion.img
                                src={Logo} className='image'
                                initial={{ x: -100 }}
                                animate={{ x: 0, }}
                                transition={{ duration: 1, delay: 0.5 }}

                            />
                        </div>
                    </Link>
                    <motion.div className='links d-flex p-4 fs-5  gap-md-3    '
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
                    >
                        <Link to='' className={`${location.pathname === '/' ? 'active' : ''}`}>{t('home')}</Link >
                        <Link to='/about' className={`${location.pathname === '/about' ? 'active' : ''}`}>{t('about')}</Link >
                        <Link to='events' className={`${location.pathname === '/events' ? 'active' : ''}`}>{t('events')}</Link>
                        <Link to='staff' className={`${location.pathname === '/staff' ? 'active' : ''}`}>{t('staff')}</Link >
                        <Link to='gallery' className={`${location.pathname === '/gallery' ? 'active' : ''}`}>{t('gallery')}</Link >
                        <Link to='contact' className={`${location.pathname === '/contact' ? 'active' : ''}`}>{t('contact')}</Link >
                        <Link to='login' className={`${location.pathname === '/login' ? 'active' : ''}`}>{t('login')}</Link >
                        <Link to='register' className={`${location.pathname === '/register' ? 'active' : ''}`}>{t('register')}</Link >

                    </motion.div>
                    <div>

                    </div>
                    <motion.div className='buttons  d-flex gap-md-2 align-items-center px-md-2 justify-content-between'
                        initial={{ x: 100 }}
                        animate={{ x: 0, }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                            <Switcher />

                        <div className='social-icons d-none d-md-flex'>
                            <IoLogoWhatsapp className='cursor-pointer' size={20} />
                        </div>

                    
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