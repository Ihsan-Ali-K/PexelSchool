import React from 'react'
import "./About.css"
const About = () => {

  // const backGroundStyle = {
  //   height: '100vh',
  //   backgroundImage: `url('../../assets/image-three.jpg')`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat'
  // }
  return (
    <div className='container-fluid about' >
       
       <div className='content d-flex flex-column align-items-center  gap-5'>
        <div className='d-flex flex-column gap-2 align-items-center'>
        <h1><span>A</span>bout Us</h1>
        <div className='border'></div>
        <div className='border-1'></div>
        </div>
        <h2>Welcome to The LEPEX school group</h2>
        <p>
        Le Groupe Scolaire LEPEX is a hybrid school offering a learning curriculum in both French and English following the Ivorian and American Texan curricula. Our goal is to offer a fully bilingual school where the children will be well-versed in both languages as English is the most internationally spoken language in the world.</p>
       </div>
    </div>
  )
}

export default About