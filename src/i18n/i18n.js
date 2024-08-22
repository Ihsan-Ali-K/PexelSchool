import i18n from 'i18next'
import languagedetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next";
import home_en from "./en/home.json";
import home_fr from "./fr/home.json"
import about_en from "./en/about.json"
import about_fr from "./fr/about.json"
i18n 
.use(languagedetector)
.use(initReactI18next)
.init({
    debug: true,
    lng: "en",
    resources:{
        en:{
            home: home_en,
            about: about_en,
        },
        fr:{
            home: home_fr,
            about: about_fr
        }
    }
})

