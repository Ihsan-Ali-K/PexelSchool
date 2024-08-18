import React from 'react'
import "./About.scss"
import Image from "../../assets/about-us.jpg"
const About = () => {
  return (
    <>
      <div className='container-fluid about-us '>
        <div className='position-relative image'>
          <img src={Image} />
          <div className=" text position-absolute top-0 d-flex align-items-center justify-content-center flex-column gap-1 ">
            <h2><span>About</span> Le Groupe Scolaire LEPEX</h2>
            <div className='border'></div>
            <div className='border-1'></div>
            <p className='mt-2 px-md-5'>Le Groupe Scolaire LEPEX is a hybrid school offering a learning curriculum in both French and English following the Ivorian and American Texan curricula. Our goal is to offer a fully bilingual school where the children will be well-versed in both languages as English is the most internationally spoken language in the world.</p>

          </div>
        </div>
      </div>
      <div className='container'>
       
      </div>
    </>
  )
}

export default About


{/* <div className='d-flex flex-column align-items-center p-1 gap-2'>
<h1><span>O</span>ur Identity</h1>
<div className='border'></div>
<div className='border-1'></div>
</div>
<div className='position-relative image'>
<img src={Image} />
<div className="container text position-absolute top-50 d-flex flex-column gap-3 ">
<h1>About Le Groupe Scolaire LEPEX</h1>
<p >Le Groupe Scolaire LEPEX is a hybrid school offering a learning curriculum in both French and English following the Ivorian and American Texan curricula. Our goal is to offer a fully bilingual school where the children will be well-versed in both languages as English is the most internationally spoken language in the world.</p>

</div>

</div> */}

