import React from 'react'
import "./About.scss"
import Image from "../../assets/about-us.jpg"
import mardis from "../../assets/mardis-7.jpg"
const About = () => {
  return (
    <>
      <div className='container-fluid about-us '>
        <div className='position-relative image'>
          <img src={Image} />
          <div className=" text position-absolute top-0 d-flex align-items-center justify-content-center flex-column gap-1 ">
            <h2 className='text-center pt-5 pt-md-0'><span>About</span> Le Groupe Scolaire LEPEX</h2>
            <div className='border'></div>
            <div className='border-1'></div>


          </div>
        </div>


      </div>
      <div className='container mt-2'>
        <div className='d-flex  flex-wrap p-2 '>

          <div className='col-md-6 d-flex flex-column justify-content-center '>
            <h2 className=' pt-5 pt-md-0'><span>Our</span> Identity</h2>
            <div className='border-1'></div>
            <p className='mt-2 flex-wrap p-1'>Le Groupe Scolaire LEPEX is a hybrid bilingual school offering a learning curriculum in both French and English following the American Texan and the French Ivorian curricula. Our goal is to offer a fully bilingual school where the children will be well-versed not only linguistically but also academically in both languages as English is the most internationally spoken language in the world.</p>
          </div>
          <div className='col-md-6 inner-image'>
            <img src={mardis} alt='about-image' />

          </div>
        </div>
        <div className='p-2'>
        <h2 className=' pt-5 pt-md-0'><span>Our</span> Mission</h2>
        <div className='border-1'></div>
          <p className=''>
            Education is paramount for any society concerned with ensuring a bright future for its citizens. It is also the foundation of a strong and prosperous nation. This is why responsible states make it a point of honor to equip themselves with reliable education systems while ensuring that they are adapted to existential and development challenges.
            A good education implies a good transmission of values, virtues, and morals, likely to make the child a model and modern citizen, respectful of his neighbor and his environment etc.
            Nowadays, we see the disappearance of many of these values in favor of light morals and equivocal behavior. Faced with this civilizational deterioration, we considered it proper to create this institution whose primary vocation is to do education differently. For us, Education is based on two axes: a modern framework by its vocation and a traditional soul based on the divine virtues of love and sharing.
            The world no longer needs unscrupulous scholars but people who fear God and do His will.
            Let us commit ourselves to making these fragile and delicate little beings the enlightened decision-makers of tomorrow; This is our ambition, our goal, and our credo.
            Aware of our human weakness and limitations, we put all things in God's hands, so that He may make us powerful channels capable of working for a better and peaceful world.

          </p>
        </div>

      </div>
    </>
  )
}

export default About




