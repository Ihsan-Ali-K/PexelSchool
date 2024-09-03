import i18n from 'i18next'
import languagedetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next";
import home_en from "./en/home.json";
import home_fr from "./fr/home.json"
import about_en from "./en/about.json"
import about_fr from "./fr/about.json"
import events_en from "./en/events.json"
import events_fr from "./fr/events.json"
import staff_en from "./en/staff.json"
import staff_fr from "./fr/staff.json"
import contact_en from "./en/contact.json"
import contact_fr from "./fr/contact.json"
import register_en from "./en/register.json"
import register_fr from "./fr/register.json"
import gallery_en from "./en/gallery.json"
import gallery_fr from "./fr/gallery.json"
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
            events: events_en,
            staff: staff_en,
            contact: contact_en,
            register: register_en,
            gallery: gallery_en
        },
        fr:{
            home: home_fr,
            about: about_fr,
            events: events_fr,
            staff: staff_fr,
            contact: contact_fr,
            register: register_fr,
            gallery: gallery_fr
        }
    }
})

