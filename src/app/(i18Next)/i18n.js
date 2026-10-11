// i18n.js
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'cookie', 'navigator'],
            caches: ['localStorage', 'cookie'],
        },
        backend: {
            loadPath: `${basePath}/locales/{{lng}}/{{ns}}.json`,
        },
    });

export default i18n;
