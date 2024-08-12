import React from 'react'
import "./About.scss"
import Image from "../../assets/about-us.jpeg"
const About = () => {
  return (
    <div className='container about-us py-5'>
      <div className='d-flex flex-column align-items-center p-1 gap-2'>
        <h1><span>O</span>ur Identity</h1>
        <div className='border'></div>
        <div className='border-1'></div>
      </div>
      <div className='position-relative image'>
       <img src={Image} />
       <div className="text position-absolute top-50 d-flex flex-column gap-3 ">
        <h1>About Le Groupe Scolaire LEPEX</h1>
        <p >Le Groupe Scolaire LEPEX is a hybrid school offering a learning curriculum in both French and English following the Ivorian and American Texan curricula. Our goal is to offer a fully bilingual school where the children will be well-versed in both languages as English is the most internationally spoken language in the world.</p>

       </div>

      </div>

    </div>
  )
}

export default About