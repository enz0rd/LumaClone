import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en/global.json'
import pt from './translations/pt/global.json'

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    resources: {
        en: {
            translation: en
        },
        pt: {
            translation: pt
        }
    }
});

export default i18n;