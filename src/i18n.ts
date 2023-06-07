import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ru, en } from './i18n/index';
import { LANGS } from 'models';

const [EN] = LANGS;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: EN,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en,
      ru,
    },
  });

export default i18n;
