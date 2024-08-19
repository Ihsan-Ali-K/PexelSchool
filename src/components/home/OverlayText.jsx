import { motion } from 'framer-motion'
import React from 'react'

const OverlayText = () => {

    const text = " Have an aim in life, continuously acquire knowledge";
    
    return (
        <div className='overlay-text position-absolute top-50 start-50 translate-middle'>
            <motion.h2 className='appear'
            initial= {{width: 0}}
            animate={{width: "100%"}}
            transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1

            }}
            style={{ 
                whiteSpace: 'nowrap', 
                overflow: 'hidden', 
                borderRight: '2px solid', 
                display: 'inline-block',
                fontSize: '3vw', 
              }}
            >
                {text}
            </motion.h2>
            <p>
                "Never stop fighting until you arrive at your destined place" - </p>
            <i>A.P.J. Abdul Kalam</i>
        </div>
    )
}

export default OverlayText