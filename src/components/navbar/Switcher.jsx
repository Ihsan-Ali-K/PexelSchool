import { changeLanguage } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Switcher = () => {
    const { i18n } = useTranslation()
    const languages = [
        {
            code: "en", lang: "English"
        },
        {
            code: "fr", lang: "French"
        }
    ]
    const handleChange = (e) => {
        
        i18n.changeLanguage(e.target.value)
    }
    return (
        <div className='switcher'>
            <select onChange={handleChange}>

            {languages.map((item, index) => (
                <option key={item.code}   value={item.code} >{item.lang}</option>
                
                //<button key={item.code} onClick={() => handleChange(item.code)}>{item.lang}</button>
            ))}
            </select>
        </div>
    )
}

export default Switcher