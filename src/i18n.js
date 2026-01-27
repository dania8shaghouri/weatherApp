import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Weather App",
        city: "Istanbul",
        date: "27 Jan",
        condition: "Cloudy",
        high: "H",
        low: "L",
      },
    },
    ar: {
      translation: {
        title: "تطبيق الطقس",
        city: "اسطنبول",
        date: "27 يناير",
        condition: "غائم",
        high: "الكبرى",
        low: "الصغرى",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
