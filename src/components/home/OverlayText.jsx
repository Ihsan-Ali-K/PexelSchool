import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter';

const OverlayText = () => {
    const { t } = useTranslation('home');
    const start = "Welcome to GROUPE SCOLAIRE LEPEX   "
    const firstLine = t('firstLine');
    const secondLine = t('secondLine');

    return (
        <>
        <div className='overlay-text position-absolute top-50 start-50 translate-middle'>
            <motion.div
                className='appear'
                
                >
                <h1>
                    <Typewriter 
                    words={[start, firstLine, secondLine]}
                    loop={Infinity}
                    cursor
                    cursorStyle='|'
                    cursorColor='black'
                    typeSpeed={60}
                    delaySpeed={1000}
                    deleteSpeed={60}
                    
                    />
                </h1>
            </motion.div>
          
            <p>
                "{t('golden')}" - </p>
            <i>A.P.J. Abdul Kalam</i>
        </div>
                    </>
    );
};

export default OverlayText;
