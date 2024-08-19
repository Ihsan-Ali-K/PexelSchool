import React, { useEffect } from 'react'

import "./ProfessionalStaff.scss"
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const ProfessionalStaff = ({ data, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const controls = useAnimation();
    const [refs, inViews] = useInView({ triggerOnce: false });

    useEffect(() => {
        if (inViews) {
            controls.start({ rotate: 0 });
        } else {
            controls.start({ rotate: -20 });
        }
    }, [controls, inViews]);
  return (
    <div className='container professional py-5 px-2'>
      <div className={`row ${index % 2 !== 0 ? 'flex-row-reverse' : ""} `}>
        <motion.div className='col-md-6 d-flex flex-column justify-content-center gap-2'
          ref={ref}
          initial={{y: 100, opacity: 0 }}
          animate={inView ? {y:0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, }}
        >
          <h1 className='red-rose'>{data.name}  </h1>
          <h3>{data.grade}</h3>
          <p>{data.description}</p>
        </motion.div>
        <div className='col-md-6'>
          <div className='image'>
            <div className='image-container'>

              <motion.img className={`${index % 2 !== 0 ? "imge" : "img"}`} src={data.image} alt={data.name}
              
              ref={refs}
              initial={{ rotate: 0 }}
              animate={controls}
              transition={{ duration: 2, }}
              />
            </div>

          </div>
        </div>

      </div>



    </div>
  )
}

export default ProfessionalStaff